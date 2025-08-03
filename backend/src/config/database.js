const knex = require('knex');
const logger = require('../utils/logger');

// Parse database URL from environment variable
const parseDbUrl = (url) => {
  try {
    const regex = /postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/;
    const match = url.match(regex);
    
    if (!match) {
      throw new Error('Invalid database URL format');
    }
    
    const [, user, password, host, port, database] = match;
    
    return {
      user,
      password,
      host,
      port: parseInt(port, 10),
      database
    };
  } catch (error) {
    logger.error(`Failed to parse database URL: ${error.message}`);
    throw error;
  }
};

// Initialize database connection
const initializeDatabase = () => {
  try {
    const dbConfig = process.env.DATABASE_URL 
      ? parseDbUrl(process.env.DATABASE_URL)
      : {
          user: process.env.DB_USER || 'postgres',
          password: process.env.DB_PASSWORD || 'postgres',
          host: process.env.DB_HOST || 'localhost',
          port: parseInt(process.env.DB_PORT || '5432', 10),
          database: process.env.DB_NAME || 'real_estate_platform'
        };

    const db = knex({
      client: 'pg',
      connection: {
        host: dbConfig.host,
        port: dbConfig.port,
        user: dbConfig.user,
        password: dbConfig.password,
        database: dbConfig.database
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations',
        directory: '../database/migrations'
      },
      seeds: {
        directory: '../database/seeds'
      }
    });

    logger.info(`Database connection established to ${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`);
    return db;
  } catch (error) {
    logger.error(`Database connection error: ${error.message}`);
    throw error;
  }
};

module.exports = {
  initializeDatabase
};
