const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { authenticate } = require('../middlewares/authMiddleware');
const { validateRequest } = require('../middlewares/validationMiddleware');
const { createOrderSchema } = require('../validators/orderValidators');

/**
 * @route POST /api/orders
 * @desc Create a new order
 * @access Private
 */
router.post(
  '/',
  authenticate,
  validateRequest(createOrderSchema),
  orderController.createOrder
);

/**
 * @route GET /api/orders
 * @desc Get all orders for a user
 * @access Private
 */
router.get(
  '/',
  authenticate,
  orderController.getUserOrders
);

/**
 * @route GET /api/orders/:id
 * @desc Get order by ID
 * @access Private
 */
router.get(
  '/:id',
  authenticate,
  orderController.getOrderById
);

/**
 * @route PUT /api/orders/:id/cancel
 * @desc Cancel order
 * @access Private
 */
router.put(
  '/:id/cancel',
  authenticate,
  orderController.cancelOrder
);

/**
 * @route GET /api/orders/book/:tokenId
 * @desc Get order book for a token
 * @access Public
 */
router.get(
  '/book/:tokenId',
  orderController.getOrderBook
);

module.exports = router;
