import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import ActiveBidsPanel from './ActiveBidsPanel';
import SubscriptionProgress from '../SubscriptionProgress/SubscriptionProgress';

// Animations
const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(var(--color-accent-rgb, 240, 185, 11), 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(var(--color-accent-rgb, 240, 185, 11), 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(var(--color-accent-rgb, 240, 185, 11), 0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const newBidAnimation = keyframes`
  0% {
    transform: scale(1);
    background-color: rgba(14, 203, 129, 0.1);
  }
  50% {
    transform: scale(1.05);
    background-color: rgba(14, 203, 129, 0.2);
  }
  100% {
    transform: scale(1);
    background-color: transparent;
  }
`;

const newBidTextAnimation = keyframes`
  0% {
    font-size: 100%;
    font-weight: 400;
  }
  50% {
    font-size: 105%;
    font-weight: 600;
  }
  100% {
    font-size: 100%;
    font-weight: 400;
  }
`;

// Styled components
const PanelContainer = styled.div`
  background-color: var(--color-background-secondary, #12161c);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
`;

const PriceSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
  
  @media (max-width: 1024px) and (min-width: 769px) {
    /* For mid-width screens where the mobile button appears */
    flex-direction: column;
  }
`;

const MobileButtonContainer = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 5;
  
  @media (min-width: 1025px) {
    display: none;
  }
`;

const ClearingPriceContainer = styled.div`
  flex: 1;
`;

const ClearingPriceLabel = styled.div`
  font-size: 0.875rem;
  color: var(--color-text-secondary, #848e9c);
  margin-bottom: 0.25rem;
  display: flex;
  align-items: center;
  
  .info-icon {
    margin-left: 0.5rem;
    cursor: help;
    position: relative;
  }
  
  .tooltip {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--color-card, #1e2329);
    padding: 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
    width: 200px;
    z-index: 10;
    display: none;
    color: var(--color-text, #eaecef);
    border: 1px solid var(--color-border, #2a2f37);
  }
  
  .info-icon:hover .tooltip {
    display: block;
  }
`;

const ClearingPrice = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-accent);
  display: flex;
  align-items: center;
  
  .trend-indicator {
    margin-left: 0.5rem;
    color: #0ecb81;
    animation: ${pulse} 2s infinite;
  }
`;

const PropertyValueContainer = styled.div`
  flex: 1;
  text-align: right;
  
  @media (max-width: 1024px) {
    text-align: left;
    margin-top: 1rem;
  }
`;

const PropertyValueLabel = styled.div`
  font-size: 0.875rem;
  color: #848e9c;
  margin-bottom: 0.25rem;
`;

const PropertyValue = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #f8f9fa;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  
  &:last-child {
    border-bottom: none;
  }
`;

const InfoLabel = styled.div`
  color: #848e9c;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  
  .info-icon {
    margin-left: 0.5rem;
    cursor: help;
    position: relative;
  }
  
  .tooltip {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #2b3139;
    padding: 0.75rem;
    border-radius: 4px;
    font-size: 0.75rem;
    width: 250px;
    z-index: 10;
    display: none;
    line-height: 1.4;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  .info-icon:hover .tooltip {
    display: block;
  }
`;

const InfoValue = styled.div`
  color: #f8f9fa;
  font-weight: 500;
  font-size: 0.875rem;
`;

const ActivitySection = styled.div`
  margin-top: 1.5rem;
`;

const ActivityHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  
  .live-indicator {
    width: 8px;
    height: 8px;
    background-color: #0ecb81;
    border-radius: 50%;
    margin-right: 0.5rem;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #0ecb81;
      border-radius: 50%;
      animation: ${pulse} 2s infinite;
    }
  }
`;

const ActivityTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
`;

const ActivityList = styled.div`
  max-height: 200px;
  overflow-y: auto;
`;

const ActivityItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  
  &:last-child {
    border-bottom: none;
  }
`;

const ActivityInfo = styled.div`
  font-size: 0.75rem;
  
  .user {
    color: #f8f9fa;
    font-weight: 500;
  }
  
  .action {
    color: #848e9c;
  }
  
  .amount {
    color: var(--color-accent);
  }
`;

const ActivityTime = styled.div`
  font-size: 0.75rem;
  color: #848e9c;
`;

const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};

const AuctionStatusPanel = ({
  clearingPrice,
  startingPrice,
  propertyValue,
  timeRemaining,
  recentActivity,
  userBids,
  onAmendBid,
  mobilePlaceBidButton,
  clearingPriceChange
}) => {
  // Calculate bid momentum score (0-100)
  const [bidMomentumScore, setBidMomentumScore] = useState(68);
  const [priceIncrease, setPriceIncrease] = useState(((clearingPrice - startingPrice) / startingPrice * 100).toFixed(2));
  
  // State for allocation percentage and tokens
  const [allocationPercentage, setAllocationPercentage] = useState(81.0);
  const [allocatedTokens, setAllocatedTokens] = useState(40520.00);

  // Price growth in the last 5 minutes (percentage)
  const [priceGrowth, setPriceGrowth] = useState(0.8);
  const [activeBidders, setActiveBidders] = useState(432);
  const [priceHistory, setPriceHistory] = useState([]);
  
  // Increment allocation percentage and tokens
  useEffect(() => {
    const incrementInterval = setInterval(() => {
      setAllocationPercentage(prev => {
        // Cap at 100%
        if (prev >= 100) {
          clearInterval(incrementInterval);
          return 100;
        }
        // Increase by a random amount between 0.2% and 1.5%
        return Math.min(100, prev + (Math.random() * 1.3 + 0.2));
      });
      
      setAllocatedTokens(prev => {
        // Calculate based on percentage (50,000 total tokens)
        const totalTokens = 50000;
        const newTokens = (allocationPercentage / 100) * totalTokens;
        // Cap at 50,000
        return Math.min(totalTokens, newTokens);
      });
    }, 3000); // Update every 3 seconds
    
    return () => clearInterval(incrementInterval);
  }, [allocationPercentage]);
  
  // Simulate bid activity
  const getMomentumColor = (score) => {
    if (score >= 60) return '#0ecb81'; // High momentum - green
    if (score >= 30) return 'var(--color-accent)'; // Moderate momentum - gold
    return '#f6465d'; // Cooling momentum - red
  };
  
  // Get momentum text based on score
  const getMomentumText = (score) => {
    if (score >= 60) return 'High';
    if (score >= 30) return 'Moderate';
    return 'Cooling';
  };
  
  // Effect to increase active bidders over time and update bid momentum
  useEffect(() => {
    // Function to add a random number of new bidders
    const addNewBidders = () => {
      setActiveBidders(current => {
        // Add between 5-25 new bidders each time
        const increase = Math.floor(Math.random() * 21) + 5;
        return current + increase;
      });
    };
    
    // Function to update bid momentum score
    const updateBidMomentum = () => {
      // Mock data for the formula components
      const bidsLastFiveMins = Math.floor(Math.random() * 50) + 20;
      const avgBidsPerFiveMins = Math.floor(Math.random() * 30) + 15;
      const tokensLastFiveMins = Math.floor(Math.random() * 200) + 50;
      const avgTokensPerFiveMins = Math.floor(Math.random() * 150) + 50;
      const currentPriceChange = Math.random() * 0.05; // 0-5% change in 10 mins
      
      // Calculate components of the momentum score
      const bidRatioComponent = (bidsLastFiveMins / avgBidsPerFiveMins) * 40;
      const tokenRatioComponent = (tokensLastFiveMins / avgTokensPerFiveMins) * 30;
      const priceChangeComponent = (currentPriceChange / (startingPrice * 0.01)) * 30;
      
      // Calculate raw score
      let rawScore = bidRatioComponent + tokenRatioComponent + priceChangeComponent;
      
      // Normalize to 0-100 scale
      rawScore = Math.min(Math.max(rawScore, 0), 100);
      
      // Apply momentum reduction based on clearing price
      // As we approach $15M ($150K per token), momentum should decrease
      if (clearingPrice >= 145000) { // $14.5M total value
        const reductionFactor = Math.min((clearingPrice - 145000) / 5000, 1); // 0-1 scale between $14.5M and $15M
        
        // Reduce momentum more as we get closer to $15M
        // At $15M, momentum will be reduced by up to 70%
        rawScore = rawScore * (1 - (reductionFactor * 0.7));
        
        // Force momentum to be in the "Cooling" range (0-30) when we're very close to target price
        if (clearingPrice >= 153000) { // $15.3M total value
          rawScore = Math.min(rawScore, 30);
        }
      }
      
      // Update the momentum score with some randomness to create movement
      setBidMomentumScore(prevScore => {
        // Allow score to change by up to ±10 points, but with a stronger bias toward the raw score
        // This makes the momentum changes more predictable/less random as we approach the target
        const change = (rawScore - prevScore) * 0.4 + (Math.random() * 6 - 3);
        return Math.min(Math.max(Math.round(prevScore + change), 0), 100);
      });
      
      // Update price increase percentage
      setPriceIncrease(((clearingPrice - startingPrice) / startingPrice * 100).toFixed(2));
    };
    
    // Add new bidders at random intervals between 2-8 seconds
    const bidderInterval = setInterval(() => {
      // 80% chance of adding new bidders each interval
      if (Math.random() < 0.8) {
        addNewBidders();
      }
    }, Math.floor(Math.random() * 6000) + 2000);
    
    // Update price history and calculate growth every 10 seconds
    const priceGrowthInterval = setInterval(() => {
      const now = Date.now();
      const fiveMinutesAgo = now - 5 * 60 * 1000;
      
      // Add current price to history
      setPriceHistory(prevHistory => {
        // Add new price point
        const newHistory = [...prevHistory, { price: clearingPrice, timestamp: now }];
        // Remove entries older than 5 minutes
        return newHistory.filter(entry => entry.timestamp >= fiveMinutesAgo);
      });
      
      // Calculate actual price growth based on history
      setPriceHistory(prevHistory => {
        if (prevHistory.length > 1) {
          // Find the oldest entry within the 5-minute window
          const oldestEntry = prevHistory[0];
          // Calculate percentage change
          const change = ((clearingPrice - oldestEntry.price) / oldestEntry.price * 100).toFixed(1);
          // Always show a positive change (as requested)
          setPriceGrowth(Math.max(0.1, Math.abs(change)));
        }
        return prevHistory;
      });
      
      // Still update the momentum for other calculations
      updateBidMomentum();
    }, 10000); // Update every 10 seconds
    
    return () => {
      clearInterval(bidderInterval);
      clearInterval(priceGrowthInterval);
    };
  }, [clearingPrice, startingPrice]);
  
  return (
    <PanelContainer>
      {mobilePlaceBidButton && (
        <MobileButtonContainer>
          {mobilePlaceBidButton}
        </MobileButtonContainer>
      )}
      <PriceSection>
        <ClearingPriceContainer>
          <ClearingPriceLabel>
            Auction Clearing Price
            <span className="info-icon">
              ⓘ
              <span className="tooltip">
                The clearing price is the lowest competitive bid that fully allocates all available tokens. This is the minimum price per token bidders have to bid. When the auction ends, all bidders who end up with bids at or above this price will receive token allocation at the final clearing price, regardless of how high the original bid.
              </span>
            </span>
          </ClearingPriceLabel>
          <ClearingPrice>
            ${clearingPrice.toFixed(2)}
            <span className="trend-indicator">↑</span>
          </ClearingPrice>
        </ClearingPriceContainer>
        
        <PropertyValueContainer>
          <PropertyValueLabel>Property Value at Current Price</PropertyValueLabel>
          <PropertyValue>${propertyValue.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}</PropertyValue>
        </PropertyValueContainer>
      </PriceSection>
      
      <InfoRow>
        <InfoLabel>Auction Ends In</InfoLabel>
        <InfoValue>{formatTime(timeRemaining)}</InfoValue>
      </InfoRow>
      
      <InfoRow>
        <InfoLabel>
          Clearing price change (last 5 minutes)
          <span className="info-icon">
            ⓘ
            <span className="tooltip">
              Average percentage change in clearing price over the last 5 minutes.
            </span>
          </span>
        </InfoLabel>
        <InfoValue style={{ color: clearingPriceChange >= 0 ? '#0ecb81' : '#f6465d' }}>
          {clearingPriceChange >= 0 ? '+' : ''}{clearingPriceChange}%
        </InfoValue>
      </InfoRow>
      
      <InfoRow>
        <InfoLabel>Active Bidders</InfoLabel>
        <InfoValue>{activeBidders.toLocaleString()}</InfoValue>
      </InfoRow>
      
      <InfoRow>
        <InfoLabel>Allocation</InfoLabel>
        <InfoValue>{allocationPercentage.toFixed(1)}%</InfoValue>
      </InfoRow>
      
      <SubscriptionProgress 
        percentage={allocationPercentage}
        variant='auction'
        animate={true}
        dynamicIncrease={false}
      />
      
      <ActivitySection>
        <ActivityHeader>
          <span className="live-indicator"></span>
          <ActivityTitle>Recent Bid Activity</ActivityTitle>
        </ActivityHeader>
        
        <ActivityList>
          {recentActivity.map((activity, index) => (
            <ActivityItem key={index}>
              <ActivityInfo>
                <span className="user">{activity.user}</span>{' '}
                <span className="action">{activity.action}</span>{' '}
                <span className="amount">{activity.amount}</span>{' '}
                <span className="action">for {activity.tokens.toLocaleString(undefined, { minimumFractionDigits: 3, maximumFractionDigits: 3 })} Hermitage</span>
              </ActivityInfo>
              <ActivityTime>{activity.time}</ActivityTime>
            </ActivityItem>
          ))}
        </ActivityList>
      </ActivitySection>
      
      {/* Your Active Bids Section */}
      <ActiveBidsPanel 
        userBids={userBids}
        clearingPrice={clearingPrice}
        onAmendBid={onAmendBid}
      />
    </PanelContainer>
  );
};

export default AuctionStatusPanel;
