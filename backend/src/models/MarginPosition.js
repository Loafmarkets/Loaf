const { initializeDatabase } = require('../config/database');
const logger = require('../utils/logger');
const MarginAccount = require('./MarginAccount');

// Initialize database connection
const db = initializeDatabase();

/**
 * MarginPosition model for managing leveraged positions
 */
class MarginPosition {
  /**
   * Create a new margin position
   * @param {Object} positionData - Position data
   * @returns {Object} Created margin position
   */
  static async create(positionData) {
    try {
      return await db.transaction(async trx => {
        // Get margin account
        const account = await trx('margin_accounts')
          .where({ id: positionData.marginAccountId })
          .first();
        
        if (!account) {
          throw new Error('Margin account not found');
        }
        
        // Calculate required values
        const totalPositionValue = parseFloat(positionData.tokenAmount) * parseFloat(positionData.entryPrice);
        const collateralRequired = totalPositionValue / parseFloat(positionData.leverage);
        const borrowAmount = totalPositionValue - collateralRequired;
        
        // Check if enough collateral is available
        if (parseFloat(account.available_collateral) < collateralRequired) {
          throw new Error('Insufficient collateral');
        }
        
        // Calculate liquidation price (simplified formula)
        // This is a basic calculation - in production you'd want a more sophisticated model
        const maintenanceMargin = 0.05; // 5% maintenance margin
        const liquidationPrice = parseFloat(positionData.entryPrice) * 
          (1 - ((1 - maintenanceMargin) * parseFloat(positionData.leverage)) / (parseFloat(positionData.leverage) - 1));
        
        // Create position
        const [position] = await trx('margin_positions')
          .insert({
            margin_account_id: positionData.marginAccountId,
            user_id: positionData.userId,
            token_id: positionData.tokenId,
            property_id: positionData.propertyId,
            token_amount: positionData.tokenAmount,
            entry_price: positionData.entryPrice,
            current_price: positionData.entryPrice,
            leverage: positionData.leverage,
            liquidation_price: liquidationPrice,
            collateral_amount: collateralRequired,
            borrowed_amount: borrowAmount,
            interest_rate: account.interest_rate + ((parseFloat(positionData.leverage) - 1) * 0.01), // Base rate + 1% per leverage level
            last_interest_applied: new Date(),
            status: 'open',
            created_at: new Date(),
            updated_at: new Date()
          })
          .returning('*');
        
        // Update margin account
        await trx('margin_accounts')
          .where({ id: positionData.marginAccountId })
          .update({
            available_collateral: db.raw('available_collateral - ?', [collateralRequired]),
            borrowed_funds: db.raw('borrowed_funds + ?', [borrowAmount]),
            updated_at: new Date()
          });
        
        // Create transaction records
        await trx('margin_transactions')
          .insert({
            user_id: positionData.userId,
            margin_account_id: positionData.marginAccountId,
            margin_position_id: position.id,
            type: 'open_position',
            amount: totalPositionValue,
            metadata: JSON.stringify({
              tokenId: positionData.tokenId,
              tokenAmount: positionData.tokenAmount,
              entryPrice: positionData.entryPrice,
              leverage: positionData.leverage,
              collateralAmount: collateralRequired,
              borrowedAmount: borrowAmount
            }),
            status: 'completed',
            created_at: new Date(),
            updated_at: new Date()
          });
        
        return position;
      });
    } catch (error) {
      logger.error(`Error creating margin position: ${error.message}`);
      throw error;
    }
  }

  /**
   * Find margin position by ID
   * @param {number} id - Position ID
   * @returns {Object|null} Position object or null if not found
   */
  static async findById(id) {
    try {
      const position = await db('margin_positions')
        .select(
          'margin_positions.*',
          'tokens.symbol as token_symbol',
          'tokens.name as token_name',
          'properties.title as property_title'
        )
        .leftJoin('tokens', 'margin_positions.token_id', 'tokens.id')
        .leftJoin('properties', 'margin_positions.property_id', 'properties.id')
        .where('margin_positions.id', id)
        .first();

      return position || null;
    } catch (error) {
      logger.error(`Error finding margin position by ID: ${error.message}`);
      throw error;
    }
  }

  /**
   * Get all open positions for a user
   * @param {number} userId - User ID
   * @returns {Array} Array of positions
   */
  static async getUserPositions(userId) {
    try {
      const positions = await db('margin_positions')
        .select(
          'margin_positions.*',
          'tokens.symbol as token_symbol',
          'tokens.name as token_name',
          'properties.title as property_title'
        )
        .leftJoin('tokens', 'margin_positions.token_id', 'tokens.id')
        .leftJoin('properties', 'margin_positions.property_id', 'properties.id')
        .where({
          'margin_positions.user_id': userId,
          'margin_positions.status': 'open'
        })
        .orderBy('margin_positions.created_at', 'desc');

      return positions;
    } catch (error) {
      logger.error(`Error getting user positions: ${error.message}`);
      throw error;
    }
  }

