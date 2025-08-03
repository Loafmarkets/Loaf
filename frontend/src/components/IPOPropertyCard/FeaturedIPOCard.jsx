import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SubscriptionProgress from '../SubscriptionProgress/SubscriptionProgress';
import { useIPOSubscription } from '../../contexts/IPOSubscriptionContext';

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
  background-color: var(--color-accent);
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
  font-size: 2rem;
  color: var(--color-text);
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
`;

const PropertyAddress = styled.span`
  font-size: 1rem;
  color: var(--color-text-secondary);
  margin-left: 1rem;
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
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  font-weight: 500;
  text-align: center;
  flex: 1;
  display: inline-block;
  text-decoration: none;
  
  &.btn-primary {
    background-color: var(--color-accent);
    color: var(--color-background);
    
    &:hover {
      background-color: var(--color-accent-hover);
    }
  }
  
  &.btn-secondary {
    background-color: transparent;
    border: 1px solid var(--color-accent);
    color: var(--color-accent);
    
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

// Format date to readable format
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const FeaturedIPOCard = ({ property: initialProperty }) => {
  // Use the shared IPO subscription context
  const { property, isFullySubscribed } = useIPOSubscription();
  return (
    <Card>
      <ImageContainer>
        <PropertyImage src={property.imageUrl} alt={property.name} />
        <StatusBadge>Public IPO</StatusBadge>
        {isFullySubscribed ? (
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
        
        <SubscriptionProgress 
          percentage={property.subscriptionPercentage}
          raisedAmount={property.raisedAmount}
          targetAmount={property.targetRaise}
        />
        
        <StatsGrid>
          <StatItem>
            <StatLabel>Token Price</StatLabel>
            <TokenPrice>${property.tokenPrice.toLocaleString()}</TokenPrice>
          </StatItem>
          <StatItem>
            <StatLabel>Projected Yield</StatLabel>
            <StatValue>{property.projectedYield}%</StatValue>
          </StatItem>
          <StatItem>
            <StatLabel>Total Tokens</StatLabel>
            <StatValue>{property.totalTokens.toLocaleString()}</StatValue>
          </StatItem>
          <StatItem>
            <StatLabel>Closing Date</StatLabel>
            <StatValue>{formatDate(property.ipoEndDate)}</StatValue>
          </StatItem>
        </StatsGrid>
        
        <ButtonGroup>
          <Button 
            to={`/ipo/${property.id}`} 
            className="btn-secondary"
            onClick={() => console.log('View Details clicked for IPO ID:', property.id)}
          >
            View Details
          </Button>
          <Button 
            to={isFullySubscribed ? '#' : `/ipo/${property.id}/buy`} 
            className={isFullySubscribed ? "btn-disabled" : "btn-primary"}
          >
            {isFullySubscribed ? "Closed" : "Buy Now"}
          </Button>
        </ButtonGroup>
      </ContentContainer>
    </Card>
  );
};

export default FeaturedIPOCard;
