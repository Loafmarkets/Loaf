const { initializeDatabase } = require('../config/database');
const logger = require('../utils/logger');
const Order = require('./Order');

// Initialize database connection
const db = initializeDatabase();

/**
 * Trade model for executed trades
 */
class Trade {
  /**
   * Execute a trade between two orders
   * @param {Object} buyOrder - Buy order
   * @param {Object} sellOrder - Sell order
   * @param {number} amount - Amount to trade
   * @param {number} price - Price at which to execute the trade
   * @returns {Object} Executed trade
   */
  static async execute(buyOrder, sellOrder, amount, price) {
    try {
      return await db.transaction(async trx => {
        // Calculate trade details
        const tradeAmount = Math.min(
          parseFloat(buyOrder.amount) - parseFloat(buyOrder.filled_amount),
          parseFloat(sellOrder.amount) - parseFloat(sellOrder.filled_amount),
          parseFloat(amount)
        );
        
        const tradeValue = tradeAmount * parseFloat(price);
        
        // Create trade record
        const [trade] = await trx('trades')
          .insert({
            token_id: buyOrder.token_id,
            buy_order_id: buyOrder.id,
            sell_order_id: sellOrder.id,
            buyer_id: buyOrder.user_id,
            seller_id: sellOrder.user_id,
            amount: tradeAmount,
            price: price,
            total_value: tradeValue,
            executed_at: new Date(),
            created_at: new Date()
          })
          .returning('*');
        
        // Update buy order
        const buyOrderNewFilledAmount = parseFloat(buyOrder.filled_amount) + tradeAmount;
        const buyOrderNewStatus = buyOrderNewFilledAmount >= parseFloat(buyOrder.amount) ? 'filled' : 'open';
        
        await trx('orders')
          .where({ id: buyOrder.id })
          .update({
            filled_amount: buyOrderNewFilledAmount,
            status: buyOrderNewStatus,
            updated_at: new Date()
          });
        
        // Update sell order
        const sellOrderNewFilledAmount = parseFloat(sellOrder.filled_amount) + tradeAmount;
        const sellOrderNewStatus = sellOrderNewFilledAmount >= parseFloat(sellOrder.amount) ? 'filled' : 'open';
        
        await trx('orders')
          .where({ id: sellOrder.id })
          .update({
            filled_amount: sellOrderNewFilledAmount,
            status: sellOrderNewStatus,
            updated_at: new Date()
          });
        
        // Update buyer's wallet - add tokens
        await trx('wallets')
          .where({
            user_id: buyOrder.user_id,
            token_id: buyOrder.token_id
          })
          .increment('balance', tradeAmount);
        
        // Update seller's wallet - reduce locked balance
        await trx('wallets')
          .where({
            user_id: sellOrder.user_id,
            token_id: sellOrder.token_id
          })
          .decrement('locked_balance', tradeAmount);
        
        // Record new token price
        await trx('token_prices')
          .insert({
            token_id: buyOrder.token_id,
            price: price,
            timestamp: new Date()
          });
        
        return trade;
      });
    } catch (error) {
      logger.error(`Error executing trade: ${error.message}`);
      throw error;
    }
  }

  /**
   * Process a new order and execute trades if matches are found
   * @param {Object} order - New order to process
   * @returns {Object} Processing result with trades and updated order
   */
  static async processOrder(order) {
    try {
      return await db.transaction(async trx => {
        // Find matching orders
        const matchingOrders = await Order.findMatches(order);
        
        const trades = [];
        let remainingAmount = parseFloat(order.amount);
        let updatedOrder = { ...order };
        
        // Process each matching order
        for (const matchingOrder of matchingOrders) {
          if (remainingAmount <= 0) break;
          
          // Determine trade price (matching order's price for market orders, or limit price)
          const tradePrice = parseFloat(matchingOrder.price);
          
          // Determine trade amount
          const availableAmount = parseFloat(matchingOrder.amount) - parseFloat(matchingOrder.filled_amount);
          const tradeAmount = Math.min(remainingAmount, availableAmount);
          
          // Execute the trade
          const buyOrder = order.type === 'buy' ? updatedOrder : matchingOrder;
          const sellOrder = order.type === 'sell' ? updatedOrder : matchingOrder;
          
          const trade = await this.execute(buyOrder, sellOrder, tradeAmount, tradePrice);
          trades.push(trade);
          
          // Update remaining amount
          remainingAmount -= tradeAmount;
          
          // Update the order's filled amount
          updatedOrder.filled_amount = parseFloat(updatedOrder.filled_amount || 0) + tradeAmount;
        }
        
        // Update order status if fully filled
        if (parseFloat(updatedOrder.filled_amount) >= parseFloat(updatedOrder.amount)) {
          await trx('orders')
            .where({ id: order.id })
            .update({
              status: 'filled',
              filled_amount: order.amount,
              updated_at: new Date()
            });
          
          updatedOrder.status = 'filled';
        } else if (trades.length > 0) {
          // Partially filled
          await trx('orders')
            .where({ id: order.id })
            .update({
              filled_amount: updatedOrder.filled_amount,
              updated_at: new Date()
            });
        }
        
        return {
          order: updatedOrder,
          trades,
          fullyExecuted: parseFloat(updatedOrder.filled_amount) >= parseFloat(updatedOrder.amount)
        };
      });
    } catch (error) {
      logger.error(`Error processing order: ${error.message}`);
      throw error;
    }
  }

