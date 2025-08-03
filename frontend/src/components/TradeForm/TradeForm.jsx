import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { orderService } from '../../services/api';

const TradeFormContainer = styled.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 0;
  height: fit-content;
  overflow: visible;
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
  background-color: ${props => props.active ? 
    (props.type === 'buy' ? 'var(--color-positive)' : 'var(--color-negative)') : 
    'transparent'};
  color: ${props => props.active ? 'white' : 'var(--color-text)'};
  border: 1px solid ${props => props.active ? 
    (props.type === 'buy' ? 'var(--color-positive)' : 'var(--color-negative)') : 
    'var(--color-border)'};
  border-radius: ${props => props.position === 'left' ? 
    'var(--border-radius) 0 0 var(--border-radius)' : 
    '0 var(--border-radius) var(--border-radius) 0'};
  font-weight: 600;
  transition: all var(--transition-speed) ease;
  
  &:hover {
    background-color: ${props => props.active ? 
      (props.type === 'buy' ? 'var(--color-positive)' : 'var(--color-negative)') : 
      'rgba(255, 255, 255, 0.05)'};
  }
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
    background: ${props => props.type === 'buy' ? 'var(--color-positive)' : 'var(--color-negative)'};
    cursor: pointer;
  }
  
  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${props => props.type === 'buy' ? 'var(--color-positive)' : 'var(--color-negative)'};
    cursor: pointer;
    border: none;
  }
