const Joi = require('joi');

// Create property validation schema
exports.createPropertySchema = Joi.object({
  title: Joi.string().required().messages({
    'any.required': 'Property title is required'
  }),
  description: Joi.string().allow('', null),
  address: Joi.string().required().messages({
    'any.required': 'Property address is required'
  }),
  city: Joi.string().required().messages({
    'any.required': 'City is required'
  }),
  state: Joi.string().required().messages({
    'any.required': 'State is required'
  }),
  country: Joi.string().required().messages({
    'any.required': 'Country is required'
  }),
  zipCode: Joi.string().allow('', null),
  squareFeet: Joi.number().positive().allow(null),
  bedrooms: Joi.number().integer().min(0).allow(null),
  bathrooms: Joi.number().integer().min(0).allow(null),
  yearBuilt: Joi.number().integer().min(1800).max(new Date().getFullYear()).allow(null),
  propertyType: Joi.string().required().messages({
    'any.required': 'Property type is required'
  }),
  valuation: Joi.number().positive().required().messages({
    'number.positive': 'Valuation must be a positive number',
    'any.required': 'Property valuation is required'
  }),
  features: Joi.object().default({}),
  images: Joi.array().items(Joi.string()).default([])
});

// Update property validation schema
exports.updatePropertySchema = Joi.object({
  title: Joi.string(),
  description: Joi.string().allow('', null),
  address: Joi.string(),
  city: Joi.string(),
  state: Joi.string(),
  country: Joi.string(),
  zipCode: Joi.string().allow('', null),
  squareFeet: Joi.number().positive().allow(null),
  bedrooms: Joi.number().integer().min(0).allow(null),
  bathrooms: Joi.number().integer().min(0).allow(null),
  yearBuilt: Joi.number().integer().min(1800).max(new Date().getFullYear()).allow(null),
  propertyType: Joi.string(),
  valuation: Joi.number().positive(),
  features: Joi.object(),
  images: Joi.array().items(Joi.string()),
  status: Joi.string().valid('pending', 'active', 'tokenized', 'sold')
});
