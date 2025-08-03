const knexfile = require('../../knexfile');
const knex = require('knex')(knexfile[process.env.NODE_ENV || 'development']);

const db = knex;

class EarlyAccessSignup {
  static tableName = 'early_access_signups';

  /**
   * Create a new early access signup
   * @param {Object} data - The signup data
   * @param {string} data.email - Email address
   * @param {string} [data.name] - Name (optional)
   * @param {boolean} [data.accept_marketing] - Whether user accepts marketing emails
   * @returns {Promise<Object>} The created signup
   */
  static async create(data) {
    try {
      const [signup] = await db(this.tableName).insert({
        email: data.email,
        name: data.name || null,
        accept_marketing: data.accept_marketing !== undefined ? data.accept_marketing : true,
      }).returning('*');
      
      return signup;
    } catch (error) {
      // Handle unique constraint violation
      if (error.code === '23505' || error.message.includes('unique constraint') || error.message.includes('UNIQUE constraint failed')) {
        throw new Error('This email is already registered for early access');
      }
      throw error;
    }
  }

  /**
   * Find a signup by email
   * @param {string} email - The email to search for
   * @returns {Promise<Object|null>} The signup or null if not found
   */
  static async findByEmail(email) {
    return db(this.tableName).where({ email }).first();
  }

  /**
   * Get all signups
   * @param {Object} options - Query options
   * @param {number} [options.limit] - Maximum number of results
   * @param {number} [options.offset] - Offset for pagination
   * @returns {Promise<Array>} Array of signups
   */
  static async getAll({ limit = 100, offset = 0 } = {}) {
    return db(this.tableName)
      .select('*')
      .orderBy('created_at', 'desc')
      .limit(limit)
      .offset(offset);
  }
}

module.exports = EarlyAccessSignup;
