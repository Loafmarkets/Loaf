const { initializeDatabase } = require('../config/database');
const logger = require('../utils/logger');

// Initialize database connection
const db = initializeDatabase();

/**
 * Wallet model for user token balances
 */
class Wallet {
  /**
   * Create a new wallet for a user and token
   * @param {Object} walletData - Wallet data
   * @returns {Object} Created wallet
   */
  static async create(walletData) {
    try {
      const [wallet] = await db('wallets')
        .insert({
          user_id: walletData.userId,
          token_id: walletData.tokenId,
          balance: walletData.balance || 0,
          locked_balance: walletData.lockedBalance || 0,
          created_at: new Date(),
          updated_at: new Date()
        })
        .returning('*');

      return wallet;
    } catch (error) {
      logger.error(`Error creating wallet: ${error.message}`);
      throw error;
    }
  }

  /**
   * Find wallet by ID
   * @param {number} id - Wallet ID
   * @returns {Object|null} Wallet object or null if not found
   */
  static async findById(id) {
    try {
      const wallet = await db('wallets')
        .where({ id })
        .first();

      return wallet || null;
    } catch (error) {
      logger.error(`Error finding wallet by ID: ${error.message}`);
      throw error;
    }
  }

  /**
   * Find wallet by user ID and token ID
   * @param {number} userId - User ID
   * @param {number} tokenId - Token ID
   * @returns {Object|null} Wallet object or null if not found
   */
  static async findByUserAndToken(userId, tokenId) {
    try {
      const wallet = await db('wallets')
        .where({
          user_id: userId,
          token_id: tokenId
        })
        .first();

      return wallet || null;
    } catch (error) {
      logger.error(`Error finding wallet by user and token: ${error.message}`);
      throw error;
    }
  }

  /**
   * Get all wallets for a user
   * @param {number} userId - User ID
   * @returns {Array} Array of wallets
   */
  static async getUserWallets(userId) {
    try {
      const wallets = await db('wallets')
        .select(
          'wallets.*',
          'tokens.symbol as token_symbol',
          'tokens.name as token_name',
          'properties.title as property_title',
          'properties.id as property_id'
        )
        .leftJoin('tokens', 'wallets.token_id', 'tokens.id')
        .leftJoin('properties', 'tokens.property_id', 'properties.id')
        .where('wallets.user_id', userId)
        .orderBy('wallets.updated_at', 'desc');

      return wallets;
    } catch (error) {
      logger.error(`Error getting user wallets: ${error.message}`);
      throw error;
    }
  }

  /**
   * Update wallet balance
   * @param {number} id - Wallet ID
   * @param {Object} updateData - Data to update
   * @returns {Object} Updated wallet
   */
  static async update(id, updateData) {
    try {
      const [updatedWallet] = await db('wallets')
        .where({ id })
        .update({
          ...updateData,
          updated_at: new Date()
        })
        .returning('*');

      return updatedWallet;
    } catch (error) {
      logger.error(`Error updating wallet: ${error.message}`);
      throw error;
    }
  }

  /**
   * Add tokens to a wallet
   * @param {number} userId - User ID
   * @param {number} tokenId - Token ID
   * @param {number} amount - Amount to add
   * @returns {Object} Updated wallet
   */
  static async addTokens(userId, tokenId, amount) {
    try {
      return await db.transaction(async trx => {
        // Find or create wallet
        let wallet = await trx('wallets')
          .where({
            user_id: userId,
            token_id: tokenId
          })
          .first();

        if (!wallet) {
          [wallet] = await trx('wallets')
            .insert({
              user_id: userId,
              token_id: tokenId,
              balance: amount,
              locked_balance: 0,
              created_at: new Date(),
              updated_at: new Date()
            })
            .returning('*');
        } else {
          // Update existing wallet
          [wallet] = await trx('wallets')
            .where({ id: wallet.id })
            .update({
              balance: db.raw('balance + ?', [amount]),
              updated_at: new Date()
            })
            .returning('*');
        }

        // Create transaction record
        await trx('wallet_transactions')
          .insert({
            wallet_id: wallet.id,
            user_id: userId,
            token_id: tokenId,
            amount: amount,
            type: 'deposit',
            status: 'completed',
            created_at: new Date()
          });

        return wallet;
      });
    } catch (error) {
      logger.error(`Error adding tokens to wallet: ${error.message}`);
      throw error;
    }
  }

