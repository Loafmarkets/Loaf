import React from 'react';
import styled from 'styled-components';

const MarkerPopup = ({ property }) => {
  // Format numbers with commas
  const formatNumber = (num) => {
    if (!num) return '0';
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  // Parse price change to determine color
  const priceChangeValue = parseFloat(property.priceChangePercent);
  const isPriceUp = priceChangeValue > 0;
  const isPriceDown = priceChangeValue < 0;

  return (
    <PopupContainer>
      <PropertyImage src={property.imageUrl} alt={property.name} />
      
      <ContentContainer>
        <PropertyName>{property.name}</PropertyName>
        <PropertyLocation>{property.location}</PropertyLocation>
        
        <MetricsContainer>
          <MetricColumn>
            <MetricLabel>Token Price</MetricLabel>
            <MetricValue>${property.tokenPrice}</MetricValue>
          </MetricColumn>
          
          <MetricColumn>
            <MetricLabel>Implied Value</MetricLabel>
            <MetricValue>${formatNumber(property.marketCap)}</MetricValue>
          </MetricColumn>
          
          <MetricColumn>
            <MetricLabel>24h Volume</MetricLabel>
            <MetricValue>${formatNumber(property.volume24h)}</MetricValue>
          </MetricColumn>
        </MetricsContainer>
        
        <PriceChangeContainer>
          <PriceChange isPriceUp={isPriceUp} isPriceDown={isPriceDown}>
            {isPriceUp ? '+' : ''}{property.priceChangePercent}%
          </PriceChange>
          <PriceChangeLabel>24h Change</PriceChangeLabel>
        </PriceChangeContainer>
        
        <PropertyCategory>{property.category}</PropertyCategory>
        
        <PropertyDescription>{property.description}</PropertyDescription>
        
        <ViewButton>View Property</ViewButton>
      </ContentContainer>
    </PopupContainer>
  );
};

const PopupContainer = styled.div`
  width: 320px;
  background-color: #1A1A1D;
  border-radius: 8px;
  overflow: hidden;
`;

const PropertyImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  padding: 16px;
`;

const PropertyName = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: white;
  margin: 0 0 4px 0;
`;

const PropertyLocation = styled.div`
  font-size: 14px;
  color: #CCCCCC;
  margin-bottom: 16px;
`;

const MetricsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const MetricColumn = styled.div`
  flex: 1;
`;

const MetricLabel = styled.div`
  font-size: 12px;
  color: #999999;
  margin-bottom: 4px;
`;

const MetricValue = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: white;
`;

const PriceChangeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const PriceChange = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${props => 
    props.isPriceUp ? '#00C853' : 
    props.isPriceDown ? '#FF3D00' : 
    '#FFFFFF'
  };
  margin-right: 8px;
`;

const PriceChangeLabel = styled.div`
  font-size: 12px;
  color: #999999;
`;

const PropertyCategory = styled.div`
  font-size: 12px;
  color: #CCCCCC;
  background-color: rgba(255, 255, 255, 0.1);
  display: inline-block;
  padding: 4px 10px;
  border-radius: 4px;
  margin-bottom: 12px;
`;

const PropertyDescription = styled.p`
  font-size: 14px;
  color: #CCCCCC;
  margin: 0 0 16px 0;
  line-height: 1.4;
`;

const ViewButton = styled.button`
  width: 100%;
  background-color: #6200EA;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #7C4DFF;
  }
`;

export default MarkerPopup;
