import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import StockPriceBar from './StockPriceBar';
import { BedroomIcon, BathroomIcon, CarIcon } from './PropertyIcons';

// Utility function to create slugs from property names
const createSlugFromName = (name) => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

const Card = styled.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  overflow: hidden;
  transition: transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 260px;
  overflow: hidden;
`;

const PropertyImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform var(--transition-speed) ease;
  
  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const TokenBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: var(--color-accent);
  color: var(--color-background);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.75rem;
`;

const PriceChange = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: ${props => props.isPositive ? 'var(--color-positive)' : 'var(--color-negative)'};
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  
  svg {
    width: 16px;
    height: 16px;
    margin-right: 2px;
  }
`;

const CardContent = styled.div`
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
`;

const PropertyName = styled.h3`
  margin: 0 0 0.25rem 0;
  font-size: 1.1rem;
  color: var(--color-text);
  font-weight: 600;
`;

const PropertyLocation = styled.p`
  margin: 0 0 0.5rem 0;
  color: var(--color-text-secondary);
  font-size: 0.8rem;
`;

const PropertyStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  padding: 12px 16px;
  background-color: #111;
  color: white;
  border-top: none;
  margin-top: 0;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${props => props.marginRight || '12px'};
  
  svg {
    width: 18px;
    height: 18px;
    margin-right: 2px;
  }
`;

const StatLabel = styled.span`
  color: #999;
  font-size: 0.85rem;
  margin-right: 4px;
`;

const StatValue = styled.span`
  color: white;
  font-weight: 600;
  font-size: 0.85rem;
`;

const TokenPrice = styled(StatValue)`
  color: var(--color-accent);
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: center;
  min-width: 100px;
`;

const ActionButton = styled.button`
  padding: 6px 14px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
  width: 100%;
  
  &:hover {
    transform: translateY(-1px);
    opacity: 0.9;
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const TradeButton = styled(ActionButton)`
  background-color: var(--color-accent, #3861fb);
  color: black;
`;

const OfferButton = styled(ActionButton)`
  background-color: transparent;
  border: 1px solid var(--color-accent, #3861fb);
  color: var(--color-accent, #3861fb);
  white-space: nowrap;
`;

const PriceInfoBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: var(--color-card);
  border-top: 1px solid var(--color-border);
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
`;

const PriceInfoLeft = styled.div`
  display: flex;
  align-items: center;
`;

const PriceInfoRight = styled.div`
  display: flex;
  align-items: center;
`;

const PriceAmount = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
`;

const PriceMovement = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${props => props.isPositive ? 'var(--color-positive)' : 'var(--color-negative)'};
  
  svg {
    width: 16px;
    height: 16px;
    margin-right: 2px;
  }
`;

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();
  
  // Function to handle make offer button clicks
  const handleMakeOfferClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    // Create a slug from the property name
    const propertySlug = createSlugFromName(property.name || "28 Wentworth Road");
    // Navigate to the property detail page with offers tab
    navigate(`/properties/${propertySlug}#offers`);
  };
  // Calculate if price change is positive
  const isPriceChangePositive = parseFloat(property.priceChangePercent) >= 0;
  
  // Extract just the suburb name from the location
  let suburb;
  if (property.location.includes(',')) {
    // Format like "Vaucluse, Sydney" or "123 Example St, Suburb, State"
    const locationParts = property.location.split(',');
    
    // If the first part is a street address (starts with a number), use the second part
    if (/^\d+\s/.test(locationParts[0].trim()) && locationParts.length > 1) {
      suburb = locationParts[1].trim();
    } else {
      // Otherwise use the first part which should be the suburb name
      suburb = locationParts[0].trim();
    }
  } else {
    // If no comma, just use the whole location
    suburb = property.location;
  }
  
  // Remove "Sydney" from the suburb name if present
  suburb = suburb.replace(', Sydney', '').replace(' Sydney', '').replace('Sydney', '').trim();
  
  return (
    <Card>
      <Link to={`/properties/${createSlugFromName(property.name || "28 Wentworth Road")}`}>
        <ImageContainer>
          <PropertyImage src={property.imageUrl} alt={property.name} />
          <TokenBadge>TRADING</TokenBadge>
        </ImageContainer>
        
        <StockPriceBar 
          price={property.tokenPrice} 
          priceChangePercent={property.priceChangePercent} 
          propertyName={property.shortName || property.name.split(' ')[0]}
          suburb={suburb}
        />
        
        <CardContent>
          <div>
            <PropertyName>{property.name}</PropertyName>
            <PropertyLocation>{property.location}</PropertyLocation>
          </div>
          <ButtonContainer>
            <Link to={`/properties/${createSlugFromName(property.name || "28 Wentworth Road")}#trade`}>
              <TradeButton>Trade</TradeButton>
            </Link>
            <OfferButton onClick={handleMakeOfferClick}>Make Offer</OfferButton>
          </ButtonContainer>
        </CardContent>
        
        <PropertyStats>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <StatItem>
              <BedroomIcon />
              <StatValue style={{ marginLeft: '4px' }}>{property.bedrooms}</StatValue>
              <StatLabel> • </StatLabel>
            </StatItem>
            <StatItem>
              <BathroomIcon />
              <StatValue style={{ marginLeft: '4px' }}>{property.bathrooms}</StatValue>
              <StatLabel> • </StatLabel>
            </StatItem>
            <StatItem>
              <CarIcon />
              <StatValue style={{ marginLeft: '4px' }}>{property.carSpots}</StatValue>
              <StatLabel> • </StatLabel>
            </StatItem>
            <StatItem marginRight="0">
              <StatValue>{property.propertyType}</StatValue>
            </StatItem>
          </div>
          
          <div>
            <StatItem align="flex-end" marginRight="0">
              <StatValue style={{ fontWeight: '700', color: 'var(--color-accent)' }}>${property.marketCap}</StatValue>
            </StatItem>
          </div>
        </PropertyStats>
      </Link>
    </Card>
  );
};

export default PropertyCard;
