import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const MarginFormContainer = styled.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  height: fit-content;
  max-height: max-content;
  overflow: visible;
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 1.25rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`;

const InputGroup = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  padding-right: ${props => props.hasAddon ? '4rem' : '1rem'};
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  color: var(--color-text);
  font-size: 1rem;
  transition: border-color var(--transition-speed) ease;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
  
  &::placeholder {
    color: var(--color-text-secondary);
  }
`;

const InputAddon = styled.span`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-secondary);
`;

const RangeSlider = styled.input`
  width: 100%;
  margin: 1rem 0;
  -webkit-appearance: none;
  background: var(--color-border);
  height: 4px;
  border-radius: 2px;
  outline: none;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--color-accent);
    cursor: pointer;
  }
  
  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--color-accent);
    cursor: pointer;
    border: none;
  }
`;

const LeverageContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const LeverageOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const LeverageOption = styled.button`
  padding: 0.5rem 0.75rem;
  background-color: ${props => props.active ? 'var(--color-accent)' : 'transparent'};
  color: ${props => props.active ? 'var(--color-background)' : 'var(--color-text-secondary)'};
  border: 1px solid ${props => props.active ? 'var(--color-accent)' : 'var(--color-border)'};
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--color-accent)' : 'rgba(255, 255, 255, 0.05)'};
  }
`;

const OrderSummary = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SummaryLabel = styled.span`
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`;

const SummaryValue = styled.span`
  color: var(--color-text);
  font-weight: 500;
`;

const TotalRow = styled(SummaryRow)`
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
  font-weight: 600;
`;

const TotalLabel = styled(SummaryLabel)`
  font-weight: 600;
`;

const TotalValue = styled(SummaryValue)`
  font-weight: 600;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin-top: 1.5rem;
  background-color: var(--color-accent);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  font-weight: 600;
  cursor: pointer;
  transition: background-color var(--transition-speed) ease;
  
  &:hover {
    background-color: var(--color-accent-hover);
  }
  
  &:disabled {
    background-color: var(--color-border);
    cursor: not-allowed;
  }
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const ActionButton = styled.button`
  flex: 1;
  padding: 0.75rem;
  background-color: var(--color-background);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-speed) ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

const WalletInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const WalletLabel = styled.span`
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`;

const WalletValue = styled.span`
  color: var(--color-text);
  font-weight: 500;
`;

