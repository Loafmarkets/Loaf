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
  font-size: 0.9375rem;
  font-weight: 600;
  color: #c1c5c9;
  margin-bottom: 0.75rem;
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
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

const AdjustmentButton = styled.button`
  background-color: #1e2329;
  border: 1px solid var(--color-border, #2a2f37);
  border-radius: 4px;
  color: var(--color-text, #eaecef);
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  margin-left: 8px;
  
  &:hover {
    background-color: #252b33;
  }
  
  &:active {
    transform: scale(0.95);
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
  background-color: #1e2329;
  border: 1px solid var(--color-border, #2a2f37);
  border-radius: 4px;
  color: var(--color-text, #eaecef);
  padding: 0.5rem 0.4rem;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  .price-text {
    font-size: 0.65rem;
    color: var(--color-text-secondary, #848e9c);
    margin-top: 1px;
  }
  
  &:hover {
    background-color: #252b33;
  }
  
  &.active {
    background-color: #252b33;
    outline: 1px solid var(--color-accent);
    border: none;
    color: var(--color-accent);
    font-weight: 600;
  }
  
  /* Remove any transform or size changes on active/focus/hover */
  &:active, &:focus {
    transform: none;
    padding: 0.5rem 0.4rem;
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
  background-color: #1e2329;
  border: 1px solid var(--color-border, #2a2f37);
  border-radius: 4px;
  color: var(--color-text, #eaecef);
  padding: 0.75rem 0;
  font-size: 0.75rem;
  cursor: pointer;
  flex: 1;
  
  &:hover {
    background-color: #252b33;
  }
  
  &.active {
    background-color: #252b33;
    outline: 1px solid var(--color-accent);
    border: none;
    color: var(--color-accent);
    font-weight: 600;
  }
  
  /* Remove any transform or size changes on active/focus */
  &:active, &:focus {
    transform: none;
    padding: 0.75rem 0;
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

const SliderContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  position: relative;
`;

const SliderTrack = styled.div`
  width: 100%;
  height: 2px;
  background-color: #333;
  position: relative;
`;

const SliderFill = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${props => props.percentage}%;
  background-color: var(--color-accent);
`;

const SliderThumb = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--color-accent);
  position: absolute;
  top: 50%;
  left: ${props => props.percentage}%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 2;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  transition: transform 0.1s;
  
  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
  }
  
  &:active {
    transform: translate(-50%, -50%) scale(0.95);
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

const ImportantNote = styled.div`
  font-size: 0.75rem;
  color: var(--color-accent);
  margin-top: 0.5rem;
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

