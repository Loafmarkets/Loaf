const { initializeDatabase } = require('../config/database');
const logger = require('../utils/logger');

// Initialize database connection
const db = initializeDatabase();

/**
 * Token model for property tokenization
 */
class Token {
  /**
   * Create a new token for a property
   * @param {Object} tokenData - Token data
   * @returns {Object} Created token
   */
  static async create(tokenData) {
    try {
      const [token] = await db('tokens')
        .insert({
          property_id: tokenData.property_id,
          symbol: tokenData.symbol,
          name: tokenData.name,
          total_supply: tokenData.totalSupply,
          initial_price: tokenData.initialPrice,
          decimals: tokenData.decimals || 2,
          status: tokenData.status || 'created',
          created_at: new Date(),
          updated_at: new Date()
        })
        .returning('*');

      return token;
    } catch (error) {
      logger.error(`Error creating token: ${error.message}`);
      throw error;
    }
  }

  /**
   * Find token by ID
   * @param {number} id - Token ID
   * @returns {Object|null} Token object or null if not found
   */
  static async findById(id) {
    try {
      const token = await db('tokens')
        .where({ id })
        .first();

      return token || null;
    } catch (error) {
      logger.error(`Error finding token by ID: ${error.message}`);
      throw error;
    }
  }

  /**
   * Find token by property ID
   * @param {number} propertyId - Property ID
   * @returns {Object|null} Token object or null if not found
   */
  static async findByPropertyId(propertyId) {
    try {
      const token = await db('tokens')
        .where({ property_id: propertyId })
        .first();

      return token || null;
    } catch (error) {
      logger.error(`Error finding token by property ID: ${error.message}`);
      throw error;
    }
  }

  /**
   * Get all tokens with optional filtering
   * @param {Object} filters - Filter criteria
   * @param {number} page - Page number for pagination
   * @param {number} limit - Number of items per page
   * @returns {Array} Array of tokens
   */
  static async findAll(filters = {}, page = 1, limit = 10) {
    try {
      const offset = (page - 1) * limit;
      
      // Build query with filters
      const query = db('tokens')
        .select('tokens.*', 'properties.title as property_title')
        .leftJoin('properties', 'tokens.property_id', 'properties.id')
        .orderBy('tokens.created_at', 'desc')
        .limit(limit)
        .offset(offset);
      
      // Apply filters if provided
      if (filters.status) {
        query.where('tokens.status', filters.status);
      }
      
      if (filters.symbol) {
        query.where('tokens.symbol', 'ilike', `%${filters.symbol}%`);
      }
      
      // Execute query
      const tokens = await query;
      
      // Get total count for pagination
      const countQuery = db('tokens').count('id as count').first();
      
      // Apply the same filters to count query
      if (filters.status) {
        countQuery.where('status', filters.status);
      }
      
      if (filters.symbol) {
        countQuery.where('symbol', 'ilike', `%${filters.symbol}%`);
      }
      
      const count = await countQuery;
      
      return {
        data: tokens,
        total: parseInt(count.count)
      };
    } catch (error) {
      logger.error(`Error getting tokens: ${error.message}`);
      throw error;
    }
  }

  /**
   * Update token information
   * @param {number} id - Token ID
   * @param {Object} updateData - Data to update
   * @returns {Object} Updated token
   */
  static async update(id, updateData) {
    try {
      const [updatedToken] = await db('tokens')
        .where({ id })
        .update({
          ...updateData,
          updated_at: new Date()
        })
        .returning('*');
      
      return updatedToken;
    } catch (error) {
      logger.error(`Error updating token: ${error.message}`);
      throw error;
    }
  }

  /**
   * Get token price history
   * @param {number} id - Token ID
   * @param {string} timeframe - Timeframe for data points (1h, 24h, 7d, 30d, all)
   * @returns {Array} Array of price records
   */
  static async getPriceHistory(id, timeframe = 'all') {
    try {
      let query = db('token_prices')
        .where({ token_id: id })
        .orderBy('timestamp', 'asc');
      
      // Apply timeframe filter
      const now = new Date();
      
      if (timeframe === '1h') {
        query.where('timestamp', '>=', new Date(now - 60 * 60 * 1000));
      } else if (timeframe === '24h') {
        query.where('timestamp', '>=', new Date(now - 24 * 60 * 60 * 1000));
      } else if (timeframe === '7d') {
        query.where('timestamp', '>=', new Date(now - 7 * 24 * 60 * 60 * 1000));
      } else if (timeframe === '30d') {
        query.where('timestamp', '>=', new Date(now - 30 * 24 * 60 * 60 * 1000));
      }
      
      const priceHistory = await query;
      
      return priceHistory;
    } catch (error) {
      logger.error(`Error getting token price history: ${error.message}`);
      throw error;
    }
  }

