/**
 * Seed ipo_subscriptions table with initial data
 * @param {object} knex - Knex instance
 * @returns {Promise} Promise resolving to completed seed
 */
exports.seed = async function(knex) {
  // Delete existing entries
  await knex('ipo_subscriptions').del();
  
  // Get current date
  const now = new Date();
  
  // Create IPO subscription entries
  const subscriptions = [
    // Subscriptions for completed IPO (token_id: 1)
    {
      ipo_id: 1,
      user_id: 2,
      token_amount: 5000, // 5,000 tokens at $10 each
      price_per_token: 10.00,
      total_price: 50000, // $50,000
      allocated_tokens: 5000,
      status: 'completed',
      created_at: new Date(now.getFullYear(), now.getMonth() - 2, 5), // 2 months ago
      updated_at: new Date(now.getFullYear(), now.getMonth() - 1, 2) // 1 month ago
    },
    {
      ipo_id: 1,
      user_id: 3,
      token_amount: 2500, // 2,500 tokens at $10 each
      price_per_token: 10.00,
      total_price: 25000, // $25,000
      allocated_tokens: 2500,
      status: 'completed',
      created_at: new Date(now.getFullYear(), now.getMonth() - 2, 10), // 2 months ago
      updated_at: new Date(now.getFullYear(), now.getMonth() - 1, 2) // 1 month ago
    },
    
    // Subscriptions for active IPO (token_id: 2)
    {
      ipo_id: 2,
      user_id: 2,
      token_amount: 3000, // 3,000 tokens at $15 each
      price_per_token: 15.00,
      total_price: 45000, // $45,000
      allocated_tokens: null, // Not allocated yet
      status: 'pending',
      created_at: new Date(now.getFullYear(), now.getMonth() - 1, 20), // 1 month ago
      updated_at: new Date(now.getFullYear(), now.getMonth() - 1, 20) // 1 month ago
    },
    {
      ipo_id: 2,
      user_id: 3,
      token_amount: 4000, // 4,000 tokens at $15 each
      price_per_token: 15.00,
      total_price: 60000, // $60,000
      allocated_tokens: null, // Not allocated yet
      status: 'pending',
      created_at: new Date(now.getFullYear(), now.getMonth() - 1, 25), // 1 month ago
      updated_at: new Date(now.getFullYear(), now.getMonth() - 1, 25) // 1 month ago
    }
  ];
  
  // Insert seed data
  return knex('ipo_subscriptions').insert(subscriptions);
};
