import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

const FormTitle = styled.h3`
  font-size: 1.25rem;
  margin: 0 0 1.5rem 0;
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const InputLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  margin-bottom: 0.5rem;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: 0.5rem 1rem;
  
  &:focus-within {
    border-color: var(--color-accent);
  }
`;

const Input = styled.input`
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1rem;
  width: 100%;
  outline: none;
  
  &::placeholder {
    color: var(--color-text-secondary);
  }
`;

const MaxButton = styled.button`
  background-color: rgba(var(--color-accent-rgb), 0.1);
  color: var(--color-accent);
  border: none;
  border-radius: var(--border-radius);
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: rgba(var(--color-accent-rgb), 0.2);
  }
`;

const AssetName = styled.span`
  color: var(--color-text-secondary);
  margin-left: 0.5rem;
`;

const EstimatedValue = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-top: 1px solid var(--color-border);
  margin-bottom: 1rem;
`;

const EstimatedLabel = styled.div`
  color: var(--color-text-secondary);
`;

const EstimatedAmount = styled.div`
  font-weight: 600;
`;

const FeeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  font-size: 0.875rem;
`;

const FeeLabel = styled.div`
  color: var(--color-text-secondary);
`;

const FeeAmount = styled.div``;

const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-top: 1px solid var(--color-border);
  margin: 1rem 0;
`;

const TotalLabel = styled.div`
  font-weight: 600;
`;

const TotalAmount = styled.div`
  font-weight: 600;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  flex: 1;
  background-color: ${props => props.primary ? 'var(--color-accent)' : 'transparent'};
  color: ${props => props.primary ? '#000' : 'var(--color-text)'};
  border: 1px solid ${props => props.primary ? 'var(--color-accent)' : 'var(--color-border)'};
  border-radius: var(--border-radius);
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${props => props.primary ? 'var(--color-accent)' : 'rgba(var(--color-accent-rgb), 0.1)'};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TradeForm = ({ fromAsset, toAsset, amount, setAmount, estimatedValue }) => {
  const [isReviewing, setIsReviewing] = useState(false);
  
  // Calculate fees (0.5% for demo)
  const fee = amount ? parseFloat(amount) * 0.005 : 0;
  
  // Calculate total amount to be sent
  const totalAmount = amount ? parseFloat(amount) + fee : 0;
  
  // Format estimated value
  const formattedEstimatedValue = estimatedValue ? estimatedValue.toFixed(6) : '0';
  
  // Check if user has enough balance
  const hasEnoughBalance = fromAsset && amount ? parseFloat(amount) <= fromAsset.quantity : false;
  
  // Handle max button click
  const handleMaxClick = () => {
    if (fromAsset) {
      setAmount(fromAsset.quantity.toString());
    }
  };
  
  // Handle review button click
  const handleReviewClick = () => {
    setIsReviewing(true);
  };
  
  // Handle back button click
  const handleBackClick = () => {
    setIsReviewing(false);
  };
  
  // Handle trade button click
  const handleTradeClick = () => {
    alert(`Trade executed! You traded ${amount} ${fromAsset.name.split(' ')[0]} for approximately ${formattedEstimatedValue} ${toAsset.name.split(' ')[0]}`);
    setAmount('');
    setIsReviewing(false);
  };
  
  return (
    <FormContainer>
      <FormTitle>{isReviewing ? 'Review Trade' : 'Trade Details'}</FormTitle>
      
      {!isReviewing ? (
        <>
          <InputGroup>
            <InputLabel>Amount to Trade</InputLabel>
            <InputContainer>
              <Input
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <MaxButton onClick={handleMaxClick}>MAX</MaxButton>
              {fromAsset && <AssetName>{fromAsset.name.split(' ')[0]}</AssetName>}
            </InputContainer>
          </InputGroup>
          
          <EstimatedValue>
            <EstimatedLabel>Estimated Value</EstimatedLabel>
            <EstimatedAmount>
              {formattedEstimatedValue} {toAsset ? toAsset.name.split(' ')[0] : ''}
            </EstimatedAmount>
          </EstimatedValue>
          
          <Button 
            primary 
            onClick={handleReviewClick}
            disabled={!amount || parseFloat(amount) <= 0 || !hasEnoughBalance}
          >
            {!hasEnoughBalance && amount ? 'Insufficient Balance' : 'Review Trade'}
          </Button>
        </>
      ) : (
        <>
          <FeeInfo>
            <FeeLabel>Amount</FeeLabel>
            <FeeAmount>{amount} {fromAsset.name.split(' ')[0]}</FeeAmount>
          </FeeInfo>
          
          <FeeInfo>
            <FeeLabel>Trading Fee (0.5%)</FeeLabel>
            <FeeAmount>{fee.toFixed(6)} {fromAsset.name.split(' ')[0]}</FeeAmount>
          </FeeInfo>
          
          <FeeInfo>
            <FeeLabel>You will receive approximately</FeeLabel>
            <FeeAmount>{formattedEstimatedValue} {toAsset.name.split(' ')[0]}</FeeAmount>
          </FeeInfo>
          
          <TotalContainer>
            <TotalLabel>Total</TotalLabel>
            <TotalAmount>{totalAmount.toFixed(6)} {fromAsset.name.split(' ')[0]}</TotalAmount>
          </TotalContainer>
          
          <ButtonContainer>
            <Button onClick={handleBackClick}>Back</Button>
            <Button primary onClick={handleTradeClick}>Execute Trade</Button>
          </ButtonContainer>
        </>
      )}
    </FormContainer>
  );
};

export default TradeForm;