const BidPanel = ({ clearingPrice, userBids, onPlaceBid, totalTokens, bidToAmend, onCancelAmend, userInteracted, setUserInteracted, propertyAddress = "83 Fitzwilliam Road" }) => {
  // Default to 0.1% above clearing price, without rounding
  const [bidPrice, setBidPrice] = useState(clearingPrice * 1.001)
  const [tokenAmount, setTokenAmount] = useState(0);
  const [selectedPercentage, setSelectedPercentage] = useState(0); // No default percentage selected
  const [totalCost, setTotalCost] = useState(0);
  const [rawTotalCostInput, setRawTotalCostInput] = useState('');
  const [rawTokenAmountInput, setRawTokenAmountInput] = useState('');
  const [isAmending, setIsAmending] = useState(false); // Track if we're amending a bid
  const [activeBidButton, setActiveBidButton] = useState('match'); // Default to match clearing price
  // userInteracted is now a prop from parent
  const [userSelectedPrice, setUserSelectedPrice] = useState(false); // Track if user has explicitly selected a price
  const [userSelectedPercentage, setUserSelectedPercentage] = useState(false); // Track if user selected a percentage button
  const [increaseBidClicked, setIncreaseBidClicked] = useState(false); // Track if Increase Bid button was clicked
  
  // Modal state
  const [showFundsModal, setShowFundsModal] = useState(false);
  const [additionalFundsNeeded, setAdditionalFundsNeeded] = useState(0);
  
  // Mock user's available balance
  // Track user balance as state so it can be updated when bids are placed
  const [userBalance, setUserBalance] = useState(500000); // $500,000 available for bidding
  
  // Track previous bids to detect when bids become outbid
  const [previousBids, setPreviousBids] = useState([]);
  
  // Track if initial bids have been processed
  const [initialBidsProcessed, setInitialBidsProcessed] = useState(false);
  
  // Initialize component state on mount only - no automatic updates with clearing price
  useEffect(() => {
    console.log('Component initialized. Setting initial state.');
    
    // CRITICAL: Make sure the userInteracted flag is set to true if they've selected a price or percentage
    // This ensures the interaction state is properly maintained across component re-renders
    if ((userSelectedPrice || userSelectedPercentage) && setUserInteracted) {
      if (!userInteracted) {
        console.log('Setting userInteracted to true based on price/percentage selection');
        setUserInteracted(true);
      }
    }
    
    // ONLY set the initial bid price on first mount (when bidPrice is equal to 0)
    if (!bidToAmend && bidPrice === 0) {
      console.log('Initial mount - setting starting bid price to 0.1% above clearing price:', clearingPrice);
      // Set bid price to 0.1% above clearing price rounded to 2 decimal places
      setBidPrice(parseFloat((clearingPrice * 1.001).toFixed(2)));
      setActiveBidButton('match');
    }
    
    // Debug output to help diagnose issues
    console.log('Bid panel state:', { 
      bidPrice,
      clearingPrice,
      bidToAmend: !!bidToAmend,
      userInteracted,
      userSelectedPrice,
      userSelectedPercentage,
      increaseBidClicked
    });
  }, [bidToAmend, userInteracted, userSelectedPrice, userSelectedPercentage]); // clearingPrice intentionally omitted to prevent auto-updates
  
  // Track clearing price changes for new bid panels only
  // This will update the bid price with the clearing price until the user interacts with the panel
  useEffect(() => {
    // Only update for new bid panels (not for amending bids)
    // And only if the user hasn't interacted with the panel yet
    if (!bidToAmend && !userInteracted && !userSelectedPrice && !userSelectedPercentage && !increaseBidClicked) {
      console.log('Updating bid price to 0.1% above clearing price for new bid panel:', clearingPrice);
      // Set bid price to 0.1% above clearing price rounded to 2 decimal places
      setBidPrice(parseFloat((clearingPrice * 1.001).toFixed(2)));
      setActiveBidButton('match');
    }
  }, [clearingPrice, bidToAmend, userInteracted, userSelectedPrice, userSelectedPercentage, increaseBidClicked]);
  
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
  
  // Process initial bids on component mount
  useEffect(() => {
    if (!userBids || userBids.length === 0 || initialBidsProcessed) {
      return;
    }
    
    // Store initial bids for tracking outbid status later
    // We'll track these separately from previousBids to ensure they're properly processed
    const initialBidsWithStatus = userBids.map(bid => ({
      ...bid,
      initialStatus: getBidStatus(bid.price, clearingPrice)
    }));
    
    // Store these initial bids in state
    setPreviousBids(initialBidsWithStatus);
    
    // Mark initial bids as processed without deducting from balance
    // This ensures we start with the full $500,000 balance
    setInitialBidsProcessed(true);
  }, [userBids, initialBidsProcessed, clearingPrice]);
  
  // Track which bids have already been refunded
  const [refundedBids, setRefundedBids] = useState([]);
  
  // Monitor clearing price changes to detect outbid bids and return funds
  useEffect(() => {
    if (!userBids || !initialBidsProcessed) {
      return;
    }
    
    // Find all bids that are now below the clearing price (outbid)
    const outbidBids = [];
    
    userBids.forEach(bid => {
      // Check if this bid is below the clearing price and hasn't been refunded yet
      if (bid.price < clearingPrice && !refundedBids.includes(bid.id)) {
        // This bid is outbid - add it to the list
        outbidBids.push(bid);
      }
    });
    
    // Return funds for outbid bids
    if (outbidBids.length > 0) {
      let totalRefund = 0;
      const newRefundedBids = [...refundedBids];
      
      outbidBids.forEach(outbidBid => {
        const bidCost = outbidBid.price * outbidBid.tokenAmount;
        totalRefund += bidCost;
        newRefundedBids.push(outbidBid.id);
      });
      
      if (totalRefund > 0) {
        setUserBalance(prevBalance => prevBalance + totalRefund);
        setRefundedBids(newRefundedBids);
        // Notification removed as requested - funds are still returned silently
      }
    }
  }, [userBids, clearingPrice, initialBidsProcessed, refundedBids]);
  
  // Track if user is currently editing the total bid input
  const [isEditingTotalBid, setIsEditingTotalBid] = useState(false);
  
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
  
  // Handle populating form when a bid is being amended
  useEffect(() => {
    if (bidToAmend) {
      console.log('Handling bid amendment, bid:', bidToAmend);
      
      // Determine bid status
      const bidStatus = getBidStatus(bidToAmend.price, clearingPrice);
      console.log('Bid status:', bidStatus, 'Clearing price:', clearingPrice);
      
      // If the bid is below clearing price, set the price to the clearing price
      // Otherwise, keep the original bid price
      const priceToUse = bidToAmend.price < clearingPrice ? clearingPrice : bidToAmend.price;
      console.log('Price to use for amendment:', priceToUse);
      
      // Always set these values regardless of user interaction
      setTokenAmount(bidToAmend.tokenAmount);
      setRawTokenAmountInput(bidToAmend.tokenAmount.toString());
      setRawTotalCostInput((priceToUse * bidToAmend.tokenAmount).toLocaleString());
      setIsAmending(true);
      
      // For all bid types, set the price once and don't track clearing price changes
      if (bidStatus === 'outbid') {
        console.log('Outbid bid - setting price to clearing price once');
        
        // Set the bid price to the clearing price for outbid bids
        setBidPrice(clearingPrice);
        setActiveBidButton('match');
        
        // For outbid bids, we still want to mark that this is an increase bid action
        // but we don't want to track clearing price changes
        setIncreaseBidClicked(true);
        setUserInteracted(true); // Prevent any automatic updates
        setUserSelectedPrice(true); // Mark as user-selected price
      } else {
        // For competitive/at-risk bids, keep the original bid price
        console.log('Competitive/at-risk bid - keeping original bid price:', bidToAmend.price);
        setBidPrice(bidToAmend.price);
        setActiveBidButton('match'); // This will show as "Original Bid" for competitive/at-risk bids
        
        // Mark that user has interacted to prevent automatic updates
        if (setUserInteracted) {
          setUserInteracted(true);
          console.log('Setting userInteracted to true for competitive/at-risk bid');
        }
        setUserSelectedPrice(true);
      }
      
      // Set percentage of funds
      const maxCost = userBalance;
      const percentageOfFunds = Math.min(100, Math.round(((priceToUse * bidToAmend.tokenAmount) / maxCost) * 100));
      setSelectedPercentage(percentageOfFunds);
      
      console.log('Bid to amend set with fixed price, not following clearing price');
    } else {
      setIsAmending(false);
    }
  }, [bidToAmend]); // Remove clearingPrice from dependencies to prevent updates when it changes
  
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
    if (setUserInteracted) {
      setUserInteracted(true);
    }
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
  
  // Calculate tokens based on percentage of available funds
  const calculateTokensByPercentage = (percentage) => {
    // Calculate how many tokens the user can afford with the percentage of their available funds
    const fundsToUse = (percentage / 100) * userBalance;
    const tokens = Math.floor((fundsToUse / bidPrice) * 1000) / 1000;
    return Math.max(0.001, Math.min(tokens, totalTokens)); // Ensure between 0.001 and totalTokens
  };
  
  const handleBidPriceChange = (e) => {
    // Mark that the user has interacted with the panel - do this FIRST to prevent any race conditions
    if (setUserInteracted) {
      setUserInteracted(true);
      console.log('User manually changed bid price - setting userInteracted to true');
    }
    
    // Set flags to indicate user has explicitly selected a price
    setUserSelectedPrice(true);
    
    // Reset percentage selection flag when manually typing a price
    setUserSelectedPercentage(false);
    
    // Reset the increase bid clicked flag
    setIncreaseBidClicked(false);
    
    // Mark that we've set the initial price (prevents clearing price from affecting bid price)
    
    // Get the raw input value
    const inputValue = e.target.value;
    
    // Store the raw input directly in state to allow typing decimal points
    // This is important for allowing the user to type decimal points
    if (inputValue === '.') {
      setBidPrice('0.');
      return;
    }
    
    // If the input is empty or just a dollar sign, set a default
    if (!inputValue || inputValue === '$') {
      setBidPrice(0);
      return;
    }
    
    // Remove non-numeric characters except decimal point
    const numericValue = inputValue.replace(/[^0-9.]/g, '');
    
    // Allow typing a decimal point without immediately parsing to float
    if (numericValue.endsWith('.')) {
      setBidPrice(numericValue);
      return;
    }
    
    // Limit to 2 decimal places
    const decimalParts = numericValue.split('.');
    let formattedValue = decimalParts[0];
    if (decimalParts.length > 1) {
      formattedValue += '.' + decimalParts[1].substring(0, 2);
    }
    
    const value = parseFloat(formattedValue) || 0;
    
    // If amending a competitive or at-risk bid, don't allow price to go below original price
    if (isAmending && bidToAmend && 
        getBidStatus(bidToAmend.price, clearingPrice) !== 'outbid' && 
        value < bidToAmend.price) {
      // Revert to original bid price
      setBidPrice(bidToAmend.price);
      // Show alert
      alert('You cannot place a bid lower than your existing bid price when amending a competitive or at-risk bid.');
      return;
    }
    
    // Update the bid price
    setBidPrice(value);
    console.log('User manually set bid price to:', value);
    
    // Clear active button when manually changing price
    setActiveBidButton('');
    
    // Recalculate token amount based on selected percentage and new price
    if (selectedPercentage > 0) {
      setTokenAmount(calculateTokensByPercentage(selectedPercentage));
    }
  };
  
  // Handle bid price adjustment by $500 increments
  const handleAdjustBidPrice = (amount) => {
    // Mark that the user has interacted with the panel
    if (setUserInteracted) {
      setUserInteracted(true);
      console.log('User adjusted bid price - setting userInteracted to true');
    }
    
    // Set flags to indicate user has explicitly selected a price
    setUserSelectedPrice(true);
    
    // Reset percentage selection flag
    setUserSelectedPercentage(false);
    
    // Reset the increase bid clicked flag
    setIncreaseBidClicked(false);
    
    // Calculate new bid price
    const currentPrice = bidPrice || clearingPrice;
    const newPrice = Math.max(0, currentPrice + amount);
    
    // If amending a competitive or at-risk bid, don't allow price to go below original price
    if (isAmending && bidToAmend && 
        getBidStatus(bidToAmend.price, clearingPrice) !== 'outbid' && 
        newPrice < bidToAmend.price) {
      // Show alert
      alert('You cannot place a bid lower than your existing bid price when amending a competitive or at-risk bid.');
      return;
    }
    
    // Update the bid price
    setBidPrice(newPrice);
    console.log('User adjusted bid price to:', newPrice);
    
    // Clear active button when manually changing price
    setActiveBidButton('');
    
    // Recalculate token amount based on selected percentage and new price
    if (selectedPercentage > 0) {
      setTokenAmount(calculateTokensByPercentage(selectedPercentage));
    }
  };
  
  const handleTokenAmountChange = (e) => {
    // Mark that the user has interacted with the panel
    if (setUserInteracted) {
      setUserInteracted(true);
    }
    // Reset the increaseBidClicked flag to prevent clearing price from affecting bid price
    setIncreaseBidClicked(false);
    
    // Mark that we've set the initial price (prevents clearing price from affecting bid price)
    
    // Store the raw input value
    const inputValue = e.target.value;
    setRawTokenAmountInput(inputValue);
    
    // If the input is empty, reset values but don't force a minimum
    if (inputValue === '') {
      setTokenAmount(0);
      setSelectedPercentage(0);
      return;
    }
    
    console.log('User changed token amount, fixing bid price at:', bidPrice);
    
    // Parse as float to allow for decimal values
    const value = parseFloat(inputValue);
    
    // Only proceed if it's a valid number
    if (!isNaN(value)) {
      // Round to 3 decimal places and ensure maximum of totalTokens
      const roundedValue = Math.round(value * 1000) / 1000;
      
      // If amending a competitive or at-risk bid, don't allow token amount to go below original amount
      if (isAmending && bidToAmend && 
          getBidStatus(bidToAmend.price, clearingPrice) !== 'outbid' && 
          roundedValue < bidToAmend.tokenAmount) {
        // Revert to original token amount
        setTokenAmount(bidToAmend.tokenAmount);
        setRawTokenAmountInput(bidToAmend.tokenAmount.toString());
        alert('You cannot reduce the token amount when amending a competitive or at-risk bid.');
        return;
      }
      
      setTokenAmount(Math.min(roundedValue, totalTokens));
      // Clear percentage selection when manually entering tokens
      setSelectedPercentage(0);
    }
  };
  
  const handleQuickBid = (percentage) => {
    // Mark that the user has interacted with the panel - do this FIRST to prevent any race conditions
    if (setUserInteracted) {
      setUserInteracted(true);
      console.log('User clicked quick bid button - setting userInteracted to true');
    }
    
    // Mark that the user has explicitly selected a price
    setUserSelectedPrice(true);
    
    // Mark that the user has selected a percentage button
    setUserSelectedPercentage(true);
    
    // Reset the increase bid clicked flag
    setIncreaseBidClicked(false);
    
    // Mark that we've set the initial price (prevents clearing price from affecting bid price)
    
    // Use original bid price as reference for competitive/at-risk bids being amended
    // Otherwise use clearing price
    let referencePrice = clearingPrice;
    if (isAmending && bidToAmend && getBidStatus(bidToAmend.price, clearingPrice) !== 'outbid') {
      referencePrice = bidToAmend.price;
    }
    
    // Calculate new bid price based on percentage above reference price
    // Round to exactly 2 decimal places
    const newBidPrice = parseFloat((referencePrice * (1 + percentage / 100)).toFixed(2));
    setBidPrice(newBidPrice);
    
    // Set the active button based on percentage
    setActiveBidButton(`plus${percentage}`);
    
    // Recalculate total cost based on selected token amount and new price
    const newTotalCost = tokenAmount * newBidPrice;
    setTotalCost(newTotalCost);
    setRawTotalCostInput(newTotalCost.toLocaleString());
    
    console.log('User clicked quick bid button +' + percentage + '%, updating bid price to:', newBidPrice, '(+' + percentage + '% above reference price)');
  };
  
  const handleMatchClearingPrice = () => {
    // Mark that the user has interacted with the panel
    if (setUserInteracted) {
      setUserInteracted(true);
    }
    // Mark that the user has explicitly selected a price
    setUserSelectedPrice(true);
    // Reset percentage selection flag when using match/original bid
    setUserSelectedPercentage(false);
    setIncreaseBidClicked(false);
    
    // Mark that we've set the initial price (prevents clearing price from affecting bid price)
    
    // For competitive/at-risk bids being amended, use original bid price
    // Otherwise use clearing price + 0.1%
    if (isAmending && bidToAmend && getBidStatus(bidToAmend.price, clearingPrice) !== 'outbid') {
      setBidPrice(bidToAmend.price);
    } else {
      // Set bid price to 0.1% above clearing price, rounded to 2 decimal places
      const minimumBidPrice = parseFloat((clearingPrice * 1.001).toFixed(2));
      setBidPrice(minimumBidPrice);
    }
    
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
  
  const handlePercentageClick = (percentage) => {
    // Mark that the user has interacted with the panel
    if (setUserInteracted) {
      setUserInteracted(true);
    }
    // Mark that the user has selected a percentage
    setUserSelectedPercentage(true);
    
    // Set the selected percentage
    setSelectedPercentage(percentage);
    setUserSelectedPercentage(true);
    
    // Calculate the token amount based on the percentage
    const tokens = (percentage / 100) * (userBalance / bidPrice);
    // Round to 3 decimal places and ensure between 0.001 and totalTokens
    const roundedTokens = Math.round(tokens * 1000) / 1000;
    const newTokenAmount = Math.max(0.001, Math.min(roundedTokens, totalTokens));
    
    // Update the token amount with 3 decimal places
    setTokenAmount(newTokenAmount);
    setRawTokenAmountInput(newTokenAmount.toFixed(3));
    
    // Don't reset the active bid button when selecting token amount
  };
  
  // Calculate token amount based on percentage directly
  const calculateTokensFromPercentage = (percentage) => {
    // Calculate the token amount based on the percentage
    const tokens = (percentage / 100) * (userBalance / bidPrice);
    // Round to 3 decimal places and ensure between 0.001 and totalTokens
    const roundedTokens = Math.round(tokens * 1000) / 1000;
    return Math.max(0.001, Math.min(roundedTokens, totalTokens));
  };
  
  // Handle slider click (for clicking on the track)
  const handleSliderChange = (e) => {
    // Get the slider container dimensions
    const sliderRect = e.currentTarget.getBoundingClientRect();
    
    // Calculate percentage based on click position
    const clickX = e.clientX - sliderRect.left;
    const sliderWidth = sliderRect.width;
    let percentage = Math.round((clickX / sliderWidth) * 100);
    
    // Clamp percentage between 0 and 100
    percentage = Math.max(0, Math.min(100, percentage));
    
    // Update with the same logic as percentage buttons
    handlePercentageClick(percentage);
  };
  
  // Handle slider drag with direct updates for smooth movement
  const handleSliderDrag = () => {
    // Mark that the user has interacted with the panel
    if (setUserInteracted) {
      setUserInteracted(true);
    }
    
    // Get the slider container for reference
    const sliderContainer = document.querySelector('.slider-container');
    const sliderRect = sliderContainer.getBoundingClientRect();
    
    const handleMouseMove = (e) => {
      // Calculate percentage based on current mouse position
      const moveX = Math.max(0, Math.min(e.clientX - sliderRect.left, sliderRect.width));
      const sliderWidth = sliderRect.width;
      let percentage = Math.round((moveX / sliderWidth) * 100);
      
      // Clamp percentage between 0 and 100
      percentage = Math.max(0, Math.min(100, percentage));
      
      // Update the selected percentage directly (controls the slider position)
      setSelectedPercentage(percentage);
      setUserSelectedPercentage(true);
      
      // Calculate and update token amount directly without going through handlePercentageClick
      const newTokenAmount = calculateTokensFromPercentage(percentage);
      setTokenAmount(newTokenAmount);
      setRawTokenAmountInput(newTokenAmount.toFixed(3));
      
      // Reset active button when manually changing percentage
      setActiveBidButton('');
    };
    
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };
  
  const handleThumbMouseDown = (e) => {
    e.stopPropagation(); // Prevent triggering handleSliderChange
    e.preventDefault(); // Prevent text selection during drag
    handleSliderDrag();
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!bidPrice || !tokenAmount) {
      alert('Please enter both bid price and token amount');
      return;
    }
    
    if (isAmending && bidToAmend && getBidStatus(bidToAmend.price, clearingPrice) !== 'outbid') {
      if (bidPrice < bidToAmend.price) {
        alert('You cannot place a bid lower than your existing bid price when amending a competitive or at-risk bid.');
        return;
      }
      
      if (tokenAmount < bidToAmend.tokenAmount) {
        alert('You cannot reduce the token amount when amending a competitive or at-risk bid.');
        return;
      }
    }
    
    if (totalCost > userBalance) {
      // Calculate how much more funds are needed
      const additionalFundsNeeded = totalCost - userBalance;
      setAdditionalFundsNeeded(additionalFundsNeeded);
      setShowFundsModal(true);
      return;
    }
    
    // Submit the bid - pass the bid ID if we're amending
    if (isAmending && bidToAmend) {
      // For amendments, calculate the difference in cost
      const originalBidCost = bidToAmend.price * bidToAmend.tokenAmount;
      const newBidCost = bidPrice * tokenAmount;
      const costDifference = newBidCost - originalBidCost;
      
      // Only reduce balance if the new bid costs more than the original
      if (costDifference > 0) {
        setUserBalance(prevBalance => prevBalance - costDifference);
      } else if (costDifference < 0) {
        // Refund the difference if the new bid costs less
        setUserBalance(prevBalance => prevBalance - costDifference); // Negative difference means adding to balance
      }
      
      onPlaceBid(bidPrice, tokenAmount, bidToAmend.id);
      // Show success message for amendment
      alert(`Bid modified successfully! ${tokenAmount} tokens at $${bidPrice.toLocaleString()} each.`);
    } else {
      // For new bids, reduce the balance by the total cost
      setUserBalance(prevBalance => prevBalance - totalCost);
      
      onPlaceBid(bidPrice, tokenAmount);
      // Show success message for new bid
      alert(`Bid placed successfully! ${tokenAmount} tokens at $${bidPrice.toLocaleString()} each.`);
    }
    
    // Reset form - but don't automatically set to clearing price
    // Instead, let the useEffect handle this based on user interaction state
    setTokenAmount(0);
    setRawTokenAmountInput('');
    setRawTotalCostInput('');
    setSelectedPercentage(0);
    setIsAmending(false);
    
    // Reset user interaction flags - this will allow the useEffect to update the bid price
    // to the clearing price on the next render cycle
    if (setUserInteracted) {
      setUserInteracted(false);
      console.log('Bid submitted, resetting userInteracted to false');
    }
    setUserSelectedPrice(false);
    setUserSelectedPercentage(false);
    // We no longer need to reset initialPriceSet as we don't auto-update with clearing price
    
    // We don't set the bid price or active button here
    // The useEffect will handle this on the next render cycle based on the user interaction flags
    setIncreaseBidClicked(false);
    
    // If we were amending, call the cancel amend function to reset parent state
    if (isAmending && onCancelAmend) {
      handleCancelAmend();
    }
  };
  
  // Handle canceling bid amendment
  const handleCancelAmend = (event) => {
    try {
      // If event exists, prevent default behavior
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      
      // Reset all form state - but don't automatically set to clearing price
      // Let the useEffect handle this based on user interaction state
      setIsAmending(false);
      
      // Reset user interaction flags - this will allow the useEffect to update the bid price
      // to the clearing price on the next render cycle
      if (setUserInteracted) {
        setUserInteracted(false);
        console.log('Cancel amend clicked, resetting userInteracted to false');
      }
      
      // Reset form fields
      setTokenAmount(0);
      setRawTokenAmountInput('');
      setRawTotalCostInput('');
      setSelectedPercentage(0);
      setUserSelectedPrice(false);
      setUserSelectedPercentage(false);
      
      // We don't set the bid price or active button here
      // The useEffect will handle this on the next render cycle based on the user interaction flags
      setIncreaseBidClicked(false);
      
      // Call the parent component's cancel function with a try/catch to prevent errors
      if (onCancelAmend) {
        try {
          onCancelAmend(event);
          console.log('Successfully called parent onCancelAmend');
        } catch (parentError) {
          console.error('Error in parent onCancelAmend:', parentError);
        }
      }
      
      console.log('Successfully cancelled amendment in BidPanel');
    } catch (error) {
      console.error('Error in handleCancelAmend:', error);
      // Prevent the screen from going blank by handling errors
    }
  };
  
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
              value={bidPrice === 0 ? '' : bidPrice} 
              onChange={handleBidPriceChange}
              onBlur={() => {
                if (bidPrice > 0) {
                  // Always display with 2 decimal places
                  // Use toFixed(2) to ensure .00 is shown for whole numbers
                  // But store as string to preserve the .00 display
                  setBidPrice(bidPrice.toFixed(2));
                }
              }}
              placeholder="Enter bid price"
              autoComplete="off"
            />
            <AdjustmentButton 
              type="button" 
              onClick={() => handleAdjustBidPrice(0.50)}
              aria-label="Increase bid by $0.50"
            >
              +
            </AdjustmentButton>
            <AdjustmentButton 
              type="button" 
              onClick={() => handleAdjustBidPrice(-0.50)}
              aria-label="Decrease bid by $0.50"
            >
              -
            </AdjustmentButton>
          </InputContainer>
          <QuickBidOptions>
            <QuickBidButton 
              type="button"
              onClick={handleMatchClearingPrice}
              style={{ width: '100%' }}
              className={activeBidButton === 'match' ? 'active' : ''}
            >
              {isAmending && bidToAmend && getBidStatus(bidToAmend.price, clearingPrice) !== 'outbid' ? 
                'Original Bid' : `Minimum Bid ($${(clearingPrice * 1.001).toFixed(2)})`}
            </QuickBidButton>
            <PercentageButtonsRow>
              <QuickBidButton 
                type="button"
                onClick={() => handleQuickBid(1)}
                className={activeBidButton === 'plus1' ? 'active' : ''}
              >
                +1%
                <span className="price-text">${((isAmending && bidToAmend && getBidStatus(bidToAmend.price, clearingPrice) !== 'outbid' ? bidToAmend.price : clearingPrice) * 1.01).toFixed(2)}</span>
              </QuickBidButton>
              <QuickBidButton 
                type="button"
                onClick={() => handleQuickBid(3)}
                className={activeBidButton === 'plus3' ? 'active' : ''}
              >
                +3%
                <span className="price-text">${((isAmending && bidToAmend && getBidStatus(bidToAmend.price, clearingPrice) !== 'outbid' ? bidToAmend.price : clearingPrice) * 1.03).toFixed(2)}</span>
              </QuickBidButton>
              <QuickBidButton 
                type="button"
                onClick={() => handleQuickBid(5)}
                className={activeBidButton === 'plus5' ? 'active' : ''}
              >
                +5%
                <span className="price-text">${((isAmending && bidToAmend && getBidStatus(bidToAmend.price, clearingPrice) !== 'outbid' ? bidToAmend.price : clearingPrice) * 1.05).toFixed(2)}</span>
              </QuickBidButton>
            </PercentageButtonsRow>
          </QuickBidOptions>
        </FormGroup>
        
        <FormGroup>
          <FormLabel>{`Amount (${propertyAddress})`}</FormLabel>
          
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
            <AmountLabel>Hermitage</AmountLabel>
          </AmountContainer>
          
          {/* Interactive slider for token amount */}
          <SliderContainer onClick={handleSliderChange} className="slider-container">
            <SliderTrack>
              <SliderFill percentage={selectedPercentage} />
            </SliderTrack>
            <SliderThumb 
              percentage={selectedPercentage} 
              onMouseDown={handleThumbMouseDown}
            />
          </SliderContainer>
          
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
          <GoldLabel>Total Amount</GoldLabel>
          <InputContainer>
            <CurrencySymbol>$</CurrencySymbol>
            <Input 
              id="total-bid-input"
              type="text" 
              value={rawTotalCostInput} 
              onChange={handleTotalBidChange}
              placeholder="Enter total amount"
              aria-label="Total amount"
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
          <SummaryLabel>Ownership:</SummaryLabel>
          <SummaryValue>{((tokenAmount / totalTokens) * 100).toFixed(2)}%</SummaryValue>
        </SummaryRow>
        
        {isAmending ? (
          <>
            <PlaceBidButton type="submit" disabled={!bidPrice || !tokenAmount || bidPrice < parseFloat((clearingPrice * 1.001).toFixed(2))}>
              Modify Bid
            </PlaceBidButton>
            <CancelButton type="button" onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              try {
                handleCancelAmend(event);
              } catch (error) {
                console.error('Error in CancelButton click:', error);
              }
            }}>
              ✕ Keep Current Bid
            </CancelButton>
            <ImportantNote>
              Note: Successful bids will be filled at the final clearance price, not your bid. For a bid to be successful, it must remain at or above the auction clearing price.
            </ImportantNote>
          </>
        ) : (
          <>
            <PlaceBidButton type="submit" disabled={!bidPrice || !tokenAmount || bidPrice < parseFloat((clearingPrice * 1.001).toFixed(2))}>
              Place Bid
            </PlaceBidButton>
            <ImportantNote>
              Note: Successful bids will be filled at the final clearance price, not your bid. For a bid to be successful, it must remain at or above the auction clearing price.
            </ImportantNote>
          </>
        )}
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