`;

const PercentageButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const PercentButton = styled.button`
  padding: 0.25rem 0.5rem;
  background-color: ${props => props.active ? 'var(--color-accent)' : 'transparent'};
  color: ${props => props.active ? 'var(--color-background)' : 'var(--color-text-secondary)'};
  border: 1px solid ${props => props.active ? 'var(--color-accent)' : 'var(--color-border)'};
  border-radius: 4px;
  font-size: 0.75rem;
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
  background-color: ${props => props.type === 'buy' ? 'var(--color-positive)' : 'var(--color-negative)'};
  color: white;
  border: none;
  border-radius: var(--border-radius);
  font-size: 1rem;
  font-weight: 600;
  transition: opacity var(--transition-speed) ease;
  
  &:hover {
    opacity: 0.9;
  }
  
  &:disabled {
    background-color: var(--color-border);
    color: var(--color-text-secondary);
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

const WalletInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 0.75rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: var(--border-radius);
`;

const WalletLabel = styled.span`
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`;

const WalletValue = styled.span`
  color: var(--color-text);
  font-weight: 500;
`;

const TradeForm = ({ token, onOrderSubmit }) => {
  const [activeTab, setActiveTab] = useState('buy');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');
  const [total, setTotal] = useState('0.00');
  const [sliderValue, setSliderValue] = useState(0);
  const [activePercentage, setActivePercentage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Mock wallet data - replace with actual wallet data from your store
  const [wallet, setWallet] = useState({
    balance: 10000,
    tokens: {}
  });
  
  // Update total when price or amount changes
  useEffect(() => {
    if (price && amount) {
      // Parse the price with commas removed
      const priceValue = parseFloat(price.replace(/,/g, ''));
      const calculatedTotal = (priceValue * parseFloat(amount)).toFixed(2);
      setTotal(calculatedTotal);
    } else {
      setTotal('0.00');
    }
  }, [price, amount]);
  
  // Set initial price when token changes
  useEffect(() => {
    if (token && token.currentPrice) {
      // Keep the price as is, with commas if present
      setPrice(token.currentPrice);
    }
  }, [token]);
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setAmount('');
    setSliderValue(0);
    setActivePercentage(null);
  };
  
  const handlePriceChange = (e) => {
    const value = e.target.value;
    // Allow numbers, decimal point, and commas for price input
    if (value === '' || /^[\d,]*\.?\d*$/.test(value)) {
      setPrice(value);
    }
  };
  
  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setAmount(value);
      setActivePercentage(null);
      
      // Update slider value
      if (value === '') {
        setSliderValue(0);
      } else {
        const maxAmount = getMaxAmount();
        const percentage = (parseFloat(value) / maxAmount) * 100;
        setSliderValue(Math.min(percentage, 100));
      }
    }
  };
  
  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value);
    setSliderValue(value);
    setActivePercentage(null);
    
    // Update amount based on slider value
    const maxAmount = getMaxAmount();
    // Use more decimal places for high-value tokens
    const calculatedAmount = (maxAmount * (value / 100)).toFixed(6);
    setAmount(calculatedAmount);
  };
  
  const handlePercentageClick = (percentage) => {
    setActivePercentage(percentage);
    
    // Update amount and slider based on percentage
    const maxAmount = getMaxAmount();
    // Use more decimal places for high-value tokens
    const calculatedAmount = (maxAmount * (percentage / 100)).toFixed(6);
    setAmount(calculatedAmount);
    setSliderValue(percentage);
  };
  
  const getMaxAmount = () => {
    if (activeTab === 'buy') {
      // Parse the price with commas removed for calculation
      const priceValue = price ? parseFloat(price.replace(/,/g, '')) : 0;
      // Calculate how many tokens can be bought with available cash
      return priceValue > 0 ? wallet.balance / priceValue : 0;
    } else {
      // For selling, the max amount is the number of tokens owned
      return token && token.id in wallet.tokens ? wallet.tokens[token.id] : 0;
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!price || !amount || parseFloat(amount) <= 0) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const orderData = {
        type: activeTab,
        tokenId: token.id,
        price: parseFloat(price),
        amount: parseFloat(amount),
      };
      
      // In a real app, you would call the API
      // const response = await orderService.createOrder(orderData);
      
      // For demo purposes, we'll just simulate a successful order
      setTimeout(() => {
        if (onOrderSubmit) {
          onOrderSubmit({
            ...orderData,
            id: `order-${Date.now()}`,
            status: 'open',
            createdAt: new Date().toISOString(),
            total: parseFloat(total)
          });
        }
        
        // Reset form
        setAmount('');
        setSliderValue(0);
        setActivePercentage(null);
        setIsSubmitting(false);
        
        // Update mock wallet (in a real app, this would come from the API)
        if (activeTab === 'buy') {
          setWallet(prev => ({
            ...prev,
            balance: prev.balance - parseFloat(total),
            tokens: {
              ...prev.tokens,
              [token.id]: (prev.tokens[token.id] || 0) + parseFloat(amount)
            }
          }));
        } else {
          setWallet(prev => ({
            ...prev,
            balance: prev.balance + parseFloat(total),
            tokens: {
              ...prev.tokens,
              [token.id]: Math.max(0, (prev.tokens[token.id] || 0) - parseFloat(amount))
            }
          }));
        }
      }, 1000);
    } catch (error) {
      console.error('Error creating order:', error);
      setIsSubmitting(false);
    }
  };
  
  const getAvailableBalance = () => {
    if (activeTab === 'buy') {
      return `$${wallet.balance.toFixed(2)}`;
    } else {
      return token && token.id in wallet.tokens ? 
        `${wallet.tokens[token.id].toFixed(6)} ${token?.symbol || 'shares'}` : 
        `0 ${token?.symbol || 'shares'}`;
    }
  };
  
  return (
    <TradeFormContainer>
      <TabContainer>
        <Tab 
          type="buy"
          position="left"
          active={activeTab === 'buy'} 
          onClick={() => handleTabChange('buy')}
        >
          Buy
        </Tab>
        <Tab 
          type="sell"
          position="right"
          active={activeTab === 'sell'} 
          onClick={() => handleTabChange('sell')}
        >
          Sell
        </Tab>
      </TabContainer>
      
      <WalletInfo>
        <WalletLabel>Available:</WalletLabel>
        <WalletValue>{getAvailableBalance()}</WalletValue>
      </WalletInfo>
      
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
        
        <FormGroup>
          <Label>Amount</Label>
          <InputGroup>
            <Input 
              type="text" 
              value={amount}
              onChange={handleAmountChange}
              placeholder="0.00"
              hasAddon
              required
            />
            <InputAddon>{token?.symbol || 'shares'}</InputAddon>
          </InputGroup>
          
          <RangeSlider 
            type={activeTab}
            min="0"
            max="100"
            value={sliderValue}
            onChange={handleSliderChange}
          />
          
          <PercentageButtons>
            {[25, 50, 75, 100].map(percent => (
              <PercentButton 
                key={percent}
                active={activePercentage === percent}
                onClick={() => handlePercentageClick(percent)}
                type="button"
              >
                {percent}%
              </PercentButton>
            ))}
          </PercentageButtons>
        </FormGroup>
        
        <OrderSummary>
          <SummaryRow>
            <SummaryLabel>Price per share</SummaryLabel>
            <SummaryValue>${price || '0.00'}</SummaryValue>
          </SummaryRow>
          <SummaryRow>
            <SummaryLabel>Amount</SummaryLabel>
            <SummaryValue>{amount || '0'} {token?.symbol || 'shares'}</SummaryValue>
          </SummaryRow>
          <TotalRow>
            <TotalLabel>Total</TotalLabel>
            <TotalValue>${total}</TotalValue>
          </TotalRow>
        </OrderSummary>
        
        <SubmitButton 
          type={activeTab}
          disabled={!price || !amount || parseFloat(amount) <= 0 || isSubmitting}
        >
          {isSubmitting ? 'Processing...' : `${activeTab === 'buy' ? 'Buy' : 'Sell'} ${token?.symbol || 'shares'}`}
        </SubmitButton>
      </form>
    </TradeFormContainer>
  );
};

export default TradeForm;
