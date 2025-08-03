const bcrypt = require('bcryptjs');

/**
 * Seed users table with initial data
 * @param {object} knex - Knex instance
 * @returns {Promise} Promise resolving to completed seed
 */
exports.seed = async function(knex) {
  // Delete existing entries
  await knex('users').del();
  
  // Create password hash
  const salt = await bcrypt.genSalt(10);
  const adminPassword = await bcrypt.hash('admin123', salt);
  const userPassword = await bcrypt.hash('user123', salt);
  
  // Insert seed data
  return knex('users').insert([
    {
      id: 1,
      email: 'admin@example.com',
      password: adminPassword,
      first_name: 'Admin',
      last_name: 'User',
      role: 'admin',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 2,
      email: 'user1@example.com',
      password: userPassword,
      first_name: 'John',
      last_name: 'Doe',
      role: 'user',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 3,
      email: 'user2@example.com',
      password: userPassword,
      first_name: 'Jane',
      last_name: 'Smith',
      role: 'user',
      created_at: new Date(),
      updated_at: new Date()
    }
  ]);
};
