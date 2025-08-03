import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropertyIcons from '../../components/PropertyCard/PropertyIcons';

const PanelContainer = styled(Link)`
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  text-decoration: none;
  cursor: pointer;
`;

const PropertyImage = styled.img`
  display: block;
  max-width: none;
  min-width: 120%;
  min-height: 120%;
  margin: 0;
  padding: 0;
  transition: transform var(--transition-speed) ease;
  transform: scale(1.0);
  transform-origin: center center;
  
  ${PanelContainer}:hover & {
    transform: scale(1.05);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;

const PropertyInfo = styled.div`
  display: inline-block;
  width: auto;
  max-width: 70%;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
`;

const PropertyName = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const PropertyLocation = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
`;

const PropertyPrice = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-accent, #f0b90b);
  margin-left: 1rem;
  padding-left: 1rem;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
`;

const PriceChangeIndicator = styled.span`
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.isPositive ? 'var(--color-positive, #0ecb81)' : 'var(--color-negative, #f6465d)'};
  animation: float 3s ease-in-out infinite;
  
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-3px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  
  svg {
    margin-right: 0.15rem;
  }
`;

const PropertyFeatures = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
    width: 18px;
    height: 18px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ActionButton = styled(Link)`
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
  text-decoration: none;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const TradeButton = styled(ActionButton)`
  background-color: var(--color-accent, #f0b90b);
  color: black;
  font-size: 0.95rem;
  
  &:hover {
    background-color: var(--color-accent-hover, #f8d12f);
  }
`;

const OfferButton = styled(ActionButton)`
  background-color: rgba(240, 185, 11, 0.15);
  color: var(--color-accent, #f0b90b);
  border: 1px solid var(--color-accent, #f0b90b);
  font-size: 0.95rem;
  
  &:hover {
    background-color: rgba(240, 185, 11, 0.25);
  }
`;

const FeaturedPropertyPanel = ({ property }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (!property) return null;

  const token = property.token || { 
    price: property.price || 125000, 
    basePrice: property.basePrice || 125000 
  };
  
  const priceChange = ((token.price / token.basePrice) - 1);
  const isPositive = priceChange >= 0;
  
  return (
    <PanelContainer to={`/properties/${property.slug}`}>
      <PropertyImage 
        src={property.imageUrl} 
        alt={property.name} 
      />
      <ImageOverlay>
        <PropertyInfo>
          <PropertyName>{property.name}</PropertyName>
          <PropertyLocation>
            {property.location}
            <PropertyPrice>
              {formatPrice(token.price)}
              <PriceChangeIndicator isPositive={isPositive}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d={isPositive ? "M7 14l5-5 5 5H7z" : "M7 10l5 5 5-5H7z"} />
                </svg>
                {Math.abs(priceChange * 100).toFixed(2)}%
              </PriceChangeIndicator>
            </PropertyPrice>
          </PropertyLocation>
          <PropertyFeatures>
            <FeatureItem>
              <PropertyIcons.IconWrapper>
                <PropertyIcons.BedroomIcon />
              </PropertyIcons.IconWrapper>
              {property.bedrooms} Beds
            </FeatureItem>
            <FeatureItem>
              <PropertyIcons.IconWrapper>
                <PropertyIcons.BathroomIcon />
              </PropertyIcons.IconWrapper>
              {property.bathrooms} Baths
            </FeatureItem>
            <FeatureItem>
              <PropertyIcons.IconWrapper>
                <PropertyIcons.CarIcon />
              </PropertyIcons.IconWrapper>
              {property.carSpots} Cars
            </FeatureItem>
            <FeatureItem>
              {property.propertyType}
            </FeatureItem>
          </PropertyFeatures>
        </PropertyInfo>
        
        <ButtonContainer>
          <TradeButton as={Link} to={`/properties/${property.slug}#trade`} data-discover="true">
            Trade
          </TradeButton>
          <OfferButton as={Link} to={`/properties/${property.slug}`} data-discover="true">
            Make Offer
          </OfferButton>
        </ButtonContainer>
      </ImageOverlay>
    </PanelContainer>
  );
};

export default FeaturedPropertyPanel;
