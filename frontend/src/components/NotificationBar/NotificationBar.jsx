import React from 'react';
import styled from 'styled-components';

// Export this constant so other components can use it for positioning
export const NOTIFICATION_BAR_HEIGHT = '40px';

const NotificationBarContainer = styled.div`
  background-color: #F0B90B; /* Binance yellow */
  color: #0B0E11; /* Dark text for contrast */
  min-height: ${NOTIFICATION_BAR_HEIGHT};
  padding: 8px 12px;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 500;
  width: 100%;
  z-index: 1100; /* Higher than header's z-index */
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #D4A309;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  
  @media (max-width: 768px) {
    padding: 6px 8px;
    font-size: 0.75rem;
  }
  
  a {
    color: var(--color-accent);
    margin-left: 5px;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #B7BDC6;
  margin-left: 16px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  
  &:hover {
    color: white;
  }
`;

const NotificationBar = () => {
  return (
    <NotificationBarContainer>
      <span><strong>IMPORTANT:</strong> This is an MVP mockup — all properties and associated data are fictitious</span>
    </NotificationBarContainer>
  );
};

export default NotificationBar;
