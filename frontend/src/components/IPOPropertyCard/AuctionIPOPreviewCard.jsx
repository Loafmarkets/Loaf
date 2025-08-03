import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import SubscriptionProgress from '../SubscriptionProgress/SubscriptionProgress';
import { useIPOSubscription } from '../../contexts/IPOSubscriptionContext';
import { useAuction } from '../../contexts/AuctionContext';

const Card = styled.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  overflow: hidden;
  transition: box-shadow var(--transition-speed) ease;
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 100%;
  min-height: 400px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 250px;
    min-height: auto;
  }
`;

const PropertyImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-speed) ease;
  
  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const StatusBadge = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: #ff9800; /* Orange color for auction */
  color: var(--color-background);
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  z-index: 1;
`;

const StatusIndicator = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.75rem;
`;

const LiveIndicator = styled(StatusIndicator)`
  /* Live indicator styles inherit from StatusIndicator */
`;

const ClosedIndicator = styled(StatusIndicator)`
  background-color: rgba(120, 120, 120, 0.85);
  display: flex;
  align-items: center;
  gap: 6px;
  
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #e74c3c;
    display: inline-block;
  }
`;

const MediaTypeContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 0.75rem;
  background: linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%);
  z-index: 5;
`;

const MediaTypeButton = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
  
  svg {
    width: 24px;
    height: 24px;
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.5));
  }
`;

const PulsingDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #00d26a;
  margin-right: 6px;
  animation: pulse 1.5s infinite;
  
  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 210, 106, 0.7);
    }
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 6px rgba(0, 210, 106, 0);
    }
    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 210, 106, 0);
    }
  }
`;

const ContentContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const PropertyName = styled.h2`
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
  color: var(--color-text);
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
`;

const PropertyAddress = styled.span`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  margin-left: 0.75rem;
  font-weight: normal;
`;

const PropertyLocation = styled.p`
  margin: 0 0 1.5rem 0;
  color: var(--color-text-secondary);
  font-size: 1rem;
`;

const PropertyDescription = styled.p`
  margin: 0 0 1.5rem 0;
  color: var(--color-text);
  font-size: 0.875rem;
  line-height: 1.5;
`;

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

const PriceLabel = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  margin-bottom: 0.25rem;
  
  .tooltip-icon {
    margin-left: 0.5rem;
    cursor: help;
    position: relative;
  }

  .tooltip-text {
    visibility: hidden;
    width: 300px;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    text-align: left;
    border-radius: 6px;
    padding: 10px;
    position: absolute;
    z-index: 100;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;
    font-size: 0.75rem;
    line-height: 1.4;
    pointer-events: none;
  }
  
  .tooltip-icon:hover .tooltip-text {
    visibility: visible;
    opacity: 1;
  }
`;

const ClearingPrice = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  
  .trend-indicator {
    margin-left: 0.5rem;
    color: #00d26a;
    font-size: 1.25rem;
    animation: ${pulse} 2s infinite;
  }
  
  .currency-indicator {
    margin-left: 0.5rem;
    color: #999;
    font-size: 1rem;
    font-weight: 300;
  }
`;

const MarketCapContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.25rem;
  justify-content: space-between;
`;

const MarketCapText = styled.div`
  font-size: 0.8rem;
  color: #fff;
  margin-left: 1.5rem;
  padding: 0.5rem;
  white-space: nowrap;
  display: flex;
  align-items: center;
  
  span {
    font-weight: 600;
    margin-left: 0.25rem;
  }
`;

const PerUnitText = styled.div`
  font-size: 0.75rem;
  color: var(--color-accent); /* Gold color */
  margin-bottom: 1.5rem;
  margin-top: -0.5rem; /* Move closer to the number */
  font-weight: normal;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatLabel = styled.span`
  color: var(--color-text-secondary);
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
  position: relative;
  
  .tooltip-icon {
    position: relative;
    display: inline-block;
    margin-left: 5px;
    color: #888;
    font-size: 0.75rem;
    cursor: help;

    &:hover .tooltip-text {
      visibility: visible;
      opacity: 1;
    }

    .tooltip-text {
      visibility: hidden;
      width: 250px;
      background-color: #333;
      color: #fff;
      text-align: left;
      border-radius: 6px;
      padding: 10px;
      position: absolute;
      z-index: 100;
      bottom: 125%;
      right: -125px;
      opacity: 0;
      transition: opacity 0.3s;
      font-weight: normal;
      font-size: 0.75rem;
      line-height: 1.4;
    }
  }
  
  .tooltip-icon:hover .tooltip-text {
    visibility: visible;
    opacity: 1;
  }
`;

