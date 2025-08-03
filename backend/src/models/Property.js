const { initializeDatabase } = require('../config/database');
const logger = require('../utils/logger');

// Initialize database connection
const db = initializeDatabase();

/**
 * Property model for real estate assets
 */
class Property {
  /**
   * Create a new property
   * @param {Object} propertyData - Property data
   * @returns {Object} Created property
   */
  static async create(propertyData) {
    try {
      const [property] = await db('properties')
        .insert({
          title: propertyData.title,
          address: propertyData.address,
          city: propertyData.city,
          state: propertyData.state,
          country: propertyData.country,
          zip_code: propertyData.zipCode,
          description: propertyData.description,
          features: JSON.stringify(propertyData.features || {}),
          images: JSON.stringify(propertyData.images || []),
          square_feet: propertyData.squareFeet,
          bedrooms: propertyData.bedrooms,
          bathrooms: propertyData.bathrooms,
          year_built: propertyData.yearBuilt,
          property_type: propertyData.propertyType,
          status: propertyData.status || 'pending',
          created_by: propertyData.createdBy,
          created_at: new Date(),
          updated_at: new Date()
        })
        .returning('*');

      return property;
    } catch (error) {
      logger.error(`Error creating property: ${error.message}`);
      throw error;
    }
  }

  /**
   * Find property by ID
   * @param {number} id - Property ID
   * @returns {Object|null} Property object or null if not found
   */
  static async findById(id) {
    try {
      const property = await db('properties')
        .where({ id })
        .first();

      if (property) {
        // Parse JSON fields
        property.features = JSON.parse(property.features || '{}');
        property.images = JSON.parse(property.images || '[]');
      }

      return property || null;
    } catch (error) {
      logger.error(`Error finding property by ID: ${error.message}`);
      throw error;
    }
  }

  /**
   * Get all properties with optional filtering
   * @param {Object} filters - Filter criteria
   * @param {number} page - Page number for pagination
   * @param {number} limit - Number of items per page
   * @returns {Array} Array of properties
   */
  static async getAll(filters = {}, page = 1, limit = 10) {
    try {
      const offset = (page - 1) * limit;
      
      // Build query with filters
      const query = db('properties')
        .select('*')
        .orderBy('created_at', 'desc')
        .limit(limit)
        .offset(offset);
      
      // Apply filters if provided
      if (filters.status) {
        query.where('status', filters.status);
      }
      
      if (filters.propertyType) {
        query.where('property_type', filters.propertyType);
      }
      
      if (filters.minPrice) {
        query.where('valuation', '>=', filters.minPrice);
      }
      
      if (filters.maxPrice) {
        query.where('valuation', '<=', filters.maxPrice);
      }
      
      if (filters.city) {
        query.where('city', 'ilike', `%${filters.city}%`);
      }
      
      // Execute query
      const properties = await query;
      
      // Parse JSON fields
      return properties.map(property => ({
        ...property,
        features: JSON.parse(property.features || '{}'),
        images: JSON.parse(property.images || '[]')
      }));
    } catch (error) {
      logger.error(`Error getting properties: ${error.message}`);
      throw error;
    }
  }

  /**
   * Update property information
   * @param {number} id - Property ID
   * @param {Object} updateData - Data to update
   * @returns {Object} Updated property
   */
  static async update(id, updateData) {
    try {
      // Handle JSON fields
      if (updateData.features) {
        updateData.features = JSON.stringify(updateData.features);
      }
      
      if (updateData.images) {
        updateData.images = JSON.stringify(updateData.images);
      }
      
      // Update property in database
      const [updatedProperty] = await db('properties')
        .where({ id })
        .update({
          ...updateData,
          updated_at: new Date()
        })
        .returning('*');
      
      // Parse JSON fields for response
      if (updatedProperty) {
        updatedProperty.features = JSON.parse(updatedProperty.features || '{}');
        updatedProperty.images = JSON.parse(updatedProperty.images || '[]');
      }
      
      return updatedProperty;
    } catch (error) {
      logger.error(`Error updating property: ${error.message}`);
      throw error;
    }
  }

  /**
   * Delete property by ID
   * @param {number} id - Property ID
   * @returns {boolean} True if property was deleted
   */
  static async delete(id) {
    try {
      const deleted = await db('properties')
        .where({ id })
        .del();
      
      return deleted > 0;
    } catch (error) {
      logger.error(`Error deleting property: ${error.message}`);
      throw error;
    }
  }

  /**
   * Get property valuation history
   * @param {number} id - Property ID
   * @returns {Array} Array of valuation records
   */
  static async getValuationHistory(id) {
    try {
      const history = await db('property_valuations')
        .where({ property_id: id })
        .orderBy('valuation_date', 'asc')
        .select('*');
      
      return history;
    } catch (error) {
      logger.error(`Error getting property valuation history: ${error.message}`);
      throw error;
    }
  }
}

module.exports = Property;
