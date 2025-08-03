import React from 'react';
import styled from 'styled-components';
import StockLineChart from './StockLineChart';

const BarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  background-color: #111;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 0;
  padding-right: 12px;
`;

const TokenIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 12px;
  background-color: #4CAF50;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 16px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 12px;
`;

const PropertyName = styled.span`
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0;
  line-height: 1.2;
`;

const TokenPrice = styled.span`
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.2;
`;

const PriceMovement = styled.div`
  font-size: 0.85rem;
  font-weight: 500;
  color: ${props => props.isPositive ? '#4CAF50' : '#FF5252'};
  margin-top: 2px;
`;

const AgencyLogo = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
  color: white;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 0.875rem;
`;

const StockPriceBar = ({ price, priceChangePercent, propertyName, suburb }) => {
  const isPriceChangePositive = parseFloat(priceChangePercent) >= 0;
  
  return (
    <BarContainer>
      <LeftContainer>
        <ContentContainer>
          <PropertyName>{suburb || propertyName}</PropertyName>
        </ContentContainer>
      </LeftContainer>
      <StockLineChart isPositive={isPriceChangePositive} />
      <RightContainer>
        <TokenPrice>${parseFloat(price).toFixed(2)}</TokenPrice>
        <PriceMovement isPositive={isPriceChangePositive}>
          {isPriceChangePositive ? '+' : ''}{priceChangePercent}%
        </PriceMovement>
      </RightContainer>
    </BarContainer>
  );
};

export default StockPriceBar;
