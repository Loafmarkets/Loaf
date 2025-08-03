import React from 'react';
import styled from 'styled-components';

const PricingBarContainer = styled.div`
  width: 100%;
  margin: 1.5rem 0;
  position: relative;
`;

const PricingBarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: var(--color-text);
`;

const ValueLabel = styled.div`
  font-size: 0.875rem;
  color: ${props => props.color || 'var(--color-text-secondary)'};
  font-weight: ${props => props.bold ? '600' : '400'};
`;

const BarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(to right, 
    #4CAF50 0%, 
    #8BC34A 25%, 
    #FFEB3B 50%, 
    #FF9800 75%, 
    #F44336 100%
  );
  overflow: visible;
  margin: 24px 0;
`;

const FairValueMarker = styled.div`
  position: absolute;
  left: ${props => props.position}%;
  top: -4px; /* Extend slightly above */
  transform: translateX(-50%);
  width: 3px;
  height: calc(100% + 8px); /* Extend slightly below */
  background-color: var(--color-accent);
  z-index: 2;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
`;
const PriceMarker = styled.div`
  position: absolute;
  left: ${props => props.position}%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  background-color: var(--color-accent);
  border-radius: 50%;
  z-index: 3;
  border: 2px solid white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
`;

const PriceTooltip = styled.div`
  position: absolute;
  left: ${props => props.position}%;
  top: -45px;
  transform: translateX(-50%);
  color: white;
  font-weight: 500;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.75rem;
  text-align: center;
  line-height: 1.2;
  font-family: inherit;
  white-space: nowrap;
`;

const FairValueLabel = styled.div`
  position: absolute;
  left: 50%;
  top: -18px;
  transform: translateX(-50%);
  color: var(--color-accent);
  font-weight: 600;
  font-size: 0.875rem;
  text-align: center;
`;

const ValuesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

const ValueContainer = styled.div`
  text-align: ${props => props.align || 'left'};
`;

const ValueText = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${props => props.color || 'var(--color-text)'};
`;

const PricingModelBar = ({ 
  fairValue = 185650,
  currentPrice = 150000,
  minValue,
  maxValue,
  showTooltip = true
}) => {
  // Calculate min and max values if not provided (±10% from fair value)
  const calculatedMinValue = minValue || fairValue * 0.9;
  const calculatedMaxValue = maxValue || fairValue * 1.1;
  
  // Calculate positions as percentages
  const fairValuePosition = 50; // Always in the center
  const priceRange = calculatedMaxValue - calculatedMinValue;
  
  // Calculate price position and constrain it between 0 and 100
  let pricePosition = ((currentPrice - calculatedMinValue) / priceRange) * 100;
  pricePosition = Math.max(0, Math.min(100, pricePosition));
  
  // Format currency for display
  const formatCurrency = (amount) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(2)}M`;
    } else {
      return `$${amount.toLocaleString()}`;
    }
  };
  
  // Format currency with parenthesized total value
  const formatWithTotal = (amount) => {
    const formatted = formatCurrency(amount);
    const inMillions = (amount / 10000).toFixed(2);
    return `${formatted} ($$${inMillions}m)`;
  };

  return (
    <PricingBarContainer>
      <BarContainer>
        <FairValueMarker position={fairValuePosition} />
        <PriceMarker position={pricePosition} />
      </BarContainer>
      <FairValueLabel>Fair Value</FairValueLabel>
      <div style={{ 
        position: 'absolute', 
        left: '50%', 
        bottom: '-18px', 
        transform: 'translateX(-50%)', 
        color: 'var(--color-accent)', 
        fontWeight: '600', 
        fontSize: '0.875rem', 
        textAlign: 'center' 
      }}>
        {formatCurrency(fairValue)}
      </div>
    </PricingBarContainer>
  );
};

export default PricingModelBar;
