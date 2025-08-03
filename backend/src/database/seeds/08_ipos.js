/**
 * Seed ipos table with initial data
 * @param {object} knex - Knex instance
 * @returns {Promise} Promise resolving to completed seed
 */
exports.seed = async function(knex) {
  // Delete existing entries
  await knex('ipos').del();
  
  // Get current date
  const now = new Date();
  
  // Create IPO entries
  const ipos = [
    {
      id: 1,
      token_id: 1,
      start_date: new Date(now.getFullYear(), now.getMonth() - 2, 1), // 2 months ago
      end_date: new Date(now.getFullYear(), now.getMonth() - 1, 1), // 1 month ago
      // Target amount calculated from tokens_for_sale * guide_price
      guide_price: 10.00,
      total_tokens: 1000000,
      tokens_for_sale: 800000,
      property_id: 1,
      title: 'Luxury Apartment Building IPO',
      min_investment: 1000, // $1,000
      max_investment_per_user: 500000, // $500,000
      status: 'completed', // Ensuring exact case match with enum
      description: 'Initial offering for Luxury Apartment Building tokens.',
      created_at: new Date(now.getFullYear(), now.getMonth() - 3, 1), // 3 months ago
      updated_at: new Date(now.getFullYear(), now.getMonth() - 1, 1) // 1 month ago
    },
    {
      id: 2,
      token_id: 2,
      start_date: new Date(now.getFullYear(), now.getMonth() - 1, 15), // 1.5 months ago
      end_date: new Date(now.getFullYear(), now.getMonth(), 15), // 15 days from now
      // Target amount calculated from tokens_for_sale * guide_price
      guide_price: 15.00,
      total_tokens: 2000000,
      tokens_for_sale: 1500000,
      property_id: 2,
      title: 'Commercial Office Tower IPO',
      min_investment: 5000, // $5,000
      max_investment_per_user: 1000000, // $1M
      status: 'active', // Ensuring exact case match with enum
      description: 'Initial offering for Commercial Office Tower tokens.',
      created_at: new Date(now.getFullYear(), now.getMonth() - 2, 1), // 2 months ago
      updated_at: new Date(now.getFullYear(), now.getMonth() - 1, 15) // 1.5 months ago
    },
    {
      id: 3,
      token_id: 3,
      start_date: new Date(now.getFullYear(), now.getMonth() + 1, 1), // Next month
      end_date: new Date(now.getFullYear(), now.getMonth() + 2, 1), // 2 months from now
      // Target amount calculated from tokens_for_sale * guide_price
      guide_price: 12.50,
      total_tokens: 1500000,
      tokens_for_sale: 1200000,
      property_id: 3,
      title: 'Retail Shopping Center IPO',
      min_investment: 2500, // $2,500
      max_investment_per_user: 750000, // $750,000
      status: 'pending', // Ensuring exact case match with enum
      description: 'Initial offering for Retail Shopping Center tokens.',
      created_at: new Date(now.getFullYear(), now.getMonth(), 1), // Beginning of this month
      updated_at: new Date(now.getFullYear(), now.getMonth(), 1) // Beginning of this month
    }
  ];
  
  // Insert seed data
  return knex('ipos').insert(ipos);
};
