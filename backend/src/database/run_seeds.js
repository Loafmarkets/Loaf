/**
 * Script to run all seed files in the correct order
 */
const { initializeDatabase } = require('../../config/database');
const logger = require('../../utils/logger');

// Import seed files
const seedUsers = require('./01_users');
const seedProperties = require('./02_properties');
const seedTokens = require('./03_tokens');
const seedTokenPrices = require('./04_token_prices');
const seedWallets = require('./05_wallets');
const seedOrders = require('./06_orders');
const seedTrades = require('./07_trades');
const seedIpos = require('./08_ipos');
const seedIpoSubscriptions = require('./09_ipo_subscriptions');

// Initialize database connection
const db = initializeDatabase();

/**
 * Run all seeds in sequence
 */
async function runSeeds() {
  try {
    logger.info('Starting database seeding...');
    
    // Run seeds in order
    logger.info('Seeding users...');
    await seedUsers.seed(db);
    
    logger.info('Seeding properties...');
    await seedProperties.seed(db);
    
    logger.info('Seeding tokens...');
    await seedTokens.seed(db);
    
    logger.info('Seeding token prices...');
    await seedTokenPrices.seed(db);
    
    logger.info('Seeding wallets...');
    await seedWallets.seed(db);
    
    logger.info('Seeding orders...');
    await seedOrders.seed(db);
    
    logger.info('Seeding trades...');
    await seedTrades.seed(db);
    
    logger.info('Seeding IPOs...');
    await seedIpos.seed(db);
    
    logger.info('Seeding IPO subscriptions...');
    await seedIpoSubscriptions.seed(db);
    
    logger.info('Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    logger.error(`Error seeding database: ${error.message}`);
    logger.error(error.stack);
    process.exit(1);
  }
}

// Run the seeds
runSeeds();
