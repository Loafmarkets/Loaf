const express = require('express');
const router = express.Router();
const tokenController = require('../controllers/tokenController');
const { authenticate, authorize } = require('../middlewares/authMiddleware');
const { validateRequest } = require('../middlewares/validationMiddleware');
const { createTokenSchema, updateTokenSchema } = require('../validators/tokenValidators');

/**
 * @route GET /api/tokens
 * @desc Get all tokens
 * @access Public
 */
router.get(
  '/',
  tokenController.getAllTokens
);

/**
 * @route GET /api/tokens/:id
 * @desc Get token by ID
 * @access Public
 */
router.get(
  '/:id',
  tokenController.getTokenById
);

/**
 * @route POST /api/tokens
 * @desc Create token
 * @access Private (Admin only)
 */
router.post(
  '/',
  authenticate,
  authorize('admin'),
  validateRequest(createTokenSchema),
  tokenController.createToken
);

/**
 * @route PUT /api/tokens/:id
 * @desc Update token
 * @access Private (Admin only)
 */
router.put(
  '/:id',
  authenticate,
  authorize('admin'),
  validateRequest(updateTokenSchema),
  tokenController.updateToken
);

/**
 * @route GET /api/tokens/:id/price-history
 * @desc Get token price history
 * @access Public
 */
router.get(
  '/:id/price-history',
  tokenController.getTokenPriceHistory
);

/**
 * @route GET /api/tokens/:id/market-stats
 * @desc Get token market stats
 * @access Public
 */
router.get(
  '/:id/market-stats',
  tokenController.getTokenMarketStats
);

module.exports = router;
