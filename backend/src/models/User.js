const { initializeDatabase } = require('../config/database');
const bcrypt = require('bcryptjs');
const logger = require('../utils/logger');

// Initialize database connection
const db = initializeDatabase();

/**
 * User model for authentication and profile management
 */
class User {
  /**
   * Create a new user
   * @param {Object} userData - User data
   * @returns {Object} Created user
   */
  static async create(userData) {
    try {
      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(userData.password, salt);

      // Insert user into database
      const [user] = await db('users')
        .insert({
          email: userData.email.toLowerCase(),
          password: hashedPassword,
          first_name: userData.firstName,
          last_name: userData.lastName,
          role: userData.role || 'user',
          created_at: new Date(),
          updated_at: new Date()
        })
        .returning(['id', 'email', 'first_name', 'last_name', 'role', 'created_at']);

      return user;
    } catch (error) {
      logger.error(`Error creating user: ${error.message}`);
      throw error;
    }
  }

  /**
   * Find user by ID
   * @param {number} id - User ID
   * @returns {Object|null} User object or null if not found
   */
  static async findById(id) {
    try {
      const user = await db('users')
        .where({ id })
        .select('id', 'email', 'first_name', 'last_name', 'role', 'created_at')
        .first();

      return user || null;
    } catch (error) {
      logger.error(`Error finding user by ID: ${error.message}`);
      throw error;
    }
  }

  /**
   * Find user by email
   * @param {string} email - User email
   * @returns {Object|null} User object or null if not found
   */
  static async findByEmail(email) {
    try {
      const user = await db('users')
        .where({ email: email.toLowerCase() })
        .select('*')
        .first();

      return user || null;
    } catch (error) {
      logger.error(`Error finding user by email: ${error.message}`);
      throw error;
    }
  }

  /**
   * Update user information
   * @param {number} id - User ID
   * @param {Object} updateData - Data to update
   * @returns {Object} Updated user
   */
  static async update(id, updateData) {
    try {
      // If password is being updated, hash it
      if (updateData.password) {
        const salt = await bcrypt.genSalt(10);
        updateData.password = await bcrypt.hash(updateData.password, salt);
      }

      // Update user in database
      const [updatedUser] = await db('users')
        .where({ id })
        .update({
          ...updateData,
          updated_at: new Date()
        })
        .returning(['id', 'email', 'first_name', 'last_name', 'role', 'created_at', 'updated_at']);

      return updatedUser;
    } catch (error) {
      logger.error(`Error updating user: ${error.message}`);
      throw error;
    }
  }

  /**
   * Compare password with hashed password in database
   * @param {string} password - Plain text password
   * @param {string} hashedPassword - Hashed password from database
   * @returns {boolean} True if passwords match
   */
  static async comparePassword(password, hashedPassword) {
    try {
      return await bcrypt.compare(password, hashedPassword);
    } catch (error) {
      logger.error(`Error comparing passwords: ${error.message}`);
      throw error;
    }
  }

  /**
   * Delete user by ID
   * @param {number} id - User ID
   * @returns {boolean} True if user was deleted
   */
  static async delete(id) {
    try {
      const deleted = await db('users')
        .where({ id })
        .del();

      return deleted > 0;
    } catch (error) {
      logger.error(`Error deleting user: ${error.message}`);
      throw error;
    }
  }
}

module.exports = User;
