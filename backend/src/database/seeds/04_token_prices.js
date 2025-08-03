/**
 * Seed token_prices table with initial data
 * @param {object} knex - Knex instance
 * @returns {Promise} Promise resolving to completed seed
 */
exports.seed = async function(knex) {
  // Delete existing entries
  await knex('token_prices').del();
  
  // Create price history for the past 30 days
  const priceEntries = [];
  const now = new Date();
  
  // Helper function to generate random price fluctuations
  const generatePriceHistory = (tokenId, basePrice, volatility) => {
    let currentPrice = basePrice;
    
    // Generate price points for the last 30 days
    for (let i = 30; i >= 0; i--) {
      // Random price movement with volatility factor
      const change = (Math.random() - 0.5) * 2 * volatility * currentPrice;
      currentPrice = Math.max(basePrice * 0.7, Math.min(basePrice * 1.3, currentPrice + change));
      
      // Create timestamp for this price point
      const timestamp = new Date(now);
      timestamp.setDate(now.getDate() - i);
      
      // Add multiple price points per day for more realistic data
      const pricePointsPerDay = 4;
      for (let j = 0; j < pricePointsPerDay; j++) {
        const pointTimestamp = new Date(timestamp);
        pointTimestamp.setHours(9 + j * 4); // Prices at 9am, 1pm, 5pm, 9pm
        
        // Small variation within the day
        const intraday_change = (Math.random() - 0.5) * 0.005 * currentPrice;
        const price = Math.round((currentPrice + intraday_change) * 100) / 100;
        
        priceEntries.push({
          token_id: tokenId,
          price: price,
          timestamp: pointTimestamp
        });
      }
    }
  };
  
  // Generate price history for each token
  generatePriceHistory(1, 10.00, 0.01); // LUXAPT with 1% volatility
  generatePriceHistory(2, 15.00, 0.015); // OFCTWR with 1.5% volatility
  generatePriceHistory(3, 12.50, 0.012); // RTLCTR with 1.2% volatility
  
  // Insert seed data
  return knex('token_prices').insert(priceEntries);
};
