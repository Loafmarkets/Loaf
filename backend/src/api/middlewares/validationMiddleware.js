const { ApiError } = require('./errorHandler');
const logger = require('../../utils/logger');

/**
 * Validate request middleware
 * @param {Object} schema - Joi validation schema
 * @returns {Function} Middleware function
 */
exports.validateRequest = (schema) => {
  return (req, res, next) => {
    try {
      if (!schema) {
        return next();
      }
      
      const { error } = schema.validate(req.body, { abortEarly: false });
      
      if (error) {
        const errorMessages = error.details.map(detail => detail.message);
        logger.debug(`Validation error: ${errorMessages.join(', ')}`);
        return next(new ApiError(400, 'Validation error', errorMessages));
      }
      
      next();
    } catch (error) {
      logger.error(`Validation middleware error: ${error.message}`);
      next(error);
    }
  };
};
