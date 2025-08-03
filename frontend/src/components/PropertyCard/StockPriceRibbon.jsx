import React from 'react';
import styled from 'styled-components';
import StockLineChart from './StockLineChart';

const RibbonContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  padding: 12px 16px;
  backdrop-filter: blur(4px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const TokenPrice = styled.span`
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
`;

const PriceMovement = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.isPositive ? 'var(--color-positive)' : 'var(--color-negative)'};
  
  svg {
    width: 14px;
    height: 14px;
    margin-right: 2px;
  }
`;

const ChartContainer = styled.div`
  width: 100px;
  height: 40px;
`;

const StockPriceRibbon = ({ price, priceChangePercent }) => {
  const isPriceChangePositive = parseFloat(priceChangePercent) >= 0;
  
  return (
    <RibbonContainer>
      <PriceContainer>
        <TokenPrice>${price}</TokenPrice>
        <PriceMovement isPositive={isPriceChangePositive}>
          {isPriceChangePositive ? (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 14l5-5 5 5H7z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          )}
          {isPriceChangePositive ? '+' : ''}{priceChangePercent}%
        </PriceMovement>
      </PriceContainer>
      <ChartContainer>
        <StockLineChart isPositive={isPriceChangePositive} />
      </ChartContainer>
    </RibbonContainer>
  );
};

export default StockPriceRibbon;
