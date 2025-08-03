const { verifyToken } = require('../../utils/encryption');
const { ApiError } = require('./errorHandler');
const logger = require('../../utils/logger');

/**
 * Authenticate user middleware
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.authenticate = (req, res, next) => {
  try {
    // Get token from header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return next(new ApiError(401, 'Authentication required'));
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      return next(new ApiError(401, 'Authentication required'));
    }

    // Verify token
    const decoded = verifyToken(token);
    
    // Add user to request
    req.user = decoded;
    
    next();
  } catch (error) {
    logger.error(`Authentication error: ${error.message}`);
    return next(new ApiError(401, 'Invalid or expired token'));
  }
};

/**
 * Authorize user role middleware
 * @param {string[]} roles - Array of allowed roles
 * @returns {Function} Middleware function
 */
exports.authorize = (roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return next(new ApiError(401, 'Authentication required'));
    }

    if (!roles.includes(req.user.role)) {
      return next(new ApiError(403, 'Not authorized to access this resource'));
    }

    next();
  };
};
