import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { formatDistanceToNow } from 'date-fns';
import { useIPOSubscription } from '../../contexts/IPOSubscriptionContext';
import { useAuction } from '../../contexts/AuctionContext';

const FeedContainer = styled.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  max-height: 300px;
  overflow-y: auto;
`;

const FeedTitle = styled.h3`
  font-size: 1.125rem;
  margin-bottom: 1rem;
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  span.live-indicator {
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: #0ecb81;
    border-radius: 50%;
    margin-right: 0.5rem;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      top: -4px;
      left: -4px;
      right: -4px;
      bottom: -4px;
      border-radius: 50%;
      background-color: rgba(14, 203, 129, 0.3);
      animation: pulse 1.5s infinite;
    }
    
    @keyframes pulse {
      0% {
        transform: scale(1);
        opacity: 0.7;
      }
      70% {
        transform: scale(1.5);
        opacity: 0;
      }
      100% {
        transform: scale(1);
        opacity: 0;
      }
    }
  }
`;

const TitleContent = styled.div`
  display: flex;
  align-items: center;
`;

const ActiveBidders = styled.div`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
`;

const PurchaseItem = styled.div`
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: fadeIn 0.5s ease-in-out;
  
  &:last-child {
    border-bottom: none;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const PurchaseInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const PurchaseName = styled.div`
  font-weight: 500;
  color: var(--color-text);
`;

const PurchaseTime = styled.div`
  font-size: 0.75rem;
  color: var(--color-text-secondary);
  margin-top: 0.25rem;
`;

const PurchaseAmount = styled.div`
  font-weight: 600;
  color: var(--color-accent);
`;

const EmptyFeed = styled.div`
  text-align: center;
  padding: 2rem 0;
  color: var(--color-text-secondary);
`;

// Format currency amounts
const formatCurrency = (amount) => {
  if (amount >= 1000000) {
    return `$${(amount / 1000000).toFixed(2)}M`;
  } else if (amount >= 1000) {
    return `$${(amount / 1000).toFixed(1)}K`;
  } else {
    return `$${amount.toFixed(0)}`;
  }
};

const AuctionBidsFeed = ({ purchases = [], autoUpdate = true }) => {
  // Initialize with some sample bids if none provided
  const initialBids = purchases.length > 0 ? purchases : [
    {
      id: 'b-init-1',
      name: 'Michael S.',
      amount: 151200,
      timestamp: new Date(Date.now() - 30000).toISOString() // 30 seconds ago
    },
    {
      id: 'b-init-2',
      name: 'Sarah T.',
      amount: 150800,
      timestamp: new Date(Date.now() - 60000).toISOString() // 1 minute ago
    },
    {
      id: 'b-init-3',
      name: 'David L.',
      amount: 151500,
      timestamp: new Date(Date.now() - 120000).toISOString() // 2 minutes ago
    },
    {
      id: 'b-init-4',
      name: 'Emma W.',
      amount: 150900,
      timestamp: new Date(Date.now() - 180000).toISOString() // 3 minutes ago
    },
    {
      id: 'b-init-5',
      name: 'James K.',
      amount: 151300,
      timestamp: new Date(Date.now() - 240000).toISOString() // 4 minutes ago
    }
  ];
  
  const [displayedPurchases, setDisplayedPurchases] = useState(initialBids);
  const [lastUpdateTime, setLastUpdateTime] = useState(new Date());
  const containerRef = useRef(null);
  
  // Get the IPO subscription context
  const { property, isFullySubscribed } = useIPOSubscription();
  
  // Get auction data for realistic bid prices and active bidders count
  const { auctionData } = useAuction();
  const clearingPrice = auctionData?.clearingPrice || 150000;
  
  // Use the same dynamic active bidders count as in the live auction page
  const [activeBidders, setActiveBidders] = useState(auctionData?.activeBidders || 3842);
  
  // Effect to update active bidders count over time
  useEffect(() => {
    const interval = setInterval(() => {
      // Add a small random number of bidders (0-3) every update
      setActiveBidders(prev => {
        // Random fluctuation: 80% chance to increase, 20% chance to decrease slightly
        const change = Math.random() > 0.2 
          ? Math.floor(Math.random() * 4) // 0-3 increase
          : -Math.floor(Math.random() * 2); // 0-1 decrease
        
        return Math.max(3800, prev + change); // Ensure it doesn't go below 3800
      });
    }, 5000); // Update every 5 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  // Add new mock bids periodically if autoUpdate is true
  useEffect(() => {
    if (!autoUpdate || isFullySubscribed) return;
    
    // Keep track of all active timeouts so we can clean them up
    const timeoutIds = [];
    
    const firstNames = ['James', 'Emma', 'Noah', 'Olivia', 'William', 'Ava', 'Benjamin', 'Sophia', 'Lucas', 'Isabella', 'Henry', 'Mia', 'Alexander', 'Charlotte', 'Michael', 'Ethan', 'Amelia', 'Daniel', 'Harper', 'Matthew', 'Evelyn', 'Joseph', 'Abigail', 'David', 'Emily'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson', 'White', 'Harris'];
    
    // Generate a single bid with realistic price
    const generateBid = () => {
      // Generate a realistic bid price based on auction clearing price
      // Most bids are 1-3% above clearing price, with occasional higher bids
      let bidPriceMultiplier;
      
      const bidTypeRoll = Math.random() * 100;
      
      if (bidTypeRoll < 70) {
        // 70% chance: bid 1-3% above clearing price
        bidPriceMultiplier = 1 + (Math.random() * 2 + 1) / 100;
      } else if (bidTypeRoll < 95) {
        // 25% chance: bid 3-5% above clearing price
        bidPriceMultiplier = 1 + (Math.random() * 2 + 3) / 100;
      } else {
        // 5% chance: bid 5-10% above clearing price (substantially higher)
        bidPriceMultiplier = 1 + (Math.random() * 5 + 5) / 100;
      }
      
      // Calculate bid price
      const bidPrice = clearingPrice * bidPriceMultiplier;
      
      // Generate random name
      const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
      const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      const randomName = `${firstName} ${lastName}`;
      
      const timestamp = new Date();
      const randomOffset = Math.floor(Math.random() * 100);
      
      return {
        id: `b-${Date.now()}-${randomOffset}`,
        name: randomName,
        amount: bidPrice,
        timestamp: timestamp.toISOString()
      };
    };
    
    // Add a burst of bids
    const addBidBurst = () => {
      if (isFullySubscribed) return;
      
      // Determine if this should be a burst (30% chance) or single bid
      const isBurst = Math.random() < 0.3;
      
      if (isBurst) {
        // Generate a burst of 2-4 bids
        const burstCount = Math.floor(Math.random() * 3) + 2;
        const bids = [];
        
        // Generate all bids in the burst
        for (let i = 0; i < burstCount; i++) {
          const bid = generateBid();
          bids.push(bid);
        }
        
        // Add all bids to the feed
        setDisplayedPurchases(prev => [...bids, ...prev].slice(0, 10));
        setLastUpdateTime(new Date());
      } else {
        // Single bid
        const bid = generateBid();
        
        // Add bid to the feed
        setDisplayedPurchases(prev => [bid, ...prev.slice(0, 9)]);
        setLastUpdateTime(new Date());
      }
      
      // Schedule next bid(s)
      if (!isFullySubscribed) {
        scheduleNextBid();
      }
    };
    
    // Function to schedule the next bid with varying frequency
    const scheduleNextBid = () => {
      // Don't add more bids if fully subscribed
      if (isFullySubscribed) return;
      
      // Much more frequent bids: between 200ms-3s
      // 40% chance of very quick follow-up (200-800ms)
      // 60% chance of normal delay (1-3s)
      let randomDelay;
      
      if (Math.random() < 0.4) {
        // Quick follow-up
        randomDelay = Math.floor(Math.random() * 600) + 200;
      } else {
        // Normal delay
        randomDelay = Math.floor(Math.random() * 2000) + 1000;
      }
      
      const timeoutId = setTimeout(addBidBurst, randomDelay);
      timeoutIds.push(timeoutId);
    };
    
    // Start the initial bid cycle
    const initialTimeoutId = setTimeout(() => {
      addBidBurst();
    }, 1000);
    timeoutIds.push(initialTimeoutId);
    
    // Clean up all timeouts when component unmounts or dependencies change
    return () => {
      timeoutIds.forEach(id => clearTimeout(id));
    };
  }, [autoUpdate, property, isFullySubscribed, clearingPrice]);
  
  // Initial data
  useEffect(() => {
    setDisplayedPurchases(purchases);
  }, [purchases]);
  
  // Scroll to top when new bids are added
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [displayedPurchases]);
  
  return (
    <FeedContainer ref={containerRef}>
      <FeedTitle>
        <TitleContent>
          <span className="live-indicator"></span>
          Live Bids
        </TitleContent>
        <ActiveBidders>Active Bidders: {activeBidders}</ActiveBidders>
      </FeedTitle>
      
      {displayedPurchases.length > 0 ? (
        displayedPurchases.map(purchase => (
          <PurchaseItem key={purchase.id}>
            <PurchaseInfo>
              <PurchaseName>{purchase.name.split(' ')[0].substring(0, 3) + (purchase.name.split(' ')[1] ? ' ' + purchase.name.split(' ')[1].charAt(0) + '.' : '')}</PurchaseName>
              <PurchaseTime>
                {formatDistanceToNow(new Date(purchase.timestamp), { addSuffix: true })}
              </PurchaseTime>
            </PurchaseInfo>
            <PurchaseAmount>{formatCurrency(purchase.amount)}</PurchaseAmount>
          </PurchaseItem>
        ))
      ) : (
        <EmptyFeed>No recent bids</EmptyFeed>
      )}
    </FeedContainer>
  );
};

export default AuctionBidsFeed;
