const Joi = require('joi');

// Create token validation schema
exports.createTokenSchema = Joi.object({
  propertyId: Joi.number().integer().positive().required().messages({
    'number.base': 'Property ID must be a number',
    'number.integer': 'Property ID must be an integer',
    'number.positive': 'Property ID must be positive',
    'any.required': 'Property ID is required'
  }),
  name: Joi.string().min(2).max(100).required().messages({
    'string.base': 'Name must be a string',
    'string.min': 'Name must be at least 2 characters long',
    'string.max': 'Name cannot exceed 100 characters',
    'any.required': 'Name is required'
  }),
  symbol: Joi.string().min(1).max(10).required().messages({
    'string.base': 'Symbol must be a string',
    'string.min': 'Symbol must be at least 1 character long',
    'string.max': 'Symbol cannot exceed 10 characters',
    'any.required': 'Symbol is required'
  }),
  totalSupply: Joi.number().positive().required().messages({
    'number.base': 'Total supply must be a number',
    'number.positive': 'Total supply must be positive',
    'any.required': 'Total supply is required'
  }),
  initialPrice: Joi.number().positive().required().messages({
    'number.base': 'Initial price must be a number',
    'number.positive': 'Initial price must be positive',
    'any.required': 'Initial price is required'
  }),
  decimals: Joi.number().integer().min(0).max(18).default(2).messages({
    'number.base': 'Decimals must be a number',
    'number.integer': 'Decimals must be an integer',
    'number.min': 'Decimals must be at least 0',
    'number.max': 'Decimals cannot exceed 18'
  })
});

// Update token validation schema
exports.updateTokenSchema = Joi.object({
  name: Joi.string().min(2).max(100).messages({
    'string.base': 'Name must be a string',
    'string.min': 'Name must be at least 2 characters long',
    'string.max': 'Name cannot exceed 100 characters'
  }),
  symbol: Joi.string().min(1).max(10).messages({
    'string.base': 'Symbol must be a string',
    'string.min': 'Symbol must be at least 1 character long',
    'string.max': 'Symbol cannot exceed 10 characters'
  }),
  status: Joi.string().valid('active', 'inactive', 'suspended').messages({
    'any.only': 'Status must be one of: active, inactive, suspended'
  })
}).min(1).messages({
  'object.min': 'At least one field is required for update'
});
