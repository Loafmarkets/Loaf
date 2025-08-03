/**
 * Setup script to run migrations and seeds
 */
const { execSync } = require('child_process');
const logger = require('./src/utils/logger');

/**
 * Run database migrations and seeds
 */
async function setup() {
  try {
    logger.info('Starting database setup...');
    
    // Run migrations
    logger.info('Running database migrations...');
    execSync('npx knex migrate:latest', { stdio: 'inherit' });
    
    // Run seeds
    logger.info('Running database seeds...');
    execSync('node src/database/seeds/run_seeds.js', { stdio: 'inherit' });
    
    logger.info('Database setup completed successfully!');
  } catch (error) {
    logger.error(`Error setting up database: ${error.message}`);
    process.exit(1);
  }
}

// Run setup
setup();
