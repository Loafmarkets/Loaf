const Joi = require('joi');

// Create order validation schema
exports.createOrderSchema = Joi.object({
  tokenId: Joi.number().integer().positive().required().messages({
    'number.base': 'Token ID must be a number',
    'number.integer': 'Token ID must be an integer',
    'number.positive': 'Token ID must be positive',
    'any.required': 'Token ID is required'
  }),
  type: Joi.string().valid('buy', 'sell').required().messages({
    'any.only': 'Order type must be either buy or sell',
    'any.required': 'Order type is required'
  }),
  amount: Joi.number().positive().required().messages({
    'number.base': 'Amount must be a number',
    'number.positive': 'Amount must be positive',
    'any.required': 'Amount is required'
  }),
  price: Joi.number().positive().required().messages({
    'number.base': 'Price must be a number',
    'number.positive': 'Price must be positive',
    'any.required': 'Price is required'
  })
});
