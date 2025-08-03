const express = require('express');
const router = express.Router();
const EarlyAccessSignup = require('../models/EarlyAccessSignup');

/**
 * @route POST /api/early-access/signup
 * @desc Register for early access
 * @access Public
 */
router.post('/signup', async (req, res) => {
  try {
    const { email, name, accept_marketing } = req.body;
    
    if (!email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Email is required' 
      });
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid email format' 
      });
    }
    
    const signup = await EarlyAccessSignup.create({
      email,
      name,
      accept_marketing
    });
    
    return res.status(201).json({
      success: true,
      message: 'Successfully registered for early access',
      data: {
        email: signup.email,
        created_at: signup.created_at
      }
    });
  } catch (error) {
    console.error('Early access signup error:', error);
    
    if (error.message.includes('already registered')) {
      return res.status(409).json({
        success: false,
        message: 'This email is already registered for early access'
      });
    }
    
    return res.status(500).json({
      success: false,
      message: 'Failed to register for early access'
    });
  }
});

/**
 * @route GET /api/early-access/signups
 * @desc Get all early access signups (protected route)
 * @access Private/Admin
 */
router.get('/signups', async (req, res) => {
  try {
    // This should be protected with authentication middleware in production
    const { limit = 100, offset = 0 } = req.query;
    
    const signups = await EarlyAccessSignup.getAll({
      limit: parseInt(limit),
      offset: parseInt(offset)
    });
    
    return res.json({
      success: true,
      count: signups.length,
      data: signups
    });
  } catch (error) {
    console.error('Error fetching early access signups:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch early access signups'
    });
  }
});

module.exports = router;
