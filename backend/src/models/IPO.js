const { initializeDatabase } = require('../config/database');
const logger = require('../utils/logger');

// Initialize database connection
const db = initializeDatabase();

/**
 * IPO model for property token offerings
 */
class IPO {
  /**
   * Create a new IPO
   * @param {Object} ipoData - IPO data
   * @returns {Object} Created IPO
   */
  static async create(ipoData) {
    try {
      const [ipo] = await db('ipos')
        .insert({
          property_id: ipoData.propertyId,
          token_id: ipoData.tokenId,
          title: ipoData.title,
          description: ipoData.description,
          guide_price: ipoData.guidePrice,
          total_tokens: ipoData.totalTokens,
          tokens_for_sale: ipoData.tokensForSale,
          min_investment: ipoData.minInvestment,
          max_investment_per_user: ipoData.maxInvestmentPerUser,
          start_date: ipoData.startDate,
          end_date: ipoData.endDate,
          status: ipoData.status || 'pending',
          created_by: ipoData.createdBy,
          created_at: new Date(),
          updated_at: new Date()
        })
        .returning('*');

      return ipo;
    } catch (error) {
      logger.error(`Error creating IPO: ${error.message}`);
      throw error;
    }
  }

  /**
   * Find IPO by ID
   * @param {number} id - IPO ID
   * @returns {Object|null} IPO object or null if not found
   */
  static async findById(id) {
    try {
      const ipo = await db('ipos')
        .select(
          'ipos.*',
          'properties.title as property_title',
          'properties.address',
          'properties.city',
          'properties.state',
          'properties.country',
          'tokens.symbol as token_symbol',
          'tokens.name as token_name'
        )
        .leftJoin('properties', 'ipos.property_id', 'properties.id')
        .leftJoin('tokens', 'ipos.token_id', 'tokens.id')
        .where('ipos.id', id)
        .first();

      return ipo || null;
    } catch (error) {
      logger.error(`Error finding IPO by ID: ${error.message}`);
      throw error;
    }
  }

  /**
   * Get all IPOs with optional filtering
   * @param {Object} filters - Filter criteria
   * @param {number} page - Page number for pagination
   * @param {number} limit - Number of items per page
   * @returns {Array} Array of IPOs
   */
  static async getAll(filters = {}, page = 1, limit = 10) {
    try {
      const offset = (page - 1) * limit;
      
      // Build query with filters
      const query = db('ipos')
        .select(
          'ipos.*',
          'properties.title as property_title',
          'properties.city',
          'properties.state',
          'tokens.symbol as token_symbol'
        )
        .leftJoin('properties', 'ipos.property_id', 'properties.id')
        .leftJoin('tokens', 'ipos.token_id', 'tokens.id')
        .orderBy('ipos.created_at', 'desc')
        .limit(limit)
        .offset(offset);
      
      // Apply filters if provided
      if (filters.status) {
        query.where('ipos.status', filters.status);
      }
      
      if (filters.minPrice) {
        query.where('ipos.guide_price', '>=', filters.minPrice);
      }
      
      if (filters.maxPrice) {
        query.where('ipos.guide_price', '<=', filters.maxPrice);
      }
      
      // Filter by date range
      if (filters.startAfter) {
        query.where('ipos.start_date', '>=', filters.startAfter);
      }
      
      if (filters.endBefore) {
        query.where('ipos.end_date', '<=', filters.endBefore);
      }
      
      // Current active IPOs
      if (filters.active) {
        const now = new Date();
        query.where('ipos.start_date', '<=', now)
          .where('ipos.end_date', '>=', now)
          .where('ipos.status', 'active');
      }
      
      // Execute query
      const ipos = await query;
      
      return ipos;
    } catch (error) {
      logger.error(`Error getting IPOs: ${error.message}`);
      throw error;
    }
  }

  /**
   * Update IPO information
   * @param {number} id - IPO ID
   * @param {Object} updateData - Data to update
   * @returns {Object} Updated IPO
   */
  static async update(id, updateData) {
    try {
      const [updatedIPO] = await db('ipos')
        .where({ id })
        .update({
          ...updateData,
          updated_at: new Date()
        })
        .returning('*');
      
      return updatedIPO;
    } catch (error) {
      logger.error(`Error updating IPO: ${error.message}`);
      throw error;
    }
  }

  /**
   * Create a subscription to an IPO
   * @param {Object} subscriptionData - Subscription data
   * @returns {Object} Created subscription
   */
  static async createSubscription(subscriptionData) {
    try {
      // Start a transaction
      return await db.transaction(async trx => {
        // Check if IPO exists and is active
        const ipo = await trx('ipos')
          .where({ id: subscriptionData.ipoId, status: 'active' })
          .first();
        
        if (!ipo) {
          throw new Error('IPO not found or not active');
        }
        
        // Check if subscription period is valid
        const now = new Date();
        if (now < new Date(ipo.start_date) || now > new Date(ipo.end_date)) {
          throw new Error('IPO subscription period is not active');
        }
        
        // Check if user has already subscribed
        const existingSubscription = await trx('ipo_subscriptions')
          .where({
            ipo_id: subscriptionData.ipoId,
            user_id: subscriptionData.userId
          })
          .first();
        
        if (existingSubscription) {
          throw new Error('User has already subscribed to this IPO');
        }
        
        // Check investment limits
        if (subscriptionData.tokenAmount < ipo.min_investment) {
          throw new Error(`Minimum investment is ${ipo.min_investment} tokens`);
        }
        
        if (ipo.max_investment_per_user && subscriptionData.tokenAmount > ipo.max_investment_per_user) {
          throw new Error(`Maximum investment per user is ${ipo.max_investment_per_user} tokens`);
        }
        
        // Create subscription
        const [subscription] = await trx('ipo_subscriptions')
          .insert({
            ipo_id: subscriptionData.ipoId,
            user_id: subscriptionData.userId,
            token_amount: subscriptionData.tokenAmount,
            price_per_token: ipo.guide_price,
            total_price: subscriptionData.tokenAmount * ipo.guide_price,
            status: 'pending',
            created_at: new Date(),
            updated_at: new Date()
          })
          .returning('*');
        
        return subscription;
      });
    } catch (error) {
      logger.error(`Error creating IPO subscription: ${error.message}`);
      throw error;
    }
  }