  /**
   * Get current token price
   * @param {number} id - Token ID
   * @returns {number} Current token price
   */
  static async getCurrentPrice(id) {
    try {
      const latestPrice = await db('token_prices')
        .where({ token_id: id })
        .orderBy('timestamp', 'desc')
        .first();
      
      return latestPrice ? latestPrice.price : null;
    } catch (error) {
      logger.error(`Error getting current token price: ${error.message}`);
      throw error;
    }
  }

  /**
   * Record a new token price
   * @param {number} id - Token ID
   * @param {number} price - Token price
   * @returns {Object} Created price record
   */
  static async recordPrice(id, price) {
    try {
      const [priceRecord] = await db('token_prices')
        .insert({
          token_id: id,
          price: price,
          timestamp: new Date()
        })
        .returning('*');
      
      return priceRecord;
    } catch (error) {
      logger.error(`Error recording token price: ${error.message}`);
      throw error;
    }
  }

  /**
   * Get market statistics for a token
   * @param {number} id - Token ID
   * @returns {Object} Market statistics
   */
  static async getMarketStats(id) {
    try {
      // Get token details
      const token = await this.findById(id);
      if (!token) {
        throw new Error('Token not found');
      }
      
      // Get current price
      const currentPrice = await this.getCurrentPrice(id);
      
      // Get 24h price change
      const now = new Date();
      const yesterday = new Date(now - 24 * 60 * 60 * 1000);
      
      const yesterdayPrice = await db('token_prices')
        .where({ token_id: id })
        .where('timestamp', '<=', yesterday)
        .orderBy('timestamp', 'desc')
        .first();
      
      // Calculate price change
      let priceChange = 0;
      let priceChangePercentage = 0;
      
      if (yesterdayPrice && currentPrice) {
        priceChange = parseFloat(currentPrice) - parseFloat(yesterdayPrice.price);
        priceChangePercentage = (priceChange / parseFloat(yesterdayPrice.price)) * 100;
      }
      
      // Get 24h trading volume
      const oneDayTrades = await db('trades')
        .where({ token_id: id })
        .where('executed_at', '>=', yesterday);
      
      const volume24h = oneDayTrades.reduce((sum, trade) => {
        return sum + parseFloat(trade.total_value);
      }, 0);
      
      // Get market cap
      const marketCap = parseFloat(token.total_supply) * parseFloat(currentPrice || token.initial_price);
      
      // Get highest and lowest price in 24h
      const highLowPrices = await db('token_prices')
        .where({ token_id: id })
        .where('timestamp', '>=', yesterday)
        .orderBy('price', 'desc');
      
      const highestPrice = highLowPrices.length > 0 ? parseFloat(highLowPrices[0].price) : parseFloat(currentPrice || token.initial_price);
      const lowestPrice = highLowPrices.length > 0 ? parseFloat(highLowPrices[highLowPrices.length - 1].price) : parseFloat(currentPrice || token.initial_price);
      
      // Get total number of trades
      const totalTrades = await db('trades')
        .where({ token_id: id })
        .count('id as count')
        .first();
      
      return {
        tokenId: id,
        currentPrice: parseFloat(currentPrice || token.initial_price),
        priceChange24h: parseFloat(priceChange.toFixed(2)),
        priceChangePercentage24h: parseFloat(priceChangePercentage.toFixed(2)),
        volume24h: parseFloat(volume24h.toFixed(2)),
        marketCap: parseFloat(marketCap.toFixed(2)),
        highestPrice24h: parseFloat(highestPrice.toFixed(2)),
        lowestPrice24h: parseFloat(lowestPrice.toFixed(2)),
        totalTrades: parseInt(totalTrades.count),
        totalSupply: parseFloat(token.total_supply)
      };
    } catch (error) {
      logger.error(`Error getting market stats: ${error.message}`);
      throw error;
    }
  }
}

module.exports = Token;
