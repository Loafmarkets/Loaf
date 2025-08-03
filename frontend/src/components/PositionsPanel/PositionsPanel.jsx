import React from 'react';
import styled from 'styled-components';
import PositionsTable from '../PositionsTable';

const PositionsPanelContainer = styled.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

const PanelHeader = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.75rem;
    color: var(--color-accent);
  }
`;

const PositionsPanel = () => {
  return (
    <PositionsPanelContainer>
      <PanelHeader>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
        </svg>
        Open Margin Positions
      </PanelHeader>
      <PositionsTable />
    </PositionsPanelContainer>
  );
};

export default PositionsPanel;
