const User = require('../../models/User');
const { ApiError } = require('../middlewares/errorHandler');
const { generateToken, verifyToken } = require('../../utils/encryption');
const logger = require('../../utils/logger');

/**
 * Register a new user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.register = async (req, res, next) => {
  try {
    const { email, password, firstName, lastName } = req.body;

    // Check if user already exists
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return next(new ApiError(400, 'User with this email already exists'));
    }

    // Create new user
    const user = await User.create({
      email,
      password,
      firstName,
      lastName,
      role: 'user'
    });

    // Generate JWT token
    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role
    });

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      data: {
        user: {
          id: user.id,
          email: user.email,
          firstName: user.first_name,
          lastName: user.last_name,
          role: user.role
        },
        token
      }
    });
  } catch (error) {
    logger.error(`Registration error: ${error.message}`);
    next(error);
  }
};

/**
 * Login user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findByEmail(email);
    if (!user) {
      return next(new ApiError(401, 'Invalid credentials'));
    }

    // Check if password is correct
    const isPasswordValid = await User.comparePassword(password, user.password);
    if (!isPasswordValid) {
      return next(new ApiError(401, 'Invalid credentials'));
    }

    // Generate JWT token
    const token = generateToken({
      id: user.id,
      email: user.email,
      role: user.role
    });

    res.status(200).json({
      success: true,
      message: 'Login successful',
      data: {
        user: {
          id: user.id,
          email: user.email,
          firstName: user.first_name,
          lastName: user.last_name,
          role: user.role
        },
        token
      }
    });
  } catch (error) {
    logger.error(`Login error: ${error.message}`);
    next(error);
  }
};

/**
 * Get current user profile
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.getProfile = async (req, res, next) => {
  try {
    const userId = req.user.id;

    // Get user details
    const user = await User.findById(userId);
    if (!user) {
      return next(new ApiError(404, 'User not found'));
    }

    res.status(200).json({
      success: true,
      data: {
        id: user.id,
        email: user.email,
        firstName: user.first_name,
        lastName: user.last_name,
        role: user.role,
        createdAt: user.created_at
      }
    });
  } catch (error) {
    logger.error(`Get profile error: ${error.message}`);
    next(error);
  }
};

/**
 * Update user profile
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.updateProfile = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { firstName, lastName } = req.body;

    // Update user
    const updatedUser = await User.update(userId, {
      first_name: firstName,
      last_name: lastName
    });

    res.status(200).json({
      success: true,
      message: 'Profile updated successfully',
      data: {
        id: updatedUser.id,
        email: updatedUser.email,
        firstName: updatedUser.first_name,
        lastName: updatedUser.last_name,
        role: updatedUser.role
      }
    });
  } catch (error) {
    logger.error(`Update profile error: ${error.message}`);
    next(error);
  }
};

/**
 * Change password
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.changePassword = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { currentPassword, newPassword } = req.body;

    // Get user
    const user = await User.findById(userId);
    if (!user) {
      return next(new ApiError(404, 'User not found'));
    }

    // Check if current password is correct
    const isPasswordValid = await User.comparePassword(currentPassword, user.password);
    if (!isPasswordValid) {
      return next(new ApiError(401, 'Current password is incorrect'));
    }

    // Update password
    await User.update(userId, { password: newPassword });

    res.status(200).json({
      success: true,
      message: 'Password changed successfully'
    });
  } catch (error) {
    logger.error(`Change password error: ${error.message}`);
    next(error);
  }
};
