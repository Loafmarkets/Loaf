const Wallet = require('../../models/Wallet');
const Token = require('../../models/Token');
const { ApiError } = require('../middlewares/errorHandler');
const logger = require('../../utils/logger');

/**
 * Get user wallet
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.getUserWallet = async (req, res, next) => {
  try {
    const userId = req.user.id;

    // Get user wallet summary
    const walletSummary = await Wallet.getUserWalletSummary(userId);

    res.status(200).json({
      success: true,
      data: walletSummary
    });
  } catch (error) {
    logger.error(`Get user wallet error: ${error.message}`);
    next(error);
  }
};

/**
 * Get user wallet for a specific token
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.getUserTokenWallet = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { tokenId } = req.params;

    // Check if token exists
    const token = await Token.findById(tokenId);
    if (!token) {
      return next(new ApiError(404, 'Token not found'));
    }

    // Get user wallet for token
    const wallet = await Wallet.findByUserAndToken(userId, tokenId);
    if (!wallet) {
      // If wallet doesn't exist, return zero balance
      return res.status(200).json({
        success: true,
        data: {
          user_id: userId,
          token_id: parseInt(tokenId),
          balance: '0.00',
          locked_balance: '0.00',
          token: token
        }
      });
    }

    // Add token details to wallet
    wallet.token = token;

    res.status(200).json({
      success: true,
      data: wallet
    });
  } catch (error) {
    logger.error(`Get user token wallet error: ${error.message}`);
    next(error);
  }
};

/**
 * Get wallet transactions
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.getWalletTransactions = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { 
      page = 1, 
      limit = 10, 
      tokenId,
      type,
      sortBy = 'created_at',
      sortOrder = 'desc'
    } = req.query;

    // Get wallet transactions
    const transactions = await Wallet.getTransactions(userId, {
      page: parseInt(page),
      limit: parseInt(limit),
      tokenId: tokenId ? parseInt(tokenId) : undefined,
      type,
      sortBy,
      sortOrder
    });

    res.status(200).json({
      success: true,
      data: transactions.data,
      pagination: {
        total: transactions.total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(transactions.total / parseInt(limit))
      }
    });
  } catch (error) {
    logger.error(`Get wallet transactions error: ${error.message}`);
    next(error);
  }
};

/**
 * Deposit funds to wallet
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.depositFunds = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { amount } = req.body;

    // Deposit funds
    const transaction = await Wallet.depositFunds(userId, parseFloat(amount));

    res.status(200).json({
      success: true,
      message: 'Funds deposited successfully',
      data: transaction
    });
  } catch (error) {
    logger.error(`Deposit funds error: ${error.message}`);
    next(error);
  }
};

/**
 * Withdraw funds from wallet
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.withdrawFunds = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { amount } = req.body;

    // Check if user has sufficient funds
    const hasEnoughFunds = await Wallet.checkSufficientFunds(userId, parseFloat(amount));
    if (!hasEnoughFunds) {
      return next(new ApiError(400, 'Insufficient funds'));
    }

    // Withdraw funds
    const transaction = await Wallet.withdrawFunds(userId, parseFloat(amount));

    res.status(200).json({
      success: true,
      message: 'Funds withdrawn successfully',
      data: transaction
    });
  } catch (error) {
    logger.error(`Withdraw funds error: ${error.message}`);
    next(error);
  }
};

/**
 * Get user portfolio
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
exports.getUserPortfolio = async (req, res, next) => {
  try {
    const userId = req.user.id;

    // Get user portfolio
    const portfolio = await Wallet.getUserPortfolio(userId);

    res.status(200).json({
      success: true,
      data: portfolio
    });
  } catch (error) {
    logger.error(`Get user portfolio error: ${error.message}`);
    next(error);
  }
};
