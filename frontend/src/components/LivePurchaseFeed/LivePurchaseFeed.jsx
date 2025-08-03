import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { formatDistanceToNow } from 'date-fns';
import { useIPOSubscription } from '../../contexts/IPOSubscriptionContext';

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

const LivePurchaseFeed = ({ purchases = [], autoUpdate = true }) => {
  const [displayedPurchases, setDisplayedPurchases] = useState(purchases);
  const [lastUpdateTime, setLastUpdateTime] = useState(new Date());
  const containerRef = useRef(null);
  
  // Get the IPO subscription context
  const { property, isFullySubscribed, addPurchase } = useIPOSubscription();
  
  // Add new mock purchases periodically if autoUpdate is true
  useEffect(() => {
    if (!autoUpdate || isFullySubscribed) return;
    
    // Keep track of all active timeouts so we can clean them up
    const timeoutIds = [];
    
    const firstNames = ['James', 'Emma', 'Noah', 'Olivia', 'William', 'Ava', 'Benjamin', 'Sophia', 'Lucas', 'Isabella', 'Henry', 'Mia', 'Alexander', 'Charlotte', 'Michael', 'Ethan', 'Amelia', 'Daniel', 'Harper', 'Matthew', 'Evelyn', 'Joseph', 'Abigail', 'David', 'Emily'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson', 'White', 'Harris'];
    
    // Generate a single purchase
    const generatePurchase = () => {
      const tokenPrice = property?.tokenPrice || 125000;
      
      // Determine order size with weighted probability:
      // - 75% chance: micro orders (0.1-0.9 tokens)
      // - 20% chance: small orders (1-3 tokens)
      // - 5% chance: large orders (4-10 tokens)
      let tokenCount;
      const orderSizeRoll = Math.random() * 100;
      
      if (orderSizeRoll < 75) {
        // Micro orders (fractional tokens)
        tokenCount = Math.round((Math.random() * 0.8 + 0.1) * 10) / 10; // 0.1 to 0.9 tokens
      } else if (orderSizeRoll < 95) {
        // Small orders
        tokenCount = Math.floor(Math.random() * 3) + 1; // 1 to 3 tokens
      } else {
        // Large orders
        tokenCount = Math.floor(Math.random() * 7) + 4; // 4 to 10 tokens
      }
      
      const randomAmount = tokenPrice * tokenCount;
      const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
      const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      const randomName = `${randomFirstName} ${randomLastName}`;
      
      // Add a small random offset to timestamp to ensure unique IDs
      const timestamp = new Date();
      const randomOffset = Math.floor(Math.random() * 100);
      
      return {
        id: `p-${Date.now()}-${randomOffset}`,
        name: randomName,
        amount: randomAmount,
        timestamp: timestamp.toISOString(),
        tokenCount
      };
    };
    
    // Add a burst of purchases
    const addPurchaseBurst = () => {
      if (isFullySubscribed) return;
      
      // Determine if this should be a burst (30% chance) or single order
      const isBurst = Math.random() < 0.3;
      
      if (isBurst) {
        // Generate a burst of 2-5 orders
        const burstCount = Math.floor(Math.random() * 4) + 2;
        const purchases = [];
        let totalAmount = 0;
        
        // Generate all purchases in the burst
        for (let i = 0; i < burstCount; i++) {
          const purchase = generatePurchase();
          purchases.push(purchase);
          totalAmount += purchase.amount;
        }
        
        // Add all purchases to the feed
        setDisplayedPurchases(prev => [...purchases, ...prev].slice(0, 10));
        setLastUpdateTime(new Date());
        
        // Update the IPO subscription progress with the total amount
        addPurchase(totalAmount);
      } else {
        // Single purchase
        const purchase = generatePurchase();
        
        // Add purchase to the feed
        setDisplayedPurchases(prev => [purchase, ...prev.slice(0, 9)]);
        setLastUpdateTime(new Date());
        
        // Update the IPO subscription progress
        addPurchase(purchase.amount);
      }
      
      // Schedule next purchase(s)
      if (!isFullySubscribed) {
        scheduleNextPurchase();
      }
    };
    
    // Function to schedule the next purchase with varying frequency
    const scheduleNextPurchase = () => {
      // Don't add more purchases if fully subscribed
      if (isFullySubscribed) return;
      
      // Much more frequent purchases: between 200ms-3s
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
      
      const timeoutId = setTimeout(addPurchaseBurst, randomDelay);
      timeoutIds.push(timeoutId);
    };
    
    // Start the initial purchase cycle
    const initialTimeoutId = setTimeout(() => {
      addPurchaseBurst();
    }, 1000);
    timeoutIds.push(initialTimeoutId);
    
    // Clean up all timeouts when component unmounts or dependencies change
    return () => {
      timeoutIds.forEach(id => clearTimeout(id));
    };
  }, [autoUpdate, property, isFullySubscribed, addPurchase]);
  
  // Initial data
  useEffect(() => {
    setDisplayedPurchases(purchases);
  }, [purchases]);
  
  // Scroll to top when new purchases are added
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [displayedPurchases]);
  
  return (
    <FeedContainer ref={containerRef}>
      <FeedTitle>
        <span className="live-indicator"></span>
        Live Acquisitions
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
        <EmptyFeed>No recent purchases</EmptyFeed>
      )}
    </FeedContainer>
  );
};

export default LivePurchaseFeed;
