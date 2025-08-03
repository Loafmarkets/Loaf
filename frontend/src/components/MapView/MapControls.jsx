import React from 'react';
import styled from 'styled-components';

const MapControls = ({ onClose }) => {
  return (
    <ControlsContainer>
      <ControlButton onClick={onClose}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Exit Map View
      </ControlButton>
    </ControlsContainer>
  );
};

const ControlsContainer = styled.div`
  position: absolute;
  top: 48px;
  left: 16px;
  z-index: 10;
  display: flex;
  gap: 8px;
`;

const ControlButton = styled.button`
  background-color: rgba(26, 26, 29, 0.8);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  backdrop-filter: blur(4px);
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(26, 26, 29, 1);
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

export default MapControls;
