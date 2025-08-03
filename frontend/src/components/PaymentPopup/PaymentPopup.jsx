import React, { useState } from 'react';
import styled from 'styled-components';
import { BiCoin, BiWallet, BiCreditCard, BiX } from 'react-icons/bi';
import { FaBitcoin } from 'react-icons/fa';

// Styled components for the payment popup
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: linear-gradient(to right, #111, #1a1a1a);
  border-radius: 12px;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid rgba(212, 175, 55, 0.3);
  color: #fff;
  animation: slideIn 0.3s ease-out;
  
  @keyframes slideIn {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ModalTitle = styled.h3`
  font-size: 1.5rem;
  margin: 0;
  color: #fff;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  transition: color 0.2s;
  
  &:hover {
    color: #fff;
  }
`;

const BookingSummary = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  
  &:last-child {
    margin-bottom: 0;
    padding-top: 0.75rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    font-weight: 600;
  }
`;

const PaymentSectionTitle = styled.h4`
  font-size: 1.2rem;
  margin: 0 0 1rem 0;
  color: #fff;
`;

const PaymentOption = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 8px;
  background: ${props => props.isSelected ? 'rgba(0, 123, 255, 0.1)' : 'transparent'};
  border: 1px solid ${props => props.isSelected ? '#007bff' : 'rgba(255, 255, 255, 0.2)'};
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: rgba(0, 123, 255, 0.05);
    border-color: rgba(0, 123, 255, 0.5);
  }
`;

const PaymentIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  margin-right: 1rem;
  color: ${props => props.color || '#fff'};
`;

const PaymentDetails = styled.div`
  flex: 1;
`;

const PaymentTitle = styled.div`
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const PaymentDescription = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
`;

const RadioIndicator = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${props => props.isSelected ? '#007bff' : 'rgba(255, 255, 255, 0.5)'};
  margin-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::after {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #007bff;
    opacity: ${props => props.isSelected ? 1 : 0};
    transition: opacity 0.2s;
  }
`;

const PaymentMethodDetails = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  animation: expandIn 0.3s ease-out;
  
  @keyframes expandIn {
    from { max-height: 0; opacity: 0; }
    to { max-height: 500px; opacity: 1; }
  }
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const BackButton = styled.button`
  background: transparent;
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
  }
`;

const ConfirmButton = styled.button`
  background: linear-gradient(to right, #d4af37, #f2d35b);
  border: none;
  border-radius: 8px;
  padding: 0.75rem 1.5rem;
  color: #000;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: linear-gradient(to right, #f2d35b, #d4af37);
    transform: translateY(-2px);
  }
  
  &:disabled {
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.5);
    cursor: not-allowed;
    transform: none;
  }
`;

/**
 * Payment Popup Component for Reservations
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Whether the popup is open
 * @param {Function} props.onClose - Function to close the popup
 * @param {Function} props.onConfirm - Function to handle payment confirmation
 * @param {Array} props.selectedDates - Array of selected dates for the reservation
 * @param {number} props.totalCost - Total cost in tokens
 * @param {boolean} props.isOwnerRate - Whether owner rate is applied
 * @param {number} props.tokenPrice - Current token price in USD
 * @param {number} props.ownerRate - Owner rate per night in tokens
 * @param {number} props.marketRate - Market rate per night in tokens
 * @param {number} props.userTokenHoldings - User's token holdings
 * @param {string} props.propertyName - Name of the property
 */
const PaymentPopup = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  selectedDates, 
  totalCost, 
  isOwnerRate, 
  tokenPrice, 
  ownerRate, 
  marketRate, 
  userTokenHoldings,
  propertyName
}) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('tokens');
  
  if (!isOpen) return null;
  
  // Safe date handling
  const startDate = selectedDates && selectedDates[0] ? new Date(selectedDates[0]) : new Date();
  const endDate = selectedDates && selectedDates[1] ? new Date(selectedDates[1]) : new Date();
  
  // Calculate nights safely
  const nights = startDate && endDate ? 
    Math.max(1, Math.round((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))) : 1;
  
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };
  
  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
  };
  
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Complete Your Reservation</ModalTitle>
          <CloseButton onClick={onClose}>
            <BiX />
          </CloseButton>
        </ModalHeader>
        
        <BookingSummary>
          <SummaryItem>
            <span>Property</span>
            <span>{propertyName}</span>
          </SummaryItem>
          <SummaryItem>
            <span>Dates</span>
            <span>{formatDate(startDate)} - {formatDate(endDate)}</span>
          </SummaryItem>
          <SummaryItem>
            <span>Nights</span>
            <span>{nights}</span>
          </SummaryItem>
          <SummaryItem>
            <span>Rate per night</span>
            <span>
              {isOwnerRate ? 
                `${ownerRate.toFixed(4)} tokens (~$${(ownerRate * tokenPrice).toFixed(2)})` : 
                `${marketRate.toFixed(4)} tokens (~$${(marketRate * tokenPrice).toFixed(2)})`}
            </span>
          </SummaryItem>
          <SummaryItem>
            <span>Total</span>
            <span>{totalCost.toFixed(4)} tokens (~$${(totalCost * tokenPrice).toFixed(2)})</span>
          </SummaryItem>
        </BookingSummary>
        
        <PaymentSectionTitle>Select Payment Method</PaymentSectionTitle>
        
        <PaymentOption 
          isSelected={selectedPaymentMethod === 'tokens'} 
          onClick={() => handlePaymentMethodSelect('tokens')}
        >
          <PaymentIcon color="#d4af37">
            <BiCoin size={24} />
          </PaymentIcon>
          <PaymentDetails>
            <PaymentTitle>Loaf Tokens</PaymentTitle>
            <PaymentDescription>Pay with your Loaf token balance</PaymentDescription>
          </PaymentDetails>
          <RadioIndicator isSelected={selectedPaymentMethod === 'tokens'} />
        </PaymentOption>
        
        {selectedPaymentMethod === 'tokens' && (
          <PaymentMethodDetails>
            <div>Available balance: {userTokenHoldings.toFixed(4)} tokens</div>
            {userTokenHoldings < totalCost && (
              <div style={{ color: '#ff4d4d', marginTop: '0.5rem' }}>
                Insufficient balance. Please select another payment method.
              </div>
            )}
          </PaymentMethodDetails>
        )}
        
        <PaymentOption 
          isSelected={selectedPaymentMethod === 'deposit'} 
          onClick={() => handlePaymentMethodSelect('deposit')}
        >
          <PaymentIcon color="#4dabf7">
            <BiWallet size={24} />
          </PaymentIcon>
          <PaymentDetails>
            <PaymentTitle>Platform Deposit</PaymentTitle>
            <PaymentDescription>Use your available platform balance</PaymentDescription>
          </PaymentDetails>
          <RadioIndicator isSelected={selectedPaymentMethod === 'deposit'} />
        </PaymentOption>
        
        {selectedPaymentMethod === 'deposit' && (
          <PaymentMethodDetails>
            <div>Available balance: $1,500.00</div>
          </PaymentMethodDetails>
        )}
        
        <PaymentOption 
          isSelected={selectedPaymentMethod === 'fiat'} 
          onClick={() => handlePaymentMethodSelect('fiat')}
        >
          <PaymentIcon color="#82c91e">
            <BiCreditCard size={24} />
          </PaymentIcon>
          <PaymentDetails>
            <PaymentTitle>Credit/Debit Card</PaymentTitle>
            <PaymentDescription>Pay with your credit or debit card</PaymentDescription>
          </PaymentDetails>
          <RadioIndicator isSelected={selectedPaymentMethod === 'fiat'} />
        </PaymentOption>
        
        {selectedPaymentMethod === 'fiat' && (
          <PaymentMethodDetails>
            <div>Select a saved card or enter new card details</div>
            <div style={{ marginTop: '0.5rem' }}>
              <select style={{ 
                background: 'rgba(0, 0, 0, 0.3)', 
                color: '#fff', 
                padding: '0.5rem', 
                borderRadius: '4px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                width: '100%'
              }}>
                <option value="">Select a card</option>
                <option value="visa">Visa ending in 4242</option>
                <option value="mastercard">Mastercard ending in 5555</option>
                <option value="new">+ Add new card</option>
              </select>
            </div>
          </PaymentMethodDetails>
        )}
        
        <PaymentOption 
          isSelected={selectedPaymentMethod === 'crypto'} 
          onClick={() => handlePaymentMethodSelect('crypto')}
        >
          <PaymentIcon color="#f08c00">
            <FaBitcoin size={20} />
          </PaymentIcon>
          <PaymentDetails>
            <PaymentTitle>Cryptocurrency</PaymentTitle>
            <PaymentDescription>Pay with Bitcoin, Ethereum, or other cryptocurrencies</PaymentDescription>
          </PaymentDetails>
          <RadioIndicator isSelected={selectedPaymentMethod === 'crypto'} />
        </PaymentOption>
        
        {selectedPaymentMethod === 'crypto' && (
          <PaymentMethodDetails>
            <div>Select cryptocurrency:</div>
            <div style={{ marginTop: '0.5rem' }}>
              <select style={{ 
                background: 'rgba(0, 0, 0, 0.3)', 
                color: '#fff', 
                padding: '0.5rem', 
                borderRadius: '4px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                width: '100%'
              }}>
                <option value="btc">Bitcoin (BTC)</option>
                <option value="eth">Ethereum (ETH)</option>
                <option value="usdc">USD Coin (USDC)</option>
                <option value="usdt">Tether (USDT)</option>
              </select>
            </div>
          </PaymentMethodDetails>
        )}
        
        <ActionButtonsContainer>
          <BackButton onClick={onClose}>
            Back to Booking
          </BackButton>
          <ConfirmButton 
            onClick={() => onConfirm(selectedPaymentMethod)}
            disabled={selectedPaymentMethod === 'tokens' && userTokenHoldings < totalCost}
          >
            Confirm Payment
          </ConfirmButton>
        </ActionButtonsContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default PaymentPopup;
