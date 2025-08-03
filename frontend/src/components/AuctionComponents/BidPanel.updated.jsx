import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled components
const PanelContainer = styled.div`
  background-color: var(--color-background-secondary, #12161c);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);
`;

const ClearingPriceInfo = styled.div`
  background-color: rgba(var(--color-accent-rgb, 240, 185, 11), 0.1);
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ClearingPriceLabel = styled.div`
  font-size: 0.875rem;
  color: var(--color-accent);
`;

const ClearingPriceValue = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-accent);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  color: var(--color-text-secondary, #848e9c);
  margin-bottom: 0.5rem;
`;

const InputContainer = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  padding-left: 1.5rem;
  background-color: var(--color-background, #0b0e11);
  border: 1px solid var(--color-border, #2a2f37);
  border-radius: 4px;
  color: var(--color-text, #eaecef);
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
`;

const CurrencySymbol = styled.span`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-secondary, #848e9c);
`;

const QuickBidOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.75rem;
`;

const PercentageButtonsRow = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
`;

const QuickBidButton = styled.button`
  background-color: var(--color-card, #1e2329);
  border: 1px solid var(--color-border, #2a2f37);
  border-radius: 4px;
  color: var(--color-text, #eaecef);
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  .price-text {
    font-size: 0.7rem;
    color: var(--color-text-secondary, #848e9c);
    margin-top: 2px;
  }
  
  &:hover {
    background-color: #2b3139;
  }
  
  &.active {
    background-color: #0b0e11;
    outline: 1px solid var(--color-accent);
    border: none;
    color: var(--color-accent);
    font-weight: 600;
  }
  
  /* Remove any transform or size changes on active/focus/hover */
  &:active, &:focus {
    transform: none;
    padding: 0.5rem 0.75rem;
  }
`;

const TokenQuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const QuantityButton = styled.button`
  background-color: var(--color-card, #1e2329);
  border: 1px solid var(--color-border, #2a2f37);
  border-radius: 4px;
  color: var(--color-text, #eaecef);
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  cursor: pointer;
  
  &:hover {
    background-color: #2b3139;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  /* Remove any transform or size changes on active/focus */
  &:active, &:focus {
    transform: none;
  }
`;

const QuantityInput = styled.input`
  width: 4rem;
  padding: 0.5rem;
  text-align: center;
  background-color: var(--color-background, #0b0e11);
  border: 1px solid var(--color-border, #2a2f37);
  border-radius: 4px;
  color: var(--color-text, #eaecef);
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
`;

const TokenPresets = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.75rem;
`;

const PercentageBar = styled.div`
  display: flex;
  width: 100%;
  margin-top: 0.75rem;
  gap: 0.5rem;
`;

const PercentageButton = styled.button`
  background-color: var(--color-background, #0b0e11);
  border: 1px solid var(--color-border, #2a2f37);
  border-radius: 4px;
  color: var(--color-text, #eaecef);
  padding: 0.5rem 0;
  font-size: 0.75rem;
  cursor: pointer;
  flex: 1;
  
  &:hover {
    background-color: var(--color-card, #1e2329);
  }
  
  &.active {
    background-color: #0b0e11;
    outline: 1px solid var(--color-accent);
    border: none;
    color: var(--color-accent);
    font-weight: 600;
  }
  
  /* Remove any transform or size changes on active/focus */
  &:active, &:focus {
    transform: none;
    padding: 0.5rem 0;
  }
`;

const AmountContainer = styled.div`
  position: relative;
  margin-top: 0.75rem;
`;

const AmountInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  background-color: var(--color-background, #0b0e11);
  border: 1px solid var(--color-border, #2a2f37);
  border-radius: 4px;
  color: var(--color-text, #eaecef);
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
`;

const AmountLabel = styled.span`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-secondary, #848e9c);
  font-size: 0.875rem;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 2px;
  background-color: #333;
  margin: 1rem 0;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${props => props.percentage}%;
    background-color: var(--color-accent);
  }
`;

const BidSummary = styled.div`
  background-color: var(--color-card, #1e2329);
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 1.5rem;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
    padding-top: 0.5rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-weight: 600;
  }
`;

const SummaryLabel = styled.div`
  font-size: 0.875rem;
  color: #848e9c;
`;

const SummaryValue = styled.div`
  font-size: 0.875rem;
  color: #f8f9fa;
`;

const ImportantNote = styled.div`
  font-size: 0.875rem;
  color: var(--color-accent);
  margin-bottom: 1.5rem;
  padding: 0.75rem;
  background-color: rgba(var(--color-accent-rgb, 240, 185, 11), 0.1);
  border-radius: 4px;
  text-align: center;
`;

const PlaceBidButton = styled.button`
  width: 100%;
  background-color: var(--color-accent);
  border: none;
  border-radius: 4px;
  color: #0b0e11;
  padding: 0.875rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background-color: var(--color-accent-hover, #f8d12f);
  }
  
  &:disabled {
    background-color: #333;
    color: #848e9c;
    cursor: not-allowed;
  }
  
  /* Remove any transform or size changes on active/focus */
  &:active, &:focus {
    transform: none;
    padding: 0.875rem;
  }
`;

const UserBidsSection = styled.div`
  margin-top: 2rem;
`;

const UserBidsTitle = styled.h3`
  font-size: 1rem;
  color: var(--color-text, #eaecef);
  margin-bottom: 1rem;
`;

const BidTable = styled.div`
  background-color: var(--color-card, #1e2329);
  border-radius: 4px;
  overflow: hidden;
`;

const BidTableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0.75rem;
  font-size: 0.75rem;
  background-color: #2b3139;
  color: #848e9c;
`;

const BidTableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0.75rem;
  font-size: 0.875rem;
  border-bottom: 1px solid #2b3139;
  
  &:last-child {
    border-bottom: none;
  }
`;

const BidTableCell = styled.div`
  color: #f8f9fa;
  
  &.price {
    color: var(--color-accent);
  }
  
  &.status {
    color: ${props => props.isActive ? '#0ecb81' : '#848e9c'};
  }
`;

const BidPanel = ({ clearingPrice, userBids, onPlaceBid, totalTokens }) => {
  const [bidPrice, setBidPrice] = useState(clearingPrice); // Default to clearing price
  const [tokenAmount, setTokenAmount] = useState(1);
  const [totalCost, setTotalCost] = useState(bidPrice);
  const [selectedPercentage, setSelectedPercentage] = useState(25); // Default to 25%
  const [activeBidButton, setActiveBidButton] = useState('match'); // Default to match clearing price
  
  // Mock user's available balance
  const userBalance = 500000; // $500,000 available for bidding
  
  // Initialize component state on mount
  useEffect(() => {
    // Set default values on component mount
    setBidPrice(clearingPrice);
    setSelectedPercentage(25);
    setActiveBidButton('match');
    // Set initial token amount based on 25% of max affordable
    setTokenAmount(calculateTokensByPercentage(25));
  }, []);
  
  // Update total cost when bid price or token amount changes
  useEffect(() => {
    setTotalCost(bidPrice * tokenAmount);
  }, [bidPrice, tokenAmount]);
  
  // Calculate max tokens user can afford at current bid price
  const maxAffordableTokens = userBalance / bidPrice;
  
  // Calculate tokens based on percentage of max affordable
  const calculateTokensByPercentage = (percentage) => {
    // Calculate tokens and round to 3 decimal places
    const tokens = Math.round(((percentage / 100) * maxAffordableTokens) * 1000) / 1000;
    return Math.max(0.001, Math.min(tokens, totalTokens)); // Ensure between 0.001 and totalTokens
  };
  
  const handleBidPriceChange = (e) => {
    // Get the raw input value
    const inputValue = e.target.value;
    
    // If the input is empty or just a dollar sign, set a default
    if (!inputValue || inputValue === '$') {
      setBidPrice(0);
      return;
    }
    
    // Remove non-numeric characters and convert to number
    const numericValue = inputValue.replace(/[^0-9]/g, '');
    const value = parseInt(numericValue, 10) || 0;
    
    // Update the bid price
    setBidPrice(value);
    
    // Clear active button when manually changing price
    setActiveBidButton('');
    
    // Recalculate token amount based on selected percentage and new price
    if (selectedPercentage > 0) {
      setTokenAmount(calculateTokensByPercentage(selectedPercentage));
    }
  };
  
  const handleTokenAmountChange = (e) => {
    // Parse as float to allow for decimal values
    const value = parseFloat(e.target.value) || 0;
    // Ensure minimum of 0.001 and maximum of totalTokens
    // Round to 3 decimal places
    const roundedValue = Math.round(value * 1000) / 1000;
    setTokenAmount(Math.max(0.001, Math.min(roundedValue, totalTokens)));
    // Clear percentage selection when manually entering tokens
    setSelectedPercentage(0);
  };
  
  const handleQuickBid = (percentage) => {
    const newBidPrice = parseFloat((clearingPrice * (1 + percentage / 100)).toFixed(2));
    setBidPrice(newBidPrice);
    
    // Set the active button based on percentage
    setActiveBidButton(`plus${percentage}`);
    
    // Recalculate token amount based on selected percentage and new price
    if (selectedPercentage > 0) {
      setTokenAmount(calculateTokensByPercentage(selectedPercentage));
    }
  };
  
  const handleMatchClearingPrice = () => {
    setBidPrice(clearingPrice);
    
    // Set the active button to match
    setActiveBidButton('match');
    
    // Recalculate token amount based on selected percentage and new price
    if (selectedPercentage > 0) {
      setTokenAmount(calculateTokensByPercentage(selectedPercentage));
    }
  };
  
  const handlePresetTokens = (amount) => {
    setTokenAmount(amount);
    setSelectedPercentage(0); // Clear percentage selection
  };
  
  const handlePercentageSelect = (percentage) => {
    setSelectedPercentage(percentage);
    setTokenAmount(calculateTokensByPercentage(percentage));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onPlaceBid(bidPrice, tokenAmount);
  };
  
  // Calculate property value based on bid price (100 tokens per property)
  const calculatedPropertyValue = bidPrice * 100;
  
  // Calculate ownership percentage
  const ownershipPercentage = ((tokenAmount / totalTokens) * 100).toFixed(2);
  
  // Filter active bids (above clearing price)
  const activeBids = userBids.filter(bid => bid.price >= clearingPrice);
  
  return (
    <PanelContainer>
      <ClearingPriceInfo>
        <ClearingPriceLabel>Current Clearing Price</ClearingPriceLabel>
        <ClearingPriceValue>${clearingPrice.toLocaleString()}</ClearingPriceValue>
      </ClearingPriceInfo>
      
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Your Bid Price (per token)</FormLabel>
          <InputContainer>
            <CurrencySymbol>$</CurrencySymbol>
            <Input 
              type="text" 
              value={bidPrice === 0 ? '' : bidPrice.toLocaleString()} 
              onChange={handleBidPriceChange}
              placeholder="Enter bid price"
              autoComplete="off"
            />
          </InputContainer>
          <QuickBidOptions>
            <QuickBidButton 
              type="button"
              onClick={handleMatchClearingPrice}
              style={{ width: '100%' }}
              className={activeBidButton === 'match' ? 'active' : ''}
            >
              Match Clearing Price
            </QuickBidButton>
            <PercentageButtonsRow>
              <QuickBidButton 
                type="button"
                onClick={() => handleQuickBid(1)}
                className={activeBidButton === 'plus1' ? 'active' : ''}
              >
                +1%
                <span className="price-text">${(clearingPrice * 1.01).toFixed(2)}</span>
              </QuickBidButton>
              <QuickBidButton 
                type="button"
                onClick={() => handleQuickBid(3)}
                className={activeBidButton === 'plus3' ? 'active' : ''}
              >
                +3%
                <span className="price-text">${(clearingPrice * 1.03).toFixed(2)}</span>
              </QuickBidButton>
              <QuickBidButton 
                type="button"
                onClick={() => handleQuickBid(5)}
                className={activeBidButton === 'plus5' ? 'active' : ''}
              >
                +5%
                <span className="price-text">${(clearingPrice * 1.05).toFixed(2)}</span>
              </QuickBidButton>
            </PercentageButtonsRow>
          </QuickBidOptions>
        </FormGroup>
        
        <FormGroup>
          <FormLabel>Number of Tokens</FormLabel>
          
          {/* Token amount input with label */}
          <AmountContainer>
            <AmountInput 
              type="text" 
              value={tokenAmount} 
              onChange={handleTokenAmountChange}
            />
            <AmountLabel>TOKENS</AmountLabel>
          </AmountContainer>
          
          {/* Progress bar showing percentage of funds used */}
          <ProgressBar percentage={selectedPercentage} />
          
          {/* Percentage selection buttons */}
          <PercentageBar>
            <PercentageButton 
              type="button" 
              className={selectedPercentage === 25 ? 'active' : ''}
              onClick={() => handlePercentageSelect(25)}
            >
              25%
            </PercentageButton>
            <PercentageButton 
              type="button" 
              className={selectedPercentage === 50 ? 'active' : ''}
              onClick={() => handlePercentageSelect(50)}
            >
              50%
            </PercentageButton>
            <PercentageButton 
              type="button" 
              className={selectedPercentage === 75 ? 'active' : ''}
              onClick={() => handlePercentageSelect(75)}
            >
              75%
            </PercentageButton>
            <PercentageButton 
              type="button" 
              className={selectedPercentage === 100 ? 'active' : ''}
              onClick={() => handlePercentageSelect(100)}
            >
              100%
            </PercentageButton>
          </PercentageBar>
        </FormGroup>
        
        <BidSummary>
          <SummaryRow>
            <SummaryLabel>Your Bid Price</SummaryLabel>
            <SummaryValue>${bidPrice.toLocaleString()} per token</SummaryValue>
          </SummaryRow>
          <SummaryRow>
            <SummaryLabel>Number of Tokens</SummaryLabel>
            <SummaryValue>{tokenAmount}</SummaryValue>
          </SummaryRow>
          <SummaryRow>
            <SummaryLabel>Property Value</SummaryLabel>
            <SummaryValue>${(bidPrice * 100).toLocaleString()}</SummaryValue>
          </SummaryRow>
          <SummaryRow>
            <SummaryLabel>Total Bid</SummaryLabel>
            <SummaryValue>${totalCost.toLocaleString()}</SummaryValue>
          </SummaryRow>
        </BidSummary>
        
        <ImportantNote>
          Remember: You'll pay the clearing price (${clearingPrice.toLocaleString()}) per token, not your bid price
        </ImportantNote>
        
        <PlaceBidButton 
          type="submit"
          disabled={bidPrice < clearingPrice}
        >
          Place Bid
        </PlaceBidButton>
      </form>
      
      {userBids.length > 0 && (
        <UserBidsSection>
          <UserBidsTitle>Your Active Bids</UserBidsTitle>
          <BidTable>
            <BidTableHeader>
              <div>Bid Price</div>
              <div>Tokens</div>
              <div>Status</div>
            </BidTableHeader>
            {userBids.map((bid, index) => (
              <BidTableRow key={bid.id}>
                <BidTableCell className="price">${bid.price.toLocaleString()}</BidTableCell>
                <BidTableCell>{bid.tokenAmount}</BidTableCell>
                <BidTableCell 
                  className="status"
                  isActive={bid.price >= clearingPrice}
                >
                  {bid.price >= clearingPrice ? 'Active' : 'Below Clearing Price'}
                </BidTableCell>
              </BidTableRow>
            ))}
          </BidTable>
        </UserBidsSection>
      )}
    </PanelContainer>
  );
};

export default BidPanel;
