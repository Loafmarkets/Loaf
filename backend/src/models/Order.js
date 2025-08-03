const { initializeDatabase } = require('../config/database');
const logger = require('../utils/logger');

// Initialize database connection
const db = initializeDatabase();

/**
 * Order model for trading engine
 */
class Order {
  /**
   * Create a new order
   * @param {Object} orderData - Order data
   * @returns {Object} Created order
   */
  static async create(orderData) {
    try {
      return await db.transaction(async trx => {
        // Check user wallet balance for sell orders
        if (orderData.type === 'sell') {
          const wallet = await trx('wallets')
            .where({
              user_id: orderData.userId,
              token_id: orderData.tokenId
            })
            .first();
          
          if (!wallet || parseFloat(wallet.balance) < parseFloat(orderData.amount)) {
            throw new Error('Insufficient token balance');
          }
          
          // Lock tokens for the sell order
          await trx('wallets')
            .where({ id: wallet.id })
            .update({
              balance: db.raw('balance - ?', [orderData.amount]),
              locked_balance: db.raw('locked_balance + ?', [orderData.amount]),
              updated_at: new Date()
            });
        }
        
        // Create the order
        const [order] = await trx('orders')
          .insert({
            user_id: orderData.userId,
            token_id: orderData.tokenId,
            type: orderData.type,
            amount: orderData.amount,
            price: orderData.price,
            filled_amount: 0,
            status: 'open',
            created_at: new Date(),
            updated_at: new Date()
          })
          .returning('*');
        
        return order;
      });
    } catch (error) {
      logger.error(`Error creating order: ${error.message}`);
      throw error;
    }
  }

  /**
   * Find order by ID
   * @param {number} id - Order ID
   * @returns {Object|null} Order object or null if not found
   */
  static async findById(id) {
    try {
      const order = await db('orders')
        .select(
          'orders.*',
          'tokens.symbol as token_symbol',
          'tokens.name as token_name',
          'users.email as user_email'
        )
        .leftJoin('tokens', 'orders.token_id', 'tokens.id')
        .leftJoin('users', 'orders.user_id', 'users.id')
        .where('orders.id', id)
        .first();

      return order || null;
    } catch (error) {
      logger.error(`Error finding order by ID: ${error.message}`);
      throw error;
    }
  }

  /**
   * Get user's orders
   * @param {number} userId - User ID
   * @param {Object} filters - Filter criteria
   * @param {number} page - Page number for pagination
   * @param {number} limit - Number of items per page
   * @returns {Array} Array of orders
   */
  static async getUserOrders(userId, filters = {}, page = 1, limit = 10) {
    try {
      const offset = (page - 1) * limit;
      
      // Build query with filters
      const query = db('orders')
        .select(
          'orders.*',
          'tokens.symbol as token_symbol',
          'tokens.name as token_name',
          'properties.title as property_title'
        )
        .leftJoin('tokens', 'orders.token_id', 'tokens.id')
        .leftJoin('properties', 'tokens.property_id', 'properties.id')
        .where('orders.user_id', userId)
        .orderBy('orders.created_at', 'desc')
        .limit(limit)
        .offset(offset);
      
      // Apply filters if provided
      if (filters.status) {
        query.where('orders.status', filters.status);
      }
      
      if (filters.type) {
        query.where('orders.type', filters.type);
      }
      
      if (filters.tokenId) {
        query.where('orders.token_id', filters.tokenId);
      }
      
      // Execute query
      const orders = await query;
      
      return orders;
    } catch (error) {
      logger.error(`Error getting user orders: ${error.message}`);
      throw error;
    }
  }

  /**
   * Get order book for a token
   * @param {number} tokenId - Token ID
   * @returns {Object} Order book with bids and asks
   */
  static async getOrderBook(tokenId) {
    try {
      // Get buy orders (bids)
      const bids = await db('orders')
        .select('price', db.raw('SUM(amount - filled_amount) as total_amount'))
        .where({
          token_id: tokenId,
          type: 'buy',
          status: 'open'
        })
        .groupBy('price')
        .orderBy('price', 'desc');
      
      // Get sell orders (asks)
      const asks = await db('orders')
        .select('price', db.raw('SUM(amount - filled_amount) as total_amount'))
        .where({
          token_id: tokenId,
          type: 'sell',
          status: 'open'
        })
        .groupBy('price')
        .orderBy('price', 'asc');
      
      return {
        bids,
        asks
      };
    } catch (error) {
      logger.error(`Error getting order book: ${error.message}`);
      throw error;
    }
  }

  /**
   * Cancel an order
   * @param {number} id - Order ID
   * @param {number} userId - User ID (for authorization)
   * @returns {boolean} True if order was cancelled
   */
  static async cancel(id, userId) {
    try {
      return await db.transaction(async trx => {
        // Get order details
        const order = await trx('orders')
          .where({ id, user_id: userId })
          .first();
        
        if (!order) {
          throw new Error('Order not found or not authorized');
        }
        
        if (order.status !== 'open') {
          throw new Error('Order cannot be cancelled');
        }
        
        // Update order status
        await trx('orders')
          .where({ id })
          .update({
            status: 'cancelled',
            updated_at: new Date()
          });
        
        // If it's a sell order, unlock the tokens
        if (order.type === 'sell' && parseFloat(order.amount) > parseFloat(order.filled_amount)) {
          const remainingAmount = parseFloat(order.amount) - parseFloat(order.filled_amount);
          
          await trx('wallets')
            .where({
              user_id: userId,
              token_id: order.token_id
            })
            .update({
              balance: db.raw('balance + ?', [remainingAmount]),
              locked_balance: db.raw('locked_balance - ?', [remainingAmount]),
              updated_at: new Date()
            });
        }
        
        return true;
      });
    } catch (error) {
      logger.error(`Error cancelling order: ${error.message}`);
      throw error;
    }
  }

  /**
   * Update order status and filled amount
   * @param {number} id - Order ID
   * @param {Object} updateData - Data to update
   * @returns {Object} Updated order
   */
  static async update(id, updateData) {
    try {
      const [updatedOrder] = await db('orders')
        .where({ id })
        .update({
          ...updateData,
          updated_at: new Date()
        })
        .returning('*');
      
      return updatedOrder;
    } catch (error) {
      logger.error(`Error updating order: ${error.message}`);
      throw error;
    }
  }

  /**
   * Find matching orders for a given order
   * @param {Object} order - Order object
   * @returns {Array} Array of matching orders
   */
  static async findMatches(order) {
    try {
      const query = db('orders')
        .where({
          token_id: order.token_id,
          status: 'open'
        })
        .whereRaw('amount - filled_amount > 0');
      
      // For buy orders, find sell orders with price <= buy price
      if (order.type === 'buy') {
        query.where('type', 'sell')
          .where('price', '<=', order.price)
          .orderBy('price', 'asc')
          .orderBy('created_at', 'asc');
      } 
      // For sell orders, find buy orders with price >= sell price
      else {
        query.where('type', 'buy')
          .where('price', '>=', order.price)
          .orderBy('price', 'desc')
          .orderBy('created_at', 'asc');
      }
      
      const matches = await query;
      return matches;
    } catch (error) {
      logger.error(`Error finding matching orders: ${error.message}`);
      throw error;
    }
  }
}

module.exports = Order;