const MarginTradeForm = ({ token, onOrderSubmit }) => {
  const [price, setPrice] = useState('');
  const [collateral, setCollateral] = useState('');
  const [leverage, setLeverage] = useState(2);
  const [positionSize, setPositionSize] = useState('0.00');
  const [liquidationPrice, setLiquidationPrice] = useState('0.00');
  const [interestRate, setInterestRate] = useState(0.06); // 6% for 2x leverage
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Mock margin account data - replace with actual data from your store
  const [marginAccount, setMarginAccount] = useState({
    availableCollateral: 5000,
    borrowedFunds: 0,
    marginLevel: 100
  });
  
  // Update position size when collateral or leverage changes
  useEffect(() => {
    if (price && collateral && leverage) {
      const priceValue = parseFloat(price.replace(/,/g, ''));
      const collateralValue = parseFloat(collateral);
      const positionValue = collateralValue * leverage;
      const calculatedPositionSize = priceValue > 0 ? (positionValue / priceValue).toFixed(6) : '0.00';
      setPositionSize(calculatedPositionSize);
      
      // Calculate liquidation price (simplified formula)
      // This is a basic calculation - in production you'd want a more sophisticated model
      const maintenanceMargin = 0.05; // 5% maintenance margin
      const liquidationPriceValue = priceValue * (1 - ((1 - maintenanceMargin) * leverage) / (leverage - 1));
      setLiquidationPrice(liquidationPriceValue.toFixed(2));
    } else {
      setPositionSize('0.00');
      setLiquidationPrice('0.00');
    }
  }, [price, collateral, leverage]);
  
  // Set initial price when token changes
  useEffect(() => {
    if (token && token.currentPrice) {
      setPrice(token.currentPrice);
    }
  }, [token]);
  
  const handlePriceChange = (e) => {
    const value = e.target.value;
    // Allow numbers, decimal point, and commas for price input
    if (value === '' || /^[\d,]*\.?\d*$/.test(value)) {
      setPrice(value);
    }
  };
  
  const handleCollateralChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setCollateral(value);
      
      // Ensure collateral doesn't exceed available amount
      if (value !== '' && parseFloat(value) > marginAccount.availableCollateral) {
        setCollateral(marginAccount.availableCollateral.toString());
      }
    }
  };
  
  const handleLeverageChange = (selectedLeverage) => {
    setLeverage(selectedLeverage);
    
    // Update interest rate based on leverage
    // Base rate 5% + 1% per leverage level
    setInterestRate(0.05 + ((selectedLeverage - 1) * 0.01));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!price || !collateral || parseFloat(collateral) <= 0) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const orderData = {
        type: 'margin',
        tokenId: token.id,
        price: parseFloat(price.replace(/,/g, '')),
        collateral: parseFloat(collateral),
        leverage: leverage,
        positionSize: parseFloat(positionSize),
        liquidationPrice: parseFloat(liquidationPrice)
      };
      
      // In a real app, you would call the API
      // const response = await marginService.openPosition(orderData);
      
      // For demo purposes, we'll just simulate a successful order
      setTimeout(() => {
        if (onOrderSubmit) {
          onOrderSubmit({
            ...orderData,
            id: `margin-${Date.now()}`,
            status: 'open',
            createdAt: new Date().toISOString()
          });
        }
        
        // Reset form
        setCollateral('');
        setIsSubmitting(false);
        
        // Update mock margin account (in a real app, this would come from the API)
        setMarginAccount(prev => ({
          ...prev,
          availableCollateral: prev.availableCollateral - parseFloat(collateral),
          borrowedFunds: prev.borrowedFunds + (parseFloat(collateral) * (leverage - 1)),
          marginLevel: (prev.availableCollateral - parseFloat(collateral)) / 
            (prev.borrowedFunds + (parseFloat(collateral) * (leverage - 1))) * 100
        }));
      }, 1000);
    } catch (error) {
      console.error('Error opening margin position:', error);
      setIsSubmitting(false);
    }
  };
  
  const handleTransferClick = () => {
    // In a real app, this would open a modal or navigate to transfer page
    console.log('Transfer clicked');
    alert('Transfer functionality would open here');
  };
  
  const handleBorrowRepayClick = () => {
    // In a real app, this would open a modal or navigate to borrow/repay page
    console.log('Borrow/Repay clicked');
    alert('Borrow/Repay functionality would open here');
  };
  
  return (
    <MarginFormContainer style={{ height: 'fit-content', maxHeight: 'max-content' }}>
      <WalletInfo>
        <WalletLabel>Available Collateral:</WalletLabel>
        <WalletValue>${marginAccount.availableCollateral.toFixed(2)}</WalletValue>
      </WalletInfo>
      
      <ActionButtonsContainer>
        <ActionButton type="button" onClick={handleTransferClick}>
          Transfer
        </ActionButton>
        <ActionButton type="button" onClick={handleBorrowRepayClick}>
          Borrow / Repay
        </ActionButton>
      </ActionButtonsContainer>
      
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Price per share</Label>
          <InputGroup>
            <Input 
              type="text" 
              value={price}
              onChange={handlePriceChange}
              placeholder="0.00"
              hasAddon
              required
            />
            <InputAddon>$</InputAddon>
          </InputGroup>
        </FormGroup>
        
        <LeverageContainer>
          <Label>Leverage</Label>
          <LeverageOptions>
            {[1, 2, 3, 5, 10].map(lev => (
              <LeverageOption 
                key={lev}
                active={leverage === lev}
                onClick={() => handleLeverageChange(lev)}
                type="button"
              >
                {lev}x
              </LeverageOption>
            ))}
          </LeverageOptions>
        </LeverageContainer>
        
        <FormGroup>
          <Label>Collateral</Label>
          <InputGroup>
            <Input 
              type="text" 
              value={collateral}
              onChange={handleCollateralChange}
              placeholder="0.00"
              hasAddon
              required
            />
            <InputAddon>$</InputAddon>
          </InputGroup>
        </FormGroup>
        
        <OrderSummary>
          <SummaryRow>
            <SummaryLabel>Position Size</SummaryLabel>
            <SummaryValue>{positionSize} {token?.symbol || 'shares'}</SummaryValue>
          </SummaryRow>
          <SummaryRow>
            <SummaryLabel>Liquidation Price</SummaryLabel>
            <SummaryValue>${liquidationPrice}</SummaryValue>
          </SummaryRow>
          <SummaryRow>
            <SummaryLabel>Interest Rate</SummaryLabel>
            <SummaryValue>{(interestRate * 100).toFixed(2)}% per year</SummaryValue>
          </SummaryRow>
          <TotalRow>
            <TotalLabel>Total Position Value</TotalLabel>
            <TotalValue>${collateral ? (parseFloat(collateral) * leverage).toFixed(2) : '0.00'}</TotalValue>
          </TotalRow>
        </OrderSummary>
        
        <SubmitButton 
          disabled={!price || !collateral || parseFloat(collateral) <= 0 || isSubmitting}
        >
          {isSubmitting ? 'Processing...' : `Open ${leverage}x Position`}
        </SubmitButton>
      </form>
    </MarginFormContainer>
  );
};

export default MarginTradeForm;
