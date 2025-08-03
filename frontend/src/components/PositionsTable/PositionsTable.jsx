import React, { useState } from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  margin-top: 1.5rem;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 0.75rem;
  color: var(--color-text-secondary);
  font-weight: 600;
  font-size: 0.875rem;
  border-bottom: 1px solid var(--color-border);
`;

const TableRow = styled.tr`
  &:hover {
    background-color: rgba(255, 255, 255, 0.03);
  }
`;

const TableCell = styled.td`
  padding: 0.75rem;
  border-bottom: 1px solid var(--color-border);
  font-size: 0.875rem;
`;

const TokenName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const TokenImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const ProfitLoss = styled.span`
  color: ${props => props.value >= 0 ? 'var(--color-positive)' : 'var(--color-negative)'};
  font-weight: 500;
`;

const LiquidationWarning = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${props => props.risk === 'high' ? 'var(--color-negative)' : 
    props.risk === 'medium' ? 'orange' : 'var(--color-text-secondary)'};
  font-size: 0.75rem;
  
  svg {
    width: 14px;
    height: 14px;
  }
`;

const CloseButton = styled.button`
  padding: 0.5rem 0.75rem;
  background-color: var(--color-background);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  font-size: 0.75rem;
  cursor: pointer;
  transition: all var(--transition-speed) ease;
  
  &:hover {
    background-color: var(--color-negative);
    color: white;
    border-color: var(--color-negative);
  }
`;

const EmptyState = styled.div`
  padding: 2rem;
  text-align: center;
  color: var(--color-text-secondary);
`;

const ConfirmationModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  width: 90%;
  max-width: 400px;
`;

const ModalHeader = styled.h3`
  margin-top: 0;
  margin-bottom: 1rem;
`;

const ModalText = styled.p`
  margin-bottom: 1.5rem;
  color: var(--color-text-secondary);
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const CancelButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  cursor: pointer;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

const ConfirmButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: var(--color-negative);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  
  &:hover {
    background-color: #ff3b3b;
  }
