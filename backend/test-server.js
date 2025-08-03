const express = require('express');
const app = express();
require('dotenv').config();

// Basic middleware
app.use(express.json());

// Test route
app.get('/api/test', (req, res) => {
  res.json({
    success: true,
    message: 'API is working!',
    env: process.env.NODE_ENV
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Test server running on port ${PORT}`);
});
