import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { purchaseIPOTokens } from '../../services/ipoService';

const FormContainer = styled.div`
  background-color: #1e2329;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
`;

const FormTitle = styled.h2`
  font-size: 24px;
  color: #eaecef;
  margin-bottom: 24px;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  color: #b7bdc6;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  background-color: #2b3139;
  border: 1px solid #474d57;
  border-radius: 4px;
  color: #eaecef;
  transition: all 0.2s;
  
  &:focus {
    border-color: #f0b90b;
    outline: none;
  }
  
  &::placeholder {
    color: #5e6673;
  }
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 14px;
`;

const InfoLabel = styled.span`
  color: #b7bdc6;
`;

const InfoValue = styled.span`
  color: #eaecef;
  font-weight: 500;
`;

const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0;
  padding-top: 16px;
  border-top: 1px solid #2b3139;
  font-size: 16px;
`;

const TotalLabel = styled.span`
  color: #eaecef;
  font-weight: 500;
`;

const TotalValue = styled.span`
  color: #f0b90b;
  font-weight: 600;
  font-size: 18px;
`;

const Button = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #f0b90b;
  color: #0b0e11;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: #f8d12f;
  }
  
  &:disabled {
    background-color: #5e6673;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: #f6465d;
  font-size: 14px;
  margin-top: 8px;
`;

const SuccessMessage = styled.div`
  color: #0ecb81;
  font-size: 14px;
  margin-top: 8px;
  text-align: center;
`;

const IPOPurchaseForm = ({ property }) => {
  const [tokenAmount, setTokenAmount] = useState('');
  const [totalCost, setTotalCost] = useState(0);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const { isAuthenticated, currentUser } = useAuth();
  const navigate = useNavigate();
  
  const tokenPrice = property?.tokenPrice || 50; // Default price if not provided
  const minPurchase = property?.minPurchase || 1; // Minimum tokens to purchase
  const maxPurchase = property?.maxPurchase || 1000; // Maximum tokens to purchase
  const availableTokens = property?.availableTokens || 10000; // Total available tokens
  
  useEffect(() => {
    // Calculate total cost whenever token amount changes
    if (tokenAmount && !isNaN(tokenAmount)) {
      setTotalCost(parseFloat(tokenAmount) * tokenPrice);
    } else {
      setTotalCost(0);
    }
  }, [tokenAmount, tokenPrice]);
  
  const handleInputChange = (e) => {
    const value = e.target.value;
    setTokenAmount(value);
    setError('');
  };
  
  const validateForm = () => {
    if (!isAuthenticated) {
      setError('You must be logged in to purchase tokens');
      return false;
    }
    
    if (!tokenAmount || isNaN(tokenAmount)) {
      setError('Please enter a valid number of tokens');
      return false;
    }
    
    const amount = parseFloat(tokenAmount);
    
    if (amount < minPurchase) {
      setError(`Minimum purchase is ${minPurchase} tokens`);
      return false;
    }
    
    if (amount > maxPurchase) {
      setError(`Maximum purchase is ${maxPurchase} tokens`);
      return false;
    }
    
    if (amount > availableTokens) {
      setError(`Only ${availableTokens} tokens available`);
      return false;
    }
    
    return true;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Call the purchase service
      const result = await purchaseIPOTokens(property.id, parseFloat(tokenAmount));
      
      if (result.success) {
        setSuccess(true);
        setTokenAmount('');
        // Reset form after 3 seconds
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      } else {
        setError(result.message || 'Failed to complete purchase');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('Purchase error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleLoginRedirect = () => {
    navigate('/login', { state: { from: `/ipo/${property.id}` } });
  };
  
  return (
    <FormContainer>
      <FormTitle>Purchase IPO Tokens</FormTitle>
      
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="tokenAmount">Number of Tokens</Label>
          <Input
            id="tokenAmount"
            type="number"
            value={tokenAmount}
            onChange={handleInputChange}
            placeholder={`Min: ${minPurchase}, Max: ${maxPurchase}`}
            disabled={isSubmitting}
          />
        </FormGroup>
        
        <InfoRow>
          <InfoLabel>Token Price:</InfoLabel>
          <InfoValue>${tokenPrice.toLocaleString()}</InfoValue>
        </InfoRow>
        
        <InfoRow>
          <InfoLabel>Available Tokens:</InfoLabel>
          <InfoValue>{availableTokens.toLocaleString()}</InfoValue>
        </InfoRow>
        
        <TotalRow>
          <TotalLabel>Total Cost:</TotalLabel>
          <TotalValue>${totalCost.toLocaleString()}</TotalValue>
        </TotalRow>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>Purchase successful! Tokens will be added to your portfolio.</SuccessMessage>}
        
        {isAuthenticated ? (
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Processing...' : 'Buy Now'}
          </Button>
        ) : (
          <Button type="button" onClick={handleLoginRedirect}>
            Login to Purchase
          </Button>
        )}
      </form>
    </FormContainer>
  );
};

export default IPOPurchaseForm;
