const Order = require('../../models/Order');
const Token = require('../../models/Token');
const Wallet = require('../../models/Wallet');
const tradingEngine = require('../../trading/tradingEngine');
const { ApiError } = require('../middlewares/errorHandler');
const logger = require('../../utils/logger');

/**
 * Create a new order
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.createOrder = async (req, res, next) => {
  try {
    const { tokenId, type, amount, price } = req.body;
    const userId = req.user.id;

    // Check if token exists and is active
    const token = await Token.findById(tokenId);
    if (!token) {
      return next(new ApiError(404, 'Token not found'));
    }
    if (token.status !== 'active') {
      return next(new ApiError(400, 'Token is not active for trading'));
    }

    // Check if user has sufficient balance for the order
    if (type === 'sell') {
      // For sell orders, check token balance
      const wallet = await Wallet.findByUserAndToken(userId, tokenId);
      if (!wallet || parseFloat(wallet.balance) < parseFloat(amount)) {
        return next(new ApiError(400, 'Insufficient token balance'));
      }
      
      // Lock tokens for the sell order
      await Wallet.lockTokens(userId, tokenId, amount);
    } else {
      // For buy orders, check if user has enough funds (USD)
      const totalCost = parseFloat(amount) * parseFloat(price);
      const hasEnoughFunds = await Wallet.checkSufficientFunds(userId, totalCost);
      if (!hasEnoughFunds) {
        return next(new ApiError(400, 'Insufficient funds'));
      }
      
      // Lock funds for the buy order
      await Wallet.lockFunds(userId, totalCost);
    }

    // Create order object
    const order = {
      user_id: userId,
      token_id: tokenId,
      type,
      amount,
      price,
      filled_amount: 0,
      status: 'open'
    };

    // Process order through trading engine
    const result = await tradingEngine.processOrder(order);

    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      data: {
        order: result.order,
        trades: result.trades
      }
    });
  } catch (error) {
    logger.error(`Create order error: ${error.message}`);
    next(error);
  }
};

/**
 * Get all orders for a user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.getUserOrders = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { 
      page = 1, 
      limit = 10, 
      status, 
      type,
      tokenId,
      sortBy = 'created_at',
      sortOrder = 'desc'
    } = req.query;

    // Get user orders
    const orders = await Order.getUserOrders(userId, {
      page: parseInt(page),
      limit: parseInt(limit),
      status,
      type,
      tokenId: tokenId ? parseInt(tokenId) : undefined,
      sortBy,
      sortOrder
    });

    res.status(200).json({
      success: true,
      data: orders.data,
      pagination: {
        total: orders.total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(orders.total / parseInt(limit))
      }
    });
  } catch (error) {
    logger.error(`Get user orders error: ${error.message}`);
    next(error);
  }
};

/**
 * Get order by ID
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.getOrderById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    // Get order
    const order = await Order.findById(id);
    if (!order) {
      return next(new ApiError(404, 'Order not found'));
    }

    // Check if order belongs to user or user is admin
    if (order.user_id !== userId && req.user.role !== 'admin') {
      return next(new ApiError(403, 'Not authorized to access this order'));
    }

    res.status(200).json({
      success: true,
      data: order
    });
  } catch (error) {
    logger.error(`Get order by ID error: ${error.message}`);
    next(error);
  }
};

/**
 * Cancel order
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.cancelOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    // Get order
    const order = await Order.findById(id);
    if (!order) {
      return next(new ApiError(404, 'Order not found'));
    }

    // Check if order belongs to user or user is admin
    if (order.user_id !== userId && req.user.role !== 'admin') {
      return next(new ApiError(403, 'Not authorized to cancel this order'));
    }

    // Check if order can be cancelled
    if (order.status !== 'open' && order.status !== 'partially_filled') {
      return next(new ApiError(400, 'Order cannot be cancelled'));
    }

    // Cancel order
    const cancelledOrder = await Order.cancel(id);

    // Unlock tokens or funds
    if (order.type === 'sell') {
      // Calculate remaining tokens to unlock
      const remainingAmount = parseFloat(order.amount) - parseFloat(order.filled_amount);
      if (remainingAmount > 0) {
        await Wallet.unlockTokens(userId, order.token_id, remainingAmount);
      }
    } else {
      // Calculate remaining funds to unlock
      const remainingAmount = (parseFloat(order.amount) - parseFloat(order.filled_amount)) * parseFloat(order.price);
      if (remainingAmount > 0) {
        await Wallet.unlockFunds(userId, remainingAmount);
      }
    }

    // Get updated order book
    const orderBook = await Order.getOrderBook(order.token_id);

    res.status(200).json({
      success: true,
      message: 'Order cancelled successfully',
      data: {
        order: cancelledOrder,
        orderBook
      }
    });
  } catch (error) {
    logger.error(`Cancel order error: ${error.message}`);
    next(error);
  }
};

/**
 * Get order book for a token
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.getOrderBook = async (req, res, next) => {
  try {
    const { tokenId } = req.params;

    // Check if token exists
    const token = await Token.findById(tokenId);
    if (!token) {
      return next(new ApiError(404, 'Token not found'));
    }

    // Get order book
    const orderBook = await Order.getOrderBook(tokenId);

    // Get market stats
    const marketStats = await tradingEngine.getMarketStats(tokenId);

    res.status(200).json({
      success: true,
      data: {
        orderBook,
        marketStats
      }
    });
  } catch (error) {
    logger.error(`Get order book error: ${error.message}`);
    next(error);
  }
};
