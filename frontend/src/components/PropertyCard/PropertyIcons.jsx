import React from 'react';
import styled from 'styled-components';

export const BedroomIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM7.5 9a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z" />
    <path d="M21 16.5v-1.25c0-2.9-2.35-5.25-5.25-5.25h-7.5C5.35 10 3 12.35 3 15.25v1.25h18z" />
  </svg>
);

export const BathroomIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 10H3V8h18v2zm-7-3V3h-4v4H7V3a2 2 0 012-2h6a2 2 0 012 2v4h-3zm7 5v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6h18zm-5 4a1 1 0 10-2 0 1 1 0 002 0z" />
  </svg>
);

export const CarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 20h-14v-3h14v3zm0-5h-14l-1-9 3-4h10l3 4-1 9zm-12-2h2v-3h-2v3zm8 0h2v-3h-2v3z" />
  </svg>
);

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 4px;
  color: white;
`;

export default { BedroomIcon, BathroomIcon, CarIcon, IconWrapper };
