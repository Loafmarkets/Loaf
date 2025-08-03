const { initializeDatabase } = require('../config/database');
const logger = require('../utils/logger');

// Initialize database connection
const db = initializeDatabase();

/**
 * MarginAccount model for margin trading functionality
 */
class MarginAccount {
  /**
   * Create a new margin account for a user
   * @param {Object} accountData - Account data
   * @returns {Object} Created margin account
   */
  static async create(accountData) {
    try {
      const [account] = await db('margin_accounts')
        .insert({
          user_id: accountData.userId,
          available_collateral: accountData.availableCollateral || 0,
          borrowed_funds: accountData.borrowedFunds || 0,
          interest_rate: accountData.interestRate || 0.05,
          last_interest_calculation: new Date(),
          margin_level: accountData.marginLevel || 100,
          status: accountData.status || 'active',
          created_at: new Date(),
          updated_at: new Date()
        })
        .returning('*');

      return account;
    } catch (error) {
      logger.error(`Error creating margin account: ${error.message}`);
      throw error;
    }
  }

  /**
   * Find margin account by ID
   * @param {number} id - Margin account ID
   * @returns {Object|null} Margin account object or null if not found
   */
  static async findById(id) {
    try {
      const account = await db('margin_accounts')
        .where({ id })
        .first();

      return account || null;
    } catch (error) {
      logger.error(`Error finding margin account by ID: ${error.message}`);
      throw error;
    }
  }

  /**
   * Find margin account by user ID
   * @param {number} userId - User ID
   * @returns {Object|null} Margin account object or null if not found
   */
  static async findByUserId(userId) {
    try {
      const account = await db('margin_accounts')
        .where({ user_id: userId })
        .first();

      return account || null;
    } catch (error) {
      logger.error(`Error finding margin account by user ID: ${error.message}`);
      throw error;
    }
  }

  /**
   * Get or create a margin account for a user
   * @param {number} userId - User ID
   * @returns {Object} Margin account
   */
  static async getOrCreate(userId) {
    try {
      let account = await this.findByUserId(userId);
      
      if (!account) {
        account = await this.create({ userId });
      }
      
      return account;
    } catch (error) {
      logger.error(`Error getting or creating margin account: ${error.message}`);
      throw error;
    }
  }

  /**
   * Update margin account
   * @param {number} id - Margin account ID
   * @param {Object} updateData - Data to update
   * @returns {Object} Updated margin account
   */
  static async update(id, updateData) {
    try {
      const [updatedAccount] = await db('margin_accounts')
        .where({ id })
        .update({
          ...updateData,
          updated_at: new Date()
        })
        .returning('*');

      return updatedAccount;
    } catch (error) {
      logger.error(`Error updating margin account: ${error.message}`);
      throw error;
    }
  }

  /**
   * Add collateral to a margin account
   * @param {number} userId - User ID
   * @param {number} amount - Amount to add
   * @returns {Object} Updated margin account
   */
  static async addCollateral(userId, amount) {
    try {
      return await db.transaction(async trx => {
        // Get or create margin account
        let account = await trx('margin_accounts')
          .where({ user_id: userId })
          .first();

        if (!account) {
          [account] = await trx('margin_accounts')
            .insert({
              user_id: userId,
              available_collateral: amount,
              borrowed_funds: 0,
              interest_rate: 0.05,
              last_interest_calculation: new Date(),
              margin_level: 100,
              status: 'active',
              created_at: new Date(),
              updated_at: new Date()
            })
            .returning('*');
        } else {
          // Update existing account
          [account] = await trx('margin_accounts')
            .where({ id: account.id })
            .update({
              available_collateral: db.raw('available_collateral + ?', [amount]),
              margin_level: db.raw('(available_collateral + ? + available_collateral) / NULLIF(borrowed_funds, 0) * 100', [amount]),
              updated_at: new Date()
            })
            .returning('*');
        }

        // Create transaction record
        await trx('margin_transactions')
          .insert({
            user_id: userId,
            margin_account_id: account.id,
            type: 'deposit_collateral',
            amount: amount,
            status: 'completed',
            created_at: new Date(),
            updated_at: new Date()
          });

        return account;
      });
    } catch (error) {
      logger.error(`Error adding collateral to margin account: ${error.message}`);
      throw error;
    }
  }

