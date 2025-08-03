import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BedroomIcon, BathroomIcon, CarIcon } from '../PropertyCard/PropertyIcons';

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
  height: 200px;
  overflow: hidden;
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
  right: 1rem;
  background-color: var(--color-accent);
  color: var(--color-background);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.75rem;
`;

const CardContent = styled.div`
  padding: 1.25rem;
`;

const PropertyName = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  color: var(--color-text);
`;

const PropertyLocation = styled.p`
  margin: 0 0 1rem 0;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
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

const PresaleButton = styled(ActionButton)`
  background-color: var(--color-accent, #3861fb);
  color: white;
`;

const ViewingsButton = styled(ActionButton)`
  background-color: transparent;
  border: 1px solid var(--color-accent, #3861fb);
  color: var(--color-accent, #3861fb);
  white-space: nowrap;
`;

const IPOPropertyCard = ({ property, badgeText = "IPO" }) => {
  // Format currency amounts
  const formatCurrency = (amount) => {
    if (amount >= 1000000) {
      return `${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `${(amount / 1000).toFixed(0)}K`;
    } else {
      return `${amount.toFixed(0)}`;
    }
  };
  
  return (
    <Card>
      <Link to={`/ipo/${property.id}`}>
        <ImageContainer>
          <PropertyImage src={property.imageUrl} alt={property.name} />
          <StatusBadge>{badgeText}</StatusBadge>
        </ImageContainer>
        
        <CardContent>
          <div>
            <PropertyName>{property.name}</PropertyName>
            <PropertyLocation>{property.location}</PropertyLocation>
          </div>
          <ButtonContainer>
            <PresaleButton>Pre-sale</PresaleButton>
            <ViewingsButton>Viewings</ViewingsButton>
          </ButtonContainer>
        </CardContent>
        
        <PropertyStats>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <StatItem>
              <BedroomIcon />
              <StatValue style={{ marginLeft: '4px' }}>{property.bedrooms || 4}</StatValue>
              <StatLabel> • </StatLabel>
            </StatItem>
            <StatItem>
              <BathroomIcon />
              <StatValue style={{ marginLeft: '4px' }}>{property.bathrooms || 3}</StatValue>
              <StatLabel> • </StatLabel>
            </StatItem>
            <StatItem>
              <CarIcon />
              <StatValue style={{ marginLeft: '4px' }}>{property.carSpots || 2}</StatValue>
              <StatLabel> • </StatLabel>
            </StatItem>
            <StatItem marginRight="0">
              <StatValue>{property.propertyType || 'House'}</StatValue>
            </StatItem>
          </div>
          
          <div>
            <StatItem align="flex-end" marginRight="0">
              <StatLabel>Value </StatLabel>
              <StatValue style={{ fontWeight: '700' }}>${formatCurrency(property.targetRaise)}</StatValue>
            </StatItem>
          </div>
        </PropertyStats>
      </Link>
    </Card>
  );
};

export default IPOPropertyCard;
