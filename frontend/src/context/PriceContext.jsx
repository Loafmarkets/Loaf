import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the price context
export const PriceContext = createContext();

// Custom hook to use the price context
export const usePrice = () => useContext(PriceContext);

// Provider component
export const PriceProvider = ({ children }) => {
  // Initial price state
  const [price, setPrice] = useState({
    value: 325000,
    formatted: "325,000.00",
    change: {
      value: "1625.00",
      percentage: "0.50",
      isPositive: true
    }
  });

  // Function to format price for display
  const formatPrice = (price) => {
    return price.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  // Update price every 5 seconds with a random fluctuation
  // Keep price within bounds of $300,000 to $350,000
  useEffect(() => {
    const interval = setInterval(() => {
      setPrice(currentPrice => {
        // Generate a random percentage change between +0.2% and +1.5%
        const randomPercentage = 0.2 + Math.random() * 1.3;
        const changeAmount = currentPrice.value * (randomPercentage / 100);
        let newPrice = currentPrice.value + changeAmount;
        
        // Check if price exceeds upper bound, if so reverse direction
        if (newPrice > 350000) {
          // Reverse direction and stay within bounds
          newPrice = 350000 - (newPrice - 350000);
          // Ensure we don't go below lower bound with the correction
          newPrice = Math.max(newPrice, 300000);
        }
        
        // Check if price falls below lower bound
        if (newPrice < 300000) {
          // Bounce back from lower bound
          newPrice = 300000 + (300000 - newPrice);
          // Ensure we don't exceed upper bound with the correction
          newPrice = Math.min(newPrice, 350000);
        }
        
        // Calculate actual percentage change based on final price
        const actualChange = newPrice - currentPrice.value;
        const actualPercentage = (actualChange / currentPrice.value * 100).toFixed(2);
        
        return {
          value: newPrice,
          formatted: formatPrice(newPrice),
          change: {
            value: actualChange.toFixed(2),
            percentage: actualPercentage,
            isPositive: actualChange >= 0 // Could be negative if we hit upper bound
          }
        };
      });
    }, 5000);
    
    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <PriceContext.Provider value={price}>
      {children}
    </PriceContext.Provider>
  );
};
