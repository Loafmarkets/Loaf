/**
 * Seed wallets table with initial data
 * @param {object} knex - Knex instance
 * @returns {Promise} Promise resolving to completed seed
 */
exports.seed = async function(knex) {
  // Delete existing entries
  await knex('wallets').del();
  
  // Insert seed data - create USD wallets for all users
  const usdWallets = [
    {
      user_id: 1, // Admin
      currency: 'USD',
      balance: 100000.00,
      locked_balance: 0,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      user_id: 2, // User 1
      currency: 'USD',
      balance: 50000.00,
      locked_balance: 0,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      user_id: 3, // User 2
      currency: 'USD',
      balance: 75000.00,
      locked_balance: 0,
      created_at: new Date(),
      updated_at: new Date()
    }
  ];
  
  // Create token wallets for users
  const tokenWallets = [];
  
  // User 1 has some tokens
  tokenWallets.push(
    {
      user_id: 2,
      token_id: 1,
      balance: 5000,
      locked_balance: 0,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      user_id: 2,
      token_id: 2,
      balance: 3000,
      locked_balance: 0,
      created_at: new Date(),
      updated_at: new Date()
    }
  );
  
  // User 2 has some tokens
  tokenWallets.push(
    {
      user_id: 3,
      token_id: 1,
      balance: 2500,
      locked_balance: 0,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      user_id: 3,
      token_id: 3,
      balance: 4000,
      locked_balance: 0,
      created_at: new Date(),
      updated_at: new Date()
    }
  );
  
  // Admin has all tokens
  tokenWallets.push(
    {
      user_id: 1,
      token_id: 1,
      balance: 992500, // Remaining tokens after user allocations
      locked_balance: 0,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      user_id: 1,
      token_id: 2,
      balance: 1997000, // Remaining tokens after user allocations
      locked_balance: 0,
      created_at: new Date(),
      updated_at: new Date()
    },
    {
      user_id: 1,
      token_id: 3,
      balance: 1496000, // Remaining tokens after user allocations
      locked_balance: 0,
      created_at: new Date(),
      updated_at: new Date()
    }
  );
  
  // Combine all wallet data
  const allWallets = [...usdWallets, ...tokenWallets];
  
  // Insert seed data
  return knex('wallets').insert(allWallets);
};