  /**
   * Remove tokens from a wallet
   * @param {number} userId - User ID
   * @param {number} tokenId - Token ID
   * @param {number} amount - Amount to remove
   * @returns {Object} Updated wallet
   */
  static async removeTokens(userId, tokenId, amount) {
    try {
      return await db.transaction(async trx => {
        // Find wallet
        const wallet = await trx('wallets')
          .where({
            user_id: userId,
            token_id: tokenId
          })
          .first();

        if (!wallet) {
          throw new Error('Wallet not found');
        }

        if (parseFloat(wallet.balance) < parseFloat(amount)) {
          throw new Error('Insufficient balance');
        }

        // Update wallet
        const [updatedWallet] = await trx('wallets')
          .where({ id: wallet.id })
          .update({
            balance: db.raw('balance - ?', [amount]),
            updated_at: new Date()
          })
          .returning('*');

        // Create transaction record
        await trx('wallet_transactions')
          .insert({
            wallet_id: wallet.id,
            user_id: userId,
            token_id: tokenId,
            amount: amount,
            type: 'withdrawal',
            status: 'completed',
            created_at: new Date()
          });

        return updatedWallet;
      });
    } catch (error) {
      logger.error(`Error removing tokens from wallet: ${error.message}`);
      throw error;
    }
  }

  /**
   * Get wallet transaction history
   * @param {number} walletId - Wallet ID
   * @param {Object} options - Query options
   * @returns {Array} Array of transactions
   */
  static async getTransactionHistory(walletId, options = {}) {
    try {
      const { limit = 50, offset = 0 } = options;

      const transactions = await db('wallet_transactions')
        .where({ wallet_id: walletId })
        .orderBy('created_at', 'desc')
        .limit(limit)
        .offset(offset);

      return transactions;
    } catch (error) {
      logger.error(`Error getting wallet transaction history: ${error.message}`);
      throw error;
    }
  }

  /**
   * Get total portfolio value for a user
   * @param {number} userId - User ID
   * @returns {Object} Portfolio summary
   */
  static async getPortfolioSummary(userId) {
    try {
      // Get all user wallets with token prices
      const wallets = await db('wallets')
        .select(
          'wallets.*',
          'tokens.symbol as token_symbol',
          'tokens.name as token_name',
          'properties.title as property_title'
        )
        .leftJoin('tokens', 'wallets.token_id', 'tokens.id')
        .leftJoin('properties', 'tokens.property_id', 'properties.id')
        .where('wallets.user_id', userId);

      let totalValue = 0;
      const holdings = [];

      // Calculate value for each token holding
      for (const wallet of wallets) {
        // Get latest price for the token
        const latestPrice = await db('token_prices')
          .where({ token_id: wallet.token_id })
          .orderBy('timestamp', 'desc')
          .first();

        const price = latestPrice ? parseFloat(latestPrice.price) : 0;
        const totalBalance = parseFloat(wallet.balance) + parseFloat(wallet.locked_balance);
        const value = totalBalance * price;

        totalValue += value;

        holdings.push({
          walletId: wallet.id,
          tokenId: wallet.token_id,
          tokenSymbol: wallet.token_symbol,
          tokenName: wallet.token_name,
          propertyTitle: wallet.property_title,
          balance: parseFloat(wallet.balance),
          lockedBalance: parseFloat(wallet.locked_balance),
          totalBalance,
          price,
          value
        });
      }

      return {
        userId,
        totalValue,
        holdings
      };
    } catch (error) {
      logger.error(`Error getting portfolio summary: ${error.message}`);
      throw error;
    }
  }
}

module.exports = Wallet;