const StatValue = styled.span`
  color: var(--color-text);
  font-weight: 600;
  font-size: 1.125rem;
`;

const TokenPrice = styled(StatValue)`
  color: var(--color-accent);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  text-decoration: none;
  transition: all var(--transition-speed) ease;
  flex: 1;
  
  &.btn-primary {
    background-color: var(--color-accent);
    color: var(--color-background);
    
    &:hover {
      background-color: var(--color-accent-hover);
    }
  }
  
  &.btn-secondary {
    background-color: transparent;
    color: var(--color-accent);
    border: 1px solid var(--color-accent);
    
    &:hover {
      background-color: rgba(230, 200, 126, 0.1);
    }
  }
  
  &.btn-disabled {
    background-color: #555;
    color: #999;
    cursor: not-allowed;
    
    &:hover {
      background-color: #555;
    }
  }
`;

// Format currency amounts
const formatCurrency = (amount) => {
  if (amount >= 1000000) {
    return `$${(amount / 1000000).toFixed(1)}M`;
  } else if (amount >= 1000) {
    return `$${(amount / 1000).toFixed(0)}K`;
  } else {
    return `$${amount.toFixed(0)}`;
  }
};

// Format time remaining for auction
const formatTimeRemaining = (dateString) => {
  const endDate = new Date(dateString);
  const now = new Date();
  const diffMs = endDate - now;
  
  if (diffMs <= 0) {
    return 'Ended';
  }
  
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  return `${days} Day ${hours} Hour`;
};

