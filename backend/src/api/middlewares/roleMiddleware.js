/**
 * Role-based authorization middleware
 * Checks if the authenticated user has the required role
 */

/**
 * Authorize middleware function
 * @param {string|string[]} roles - Required role(s) to access the route
 * @returns {function} Express middleware function
 */
exports.authorize = (roles) => {
  // Convert string to array if single role is provided
  if (typeof roles === 'string') {
    roles = [roles];
  }

  return (req, res, next) => {
    // User must be authenticated first
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      });
    }

    // Check if user's role is in the allowed roles
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: 'You do not have permission to perform this action'
      });
    }

    // User has required role, proceed
    next();
  };
};
