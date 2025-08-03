/**
 * Trade/Swap Page - FUTURE FEATURE
 * 
 * This page is temporarily hidden from navigation and will be released
 * when more properties are listed on the platform.
 * 
 * The page allows users to trade/swap between different properties.
 */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaSearch, FaExchangeAlt } from 'react-icons/fa';
import AssetSelector from './components/AssetSelector';
import FilterBar from './components/FilterBar';
import PriceChart from './components/PriceChart';
import TradeForm from './components/TradeForm';

const PageContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 2rem;
  color: var(--color-text);
`;

const PageHeader = styled.div`
  margin-bottom: 2rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const PageDescription = styled.p`
  color: var(--color-text-secondary);
  font-size: 1rem;
`;

const TradeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 80px 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
  min-height: 480px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    min-height: auto;
  }
`;

const SwapButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const SwapButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--color-card);
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background-color: var(--color-accent);
    color: #000;
    transform: scale(1.05);
  }
  
  svg {
    font-size: 1.5rem;
  }
`;

const ChartSection = styled.div`
  margin-top: 2rem;
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
`;

const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ChartTitle = styled.h2`
  font-size: 1.25rem;
  margin: 0;
`;

const ChartToggle = styled.div`
  display: flex;
  align-items: center;
`;

const ToggleLabel = styled.span`
  margin-right: 0.5rem;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
`;

const Toggle = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #333;
    transition: .4s;
    border-radius: 24px;
    
    &:before {
      position: absolute;
      content: "";
      height: 18px;
      width: 18px;
      left: 3px;
      bottom: 3px;
      background-color: white;
      transition: .4s;
      border-radius: 50%;
    }
  }
  
  input:checked + span {
    background-color: var(--color-accent);
  }
  
  input:checked + span:before {
    transform: translateX(24px);
  }
`;

// Mock data for assets
const mockAssets = [
  // Luxury Properties
  {
    id: 1,
    name: "28 Wentworth Road",
    location: "Vaucluse, Sydney",
    category: "Luxury Property",
    imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    price: 125000,
    owned: true,
    quantity: 2.5
  },
  {
    id: 2,
    name: "42 Wolseley Road",
    location: "Point Piper, Sydney",
    category: "Luxury Property",
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    price: 150000,
    owned: true,
    quantity: 1.2
  },
  {
    id: 3,
    name: "15 Roslyndale Avenue",
    location: "Woollahra, Sydney",
    category: "Luxury Property",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    price: 98500,
    owned: false
  },
  {
    id: 6,
    name: "35 Victoria Road",
    location: "Bellevue Hill, Sydney",
    category: "Luxury Property",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    price: 115000,
    owned: false
  },
  {
    id: 7,
    name: "18 Carrara Road",
    location: "Vaucluse, Sydney",
    category: "Luxury Property",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    price: 89000,
    owned: true,
    quantity: 0.8
  },
  {
    id: 8,
    name: "22 Coolong Road",
    location: "Vaucluse, Sydney",
    category: "Luxury Property",
    imageUrl: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    price: 132000,
    owned: false
  },
  
  // Industrial Properties
  {
    id: 9,
    name: "Warehouse Complex",
    location: "Alexandria, Sydney",
    category: "Industrial Property",
    imageUrl: "https://images.unsplash.com/photo-1565610222536-ef125c59f7c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    price: 78000,
    owned: true,
    quantity: 1.5
  },
  {
    id: 10,
    name: "Distribution Center",
    location: "Mascot, Sydney",
    category: "Industrial Property",
    imageUrl: "https://images.unsplash.com/photo-1553522911-d52ba5ba02e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    price: 92000,
    owned: false
  },
  {
    id: 11,
    name: "Tech Park Facility",
    location: "Macquarie Park, Sydney",
    category: "Industrial Property",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    price: 105000,
    owned: true,
    quantity: 0.7
  },
  {
    id: 12,
    name: "Industrial Warehouse",
    location: "Alexandria, Sydney",
    category: "Industrial Property",
    imageUrl: "https://images.unsplash.com/photo-1553522911-d9f4e5bcc9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    price: 200000,
    owned: false
  }
];

const Trade = () => {
  const [fromAsset, setFromAsset] = useState(null);
  const [toAsset, setToAsset] = useState(null);
  const [showChart, setShowChart] = useState(true);
  const [ownedAssets, setOwnedAssets] = useState([]);
  const [availableAssets, setAvailableAssets] = useState([]);
  const [amount, setAmount] = useState('');
  const [estimatedValue, setEstimatedValue] = useState(0);
  
  // Initialize assets
  useEffect(() => {
    const owned = mockAssets.filter(asset => asset.owned);
    setOwnedAssets(owned);
    
    if (owned.length > 0) {
      setFromAsset(owned[0]);
    }
  }, []);
  
  // Update available assets when fromAsset changes
  useEffect(() => {
    if (fromAsset) {
      const available = mockAssets.filter(asset => asset.id !== fromAsset.id);
      setAvailableAssets(available);
      
      if (!toAsset || toAsset.id === fromAsset.id) {
        setToAsset(available[0]);
      }
    }
  }, [fromAsset]);
  
  // Calculate estimated value when amount or assets change
  useEffect(() => {
    if (fromAsset && toAsset && amount) {
      const exchangeRate = toAsset.price / fromAsset.price;
      setEstimatedValue(parseFloat(amount) * exchangeRate);
    } else {
      setEstimatedValue(0);
    }
  }, [fromAsset, toAsset, amount]);
  
  const handleSwap = () => {
    const temp = fromAsset;
    setFromAsset(toAsset);
    setToAsset(temp);
    setAmount('');
  };
  
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Trade between Properties</PageTitle>
        <PageDescription>
          Exchange your tokenized assets for other available assets in the marketplace.
        </PageDescription>
      </PageHeader>
      
      <TradeContainer>
        <AssetSelector 
          title="From"
          assets={ownedAssets}
          selectedAsset={fromAsset}
          onSelectAsset={setFromAsset}
          showOwned={true}
        />
        
        <SwapButtonContainer>
          <SwapButton onClick={handleSwap}>
            <FaExchangeAlt />
          </SwapButton>
        </SwapButtonContainer>
        
        <AssetSelector 
          title="To"
          assets={availableAssets}
          selectedAsset={toAsset}
          onSelectAsset={setToAsset}
          showOwned={false}
        />
      </TradeContainer>
      
      <TradeForm 
        fromAsset={fromAsset}
        toAsset={toAsset}
        amount={amount}
        setAmount={setAmount}
        estimatedValue={estimatedValue}
      />
      
      <ChartSection>
        <ChartHeader>
          <ChartTitle>Price Chart</ChartTitle>
          <ChartToggle>
            <ToggleLabel>Show Chart</ToggleLabel>
            <Toggle>
              <input 
                type="checkbox" 
                checked={showChart} 
                onChange={() => setShowChart(!showChart)}
              />
              <span></span>
            </Toggle>
          </ChartToggle>
        </ChartHeader>
        
        {showChart && (
          <PriceChart 
            fromAsset={fromAsset}
            toAsset={toAsset}
          />
        )}
      </ChartSection>
    </PageContainer>
  );
};

export default Trade;
