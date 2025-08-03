import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const ProgressContainer = styled.div`
  width: 100%;
  margin: 1.5rem 0;
`;

const ProgressBarOuter = styled.div`
  width: 100%;
  height: 12px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  overflow: hidden;
  position: relative;
`;

const ProgressBarInner = styled.div`
  height: 100%;
  background-color: var(--color-accent);
  border-radius: 6px;
  width: ${props => `${props.percentage}%`};
  transition: width 1s ease-in-out;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    animation: shimmer 2s infinite;
  }
  
  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

const ProgressInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  font-size: 0.875rem;
`;

const ProgressPercentage = styled.div`
  font-weight: 600;
  color: var(--color-accent);
  
  span {
    font-size: 0.75rem;
    font-weight: 400;
    opacity: 0.8;
    margin-left: 4px;
  }
`;

const ProgressLabel = styled.div`
  color: var(--color-text-secondary);
`;

const ProgressAmount = styled.div`
  font-weight: 600;
  color: var(--color-text);
`;

const SubscriptionProgress = ({ 
  percentage = 0,
  raisedAmount = 0,
  targetAmount = 0,
  animate = true,
  dynamicIncrease = false,
  variant = 'default'
}) => {
  // Start from current percentage or 30% if dynamicIncrease is enabled
  const startPercentage = dynamicIncrease ? Math.max(30, percentage) : percentage;
  const [displayedPercentage, setDisplayedPercentage] = useState(animate ? 0 : startPercentage);
  const [displayedAmount, setDisplayedAmount] = useState(raisedAmount);
  const timerRef = useRef(null);
  const intervalRef = useRef(null);
  
  // Function to dispatch event when subscription reaches 100%
  const notifySubscriptionComplete = () => {
    const event = new CustomEvent('subscription_complete');
    window.dispatchEvent(event);
  };
  
  // Update displayed percentage when percentage prop changes, but never decrease it
  useEffect(() => {
    // Never decrease the displayed percentage, only increase it
    setDisplayedPercentage(prev => Math.max(prev, percentage));
  }, [percentage]);
  
  // Dynamic increase effect
  useEffect(() => {
    if (dynamicIncrease) {
      // Clear any existing timers
      if (timerRef.current) clearTimeout(timerRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
      
      // Initial delay before starting the dynamic increase
      timerRef.current = setTimeout(() => {
        // Start from current percentage or 30%
        let currentPercentage = startPercentage;
        
        intervalRef.current = setInterval(() => {
          // Random increase between 0.1% and 2%
          const increase = Math.random() * 1.9 + 0.1;
          
          // Calculate new percentage with decimals
          const newAllocatedPercentage = parseFloat((Math.random() * 2 - 0.5 + currentPercentage).toFixed(1));
          const boundedPercentage = Math.min(100, Math.max(0, newAllocatedPercentage));
          
          // Calculate new amount
          const newAmount = (boundedPercentage / 100) * targetAmount;
          
          // Update state
          setDisplayedPercentage(boundedPercentage);
          setDisplayedAmount(newAmount);
          
          // Update current percentage for next interval
          currentPercentage = boundedPercentage;
          
          // If reached 100%, clear interval and notify
          if (boundedPercentage >= 100) {
            clearInterval(intervalRef.current);
            notifySubscriptionComplete();
          }
        }, 2000); // Update every 2 seconds
      }, 3000); // Start after 3 seconds
      
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [dynamicIncrease, startPercentage, targetAmount]);
  
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
  
  // Use displayedAmount when dynamicIncrease is enabled, otherwise use raisedAmount
  const amountToDisplay = dynamicIncrease ? displayedAmount : raisedAmount;
  
  return (
    <ProgressContainer>
      <ProgressBarOuter>
        <ProgressBarInner percentage={displayedPercentage} />
      </ProgressBarOuter>
      <ProgressInfo>
        <ProgressPercentage>
          {displayedPercentage.toFixed(1)}% {variant === 'auction' ? 'Allocated' : 'Subscribed'}
          {displayedPercentage >= 100 && variant === 'auction' && (
            <span>(Bids above clearing price will gain allocation)</span>
          )}
        </ProgressPercentage>
        <ProgressLabel>
          <ProgressAmount>
            {variant === 'auction' 
              ? `${((displayedPercentage / 100) * 50000).toFixed(2)} / 50k Hermitage`
              : `${formatCurrency(amountToDisplay)} / ${formatCurrency(targetAmount)}`
            }
          </ProgressAmount>
        </ProgressLabel>
      </ProgressInfo>
    </ProgressContainer>
  );
};

export default SubscriptionProgress;
