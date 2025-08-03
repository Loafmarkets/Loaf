import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

// Styled components for the Buy page
const PageContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 1rem;
    box-sizing: border-box;
  }
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: var(--color-text);
`;

const SwapContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    max-width: 100%;
    padding: 0;
    box-sizing: border-box;
  }
`;

const TokenListContainer = styled.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  border: 1px solid var(--color-border);
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    margin: 0;
    box-sizing: border-box;
  }
`;

const TokenListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  
  h2 {
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

const TokenList = styled.div`
  display: flex;
  flex-direction: column;
`;

const TokenItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid var(--color-border);
  cursor: pointer;
  transition: background-color var(--transition-speed) ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.02);
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const TokenInfo = styled.div`
  display: flex;
  align-items: center;
  
  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 1rem;
  }
`;

const TokenName = styled.div`
  display: flex;
  flex-direction: column;
  
  span:first-child {
    font-weight: 500;
  }
  
  span:last-child {
    font-size: 0.8rem;
    color: var(--color-text-secondary);
  }
`;

const TokenPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  
  span:first-child {
    font-weight: 500;
  }
  
  span:last-child {
    font-size: 0.8rem;
    color: ${props => props.change >= 0 ? 'var(--color-positive)' : 'var(--color-negative)'};
  }
`;

const SwapFormContainer = styled.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  border: 1px solid var(--color-border);
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    margin: 0;
    box-sizing: border-box;
  }
`;

const SwapTabs = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-border);
`;

const SwapTab = styled.button`
  background: transparent;
  border: none;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  color: ${props => props.active ? 'var(--color-text)' : 'var(--color-text-secondary)'};
  border-bottom: 2px solid ${props => props.active ? 'var(--color-accent)' : 'transparent'};
  
  &:hover {
    color: var(--color-text);
    background: transparent;
  }
`;

const SwapForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SwapField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SwapFieldLabel = styled.label`
  font-size: 0.9rem;
  color: var(--color-text-secondary);
`;

const SwapInputContainer = styled.div`
  display: flex;
  background-color: var(--color-background-secondary);
  border-radius: var(--border-radius);
  border: 1px solid var(--color-border);
  overflow: hidden;
`;

const SwapInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  padding: 1rem;
  color: var(--color-text);
  font-size: 1rem;
  
  &:focus {
    outline: none;
  }
`;

const SwapSelectButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--color-background);
  border: none;
  padding: 0 1rem;
  
  img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  
  svg {
    width: 12px;
    height: 12px;
    margin-left: 0.5rem;
  }
`;

const SwapButton = styled.button`
  background-color: var(--color-accent);
  color: var(--color-background);
  font-weight: 600;
  padding: 1rem;
  border: none;
  border-radius: var(--border-radius);
  margin-top: 1rem;
  
  &:hover {
    background-color: var(--color-accent-hover);
  }
  
  &:disabled {
    background-color: var(--color-border);
    color: var(--color-text-secondary);
    cursor: not-allowed;
  }
`;

const HowToContainer = styled.div`
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    padding: 0;
    width: 100%;
  }
`;

const HowToTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const StepContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    max-width: 100%;
    margin: 0;
    box-sizing: border-box;
  }
`;

const Step = styled.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  border: 1px solid var(--color-border);
  
  h3 {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
    
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 24px;
      height: 24px;
      background-color: var(--color-accent);
      border-radius: 50%;
      font-size: 0.9rem;
    }
  }
  
  p {
    color: var(--color-text-secondary);
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    width: 100%;
    box-sizing: border-box;
  }
`;

