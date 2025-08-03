const Joi = require('joi');

// Create IPO validation schema
exports.createIPOSchema = Joi.object({
  propertyId: Joi.number().integer().positive().required().messages({
    'number.base': 'Property ID must be a number',
    'number.integer': 'Property ID must be an integer',
    'number.positive': 'Property ID must be positive',
    'any.required': 'Property ID is required'
  }),
  title: Joi.string().required().messages({
    'any.required': 'IPO title is required'
  }),
  description: Joi.string().allow('', null),
  guidePrice: Joi.number().positive().required().messages({
    'number.positive': 'Guide price must be a positive number',
    'any.required': 'Guide price is required'
  }),
  totalTokens: Joi.number().positive().required().messages({
    'number.positive': 'Total tokens must be a positive number',
    'any.required': 'Total tokens is required'
  }),
  tokensForSale: Joi.number().positive().required().messages({
    'number.positive': 'Tokens for sale must be a positive number',
    'any.required': 'Tokens for sale is required'
  }),
  minInvestment: Joi.number().positive().required().messages({
    'number.positive': 'Minimum investment must be a positive number',
    'any.required': 'Minimum investment is required'
  }),
  maxInvestmentPerUser: Joi.number().positive().allow(null),
  startDate: Joi.date().iso().min('now').required().messages({
    'date.base': 'Start date must be a valid date',
    'date.min': 'Start date must be in the future',
    'any.required': 'Start date is required'
  }),
  endDate: Joi.date().iso().greater(Joi.ref('startDate')).required().messages({
    'date.base': 'End date must be a valid date',
    'date.greater': 'End date must be after start date',
    'any.required': 'End date is required'
  })
});

// Update IPO validation schema
exports.updateIPOSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string().allow('', null),
  guidePrice: Joi.number().positive(),
  minInvestment: Joi.number().positive(),
  maxInvestmentPerUser: Joi.number().positive().allow(null),
  startDate: Joi.date().iso().min('now'),
  endDate: Joi.date().iso().greater(Joi.ref('startDate')),
  status: Joi.string().valid('pending', 'active')
});

// Subscribe to IPO validation schema
exports.subscribeIPOSchema = Joi.object({
  tokenAmount: Joi.number().positive().required().messages({
    'number.positive': 'Token amount must be a positive number',
    'any.required': 'Token amount is required'
  })
});
