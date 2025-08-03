import React, { useState, useEffect, useRef } from 'react';
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
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-accent);
`;

const ClearingPriceValue = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
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
  margin-bottom: 0.5rem;
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

const FundsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.75rem;
`;

const AvailableFunds = styled.div`
  color: #848e9c;
`;

const AddFundsButton = styled.button`
  background: transparent;
  border: none;
  color: var(--color-accent, #f0b90b);
  font-size: 0.75rem;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
  
  &:hover {
    color: #f8d12f;
  }
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

const TotalBidInput = styled.div`
  position: relative;
  width: 100%;
`;
const GoldLabel = styled(FormLabel)`
  color: var(--color-accent, #f0b90b);
  font-weight: 500;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: var(--color-background-secondary, #12161c);
  border-radius: 8px;
  padding: 1.5rem;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const ModalTitle = styled.h3`
  font-size: 1.25rem;
  color: var(--color-text, #eaecef);
  margin-bottom: 1rem;
`;

const ModalText = styled.p`
  font-size: 0.875rem;
  color: var(--color-text-secondary, #848e9c);
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

const ModalAmount = styled.span`
  color: var(--color-accent, #f0b90b);
  font-weight: 600;
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
`;

const ModalButton = styled.button`
  padding: 0.75rem 1rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    transform: translateY(-1px);
  }
`;

const CancelButton = styled(ModalButton)`
  background-color: transparent;
  border: 1px solid var(--color-border, #2a2f37);
  color: var(--color-text, #eaecef);
  margin-top: 0.75rem;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

const AddFundsModalButton = styled(ModalButton)`
  background-color: var(--color-accent, #f0b90b);
  border: none;
  color: #000;
  
  &:hover {
    background-color: #f8d12f;
  }
`;

const PreviousBidContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5px;
  font-size: 0.85rem;
`;

const PreviousBidLabel = styled.span`
  color: #aaa;
  margin-right: 5px;
`;

const PreviousBidValue = styled.span`
  color: #f5d742;
  font-weight: 500;
`;

const ImportantNote = styled.div`
  font-size: 0.8rem;
  color: #f5d742;
  margin-top: 10px;
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
    /* No transform */
  }
`;

const BidPanel = ({ clearingPrice, onPlaceBid, propertyValue, userBids, totalTokens, onCancelAmend }) => {
  const [bidPrice, setBidPrice] = useState(clearingPrice); // Default to clearing price
  const [tokenAmount, setTokenAmount] = useState(0);
  const [selectedPercentage, setSelectedPercentage] = useState(0); // No default percentage selected
  const [totalCost, setTotalCost] = useState(0);
  const [rawTotalCostInput, setRawTotalCostInput] = useState('');
  const [rawTokenAmountInput, setRawTokenAmountInput] = useState('');
  const [userInteracted, setUserInteracted] = useState(false); // Track if user has interacted with the panel
  const [userSelectedPrice, setUserSelectedPrice] = useState(false); // Track if user has explicitly selected a price
  const [userSelectedPercentage, setUserSelectedPercentage] = useState(false); // Track if user selected a percentage button
  const [activeBidButton, setActiveBidButton] = useState('match'); // Track which quick bid button is active
  const userInteractedRef = useRef(false); // Persistent reference to track user interaction across renders

  // Modal state
  const [showFundsModal, setShowFundsModal] = useState(false);
  const [additionalFundsNeeded, setAdditionalFundsNeeded] = useState(0);
  const [isEditingTotalBid, setIsEditingTotalBid] = useState(false);

  // Use the userBalance prop passed from AuctionTest.jsx

  // Initialize component state on mount and handle clearing price changes
  useEffect(() => {
    // Only update the price if the user hasn't interacted with the panel yet
    // Use userInteractedRef to ensure we remember user interactions across renders
    if (!userInteractedRef.current && !userInteracted && !userSelectedPrice) {
      setBidPrice(clearingPrice);
      setActiveBidButton('match');
    }

    // Store the user interaction state in a ref to persist across renders
    if (userInteracted || userSelectedPrice || userSelectedPercentage) {
      userInteractedRef.current = true;
    }
  }, [clearingPrice, userInteracted, userSelectedPrice, userSelectedPercentage]);

  // Helper function to determine bid status
  const getBidStatus = (bidPrice, currentClearingPrice) => {
    if (bidPrice < currentClearingPrice) {
      return 'outbid';
    }

    // Calculate how much above clearing price the bid is
    const percentAbove = ((bidPrice - currentClearingPrice) / currentClearingPrice) * 100;

    // If less than 2% above clearing price, consider it "at risk"
    if (percentAbove < 2) {
      return 'at-risk';
    }

    return 'competitive';
  };

  // Effect to update total cost when bid price or token amount changes
  useEffect(() => {
    if (bidPrice && tokenAmount) {
      const newTotalCost = bidPrice * tokenAmount;
      setTotalCost(newTotalCost);

      // Only update the raw input when the user is not actively editing it
      if (!isEditingTotalBid) {
        setRawTotalCostInput(newTotalCost.toLocaleString());
      }

      // Calculate percentage of funds used
      const maxCost = userBalance;
      const percentageOfFunds = Math.min(100, Math.round((newTotalCost / maxCost) * 100));
      setSelectedPercentage(percentageOfFunds);
    } else if (!isEditingTotalBid) {
      setTotalCost(0);
      setRawTotalCostInput('');
      setSelectedPercentage(0);
    }
  }, [bidPrice, tokenAmount, isEditingTotalBid]);

  // Initialize with default values
  useEffect(() => {
    setBidPrice(clearingPrice);
    setActiveBidButton('match');

    // Set percentage of funds
    const maxCost = userBalance;
    const percentageOfFunds = Math.min(100, Math.round(((clearingPrice * tokenAmount) / maxCost) * 100));
    setSelectedPercentage(percentageOfFunds);
  }, []);

  // Format number with commas while preserving cursor position
  const formatNumberWithCommas = (value, previousValue, previousCursorPosition) => {
    // Remove all non-numeric characters except decimal point
    const cleanValue = value.replace(/[^0-9.]/g, '');

    // If empty or invalid, return empty string
    if (!cleanValue || isNaN(parseFloat(cleanValue))) {
      return '';
    }

    // Split into integer and decimal parts
    const parts = cleanValue.split('.');
    const integerPart = parts[0];
    const decimalPart = parts.length > 1 ? '.' + parts[1] : '';

    // Add commas to integer part
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    const formattedValue = formattedInteger + decimalPart;

    // Calculate new cursor position
    let newCursorPosition = previousCursorPosition;
    if (previousValue && previousCursorPosition) {
      // Count commas before cursor in previous value
      const previousCommasBeforeCursor = (previousValue.substring(0, previousCursorPosition).match(/,/g) || []).length;

      // Count commas before cursor in new value (estimate)
      const newCommasBeforeCursor = (formattedValue.substring(0, previousCursorPosition).match(/,/g) || []).length;

      // Adjust cursor position based on difference in commas
      newCursorPosition += (newCommasBeforeCursor - previousCommasBeforeCursor);
    }

    return {
      formattedValue,
      cursorPosition: newCursorPosition
    };
  };

  // Handle total bid input change
  const handleTotalBidChange = (e) => {
    // Mark that the user has interacted with the panel
    setUserInteracted(true);
    setUserSelectedPrice(true);
    setIsEditingTotalBid(true);

    const inputElement = e.target;
    const cursorPosition = inputElement.selectionStart;
    const previousValue = rawTotalCostInput;
    const inputValue = e.target.value;

    // If the input is empty, reset values
    if (inputValue === '') {
      setRawTotalCostInput('');
      setTotalCost(0);
      setTokenAmount(0);
      setRawTokenAmountInput('');
      setSelectedPercentage(0);
      return;
    }

    // Format the input value with commas
    const { formattedValue, cursorPosition: newCursorPosition } = formatNumberWithCommas(
      inputValue,
      previousValue,
      cursorPosition
    );

    // Update the input field with formatted value
    setRawTotalCostInput(formattedValue);

    // Set cursor position after React updates the DOM
    setTimeout(() => {
      if (inputElement) {
        inputElement.setSelectionRange(newCursorPosition, newCursorPosition);
      }
    }, 0);

    // Remove non-numeric characters except decimal point for calculation
    const cleanValue = inputValue.replace(/[^0-9.]/g, '');

    // Parse as float to handle decimal values properly
    const newTotalCost = parseFloat(cleanValue);

    // Validate the input is a proper number
    if (!isNaN(newTotalCost)) {
      // Update the internal total cost value
      setTotalCost(newTotalCost);

      // Update token amount based on total cost and current bid price
      if (bidPrice > 0) {
        // Calculate token amount with 2 decimal precision
        const newTokenAmount = Math.round((newTotalCost / bidPrice) * 100) / 100;
        setTokenAmount(newTokenAmount);

        // Update the token amount input field to show the calculated value
        setRawTokenAmountInput(newTokenAmount.toString());

        // Calculate what percentage of available funds this represents
        const maxCost = userBalance;
        const percentageOfFunds = Math.min(100, Math.round((newTotalCost / maxCost) * 100));
        setSelectedPercentage(percentageOfFunds);

        // If total cost exceeds available funds, show modal
        if (newTotalCost > userBalance) {
          const amountNeeded = Math.ceil(newTotalCost - userBalance);
          setAdditionalFundsNeeded(amountNeeded);
          setShowFundsModal(true);
        }
      }
    }
  };

  // Handle add funds button click
  const handleAddFunds = () => {
    // Close the modal if it's open
    setShowFundsModal(false);

    // In a real app, this would open a payment flow
    // For now, we'll just simulate adding the needed funds
    alert('Redirecting to payment gateway...');
  };

  // Calculate max tokens user can afford at current bid price
  const maxAffordableTokens = userBalance / bidPrice;

  // Helper function to get the reference price for percentage calculations
  const getReferencePrice = () => {
    return clearingPrice;
  };

  // Calculate tokens based on percentage of available funds
  const calculateTokensByPercentage = (percentage) => {
    // Calculate how many tokens the user can afford with the percentage of their available funds
    const fundsToUse = (percentage / 100) * userBalance;
    const tokens = Math.floor((fundsToUse / bidPrice) * 1000) / 1000;
    return Math.max(0.001, Math.min(tokens, totalTokens)); // Ensure between 0.001 and totalTokens
  };

  const handleBidPriceChange = (e) => {
    // Mark that the user has interacted with the panel
    setUserInteracted(true);
    // Mark that the user has explicitly selected a price
    setUserSelectedPrice(true);

    const inputValue = e.target.value;

    // Remove commas and other non-numeric characters except for decimal point
    const sanitizedValue = inputValue.replace(/[^0-9.]/g, '');

    // Parse the sanitized value to a number
    const value = parseFloat(sanitizedValue);

    // Check if the value is a valid number
    if (!isNaN(value)) {
      // Don't allow bids below clearing price
      if (value < clearingPrice) {
        setBidPrice(clearingPrice);
      } else {
        setBidPrice(value);
      }

      // Update total cost
      setTotalCost(value * tokenAmount);
      setRawTotalCostInput((value * tokenAmount).toLocaleString());

      // Set user interaction flags - this is critical to ensure the price remains fixed
      // after user interaction
      setUserInteracted(true);
      setUserSelectedPrice(true);

      // Clear active bid button selection
      setActiveBidButton('');
    }

    // Recalculate token amount based on selected percentage and new price
    if (selectedPercentage > 0) {
      setTokenAmount(calculateTokensByPercentage(selectedPercentage));
    }
  };

  const handleTokenAmountChange = (e) => {
    // Mark that the user has interacted with the panel
    setUserInteracted(true);
    setUserSelectedPrice(true);

    // Store the raw input value
    const inputValue = e.target.value;
    setRawTokenAmountInput(inputValue);

    // If the input is empty, reset values but don't force a minimum
    if (inputValue === '') {
      setTokenAmount(0);
      setSelectedPercentage(0);
      return;
    }

    // Parse as float to allow for decimal values
    const value = parseFloat(inputValue);

    // Only proceed if it's a valid number
    if (!isNaN(value)) {
      // Round to 3 decimal places and ensure maximum of totalTokens
      const roundedValue = Math.round(value * 1000) / 1000;

      setTokenAmount(Math.min(roundedValue, totalTokens));
      // Clear percentage selection when manually entering tokens
      setSelectedPercentage(0);
    }
  };

  const handleQuickBid = (percentage) => {
    // Mark that the user has interacted with the panel
    setUserInteracted(true);
    setUserSelectedPrice(true);
    setUserSelectedPercentage(true);
    userInteractedRef.current = true; // Set the ref to persist across renders

    const newBidPrice = Math.round(clearingPrice * (1 + percentage / 100));
    setBidPrice(newBidPrice);
      alert('Please enter both bid price and token amount');
      return;
    }

    const totalCost = bidPrice * tokenAmount;

    if (totalCost > userBalance) {
      // Calculate how much more funds are needed
      const additionalFundsNeeded = totalCost - userBalance;
      setAdditionalFundsNeeded(additionalFundsNeeded);
      setShowFundsModal(true);
      return;
    }

    // Submit the bid (user balance will be updated in the parent component)
    onPlaceBid(bidPrice, tokenAmount);

    // Show success message
    alert(`Bid placed successfully! ${tokenAmount} tokens at $${bidPrice.toLocaleString()} each.`);
  };

  // ... (rest of the code remains the same)

  return (
    <PanelContainer id="bid-panel">
      <ClearingPriceInfo>
        <ClearingPriceLabel>Bid Is At</ClearingPriceLabel>
        <ClearingPriceValue>${clearingPrice.toLocaleString()}</ClearingPriceValue>
      </ClearingPriceInfo>

      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Your Bid ($/Token)</FormLabel>
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
              Match Auction Clearing Price
            </QuickBidButton>
            <PercentageButtonsRow>
              <QuickBidButton
                type="button"
                onClick={() => handleQuickBid(1)}
                className={activeBidButton === 'plus1' ? 'active' : ''}
              >
                +1%
                <span className="price-text">${Math.round(clearingPrice * 1.01).toLocaleString()}</span>
              </QuickBidButton>
              <QuickBidButton
                type="button"
                onClick={() => handleQuickBid(3)}
                className={activeBidButton === 'plus3' ? 'active' : ''}
              >
                +3%
                <span className="price-text">${Math.round(clearingPrice * 1.03).toLocaleString()}</span>
              </QuickBidButton>
              <QuickBidButton
                type="button"
                onClick={() => handleQuickBid(5)}
                className={activeBidButton === 'plus5' ? 'active' : ''}
              >
                +5%
                <span className="price-text">${Math.round(clearingPrice * 1.05).toLocaleString()}</span>
              </QuickBidButton>
            </PercentageButtonsRow>
          </QuickBidOptions>
        </FormGroup>

        <FormGroup>
          <FormLabel>Amount (Insert property address)</FormLabel>

          {/* Token amount input with label */}
          <AmountContainer>
            <AmountInput
              type="text"
              value={rawTokenAmountInput}
              onChange={handleTokenAmountChange}
              aria-label="Token amount"
              placeholder="Enter token amount"
              onFocus={(e) => e.target.select()}
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
              onClick={() => handlePercentageClick(25)}
            >
              25%
            </PercentageButton>
            <PercentageButton
              type="button"
              className={selectedPercentage === 50 ? 'active' : ''}
              onClick={() => handlePercentageClick(50)}
            >
              50%
            </PercentageButton>
            <PercentageButton
              type="button"
              className={selectedPercentage === 75 ? 'active' : ''}
              onClick={() => handlePercentageClick(75)}
            >
              75%
            </PercentageButton>
            <PercentageButton
              type="button"
              className={selectedPercentage === 100 ? 'active' : ''}
              onClick={() => handlePercentageClick(100)}
            >
              100%
            </PercentageButton>
          </PercentageBar>

          <FundsContainer>
            <AvailableFunds>Available Funds: ${userBalance.toLocaleString()}</AvailableFunds>
            <AddFundsButton type="button" onClick={handleAddFunds}>Add Funds</AddFundsButton>
          </FundsContainer>
        </FormGroup>

        <FormGroup>
          <GoldLabel>Total Bid</GoldLabel>
          <InputContainer>
            <CurrencySymbol>$</CurrencySymbol>
            <Input
              id="total-bid-input"
              type="text"
              value={rawTotalCostInput}
              onChange={handleTotalBidChange}
              placeholder="Enter total bid amount"
              aria-label="Total bid amount"
              onFocus={(e) => {
                e.target.select();
                setIsEditingTotalBid(true);
              }}
              onBlur={() => setIsEditingTotalBid(false)}
              onClick={(e) => e.target.select()}
              autoComplete="off"
            />
          </InputContainer>
        </FormGroup>

        <SummaryRow>
          <SummaryLabel>Bid:</SummaryLabel>
          <SummaryValue>{tokenAmount} tokens at ${bidPrice.toLocaleString()}</SummaryValue>
        </SummaryRow>

        <SummaryRow>
          <SummaryLabel>Property Valuation:</SummaryLabel>
          <SummaryValue>${(bidPrice * totalTokens).toLocaleString()}</SummaryValue>
        </SummaryRow>

        <SummaryRow>
          <SummaryLabel>Property Ownership:</SummaryLabel>
          <SummaryValue>{((tokenAmount / totalTokens) * 100).toFixed(2)}%</SummaryValue>
        </SummaryRow>

        <PlaceBidButton type="submit" disabled={!bidPrice || !tokenAmount || bidPrice < clearingPrice}>
          Place Bid
        </PlaceBidButton>

        <ImportantNote>
          Note: Successful bids will be filled at the final clearance price, not your bid. For a bid to be successful, it must remain at or above the auction clearing price.
        </ImportantNote>
      </form>
      
      {/* Insufficient Funds Modal */}
      {showFundsModal && (
        <ModalOverlay>
          <ModalContent>
            <ModalTitle>Additional Funds Required</ModalTitle>
            <ModalText>
              You need <ModalAmount>${additionalFundsNeeded.toLocaleString()}</ModalAmount> more to complete this bid.
              Would you like to add funds to your account?
            </ModalText>
            <ModalButtons>
              <CancelButton onClick={() => setShowFundsModal(false)}>Cancel</CancelButton>
              <AddFundsModalButton onClick={handleAddFunds}>Add Funds</AddFundsModalButton>
            </ModalButtons>
          </ModalContent>
        </ModalOverlay>
      )}
    </PanelContainer>
  );
};

export default BidPanel;
