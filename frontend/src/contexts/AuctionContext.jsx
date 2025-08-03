import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
const AuctionContext = createContext();

// Custom hook to use the auction context
export const useAuction = () => {
  const context = useContext(AuctionContext);
  if (!context) {
    throw new Error('useAuction must be used within an AuctionProvider');
  }
  return context;
};

// Provider component
export const AuctionProvider = ({ children }) => {
  // Auction state
  const [auctionData, setAuctionData] = useState({
    clearingPrice: 250.00,
    startingPrice: 225.00,
    propertyValue: 12500000.00, // 50,000 tokens * $250.00 = $12.5M
    timeRemaining: 172800, // 48 hours in seconds
    bidPriceChange: '+1.2',
    allocatedPercentage: 78.5, // Percentage of tokens allocated with decimals
    recentActivity: [
      {
        user: 'User123',
        action: 'placed a bid at',
        amount: '$255',
        tokens: 50,
        time: '2 mins ago'
      },
      {
        user: 'User456',
        action: 'placed a bid at',
        amount: '$252',
        tokens: 30,
        time: '5 mins ago'
      }
    ],
    activeBidders: 42
  });

  // Mock function to simulate data updates
  useEffect(() => {
    // Update auction data every 10 seconds to simulate real-time changes
    const interval = setInterval(() => {
      setAuctionData(prevData => {
        // Generate a small random price change (-0.5% to +1.5%)
        const priceChangePercent = (Math.random() * 2 - 0.5) / 100;
        const newClearingPrice = parseFloat((prevData.clearingPrice * (1 + priceChangePercent)).toFixed(2));
        
        // Calculate new property value based on clearing price (50,000 tokens)
        const newPropertyValue = newClearingPrice * 50000;
        
        // Calculate price change over 5 minutes (simulated)
        const priceChangeDirection = Math.random() > 0.3 ? '+' : '-'; // 70% chance of positive change
        const priceChangeAmount = (Math.random() * 2 + 0.1).toFixed(1); // 0.1% to 2.1%
        
        // Decrease time remaining
        const newTimeRemaining = Math.max(0, prevData.timeRemaining - 10);
        
        // Update allocated percentage with small random changes
        const allocatedChange = (Math.random() * 0.6 - 0.2); // -0.2% to +0.4%
        const newAllocatedPercentage = parseFloat((prevData.allocatedPercentage + allocatedChange).toFixed(2));
        // Keep between 0 and 100
        const boundedAllocatedPercentage = Math.min(100, Math.max(0, newAllocatedPercentage));
        
        return {
          ...prevData,
          clearingPrice: newClearingPrice,
          propertyValue: newPropertyValue,
          bidPriceChange: `${priceChangeDirection}${priceChangeAmount}`,
          timeRemaining: newTimeRemaining,
          allocatedPercentage: boundedAllocatedPercentage
        };
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Value to be provided to consumers
  const value = {
    auctionData,
    setAuctionData
  };

  return (
    <AuctionContext.Provider value={value}>
      {children}
    </AuctionContext.Provider>
  );
};

export default AuctionContext;
