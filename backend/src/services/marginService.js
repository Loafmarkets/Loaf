const { initializeDatabase } = require('../config/database');
const logger = require('../utils/logger');
const MarginAccount = require('../models/MarginAccount');
const MarginPosition = require('../models/MarginPosition');

// Initialize database connection
const db = initializeDatabase();

/**
 * Service for handling margin trading operations
 */
class MarginService {
  /**
   * Check all open positions for liquidation conditions
   * @returns {Object} Summary of checked positions
   */
  static async checkPositionsForLiquidation() {
    try {
      logger.info('Checking positions for liquidation...');
      
      // Get all open positions
      const openPositions = await db('margin_positions')
        .where({ status: 'open' });
      
      logger.info(`Found ${openPositions.length} open positions to check`);
      
      const results = {
        total: openPositions.length,
        checked: 0,
        liquidated: 0,
        errors: 0
      };
      
      // Check each position
      for (const position of openPositions) {
        try {
          // Get latest price for the token
          const latestPrice = await db('token_prices')
            .where({ token_id: position.token_id })
            .orderBy('timestamp', 'desc')
            .first();
          
          if (!latestPrice) {
            logger.warn(`No price data found for token ID ${position.token_id}, skipping position ${position.id}`);
            continue;
          }
          
          const currentPrice = parseFloat(latestPrice.price);
          
          // Update position with current price
          await MarginPosition.updatePrice(position.id, currentPrice);
          
          results.checked++;
          
          // Check if price is at or below liquidation price
          if (currentPrice <= parseFloat(position.liquidation_price)) {
            logger.info(`Position ${position.id} needs liquidation. Current price: ${currentPrice}, Liquidation price: ${position.liquidation_price}`);
            
            // Liquidate position
            await db.transaction(async trx => {
              await MarginPosition.liquidatePosition(trx, position.id);
            });
            
            results.liquidated++;
          }
        } catch (error) {
          logger.error(`Error checking position ${position.id}: ${error.message}`);
          results.errors++;
        }
      }
      
      logger.info(`Liquidation check completed: ${results.checked} checked, ${results.liquidated} liquidated, ${results.errors} errors`);
      return results;
    } catch (error) {
      logger.error(`Error in checkPositionsForLiquidation: ${error.message}`);
      throw error;
    }
  }

  /**
   * Calculate and apply daily interest for all margin accounts and positions
   * @returns {Object} Summary of interest calculations
   */
  static async calculateDailyInterest() {
    try {
      logger.info('Calculating daily interest...');
      
      // Get all active margin accounts with borrowed funds
      const accounts = await db('margin_accounts')
        .where('borrowed_funds', '>', 0);
      
      logger.info(`Found ${accounts.length} accounts with borrowed funds`);
      
      const results = {
        accountsProcessed: 0,
        positionsProcessed: 0,
        totalInterestCharged: 0,
        errors: 0
      };
      
      // Process each account
      for (const account of accounts) {
        try {
          // Apply account-level interest
          const updatedAccount = await MarginAccount.calculateDailyInterest(account.id);
          
          if (updatedAccount) {
            results.accountsProcessed++;
          }
          
          // Get all open positions for this account
          const positions = await db('margin_positions')
            .where({
              margin_account_id: account.id,
              status: 'open'
            });
          
          // Apply position-level interest
          for (const position of positions) {
            try {
              const updatedPosition = await MarginPosition.calculatePositionInterest(position.id);
              
              if (updatedPosition) {
                results.positionsProcessed++;
                results.totalInterestCharged += parseFloat(updatedPosition.accrued_interest) || 0;
              }
            } catch (posError) {
              logger.error(`Error calculating interest for position ${position.id}: ${posError.message}`);
              results.errors++;
            }
          }
        } catch (accError) {
          logger.error(`Error calculating interest for account ${account.id}: ${accError.message}`);
          results.errors++;
        }
      }
      
      logger.info(`Interest calculation completed: ${results.accountsProcessed} accounts processed, ${results.positionsProcessed} positions processed, ${results.totalInterestCharged.toFixed(2)} total interest charged, ${results.errors} errors`);
      return results;
    } catch (error) {
      logger.error(`Error in calculateDailyInterest: ${error.message}`);
      throw error;
    }
  }

  /**
   * Check margin levels and issue margin calls if necessary
   * @returns {Object} Summary of margin calls
   */
  static async checkMarginLevels() {
    try {
      logger.info('Checking margin levels...');
      
      // Get all active margin accounts
      const accounts = await db('margin_accounts')
        .where({ status: 'active' });
      
      logger.info(`Found ${accounts.length} active accounts to check`);
      
      const results = {
        accountsChecked: 0,
        marginCallsIssued: 0,
        errors: 0
      };
      
      // Check each account
      for (const account of accounts) {
        try {
          // Skip accounts with no borrowed funds
          if (parseFloat(account.borrowed_funds) <= 0) {
            continue;
          }
          
          results.accountsChecked++;
          
          // Check margin level
          if (parseFloat(account.margin_level) < 125) { // Margin call threshold (125%)
            logger.info(`Issuing margin call for account ${account.id}. Current margin level: ${account.margin_level}%`);
            
            // Update account status
            await db('margin_accounts')
              .where({ id: account.id })
              .update({
                status: 'margin_call',
                updated_at: new Date()
              });
            
            // Create transaction record
            await db('margin_transactions')
              .insert({
                user_id: account.user_id,
                margin_account_id: account.id,
                type: 'margin_call',
                amount: 0,
                metadata: JSON.stringify({
                  marginLevel: account.margin_level,
                  requiredLevel: 125,
                  timestamp: new Date()
                }),
                status: 'completed',
                created_at: new Date(),
                updated_at: new Date()
              });
            
            results.marginCallsIssued++;
          }
        } catch (error) {
          logger.error(`Error checking margin level for account ${account.id}: ${error.message}`);
          results.errors++;
        }
      }
      
      logger.info(`Margin level check completed: ${results.accountsChecked} checked, ${results.marginCallsIssued} margin calls issued, ${results.errors} errors`);
      return results;
    } catch (error) {
      logger.error(`Error in checkMarginLevels: ${error.message}`);
      throw error;
    }
  }

  /**
   * Run all periodic margin checks and calculations
   * @returns {Object} Summary of all operations
   */
  static async runPeriodicChecks() {
    try {
      logger.info('Starting periodic margin checks...');
      
      // Run all checks
      const interestResults = await this.calculateDailyInterest();
      const liquidationResults = await this.checkPositionsForLiquidation();
      const marginCallResults = await this.checkMarginLevels();
      
      logger.info('Periodic margin checks completed');
      
      return {
        interestResults,
        liquidationResults,
        marginCallResults,
        timestamp: new Date()
      };
    } catch (error) {
      logger.error(`Error in runPeriodicChecks: ${error.message}`);
      throw error;
    }
  }
}

module.exports = MarginService;
