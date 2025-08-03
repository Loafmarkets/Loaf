const Order = require('../models/Order');
const Trade = require('../models/Trade');
const Wallet = require('../models/Wallet');
const Token = require('../models/Token');
const logger = require('../utils/logger');
const websocketServer = require('../websocket/websocketServer');

/**
 * Trading Engine class
 * Handles order matching and trade execution
 */
class TradingEngine {
  constructor() {
    this.isProcessing = false;
    this.processingQueue = [];
    logger.info('Trading Engine initialized');
  }

  /**
   * Process a new order
   * @param {Object} order - Order object
   * @returns {Promise<Object>} Processed order with any resulting trades
   */
  async processOrder(order) {
    try {
      // If already processing an order, add to queue
      if (this.isProcessing) {
        return new Promise((resolve, reject) => {
          this.processingQueue.push({ order, resolve, reject });
        });
      }

      this.isProcessing = true;
      logger.debug(`Processing ${order.type} order for token ${order.token_id} at price ${order.price}`);

      // Execute order matching
      const result = await this._executeOrderMatching(order);
      
      // Process next order in queue if any
      this.isProcessing = false;
      if (this.processingQueue.length > 0) {
        const nextOrder = this.processingQueue.shift();
        this.processOrder(nextOrder.order)
          .then(nextOrder.resolve)
          .catch(nextOrder.reject);
      }

      return result;
    } catch (error) {
      this.isProcessing = false;
      logger.error(`Error processing order: ${error.message}`);
      throw error;
    }
  }

  /**
   * Execute order matching algorithm
   * @param {Object} order - Order object
   * @returns {Promise<Object>} Processed order with any resulting trades
   */
  async _executeOrderMatching(order) {
    try {
      let matchingOrders;
      let trades = [];
      let remainingAmount = parseFloat(order.amount);
      
      // Find matching orders
      if (order.type === 'buy') {
        // For buy orders, find sell orders with price <= buy price (ascending price)
        matchingOrders = await Order.findMatchingSellOrders(order.token_id, order.price);
      } else {
        // For sell orders, find buy orders with price >= sell price (descending price)
        matchingOrders = await Order.findMatchingBuyOrders(order.token_id, order.price);
      }

      // If no matching orders, just save the order
      if (!matchingOrders || matchingOrders.length === 0) {
        const savedOrder = await Order.create(order);
        
        // Emit order book update
        this._emitOrderBookUpdate(order.token_id);
        
        return { order: savedOrder, trades: [] };
      }

      // Process matching orders
      for (const matchingOrder of matchingOrders) {
        // Skip if no remaining amount to fill
        if (remainingAmount <= 0) break;
        
        // Calculate trade amount (minimum of remaining amounts)
        const matchingOrderRemainingAmount = parseFloat(matchingOrder.amount) - parseFloat(matchingOrder.filled_amount);
        const tradeAmount = Math.min(remainingAmount, matchingOrderRemainingAmount);
        
        // Execute trade at matching order's price (price-time priority)
        const trade = await this._executeTrade({
          buyOrderId: order.type === 'buy' ? order.id : matchingOrder.id,
          sellOrderId: order.type === 'sell' ? order.id : matchingOrder.id,
          buyerId: order.type === 'buy' ? order.user_id : matchingOrder.user_id,
          sellerId: order.type === 'sell' ? order.user_id : matchingOrder.user_id,
          tokenId: order.token_id,
          amount: tradeAmount,
          price: matchingOrder.price
        });
        
        trades.push(trade);
        
        // Update remaining amount
        remainingAmount -= tradeAmount;
        
        // Update matching order
        const updatedFilledAmount = parseFloat(matchingOrder.filled_amount) + tradeAmount;
        const matchingOrderStatus = 
          updatedFilledAmount >= parseFloat(matchingOrder.amount) ? 'filled' : 'partially_filled';
        
        await Order.update(matchingOrder.id, {
          filled_amount: updatedFilledAmount,
          status: matchingOrderStatus
        });
        
        // Emit trade update
        this._emitTradeUpdate(trade);
      }
      
      // Create or update the original order
      let savedOrder;
      if (remainingAmount <= 0) {
        // Order fully filled
        savedOrder = await Order.create({
          ...order,
          filled_amount: order.amount,
          status: 'filled'
        });
      } else if (remainingAmount < parseFloat(order.amount)) {
        // Order partially filled
        savedOrder = await Order.create({
          ...order,
          filled_amount: parseFloat(order.amount) - remainingAmount,
          status: 'partially_filled'
        });
      } else {
        // No fills
        savedOrder = await Order.create(order);
      }
      
      // Emit order book update
      this._emitOrderBookUpdate(order.token_id);
      
      // Update token price
      if (trades.length > 0) {
        await this._updateTokenPrice(order.token_id, trades[trades.length - 1].price);
      }
      
      return { order: savedOrder, trades };
    } catch (error) {
      logger.error(`Error executing order matching: ${error.message}`);
      throw error;
    }
  }

  /**
   * Execute a trade between two orders
   * @param {Object} tradeData - Trade data
   * @returns {Promise<Object>} Executed trade
   */
  async _executeTrade(tradeData) {
    try {
      const { buyOrderId, sellOrderId, buyerId, sellerId, tokenId, amount, price } = tradeData;
      
      // Calculate total value
      const totalValue = parseFloat(amount) * parseFloat(price);
      
      // Create trade record
      const trade = await Trade.create({
        token_id: tokenId,
        buy_order_id: buyOrderId,
        sell_order_id: sellOrderId,
        buyer_id: buyerId,
        seller_id: sellerId,
        amount,
        price,
        total_value: totalValue,
        executed_at: new Date()
      });
      
      // Update wallets
      await Wallet.transferTokens({
        fromUserId: sellerId,
        toUserId: buyerId,
        tokenId,
        amount,
        price,
        tradeId: trade.id
      });
      
      logger.info(`Trade executed: ${amount} tokens of token ${tokenId} at price ${price}`);
      
      return trade;
    } catch (error) {
      logger.error(`Error executing trade: ${error.message}`);
      throw error;
    }
  }

  /**
   * Update token price
   * @param {number} tokenId - Token ID
   * @param {number} price - New price
   */
  async _updateTokenPrice(tokenId, price) {
    try {
      await Token.updatePrice(tokenId, price);
    } catch (error) {
      logger.error(`Error updating token price: ${error.message}`);
    }
  }

  /**
   * Emit order book update
   * @param {number} tokenId - Token ID
   */
  async _emitOrderBookUpdate(tokenId) {
    try {
      const orderBook = await Order.getOrderBook(tokenId);
      websocketServer.emitOrderBookUpdate(tokenId, orderBook);
    } catch (error) {
      logger.error(`Error emitting order book update: ${error.message}`);
    }
  }

  /**
   * Emit trade update
   * @param {Object} trade - Trade object
   */
  _emitTradeUpdate(trade) {
    try {
      websocketServer.emitTradeUpdate(trade.token_id, trade);
    } catch (error) {
      logger.error(`Error emitting trade update: ${error.message}`);
    }
  }

  /**
   * Get market statistics for a token
   * @param {number} tokenId - Token ID
   * @returns {Promise<Object>} Market statistics
   */
  async getMarketStats(tokenId) {
    try {
      return await Trade.getMarketStats(tokenId);
    } catch (error) {
      logger.error(`Error getting market stats: ${error.message}`);
      throw error;
    }
  }
}

// Export singleton instance
module.exports = new TradingEngine();
