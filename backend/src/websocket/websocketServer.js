const socketIo = require('socket.io');
const logger = require('../utils/logger');
const { verifyToken } = require('../utils/encryption');

/**
 * Setup WebSocket server for real-time updates
 * @param {Object} server - HTTP server instance
 */
const setupWebSocketServer = (server) => {
  const io = socketIo(server, {
    cors: {
      origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
      methods: ['GET', 'POST'],
      credentials: true
    }
  });

  // Authentication middleware
  io.use(async (socket, next) => {
    try {
      const token = socket.handshake.auth.token;
      if (!token) {
        return next(new Error('Authentication error: Token not provided'));
      }

      const decoded = verifyToken(token);
      if (!decoded) {
        return next(new Error('Authentication error: Invalid token'));
      }

      // Attach user data to socket
      socket.userId = decoded.id;
      socket.user = decoded;
      next();
    } catch (error) {
      logger.error(`WebSocket authentication error: ${error.message}`);
      next(new Error('Authentication error'));
    }
  });

  // Connection handler
  io.on('connection', (socket) => {
    logger.info(`User connected: ${socket.userId}`);

    // Join user-specific room
    socket.join(`user:${socket.userId}`);

    // Handle property subscription
    socket.on('subscribe:property', (propertyId) => {
      logger.info(`User ${socket.userId} subscribed to property ${propertyId}`);
      socket.join(`property:${propertyId}`);
    });

    // Handle property unsubscription
    socket.on('unsubscribe:property', (propertyId) => {
      logger.info(`User ${socket.userId} unsubscribed from property ${propertyId}`);
      socket.leave(`property:${propertyId}`);
    });

    // Handle disconnect
    socket.on('disconnect', () => {
      logger.info(`User disconnected: ${socket.userId}`);
    });
  });

  // Export functions to emit events
  const emitPropertyUpdate = (propertyId, data) => {
    io.to(`property:${propertyId}`).emit('property:update', data);
  };

  const emitOrderBookUpdate = (propertyId, data) => {
    io.to(`property:${propertyId}`).emit('orderbook:update', data);
  };

  const emitTradeUpdate = (propertyId, data) => {
    io.to(`property:${propertyId}`).emit('trade:update', data);
  };

  const emitUserUpdate = (userId, data) => {
    io.to(`user:${userId}`).emit('user:update', data);
  };

  const emitIPOUpdate = (ipoId, data) => {
    io.emit('ipo:update', { ipoId, ...data });
  };

  return {
    io,
    emitPropertyUpdate,
    emitOrderBookUpdate,
    emitTradeUpdate,
    emitUserUpdate,
    emitIPOUpdate
  };
};

module.exports = {
  setupWebSocketServer
};
