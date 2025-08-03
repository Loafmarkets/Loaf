const express = require('express');
const router = express.Router();
const ipoController = require('../controllers/ipoController');
const { authenticate, authorize } = require('../middlewares/authMiddleware');
const { validateRequest } = require('../middlewares/validationMiddleware');
const { createIPOSchema, updateIPOSchema, subscribeIPOSchema } = require('../validators/ipoValidators');

/**
 * @route GET /api/ipos
 * @desc Get all IPOs
 * @access Public
 */
router.get('/', ipoController.getAllIPOs);

/**
 * @route GET /api/ipos/:id
 * @desc Get IPO by ID
 * @access Public
 */
router.get('/:id', ipoController.getIPOById);

/**
 * @route POST /api/ipos
 * @desc Create IPO
 * @access Private (Admin only)
 */
router.post(
  '/',
  authenticate,
  authorize(['admin']),
  validateRequest(createIPOSchema),
  ipoController.createIPO
);

/**
 * @route PUT /api/ipos/:id
 * @desc Update IPO
 * @access Private (Admin only)
 */
router.put(
  '/:id',
  authenticate,
  authorize(['admin']),
  validateRequest(updateIPOSchema),
  ipoController.updateIPO
);

/**
 * @route PUT /api/ipos/:id/cancel
 * @desc Cancel IPO
 * @access Private (Admin only)
 */
router.put(
  '/:id/cancel',
  authenticate,
  authorize(['admin']),
  ipoController.cancelIPO
);

/**
 * @route POST /api/ipos/:id/subscribe
 * @desc Subscribe to IPO
 * @access Private
 */
router.post(
  '/:id/subscribe',
  authenticate,
  validateRequest(subscribeIPOSchema),
  ipoController.subscribeToIPO
);

/**
 * @route PUT /api/ipos/:id/finalize
 * @desc Finalize IPO
 * @access Private (Admin only)
 */
router.put(
  '/:id/finalize',
  authenticate,
  authorize(['admin']),
  ipoController.finalizeIPO
);

/**
 * @route GET /api/ipos/:id/subscriptions
 * @desc Get IPO subscriptions
 * @access Private (Admin only)
 */
router.get(
  '/:id/subscriptions',
  authenticate,
  authorize(['admin']),
  ipoController.getIPOSubscriptions
);

module.exports = router;