  /**
   * Update position with current market price
   * @param {number} id - Position ID
   * @param {number} currentPrice - Current market price
   * @returns {Object} Updated position
   */
  static async updatePrice(id, currentPrice) {
    try {
      return await db.transaction(async trx => {
        // Get position
        const position = await trx('margin_positions')
          .where({ id })
          .first();
        
        if (!position) {
          throw new Error('Position not found');
        }
        
        // Update position with new price
        const [updatedPosition] = await trx('margin_positions')
          .where({ id })
          .update({
            current_price: currentPrice,
            updated_at: new Date()
          })
          .returning('*');
        
        // Check if position should be liquidated
        if (parseFloat(currentPrice) <= parseFloat(position.liquidation_price)) {
          await this.liquidatePosition(trx, position.id);
        }
        
        return updatedPosition;
      });
    } catch (error) {
      logger.error(`Error updating position price: ${error.message}`);
      throw error;
    }
  }

  /**
   * Close a margin position
   * @param {number} id - Position ID
   * @param {number} closePrice - Price at which to close the position
   * @returns {Object} Closed position details
   */
  static async closePosition(id, closePrice) {
    try {
      return await db.transaction(async trx => {
        // Get position
        const position = await trx('margin_positions')
          .where({ id })
          .first();
        
        if (!position) {
          throw new Error('Position not found');
        }
        
        if (position.status !== 'open') {
          throw new Error('Position is not open');
        }
        
        // Calculate position value and P&L
        const closePositionValue = parseFloat(position.token_amount) * parseFloat(closePrice);
        const openPositionValue = parseFloat(position.token_amount) * parseFloat(position.entry_price);
        const pnl = closePositionValue - openPositionValue;
        
        // Calculate final collateral amount (initial + profit or - loss)
        let finalCollateralAmount = parseFloat(position.collateral_amount);
        
        if (pnl > 0) {
          finalCollateralAmount += pnl;
        } else if (Math.abs(pnl) < finalCollateralAmount) {
          finalCollateralAmount += pnl; // Subtract loss from collateral
        } else {
          finalCollateralAmount = 0; // Complete loss of collateral
        }
        
        // Update position status
        await trx('margin_positions')
          .where({ id })
          .update({
            current_price: closePrice,
            status: 'closed',
            closed_at: new Date(),
            updated_at: new Date()
          });
        
        // Update margin account
        const account = await trx('margin_accounts')
          .where({ id: position.margin_account_id })
          .first();
        
        await trx('margin_accounts')
          .where({ id: position.margin_account_id })
          .update({
            available_collateral: db.raw('available_collateral + ?', [finalCollateralAmount]),
            borrowed_funds: db.raw('borrowed_funds - ?', [position.borrowed_amount]),
            margin_level: db.raw('(available_collateral + ? - ?) / NULLIF(borrowed_funds - ?, 0) * 100', 
              [finalCollateralAmount, position.borrowed_amount, position.borrowed_amount]),
            updated_at: new Date()
          });
        
        // Create transaction record
        await trx('margin_transactions')
          .insert({
            user_id: position.user_id,
            margin_account_id: position.margin_account_id,
            margin_position_id: position.id,
            type: 'close_position',
            amount: closePositionValue,
            metadata: JSON.stringify({
              tokenId: position.token_id,
              tokenAmount: position.token_amount,
              entryPrice: position.entry_price,
              closePrice: closePrice,
              pnl: pnl,
              returnedCollateral: finalCollateralAmount
            }),
            status: 'completed',
            created_at: new Date(),
            updated_at: new Date()
          });
        
        return {
          position,
          closePrice,
          pnl,
          returnedCollateral: finalCollateralAmount
        };
      });
    } catch (error) {
      logger.error(`Error closing margin position: ${error.message}`);
      throw error;
    }
  }