const AuctionIPOPreviewCard = ({ property: initialProperty }) => {
  // Use the shared IPO subscription context
  const { property, isFullySubscribed } = useIPOSubscription();
  
  // Use the auction context for real-time data
  const { auctionData } = useAuction();
  
  // Format the bid price change and ensure it's never negative
  const bidPriceChange = auctionData.bidPriceChange;
  // Extract numeric value from bidPriceChange
  const numericChange = parseFloat(bidPriceChange.replace(/[^-0-9.]/g, ''));
  // Ensure the value is always positive
  const absoluteChange = Math.abs(numericChange).toFixed(1);
  
  // Calculate average bid (10-15% higher than clearing price)
  // Using a simpler approach to avoid potential issues
  const averageBidMultiplier = 1.12; // Fixed multiplier for stability
  const averageBid = Math.round(auctionData.clearingPrice * averageBidMultiplier);
  
  // Calculate property value based on auction clearing price
  const propertyValueAtCurrentPrice = formatCurrency(auctionData.clearingPrice * auctionData.totalTokens);
  
  // State for allocation percentage animation
  const [displayedAllocationPercentage, setDisplayedAllocationPercentage] = useState(auctionData.allocatedPercentage);

  // Increment allocation percentage
  useEffect(() => {
    const incrementInterval = setInterval(() => {
      setDisplayedAllocationPercentage(prev => {
        // Cap at 100%
        if (prev >= 100) {
          clearInterval(incrementInterval);
          return 100;
        }
        // Increase by a random amount between 0.2% and 1.5%
        return Math.min(100, prev + (Math.random() * 1.3 + 0.2));
      });
    }, 3000); // Update every 3 seconds
    
    return () => clearInterval(incrementInterval);
  }, []);

  return (
    <Card>
      <ImageContainer>
        <PropertyImage src={property.imageUrl} alt={property.name} />
        <StatusBadge>Auction IPO</StatusBadge>
        {auctionData.timeRemaining <= 0 ? (
          <ClosedIndicator>
            CLOSED
          </ClosedIndicator>
        ) : (
          <LiveIndicator>
            <PulsingDot />
            LIVE
          </LiveIndicator>
        )}
        <MediaTypeContainer>
          <MediaTypeButton>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 5h16v14H4V5zm15 13V6H5v12h14zM7 13l3-3 2 2 3-3 2 2v3H7v-1z"></path>
            </svg>
          </MediaTypeButton>
          <MediaTypeButton>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5V9.5l6 3.5-6 3.5z"></path>
            </svg>
          </MediaTypeButton>
          <MediaTypeButton>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"></path>
              <path d="M12 6a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4V6z"></path>
              <path d="M18 12a6 6 0 0 0-6-6v2a4 4 0 0 1 4 4h2z"></path>
            </svg>
          </MediaTypeButton>
        </MediaTypeContainer>
      </ImageContainer>
      
      <ContentContainer>
        <PropertyName>
          {property.name}
          <PropertyAddress>{property.address}</PropertyAddress>
        </PropertyName>
        <PropertyLocation>{property.location}</PropertyLocation>
        <PropertyDescription>{property.description}</PropertyDescription>
        
        <PriceLabel>
          Clearing Bid
          <span className="tooltip-icon">
            ⓘ
            <span className="tooltip-text">The clearing price is the lowest competitive bid that fully allocates all available tokens. This is the minimum price per token bidders have to bid. When the auction ends, all bidders who end up with bids at or above this price will receive token allocation at the final clearing price, regardless of how high the original bid.</span>
          </span>
        </PriceLabel>
        <MarketCapContainer>
          <div>
            <ClearingPrice>
              <StatValue>${auctionData.clearingPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</StatValue>
              <span className="trend-indicator">↑</span>
              <span className="currency-indicator">AUD</span>
            </ClearingPrice>
            <PerUnitText>Per Token</PerUnitText>
          </div>
          <MarketCapText>
            Market Cap: <span>{propertyValueAtCurrentPrice.startsWith('$') ? propertyValueAtCurrentPrice : '$' + propertyValueAtCurrentPrice}</span>
          </MarketCapText>
        </MarketCapContainer>
        
        <SubscriptionProgress 
          percentage={displayedAllocationPercentage}
          variant="auction"
          animate={true}
          raisedAmount={displayedAllocationPercentage}
          targetAmount={100}
        />
        
        <StatsGrid>
          <StatItem>
            <StatLabel>
              Average Bid
              <span className="tooltip-icon">
                ⓘ
                <span className="tooltip-text">Average bid is the average of all competitive bids above the clearing price.</span>
              </span>
            </StatLabel>
            <TokenPrice>
              <StatValue>${averageBid.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</StatValue>
              <span style={{ 
                color: '#00d26a', 
                marginLeft: '4px',
                display: 'inline-block',
                animation: 'pulse 1.5s infinite',
              }}>↑</span>
              <div style={{ 
                fontSize: '0.75rem', 
                color: 'var(--color-accent)', /* Gold color */
                fontWeight: 'normal',
                marginTop: '-2px' /* Move closer to the number */
              }}>Per Token</div>
            </TokenPrice>
          </StatItem>
          <StatItem>
            <StatLabel>
              Modelled Valuation
              <span className="tooltip-icon">
                ⓘ
                <span className="tooltip-text">The fair market value from the Loaf Pricing Model which utilises millions of data points, comparables, independent valuations, economic data and more in real time.</span>
              </span>
            </StatLabel>
            <StatValue>$16.5M</StatValue>
          </StatItem>
          <StatItem>
            <StatLabel>Total Tokens</StatLabel>
            <StatValue style={{ color: '#fff' }}>
              {property.totalTokens?.toLocaleString() || '50,000'}  
            </StatValue>
          </StatItem>
          <StatItem>
            <StatLabel>Auction Ends In:</StatLabel>
            <StatValue>{formatTimeRemaining(new Date(Date.now() + auctionData.timeRemaining * 1000).toISOString())}</StatValue>
          </StatItem>
        </StatsGrid>
        
        <ButtonGroup>
          <Button 
            to="/auction-test" 
            className="btn-secondary"
            onClick={() => console.log('View Details clicked for auction test page')}
          >
            View Details
          </Button>
          <Button 
            to={auctionData.timeRemaining <= 0 ? '#' : '/auction-test'} 
            className={auctionData.timeRemaining <= 0 ? "btn-disabled" : "btn-primary"}
          >
            {auctionData.timeRemaining <= 0 ? "Closed" : "Place Bid"}
          </Button>
        </ButtonGroup>
      </ContentContainer>
    </Card>
  );
};

export default AuctionIPOPreviewCard;
