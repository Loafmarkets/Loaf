const express = require('express');
const router = express.Router();
const tradeController = require('../controllers/tradeController');
const { authenticate } = require('../middlewares/authMiddleware');

/**
 * @route GET /api/trades
 * @desc Get all trades
 * @access Public
 */
router.get(
  '/',
  tradeController.getAllTrades
);

/**
 * @route GET /api/trades/:id
 * @desc Get trade by ID
 * @access Public
 */
router.get(
  '/:id',
  tradeController.getTradeById
);

/**
 * @route GET /api/trades/user
 * @desc Get user trades
 * @access Private
 */
router.get(
  '/user',
  authenticate,
  tradeController.getUserTrades
);

/**
 * @route GET /api/trades/token/:tokenId
 * @desc Get token trades
 * @access Public
 */
router.get(
  '/token/:tokenId',
  tradeController.getTokenTrades
);

/**
 * @route GET /api/trades/token/:tokenId/statistics
 * @desc Get trade statistics for a token
 * @access Public
 */
router.get(
  '/token/:tokenId/statistics',
  tradeController.getTradeStatistics
);

module.exports = router;
