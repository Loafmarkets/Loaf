const Trade = require('../../models/Trade');
const Token = require('../../models/Token');
const { ApiError } = require('../middlewares/errorHandler');
const logger = require('../../utils/logger');

/**
 * Get all trades
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.getAllTrades = async (req, res, next) => {
  try {
    const { 
      page = 1, 
      limit = 10, 
      tokenId,
      sortBy = 'executed_at', 
      sortOrder = 'desc' 
    } = req.query;

    const trades = await Trade.findAll({
      page: parseInt(page),
      limit: parseInt(limit),
      tokenId: tokenId ? parseInt(tokenId) : undefined,
      sortBy,
      sortOrder
    });

    res.status(200).json({
      success: true,
      data: trades.data,
      pagination: {
        total: trades.total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(trades.total / parseInt(limit))
      }
    });
  } catch (error) {
    logger.error(`Get all trades error: ${error.message}`);
    next(error);
  }
};

/**
 * Get trade by ID
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.getTradeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const trade = await Trade.findById(id);

    if (!trade) {
      return next(new ApiError(404, 'Trade not found'));
    }

    res.status(200).json({
      success: true,
      data: trade
    });
  } catch (error) {
    logger.error(`Get trade by ID error: ${error.message}`);
    next(error);
  }
};

/**
 * Get user trades
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.getUserTrades = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { 
      page = 1, 
      limit = 10, 
      tokenId,
      type, // 'buy' or 'sell'
      sortBy = 'executed_at', 
      sortOrder = 'desc' 
    } = req.query;

    const trades = await Trade.findByUser(userId, {
      page: parseInt(page),
      limit: parseInt(limit),
      tokenId: tokenId ? parseInt(tokenId) : undefined,
      type,
      sortBy,
      sortOrder
    });

    res.status(200).json({
      success: true,
      data: trades.data,
      pagination: {
        total: trades.total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(trades.total / parseInt(limit))
      }
    });
  } catch (error) {
    logger.error(`Get user trades error: ${error.message}`);
    next(error);
  }
};

/**
 * Get token trades
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.getTokenTrades = async (req, res, next) => {
  try {
    const { tokenId } = req.params;
    const { 
      page = 1, 
      limit = 10,
      sortBy = 'executed_at', 
      sortOrder = 'desc' 
    } = req.query;

    // Check if token exists
    const token = await Token.findById(tokenId);
    if (!token) {
      return next(new ApiError(404, 'Token not found'));
    }

    const trades = await Trade.findByToken(tokenId, {
      page: parseInt(page),
      limit: parseInt(limit),
      sortBy,
      sortOrder
    });

    res.status(200).json({
      success: true,
      data: trades.data,
      pagination: {
        total: trades.total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(trades.total / parseInt(limit))
      }
    });
  } catch (error) {
    logger.error(`Get token trades error: ${error.message}`);
    next(error);
  }
};

/**
 * Get trade statistics
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.getTradeStatistics = async (req, res, next) => {
  try {
    const { tokenId } = req.params;
    const { timeframe = '24h' } = req.query;

    // Check if token exists
    const token = await Token.findById(tokenId);
    if (!token) {
      return next(new ApiError(404, 'Token not found'));
    }

    const stats = await Trade.getStatistics(tokenId, timeframe);

    res.status(200).json({
      success: true,
      data: stats
    });
  } catch (error) {
    logger.error(`Get trade statistics error: ${error.message}`);
    next(error);
  }
};
