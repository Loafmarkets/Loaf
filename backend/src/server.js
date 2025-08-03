const app = require('./app');
const http = require('http');
const { setupWebSocketServer } = require('./websocket/websocketServer');
const logger = require('./utils/logger');

// Get port from environment or use default
const PORT = process.env.PORT || 5001;

// Create HTTP server
const server = http.createServer(app);

// Setup WebSocket server
setupWebSocketServer(server);

// Start server
server.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
  logger.info(`Environment: ${process.env.NODE_ENV}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  logger.error('UNHANDLED REJECTION! Shutting down...');
  logger.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  logger.error('UNCAUGHT EXCEPTION! Shutting down...');
  logger.error(err.name, err.message);
  logger.error(err.stack);
  process.exit(1);
});