  /**
   * Liquidate a position that has reached its liquidation price
   * @param {Object} trx - Transaction object
   * @param {number} id - Position ID
   * @returns {Object} Liquidated position details
   */
  static async liquidatePosition(trx, id) {
    try {
      // Get position
      const position = await trx('margin_positions')
        .where({ id })
        .first();
      
      if (!position) {
        throw new Error('Position not found');
      }
      
      // Update position status
      await trx('margin_positions')
        .where({ id })
        .update({
          status: 'closed',
          closed_at: new Date(),
          updated_at: new Date()
        });
      
      // Update margin account (collateral is lost, borrowed amount is repaid)
      await trx('margin_accounts')
        .where({ id: position.margin_account_id })
        .update({
          borrowed_funds: db.raw('borrowed_funds - ?', [position.borrowed_amount]),
          margin_level: db.raw('available_collateral / NULLIF(borrowed_funds - ?, 0) * 100', [position.borrowed_amount]),
          updated_at: new Date()
        });
      
      // Create transaction record
      await trx('margin_transactions')
        .insert({
          user_id: position.user_id,
          margin_account_id: position.margin_account_id,
          margin_position_id: position.id,
          type: 'liquidation',
          amount: parseFloat(position.token_amount) * parseFloat(position.liquidation_price),
          metadata: JSON.stringify({
            tokenId: position.token_id,
            tokenAmount: position.token_amount,
            entryPrice: position.entry_price,
            liquidationPrice: position.liquidation_price,
            collateralLost: position.collateral_amount
          }),
          status: 'completed',
          created_at: new Date(),
          updated_at: new Date()
        });
      
      return {
        position,
        liquidationPrice: position.liquidation_price,
        collateralLost: position.collateral_amount
      };
    } catch (error) {
      logger.error(`Error liquidating position: ${error.message}`);
      throw error;
    }
  }

  /**
   * Calculate and apply interest for a position
   * @param {number} id - Position ID
   * @returns {Object} Updated position with interest applied
   */
  static async calculatePositionInterest(id) {
    try {
      return await db.transaction(async trx => {
        // Get position
        const position = await trx('margin_positions')
          .where({ id })
          .first();
        
        if (!position || position.status !== 'open') {
          return position;
        }
        
        // Calculate time since last interest calculation
        const now = new Date();
        const lastCalculation = new Date(position.last_interest_applied);
        const daysDiff = (now - lastCalculation) / (1000 * 60 * 60 * 24);
        
        if (daysDiff < 1) {
          return position; // Less than a day has passed
        }
        
        // Calculate interest
        const dailyRate = parseFloat(position.interest_rate) / 365;
        const interest = parseFloat(position.borrowed_amount) * dailyRate * daysDiff;
        
        // Update position
        const [updatedPosition] = await trx('margin_positions')
          .where({ id })
          .update({
            accrued_interest: db.raw('accrued_interest + ?', [interest]),
            last_interest_applied: now,
            updated_at: now
          })
          .returning('*');
        
        // Update margin account
        await trx('margin_accounts')
          .where({ id: position.margin_account_id })
          .update({
            borrowed_funds: db.raw('borrowed_funds + ?', [interest]),
            margin_level: db.raw('available_collateral / (borrowed_funds + ?) * 100', [interest]),
            updated_at: now
          });
        
        // Create transaction record
        await trx('margin_transactions')
          .insert({
            user_id: position.user_id,
            margin_account_id: position.margin_account_id,
            margin_position_id: position.id,
            type: 'interest_charged',
            amount: interest,
            status: 'completed',
            created_at: now,
            updated_at: now
          });
        
        return updatedPosition;
      });
    } catch (error) {
      logger.error(`Error calculating position interest: ${error.message}`);
      throw error;
    }
  }

  /**
   * Get position details with current P&L
   * @param {number} id - Position ID
   * @returns {Object} Position with P&L details
   */
  static async getPositionDetails(id) {
    try {
      // Get position
      const position = await this.findById(id);
      
      if (!position) {
        throw new Error('Position not found');
      }
      
      // Get latest price for the token
      const latestPrice = await db('token_prices')
        .where({ token_id: position.token_id })
        .orderBy('timestamp', 'desc')
        .first();
      
      const currentPrice = latestPrice ? parseFloat(latestPrice.price) : parseFloat(position.current_price);
      const positionValue = parseFloat(position.token_amount) * currentPrice;
      const initialValue = parseFloat(position.token_amount) * parseFloat(position.entry_price);
      const pnl = positionValue - initialValue;
      const pnlPercent = initialValue > 0 ? (pnl / initialValue) * 100 : 0;
      
      // Calculate liquidation risk
      const priceToLiquidation = currentPrice - parseFloat(position.liquidation_price);
      const percentToLiquidation = (priceToLiquidation / currentPrice) * 100;
      
      return {
        ...position,
        currentPrice,
        positionValue,
        pnl,
        pnlPercent,
        priceToLiquidation,
        percentToLiquidation
      };
    } catch (error) {
      logger.error(`Error getting position details: ${error.message}`);
      throw error;
    }
  }
}

module.exports = MarginPosition;
