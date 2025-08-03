import React from 'react';
import IPOPropertyCard from './IPOPropertyCard';
import styled from 'styled-components';

// Extend the base IPOPropertyCard for presale properties
const PresaleIPOCard = ({ property }) => {
  return (
    <IPOPropertyCard 
      property={property} 
      badgeText="Public Sale Coming Soon" 
    />
  );
};

export default PresaleIPOCard;