  /**
   * Withdraw collateral from a margin account
   * @param {number} userId - User ID
   * @param {number} amount - Amount to withdraw
   * @returns {Object} Updated margin account
   */
  static async withdrawCollateral(userId, amount) {
    try {
      return await db.transaction(async trx => {
        // Find margin account
        const account = await trx('margin_accounts')
          .where({ user_id: userId })
          .first();

        if (!account) {
          throw new Error('Margin account not found');
        }

        if (parseFloat(account.available_collateral) < parseFloat(amount)) {
          throw new Error('Insufficient collateral');
        }

        // Check if withdrawal would violate margin requirements
        const newCollateral = parseFloat(account.available_collateral) - parseFloat(amount);
        const newMarginLevel = account.borrowed_funds > 0 
          ? (newCollateral / parseFloat(account.borrowed_funds)) * 100 
          : 100;
        
        if (newMarginLevel < 125) { // Minimum margin level requirement (125%)
          throw new Error('Withdrawal would violate margin requirements');
        }

        // Update margin account
        const [updatedAccount] = await trx('margin_accounts')
          .where({ id: account.id })
          .update({
            available_collateral: db.raw('available_collateral - ?', [amount]),
            margin_level: newMarginLevel,
            updated_at: new Date()
          })
          .returning('*');

        // Create transaction record
        await trx('margin_transactions')
          .insert({
            user_id: userId,
            margin_account_id: account.id,
            type: 'withdraw_collateral',
            amount: amount,
            status: 'completed',
            created_at: new Date(),
            updated_at: new Date()
          });

        return updatedAccount;
      });
    } catch (error) {
      logger.error(`Error withdrawing collateral from margin account: ${error.message}`);
      throw error;
    }
  }

  /**
   * Calculate and apply daily interest
   * @param {number} accountId - Margin account ID
   * @returns {Object} Updated margin account with interest applied
   */
  static async calculateDailyInterest(accountId) {
    try {
      return await db.transaction(async trx => {
        // Find margin account
        const account = await trx('margin_accounts')
          .where({ id: accountId })
          .first();

        if (!account || account.borrowed_funds <= 0) {
          return account;
        }

        // Calculate time since last interest calculation
        const now = new Date();
        const lastCalculation = new Date(account.last_interest_calculation);
        const daysDiff = (now - lastCalculation) / (1000 * 60 * 60 * 24);
        
        if (daysDiff < 1) {
          return account; // Less than a day has passed
        }

        // Calculate interest
        const dailyRate = parseFloat(account.interest_rate) / 365;
        const interest = parseFloat(account.borrowed_funds) * dailyRate * daysDiff;

        // Update margin account
        const [updatedAccount] = await trx('margin_accounts')
          .where({ id: accountId })
          .update({
            borrowed_funds: db.raw('borrowed_funds + ?', [interest]),
            last_interest_calculation: now,
            margin_level: db.raw('available_collateral / (borrowed_funds + ?) * 100', [interest]),
            updated_at: now
          })
          .returning('*');

        // Create transaction record
        await trx('margin_transactions')
          .insert({
            user_id: account.user_id,
            margin_account_id: accountId,
            type: 'interest_charged',
            amount: interest,
            status: 'completed',
            created_at: now,
            updated_at: now
          });

        return updatedAccount;
      });
    } catch (error) {
      logger.error(`Error calculating daily interest: ${error.message}`);
      throw error;
    }
  }

  /**
   * Get margin account summary with positions
   * @param {number} userId - User ID
   * @returns {Object} Margin account summary
   */
  static async getAccountSummary(userId) {
    try {
      // Get or create margin account
      const account = await this.getOrCreate(userId);
      
      // Get all positions for this account
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
          'margin_positions.margin_account_id': account.id,
          'margin_positions.status': 'open'
        });
      
      // Calculate position values and P&L
      const positionsWithValues = await Promise.all(positions.map(async (position) => {
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
        
        return {
          ...position,
          currentPrice,
          positionValue,
          pnl,
          pnlPercent
        };
      }));
      
      // Calculate total values
      const totalPositionValue = positionsWithValues.reduce((sum, pos) => sum + pos.positionValue, 0);
      const totalCollateral = parseFloat(account.available_collateral);
      const totalBorrowed = parseFloat(account.borrowed_funds);
      const totalEquity = totalCollateral + totalPositionValue - totalBorrowed;
      
      return {
        account: {
          ...account,
          totalEquity,
          totalPositionValue,
          availableCollateral: totalCollateral,
          borrowedFunds: totalBorrowed,
          marginLevel: totalBorrowed > 0 ? (totalEquity / totalBorrowed) * 100 : 100
        },
        positions: positionsWithValues
      };
    } catch (error) {
      logger.error(`Error getting margin account summary: ${error.message}`);
      throw error;
    }
  }

  /**
   * Get transaction history for a margin account
   * @param {number} userId - User ID
   * @param {Object} options - Query options
   * @returns {Array} Array of transactions
   */
  static async getTransactionHistory(userId, options = {}) {
    try {
      const { limit = 50, offset = 0 } = options;
      
      // Get margin account
      const account = await this.findByUserId(userId);
      
      if (!account) {
        return [];
      }
      
      // Get transactions
      const transactions = await db('margin_transactions')
        .where({ margin_account_id: account.id })
        .orderBy('created_at', 'desc')
        .limit(limit)
        .offset(offset);
      
      return transactions;
    } catch (error) {
      logger.error(`Error getting margin transaction history: ${error.message}`);
      throw error;
    }
  }
}

module.exports = MarginAccount;
