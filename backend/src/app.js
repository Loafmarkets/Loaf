const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { errorHandler } = require('./api/middlewares/errorHandler');
require('dotenv').config();

// Import routes
const authRoutes = require('./api/routes/authRoutes');
const propertyRoutes = require('./api/routes/propertyRoutes');
const tradeRoutes = require('./api/routes/tradeRoutes');
const ipoRoutes = require('./api/routes/ipoRoutes');
const userRoutes = require('./api/routes/userRoutes');
const adminRoutes = require('./api/routes/adminRoutes');
const orderRoutes = require('./api/routes/orderRoutes');
const tokenRoutes = require('./api/routes/tokenRoutes');
const walletRoutes = require('./api/routes/walletRoutes');
const marginRoutes = require('./routes/margin');
const earlyAccessRoutes = require('./routes/earlyAccess');

// Initialize express app
const app = express();

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/properties', propertyRoutes);
app.use('/api/trades', tradeRoutes);
app.use('/api/ipos', ipoRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/tokens', tokenRoutes);
app.use('/api/wallets', walletRoutes);
app.use('/api/margin', marginRoutes);
app.use('/api/early-access', earlyAccessRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is running' });
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Cannot ${req.method} ${req.originalUrl}`
  });
});

// Global error handler
app.use(errorHandler);

module.exports = app;
