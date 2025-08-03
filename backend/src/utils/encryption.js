const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const logger = require('./logger');

/**
 * Generate JWT token
 * @param {Object} payload - Data to be encoded in the token
 * @returns {string} JWT token
 */
exports.generateToken = (payload) => {
  try {
    const secret = process.env.JWT_SECRET || 'default_jwt_secret';
    const expiresIn = process.env.JWT_EXPIRES_IN || '24h';
    
    return jwt.sign(payload, secret, { expiresIn });
  } catch (error) {
    logger.error(`Error generating token: ${error.message}`);
    throw error;
  }
};

/**
 * Verify JWT token
 * @param {string} token - JWT token to verify
 * @returns {Object} Decoded token payload
 */
exports.verifyToken = (token) => {
  try {
    const secret = process.env.JWT_SECRET || 'default_jwt_secret';
    
    return jwt.verify(token, secret);
  } catch (error) {
    logger.error(`Error verifying token: ${error.message}`);
    throw error;
  }
};

/**
 * Hash password
 * @param {string} password - Plain text password
 * @returns {Promise<string>} Hashed password
 */
exports.hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  } catch (error) {
    logger.error(`Error hashing password: ${error.message}`);
    throw error;
  }
};

/**
 * Compare password with hashed password
 * @param {string} password - Plain text password
 * @param {string} hashedPassword - Hashed password
 * @returns {Promise<boolean>} True if passwords match
 */
exports.comparePassword = async (password, hashedPassword) => {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    logger.error(`Error comparing passwords: ${error.message}`);
    throw error;
  }
};
