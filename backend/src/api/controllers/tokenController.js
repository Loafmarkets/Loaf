const Token = require('../../models/Token');
const Property = require('../../models/Property');
const { ApiError } = require('../middlewares/errorHandler');
const logger = require('../../utils/logger');

/**
 * Get all tokens
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.getAllTokens = async (req, res, next) => {
  try {
    const { 
      page = 1, 
      limit = 10, 
      sortBy = 'created_at', 
      sortOrder = 'desc',
      status
    } = req.query;

    const tokens = await Token.findAll({
      page: parseInt(page),
      limit: parseInt(limit),
      sortBy,
      sortOrder,
      status
    });

    res.status(200).json({
      success: true,
      data: tokens.data,
      pagination: {
        total: tokens.total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(tokens.total / parseInt(limit))
      }
    });
  } catch (error) {
    logger.error(`Get all tokens error: ${error.message}`);
    next(error);
  }
};

/**
 * Get token by ID
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.getTokenById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const token = await Token.findById(id);

    if (!token) {
      return next(new ApiError(404, 'Token not found'));
    }

    // Get property details
    const property = await Property.findById(token.property_id);
    token.property = property;

    // Get token price history
    const priceHistory = await Token.getPriceHistory(id);
    token.price_history = priceHistory;

    res.status(200).json({
      success: true,
      data: token
    });
  } catch (error) {
    logger.error(`Get token by ID error: ${error.message}`);
    next(error);
  }
};

/**
 * Create token
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.createToken = async (req, res, next) => {
  try {
    const { propertyId, name, symbol, totalSupply, initialPrice, decimals } = req.body;

    // Check if property exists
    const property = await Property.findById(propertyId);
    if (!property) {
      return next(new ApiError(404, 'Property not found'));
    }

    // Check if property already has a token
    const existingToken = await Token.findByPropertyId(propertyId);
    if (existingToken) {
      return next(new ApiError(400, 'Property already has a token'));
    }

    // Create token
    const token = await Token.create({
      property_id: propertyId,
      name,
      symbol,
      total_supply: totalSupply,
      initial_price: initialPrice,
      decimals: decimals || 2,
      status: 'active'
    });

    // Create initial price record
    await Token.recordPrice(token.id, initialPrice);

    res.status(201).json({
      success: true,
      message: 'Token created successfully',
      data: token
    });
  } catch (error) {
    logger.error(`Create token error: ${error.message}`);
    next(error);
  }
};

/**
 * Update token
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.updateToken = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, symbol, status } = req.body;

    // Check if token exists
    const token = await Token.findById(id);
    if (!token) {
      return next(new ApiError(404, 'Token not found'));
    }

    // Update token
    const updatedToken = await Token.update(id, {
      name,
      symbol,
      status
    });

    res.status(200).json({
      success: true,
      message: 'Token updated successfully',
      data: updatedToken
    });
  } catch (error) {
    logger.error(`Update token error: ${error.message}`);
    next(error);
  }
};

/**
 * Get token price history
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.getTokenPriceHistory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { timeframe = 'week' } = req.query;

    // Check if token exists
    const token = await Token.findById(id);
    if (!token) {
      return next(new ApiError(404, 'Token not found'));
    }

    // Get price history
    const priceHistory = await Token.getPriceHistory(id, timeframe);

    res.status(200).json({
      success: true,
      data: priceHistory
    });
  } catch (error) {
    logger.error(`Get token price history error: ${error.message}`);
    next(error);
  }
};

/**
 * Get token market stats
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.getTokenMarketStats = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Check if token exists
    const token = await Token.findById(id);
    if (!token) {
      return next(new ApiError(404, 'Token not found'));
    }

    // Get market stats
    const marketStats = await Token.getMarketStats(id);

    res.status(200).json({
      success: true,
      data: marketStats
    });
  } catch (error) {
    logger.error(`Get token market stats error: ${error.message}`);
    next(error);
  }
};
