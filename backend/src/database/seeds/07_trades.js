/**
 * Seed trades table with initial data
 * @param {object} knex - Knex instance
 * @returns {Promise} Promise resolving to completed seed
 */
exports.seed = async function(knex) {
  try {
    // Delete existing entries
    await knex('trades').del();
    
    // Get current date
    const now = new Date();
    
    // Create historical trades based on the filled orders
    const trades = [];
    
    console.log('Starting trades seed...');
  
  // Helper function to create trade entries
  const createTrade = (tokenId, buyOrderId, sellOrderId, buyerId, sellerId, amount, price, executedAt) => {
    return {
      token_id: tokenId,
      buy_order_id: buyOrderId,
      sell_order_id: sellOrderId,
      buyer_id: buyerId,
      seller_id: sellerId,
      amount: amount,
      price: price,
      total_value: amount * price,
      executed_at: executedAt,
      created_at: executedAt
    };
  };
  
  // Get historical orders that were filled
  const filledOrders = await knex('orders')
    .where({ status: 'filled' })
    .orderBy('created_at', 'asc');
  
  // Group orders by token to match buy/sell pairs
  // We'll use a more reliable key format that avoids issues with date formats
  const ordersByToken = {};
  
  filledOrders.forEach(order => {
    // Use token_id as the primary grouping key
    const tokenId = order.token_id;
    
    // Initialize the token group if it doesn't exist
    if (!ordersByToken[tokenId]) {
      ordersByToken[tokenId] = { buys: [], sells: [] };
    }
    
    // Add the order to the appropriate list
    if (order.type === 'buy') {
      ordersByToken[tokenId].buys.push(order);
    } else {
      ordersByToken[tokenId].sells.push(order);
    }
  });
  
  // Create trades from matched orders
  Object.keys(ordersByToken).forEach(tokenIdStr => {
    const { buys, sells } = ordersByToken[tokenIdStr];
    // Ensure tokenId is properly converted to an integer
    const tokenId = parseInt(tokenIdStr, 10); // Use base 10 and ensure it's a number
    
    // Create working copies of the orders with remaining amounts to track
    const workingBuys = [...buys].map(order => ({
      ...order,
      remainingAmount: parseFloat(order.amount)
    }));
    
    const workingSells = [...sells].map(order => ({
      ...order,
      remainingAmount: parseFloat(order.amount)
    }));
    
    // Sort buy orders by price (highest first) and sell orders by price (lowest first)
    // This simulates a real order book matching algorithm
    workingBuys.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    workingSells.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    
    // Match buy and sell orders based on price
    for (let buyIndex = 0; buyIndex < workingBuys.length; buyIndex++) {
      const buyOrder = workingBuys[buyIndex];
      
      // Skip orders that are already fully matched
      if (buyOrder.remainingAmount <= 0) continue;
      
      const buyPrice = parseFloat(buyOrder.price);
      
      for (let sellIndex = 0; sellIndex < workingSells.length; sellIndex++) {
        const sellOrder = workingSells[sellIndex];
        
        // Skip orders that are already fully matched
        if (sellOrder.remainingAmount <= 0) continue;
        
        const sellPrice = parseFloat(sellOrder.price);
        
        // Only match if buy price >= sell price (a real trade would happen)
        if (buyPrice >= sellPrice) {
          // Calculate trade amount based on remaining amounts
          const tradeAmount = Math.min(
            buyOrder.remainingAmount,
            sellOrder.remainingAmount
          );
          
          // In a real market, the execution price would be the price of the order that was in the book first
          // For simplicity, we'll use the sell price as the execution price
          const tradePrice = sellPrice;
          
          // Create trade
          trades.push(createTrade(
            tokenId,
            buyOrder.id,
            sellOrder.id,
            buyOrder.user_id,
            sellOrder.user_id,
            tradeAmount,
            tradePrice,
            buyOrder.created_at
          ));
          
          // Update remaining amounts
          buyOrder.remainingAmount -= tradeAmount;
          sellOrder.remainingAmount -= tradeAmount;
          
          // If buy order is fully matched, move to next buy order
          if (buyOrder.remainingAmount <= 0) break;
          
          // Continue matching with next sell order if buy order still has remaining amount
        }
      }
    }
  
  });
  
  // Validate trades to ensure all referenced foreign keys exist
  const validTrades = [];
  
  // Get all valid token IDs
  const tokens = await knex('tokens').select('id');
  const validTokenIds = tokens.map(token => token.id);
  
  // Get all valid order IDs
  const orders = await knex('orders').select('id');
  const validOrderIds = orders.map(order => order.id);
  
  // Get all valid user IDs
  const users = await knex('users').select('id');
  const validUserIds = users.map(user => user.id);
  
  // Filter trades to only include those with valid foreign keys
  for (const trade of trades) {
    if (
      validTokenIds.includes(trade.token_id) &&
      validOrderIds.includes(trade.buy_order_id) &&
      validOrderIds.includes(trade.sell_order_id) &&
      validUserIds.includes(trade.buyer_id) &&
      validUserIds.includes(trade.seller_id)
    ) {
      validTrades.push(trade);
    } else {
      console.log(`Skipping invalid trade: ${JSON.stringify(trade)}`);
    }
  }
  
  console.log(`Valid trades: ${validTrades.length} out of ${trades.length}`);
  
    // Insert seed data with only valid trades
    return knex('trades').insert(validTrades);
  } catch (error) {
    console.error('Error in trades seed:', error);
    throw error; // Re-throw to ensure the migration fails properly
  }
};
