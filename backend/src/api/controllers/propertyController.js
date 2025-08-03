const Property = require('../../models/Property');
const { ApiError } = require('../middlewares/errorHandler');
const logger = require('../../utils/logger');
const websocketServer = require('../../websocket/websocketServer');

/**
 * Get all properties
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.getAllProperties = async (req, res, next) => {
  try {
    const { 
      page = 1, 
      limit = 10, 
      status, 
      propertyType, 
      minPrice, 
      maxPrice,
      sortBy = 'created_at',
      sortOrder = 'desc'
    } = req.query;

    // Get properties with filters
    const properties = await Property.getAll({
      page: parseInt(page),
      limit: parseInt(limit),
      status,
      propertyType,
      minPrice: minPrice ? parseFloat(minPrice) : undefined,
      maxPrice: maxPrice ? parseFloat(maxPrice) : undefined,
      sortBy,
      sortOrder
    });

    res.status(200).json({
      success: true,
      data: properties.data,
      pagination: {
        total: properties.total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(properties.total / parseInt(limit))
      }
    });
  } catch (error) {
    logger.error(`Get all properties error: ${error.message}`);
    next(error);
  }
};

/**
 * Get property by ID
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.getPropertyById = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Get property
    const property = await Property.findById(id);
    if (!property) {
      return next(new ApiError(404, 'Property not found'));
    }

    res.status(200).json({
      success: true,
      data: property
    });
  } catch (error) {
    logger.error(`Get property by ID error: ${error.message}`);
    next(error);
  }
};

/**
 * Create property
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.createProperty = async (req, res, next) => {
  try {
    const {
      title,
      description,
      address,
      city,
      state,
      country,
      zipCode,
      squareFeet,
      bedrooms,
      bathrooms,
      yearBuilt,
      propertyType,
      valuation,
      features,
      images
    } = req.body;

    // Create property
    const property = await Property.create({
      title,
      description,
      address,
      city,
      state,
      country,
      zip_code: zipCode,
      square_feet: squareFeet,
      bedrooms,
      bathrooms,
      year_built: yearBuilt,
      property_type: propertyType,
      valuation,
      features,
      images,
      created_by: req.user.id
    });

    // Notify clients about new property
    websocketServer.emitPropertyUpdate('property_created', property);

    res.status(201).json({
      success: true,
      message: 'Property created successfully',
      data: property
    });
  } catch (error) {
    logger.error(`Create property error: ${error.message}`);
    next(error);
  }
};

/**
 * Update property
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.updateProperty = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      address,
      city,
      state,
      country,
      zipCode,
      squareFeet,
      bedrooms,
      bathrooms,
      yearBuilt,
      propertyType,
      valuation,
      features,
      images,
      status
    } = req.body;

    // Check if property exists
    const existingProperty = await Property.findById(id);
    if (!existingProperty) {
      return next(new ApiError(404, 'Property not found'));
    }

    // Update property
    const updatedProperty = await Property.update(id, {
      title,
      description,
      address,
      city,
      state,
      country,
      zip_code: zipCode,
      square_feet: squareFeet,
      bedrooms,
      bathrooms,
      year_built: yearBuilt,
      property_type: propertyType,
      valuation,
      features,
      images,
      status
    });

    // Notify clients about updated property
    websocketServer.emitPropertyUpdate('property_updated', updatedProperty);

    res.status(200).json({
      success: true,
      message: 'Property updated successfully',
      data: updatedProperty
    });
  } catch (error) {
    logger.error(`Update property error: ${error.message}`);
    next(error);
  }
};

/**
 * Delete property
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.deleteProperty = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Check if property exists
    const property = await Property.findById(id);
    if (!property) {
      return next(new ApiError(404, 'Property not found'));
    }

    // Delete property
    await Property.delete(id);

    // Notify clients about deleted property
    websocketServer.emitPropertyUpdate('property_deleted', { id });

    res.status(200).json({
      success: true,
      message: 'Property deleted successfully'
    });
  } catch (error) {
    logger.error(`Delete property error: ${error.message}`);
    next(error);
  }
};

/**
 * Get property valuation history
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.getPropertyValuationHistory = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Check if property exists
    const property = await Property.findById(id);
    if (!property) {
      return next(new ApiError(404, 'Property not found'));
    }

    // Get valuation history
    const valuationHistory = await Property.getValuationHistory(id);

    res.status(200).json({
      success: true,
      data: valuationHistory
    });
  } catch (error) {
    logger.error(`Get property valuation history error: ${error.message}`);
    next(error);
  }
};