  /**
   * Get trade history for a token
   * @param {number} tokenId - Token ID
   * @param {Object} options - Query options
   * @returns {Array} Array of trades
   */
  static async getTradeHistory(tokenId, options = {}) {
    try {
      const { limit = 50, offset = 0, startTime, endTime } = options;
      
      const query = db('trades')
        .select('*')
        .where({ token_id: tokenId })
        .orderBy('executed_at', 'desc')
        .limit(limit)
        .offset(offset);
      
      if (startTime) {
        query.where('executed_at', '>=', startTime);
      }
      
      if (endTime) {
        query.where('executed_at', '<=', endTime);
      }
      
      const trades = await query;
      return trades;
    } catch (error) {
      logger.error(`Error getting trade history: ${error.message}`);
      throw error;
    }
  }

  /**
   * Get user's trade history
   * @param {number} userId - User ID
   * @param {Object} options - Query options
   * @returns {Array} Array of trades
   */
  static async getUserTradeHistory(userId, options = {}) {
    try {
      const { limit = 50, offset = 0, tokenId } = options;
      
      const query = db('trades')
        .select(
          'trades.*',
          'tokens.symbol as token_symbol',
          'tokens.name as token_name',
          'properties.title as property_title'
        )
        .leftJoin('tokens', 'trades.token_id', 'tokens.id')
        .leftJoin('properties', 'tokens.property_id', 'properties.id')
        .where(function() {
          this.where('trades.buyer_id', userId).orWhere('trades.seller_id', userId);
        })
        .orderBy('trades.executed_at', 'desc')
        .limit(limit)
        .offset(offset);
      
      if (tokenId) {
        query.where('trades.token_id', tokenId);
      }
      
      const trades = await query;
      
      // Add a field to indicate if user was buyer or seller
      return trades.map(trade => ({
        ...trade,
        userRole: trade.buyer_id === userId ? 'buyer' : 'seller'
      }));
    } catch (error) {
      logger.error(`Error getting user trade history: ${error.message}`);
      throw error;
    }
  }

  /**
   * Get market statistics for a token
   * @param {number} tokenId - Token ID
   * @returns {Object} Market statistics
   */
  static async getMarketStats(tokenId) {
    try {
      // Get current day's trades
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      const todayTrades = await db('trades')
        .where({ token_id: tokenId })
        .where('executed_at', '>=', today);
      
      // Calculate 24h volume
      const volume24h = todayTrades.reduce(
        (sum, trade) => sum + parseFloat(trade.total_value),
        0
      );
      
      // Get latest price
      const latestPrice = await db('token_prices')
        .where({ token_id: tokenId })
        .orderBy('timestamp', 'desc')
        .first();
      
      // Get 24h ago price for price change calculation
      const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);
      const yesterdayPrice = await db('token_prices')
        .where({ token_id: tokenId })
        .where('timestamp', '<=', yesterday)
        .orderBy('timestamp', 'desc')
        .first();
      
      // Calculate price change
      let priceChange = 0;
      let priceChangePercent = 0;
      
      if (latestPrice && yesterdayPrice) {
        priceChange = parseFloat(latestPrice.price) - parseFloat(yesterdayPrice.price);
        priceChangePercent = (priceChange / parseFloat(yesterdayPrice.price)) * 100;
      }
      
      // Get high, low, open prices for the day
      let highPrice = 0;
      let lowPrice = Number.MAX_VALUE;
      let openPrice = 0;
      
      if (todayTrades.length > 0) {
        // Find high and low
        for (const trade of todayTrades) {
          const price = parseFloat(trade.price);
          if (price > highPrice) highPrice = price;
          if (price < lowPrice) lowPrice = price;
        }
        
        // Get first trade of the day for open price
        const firstTrade = await db('trades')
          .where({ token_id: tokenId })
          .where('executed_at', '>=', today)
          .orderBy('executed_at', 'asc')
          .first();
        
        openPrice = firstTrade ? parseFloat(firstTrade.price) : 0;
      } else {
        // If no trades today, use latest price
        if (latestPrice) {
          highPrice = parseFloat(latestPrice.price);
          lowPrice = parseFloat(latestPrice.price);
          openPrice = parseFloat(latestPrice.price);
        } else {
          lowPrice = 0;
        }
      }
      
      return {
        tokenId,
        currentPrice: latestPrice ? parseFloat(latestPrice.price) : 0,
        priceChange,
        priceChangePercent,
        highPrice,
        lowPrice,
        openPrice,
        volume24h,
        lastUpdated: latestPrice ? latestPrice.timestamp : null
      };
    } catch (error) {
      logger.error(`Error getting market stats: ${error.message}`);
      throw error;
    }
  }
}

module.exports = Trade;
