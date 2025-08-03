const express = require('express');
const router = express.Router();
const { authenticate } = require('../middlewares/authMiddleware');
const { authorize } = require('../middlewares/roleMiddleware');

// Import controller (placeholder for now)
// const adminController = require('../controllers/adminController');

// All routes require authentication and admin role
router.use(authenticate, authorize('admin'));

// GET /api/admin/dashboard - Get admin dashboard data
router.get('/dashboard', (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      userCount: 100,
      propertyCount: 15,
      tokenCount: 25,
      tradeVolume: 1250000,
      activeIPOs: 3
    }
  });
});

// GET /api/admin/users - Get all users
router.get('/users', (req, res) => {
  res.status(200).json({
    success: true,
    data: [
      {
        id: 1,
        email: 'admin@example.com',
        firstName: 'Admin',
        lastName: 'User',
        role: 'admin',
        createdAt: new Date()
      },
      {
        id: 2,
        email: 'user@example.com',
        firstName: 'Regular',
        lastName: 'User',
        role: 'user',
        createdAt: new Date()
      }
    ]
  });
});

// POST /api/admin/properties - Create new property
router.post('/properties', (req, res) => {
  res.status(201).json({
    success: true,
    message: 'Property created successfully',
    data: {
      id: 100,
      title: req.body.title,
      address: req.body.address,
      propertyType: req.body.propertyType,
      currentValue: req.body.currentValue,
      createdAt: new Date()
    }
  });
});

module.exports = router;
