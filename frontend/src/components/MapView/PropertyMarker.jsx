import React from 'react';
import styled from 'styled-components';

const PropertyMarker = ({ property, isHovered, onClick, onMouseEnter, onMouseLeave }) => {
  // Determine if price change is positive, negative, or neutral
  const priceChangeValue = parseFloat(property.priceChangePercent);
  const isPriceUp = priceChangeValue > 0;
  const isPriceDown = priceChangeValue < 0;
  
  return (
    <MarkerContainer 
      isHovered={isHovered}
      isPriceUp={isPriceUp}
      isPriceDown={isPriceDown}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <PriceTag>
        <TokenPrice>${property.tokenPrice}</TokenPrice>
        <PriceChange isPriceUp={isPriceUp} isPriceDown={isPriceDown}>
          {isPriceUp ? '+' : ''}{property.priceChangePercent}%
        </PriceChange>
      </PriceTag>
      
      {isHovered && (
        <HoverPreview>
          <PropertyImage src={property.imageUrl} alt={property.name} />
          <PropertyInfo>
            <PropertyName>{property.name}</PropertyName>
            <PropertyLocation>{property.location}</PropertyLocation>
            <PropertyCategory>{property.category}</PropertyCategory>
          </PropertyInfo>
        </HoverPreview>
      )}
    </MarkerContainer>
  );
};

const MarkerContainer = styled.div`
  position: relative;
  cursor: pointer;
  z-index: ${props => props.isHovered ? 10 : 1};
  transition: all 0.3s ease;
  transform: ${props => props.isHovered ? 'scale(1.05)' : 'scale(1)'};
`;

const PriceTag = styled.div`
  background-color: #1A1A1D;
  color: white;
  border-radius: 8px;
  padding: 8px 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 90px;
  border: 2px solid ${props => 
    props.isPriceUp ? '#00C853' : 
    props.isPriceDown ? '#FF3D00' : 
    '#1A1A1D'
  };
`;

const TokenPrice = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

const PriceChange = styled.div`
  font-size: 12px;
  color: ${props => 
    props.isPriceUp ? '#00C853' : 
    props.isPriceDown ? '#FF3D00' : 
    '#FFFFFF'
  };
  margin-top: 2px;
`;

const HoverPreview = styled.div`
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  width: 220px;
  background-color: #1A1A1D;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 100;
`;

const PropertyImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
`;

const PropertyInfo = styled.div`
  padding: 12px;
`;

const PropertyName = styled.div`
  font-weight: bold;
  font-size: 14px;
  color: white;
  margin-bottom: 4px;
`;

const PropertyLocation = styled.div`
  font-size: 12px;
  color: #CCCCCC;
  margin-bottom: 4px;
`;

const PropertyCategory = styled.div`
  font-size: 11px;
  color: #999999;
  background-color: rgba(255, 255, 255, 0.1);
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
`;

export default PropertyMarker;
