const express = require('express');
const router = express.Router();
const walletController = require('../controllers/walletController');
const { authenticate } = require('../middlewares/authMiddleware');
const { validateRequest } = require('../middlewares/validationMiddleware');
const { depositWithdrawSchema } = require('../validators/walletValidators');

/**
 * @route GET /api/wallet
 * @desc Get user wallet summary
 * @access Private
 */
router.get(
  '/',
  authenticate,
  walletController.getUserWallet
);

/**
 * @route GET /api/wallet/token/:tokenId
 * @desc Get user wallet for a specific token
 * @access Private
 */
router.get(
  '/token/:tokenId',
  authenticate,
  walletController.getUserTokenWallet
);

/**
 * @route GET /api/wallet/transactions
 * @desc Get wallet transactions
 * @access Private
 */
router.get(
  '/transactions',
  authenticate,
  walletController.getWalletTransactions
);

/**
 * @route POST /api/wallet/deposit
 * @desc Deposit funds to wallet
 * @access Private
 */
router.post(
  '/deposit',
  authenticate,
  validateRequest(depositWithdrawSchema),
  walletController.depositFunds
);

/**
 * @route POST /api/wallet/withdraw
 * @desc Withdraw funds from wallet
 * @access Private
 */
router.post(
  '/withdraw',
  authenticate,
  validateRequest(depositWithdrawSchema),
  walletController.withdrawFunds
);

/**
 * @route GET /api/wallet/portfolio
 * @desc Get user portfolio
 * @access Private
 */
router.get(
  '/portfolio',
  authenticate,
  walletController.getUserPortfolio
);

module.exports = router;
