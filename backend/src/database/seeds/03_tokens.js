/**
 * Seed tokens table with initial data
 * @param {object} knex - Knex instance
 * @returns {Promise} Promise resolving to completed seed
 */
exports.seed = async function(knex) {
  // Delete existing entries
  await knex('tokens').del();
  
  // Insert seed data
  return knex('tokens').insert([
    {
      id: 1,
      property_id: 1,
      symbol: 'LUXAPT',
      name: 'Luxury Apartment Token',
      total_supply: 1000000,
      initial_price: 10.00,
      decimals: 2,
      status: 'active',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 2,
      property_id: 2,
      symbol: 'OFCTWR',
      name: 'Office Tower Token',
      total_supply: 2000000,
      initial_price: 15.00,
      decimals: 2,
      status: 'active',
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      id: 3,
      property_id: 3,
      symbol: 'RTLCTR',
      name: 'Retail Center Token',
      total_supply: 1500000,
      initial_price: 12.50,
      decimals: 2,
      status: 'active',
      created_at: new Date(),
      updated_at: new Date()
    }
  ]);
};
