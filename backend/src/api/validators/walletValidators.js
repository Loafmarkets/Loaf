const Joi = require('joi');

// Deposit/withdraw validation schema
exports.depositWithdrawSchema = Joi.object({
  amount: Joi.number().positive().required().messages({
    'number.base': 'Amount must be a number',
    'number.positive': 'Amount must be positive',
    'any.required': 'Amount is required'
  })
});
