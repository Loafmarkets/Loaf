const IPO = require('../../models/IPO');
const Property = require('../../models/Property');
const Token = require('../../models/Token');
const { ApiError } = require('../middlewares/errorHandler');
const logger = require('../../utils/logger');
const websocketServer = require('../../websocket/websocketServer');

/**
 * Get all IPOs
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.getAllIPOs = async (req, res, next) => {
  try {
    const { 
      page = 1, 
      limit = 10, 
      status,
      sortBy = 'created_at',
      sortOrder = 'desc'
    } = req.query;

    // Get IPOs with filters
    const ipos = await IPO.getAll({
      page: parseInt(page),
      limit: parseInt(limit),
      status,
      sortBy,
      sortOrder
    });

    res.status(200).json({
      success: true,
      data: ipos.data,
      pagination: {
        total: ipos.total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(ipos.total / parseInt(limit))
      }
    });
  } catch (error) {
    logger.error(`Get all IPOs error: ${error.message}`);
    next(error);
  }
};

/**
 * Get IPO by ID
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.getIPOById = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Get IPO
    const ipo = await IPO.findById(id);
    if (!ipo) {
      return next(new ApiError(404, 'IPO not found'));
    }

    res.status(200).json({
      success: true,
      data: ipo
    });
  } catch (error) {
    logger.error(`Get IPO by ID error: ${error.message}`);
    next(error);
  }
};

/**
 * Create IPO
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.createIPO = async (req, res, next) => {
  try {
    const {
      propertyId,
      title,
      description,
      guidePrice,
      totalTokens,
      tokensForSale,
      minInvestment,
      maxInvestmentPerUser,
      startDate,
      endDate
    } = req.body;

    // Check if property exists
    const property = await Property.findById(propertyId);
    if (!property) {
      return next(new ApiError(404, 'Property not found'));
    }

    // Check if property is already tokenized
    if (property.status === 'tokenized') {
      return next(new ApiError(400, 'Property is already tokenized'));
    }

    // Create token for the property
    const tokenSymbol = `PROP${propertyId}`;
    const tokenName = `Property Token ${propertyId}`;
    
    const token = await Token.create({
      property_id: propertyId,
      symbol: tokenSymbol,
      name: tokenName,
      total_supply: totalTokens,
      initial_price: guidePrice,
      decimals: 2,
      status: 'created'
    });

    // Create IPO
    const ipo = await IPO.create({
      property_id: propertyId,
      token_id: token.id,
      title,
      description,
      guide_price: guidePrice,
      total_tokens: totalTokens,
      tokens_for_sale: tokensForSale,
      min_investment: minInvestment,
      max_investment_per_user: maxInvestmentPerUser,
      start_date: new Date(startDate),
      end_date: new Date(endDate),
      created_by: req.user.id
    });

    // Update property status
    await Property.update(propertyId, { status: 'tokenized' });

    // Notify clients about new IPO
    websocketServer.emitIPOUpdate('ipo_created', ipo);

    res.status(201).json({
      success: true,
      message: 'IPO created successfully',
      data: ipo
    });
  } catch (error) {
    logger.error(`Create IPO error: ${error.message}`);
    next(error);
  }
};

/**
 * Update IPO
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.updateIPO = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      guidePrice,
      minInvestment,
      maxInvestmentPerUser,
      startDate,
      endDate,
      status
    } = req.body;

    // Check if IPO exists
    const existingIPO = await IPO.findById(id);
    if (!existingIPO) {
      return next(new ApiError(404, 'IPO not found'));
    }

    // Check if IPO can be updated
    if (existingIPO.status === 'completed' || existingIPO.status === 'cancelled') {
      return next(new ApiError(400, 'Cannot update completed or cancelled IPO'));
    }

    // Update IPO
    const updatedIPO = await IPO.update(id, {
      title,
      description,
      guide_price: guidePrice,
      min_investment: minInvestment,
      max_investment_per_user: maxInvestmentPerUser,
      start_date: startDate ? new Date(startDate) : undefined,
      end_date: endDate ? new Date(endDate) : undefined,
      status
    });

    // Notify clients about updated IPO
    websocketServer.emitIPOUpdate('ipo_updated', updatedIPO);

    res.status(200).json({
      success: true,
      message: 'IPO updated successfully',
      data: updatedIPO
    });
  } catch (error) {
    logger.error(`Update IPO error: ${error.message}`);
    next(error);
  }
};

/**
 * Cancel IPO
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.cancelIPO = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Check if IPO exists
    const ipo = await IPO.findById(id);
    if (!ipo) {
      return next(new ApiError(404, 'IPO not found'));
    }

    // Check if IPO can be cancelled
    if (ipo.status === 'completed' || ipo.status === 'cancelled') {
      return next(new ApiError(400, 'Cannot cancel completed or cancelled IPO'));
    }

    // Cancel IPO
    const cancelledIPO = await IPO.update(id, { status: 'cancelled' });

    // Update property status back to active
    await Property.update(ipo.property_id, { status: 'active' });

    // Update token status
    await Token.update(ipo.token_id, { status: 'delisted' });

    // Notify clients about cancelled IPO
    websocketServer.emitIPOUpdate('ipo_cancelled', cancelledIPO);

    res.status(200).json({
      success: true,
      message: 'IPO cancelled successfully',
      data: cancelledIPO
    });
  } catch (error) {
    logger.error(`Cancel IPO error: ${error.message}`);
    next(error);
  }
};

/**
 * Subscribe to IPO
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.subscribeToIPO = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { tokenAmount } = req.body;
    const userId = req.user.id;

    // Subscribe to IPO
    const subscription = await IPO.subscribe({
      ipoId: id,
      userId,
      tokenAmount: parseFloat(tokenAmount)
    });

    // Notify clients about new subscription
    websocketServer.emitIPOUpdate('ipo_subscription', {
      ipoId: id,
      subscription
    });

    res.status(201).json({
      success: true,
      message: 'Successfully subscribed to IPO',
      data: subscription
    });
  } catch (error) {
    logger.error(`Subscribe to IPO error: ${error.message}`);
    next(error);
  }
};

/**
 * Finalize IPO
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.finalizeIPO = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Check if IPO exists
    const ipo = await IPO.findById(id);
    if (!ipo) {
      return next(new ApiError(404, 'IPO not found'));
    }

    // Check if IPO can be finalized
    if (ipo.status !== 'active') {
      return next(new ApiError(400, 'Only active IPOs can be finalized'));
    }

    // Check if IPO end date has passed
    if (new Date(ipo.end_date) > new Date()) {
      return next(new ApiError(400, 'IPO end date has not passed yet'));
    }

    // Finalize IPO
    const finalizedIPO = await IPO.finalize(id);

    // Notify clients about finalized IPO
    websocketServer.emitIPOUpdate('ipo_finalized', finalizedIPO);

    res.status(200).json({
      success: true,
      message: 'IPO finalized successfully',
      data: finalizedIPO
    });
  } catch (error) {
    logger.error(`Finalize IPO error: ${error.message}`);
    next(error);
  }
};

/**
 * Get IPO subscriptions
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.getIPOSubscriptions = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { page = 1, limit = 10 } = req.query;

    // Check if IPO exists
    const ipo = await IPO.findById(id);
    if (!ipo) {
      return next(new ApiError(404, 'IPO not found'));
    }

    // Get IPO subscriptions
    const subscriptions = await IPO.getSubscriptions(id, {
      page: parseInt(page),
      limit: parseInt(limit)
    });

    res.status(200).json({
      success: true,
      data: subscriptions.data,
      pagination: {
        total: subscriptions.total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(subscriptions.total / parseInt(limit))
      }
    });
  } catch (error) {
    logger.error(`Get IPO subscriptions error: ${error.message}`);
    next(error);
  }
};