const BuyPage = () => {
  const [activeTab, setActiveTab] = useState('buy');
  const [properties, setProperties] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useAuth();

  // Use mock data from Market page instead of API call
  const fetchProperties = () => {
    // Simulate API call to fetch properties from market
    setTimeout(() => {
      const mockProperties = [
        { 
          id: 1, 
          symbol: 'VAUC', 
          name: 'Vaucluse Mansion', 
          image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80', 
          price: 102520, 
          priceChange: 1.20,
          address: '42 Vaucluse Road, Vaucluse, Sydney'
        },
        { 
          id: 2, 
          symbol: 'POIN', 
          name: 'Point Piper Estate', 
          image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80', 
          price: 145750, 
          priceChange: 2.35,
          address: '24 Wolseley Road, Point Piper, Sydney'
        },
        { 
          id: 3, 
          symbol: 'BELV', 
          name: 'Bellevue Hill Mansion', 
          image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80', 
          price: 98500, 
          priceChange: -0.75,
          address: '18 Victoria Road, Bellevue Hill, Sydney'
        },
        { 
          id: 4, 
          symbol: 'DBAY', 
          name: 'Double Bay Penthouse', 
          image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80', 
          price: 78300, 
          priceChange: 3.42,
          address: '15 Cross Street, Double Bay, Sydney'
        },
        { 
          id: 5, 
          symbol: 'TOOR', 
          name: 'Toorak Mansion', 
          image: 'https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80', 
          price: 115250, 
          priceChange: -1.05,
          address: '27 St Georges Road, Toorak, Melbourne'
        },
      ];
      setProperties(mockProperties);
      setSelectedProperty(mockProperties[0]);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handlePropertySelect = (property) => {
    setSelectedProperty(property);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Handle buy/sell logic here
    console.log('Transaction:', {
      type: activeTab,
      property: selectedProperty,
      amount
    });
    
    // Show success message or redirect
    alert(`${activeTab === 'buy' ? 'Bought' : 'Sold'} ${amount} tokens of ${selectedProperty.name}`);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <PageContainer>
      <PageTitle>Buy Property Tokens</PageTitle>
      
      <SwapContainer>
        <TokenListContainer>
          <TokenListHeader>
            <h2>Hot Properties</h2>
          </TokenListHeader>
          
          <TokenList>
            {properties.map((property) => (
              <TokenItem 
                key={property.id} 
                onClick={() => handlePropertySelect(property)}
                style={{ backgroundColor: selectedProperty?.id === property.id ? 'rgba(255, 255, 255, 0.05)' : 'transparent' }}
              >
                <TokenInfo>
                  <img src={property.image} alt={property.symbol} />
                  <TokenName>
                    <span>{property.symbol}</span>
                    <span>{property.name}</span>
                  </TokenName>
                </TokenInfo>
                <TokenPrice change={property.priceChange}>
                  <span>{formatPrice(property.price)}</span>
                  <span>{property.priceChange > 0 ? '+' : ''}{property.priceChange}%</span>
                </TokenPrice>
              </TokenItem>
            ))}
          </TokenList>
        </TokenListContainer>
        
        <SwapFormContainer>
          <SwapTabs>
            <SwapTab 
              active={activeTab === 'buy'} 
              onClick={() => handleTabChange('buy')}
            >
              Buy
            </SwapTab>
            <SwapTab 
              active={activeTab === 'sell'} 
              onClick={() => handleTabChange('sell')}
            >
              Sell
            </SwapTab>
          </SwapTabs>
          
          <SwapForm onSubmit={handleSubmit}>
            <SwapField>
              <SwapFieldLabel>{activeTab === 'buy' ? 'Spend' : 'Receive'}</SwapFieldLabel>
              <SwapInputContainer>
                <SwapInput 
                  type="number" 
                  placeholder="0.00" 
                  value={amount} 
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
                <SwapSelectButton type="button">
                  USD
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 10l5 5 5-5H7z" />
                  </svg>
                </SwapSelectButton>
              </SwapInputContainer>
            </SwapField>
            
            <SwapField>
              <SwapFieldLabel>{activeTab === 'buy' ? 'Receive' : 'Spend'}</SwapFieldLabel>
              <SwapInputContainer>
                <SwapInput 
                  type="number" 
                  placeholder="0.00" 
                  value={amount ? (amount / selectedProperty?.price).toFixed(4) : ''} 
                  readOnly
                />
                <SwapSelectButton type="button">
                  {selectedProperty && (
                    <>
                      <img src={selectedProperty.image} alt={selectedProperty.symbol} />
                      {selectedProperty.symbol}
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 10l5 5 5-5H7z" />
                      </svg>
                    </>
                  )}
                </SwapSelectButton>
              </SwapInputContainer>
            </SwapField>
            
            {selectedProperty && (
              <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                1 {selectedProperty.symbol} = {formatPrice(selectedProperty.price)}
              </div>
            )}
            
            <SwapButton 
              type="submit" 
              disabled={!amount || !selectedProperty || !isAuthenticated}
            >
              {!isAuthenticated 
                ? 'Log In/Sign Up' 
                : `${activeTab === 'buy' ? 'Buy' : 'Sell'} ${selectedProperty?.symbol}`}
            </SwapButton>
          </SwapForm>
        </SwapFormContainer>
      </SwapContainer>
      
      <HowToContainer>
        <HowToTitle>How to Buy Property Tokens</HowToTitle>
        <StepContainer>
          <Step>
            <h3><span>1</span> Enter Amount & Select Property</h3>
            <p>Enter the amount you want to spend and select the property token you wish to purchase. Our platform tokenizes premium real estate into affordable shares.</p>
          </Step>
          <Step>
            <h3><span>2</span> Confirm Order</h3>
            <p>Review your order details including the property information, token price, quantity, and total cost. Confirm your purchase to proceed with the transaction.</p>
          </Step>
          <Step>
            <h3><span>3</span> Receive Property Tokens</h3>
            <p>After confirmation, the purchased property tokens will be deposited into your wallet. You can track your portfolio performance and manage your real estate investments.</p>
          </Step>
        </StepContainer>
      </HowToContainer>
    </PageContainer>
  );
};

export default BuyPage;