`;

const PositionsTable = () => {
  const [positions, setPositions] = useState([
    {
      id: 'pos-1',
      tokenId: 'token-123',
      tokenName: 'Vaucluse Waterfront',
      tokenSymbol: 'VAUC',
      tokenImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80',
      entryPrice: 102520,
      currentPrice: 105000,
      positionSize: 0.5,
      leverage: 3,
      collateral: 17500,
      liquidationPrice: 95000,
      openDate: '2025-06-15T10:30:00Z',
      interestRate: 0.07,
      accruedInterest: 12.25
    },
    {
      id: 'pos-2',
      tokenId: 'token-456',
      tokenName: 'Mosman Harbour',
      tokenSymbol: 'MOS',
      tokenImage: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80',
      entryPrice: 75000,
      currentPrice: 72500,
      positionSize: 1.2,
      leverage: 5,
      collateral: 18000,
      liquidationPrice: 67500,
      openDate: '2025-06-10T14:15:00Z',
      interestRate: 0.09,
      accruedInterest: 27.50
    },
    {
      id: 'pos-3',
      tokenId: 'token-789',
      tokenName: 'Point Piper Estate',
      tokenSymbol: 'POINT',
      tokenImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80',
      entryPrice: 45000,
      currentPrice: 48500,
      positionSize: 2.5,
      leverage: 2,
      collateral: 56250,
      liquidationPrice: 38000,
      openDate: '2025-06-18T09:45:00Z',
      interestRate: 0.06,
      accruedInterest: 8.75
    }
  ]);
  
  const [confirmingPosition, setConfirmingPosition] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  
  const calculatePnL = (position) => {
    const positionValue = position.positionSize * position.currentPrice;
    const entryValue = position.positionSize * position.entryPrice;
    return positionValue - entryValue;
  };
  
  const calculatePnLPercentage = (position) => {
    const pnl = calculatePnL(position);
    const entryValue = position.positionSize * position.entryPrice;
    return (pnl / entryValue) * 100;
  };
  
  const getLiquidationRisk = (position) => {
    const buffer = position.currentPrice - position.liquidationPrice;
    const bufferPercentage = (buffer / position.currentPrice) * 100;
    
    if (bufferPercentage < 5) return 'high';
    if (bufferPercentage < 15) return 'medium';
    return 'low';
  };
  
  const handleClosePosition = (position) => {
    setConfirmingPosition(position);
  };
  
  const confirmClosePosition = async () => {
    if (!confirmingPosition) return;
    
    setIsClosing(true);
    
    try {
      // In a real app, this would call the API
      // await marginService.closePosition(confirmingPosition.id, confirmingPosition.currentPrice);
      
      // For demo purposes, we'll just remove it from the state
      setTimeout(() => {
        setPositions(positions.filter(pos => pos.id !== confirmingPosition.id));
        setConfirmingPosition(null);
        setIsClosing(false);
      }, 1000);
    } catch (error) {
      console.error('Error closing position:', error);
      setIsClosing(false);
    }
  };
  
  const cancelClosePosition = () => {
    setConfirmingPosition(null);
  };
  
  return (
    <>
      <TableContainer>
        {positions.length > 0 ? (
          <Table>
            <thead>
              <tr>
                <TableHeader>Token</TableHeader>
                <TableHeader>Size</TableHeader>
                <TableHeader>Leverage</TableHeader>
                <TableHeader>Entry Price</TableHeader>
                <TableHeader>Current Price</TableHeader>
                <TableHeader>P&L</TableHeader>
                <TableHeader>Liquidation</TableHeader>
                <TableHeader>Action</TableHeader>
              </tr>
            </thead>
            <tbody>
              {positions.map(position => {
                const pnl = calculatePnL(position);
                const pnlPercentage = calculatePnLPercentage(position);
                const liquidationRisk = getLiquidationRisk(position);
                
                return (
                  <TableRow key={position.id}>
                    <TableCell>
                      <TokenName>
                        <TokenImage src={position.tokenImage} alt={position.tokenSymbol} />
                        <span>{position.tokenSymbol}</span>
                      </TokenName>
                    </TableCell>
                    <TableCell>{position.positionSize} shares</TableCell>
                    <TableCell>{position.leverage}x</TableCell>
                    <TableCell>${position.entryPrice.toLocaleString()}</TableCell>
                    <TableCell>${position.currentPrice.toLocaleString()}</TableCell>
                    <TableCell>
                      <ProfitLoss value={pnl}>
                        {pnl >= 0 ? '+' : ''}{pnl.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} ({pnlPercentage >= 0 ? '+' : ''}{pnlPercentage.toFixed(2)}%)
                      </ProfitLoss>
                    </TableCell>
                    <TableCell>
                      <div>${position.liquidationPrice.toLocaleString()}</div>
                      <LiquidationWarning risk={liquidationRisk}>
                        {liquidationRisk === 'high' && (
                          <>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                            </svg>
                            High risk
                          </>
                        )}
                        {liquidationRisk === 'medium' && (
                          <>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                            </svg>
                            Medium risk
                          </>
                        )}
                      </LiquidationWarning>
                    </TableCell>
                    <TableCell>
                      <CloseButton onClick={() => handleClosePosition(position)}>
                        Close Position
                      </CloseButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </tbody>
          </Table>
        ) : (
          <EmptyState>
            No open positions. Start trading with margin to see your positions here.
          </EmptyState>
        )}
      </TableContainer>
      
      {confirmingPosition && (
        <ConfirmationModal>
          <ModalContent>
            <ModalHeader>Close Position</ModalHeader>
            <ModalText>
              Are you sure you want to close your {confirmingPosition.leverage}x {confirmingPosition.tokenSymbol} position?
            </ModalText>
            <ModalText>
              <strong>Position Details:</strong><br />
              Size: {confirmingPosition.positionSize} shares<br />
              Entry Price: ${confirmingPosition.entryPrice.toLocaleString()}<br />
              Current Price: ${confirmingPosition.currentPrice.toLocaleString()}<br />
              P&L: <ProfitLoss value={calculatePnL(confirmingPosition)}>
                {calculatePnL(confirmingPosition) >= 0 ? '+' : ''}
                ${calculatePnL(confirmingPosition).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} 
                ({calculatePnLPercentage(confirmingPosition) >= 0 ? '+' : ''}
                {calculatePnLPercentage(confirmingPosition).toFixed(2)}%)
              </ProfitLoss>
            </ModalText>
            <ModalButtons>
              <CancelButton onClick={cancelClosePosition}>Cancel</CancelButton>
              <ConfirmButton onClick={confirmClosePosition} disabled={isClosing}>
                {isClosing ? 'Closing...' : 'Confirm Close'}
              </ConfirmButton>
            </ModalButtons>
          </ModalContent>
        </ConfirmationModal>
      )}
    </>
  );
};

export default PositionsTable;
