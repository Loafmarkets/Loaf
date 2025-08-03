const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const MarginAccount = require('../models/MarginAccount');
const MarginPosition = require('../models/MarginPosition');
const Wallet = require('../models/Wallet');
const logger = require('../utils/logger');

/**
 * @route   GET /api/margin/account
 * @desc    Get user's margin account details
 * @access  Private
 */
router.get('/account', auth, async (req, res) => {
  try {
    const accountSummary = await MarginAccount.getAccountSummary(req.user.id);
    res.json(accountSummary);
  } catch (error) {
    logger.error(`Error getting margin account: ${error.message}`);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

/**
 * @route   POST /api/margin/collateral/deposit
 * @desc    Deposit collateral to margin account
 * @access  Private
 */
router.post('/collateral/deposit', auth, async (req, res) => {
  try {
    const { amount } = req.body;
    
    if (!amount || parseFloat(amount) <= 0) {
      return res.status(400).json({ message: 'Invalid amount' });
    }
    
    // Check if user has enough balance in their wallet
    const wallet = await Wallet.findByUserAndToken(req.user.id, 1); // Assuming token ID 1 is USD
    
    if (!wallet || parseFloat(wallet.balance) < parseFloat(amount)) {
      return res.status(400).json({ message: 'Insufficient wallet balance' });
    }
    
    // Remove from wallet
    await Wallet.removeTokens(req.user.id, 1, amount);
    
    // Add to margin account
    const updatedAccount = await MarginAccount.addCollateral(req.user.id, amount);
    
    res.json({
      message: 'Collateral deposited successfully',
      account: updatedAccount
    });
  } catch (error) {
    logger.error(`Error depositing collateral: ${error.message}`);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

/**
 * @route   POST /api/margin/collateral/withdraw
 * @desc    Withdraw collateral from margin account
 * @access  Private
 */
router.post('/collateral/withdraw', auth, async (req, res) => {
  try {
    const { amount } = req.body;
    
    if (!amount || parseFloat(amount) <= 0) {
      return res.status(400).json({ message: 'Invalid amount' });
    }
    
    // Withdraw from margin account
    try {
      const updatedAccount = await MarginAccount.withdrawCollateral(req.user.id, amount);
      
      // Add to wallet
      await Wallet.addTokens(req.user.id, 1, amount); // Assuming token ID 1 is USD
      
      res.json({
        message: 'Collateral withdrawn successfully',
        account: updatedAccount
      });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  } catch (error) {
    logger.error(`Error withdrawing collateral: ${error.message}`);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

/**
 * @route   GET /api/margin/positions
 * @desc    Get user's open margin positions
 * @access  Private
 */
router.get('/positions', auth, async (req, res) => {
  try {
    const positions = await MarginPosition.getUserPositions(req.user.id);
    res.json(positions);
  } catch (error) {
    logger.error(`Error getting margin positions: ${error.message}`);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

/**
 * @route   GET /api/margin/positions/:id
 * @desc    Get details of a specific margin position
 * @access  Private
 */
router.get('/positions/:id', auth, async (req, res) => {
  try {
    const position = await MarginPosition.getPositionDetails(req.params.id);
    
    if (!position) {
      return res.status(404).json({ message: 'Position not found' });
    }
    
    if (position.user_id !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to view this position' });
    }
    
    res.json(position);
  } catch (error) {
    logger.error(`Error getting position details: ${error.message}`);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

/**
 * @route   POST /api/margin/positions/open
 * @desc    Open a new margin position
 * @access  Private
 */
router.post('/positions/open', auth, async (req, res) => {
  try {
    const { tokenId, propertyId, tokenAmount, entryPrice, leverage } = req.body;
    
    // Validate input
    if (!tokenId || !propertyId || !tokenAmount || !entryPrice || !leverage) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    
    if (parseFloat(tokenAmount) <= 0) {
      return res.status(400).json({ message: 'Token amount must be greater than 0' });
    }
    
    if (parseFloat(entryPrice) <= 0) {
      return res.status(400).json({ message: 'Entry price must be greater than 0' });
    }
    
    if (parseFloat(leverage) < 1 || parseFloat(leverage) > 10) {
      return res.status(400).json({ message: 'Leverage must be between 1x and 10x' });
    }
    
    // Get or create margin account
    const account = await MarginAccount.getOrCreate(req.user.id);
    
    // Create position
    try {
      const position = await MarginPosition.create({
        userId: req.user.id,
        marginAccountId: account.id,
        tokenId,
        propertyId,
        tokenAmount,
        entryPrice,
        leverage
      });
      
      res.json({
        message: 'Position opened successfully',
        position
      });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  } catch (error) {
    logger.error(`Error opening margin position: ${error.message}`);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

/**
 * @route   POST /api/margin/positions/:id/close
 * @desc    Close a margin position
 * @access  Private
 */
router.post('/positions/:id/close', auth, async (req, res) => {
  try {
    const { closePrice } = req.body;
    
    if (!closePrice || parseFloat(closePrice) <= 0) {
      return res.status(400).json({ message: 'Invalid close price' });
    }
    
    // Get position
    const position = await MarginPosition.findById(req.params.id);
    
    if (!position) {
      return res.status(404).json({ message: 'Position not found' });
    }
    
    if (position.user_id !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to close this position' });
    }
    
    if (position.status !== 'open') {
      return res.status(400).json({ message: 'Position is not open' });
    }
    
    // Close position
    try {
      const result = await MarginPosition.closePosition(req.params.id, closePrice);
      
      res.json({
        message: 'Position closed successfully',
        result
      });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  } catch (error) {
    logger.error(`Error closing margin position: ${error.message}`);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

/**
 * @route   GET /api/margin/transactions
 * @desc    Get margin account transaction history
 * @access  Private
 */
router.get('/transactions', auth, async (req, res) => {
  try {
    const { limit = 50, offset = 0 } = req.query;
    
    const transactions = await MarginAccount.getTransactionHistory(req.user.id, {
      limit: parseInt(limit),
      offset: parseInt(offset)
    });
    
    res.json(transactions);
  } catch (error) {
    logger.error(`Error getting margin transactions: ${error.message}`);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

/**
 * @route   GET /api/margin/leverage-options
 * @desc    Get available leverage options and their interest rates
 * @access  Private
 */
router.get('/leverage-options', auth, async (req, res) => {
  try {
    // This could be dynamic based on user's account status, market conditions, etc.
    // For MVP, we'll return fixed options
    const leverageOptions = [
      { value: 1, label: '1x', interestRate: 0.05 }, // 5% base rate
      { value: 2, label: '2x', interestRate: 0.06 }, // 6%
      { value: 3, label: '3x', interestRate: 0.07 }, // 7%
      { value: 5, label: '5x', interestRate: 0.09 }, // 9%
      { value: 10, label: '10x', interestRate: 0.14 } // 14%
    ];
    
    res.json(leverageOptions);
  } catch (error) {
    logger.error(`Error getting leverage options: ${error.message}`);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
