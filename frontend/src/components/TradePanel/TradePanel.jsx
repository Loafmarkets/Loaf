import React, { useState } from 'react';
import styled from 'styled-components';
import TradeForm from '../TradeForm/TradeForm';
import MarginTradeForm from '../MarginTradeForm/MarginTradeForm';
import { format } from 'date-fns';

const TradePanelContainer = styled.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 2rem;
  height: fit-content;
  max-height: fit-content;
  display: flex;
  flex-direction: column;
`;

const TabContainer = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`;

const Tab = styled.button`
  flex: 1;
  padding: 0.75rem;
  background-color: ${props => props.active ? 'var(--color-accent)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--color-text)'};
  border: 1px solid ${props => props.active ? 'var(--color-accent)' : 'var(--color-border)'};
  border-radius: ${props => {
    if (props.position === 'left') return 'var(--border-radius) 0 0 var(--border-radius)';
    if (props.position === 'right') return '0 var(--border-radius) var(--border-radius) 0';
    return '0';
  }};
  font-weight: 600;
  transition: all var(--transition-speed) ease;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--color-accent)' : 'rgba(255, 255, 255, 0.05)'};
  }
`;



const TradeTime = styled.div`
  color: var(--color-text-secondary);
  font-size: 0.75rem;
  text-align: right;
`;



const OpenPositionsContainer = styled.div`
  margin-top: 2rem;
  border-top: 1px solid var(--color-border);
  padding-top: 1.5rem;
`;

const OpenPositionsTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--color-text);
`;

const PositionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PositionCard = styled.div`
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: 1rem;
`;

const PositionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`;

const PositionTitle = styled.div`
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LeverageBadge = styled.span`
  background-color: var(--color-accent);
  color: white;
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
`;

const PositionDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailLabel = styled.span`
  color: var(--color-text-secondary);
  font-size: 0.75rem;
`;

const DetailValue = styled.span`
  color: var(--color-text);
  font-weight: 500;
`;

const PositionActions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const PositionButton = styled.button`
  flex: 1;
  padding: 0.5rem;
  font-size: 0.875rem;
  background-color: ${props => props.variant === 'primary' ? 'var(--color-accent)' : 'transparent'};
  color: ${props => props.variant === 'primary' ? 'white' : 'var(--color-text)'};
  border: 1px solid ${props => props.variant === 'primary' ? 'var(--color-accent)' : 'var(--color-border)'};
  border-radius: var(--border-radius);
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.variant === 'primary' ? 'var(--color-accent-hover)' : 'rgba(255, 255, 255, 0.05)'};
  }
`;

const TradePanel = ({ token, onOrderSubmit }) => {
  const [activeMode, setActiveMode] = useState('standard'); // 'standard' or 'margin'
  

  
  // Mock open margin positions data
  const openMarginPositions = [
    {
      id: 201,
      tokenId: token?.id || 'property-1',
      tokenName: token?.name || 'Property ABC',
      tokenSymbol: token?.symbol || 'ABC',
      leverage: 2,
      entryPrice: '102,200',
      currentPrice: '102,520',
      positionSize: '1.25',
      collateral: '6,250',
      pnl: '+320',
      pnlPercent: '+2.56%',
      liquidationPrice: '98,500',
      timestamp: new Date(2025, 5, 18, 11, 30, 45)
    },
    {
      id: 202,
      tokenId: 'property-2',
      tokenName: 'Property XYZ',
      tokenSymbol: 'XYZ',
      leverage: 5,
      entryPrice: '85,400',
      currentPrice: '87,200',
      positionSize: '2.50',
      collateral: '4,350',
      pnl: '+1,800',
      pnlPercent: '+10.53%',
      liquidationPrice: '78,900',
      timestamp: new Date(2025, 5, 15, 9, 45, 20)
    }
  ];
  
  const handleModeChange = (mode) => {
    setActiveMode(mode);
  };
  
  const handleOrderSubmit = (order) => {
    if (onOrderSubmit) {
      onOrderSubmit({
        ...order,
        mode: activeMode
      });
    }
  };
  
  return (
    <TradePanelContainer>
      <TabContainer>
        <Tab 
          position="left"
          active={activeMode === 'standard'} 
          onClick={() => handleModeChange('standard')}
        >
          Standard
        </Tab>
        <Tab 
          position="right"
          active={activeMode === 'margin'} 
          onClick={() => handleModeChange('margin')}
        >
          Margin
        </Tab>
      </TabContainer>
      
      {activeMode === 'standard' ? (
        <TradeForm token={token} onOrderSubmit={handleOrderSubmit} />
      ) : (
        <>
          <MarginTradeForm token={token} onOrderSubmit={handleOrderSubmit} />
          
          <OpenPositionsContainer>
            <OpenPositionsTitle>Open Margin Positions</OpenPositionsTitle>
            <PositionsList>
              {openMarginPositions.length > 0 ? (
                openMarginPositions.map(position => (
                  <PositionCard key={position.id}>
                    <PositionHeader>
                      <PositionTitle>
                        {position.tokenSymbol}
                        <LeverageBadge>{position.leverage}x</LeverageBadge>
                      </PositionTitle>
                      <TradeTime>{format(position.timestamp, 'MM/dd/yyyy HH:mm')}</TradeTime>
                    </PositionHeader>
                    
                    <PositionDetails>
                      <DetailItem>
                        <DetailLabel>Entry Price</DetailLabel>
                        <DetailValue>${position.entryPrice}</DetailValue>
                      </DetailItem>
                      <DetailItem>
                        <DetailLabel>Current Price</DetailLabel>
                        <DetailValue>${position.currentPrice}</DetailValue>
                      </DetailItem>
                      <DetailItem>
                        <DetailLabel>Position Size</DetailLabel>
                        <DetailValue>{position.positionSize} shares</DetailValue>
                      </DetailItem>
                      <DetailItem>
                        <DetailLabel>Collateral</DetailLabel>
                        <DetailValue>${position.collateral}</DetailValue>
                      </DetailItem>
                      <DetailItem>
                        <DetailLabel>PnL</DetailLabel>
                        <DetailValue style={{ color: position.pnl.startsWith('+') ? '#0ecb81' : '#f6465d' }}>
                          ${position.pnl} ({position.pnlPercent})
                        </DetailValue>
                      </DetailItem>
                      <DetailItem>
                        <DetailLabel>Liquidation Price</DetailLabel>
                        <DetailValue>${position.liquidationPrice}</DetailValue>
                      </DetailItem>
                    </PositionDetails>
                    
                    <PositionActions>
                      <PositionButton variant="primary">Close Position</PositionButton>
                      <PositionButton>Add Collateral</PositionButton>
                    </PositionActions>
                  </PositionCard>
                ))
              ) : (
                <div>No open margin positions</div>
              )}
            </PositionsList>
          </OpenPositionsContainer>
        </>
      )}
      

    </TradePanelContainer>
  );
};

export default TradePanel;