  /**
   * Get all subscriptions for an IPO
   * @param {number} ipoId - IPO ID
   * @returns {Array} Array of subscriptions
   */
  static async getSubscriptions(ipoId) {
    try {
      const subscriptions = await db('ipo_subscriptions')
        .select(
          'ipo_subscriptions.*',
          'users.email',
          'users.first_name',
          'users.last_name'
        )
        .leftJoin('users', 'ipo_subscriptions.user_id', 'users.id')
        .where('ipo_subscriptions.ipo_id', ipoId)
        .orderBy('ipo_subscriptions.created_at', 'asc');
      
      return subscriptions;
    } catch (error) {
      logger.error(`Error getting IPO subscriptions: ${error.message}`);
      throw error;
    }
  }

  /**
   * Get user's subscriptions
   * @param {number} userId - User ID
   * @returns {Array} Array of user's subscriptions
   */
  static async getUserSubscriptions(userId) {
    try {
      const subscriptions = await db('ipo_subscriptions')
        .select(
          'ipo_subscriptions.*',
          'ipos.title as ipo_title',
          'properties.title as property_title',
          'tokens.symbol as token_symbol'
        )
        .leftJoin('ipos', 'ipo_subscriptions.ipo_id', 'ipos.id')
        .leftJoin('properties', 'ipos.property_id', 'properties.id')
        .leftJoin('tokens', 'ipos.token_id', 'tokens.id')
        .where('ipo_subscriptions.user_id', userId)
        .orderBy('ipo_subscriptions.created_at', 'desc');
      
      return subscriptions;
    } catch (error) {
      logger.error(`Error getting user IPO subscriptions: ${error.message}`);
      throw error;
    }
  }

  /**
   * Finalize IPO and distribute tokens
   * @param {number} id - IPO ID
   * @returns {Object} Finalization result
   */
  static async finalize(id) {
    try {
      // Start a transaction
      return await db.transaction(async trx => {
        // Get IPO details
        const ipo = await trx('ipos')
          .where({ id })
          .first();
        
        if (!ipo) {
          throw new Error('IPO not found');
        }
        
        if (ipo.status !== 'active') {
          throw new Error('IPO is not active');
        }
        
        // Get all subscriptions
        const subscriptions = await trx('ipo_subscriptions')
          .where({ ipo_id: id, status: 'pending' })
          .select('*');
        
        // Calculate total subscribed tokens
        const totalSubscribed = subscriptions.reduce(
          (sum, sub) => sum + parseFloat(sub.token_amount),
          0
        );
        
        // Check if IPO is oversubscribed
        const isOversubscribed = totalSubscribed > ipo.tokens_for_sale;
        
        // Calculate allocation ratio if oversubscribed
        const allocationRatio = isOversubscribed 
          ? ipo.tokens_for_sale / totalSubscribed 
          : 1;
        
        // Process each subscription
        const allocations = [];
        for (const sub of subscriptions) {
          // Calculate allocated tokens
          const allocatedTokens = isOversubscribed
            ? Math.floor(sub.token_amount * allocationRatio * 100) / 100
            : sub.token_amount;
          
          // Create wallet entry for user if it doesn't exist
          let wallet = await trx('wallets')
            .where({
              user_id: sub.user_id,
              token_id: ipo.token_id
            })
            .first();
          
          if (!wallet) {
            [wallet] = await trx('wallets')
              .insert({
                user_id: sub.user_id,
                token_id: ipo.token_id,
                balance: allocatedTokens,
                created_at: new Date(),
                updated_at: new Date()
              })
              .returning('*');
          } else {
            // Update existing wallet
            [wallet] = await trx('wallets')
              .where({
                user_id: sub.user_id,
                token_id: ipo.token_id
              })
              .update({
                balance: db.raw('balance + ?', [allocatedTokens]),
                updated_at: new Date()
              })
              .returning('*');
          }
          
          // Update subscription status
          await trx('ipo_subscriptions')
            .where({ id: sub.id })
            .update({
              allocated_tokens: allocatedTokens,
              status: 'completed',
              updated_at: new Date()
            });
          
          allocations.push({
            userId: sub.user_id,
            requestedTokens: sub.token_amount,
            allocatedTokens,
            walletId: wallet.id
          });
        }
        
        // Update IPO status
        await trx('ipos')
          .where({ id })
          .update({
            status: 'completed',
            final_allocation_ratio: allocationRatio,
            total_subscribed: totalSubscribed,
            updated_at: new Date()
          });
        
        // Record initial token price
        await trx('token_prices')
          .insert({
            token_id: ipo.token_id,
            price: ipo.guide_price,
            timestamp: new Date()
          });
        
        return {
          ipoId: id,
          totalSubscribed,
          tokensForSale: ipo.tokens_for_sale,
          allocationRatio,
          isOversubscribed,
          allocations
        };
      });
    } catch (error) {
      logger.error(`Error finalizing IPO: ${error.message}`);
      throw error;
    }
  }
}

module.exports = IPO;
