/**
 * Seed orders table with initial data
 * @param {object} knex - Knex instance
 * @returns {Promise} Promise resolving to completed seed
 */
exports.seed = async function(knex) {
  // Delete existing entries
  await knex('orders').del();
  
  // Get current date
  const now = new Date();
  
  // Create some historical orders (mix of filled and canceled)
  const historicalOrders = [];
  
  // Historical orders for User 1
  for (let i = 1; i <= 5; i++) {
    const date = new Date(now);
    date.setDate(now.getDate() - i * 2);
    
    historicalOrders.push({
      user_id: 2,
      token_id: 1,
      type: i % 2 === 0 ? 'buy' : 'sell',
      amount: 100 * i,
      price: 10 + (i % 3 - 1),
      filled_amount: 100 * i,
      status: 'filled',
      created_at: date,
      updated_at: date
    });
  }
  
  // Historical orders for User 2
  for (let i = 1; i <= 5; i++) {
    const date = new Date(now);
    date.setDate(now.getDate() - i * 2);
    
    historicalOrders.push({
      user_id: 3,
      token_id: i <= 3 ? 1 : 3,
      type: i % 2 === 0 ? 'sell' : 'buy',
      amount: 150 * i,
      price: 10 + (i % 3 - 1),
      filled_amount: i <= 4 ? 150 * i : 0,
      status: i <= 4 ? 'filled' : 'cancelled',
      created_at: date,
      updated_at: date
    });
  }
  
  // Create active orders
  const activeOrders = [
    // Buy orders for LUXAPT (Token 1)
    {
      user_id: 2,
      token_id: 1,
      type: 'buy',
      amount: 200,
      price: 9.80,
      filled_amount: 0,
      status: 'open',
      created_at: now,
      updated_at: now
    },
    {
      user_id: 3,
      token_id: 1,
      type: 'buy',
      amount: 300,
      price: 9.75,
      filled_amount: 0,
      status: 'open',
      created_at: now,
      updated_at: now
    },
    {
      user_id: 2,
      token_id: 1,
      type: 'buy',
      amount: 500,
      price: 9.70,
      filled_amount: 0,
      status: 'open',
      created_at: now,
      updated_at: now
    },
    
    // Sell orders for LUXAPT (Token 1)
    {
      user_id: 3,
      token_id: 1,
      type: 'sell',
      amount: 150,
      price: 10.20,
      filled_amount: 0,
      status: 'open',
      created_at: now,
      updated_at: now
    },
    {
      user_id: 2,
      token_id: 1,
      type: 'sell',
      amount: 250,
      price: 10.30,
      filled_amount: 0,
      status: 'open',
      created_at: now,
      updated_at: now
    },
    
    // Buy orders for OFCTWR (Token 2)
    {
      user_id: 2,
      token_id: 2,
      type: 'buy',
      amount: 200,
      price: 14.80,
      filled_amount: 0,
      status: 'open',
      created_at: now,
      updated_at: now
    },
    
    // Sell orders for OFCTWR (Token 2)
    {
      user_id: 2,
      token_id: 2,
      type: 'sell',
      amount: 100,
      price: 15.20,
      filled_amount: 0,
      status: 'open',
      created_at: now,
      updated_at: now
    },
    
    // Buy orders for RTLCTR (Token 3)
    {
      user_id: 3,
      token_id: 3,
      type: 'buy',
      amount: 300,
      price: 12.30,
      filled_amount: 0,
      status: 'open',
      created_at: now,
      updated_at: now
    },
    
    // Sell orders for RTLCTR (Token 3)
    {
      user_id: 3,
      token_id: 3,
      type: 'sell',
      amount: 200,
      price: 12.70,
      filled_amount: 0,
      status: 'open',
      created_at: now,
      updated_at: now
    }
  ];
  
  // Combine all orders
  const allOrders = [...historicalOrders, ...activeOrders];
  
  // Insert seed data
  return knex('orders').insert(allOrders);
};
