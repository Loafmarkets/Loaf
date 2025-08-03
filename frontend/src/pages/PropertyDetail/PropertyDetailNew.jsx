import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { BiEditAlt, BiImage, BiVideo, BiCube, BiChevronDown, BiChevronUp, BiCoin, BiCalendarCheck, BiLineChart, BiDollar, BiCreditCard } from 'react-icons/bi';
import { FaPercentage, FaHandshake, FaKey } from 'react-icons/fa';
import { MdHowToVote } from 'react-icons/md';

import styled from 'styled-components';
import { usePrice } from '../../context/PriceContext';
import PriceChart from '../../components/PriceChart/PriceChart';

import OrderBook from '../../components/OrderBook/OrderBook';
import TradePanel from '../../components/TradePanel';
import PositionsPanel from '../../components/PositionsPanel';
import MarketTradesPanel from '../../components/MarketTradesPanel/MarketTradesPanel';
import OwnerBooking from './OwnerBooking';
import PropertyIcons from '../../components/PropertyCard/PropertyIcons';
import { propertyService, tokenService } from '../../services/api';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Utility functions for slug conversion
// Utility function to create a slug from a property name
const createSlugFromName = (name) => {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
};

// Calculate position for price indicator on valuation bar
const calculatePositionFromPrice = (price, undervaluedPrice, fairValue, overvaluedPrice) => {
  // If price is less than undervalued threshold
  if (price <= undervaluedPrice) {
    return 0; // Left edge
  }
  // If price is greater than overvalued threshold
  if (price >= overvaluedPrice) {
    return 100; // Right edge
  }
  
  // Calculate position between thresholds
  if (price < fairValue) {
    // Between undervalued and fair value (0-50%)
    return 50 * (price - undervaluedPrice) / (fairValue - undervaluedPrice);
  } else {
    // Between fair value and overvalued (50-100%)
    return 50 + 50 * (price - fairValue) / (overvaluedPrice - fairValue);
  }
};

const getPropertyIdFromSlug = (slug) => {
  // In a real app, you would query your database to find the property by slug
  // For now, we'll just map some known slugs to IDs
  const slugToIdMap = {
    '28-wentworth-road': 1,
    '15-blue-point-road': 2,
    '42-vaucluse-road': 3,
    '8-carrara-road': 4,
    '17-olola-avenue': 5,
    '23-victoria-street': 6
  };
  
  return slugToIdMap[slug] || 1; // Default to ID 1 if slug not found
};

const getSlugFromPropertyId = (id) => {
  // In a real app, you would query your database to find the property by ID
  // For now, we'll just map some known IDs to slugs
  const idToSlugMap = {
    1: '28-wentworth-road',
    2: '15-blue-point-road',
    3: '42-vaucluse-road',
    4: '8-carrara-road',
    5: '17-olola-avenue',
    6: '23-victoria-street'
  };
  
  return idToSlugMap[id] || '28-derby-street-elara'; // Default to 28 Derby Street (Elara) if ID not found
};

// Main container
const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  color: var(--color-text, #f8f9fa);
  font-family: var(--font-family, 'Inter', sans-serif);
`;

// Property selector dropdown
const PropertySelectorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: rgba(30, 32, 38, 0.95);
  border-radius: 8px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const PropertySelector = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem 0;
  flex: 1;
  
  &:hover {
    .dropdown-icon {
      transform: translateY(2px);
    }
  }
`;

const PropertyAddress = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  
  svg {
    margin-left: 0.5rem;
    transition: transform 0.2s;
  }
`;

const PropertySelectorDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-width: 400px;
  background-color: var(--color-card);
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 100;
  overflow: hidden;
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

const PropertySelectorOption = styled.div`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const PropertySelectorName = styled.div`
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const PropertySelectorSubtitle = styled.div`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
`;

const CompareButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 1px solid var(--color-accent);
  color: var(--color-accent);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  svg {
    margin-right: 0.5rem;
  }
  
  &:hover {
    background-color: rgba(240, 185, 11, 0.1);
  }
`;

// Hero section with large property image
const HeroSection = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

const PropertyImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  max-width: none;
  min-width: 120%;
  min-height: 120%;
  margin: 0;
  padding: 0;
  transform: scale(1.0);
  transform-origin: center;
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;

const PropertyInfo = styled.div`
  display: inline-block;
  width: auto;
  max-width: 70%;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
`;

const PropertyName = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const PropertyLocation = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
`;

const PropertyPrice = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-accent, #f0b90b);
  margin-left: 1rem;
  padding-left: 1rem;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
`;

const PriceChangeIndicator = styled.span`
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.isPositive ? 'var(--color-positive, #0ecb81)' : 'var(--color-negative, #f6465d)'};
  animation: float 3s ease-in-out infinite;
  
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-3px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  
  svg {
    margin-right: 0.15rem;
  }
`;

const PropertyFeatures = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
`;

const OwnershipInfo = styled.div`
  font-size: 0.95rem;
  color: var(--color-accent, #f0b90b);
  font-weight: 600;
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
    width: 16px;
    height: 16px;
  }
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
    width: 18px;
    height: 18px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ActionButton = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const TradeButton = styled(ActionButton)`
  background-color: var(--color-accent, #f0b90b);
  color: black;
  border: none;
  
  &:hover {
    background-color: var(--color-accent-hover, #f8d12f);
  }
`;

const OfferButton = styled(ActionButton)`
  background-color: transparent;
  border: 1px solid var(--color-accent, #f0b90b);
  color: var(--color-accent, #f0b90b);
  
  &:hover {
    background-color: rgba(240, 185, 11, 0.1);
  }
`;

// Tab navigation
const TabsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 2rem;
  overflow-x: auto;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const MediaButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const MediaButton = styled.button`
  background-color: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: 4px;
  padding: 6px 12px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 5px;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    border-color: var(--color-accent);
    color: var(--color-accent);
  }
`;

const NotificationIndicator = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 8px;
  height: 8px;
  background-color: ${props => props.color || '#f6465d'};
  border-radius: 50%;
  animation: pulse 1.5s infinite;
  
  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(246, 70, 93, 0.7);
    }
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 5px rgba(246, 70, 93, 0);
    }
    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(246, 70, 93, 0);
    }
  }
`;

const Tab = styled.div`
  padding: 1rem 1.5rem;
  font-weight: ${props => props.active ? '600' : '400'};
  color: ${props => props.active ? 'var(--color-accent)' : 'var(--color-text-secondary)'};
  border-bottom: 2px solid ${props => props.active ? 'var(--color-accent)' : 'transparent'};
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s;
  position: relative;
  
  &:hover {
    color: ${props => props.active ? 'var(--color-accent)' : 'var(--color-text)'};
  }
`;

// Content sections
const ContentSection = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
  margin-top: 1.5rem;
  
  &.trade-console {
    margin: 0 -2rem;
    padding: 1.5rem 2rem;
    background-color: var(--color-background-darker, #0a0a0a);
    border-radius: 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    max-width: 100vw;
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
  }
`;

// Overview tab content
const OverviewGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const OverviewLeft = styled.div``;

const OverviewRight = styled.div``;

const PropertyDescription = styled.div`
  margin-bottom: 2rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const MetricCard = styled.div`
  background-color: rgba(30, 32, 38, 0.95);
  border-radius: 8px;
  padding: 1.25rem;
`;

const MetricValue = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
`;

const MetricLabel = styled.div`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
`;

const OwnershipBenefitsContainer = styled.div`
  margin-top: 2rem;
  background-color: rgba(30, 32, 38, 0.95);
  border-radius: 8px;
  padding: 1.5rem;
  grid-column: 1 / -1; /* Make it span full width */
  width: 100%;
`;

const OwnershipBenefitsTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: var(--color-text);
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.75rem;
    color: var(--color-accent);
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  transition: all 0.2s ease;
  height: 100%;
  
  &:hover {
    transform: translateY(-2px);
    background-color: rgba(255, 255, 255, 0.08);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const BenefitIcon = styled.div`
  width: 36px;
  height: 36px;
  min-width: 36px;
  border-radius: 50%;
  background-color: rgba(240, 185, 11, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  
  svg {
    width: 18px;
    height: 18px;
    color: var(--color-accent);
  }
`;

const BenefitContent = styled.div`
  flex: 1;
`;

const BenefitTitle = styled.h4`
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-text);
`;

const BenefitDescription = styled.p`
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
  margin: 0;
`;

// Trade tab content
const TradeAssetSelector = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.75rem 1rem;
  background-color: var(--color-card-darker, #111);
  border-radius: 8px;
  border: 1px solid var(--color-border);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

const AssetSelectorDropdown = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem 0;
  
  &:hover {
    opacity: 0.9;
  }
`;

const AssetName = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--color-text);
  
  svg {
    margin-left: 0.5rem;
    transition: transform 0.2s ease;
  }
`;

const PropertyDropdown = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  right: 0;
  background-color: var(--color-card-dark);
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  z-index: 100;
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid var(--color-border);
  margin-top: 0.5rem;
`;

const PropertyOption = styled.div`
  padding: 0.75rem 1rem;
  cursor: pointer;
  background-color: ${props => props.selected ? 'rgba(56, 97, 251, 0.1)' : 'transparent'};
  border-left: ${props => props.selected ? '3px solid var(--color-accent)' : '3px solid transparent'};
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

const PropertyOptionName = styled.div`
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--color-text);
`;

const PropertyOptionLocation = styled.div`
  font-size: 0.8rem;
  color: var(--color-text-secondary);
  margin-top: 0.25rem;
`;

const TradeLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto auto;
  gap: 1.5rem;
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
  
  /* First child (place order panel) spans only first column */
  & > div:first-child {
    grid-column: 1 / 2;
  }
  
  /* BottomPanelsContainer spans both columns */
  & > div:last-child {
    grid-column: 1 / -1;
  }
`;

const TradeContainer = styled.div`
  background-color: var(--color-background);
  border-radius: 8px;
  overflow: hidden;
`;



const ChartSection = styled.div`
  background-color: var(--color-card-darker, #111);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  height: 450px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  
  .chart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    
    .chart-title-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    
    .price-display {
      margin-top: 8px;
    }
    
    .price-main {
      display: flex;
      align-items: baseline;
      margin-bottom: 2px;
      
      .price-value-container {
        display: flex;
        align-items: baseline;
        color: #fff;
        
        &.flash-increase {
          color: #0ecb81 !important;
          /* No transition - immediate color change */
        }
        
        &.flash-decrease {
          color: #f6465d !important;
          /* No transition - immediate color change */
        }
      }
      
      .price-value {
        font-size: 24px;
        font-weight: 700;
        color: inherit;
      }
      
      .last-digit {
        font-size: 24px;
        font-weight: 700;
        
        &.last-digit-increase {
          color: #0ecb81;
        }
        
        &.last-digit-decrease {
          color: #f6465d;
        }
      }
      
      .price-currency {
        font-size: 14px;
        color: #999;
        margin-left: 4px;
      }
    }
    
    .price-changes {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      font-weight: 500;
    }
    
    .price-change, .absolute-change {
      &.positive {
        color: #0ecb81;
      }
      
      &.negative {
        color: #f6465d;
      }
    }
  }
  
  .chart-controls {
    display: flex;
    gap: 0.5rem;
  }
  
  .chart-btn {
    background-color: var(--color-card-dark);
    border: 1px solid var(--color-border);
    color: var(--color-text-secondary);
    padding: 0.25rem 0.75rem;
    border-radius: 4px;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
      background-color: var(--color-accent-dark);
      color: var(--color-text);
    }
    
    &.active {
      background-color: var(--color-accent);
      color: var(--color-text);
      border-color: var(--color-accent);
    }
  }
  
  .chart-container {
    flex: 1;
    position: relative;
    overflow: hidden;
  }
  
  .chart-grid {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  
  .chart-grid-line {
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.05);
  }
  
  .chart-grid-line.vertical {
    top: 0;
    bottom: 0;
    width: 1px;
    height: auto;
  }
  
  .chart-line {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 30%;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--color-accent) 10%, var(--color-accent) 90%, transparent);
    box-shadow: 0 0 8px var(--color-accent);
    opacity: 0.7;
  }
`;

const OrderSection = styled.div`
  display: flex;
  gap: 1.5rem;
  height: 350px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const OrderBookSection = styled.div`
  flex: 1;
  background-color: var(--color-card-darker, #111);
  border-radius: 8px;
  padding: 1.25rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border);
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  h3 {
    margin: 0;
    font-size: 1.1rem;
    color: var(--color-text);
  }
  
  .section-controls {
    display: flex;
    gap: 0.75rem;
    
    span {
      font-size: 0.85rem;
      color: var(--color-text-secondary);
      cursor: pointer;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      
      &:hover {
        color: var(--color-text);
      }
      
      &.active {
        color: var(--color-accent);
        background-color: rgba(0, 123, 255, 0.1);
      }
    }
  }
  
  .order-book-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  
  .order-book-header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--color-border);
    font-size: 0.85rem;
    color: var(--color-text-secondary);
  }
  
  .order-book-sells, .order-book-buys {
    flex: 1;
    overflow-y: auto;
    position: relative;
    scrollbar-width: thin;
    scrollbar-color: var(--color-border) transparent;
    
    &::-webkit-scrollbar {
      width: 6px;
    }
    
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: var(--color-border);
      border-radius: 3px;
    }
  }
  
  .order-book-sells {
    display: flex;
    flex-direction: column;
  }
  
  .order-book-buys {
    display: flex;
    flex-direction: column;
  }
  
  .order-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0.35rem 0;
    font-size: 0.9rem;
    position: relative;
    
    .depth-indicator {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 0;
      opacity: 0.1;
    }
    
    &.sell .depth-indicator {
      background-color: #f6465d;
    }
    
    &.buy .depth-indicator {
      background-color: #0ecb81;
    }
    
    .price {
      &.up {
        color: #0ecb81;
      }
      
      &.down {
        color: #f6465d;
      }
      
      &.neutral {
        &.sell {
          color: #f6465d;
        }
        
        &.buy {
          color: #0ecb81;
        }
      }
    }
    
    > div {
      position: relative;
      z-index: 1;
    }
  }
  
  .order-book-current-price {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0.5rem 0;
    background-color: rgba(0, 123, 255, 0.05);
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
    
    .current-price {
      font-weight: bold;
      display: flex;
      align-items: center;
      gap: 8px;
      
      &.increasing {
        color: #0ecb81;
      }
      
      &.decreasing {
        color: #f6465d;
      }
    }
    
    .price-change {
      color: #0ecb81;
      font-size: 0.9rem;
      &.negative {
        color: #f6465d;
      }
    }
  }
`;

const MarketTradesSection = styled.div`
  flex: 1;
  background-color: var(--color-card-darker, #111);
  border-radius: 8px;
  padding: 1.25rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border);
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  h3 {
    margin: 0;
    font-size: 1.1rem;
    color: var(--color-text);
  }
  
  .section-controls {
    display: flex;
    gap: 0.75rem;
    
    span {
      font-size: 0.85rem;
      color: var(--color-text-secondary);
      cursor: pointer;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      
      &:hover {
        color: var(--color-text);
      }
      
      &.active {
        color: var(--color-accent);
        background-color: rgba(0, 123, 255, 0.1);
      }
    }
  }
  
  .market-trades-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  
  .market-trades-header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--color-border);
    font-size: 0.85rem;
    color: var(--color-text-secondary);
  }
  
  .market-trades-list {
    flex: 1;
    overflow-y: auto;
  }
  
  .trade-row {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0.35rem 0;
    font-size: 0.9rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.03);
    
    &:last-child {
      border-bottom: none;
    }
    
    &.buy .price {
      color: #0ecb81;
    }
    
    &.sell .price {
      color: #f6465d;
    }
    
    .time {
      color: var(--color-text-secondary);
      font-size: 0.85rem;
    }
  }
`;

const OrdersSection = styled.div`
  background-color: var(--color-card-darker, #111);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border);
  flex: 0 0 calc(66.667% - 1.5rem);
  max-width: calc(66.667% - 1.5rem);
  height: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  h3 {
    margin: 0;
    font-size: 1.1rem;
    color: var(--color-text);
  }
`;

const OrdersList = styled.div`
  flex: 1;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--color-accent) rgba(255, 255, 255, 0.1);
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-accent);
    border-radius: 3px;
  }
`;

const OrdersHeader = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr 1fr 1fr 1fr 1fr 1.2fr 0.8fr;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.75rem;
  color: var(--color-text-secondary);
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const HeaderItem = styled.div`
  text-align: ${props => props.align || 'left'};
`;

const OrderItem = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr 1fr 1fr 1fr 1fr 1.2fr 0.8fr;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
`;

const OrderType = styled.span`
  font-weight: 500;
  color: ${props => props.type === 'buy' ? '#0ecb81' : '#f6465d'};
`;

const OrderPrice = styled.div`
  font-weight: 500;
`;

const OrderAmount = styled.div`
  font-weight: 500;
`;

const OrderTotal = styled.div`
  font-weight: 500;
`;

const OrderDate = styled.div`
  font-weight: 500;
  text-align: left;
`;

const OrderAsset = styled.div`
  font-weight: 500;
`;

const FilledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const FilledText = styled.div`
  font-weight: 500;
  font-size: 0.875rem;
`;

const ProgressBarContainer = styled.div`
  width: 80%;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
`;

const ProgressBarFill = styled.div`
  height: 100%;
  background-color: var(--color-accent);
  border-radius: 3px;
  transition: width 0.3s ease-in-out;
  width: ${props => props.percentage}%;
`;

const EditIconButton = styled.button`
  background-color: transparent;
  color: var(--color-text-secondary);
  border: none;
  padding: 0;
  margin-left: 0.25rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;
  font-size: 0.875rem;
  
  &:hover {
    color: var(--color-accent);
  }
  
  &:active {
    transform: translateY(1px);
  }
`;

const CancelButton = styled.button`
  background-color: transparent;
  color: var(--color-text-secondary);
  border: 1px solid var(--color-text-secondary);
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(246, 70, 93, 0.1);
    color: #f6465d;
    border-color: #f6465d;
  }
  
  &:active {
    transform: translateY(1px);
  }
`;

// Trade News Panel components
const BottomPanelsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;
  width: 100%;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const TradeNewsPanel = styled.div`
  background-color: var(--color-card-darker, #111);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border);
  flex: 0 0 33.333%;
  max-width: 33.333%;
  height: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
`;

const TradeNewsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  
  h3 {
    margin: 0;
    font-size: 1.1rem;
    color: var(--color-text);
  }
`;

const TradeNewsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
  overflow-y: auto;
`;

const TradeNewsItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
    transform: translateY(-2px);
  }
`;

const TradeNewsTitle = styled.h4`
  font-size: 0.9375rem;
  font-weight: 500;
  margin: 0 0 0.5rem 0;
`;

const TradeNewsInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  color: var(--color-text-secondary);
`;

const TradeNewsDate = styled.span``;

const TradeNewsCategory = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background-color: ${props => props.type === 'property' ? 'rgba(14, 203, 129, 0.1)' : 'rgba(240, 185, 11, 0.1)'};
  color: ${props => props.type === 'property' ? '#0ecb81' : 'var(--color-accent, #f0b90b)'};
  font-weight: 500;
`;



const TradePanelSection = styled.div`
  background-color: var(--color-card-darker, #111);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  
  h3 {
    margin: 0;
    font-size: 1.1rem;
    color: var(--color-text);
  }
  
  .section-controls {
    display: flex;
    gap: 0.75rem;
    
    span {
      font-size: 0.85rem;
      color: var(--color-text-secondary);
      cursor: pointer;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      
      &:hover {
        color: var(--color-text);
      }
      
      &.active {
        color: var(--color-accent);
        background-color: rgba(0, 123, 255, 0.1);
      }
    }
  }
  
  .trade-tabs {
    display: flex;
    margin-bottom: 1.5rem;
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid var(--color-border);
  }
  
  .trade-tab {
    flex: 1;
    background: none;
    border: none;
    padding: 0.75rem;
    font-size: 1rem;
    color: var(--color-text-secondary);
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.05);
    }
    
    &.active {
      background-color: var(--color-accent);
      color: #000;
    }
    
    &:first-child {
      border-right: 1px solid var(--color-border);
      
      &.active {
        border-right-color: transparent;
      }
    }
  }
  
  .trade-form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
    label {
      font-size: 0.9rem;
      color: var(--color-text-secondary);
    }
  }
  
  .input-group {
    display: flex;
    border: 1px solid var(--color-border);
    border-radius: 6px;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.2);
    
    input {
      flex: 1;
      background: none;
      border: none;
      padding: 0.75rem 1rem;
      color: var(--color-text);
      font-size: 1rem;
      
      &:focus {
        outline: none;
      }
    }
    
    .input-addon {
      display: flex;
      align-items: center;
      padding: 0 1rem;
      background-color: rgba(0, 0, 0, 0.2);
      color: var(--color-text-secondary);
      font-size: 0.9rem;
      border-left: 1px solid var(--color-border);
    }
  }
  
  .trade-slider {
    margin: 0.5rem 0;
    
    .slider-labels {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      
      span {
        font-size: 0.8rem;
        color: var(--color-text-secondary);
      }
    }
    
    .slider-track {
      position: relative;
      height: 6px;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 3px;
      margin: 0.75rem 0;
    }
    
    .slider-fill {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      background-color: var(--color-accent);
      border-radius: 3px;
    }
    
    .slider-handle {
      position: absolute;
      top: 50%;
      width: 16px;
      height: 16px;
      background-color: var(--color-accent);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      cursor: pointer;
      box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
    }
  }
  
  .trade-summary {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    padding: 1rem;
    margin-top: 0.5rem;
    
    .summary-row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
      
      &:last-child {
        margin-bottom: 0;
      }
      
      span:first-child {
        color: var(--color-text-secondary);
      }
      
      span:last-child {
        color: var(--color-text);
      }
    }
  }
  
  .trade-button {
    margin-top: 1rem;
    padding: 1rem;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &.buy {
      background-color: #0ecb81;
      color: white;
      
      &:hover {
        background-color: #0bb974;
      }
    }
    
    &.sell {
      background-color: #f6465d;
      color: white;
      
      &:hover {
        background-color: #e73a51;
      }
    }
  }
`;

// Past Sales tab content
const FilterButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const FilterButton = styled.button`
  background-color: ${props => props.active ? 'var(--color-accent, #f0b90b)' : 'transparent'};
  color: ${props => props.active ? '#000' : '#fff'};
  border: 1px solid var(--color-accent, #f0b90b);
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--color-accent, #f0b90b)' : 'rgba(240, 185, 11, 0.1)'};
  }
`;

const OwnershipHeader = styled.div`
  background-color: rgba(30, 32, 38, 0.7);
  border-bottom: 1px solid rgba(240, 185, 11, 0.15);
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListedHeader = styled(OwnershipHeader)`
  background-color: rgba(30, 32, 38, 0.7);
  border-bottom: 1px solid rgba(240, 185, 11, 0.3);
`;

const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  
  /* Solid timeline showing linear relationship */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 1rem;
    width: 1px;
    background-color: rgba(240, 185, 11, 0.15);
    z-index: 0;
  }
`;

const HistoryTableHeader = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 0.5rem;
  table-layout: fixed;
  
  th {
    text-align: left;
    padding: 0.75rem 1rem;
    font-weight: 600;
    font-size: 0.9rem;
    color: var(--color-text-secondary);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  /* Match column widths with SalesTable */
  th:nth-child(1) { width: 15%; }
  th:nth-child(2) { width: 20%; }
  th:nth-child(3) { width: 15%; }
  th:nth-child(4) { width: 20%; }
  th:nth-child(5) { width: 30%; }
`;

const HistoryPanel = styled.div`
  margin-bottom: 1.5rem;
  margin-left: 2rem;
  border: 1px solid rgba(240, 185, 11, 0.15);
  border-radius: 8px;
  background-color: rgba(30, 32, 38, 0.3);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -2rem;
    width: 1.5rem;
    height: 2px;
    background-color: rgba(240, 185, 11, 0.3);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: -2rem;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgba(240, 185, 11, 0.8);
    transform: translateY(-50%);
    box-shadow: 0 0 0 4px rgba(30, 32, 38, 0.6);
  }
  
  ${props => props.isLoafListing && `
    background-color: rgba(30, 32, 38, 0.1);
    border-color: rgba(240, 185, 11, 0.05);
    
    &::after {
      background-color: rgba(240, 185, 11, 0.4);
    }
  `}
`;

const LeaseSection = styled.div`
  margin: 0.3rem 1rem;
  padding: 0.3rem 1rem 0.3rem;
  background-color: rgba(30, 32, 38, 0.2);
  border-radius: 6px;
  border-left: 2px solid rgba(255, 255, 255, 0.15);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -0.3rem;
    left: 1rem;
    width: 1px;
    height: 0.3rem;
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

// Styled components for the event details
const EventSummaryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

const EventSummaryContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  gap: 1rem;
`;

const ExpandButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const EventDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem 0;
  position: relative;
`;

const EventDetailRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const DetailLabel = styled.span`
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  width: 120px;
  flex-shrink: 0;
`;

const DetailValue = styled.span`
  font-size: 0.9rem;
  color: var(--color-text-primary);
  flex-grow: 1;
`;

const EventActionButton = styled.button`
  background-color: rgba(0, 114, 229, 0.1);
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  border-radius: 4px;
  padding: 0.3rem 0.8rem;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: var(--color-primary);
    color: white;
  }
`;

const EventDetails = ({ event }) => {
  const [expanded, setExpanded] = useState(false);
  
  const handleViewPlans = () => {
    // This would open plans in a modal or new page
    alert(`Viewing plans for ${event.type}: ${event.id}`);
  };
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  
  // Render event details based on type
  const renderEventDetails = () => {
    switch(event.type) {
      case 'Leased':
        return (
          <>
            <EventDetailRow>
              <DetailLabel>Lease Date:</DetailLabel>
              <DetailValue>{event.date}</DetailValue>
            </EventDetailRow>
            <EventDetailRow>
              <DetailLabel>Lease Term:</DetailLabel>
              <DetailValue>{event.leaseTerm || '12 months'}</DetailValue>
            </EventDetailRow>
            <EventDetailRow>
              <DetailLabel>Weekly Rate:</DetailLabel>
              <DetailValue>{event.weeklyRate || event.price}</DetailValue>
            </EventDetailRow>
            <EventDetailRow>
              <DetailLabel>Tenant:</DetailLabel>
              <DetailValue>{event.buyer}</DetailValue>
            </EventDetailRow>
            <EventDetailRow>
              <DetailLabel>Agent:</DetailLabel>
              <DetailValue>{event.agent}</DetailValue>
            </EventDetailRow>
            <EventActionButton onClick={() => alert('View lease agreement')}>
              View Lease Agreement
            </EventActionButton>
          </>
        );
      case 'Extended':
        return (
          <>
            <EventDetailRow>
              <DetailLabel>Completion Date:</DetailLabel>
              <DetailValue>{event.date}</DetailValue>
            </EventDetailRow>
            <EventDetailRow>
              <DetailLabel>Construction Time:</DetailLabel>
              <DetailValue>6 months</DetailValue>
            </EventDetailRow>
            <EventDetailRow>
              <DetailLabel>Cost:</DetailLabel>
              <DetailValue>{event.price}</DetailValue>
            </EventDetailRow>
            <EventDetailRow>
              <DetailLabel>Contractor:</DetailLabel>
              <DetailValue>{event.agent}</DetailValue>
            </EventDetailRow>
            <EventDetailRow>
              <DetailLabel>Description:</DetailLabel>
              <DetailValue>Extension to the eastern wing of the property, adding 120sqm of living space including a new master suite and expanded kitchen.</DetailValue>
            </EventDetailRow>
            <EventActionButton onClick={() => alert('View design plans')}>
              View Design Plans
            </EventActionButton>
          </>
        );
      case 'Rebuilt':
      case 'Renovated':
        return (
          <>
            <EventDetailRow>
              <DetailLabel>Completion Date:</DetailLabel>
              <DetailValue>{event.date}</DetailValue>
            </EventDetailRow>
            <EventDetailRow>
              <DetailLabel>Construction Time:</DetailLabel>
              <DetailValue>14 months</DetailValue>
            </EventDetailRow>
            <EventDetailRow>
              <DetailLabel>Cost:</DetailLabel>
              <DetailValue>{event.price}</DetailValue>
            </EventDetailRow>
            <EventDetailRow>
              <DetailLabel>Builder:</DetailLabel>
              <DetailValue>{event.agent}</DetailValue>
            </EventDetailRow>
            <EventDetailRow>
              <DetailLabel>Description:</DetailLabel>
              <DetailValue>Complete rebuild of the property, maintaining the heritage facade while modernizing all internal spaces and systems.</DetailValue>
            </EventDetailRow>
            <EventActionButton onClick={() => alert('View renovation details')}>
              View Design Plans
            </EventActionButton>
          </>
        );
      case 'DA Approval':
        return (
          <>
            <EventDetailRow>
              <DetailLabel>Approval Date:</DetailLabel>
              <DetailValue>{event.date}</DetailValue>
            </EventDetailRow>
            <EventDetailRow>
              <DetailLabel>Council:</DetailLabel>
              <DetailValue>{event.agent}</DetailValue>
            </EventDetailRow>
            <EventDetailRow>
              <DetailLabel>Application Fee:</DetailLabel>
              <DetailValue>{event.price}</DetailValue>
            </EventDetailRow>
            <EventActionButton onClick={() => alert('View approval documents')}>
              View Approval
            </EventActionButton>
          </>
        );
      case 'Rezoned':
        return (
          <>
            <EventDetailRow>
              <DetailLabel>Rezoning Date:</DetailLabel>
              <DetailValue>{event.date}</DetailValue>
            </EventDetailRow>
            <EventDetailRow>
              <DetailLabel>New Zoning:</DetailLabel>
              <DetailValue>R4 High Density Residential</DetailValue>
            </EventDetailRow>
            <EventDetailRow>
              <DetailLabel>Authority:</DetailLabel>
              <DetailValue>{event.agent}</DetailValue>
            </EventDetailRow>
            <EventActionButton onClick={() => alert('View zoning documents')}>
              View Zoning Documents
            </EventActionButton>
          </>
        );
      default:
        return (
          <>
            <EventDetailRow>
              <DetailLabel>Date:</DetailLabel>
              <DetailValue>{event.date}</DetailValue>
            </EventDetailRow>
            <EventDetailRow>
              <DetailLabel>Details:</DetailLabel>
              <DetailValue>{event.saleType}</DetailValue>
            </EventDetailRow>
          </>
        );
    }
  };
  
  return (
    <div>
      <EventSummaryContainer onClick={toggleExpand}>
        <EventSummaryContent>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <TypeBadge type={event.type}>
              {event.type === 'Sale' ? 'Sold' : event.type}
            </TypeBadge>
            <span style={{ marginLeft: '0.5rem' }}>{event.date}</span>
          </div>
          {/* Price removed from unopened headers */}
        </EventSummaryContent>
        <ExpandButton>
          {expanded ? <BiChevronUp size={20} /> : <BiChevronDown size={20} />}
        </ExpandButton>
      </EventSummaryContainer>
      
      {expanded && (
        <EventDetailsContainer>
          {renderEventDetails()}
        </EventDetailsContainer>
      )}
    </div>
  );
};


const LeaseHeader = styled.div`
  height: 4px;
  width: 40px;
  background-color: rgba(255, 255, 255, 0.15);
  margin-bottom: 0.75rem;
  border-radius: 2px;
`;

const OwnershipPeriodLabel = styled.div`
  font-weight: 600;
  color: var(--color-accent);
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  letter-spacing: 0.5px;
`;

const ListedPeriodLabel = styled(OwnershipPeriodLabel)`
  color: var(--color-accent, #f0b90b);
`;

const PercentGain = styled.span`
  font-size: 0.85rem;
  font-weight: 500;
  color: ${props => props.isPositive ? '#0ecb81' : '#f6465d'};
  margin-top: 6px;
  display: flex;
  align-items: center;
  
  &:before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${props => props.isPositive ? '#0ecb81' : '#f6465d'};
    margin-right: 6px;
  }
`;

const HistoryRow = styled.tr`
  background-color: ${props => props.isOwnershipStart ? 'rgba(240, 185, 11, 0.05)' : 'transparent'};
  
  td {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    font-size: 0.9rem;
  }
  
  &:last-child td {
    border-bottom: none;
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
`;

const TypeBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: ${props => props.type === 'Listed' ? '600' : '500'};
  background-color: ${props => {
    switch(props.type) {
      case 'Listed': return 'var(--color-accent, #f0b90b)';
      case 'Sale': return 'rgba(14, 203, 129, 0.15)';
      case 'Leased': return 'rgba(79, 117, 235, 0.15)';
      // Construction-related events share the same color
      case 'Renovated':
      case 'Extended':
      case 'Rebuilt': return 'rgba(255, 152, 0, 0.15)';
      // Regulatory events share the same color
      case 'Rezoned':
      case 'DA Approval': return 'rgba(33, 150, 243, 0.15)';
      default: return 'rgba(240, 185, 11, 0.15)';
    }
  }};
  color: ${props => {
    switch(props.type) {
      case 'Listed': return '#000';
      case 'Sale': return '#0ecb81';
      case 'Leased': return '#4f75eb';
      // Construction-related events share the same color
      case 'Renovated':
      case 'Extended':
      case 'Rebuilt': return '#ff9800';
      // Regulatory events share the same color
      case 'Rezoned':
      case 'DA Approval': return '#2196f3';
      default: return 'var(--color-accent)';
    }
  }};
`;

const PastSalesSection = styled.div`
  background-color: rgba(30, 32, 38, 0.95);
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
`;

const SalesTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  
  th, td {
    padding: 0.75rem 1rem;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  th {
    font-weight: 500;
    color: var(--color-text-secondary);
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  /* Match column widths with HistoryTableHeader */
  td:nth-child(1), th:nth-child(1) { width: 15%; }
  td:nth-child(2), th:nth-child(2) { width: 20%; }
  td:nth-child(3), th:nth-child(3) { width: 15%; }
  td:nth-child(4), th:nth-child(4) { width: 20%; }
  td:nth-child(5), th:nth-child(5) { width: 30%; }
  
  tr:last-child td {
    border-bottom: none;
  }
  
  tr:hover {
    background-color: rgba(255, 255, 255, 0.03);
  }
  
  tr td:first-child {
    width: 100px;
  }
  
  tr td:nth-child(2) {
    width: 130px;
  }
`;

// Offers tab content
const OffersSection = styled.div`
  background-color: rgba(30, 32, 38, 0.95);
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
`;

const OffersList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const OfferItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.05);
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
`;

const OfferInfo = styled.div``;

const OfferPrice = styled.div`
  font-weight: 600;
  font-size: 1.125rem;
`;

const OfferDetails = styled.div`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
`;

const OfferStatus = styled.div`
  padding: 0.375rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  background-color: ${props => {
    switch(props.status) {
      case 'active': return 'rgba(14, 203, 129, 0.2)';
      case 'rejected': return 'rgba(246, 70, 93, 0.2)';
      case 'historical': return 'rgba(56, 97, 251, 0.2)';
      default: return 'rgba(255, 255, 255, 0.1)';
    }
  }};
  color: ${props => {
    switch(props.status) {
      case 'active': return '#0ecb81';
      case 'rejected': return '#f6465d';
      case 'historical': return '#3861fb';
      default: return 'var(--color-text-secondary)';
    }
  }};
`;

const VoteButton = styled.button`
  background-color: var(--color-accent, #f0b90b);
  color: black;
  border: none;
  border-radius: 4px;
  padding: 0.375rem 0.75rem;
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
  margin-left: 0.75rem;
  
  &:hover {
    background-color: var(--color-accent-hover, #f8d12f);
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const OfferActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const OfferSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  
  h2 {
    margin: 0;
  }
`;

const OfferButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const MakeOfferButton = styled.button`
  background-color: var(--color-accent, #f0b90b);
  color: black;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.25rem;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: var(--color-accent-hover, #f8d12f);
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const EnquireButton = styled.button`
  background-color: transparent;
  color: var(--color-accent, #f0b90b);
  border: 1px solid var(--color-accent, #f0b90b);
  border-radius: 4px;
  padding: 0.75rem 1.25rem;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: rgba(240, 185, 11, 0.1);
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

// News tab content
const RecentSalesSection = styled.div`
  background-color: rgba(30, 32, 38, 0.95);
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
`;

const SalesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 1rem;
`;

const SaleCard = styled.div`
  background-color: rgba(40, 42, 48, 0.95);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const SaleImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
`;

const SaleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SoldTag = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(255, 255, 255, 0.9);
  color: #333;
  font-weight: 600;
  font-size: 0.75rem;
  padding: 4px 8px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const SoldIcon = styled.div`
  width: 8px;
  height: 8px;
  background-color: #FFA500;
  border-radius: 50%;
`;

const SaleContent = styled.div`
  padding: 1rem;
`;

const SaleAddress = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
`;

const SaleSuburb = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.75rem;
`;

const SalePrice = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
`;

const SaleDetails = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 0.75rem;
`;

const SaleDate = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
`;

const LoafPricingSection = styled.div`
  background-color: rgba(30, 32, 38, 0.95);
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
`;

const PricingModelCard = styled.div`
  background-color: rgba(40, 42, 48, 0.95);
  border-radius: 8px;
  padding: 1.5rem;
  margin-top: 1rem;
`;

const PricingModelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const PricingModelTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
`;

const PricingModelValue = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-primary);
`;

const PricingModelDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const PricingModelDetail = styled.div`
  background-color: rgba(50, 52, 58, 0.95);
  border-radius: 6px;
  padding: 1rem;
`;

const PropertyDetailLabel = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.5rem;
`;

/* DetailValue already defined above, using PricingDetailValue instead */

const PricingDetailValue = styled.div`
  font-size: 1rem;
  color: #fff;
  font-weight: 500;
`;

const ValuationIndicator = styled.div`
  background-color: rgba(50, 52, 58, 0.95);
  border-radius: 6px;
  padding: 1rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

const ValuationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

const ValuationTitle = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;

const ValuationStatus = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${props => props.color || '#fff'};
`;

const ValuationGauge = styled.div`
  position: relative;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
`;

const GaugeBackground = styled.div`
  width: 100%;
  height: 40px;
  background: linear-gradient(to right, #2196F3, #FFFFFF, #F44336);
  border-radius: 20px;
  position: relative;
`;

const GaugeIndicator = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => 
    props.type === 'fairValue' ? 'var(--color-accent)' : 
    props.type === 'lastPrice' ? '#000' : '#fff'
  };
  border: 2px solid ${props => props.type === 'lastPrice' ? '#fff' : '#000'};
  top: 50%;
  left: ${props => props.position}%;
  transform: translateY(-50%) translateX(-50%);
  z-index: ${props => 
    props.type === 'fairValue' ? 3 : 
    props.type === 'lastPrice' ? 4 : 2
  };
  box-shadow: ${props => 
    props.type === 'fairValue' ? '0 0 8px rgba(255, 215, 0, 0.6)' : 
    props.type === 'lastPrice' ? '0 0 8px rgba(255, 255, 255, 0.4)' : 'none'
  };
`;

const PriceLabel = styled.div`
  position: absolute;
  font-size: 0.8rem;
  color: #fff;
  top: -20px;
  transform: translateX(-50%);
  white-space: nowrap;
`;

const ValuationDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const ValuationItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const ValuationLabel = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.25rem;
`;

const ValuationValue = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.color || '#fff'};
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 1.5rem;
  background-color: rgba(50, 52, 58, 0.5);
  border-radius: 6px;
  padding: 1rem;
  position: relative;
`;

const ChartPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;

const ChartLegend = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
`;

const LegendColor = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  margin-right: 0.5rem;
  background-color: ${props => props.color};
`;

const NewsSection = styled.div`
  background-color: rgba(30, 32, 38, 0.95);
  border-radius: 8px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const NewsCard = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 1.25rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    transform: translateY(-3px);
    background-color: rgba(255, 255, 255, 0.08);
  }
`;

const NewsTitle = styled.h3`
  font-size: 1.125rem;
  margin-bottom: 0.75rem;
  font-weight: 500;
`;

const NewsInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
`;

const NewsDate = styled.div``;

const NewsCategory = styled.div`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background-color: rgba(56, 97, 251, 0.1);
  color: var(--color-primary, #3861fb);
  font-size: 0.75rem;
  font-weight: 500;
`;

const PropertyDetailNew = ({ initialTab = 'overview' }) => {
  const { id, propertySlug } = useParams();
  const location = useLocation();
  const { priceData } = usePrice();
  const [property, setProperty] = useState(null);
  const [token, setToken] = useState({ price: 100, basePrice: 100, volatility: 0.002, change: 0, priceChange: 0 });
  const [priceFlash, setPriceFlash] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Determine if we need to redirect from old URL pattern to new URL pattern
  const shouldRedirect = location.pathname.startsWith('/property-new/');
  const targetPropertyId = propertySlug ? getPropertyIdFromSlug(propertySlug) : (id || 1);
  const targetPropertySlug = propertySlug || getSlugFromPropertyId(targetPropertyId);
  
  // Determine active tab from hash fragment or initialTab prop
  const getInitialActiveTab = () => {
    if (location.hash) {
      const hash = location.hash.substring(1); // Remove the # character
      if (['overview', 'trade', 'offers', 'market', 'past-sales', 'owner-booking'].includes(hash)) {
        return hash;
      }
    }
    return initialTab;
  };
  
  const [activeTab, setActiveTab] = useState(getInitialActiveTab());
  const [historyFilter, setHistoryFilter] = useState('all'); // Options: 'all', 'sales', 'events', 'loaf'
  const [pastSales, setPastSales] = useState([]);
  const [orders, setOrders] = useState([]);
  const [offers, setOffers] = useState([]);
  
  // Market simulation state
  const [marketActive, setMarketActive] = useState(true); // Auto-start market simulation
  const [marketInterval, setMarketInterval] = useState(null);
  const [priceHistory, setPriceHistory] = useState([]);
  
  // Place Order panel state
  const [orderPrice, setOrderPrice] = useState(100);
  const [stopPrice, setStopPrice] = useState(100); // Price at which the stop order triggers
  const [orderTokenAmount, setOrderTokenAmount] = useState(0);
  const [orderTotal, setOrderTotal] = useState(0);
  const [sliderPercentage, setSliderPercentage] = useState(0);
  const [activeOrderTab, setActiveOrderTab] = useState('buy');
  const [orderType, setOrderType] = useState('limit'); // 'limit', 'market', or 'stop'
  const [availableFunds] = useState(1052750); // Mock available funds
  const [orderError, setOrderError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Orderbook and market trades data (stored in state to prevent regeneration on every render)
  const [orderBookSells, setOrderBookSells] = useState([]);
  const [orderBookBuys, setOrderBookBuys] = useState([]);
  const [marketTrades, setMarketTrades] = useState([]);
  
  // Initialize order price from token data when it loads
  useEffect(() => {
    if (token && token.price) {
      setOrderPrice(token.price);
    }
  }, [token]);
  
  // Handler functions for Place Order panel
  const handleOrderPriceChange = (e) => {
    // Clear any previous errors
    setOrderError('');
    
    // Store the raw input value temporarily to allow editing
    const inputValue = e.target.value;
    
    // If the user is actively editing, keep the string value
    if (inputValue === '' || inputValue.endsWith('.') || inputValue.endsWith(',')) {
      setOrderPrice(inputValue);
      return;
    }
    
    // Remove dollar sign, commas and any non-numeric characters except decimal point
    const cleanValue = inputValue.replace(/[$,]/g, '').replace(/[^0-9.]/g, '');
    const newPrice = parseFloat(cleanValue) || 0;
    
    // Validate the price
    if (newPrice <= 0) {
      setOrderError('Price must be greater than 0');
    }
    
    setOrderPrice(newPrice);
    
    // Update total based on new price and current token amount
    const tokenAmount = typeof orderTokenAmount === 'string' ? 
      parseFloat(orderTokenAmount.replace(/,/g, '')) || 0 : orderTokenAmount;
    const newTotal = newPrice * tokenAmount;
    setOrderTotal(newTotal);
  };
  
  const handleStopPriceChange = (e) => {
    // Clear any previous errors
    setOrderError('');
    
    // Store the raw input value temporarily to allow editing
    const inputValue = e.target.value;
    
    // If the user is actively editing, keep the string value
    if (inputValue === '' || inputValue.endsWith('.') || inputValue.endsWith(',')) {
      setStopPrice(inputValue);
      return;
    }
    
    // Remove commas and any non-numeric characters except decimal point
    const cleanValue = inputValue.replace(/[^0-9.]/g, '');
    const newStopPrice = parseFloat(cleanValue) || 0;
    setStopPrice(newStopPrice);
  };
  
  const handleOrderTokenAmountChange = (e) => {
    // Clear any previous errors
    setOrderError('');
    
    // Store the raw input value temporarily to allow editing
    const inputValue = e.target.value;
    
    // If the user is actively editing, keep the string value
    if (inputValue === '' || inputValue.endsWith('.') || inputValue.endsWith(',')) {
      setOrderTokenAmount(inputValue);
      return;
    }
    
    // Remove commas and any non-numeric characters except decimal point
    const cleanValue = inputValue.replace(/[^0-9.]/g, '');
    const newAmount = parseFloat(cleanValue) || 0;
    setOrderTokenAmount(newAmount);
    
    // For market orders, use the current market price (token.price)
    // For limit orders, use the specified price
    let price;
    if (orderType === 'market') {
      price = token.price; // Use current market price
    } else {
      price = typeof orderPrice === 'string' ? 
        parseFloat(orderPrice.replace(/,/g, '')) || 0 : orderPrice;
    }
    
    const newTotal = price * newAmount;
    setOrderTotal(newTotal);
    
    // Validate the amount
    if (activeOrderTab === 'buy' && newTotal > availableFunds) {
      setOrderError('Insufficient funds for this purchase');
    }
    
    const newPercentage = Math.min(100, Math.max(0, (newTotal / availableFunds) * 100));
    
    // Update slider and total
    setSliderPercentage(newPercentage);
    setOrderTotal(newTotal);
  };
  
  const handleOrderTotalChange = (e) => {
    // Clear any previous errors
    setOrderError('');
    
    // Store the raw input value temporarily to allow editing
    const inputValue = e.target.value;
    
    // If the user is actively editing, keep the string value
    if (inputValue === '' || inputValue.endsWith('.') || inputValue.endsWith(',')) {
      setOrderTotal(inputValue);
      return;
    }
    
    // Remove dollar sign, commas and any non-numeric characters except decimal point
    const cleanValue = inputValue.replace(/[$,]/g, '').replace(/[^0-9.]/g, '');
    const newTotal = parseFloat(cleanValue) || 0;
    setOrderTotal(newTotal);
    
    // Validate the total amount
    if (activeOrderTab === 'buy' && newTotal > availableFunds) {
      setOrderError('Total exceeds available funds');
    } else if (newTotal <= 0) {
      setOrderError('Total must be greater than 0');
    }
    
    // For market orders, use the current market price (token.price)
    // For limit orders, use the specified price
    let price;
    if (orderType === 'market') {
      price = token.price; // Use current market price
    } else {
      price = typeof orderPrice === 'string' ? 
        parseFloat(orderPrice.replace(/,/g, '')) || 0 : orderPrice;
    }
    
    const newTokenAmount = price > 0 ? newTotal / price : 0;
    
    // Update token amount and slider percentage
    setOrderTokenAmount(newTokenAmount);
    const newPercentage = Math.min(100, Math.max(0, (newTotal / availableFunds) * 100));
    setSliderPercentage(newPercentage);
  };
  
  const handleSliderChange = (e) => {
    // Clear any previous errors
    setOrderError('');
    
    const newPercentage = parseInt(e.target.value);
    setSliderPercentage(newPercentage);
    
    // Calculate new total based on percentage of available funds
    const newTotal = (availableFunds * newPercentage) / 100;
    
    // Calculate new token amount based on the total and current price
    const newTokenAmount = orderPrice > 0 ? newTotal / orderPrice : 0;
    
    // Update token amount and total
    setOrderTokenAmount(newTokenAmount);
    setOrderTotal(newTotal);
  };
  
  const handleOrderTabChange = (tab) => {
    setActiveOrderTab(tab);
    setOrderError(''); // Clear any errors when switching tabs
  };
  
  const handleOrderTypeChange = (type) => {
    setOrderType(type.toLowerCase());
    setOrderError(''); // Clear any errors when switching order types
  };
  
  const handlePlaceOrder = () => {
    // Clear any previous errors
    setOrderError('');
    
    // Validate the order
    if (orderPrice <= 0) {
      setOrderError('Price must be greater than 0');
      return;
    }
    
    if (orderTokenAmount <= 0) {
      setOrderError('Token amount must be greater than 0');
      return;
    }
    
    if (activeOrderTab === 'buy' && orderTotal > availableFunds) {
      setOrderError('Insufficient funds for this purchase');
      return;
    }
    
    // Set processing state
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      // Reset form after successful order
      setIsProcessing(false);
      setOrderTokenAmount(0);
      setOrderTotal(0);
      setSliderPercentage(0);
      
      // Show success message (could be a toast notification in a real app)
      alert(`Successfully ${activeOrderTab === 'buy' ? 'bought' : 'sold'} ${orderTokenAmount.toFixed(2)} Elara of ${property?.name || '28 Derby Street (Elara)'}`);
    }, 1500);
  };
  const tabsContainerRef = React.useRef(null);
  const offersSectionRef = React.useRef(null);
  const [propertyDropdownOpen, setPropertyDropdownOpen] = useState(false);
  const [tradeAssetDropdownOpen, setTradeAssetDropdownOpen] = useState(false);
  
  // Notification state variables
  const [hasTradeNotifications, setHasTradeNotifications] = useState(false);
  const [hasOffersNotifications, setHasOffersNotifications] = useState(false);
  const [hasNewsNotifications, setHasNewsNotifications] = useState(false);
  
  // Function to handle tab clicks by updating the URL hash
  const handleTabClick = (tab) => {
    // Update the URL hash without reloading the page
    window.location.hash = tab === 'overview' ? '' : tab;
    
    // Clear notifications for the selected tab
    if (tab === 'trade') setHasTradeNotifications(false);
    if (tab === 'offers') setHasOffersNotifications(false);
    if (tab === 'news') setHasNewsNotifications(false);
  };
  
  // Create refs for scrolling
  const tradePanelRef = React.useRef(null);
  const propertyDropdownRef = React.useRef(null);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (propertyDropdownRef.current && !propertyDropdownRef.current.contains(event.target)) {
        setPropertyDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Demo functionality to simulate notifications
  useEffect(() => {
    // Simulate trade notifications (e.g., order filled, margin call)
    const tradeNotificationTimer = setInterval(() => {
      if (activeTab !== 'trade') {
        setHasTradeNotifications(true);
      }
    }, 30000); // Every 30 seconds
    
    // Simulate offers notifications
    const offersNotificationTimer = setInterval(() => {
      if (activeTab !== 'offers') {
        setHasOffersNotifications(true);
      }
    }, 45000); // Every 45 seconds
    
    // Simulate news notifications
    const newsNotificationTimer = setInterval(() => {
      if (activeTab !== 'news') {
        setHasNewsNotifications(true);
      }
    }, 60000); // Every 60 seconds
    
    // For demo purposes, trigger a notification after 5 seconds
    setTimeout(() => {
      if (activeTab !== 'offers') setHasOffersNotifications(true);
    }, 5000);
    
    setTimeout(() => {
      if (activeTab !== 'news') setHasNewsNotifications(true);
    }, 8000);
    
    return () => {
      clearInterval(tradeNotificationTimer);
      clearInterval(offersNotificationTimer);
      clearInterval(newsNotificationTimer);
    };
  }, [activeTab]);
  
  // Effect to listen for hash changes and update active tab
  useEffect(() => {
    const newTab = getInitialActiveTab();
    if (newTab !== activeTab) {
      setActiveTab(newTab);
    }
  }, [location.hash]);
  
  // Effect to scroll to appropriate section based on active tab
  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        if (activeTab === 'trade' && tabsContainerRef.current) {
          tabsContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (activeTab === 'offers' && offersSectionRef.current) {
          // Scroll to offers section
          offersSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300); // Slightly longer timeout to ensure everything is rendered
    }
  }, [activeTab, isLoading]);

  useEffect(() => {
    const fetchPropertyDetails = async () => {
    setIsLoading(true);
    try {
      // In a real app, you would call the API
      // const response = await propertyService.getPropertyDetails(targetPropertyId);
      // setProperty(response.data);
      
      // Use the property data for the targetPropertyId
      const mockProperty = generateMockPropertyData(targetPropertyId);
      setProperty(mockProperty);
      // Enhance token with volatility information for market simulation
      setToken({
        ...mockProperty.token,
        basePrice: mockProperty.token.price,
        volatility: 0.002 // 0.2% volatility per tick
      });
        
        // Generate mock past sales
        setPastSales(generateMockPastSales());
        
        // Generate mock offers
        setOffers(generateMockOffers());
        
        // Generate mock orders
        const mockOrders = generateMockOrders();
        console.log('Mock orders:', mockOrders);
        setOrders(mockOrders);
        
        // Generate orderbook and market trades data once
        generateOrderBookData(mockProperty.token.price);
        generateMarketTradesData(mockProperty.token.price);
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching property details:', error);
        setIsLoading(false);
      }
    };
    
    fetchPropertyDetails();
  }, [targetPropertyId]);

  // Market simulation functions
  // Update token price with random fluctuations and mean reversion
  const updateTokenPrice = () => {
    setToken(prevToken => {
      // Random fluctuation with mean reversion
      const randomFactor = (Math.random() - 0.5) * 2; // -1 to 1
      const meanReversionFactor = (prevToken.basePrice - prevToken.price) * 0.01; // Pull towards base price
      const volatilityFactor = prevToken.volatility * prevToken.price; // Scale volatility with price
      
      // Calculate price change with capped movement
      let priceChange = (randomFactor * volatilityFactor) + meanReversionFactor;
      priceChange = Math.max(Math.min(priceChange, 500), -500); // Cap at +/- $500 per update
      
      const newPrice = prevToken.price + priceChange;
      const percentChange = ((newPrice / prevToken.basePrice) - 1) * 100;
      const priceChangeDirection = priceChange > 0 ? 1 : priceChange < 0 ? -1 : 0;
      
      // Update price history
      setPriceHistory(prev => {
        const updatedHistory = [...prev, newPrice];
        if (updatedHistory.length > 100) updatedHistory.shift();
        return updatedHistory;
      });
      
      // For any non-zero price change, immediately set flash
      if (priceChangeDirection !== 0) {
        // Cancel any existing timeout to handle rapid price changes
        if (window.priceFlashTimeout) {
          clearTimeout(window.priceFlashTimeout);
        }
        
        // Immediately show the color
        setPriceFlash(true);
        
        // Set timeout to remove the color after 1 second
        window.priceFlashTimeout = setTimeout(() => {
          setPriceFlash(false);
        }, 1000); // 1 second as requested
      }
      
      return {
        ...prevToken,
        price: newPrice,
        priceChange: priceChangeDirection,
        change: parseFloat(percentChange.toFixed(2))
      };
    });
  };
  
  // Generate realistic order book data
  const generateOrderBookData = (tokenPrice) => {
    const sells = [];
    const buys = [];
    
    // Generate sell orders (higher than current price)
    for (let i = 1; i <= 10; i++) {
      // Use smaller price increments for more realistic order book
      const price = tokenPrice * (1 + (i * 0.001)); // 0.1% increments
      const amount = (Math.random() * 10 + 1).toFixed(3);
      const total = price * parseFloat(amount);
      const depth = 100 - (i * 8); // Decreasing depth as price increases
      
      sells.push({ price, amount, total, depth });
    }
    
    // Generate buy orders (lower than current price)
    for (let i = 1; i <= 10; i++) {
      const price = tokenPrice * (1 - (i * 0.001)); // 0.1% decrements
      const amount = (Math.random() * 10 + 1).toFixed(3);
      const total = price * parseFloat(amount);
      const depth = 100 - (i * 8); // Decreasing depth as price decreases
      
      buys.push({ price, amount, total, depth });
    }
    
    // Update the order book with new orders
    setOrderBookSells(prev => {
      // Keep some existing orders and add new ones
      const existingOrders = prev && prev.length ? prev.filter(() => Math.random() > 0.3).slice(0, 5) : [];
      
      // Create a map of previous prices for comparison
      const prevPriceMap = {};
      prev.forEach(order => {
        prevPriceMap[order.price.toFixed(2)] = true;
      });
      
      // Add price direction to new orders
      const newOrders = [...sells, ...existingOrders].map(order => {
        const priceKey = order.price.toFixed(2);
        let priceDirection = 'neutral';
        
        // If this exact price existed before, it's neutral
        if (prevPriceMap[priceKey]) {
          priceDirection = 'neutral';
        } else {
          // Find the closest previous price
          const closestPrev = prev.reduce((closest, prevOrder) => {
            const diff = Math.abs(prevOrder.price - order.price);
            return diff < closest.diff ? { diff, price: prevOrder.price } : closest;
          }, { diff: Infinity, price: 0 });
          
          // If we found a close match, determine direction
          if (closestPrev.diff < order.price * 0.001) { // Within 0.1%
            priceDirection = order.price > closestPrev.price ? 'up' : 'down';
          }
        }
        
        return { ...order, priceDirection };
      });
      
      return newOrders.sort((a, b) => b.price - a.price).slice(0, 10);
    });
    
    setOrderBookBuys(prev => {
      // Keep some existing orders and add new ones
      const existingOrders = prev && prev.length ? prev.filter(() => Math.random() > 0.3).slice(0, 5) : [];
      
      // Create a map of previous prices for comparison
      const prevPriceMap = {};
      prev.forEach(order => {
        prevPriceMap[order.price.toFixed(2)] = true;
      });
      
      // Add price direction to new orders
      const newOrders = [...buys, ...existingOrders].map(order => {
        const priceKey = order.price.toFixed(2);
        let priceDirection = 'neutral';
        
        // If this exact price existed before, it's neutral
        if (prevPriceMap[priceKey]) {
          priceDirection = 'neutral';
        } else {
          // Find the closest previous price
          const closestPrev = prev.reduce((closest, prevOrder) => {
            const diff = Math.abs(prevOrder.price - order.price);
            return diff < closest.diff ? { diff, price: prevOrder.price } : closest;
          }, { diff: Infinity, price: 0 });
          
          // If we found a close match, determine direction
          if (closestPrev.diff < order.price * 0.001) { // Within 0.1%
            priceDirection = order.price > closestPrev.price ? 'up' : 'down';
          }
        }
        
        return { ...order, priceDirection };
      });
      
      return newOrders.sort((a, b) => b.price - a.price).slice(0, 10);
    });
  };
  
  // Generate market trades data
  const generateMarketTradesData = (tokenPrice, newTrade = null) => {
    // If a new trade is provided, add it to the beginning
    if (newTrade) {
      setMarketTrades(prev => {
        const updated = [newTrade, ...(prev || [])].slice(0, 20);
        return updated;
      });
      return;
    }
    
    // Otherwise generate random trades
    const trades = [];
    for (let i = 0; i < 20; i++) {
      const type = Math.random() > 0.5 ? 'buy' : 'sell';
      const priceVariation = tokenPrice * 0.001 * Math.random(); // 0.1% max variation
      const price = type === 'buy' ? 
        (tokenPrice + priceVariation).toFixed(2) : 
        (tokenPrice - priceVariation).toFixed(2);
      const amount = (Math.random() * 5 + 0.1).toFixed(3);
      const time = new Date(Date.now() - i * 60000).toLocaleTimeString();
      
      trades.push({ type, price, amount, time });
    }
    
    setMarketTrades(trades);
  };
  
  // Check if any user orders should be filled based on current price
  const checkOrderFills = () => {
    if (!token) return;
    
    setOrders(prevOrders => {
      return prevOrders.map(order => {
        // Skip already filled or canceled orders
        if (order.status === 'filled' || order.status === 'canceled') {
          return order;
        }
        
        let shouldFill = false;
        let fillPrice = token.price;
        
        // Check if order should be filled based on type and current price
        if (order.type === 'buy') {
          if (order.orderType === 'market') {
            shouldFill = true;
          } else if (order.orderType === 'limit' && token.price <= order.price) {
            shouldFill = true;
          } else if (order.orderType === 'stop' && token.price >= order.stopPrice) {
            shouldFill = true;
          }
        } else if (order.type === 'sell') {
          if (order.orderType === 'market') {
            shouldFill = true;
          } else if (order.orderType === 'limit' && token.price >= order.price) {
            shouldFill = true;
          } else if (order.orderType === 'stop' && token.price <= order.stopPrice) {
            shouldFill = true;
          }
        }
        
        // Update order if it should be filled
        if (shouldFill) {
          // Create a new market trade for this fill
          generateMarketTradesData(fillPrice, {
            type: order.type,
            price: fillPrice.toFixed(2),
            amount: order.amount.toFixed(3),
            time: new Date().toLocaleTimeString()
          });
          
          return {
            ...order,
            status: 'filled',
            filledPrice: fillPrice,
            filledAt: new Date().toISOString(),
            filledPercentage: 100
          };
        }
        
        return order;
      });
    });
  };
  
  // Main market simulation function
  const simulateMarket = () => {
    updateTokenPrice();
    generateOrderBookData(token?.price || 100);
    checkOrderFills();
    
    // Occasionally generate a new market trade
    if (Math.random() > 0.5) {
      generateMarketTradesData(token?.price || 100);
    }
  };
  
  // References for scrolling order book to bottom
  const sellOrdersRef = React.useRef(null);
  const buyOrdersRef = React.useRef(null);
  
  // Scroll sell orders to bottom when they update
  useEffect(() => {
    if (sellOrdersRef.current) {
      sellOrdersRef.current.scrollTop = sellOrdersRef.current.scrollHeight;
    }
  }, [orderBookSells]);
  
  // Start/stop market simulation
  useEffect(() => {
    if (marketActive && !marketInterval) {
      // Start simulation with a 2-second interval
      const interval = setInterval(simulateMarket, 2000);
      setMarketInterval(interval);
    } else if (!marketActive && marketInterval) {
      // Stop simulation
      clearInterval(marketInterval);
      setMarketInterval(null);
    }
    
    // Cleanup on unmount
    return () => {
      if (marketInterval) {
        clearInterval(marketInterval);
      }
    };
  }, [marketActive, marketInterval, token]);

  // List of mock properties for the dropdown
  const mockPropertiesList = [
    {
      id: 1,
      name: '28 Derby Street (Elara)',
      location: 'Vaucluse, Sydney',
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    },
    {
      id: 2,
      name: '32 Burran Avenue',
      location: 'Mosman, Sydney',
      imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80'
    },
    {
      id: 3,
      name: '15 Victoria Street',
      location: 'Bellevue Hill, Sydney',
      imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    },
    {
      id: 4,
      name: '8 Wolseley Road',
      location: 'Point Piper, Sydney',
      imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80'
    }
  ];
  
  // Use the createSlugFromName function defined at the top of the file

  // Generate mock property data
  const generateMockPropertyData = (id) => {
    // For now, we'll just return a fixed property for testing
    return {
      id: id,
      name: "28 Derby Street (Elara)",
      location: "Vaucluse, Sydney",
      description: "This exceptional residence represents a <b>premier investment opportunity</b> in the most sought after region of Australia's eastern suburbs. Vaucluse has a <b>median house price of $8.3m</b> and has <b>increased more than 125% in under a decade</b>. Situated on an <b>irreplaceable 1,800 sqm parcel</b> with <b>unobstructed views of Sydney Harbour, The Opera House, and The Harbour Bridge</b>, this home stands as a symbol of exclusivity and enduring demand both domestically and internationally, allowing it to <b>outperform the broader market by 50% over the decade</b> and weather global economic downturns. The <b>scarcity of such substantial landholdings</b> in this ultra-exclusive enclave ensures <b>perpetual demand from both domestic and international ultra-high-net-worth buyers</b>, particularly from Asia and North America. This architectural masterpiece features <b>5 bedrooms, 4 bathrooms, and a 3-car garage</b>, complemented by a <b>heated swimming pool and championship tennis court</b>—amenities highly prized by the luxury market segment. <b>Tokenized ownership provides unprecedented liquidity</b> for this asset class, with <b>tokens backed 1:1 by the underlying property value</b>. Token holders receive <b>governance rights, voting privileges on property decisions, priority access for stays, a share of rental yield (currently 4.2% p.a.), and proportional proceeds from any future sale</b>. Vaucluse's <b>strict development controls and limited land supply</b> create a <b>perfect hedge against inflation</b> while delivering both <b>capital growth and income</b>—truly an investment that has historically made the wealthy wealthier.",
      imageUrl: "https://i2.au.reastatic.net/1232x688-resize,extend,r=33,g=40,b=46/5f6981d6e0c819bf4775b18f9b182ef5290b2271fec86b8ad05b6d9b3ebe6287/image.jpg",
      bedrooms: 4,
      bathrooms: 5,
      carSpots: 4,
      propertyType: "House",
      landSize: "1,800 sqm",
      annualReturn: "8.2",
      rentalYield: "4.5",
      recentSales: [
        {
          address: "24 Wentworth Road",
          suburb: "Vaucluse",
          price: "$12,500,000",
          saleDate: "June 2025",
          bedrooms: 5,
          bathrooms: 4,
          landSize: "1,650 sqm",
          imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80"
        },
        {
          address: "15 Carrara Road",
          suburb: "Vaucluse",
          price: "$10,800,000",
          saleDate: "May 2025",
          bedrooms: 4,
          bathrooms: 3,
          landSize: "1,200 sqm",
          imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        },
        {
          address: "8 Hopetoun Avenue",
          suburb: "Bellevue Hill",
          price: "$11,250,000",
          saleDate: "April 2025",
          bedrooms: 5,
          bathrooms: 4,
          landSize: "1,450 sqm",
          imageUrl: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        }
      ],
      loafPricingModel: {
        currentGuideValue: "$18,750,000",
        pricePerToken: "$125,000",
        totalTokens: 150,
        historicalData: [
          { date: "Jan 2024", guideValue: 17500000, tokenPrice: 115000 },
          { date: "Feb 2024", guideValue: 17600000, tokenPrice: 117500 },
          { date: "Mar 2024", guideValue: 17800000, tokenPrice: 118200 },
          { date: "Apr 2024", guideValue: 17900000, tokenPrice: 119000 },
          { date: "May 2024", guideValue: 18000000, tokenPrice: 120500 },
          { date: "Jun 2024", guideValue: 18200000, tokenPrice: 121800 },
          { date: "Jul 2024", guideValue: 18500000, tokenPrice: 123500 },
          { date: "Aug 2024", guideValue: 18600000, tokenPrice: 124000 },
          { date: "Sep 2024", guideValue: 18650000, tokenPrice: 124200 },
          { date: "Oct 2024", guideValue: 18700000, tokenPrice: 124500 },
          { date: "Nov 2024", guideValue: 18720000, tokenPrice: 124800 },
          { date: "Dec 2024", guideValue: 18740000, tokenPrice: 124900 },
          { date: "Jan 2025", guideValue: 18750000, tokenPrice: 100 }
        ]
      },
      token: {
        id: "VAUCLUSE-001",
        name: "28 Derby Street (Elara)",
        symbol: "VCL001",
        price: 100,
        priceChangePercent: "+2.15",
        marketCap: "18,750,000",
        volume24h: "2,450,000",
        modelledPriceGuide: "132,500",
        modelledPriceGuideChange: "5.8"
      },
      news: [
        {
          id: 1,
          title: "Property value increases by 5.8% following renovation completion",
          date: "July 15, 2025",
          category: "property",
          type: "property"
        },
        {
          id: 2,
          title: "New 5-year lease agreement signed with premium tenant",
          date: "July 10, 2025",
          category: "property",
          type: "property"
        },
        {
          id: 3,
          title: "Vaucluse property market sees 12% growth in Q2 2025",
          date: "July 5, 2025",
          category: "market",
          type: "market"
        },
        {
          id: 4,
          title: "RBA holds interest rates steady at 3.75%",
          date: "July 2, 2025",
          category: "economy",
          type: "market"
        }
      ]
    };
  };

  // Generate mock property history data grouped by ownership periods
  const generateMockPastSales = () => {
    return [
      {
        id: 'loaf-listing',
        type: "Listed",
        saleType: "Loaf Auction",
        date: "January 15, 2025",
        price: "$14,000,000",
        buyer: "-",
        seller: "Current Owner",
        agent: "Loaf Platform",
        ownershipPeriod: "current",
        sortOrder: 1
      },
      {
        id: 'da-approval',
        type: "DA Approval",
        saleType: "Planning Change",
        date: "February 5, 2025",
        price: "$500,000",
        buyer: "-",
        seller: "Current Owner",
        agent: "City Planning Consultants",
        ownershipPeriod: "current",
        sortOrder: 2,
        description: "Extension from 4 to 6 bathrooms, installation of elevator and rooftop terrace"
      },
      {
        id: 'leased-current',
        type: "Leased",
        saleType: "Rental",
        date: "February 10, 2025",
        price: "$4,500/week",
        buyer: "Executive Tenants Ltd",
        seller: "Current Owner",
        agent: "Sydney Luxury Rentals",
        ownershipPeriod: "current",
        sortOrder: 3,
        leaseTerm: "12 months",
        weeklyRate: "$4,500"
      },
      // Current Owner Period (2020-present)

      {
        id: 'leased-2',
        type: "Leased",
        saleType: "Rental",
        date: "March 5, 2022",
        price: "$4,000/week",
        buyer: "Premium Tenants LLC",
        seller: "Current Owner",
        agent: "Sydney Prestige Real Estate",
        ownershipPeriod: "period-1",
        sortOrder: 10,
        leaseTerm: "24 months",
        weeklyRate: "$4,000"
      },
      {
        id: 'leased-1',
        type: "Leased",
        saleType: "Rental",
        date: "November 15, 2020",
        price: "$4,000/week",
        buyer: "Executive Rentals LLC",
        seller: "Current Owner",
        agent: "Sydney Prestige Real Estate",
        ownershipPeriod: "period-1",
        sortOrder: 15,
        leaseTerm: "24 months",
        weeklyRate: "$4,000"
      },
      {
        id: 'ownership-1',
        type: "Sale",
        saleType: "Private Sale",
        date: "October 20, 2020",
        price: "$8,000,000",
        buyer: "Current Owner",
        seller: "Previous Owner",
        agent: "Ray White Double Bay",
        ownershipPeriod: "period-1",
        isOwnershipStart: true,
        isOwnershipEnd: false,
        sortOrder: 100,
        percentGain: 166.7
      },
      // Previous Owner Period (2010-2020)
      {
        id: 'rebuilt-1',
        type: "Rebuilt",
        saleType: "Major Renovation",
        date: "December 10, 2010",
        price: "$1,200,000",
        buyer: "-",
        seller: "Previous Owner",
        agent: "Premium Builders",
        ownershipPeriod: "period-2",
        sortOrder: 8
      },
      {
        id: 'ownership-2',
        type: "Sale",
        saleType: "Auction",
        date: "March 5, 2010",
        price: "$3,000,000",
        buyer: "Previous Owner",
        seller: "Original Developer",
        agent: "LJ Hooker Double Bay",
        ownershipPeriod: "period-2",
        isOwnershipStart: true,
        isOwnershipEnd: true,
        sortOrder: 100
      }
    ];
  };

  // Generate mock offers data for the entire property
  const generateMockOffers = () => {
    return [
      {
        id: 1,
        price: "$13,200,000",
        date: "July 10, 2025",
        expiry: "July 24, 2025",
        buyer: "International Investor (Singapore)",
        conditions: "Subject to finance approval",
        status: "active"
      },
      {
        id: 2,
        price: "$12,950,000",
        date: "July 5, 2025",
        expiry: "July 19, 2025",
        buyer: "Local Business Executive",
        conditions: "60-day settlement",
        status: "active"
      },
      {
        id: 3,
        price: "$12,750,000",
        date: "June 15, 2025",
        expiry: "June 29, 2025",
        buyer: "Property Fund Manager",
        conditions: "45-day settlement, subject to due diligence",
        status: "rejected"
      },
      {
        id: 4,
        price: "$12,600,000",
        date: "May 28, 2025",
        expiry: "June 11, 2025",
        buyer: "Tech Executive",
        conditions: "30-day settlement, all fixtures included",
        status: "rejected"
      },
      {
        id: 5,
        price: "$12,450,000",
        date: "May 12, 2025",
        expiry: "May 26, 2025",
        buyer: "Local Developer",
        conditions: "Subject to council approval for minor renovations",
        status: "rejected"
      },
      {
        id: 6,
        price: "$12,300,000",
        date: "April 20, 2025",
        expiry: "May 4, 2025",
        buyer: "Investment Consortium",
        conditions: "90-day settlement, subject to financing",
        status: "rejected"
      },
      {
        id: 7,
        price: "$12,100,000",
        date: "March 15, 2025",
        expiry: "March 29, 2025",
        buyer: "Family Trust",
        conditions: "45-day settlement, conditional on inspection",
        status: "rejected"
      },
      {
        id: 8,
        price: "$11,900,000",
        date: "February 8, 2025",
        expiry: "February 22, 2025",
        buyer: "Overseas Family Office",
        conditions: "Cash offer, 30-day settlement",
        status: "rejected"
      },
      {
        id: 9,
        price: "$11,750,000",
        date: "January 12, 2025",
        expiry: "January 26, 2025",
        buyer: "Property Investment Group",
        conditions: "60-day settlement, subject to board approval",
        status: "rejected"
      },
      {
        id: 10,
        price: "$11,500,000",
        date: "December 5, 2024",
        expiry: "December 19, 2024",
        buyer: "High Net Worth Individual",
        conditions: "45-day settlement, all fixtures included",
        status: "rejected"
      },
      {
        id: 11,
        price: "$11,200,000",
        date: "November 10, 2024",
        expiry: "November 24, 2024",
        buyer: "Corporate Relocation Service",
        conditions: "30-day settlement, subject to executive approval",
        status: "rejected"
      },
      {
        id: 12,
        price: "$10,800,000",
        date: "October 15, 2024",
        expiry: "October 29, 2024",
        buyer: "Real Estate Investment Trust",
        conditions: "60-day settlement, subject to portfolio review",
        status: "rejected"
      }
    ];
  };
  
  // Helper function to generate mock orders with different properties and abbreviated addresses
  const generateMockOrders = () => {
    // Create orders with explicit property names
    const mockOrders = [
      { id: 1, type: 'buy', price: 100, amount: 2500, total: 250000, date: new Date(), property: '20A Vaucluse Rd', filled: 94 },
      { id: 2, type: 'sell', price: 126500, amount: 1.8, total: 227700, date: new Date(Date.now() - 120000), property: '42 Bellevue Hill Rd', filled: 17 },
      { id: 3, type: 'buy', price: 124800, amount: 3.2, total: 399360, date: new Date(Date.now() - 240000), property: '15 Point Piper Ave', filled: 56 },
      { id: 4, type: 'sell', price: 127000, amount: 1.5, total: 190500, date: new Date(Date.now() - 360000), property: '8 Rose Bay Pl', filled: 10 },
    ];
    console.log('Generated mock orders with properties:', mockOrders);
    return mockOrders;
  };

  const handleOrderSubmit = (order) => {
    console.log('Order submitted:', order);
    // In a real app, you would call the API to submit the order
    alert(`Order submitted: ${order.type} ${order.amount} Elara at $${order.price}`);
  };
  
  // Function to handle trade button clicks
  const handleTradeButtonClick = () => {
    // Update URL hash to trade
    window.location.hash = 'trade';
    
    // Scrolling is now handled by the useEffect that watches activeTab
  };
  
  // Function to handle make offer button clicks
  const handleMakeOfferButtonClick = () => {
    // Update URL hash to offers
    window.location.hash = 'offers';
    
    // Scrolling is now handled by the useEffect that watches activeTab
  };
  
  // Redirect from old URL pattern to new URL pattern if needed
  if (shouldRedirect) {
    const hash = location.hash || '';
    const targetPath = `/properties/${targetPropertySlug}${hash}`;
    return <Navigate to={targetPath} replace />;
  }
  
  if (isLoading || !property) {
    return (
      <PageContainer>
        <div style={{ textAlign: 'center', padding: '4rem 0' }}>
          <h2>Loading property details...</h2>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      {/* Property Selector */}
      <PropertySelectorContainer>
        <PropertySelector ref={propertyDropdownRef} onClick={() => setPropertyDropdownOpen(!propertyDropdownOpen)}>
          <PropertyAddress>
            {property.name}
            <svg 
              className="dropdown-icon"
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              style={{ transform: propertyDropdownOpen ? 'rotate(180deg)' : 'none' }}
            >
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </PropertyAddress>
          
          {/* Property Dropdown Menu */}
          <PropertySelectorDropdown isOpen={propertyDropdownOpen}>
            {mockPropertiesList.map((prop) => (
              <PropertySelectorOption 
                key={prop.id}
                onClick={(e) => {
                  e.stopPropagation();
                  // Always navigate to the same property (28 Wentworth Road)
                  // In a real app, you would navigate to the selected property
                  setPropertyDropdownOpen(false);
                }}
              >
                <PropertySelectorName>{prop.name}</PropertySelectorName>
                <PropertySelectorSubtitle>{prop.location}</PropertySelectorSubtitle>
              </PropertySelectorOption>
            ))}
          </PropertySelectorDropdown>
        </PropertySelector>
        
        <CompareButton>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
          </svg>
          Compare
        </CompareButton>
      </PropertySelectorContainer>
      
      {/* Hero Section with Property Image */}
      <HeroSection>
        <PropertyImage src={property.imageUrl} alt={property.name} />
        <ImageOverlay>
          <PropertyInfo>
            <PropertyName>{property.name}</PropertyName>
            <PropertyLocation>
              {property.location}
              <PropertyPrice>
                ${token.price.toLocaleString()}
                <PriceChangeIndicator isPositive={((token.price / token.basePrice) - 1) >= 0}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d={((token.price / token.basePrice) - 1) >= 0 ? "M7 14l5-5 5 5H7z" : "M7 10l5 5 5-5H7z"} />
                  </svg>
                  {Math.abs(((token.price / token.basePrice) - 1) * 100).toFixed(2)}%
                </PriceChangeIndicator>
              </PropertyPrice>
            </PropertyLocation>
            <PropertyFeatures>
              <FeatureItem>
                <PropertyIcons.IconWrapper>
                  <PropertyIcons.BedroomIcon />
                </PropertyIcons.IconWrapper>
                {property.bedrooms} Beds
              </FeatureItem>
              <FeatureItem>
                <PropertyIcons.IconWrapper>
                  <PropertyIcons.BathroomIcon />
                </PropertyIcons.IconWrapper>
                {property.bathrooms} Baths
              </FeatureItem>
              <FeatureItem>
                <PropertyIcons.IconWrapper>
                  <PropertyIcons.CarIcon />
                </PropertyIcons.IconWrapper>
                {property.carSpots} Cars
              </FeatureItem>
              <FeatureItem>
                {property.propertyType}
              </FeatureItem>
            </PropertyFeatures>
            <OwnershipInfo>
              Your Ownership: 2.2 Elara (2.2%)
            </OwnershipInfo>
          </PropertyInfo>
          
          <ButtonContainer>
            <TradeButton onClick={handleTradeButtonClick}>
              Trade
            </TradeButton>
            <OfferButton onClick={handleMakeOfferButtonClick}>
              Make Offer
            </OfferButton>
          </ButtonContainer>
        </ImageOverlay>
      </HeroSection>
      
      {/* Tab Navigation */}
      <TabsContainer ref={tabsContainerRef}>
        <div style={{ display: 'flex' }}>
          <Tab active={activeTab === 'overview'} onClick={() => handleTabClick('overview')}>Overview</Tab>
          <Tab active={activeTab === 'trade'} onClick={() => handleTabClick('trade')}>
            Trade
            {hasTradeNotifications && <NotificationIndicator color="#f6465d" />}
          </Tab>
          <Tab active={activeTab === 'market'} onClick={() => handleTabClick('market')}>Market Data</Tab>
          <Tab active={activeTab === 'past-sales'} onClick={() => handleTabClick('past-sales')}>Property History</Tab>
          <Tab active={activeTab === 'offers'} onClick={() => handleTabClick('offers')}>
            Offers
            {hasOffersNotifications && <NotificationIndicator color="#f6465d" />}
          </Tab>
          <Tab active={activeTab === 'owner-booking'} onClick={() => handleTabClick('owner-booking')}>
            Reserve
          </Tab>
        </div>
        <MediaButtonsContainer>
          <MediaButton>
            <BiImage size={16} /> Photos
          </MediaButton>
          <MediaButton>
            <BiVideo size={16} /> Video
          </MediaButton>
          <MediaButton>
            <BiCube size={16} /> Immersive Tour
          </MediaButton>
        </MediaButtonsContainer>
      </TabsContainer>
      
      {/* Overview Tab */}
      <ContentSection active={activeTab === 'overview'}>
        <OverviewGrid>
          <OverviewLeft>
            <PropertyDescription>
              <h2>About this property</h2>
              <p dangerouslySetInnerHTML={{ __html: property.description }}></p>
            </PropertyDescription>
          </OverviewLeft>
          
          <OverviewRight>
            <h2>Financial Overview</h2>
            <MetricsGrid>
              <MetricCard>
                <MetricValue>${token.price.toLocaleString()}</MetricValue>
                <MetricLabel>Current Elara Price</MetricLabel>
              </MetricCard>
              <MetricCard>
                <MetricValue>${((100 * token.price) / 1000000).toFixed(2)}M</MetricValue>
                <MetricLabel>Property Value</MetricLabel>
              </MetricCard>
              <MetricCard>
                <MetricValue>$4500 Week</MetricValue>
                <MetricLabel>Net Operating Income</MetricLabel>
              </MetricCard>
              <MetricCard>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '0', right: '0', fontSize: '0.75rem', color: '#4CAF50' }}>Certainty: High</div>
                  <MetricValue>2.5%</MetricValue>
                  <MetricLabel>Dividend Yield</MetricLabel>
                </div>
              </MetricCard>
            </MetricsGrid>
          </OverviewRight>
          
          <OwnershipBenefitsContainer>
            <OwnershipBenefitsTitle>
              <FaHandshake /> Ownership Rights
            </OwnershipBenefitsTitle>
            <BenefitsGrid>
              <BenefitCard>
                <BenefitIcon>
                  <BiDollar />
                </BenefitIcon>
                <BenefitContent>
                  <BenefitTitle>Payout upon sale of property</BenefitTitle>
                  <BenefitDescription>
                    Receive your share of proceeds when the property is sold, directly proportional to your ownership stake.
                  </BenefitDescription>
                </BenefitContent>
              </BenefitCard>
              
              <BenefitCard>
                <BenefitIcon>
                  <FaPercentage />
                </BenefitIcon>
                <BenefitContent>
                  <BenefitTitle>Weekly Rental Distributions</BenefitTitle>
                  <BenefitDescription>
                    Earn passive income through regular rental distributions paid directly to token holders.
                  </BenefitDescription>
                </BenefitContent>
              </BenefitCard>
              
              <BenefitCard>
                <BenefitIcon>
                  <BiLineChart />
                </BenefitIcon>
                <BenefitContent>
                  <BenefitTitle>Active Market Trading</BenefitTitle>
                  <BenefitDescription>
                    Capture gains through active market trading without the friction of traditional real estate transactions. Developed by quants and powered by blockchain with unprecedented liquidity enabled through platform reserves.
                  </BenefitDescription>
                </BenefitContent>
              </BenefitCard>
              
              <BenefitCard>
                <BenefitIcon>
                  <FaKey />
                </BenefitIcon>
                <BenefitContent>
                  <BenefitTitle>Exclusive Reservation Rights</BenefitTitle>
                  <BenefitDescription>
                    Enjoy priority access to property reservations for personal stays at owner's rates.
                  </BenefitDescription>
                </BenefitContent>
              </BenefitCard>
              
              <BenefitCard>
                <BenefitIcon>
                  <MdHowToVote />
                </BenefitIcon>
                <BenefitContent>
                  <BenefitTitle>Governance Rights</BenefitTitle>
                  <BenefitDescription>
                    Vote on major property decisions including renovations, management changes, and potential sale offers.
                  </BenefitDescription>
                </BenefitContent>
              </BenefitCard>
              
              <BenefitCard>
                <BenefitIcon>
                  <BiCreditCard />
                </BenefitIcon>
                <BenefitContent>
                  <BenefitTitle>Spend Your Equity</BenefitTitle>
                  <BenefitDescription>
                    Spend your equity without having to withdraw or sell, directly on the platform or via Loaf Card powered by Visa.
                  </BenefitDescription>
                </BenefitContent>
              </BenefitCard>
            </BenefitsGrid>
          </OwnershipBenefitsContainer>
        </OverviewGrid>
      </ContentSection>
      
      {/* Trade Tab */}
      <ContentSection 
        active={activeTab === 'trade'} 
        ref={tradePanelRef}
        className={activeTab === 'trade' ? 'trade-console' : ''}
      >
        <TradeLayout>
          <div>
            {/* Trade Asset Selector */}
            <TradeAssetSelector>
              <AssetSelectorDropdown onClick={() => setTradeAssetDropdownOpen(!tradeAssetDropdownOpen)}>
                <AssetName>
                  {property.name}
                  <svg 
                    className="dropdown-icon"
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    style={{ transform: tradeAssetDropdownOpen ? 'rotate(180deg)' : 'none' }}
                  >
                    <path d="M7 10l5 5 5-5H7z" />
                  </svg>
                </AssetName>
              </AssetSelectorDropdown>
              
              <CompareButton>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                </svg>
                Compare
              </CompareButton>
              
              {tradeAssetDropdownOpen && (
                <PropertyDropdown>
                  {mockProperties.map((prop) => (
                    <PropertyOption 
                      key={prop.id} 
                      onClick={() => {
                        setProperty(prop);
                        setTradeAssetDropdownOpen(false);
                      }}
                      selected={prop.id === property.id}
                    >
                      <PropertyOptionName>{prop.name}</PropertyOptionName>
                      <PropertyOptionLocation>{prop.location}</PropertyOptionLocation>
                    </PropertyOption>
                  ))}
                </PropertyDropdown>
              )}
            </TradeAssetSelector>
            
            <ChartSection>
              <div className="chart-header">
                <div className="chart-title-container">
                  <h3>Price Chart</h3>
                  <div className="price-display">
                    <div className="price-main">
                      <span className={`price-value-container ${priceFlash ? (token?.priceChange > 0 ? 'flash-increase' : 'flash-decrease') : ''}`}>
                        <span className="price-value">
                          ${token?.price ? token.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}).slice(0, -1) : '0.0'}
                        </span>
                        <span className={`last-digit ${!priceFlash && (token?.priceChange > 0 ? 'last-digit-increase' : token?.priceChange < 0 ? 'last-digit-decrease' : '')}`}>
                          {token?.price ? token.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}).slice(-1) : '0'}
                        </span>
                      </span>
                      <span className="price-currency">AUD</span>
                    </div>
                    <div className="price-changes">
                      <span className={`absolute-change ${token?.change < 0 ? 'negative' : 'positive'}`}>
                        {token?.change >= 0 ? '+' : '-'}
                        ${Math.abs(token?.price - token?.basePrice).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                      </span>
                      <span className={`price-change ${token?.change < 0 ? 'negative' : 'positive'}`}>
                        {token?.change > 0 ? '+' : ''}{token?.change}%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="chart-controls">
                  <button className="chart-btn active">1D</button>
                  <button className="chart-btn">1W</button>
                  <button className="chart-btn">1M</button>
                  <button className="chart-btn">3M</button>
                  <button className="chart-btn">1Y</button>
                  <button className="chart-btn">All</button>
                </div>
              </div>
              <div className="chart-container">
                <div className="chart-grid">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="chart-grid-line" style={{ bottom: `${i * 25}%` }} />
                  ))}
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="chart-grid-line vertical" style={{ left: `${i * 20}%` }} />
                  ))}
                  <div className="chart-line" />
                </div>
              </div>
            </ChartSection>
            
            <OrderSection>
              <OrderBookSection>
                <div className="section-header">
                  <h3>Order Book</h3>
                  <div className="section-controls">
                    <span className="active">0.01</span>
                    <span>0.1</span>
                    <span>1</span>
                  </div>
                </div>
                <div className="order-book-container">
                  <div className="order-book-header">
                    <div>Price (USD)</div>
                    <div>Amount</div>
                    <div>Total</div>
                  </div>
                  <div className="order-book-sells" ref={sellOrdersRef}>
                    {orderBookSells.map((item, i) => (
                      <div key={i} className="order-row sell">
                        <div className={`price ${item.priceDirection || 'neutral'} sell`}>
                          ${item.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                        </div>
                        <div className="amount">{item.amount}</div>
                        <div className="total">${item.total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                        <div className="depth-indicator" style={{ width: `${item.depth}%` }} />
                      </div>
                    ))}
                  </div>
                  <div className="order-book-current-price">
                    <div className={`current-price ${token.priceChange > 0 ? 'increasing' : token.priceChange < 0 ? 'decreasing' : ''}`}>
                      ${token.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                      <div className={`price-change ${token.change < 0 ? 'negative' : ''}`}>
                        {token.change > 0 ? '+' : ''}{token.change}%
                      </div>
                    </div>
                    <div></div>
                    <div></div>
                  </div>
                  <div className="order-book-buys">
                    {orderBookBuys.map((item, i) => (
                      <div key={i} className="order-row buy">
                        <div className={`price ${item.priceDirection || 'neutral'} buy`}>
                          ${item.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                        </div>
                        <div className="amount">{item.amount}</div>
                        <div className="total">${item.total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                        <div className="depth-indicator" style={{ width: `${item.depth}%` }} />
                      </div>
                    ))}
                  </div>
                </div>
              </OrderBookSection>
              
              <MarketTradesSection>
                <div className="section-header">
                  <h3>Market Trades</h3>
                  <div className="section-controls">
                    <span className="active">All</span>
                    <span>Buy</span>
                    <span>Sell</span>
                  </div>
                </div>
                <div className="market-trades-container">
                  <div className="market-trades-header">
                    <div>Price (USD)</div>
                    <div>Amount</div>
                    <div>Time</div>
                  </div>
                  <div className="market-trades-list">
                    {marketTrades.map((trade, i) => (
                      <div key={i} className={`trade-row ${trade.type}`}>
                        <div className="price">${trade.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                        <div className="amount">{trade.amount}</div>
                        <div className="time">{trade.time}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </MarketTradesSection>
            </OrderSection>
          </div>
          
          <TradePanelSection>
              <div className="section-header">
                <h3>Place Order</h3>
                <div className="section-controls">
                  <span 
                    className={orderType === 'limit' ? 'active' : ''}
                    onClick={() => handleOrderTypeChange('limit')}
                  >
                    Limit
                  </span>
                  <span 
                    className={orderType === 'market' ? 'active' : ''}
                    onClick={() => handleOrderTypeChange('market')}
                  >
                    Market
                  </span>
                  <span 
                    className={orderType === 'stop' ? 'active' : ''}
                    onClick={() => handleOrderTypeChange('stop')}
                  >
                    Stop
                  </span>
                </div>
              </div>
            
            
            <div className="trade-tabs">
              <button 
                className={`trade-tab ${activeOrderTab === 'buy' ? 'active' : ''}`}
                onClick={() => handleOrderTabChange('buy')}
              >
                Buy
              </button>
              <button 
                className={`trade-tab ${activeOrderTab === 'sell' ? 'active' : ''}`}
                onClick={() => handleOrderTabChange('sell')}
              >
                Sell
              </button>
            </div>
            
            <div className="trade-form">
              {orderType === 'stop' ? (
                <div style={{ display: 'flex', gap: '10px' }}>
                  <div className="form-group" style={{ flex: 1 }}>
                    <label>Stop Price</label>
                    <div className="input-group">
                      <input 
                        type="text" 
                        value={typeof stopPrice === 'string' ? stopPrice : stopPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} 
                        onChange={handleStopPriceChange}
                      />
                      <span className="input-addon">AUD</span>
                    </div>
                  </div>
                  <div className="form-group" style={{ flex: 1 }}>
                    <label>Price</label>
                    <div className="input-group">
                      <input 
                        type="text" 
                        value={typeof orderPrice === 'string' ? orderPrice : orderPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} 
                        onChange={handleOrderPriceChange}
                      />
                      <span className="input-addon">AUD</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="form-group">
                  <label>Price</label>
                  <div className="input-group">
                    <input 
                      type="text" 
                      value={orderType === 'market' ? 'Market price' : (typeof orderPrice === 'string' ? orderPrice : orderPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }))} 
                      onChange={handleOrderPriceChange}
                      disabled={orderType === 'market'}
                      style={orderType === 'market' ? { color: 'rgba(255, 255, 255, 0.5)' } : {}}
                    />
                    <span className="input-addon">AUD</span>
                  </div>
                </div>
              )}
              
              <div className="form-group">
                <label>Amount</label>
                <div className="input-group">
                  <input 
                    type="text" 
                    value={typeof orderTokenAmount === 'string' ? orderTokenAmount : orderTokenAmount.toLocaleString(undefined, { minimumFractionDigits: 3, maximumFractionDigits: 3 })} 
                    onChange={handleOrderTokenAmountChange}
                    placeholder="0.000" 
                  />
                  <span className="input-addon">Elara</span>
                </div>
              </div>
              
              
              <div className="trade-slider" style={{ marginBottom: '20px' }}>
                <div className="slider-labels" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                  <span>0%</span>
                  <span>25%</span>
                  <span>50%</span>
                  <span>75%</span>
                  <span>100%</span>
                </div>
                
                {/* Custom slider with mouse event handlers */}
                <div 
                  style={{ 
                    position: 'relative', 
                    padding: '10px 0',
                    height: '30px',
                    cursor: 'pointer'
                  }}
                  onMouseDown={(e) => {
                    // Get slider track dimensions
                    const sliderTrack = e.currentTarget;
                    const rect = sliderTrack.getBoundingClientRect();
                    
                    // Calculate percentage based on click position
                    const offsetX = e.clientX - rect.left;
                    const percentage = Math.min(100, Math.max(0, Math.round((offsetX / rect.width) * 100)));
                    
                    // Update slider state
                    setSliderPercentage(percentage);
                    
                    // Calculate new total and token amount
                    const newTotal = (availableFunds * percentage) / 100;
                    const newTokenAmount = orderPrice > 0 ? newTotal / orderPrice : 0;
                    setOrderTokenAmount(newTokenAmount);
                    setOrderTotal(newTotal);
                    
                    // Handle mouse move for dragging
                    const handleMouseMove = (moveEvent) => {
                      moveEvent.preventDefault();
                      const newOffsetX = moveEvent.clientX - rect.left;
                      const newPercentage = Math.min(100, Math.max(0, Math.round((newOffsetX / rect.width) * 100)));
                      
                      setSliderPercentage(newPercentage);
                      const updatedTotal = (availableFunds * newPercentage) / 100;
                      const updatedTokenAmount = orderPrice > 0 ? updatedTotal / orderPrice : 0;
                      setOrderTokenAmount(updatedTokenAmount);
                      setOrderTotal(updatedTotal);
                    };
                    
                    // Clean up event listeners on mouse up
                    const handleMouseUp = () => {
                      document.removeEventListener('mousemove', handleMouseMove);
                      document.removeEventListener('mouseup', handleMouseUp);
                    };
                    
                    // Add event listeners for drag behavior
                    document.addEventListener('mousemove', handleMouseMove);
                    document.addEventListener('mouseup', handleMouseUp);
                  }}
                >
                  {/* Track background */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: 0,
                      right: 0,
                      height: '6px',
                      transform: 'translateY(-50%)',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '3px'
                    }}
                  />
                  
                  {/* Fill */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: 0,
                      width: `${sliderPercentage}%`,
                      height: '6px',
                      transform: 'translateY(-50%)',
                      backgroundColor: 'var(--color-accent, #f0b90b)',
                      borderRadius: '3px'
                    }}
                  />
                  
                  {/* Handle */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: `${sliderPercentage}%`,
                      width: '20px',
                      height: '20px',
                      backgroundColor: 'var(--color-accent, #f0b90b)',
                      borderRadius: '50%',
                      transform: 'translate(-50%, -50%)',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
                      transition: 'transform 0.05s ease'
                    }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.75rem' }}>
                  {/* Evenly spaced percentage buttons */}
                  {[25, 50, 75, 100].map(percent => (
                    <button
                      key={percent}
                      onClick={() => {
                        const newPercentage = percent;
                        setSliderPercentage(newPercentage);
                        const newTotal = (availableFunds * newPercentage) / 100;
                        const newTokenAmount = orderPrice > 0 ? newTotal / orderPrice : 0;
                        setOrderTokenAmount(newTokenAmount);
                        setOrderTotal(newTotal);
                      }}
                      style={{
                        width: '60px',
                        padding: '0.5rem 0',
                        fontSize: '0.75rem',
                        backgroundColor: sliderPercentage === percent ? 'var(--color-accent)' : 'rgba(30, 32, 38, 0.5)',
                        color: sliderPercentage === percent ? 'var(--color-background)' : 'var(--color-text-secondary)',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        textAlign: 'center'
                      }}
                    >
                      {percent}%
                    </button>
                  ))}
                </div>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', padding: '0 0.5rem' }}>
                <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
                  Available Funds: ${availableFunds.toLocaleString()}
                </div>
                <button style={{ background: 'none', border: 'none', color: 'var(--color-accent, #f0b90b)', fontSize: '0.9rem', cursor: 'pointer', padding: '0' }}>Add Funds</button>
              </div>
              
              <div className="form-group">
                <label>Total</label>
                <div className="input-group">
                  <input 
                    type="text" 
                    value={typeof orderTotal === 'string' ? orderTotal : orderTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} 
                    onChange={handleOrderTotalChange}
                    placeholder="0.00" 
                  />
                  <span className="input-addon">AUD</span>
                </div>
              </div>
              
              <div className="trade-summary">
                <div className="summary-row">
                  <span>Property Valuation</span>
                  <span>${(orderPrice * 100).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
                <div className="summary-row">
                  <span>Ownership</span>
                  <span>
                    {(typeof orderTokenAmount === 'string' ? parseFloat(orderTokenAmount.replace(/,/g, '')) || 0 : orderTokenAmount).toFixed(3)}%
                  </span>
                </div>
                <div className="summary-row">
                  <span>Est. Fee</span>
                  <span>
                    {(typeof orderTokenAmount === 'string' ? 
                      (parseFloat(orderTokenAmount.replace(/,/g, '')) * 0.001) : 
                      (orderTokenAmount * 0.001)).toLocaleString(undefined, { minimumFractionDigits: 6, maximumFractionDigits: 6 })} Elara
                  </span>
                </div>
                <div className="summary-row">
                  <span>Stamp Duty</span>
                  <span>-</span>
                </div>
              </div>
              
              {orderError && (
                <div style={{ 
                  color: 'var(--color-error, #ff4d4f)', 
                  fontSize: '0.85rem', 
                  margin: '0.5rem 0',
                  textAlign: 'center'
                }}>
                  {orderError}
                </div>
              )}
              
              <button 
                className={`trade-button ${activeOrderTab === 'buy' ? 'buy' : 'sell'}`}
                disabled={orderTokenAmount <= 0 || orderTotal <= 0 || !!orderError || isProcessing}
                onClick={handlePlaceOrder}
              >
                {isProcessing ? (
                  'Processing...'
                ) : (
                  `${activeOrderTab === 'buy' ? 'Buy' : 'Sell'} Elara`
                )}
              </button>
            </div>
          </TradePanelSection>
          
          <BottomPanelsContainer>
            <TradeNewsPanel>
              <TradeNewsHeader>
                <h3>Property News & Updates</h3>
              </TradeNewsHeader>
              <TradeNewsList>
                {property.news && property.news.slice(0, 4).map(newsItem => (
                  <TradeNewsItem key={newsItem.id}>
                    <TradeNewsTitle>{newsItem.title}</TradeNewsTitle>
                    <TradeNewsInfo>
                      <TradeNewsDate>{newsItem.date}</TradeNewsDate>
                      <TradeNewsCategory type={newsItem.type}>
                        {newsItem.type === 'property' ? 'Property Update' : 'Market News'}
                      </TradeNewsCategory>
                    </TradeNewsInfo>
                  </TradeNewsItem>
                ))}
              </TradeNewsList>
            </TradeNewsPanel>
            
            <OrdersSection>
              <div className="section-header">
                <h3>Your Orders</h3>
              </div>
              <OrdersHeader>
                <HeaderItem>Asset</HeaderItem>
                <HeaderItem>Type</HeaderItem>
                <HeaderItem>Date</HeaderItem>
                <HeaderItem>Price</HeaderItem>
                <HeaderItem>Amount</HeaderItem>
                <HeaderItem>Total</HeaderItem>
                <HeaderItem>Filled</HeaderItem>
                <HeaderItem align="center">Actions</HeaderItem>
              </OrdersHeader>
              <OrdersList>
                {console.log('Rendering orders:', orders)}
                {orders && orders.length > 0 ? (
                  orders.map(order => (
                    <OrderItem key={order.id}>
                      <OrderAsset>
                        {order.id === 1 ? '20A Vaucluse Rd' : 
                         order.id === 2 ? '42 Bellevue Hill Rd' : 
                         order.id === 3 ? '15 Point Piper Ave' : 
                         order.id === 4 ? '8 Rose Bay Pl' : 'Unknown Property'}
                      </OrderAsset>
                      <OrderType type={order.type}>
                        {order.type.toUpperCase()}
                      </OrderType>
                      <OrderDate>
                        {new Date(order.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </OrderDate>
                      <OrderPrice>
                        ${order.price.toLocaleString()}
                        <EditIconButton onClick={() => console.log(`Edit price for order ${order.id}`)}>
                          <BiEditAlt size={16} />
                        </EditIconButton>
                      </OrderPrice>
                      <OrderAmount>
                        {order.amount}
                        <EditIconButton onClick={() => console.log(`Edit amount for order ${order.id}`)}>
                          <BiEditAlt size={16} />
                        </EditIconButton>
                      </OrderAmount>
                      <OrderTotal>
                        ${order.total.toLocaleString()}
                      </OrderTotal>
                      <FilledContainer>
                        <FilledText>{order.filled || Math.floor(Math.random() * 100)}%</FilledText>
                        <ProgressBarContainer>
                          <ProgressBarFill percentage={order.filled || Math.floor(Math.random() * 100)} />
                        </ProgressBarContainer>
                      </FilledContainer>
                      <div style={{ textAlign: 'center' }}>
                        <CancelButton onClick={() => console.log(`Cancelling order ${order.id}`)}>
                          Cancel
                        </CancelButton>
                      </div>
                    </OrderItem>
                  ))
                ) : (
                  <OrderItem>
                    <div style={{ textAlign: 'center', width: '100%', padding: '1rem 0' }}>
                      No active orders found
                    </div>
                  </OrderItem>
                )}
              </OrdersList>
            </OrdersSection>
          </BottomPanelsContainer>
        </TradeLayout>
      </ContentSection>
      
      {/* Market Data Tab */}
      <ContentSection active={activeTab === 'market'}>
        <div style={{ marginBottom: '2rem' }}>
          <h2>Market Data</h2>
        </div>
        
        {/* Loaf Pricing Model Section */}
        <LoafPricingSection>
          <h2>Loaf Pricing Model</h2>
          <PricingModelCard>
            <PricingModelHeader>
              <PricingModelTitle>28 Derby Street (Elara)</PricingModelTitle>
              <PricingModelValue>Valuation as of <span style={{ color: 'var(--color-accent)' }}>{new Date().toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}</span></PricingModelValue>
            </PricingModelHeader>
            
            <PricingModelDetails>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <PricingModelDetail>
                  <PropertyDetailLabel>Last Price</PropertyDetailLabel>
                  <PricingDetailValue>${token.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</PricingDetailValue>
                </PricingModelDetail>
                
                <PricingModelDetail>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <PropertyDetailLabel>Fair Value</PropertyDetailLabel>
                    <span style={{ fontSize: '0.75rem', color: '#4CAF50', fontWeight: 'bold' }}>Confidence: High</span>
                  </div>
                  <PricingDetailValue style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>$250.00 <span style={{ fontSize: '0.85em', fontWeight: 'normal', opacity: 0.8 }}>(${(250 * 50000).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })})</span></PricingDetailValue>
                </PricingModelDetail>
                
              </div>
              
              <PricingModelDetail>
                <PropertyDetailLabel>Valuation</PropertyDetailLabel>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  background: 'linear-gradient(90deg, rgba(76, 175, 80, 0.05) 0%, rgba(76, 175, 80, 0.1) 100%)',
                  borderRadius: '8px',
                  padding: '10px 16px',
                  border: '1px solid rgba(76, 175, 80, 0.2)',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                  width: '100%'
                }}>
                  <span style={{ 
                    color: '#4CAF50', 
                    fontWeight: '600', 
                    fontSize: '16px',
                    letterSpacing: '0.3px'
                  }}>Undervalued</span>
                  <div style={{ 
                    background: 'linear-gradient(135deg, #4CAF50 0%, #45a049 100%)', 
                    color: 'white', 
                    padding: '5px 12px', 
                    borderRadius: '20px', 
                    fontSize: '14px',
                    fontWeight: '600',
                    boxShadow: '0 2px 4px rgba(76, 175, 80, 0.25)'
                  }}>-3.2%</div>
                </div>
              </PricingModelDetail>
              
              <PricingModelDetail>
                <PropertyDetailLabel>Area Demand</PropertyDetailLabel>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <PricingDetailValue>Hot</PricingDetailValue>
                  <div style={{ height: '60px', width: '100%', position: 'relative' }}>
                    <svg width="100%" height="60" viewBox="0 0 180 60" preserveAspectRatio="none">
                      {/* Background segments */}
                      <rect x="0" y="0" width="180" height="20" fill="rgba(244, 67, 54, 0.2)" />
                      <rect x="0" y="20" width="180" height="20" fill="rgba(255, 152, 0, 0.15)" />
                      <rect x="0" y="40" width="180" height="20" fill="rgba(158, 158, 158, 0.15)" />
                      
                      {/* Horizontal grid lines */}
                      <line x1="0" y1="20" x2="180" y2="20" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                      <line x1="0" y1="40" x2="180" y2="40" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                      
                      {/* Vertical grid lines */}
                      <line x1="45" y1="0" x2="45" y2="60" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                      <line x1="90" y1="0" x2="90" y2="60" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                      <line x1="135" y1="0" x2="135" y2="60" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                      
                      {/* Area demand line with more fluctuation */}
                      <path 
                        d="M0,35 C10,30 20,25 30,20 C40,15 50,25 60,15 C70,30 80,10 90,25 C100,15 110,5 120,15 C130,10 140,20 150,5 C160,10 170,5 180,5" 
                        fill="none" 
                        stroke="#F44336" 
                        strokeWidth="2" 
                      />
                    </svg>
                    
                    {/* Labels */}
                    <div style={{ position: 'absolute', top: '3px', right: '5px', fontSize: '9px', color: 'rgba(255,255,255,0.7)' }}>Hot</div>
                    <div style={{ position: 'absolute', top: '23px', right: '5px', fontSize: '9px', color: 'rgba(255,255,255,0.7)' }}>Warm</div>
                    <div style={{ position: 'absolute', top: '43px', right: '5px', fontSize: '9px', color: 'rgba(255,255,255,0.7)' }}>Cold</div>
                    
                    <div style={{ position: 'absolute', bottom: '-15px', left: '0', fontSize: '9px', color: 'rgba(255,255,255,0.5)' }}>2020</div>
                    <div style={{ position: 'absolute', bottom: '-15px', left: '45px', fontSize: '9px', color: 'rgba(255,255,255,0.5)' }}>2021</div>
                    <div style={{ position: 'absolute', bottom: '-15px', left: '90px', fontSize: '9px', color: 'rgba(255,255,255,0.5)' }}>2022</div>
                    <div style={{ position: 'absolute', bottom: '-15px', left: '135px', fontSize: '9px', color: 'rgba(255,255,255,0.5)' }}>2023</div>
                    <div style={{ position: 'absolute', bottom: '-15px', right: '0', fontSize: '9px', color: 'rgba(255,255,255,0.5)' }}>2025</div>
                  </div>
                </div>
              </PricingModelDetail>
              
              <PricingModelDetail>
                <PropertyDetailLabel>Property Moat</PropertyDetailLabel>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <PricingDetailValue>Wide</PricingDetailValue>
                  <div style={{ height: '60px', width: '100%', position: 'relative' }}>
                    <svg width="100%" height="60" viewBox="0 0 180 60" preserveAspectRatio="none">
                      {/* Background segments */}
                      <rect x="0" y="0" width="180" height="20" fill="rgba(0, 137, 123, 0.2)" />
                      <rect x="0" y="20" width="180" height="20" fill="rgba(102, 187, 106, 0.15)" />
                      <rect x="0" y="40" width="180" height="20" fill="rgba(200, 230, 201, 0.15)" />
                      
                      {/* Horizontal grid lines */}
                      <line x1="0" y1="20" x2="180" y2="20" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                      <line x1="0" y1="40" x2="180" y2="40" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                      
                      {/* Vertical grid lines */}
                      <line x1="45" y1="0" x2="45" y2="60" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                      <line x1="90" y1="0" x2="90" y2="60" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                      <line x1="135" y1="0" x2="135" y2="60" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                      
                      {/* Property moat line - fluctuating within Wide Moat region */}
                      <path 
                        d="M0,15 C10,12 20,8 30,10 C40,5 50,12 60,8 C70,15 80,10 90,5 C100,12 110,8 120,15 C130,10 140,5 150,12 C160,8 170,10 180,5" 
                        fill="none" 
                        stroke="#00897B" 
                        strokeWidth="2" 
                      />
                    </svg>
                    
                    {/* Labels */}
                    <div style={{ position: 'absolute', top: '3px', right: '5px', fontSize: '9px', color: 'rgba(255,255,255,0.7)' }}>Wide Moat</div>
                    <div style={{ position: 'absolute', top: '23px', right: '5px', fontSize: '9px', color: 'rgba(255,255,255,0.7)' }}>Narrow Moat</div>
                    <div style={{ position: 'absolute', top: '43px', right: '5px', fontSize: '9px', color: 'rgba(255,255,255,0.7)' }}>No Moat</div>
                    
                    <div style={{ position: 'absolute', bottom: '-15px', left: '0', fontSize: '9px', color: 'rgba(255,255,255,0.5)' }}>2020</div>
                    <div style={{ position: 'absolute', bottom: '-15px', left: '45px', fontSize: '9px', color: 'rgba(255,255,255,0.5)' }}>2021</div>
                    <div style={{ position: 'absolute', bottom: '-15px', left: '90px', fontSize: '9px', color: 'rgba(255,255,255,0.5)' }}>2022</div>
                    <div style={{ position: 'absolute', bottom: '-15px', left: '135px', fontSize: '9px', color: 'rgba(255,255,255,0.5)' }}>2023</div>
                    <div style={{ position: 'absolute', bottom: '-15px', right: '0', fontSize: '9px', color: 'rgba(255,255,255,0.5)' }}>2025</div>
                  </div>
                </div>
              </PricingModelDetail>
            </PricingModelDetails>
            
            <ValuationIndicator>
              <ValuationHeader>
                <ValuationTitle style={{ color: '#4CAF50' }}>Undervalued</ValuationTitle>
                <ValuationTitle style={{ color: 'var(--color-accent)', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>Fair Value</ValuationTitle>
                <ValuationStatus color="#F44336">Overvalued</ValuationStatus>
              </ValuationHeader>
              
              <ValuationGauge>
                <GaugeBackground />
                {/* Fair Value indicator fixed at center */}
                <GaugeIndicator 
                  type="fairValue" 
                  position={50}
                />
                {/* Last Price indicator (hollow black circle) */}
                {/* Last Price Label above the bar */}
                <div style={{ 
                  position: 'absolute', 
                  left: `${calculatePositionFromPrice(token.price, 129650.6 * 0.9, 129650.6, 129650.6 * 1.1)}%`, 
                  top: '-45px', 
                  transform: 'translateX(-50%)',
                  color: '#fff',
                  fontWeight: '500',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  textAlign: 'center',
                  lineHeight: '1.2',
                  fontFamily: 'inherit'
                }}>
                  Last Price:<br />${token.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                
                {/* Last Price indicator (hollow black circle) */}
                <GaugeIndicator 
                  position={calculatePositionFromPrice(token.price, 129650.6 * 0.9, 129650.6, 129650.6 * 1.1)}
                  style={{ 
                    backgroundColor: 'transparent', 
                    borderColor: '#000', 
                    borderWidth: '2px',
                    zIndex: 4 
                  }}
                />
              </ValuationGauge>
              
              <ValuationDetails>
                <ValuationItem>
                  <ValuationValue style={{ color: '#4CAF50' }}>&lt; ${(129650.6 * 0.9).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} <span style={{ fontSize: '0.8rem', fontWeight: 'normal' }}>($${(129650.6 * 0.9 / 10000).toFixed(2)}m)</span></ValuationValue>
                </ValuationItem>
                
                <ValuationItem>
                  <ValuationValue style={{ color: 'var(--color-accent)' }}>${(129650.6).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} <span style={{ fontSize: '0.8rem', fontWeight: 'normal' }}>($${(129650.6 / 10000).toFixed(2)}m)</span></ValuationValue>
                </ValuationItem>
                
                <ValuationItem>
                  <ValuationValue style={{ color: '#F44336' }}>&gt; ${(129650.6 * 1.1).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} <span style={{ fontSize: '0.8rem', fontWeight: 'normal' }}>($${(129650.6 * 1.1 / 10000).toFixed(2)}m)</span></ValuationValue>
                </ValuationItem>
              </ValuationDetails>
            </ValuationIndicator>
            
            <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', color: '#fff' }}>Historical Valuation</h3>
            
            <ChartContainer>
              <div style={{ height: '300px', position: 'relative', marginBottom: '20px', padding: '10px', width: '100%' }}>
                {/* Historical chart with quarterly data */}
                <div style={{ position: 'relative', height: '100%', width: '100%' }}>
                  {/* Chart background */}
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(255,255,255,0.03)', borderRadius: '8px', zIndex: 1 }}></div>
                  
                  {/* Y-axis grid lines */}
                  {[0, 25, 50, 75, 100].map((pos) => (
                    <div key={`y-${pos}`} style={{ 
                      position: 'absolute', 
                      left: 40, 
                      right: 10, 
                      height: '1px', 
                      bottom: `${pos}%`, 
                      background: 'rgba(255,255,255,0.1)' 
                    }}></div>
                  ))}
                  
                  {/* X-axis grid lines and labels */}
                  {['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023', 'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025'].map((quarter, index, arr) => {
                    // Calculate position evenly from left to right
                    const position = index / (arr.length - 1) * 100;
                    return (
                      <div key={`x-${index}`}>
                        <div style={{ 
                          position: 'absolute', 
                          bottom: 25, 
                          top: 10, 
                          width: '1px', 
                          left: `${position}%`, 
                          background: 'rgba(255,255,255,0.1)' 
                        }}></div>
                        <div style={{ 
                          position: 'absolute', 
                          bottom: 5, 
                          left: `${position}%`, 
                          transform: 'translateX(-50%)', 
                          fontSize: '10px', 
                          color: 'rgba(255,255,255,0.6)' 
                        }}>{quarter}</div>
                      </div>
                    );
                  })}
                  
                  {/* Y-axis labels - positioned on left */}
                  <div style={{ position: 'absolute', top: 10, bottom: 25, left: -40, width: 40, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    {['$130K', '$125K', '$120K', '$115K', '$110K'].map((label, index) => (
                      <div key={`y-label-${index}`} style={{ fontSize: '10px', color: 'rgba(255,255,255,0.6)', textAlign: 'right', paddingRight: '5px' }}>
                        {label}
                      </div>
                    ))}
                  </div>
                  
                  {/* Chart lines */}
                  <svg 
                    style={{ position: 'absolute', top: 10, right: 0, bottom: 25, left: 0, overflow: 'visible', width: '100%', height: 'calc(100% - 35px)', zIndex: 10 }}
                    viewBox="0 0 1200 200"
                    preserveAspectRatio="none"
                  >
                    {/* 
                      Y-axis mapping:
                      $130K = y:40
                      $125K = y:60
                      $120K = y:80
                      $115K = y:100
                      $110K = y:120
                    */}
                    
                    {/* Fair Value line - ends at $129,650.60 (between $130K and $125K) */}
                    <path 
                      d="M 0 180 L 50 175 L 100 170 L 150 165 L 200 160 L 250 155 L 300 150 L 350 145 L 400 140 L 450 130 L 500 120 L 550 110 L 600 95 L 620 100 L 640 95 L 660 90 L 700 85 L 750 80 L 800 70 L 850 65 L 900 55 L 950 50 L 1000 45 L 1050 50 L 1080 65 L 1100 55 L 1120 50 L 1150 45 L 1200 42" 
                      fill="none" 
                      stroke="#D4AF37" 
                      strokeWidth="2.5" 
                      strokeLinecap="round"
                      strokeLinejoin="round" 
                      vectorEffect="non-scaling-stroke"
                    />
                    
                    {/* Elara Price line - ends at $125,192.81 (at $125K) with realistic market volatility */}
                    <path 
                      d="M 0 190 L 50 180 L 100 175 L 150 170 L 180 165 L 200 160 L 250 155 L 280 150 L 300 145 L 350 140 L 380 135 L 400 130 L 420 125 L 450 120 L 480 115 L 500 110 L 520 105 L 540 100 L 560 95 L 580 90 L 600 85 L 620 105 L 640 110 L 660 115 L 680 110 L 700 105 L 720 100 L 740 95 L 760 90 L 780 85 L 800 80 L 820 75 L 840 70 L 860 65 L 880 60 L 900 75 L 920 70 L 940 65 L 960 60 L 980 55 L 1000 50 L 1020 75 L 1040 70 L 1060 65 L 1080 130 L 1100 100 L 1120 70 L 1140 65 L 1160 60 L 1180 65 L 1200 60" 
                      fill="none" 
                      stroke="#FFFFFF" 
                      strokeWidth="2" 
                      strokeLinecap="round"
                      strokeLinejoin="round" 
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                  
                  {/* Price labels on right side */}
                  <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 15, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div style={{ width: '10px', height: '2px', backgroundColor: '#D4AF37' }}></div>
                      <div style={{ fontSize: '10px', color: '#D4AF37', fontWeight: 'bold' }}>Fair Value: $129,650.60</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div style={{ width: '10px', height: '2px', backgroundColor: '#FFFFFF' }}></div>
                      <div style={{ fontSize: '10px', color: '#FFFFFF', fontWeight: 'bold' }}>Last Price: $124,813.67</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Legend removed - using inline labels instead */}
            </ChartContainer>
          </PricingModelCard>
        </LoafPricingSection>
        
        {/* Recent Sales Section */}
        <RecentSalesSection>
          <h2>Recent Sales in Comparable Suburbs</h2>
          <SalesGrid>
            {property.recentSales.map((sale, index) => (
              <SaleCard key={index}>
                <SaleImageContainer>
                  <SaleImage src={sale.imageUrl} alt={sale.address} />
                  <SoldTag>
                    <SoldIcon />
                    Sold
                  </SoldTag>
                </SaleImageContainer>
                <SaleContent>
                  <SaleAddress>{sale.address}</SaleAddress>
                  <SaleSuburb>{sale.suburb}</SaleSuburb>
                  <SalePrice>{sale.price}</SalePrice>
                  <SaleDate>{sale.saleDate}</SaleDate>
                  <SaleDetails>
                    <span>{sale.bedrooms} beds • {sale.bathrooms} baths</span>
                    <span>{sale.landSize}</span>
                  </SaleDetails>
                </SaleContent>
              </SaleCard>
            ))}
          </SalesGrid>
        </RecentSalesSection>
        
        <NewsSection>
          <h2>News & Updates</h2>
          <NewsGrid>
            {property.news.map(newsItem => (
              <NewsCard key={newsItem.id}>
                <NewsTitle>{newsItem.title}</NewsTitle>
                <NewsInfo>
                  <NewsDate>{newsItem.date}</NewsDate>
                  <NewsCategory>
                    {newsItem.type === 'property' ? 'Property Update' : 'Market News'}
                  </NewsCategory>
                </NewsInfo>
              </NewsCard>
            ))}
          </NewsGrid>
        </NewsSection>
      </ContentSection>
      
      {/* Past Sales Tab */}
      <ContentSection active={activeTab === 'past-sales'}>
        <PastSalesSection>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h2>Property History</h2>
            <FilterButtonsContainer>
              <FilterButton active={historyFilter === 'all'} onClick={() => setHistoryFilter('all')}>All</FilterButton>
              <FilterButton active={historyFilter === 'sales'} onClick={() => setHistoryFilter('sales')}>Sales</FilterButton>
              <FilterButton active={historyFilter === 'events'} onClick={() => setHistoryFilter('events')}>Events</FilterButton>
              <FilterButton active={historyFilter === 'loaf'} onClick={() => setHistoryFilter('loaf')}>Listed</FilterButton>
            </FilterButtonsContainer>
          </div>
          <HistoryContainer>
            <HistoryTableHeader>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Sale Type</th>
                  <th>Date</th>
                  <th>Price</th>
                  <th>Agent</th>
                </tr>
              </thead>
            </HistoryTableHeader>
            
            {/* Loaf listing at the top */}
            {(() => {
              // Get Loaf listing and related events
              const loafListing = pastSales.find(sale => sale.type === 'Listed');
              if (!loafListing || !(historyFilter === 'all' || historyFilter === 'loaf')) return null;
              
              // Get events related to the Loaf listing
              const loafEvents = pastSales.filter(sale => 
                sale.ownershipPeriod === 'current' && 
                sale.type !== 'Listed' &&
                (sale.id === 'leased-current' || sale.id === 'da-approval') // Include both leased and DA approval
              );
              
              return (
                <HistoryPanel key={loafListing.id} isLoafListing={true}>
                  {/* Ownership header with sale price and date */}
                  <OwnershipHeader>
                    <OwnershipPeriodLabel>
                      {loafListing.price.includes('18,750,000') ? '18.75M' : loafListing.price}
                      <span style={{ fontSize: '0.9rem', fontWeight: 'normal', marginLeft: '0.75rem', opacity: 0.8 }}>
                        {loafListing.date.replace(/\d+,\s|\s\d+$/, '')}
                      </span>
                    </OwnershipPeriodLabel>
                  </OwnershipHeader>
                  
                  {/* Main listing row */}
                  <SalesTable>
                    <tbody>
                      <HistoryRow type={loafListing.type} isOwnershipStart={true}>
                        <td>
                          <TypeBadge type={loafListing.type}>
                            {loafListing.type === 'Sale' ? 'Sold' : loafListing.type}
                          </TypeBadge>
                        </td>
                        <td>{loafListing.saleType || '-'}</td>
                        <td>{loafListing.date.replace(/\d+,\s|\s\d+$/, '')}</td>
                        <td>{loafListing.price}</td>
                        <td>{loafListing.agent}</td>
                      </HistoryRow>
                    </tbody>
                  </SalesTable>
                  
                  {/* Events related to Loaf listing */}
                  {loafEvents.length > 0 && (
                    <LeaseSection>
                      <LeaseHeader></LeaseHeader>
                      <div style={{ padding: '0.5rem 0' }}>
                        {loafEvents.map(event => (
                          <div key={event.id} style={{ marginBottom: '0.5rem' }}>
                            <EventDetails event={event} />
                          </div>
                        ))}
                      </div>
                    </LeaseSection>
                  )}
                </HistoryPanel>
              );
            })()}
            
            {/* Process and display ownership periods */}
            {(() => {
              // Get all ownership periods
              const filteredSales = pastSales
                .filter(sale => {
                  if (sale.type === 'Listed') return false; // Skip Loaf listing as it's shown above
                  if (historyFilter === 'all') return true;
                  if (historyFilter === 'sales') return sale.type === 'Sale';
                  if (historyFilter === 'lease') return sale.type === 'Lease';
                  if (historyFilter === 'loaf') return false; // Already handled above
                  return true;
                });
                
              // Sort by date to ensure reverse chronological order (most recent at top)
              filteredSales.sort((a, b) => {
                // Parse dates and compare them (newer dates first)
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                return dateB - dateA;
              });
              
              // Group by ownership period
              const groupedByPeriod = {};
              filteredSales.forEach(sale => {
                if (!groupedByPeriod[sale.ownershipPeriod]) {
                  groupedByPeriod[sale.ownershipPeriod] = [];
                }
                groupedByPeriod[sale.ownershipPeriod].push(sale);
              });
              
              // Sort periods by the date of their most recent event (newest first)
              const sortedPeriods = Object.keys(groupedByPeriod).sort((a, b) => {
                // Find the most recent date in each period
                const aDates = groupedByPeriod[a].map(s => new Date(s.date));
                const bDates = groupedByPeriod[b].map(s => new Date(s.date));
                const aLatest = new Date(Math.max(...aDates));
                const bLatest = new Date(Math.max(...bDates));
                return bLatest - aLatest; // Show newest first
              });
              
              // Render each period
              return sortedPeriods.map(period => {
                const periodSales = groupedByPeriod[period];
                const ownershipSale = periodSales.find(s => s.isOwnershipStart);
                
                // Skip periods that don't match the current filter
                if (historyFilter === 'sales' && !ownershipSale && !periodSales.some(s => s.type === 'Sale')) return null;
                if (historyFilter === 'events' && !periodSales.some(s => ['Leased', 'Renovated', 'Extended', 'Rebuilt', 'Rezoned'].includes(s.type))) return null;
                if (historyFilter === 'loaf' && !periodSales.some(s => s.type === 'Listed' || s.type === 'Loaf Listing')) return null;
                
                // Get events and non-ownership sales separately
                const eventTypes = ['Leased', 'Renovated', 'Extended', 'Rebuilt', 'Rezoned', 'DA Approval'];
                // Filter out the duplicate leased entry (leased-current) from regular events list
                const events = periodSales.filter(sale => 
                  eventTypes.includes(sale.type) && 
                  sale.id !== 'leased-current' && // Skip the one we're showing in the Loaf section
                  sale.id !== 'da-approval' && // Skip the DA approval we're showing in the Loaf section
                  (period !== 'current' || sale.type !== 'Leased') // Only show Leased in current period if it's not the duplicate
                );
                const otherSales = periodSales.filter(sale => sale.type === 'Sale' && !sale.isOwnershipStart);
                
                // Sort events and other sales by date (most recent first)
                events.sort((a, b) => new Date(b.date) - new Date(a.date));
                otherSales.sort((a, b) => new Date(b.date) - new Date(a.date));
                
                return (
                  <HistoryPanel key={period}>
                    {/* Ownership header with sale price and date */}
                    {ownershipSale && (historyFilter === 'all' || historyFilter === 'sales') && (
                      <OwnershipHeader>
                        <OwnershipPeriodLabel>
                          {ownershipSale.price.includes('18,750,000') ? '18.75M' : 
                           ownershipSale.price.includes('15,200,000') ? '15.20M' : 
                           ownershipSale.price}
                          <span style={{ fontSize: '0.9rem', fontWeight: 'normal', marginLeft: '0.75rem', opacity: 0.8 }}>
                            {ownershipSale.date.replace(/\d+,\s|\s\d+$/, '')}
                          </span>
                        </OwnershipPeriodLabel>
                      </OwnershipHeader>
                    )}
                    
                    {/* Main ownership sale */}
                    {ownershipSale && (historyFilter === 'all' || historyFilter === 'sales') && (
                      <SalesTable>
                        <tbody>
                          <HistoryRow 
                            key={ownershipSale.id}
                            isOwnershipStart={true}
                            type={ownershipSale.type}
                          >
                            <td>
                              <TypeBadge type={ownershipSale.type}>
                                {ownershipSale.type === 'Sale' ? 'Sold' : ownershipSale.type}
                              </TypeBadge>
                            </td>
                            <td>{ownershipSale.saleType || '-'}</td>
                            <td>{ownershipSale.date.replace(/\d+,\s|\s\d+$/, '')}</td>
                            <td>{ownershipSale.price}</td>
                            <td>{ownershipSale.agent}</td>
                          </HistoryRow>
                        </tbody>
                      </SalesTable>
                    )}
                    
                    {/* Events during this ownership period */}
                    {events.length > 0 && (historyFilter === 'all' || historyFilter === 'events') && (
                      <LeaseSection>
                        <LeaseHeader></LeaseHeader>
                        <div style={{ padding: '0.5rem 0' }}>
                           {events.map(event => (
                            <div key={event.id} style={{ marginBottom: '0.5rem' }}>
                              <EventDetails event={event} />
                            </div>
                          ))}
                        </div>
                      </LeaseSection>
                    )}
                    
                    {/* Other sales during this ownership period */}
                    {otherSales.length > 0 && (historyFilter === 'all' || historyFilter === 'sales') && (
                      <SalesTable>
                        <tbody>
                          {otherSales.map(sale => (
                            <HistoryRow 
                              key={sale.id}
                              type={sale.type}
                            >
                              <td>
                                <TypeBadge type={sale.type}>
                                  {sale.type === 'Sale' ? 'Sold' : sale.type}
                                </TypeBadge>
                              </td>
                              <td>{sale.saleType || '-'}</td>
                              <td>{sale.date.replace(/\d+,\s|\s\d+$/, '')}</td>
                              <td>{sale.price}</td>
                              <td>{sale.agent}</td>
                            </HistoryRow>
                          ))}
                        </tbody>
                      </SalesTable>
                    )}
                  </HistoryPanel>
                );
              });
            })()}
          </HistoryContainer>
        </PastSalesSection>
      </ContentSection>
      
      {/* Offers Tab */}
      <ContentSection active={activeTab === 'offers'}>
        <OffersSection ref={offersSectionRef}>
          <OfferSectionHeader>
            <h2>Active & Historical Buyout Offers</h2>
            <OfferButtonsContainer>
              <MakeOfferButton onClick={() => alert('Redirecting to Make Offer page...')}>Make Offer</MakeOfferButton>
              <EnquireButton onClick={() => alert('Opening Enquiry form...')}>Enquire</EnquireButton>
            </OfferButtonsContainer>
          </OfferSectionHeader>
          <OffersList>
            {offers.map(offer => (
              <OfferItem key={offer.id}>
                <OfferInfo>
                  <OfferPrice>{offer.price}</OfferPrice>
                  <OfferDetails>by {offer.buyer} • {offer.date} • Expires: {offer.expiry}</OfferDetails>
                  <div style={{ fontSize: '0.85rem', marginTop: '0.5rem', color: 'rgba(255,255,255,0.7)' }}>
                    {offer.conditions}
                  </div>
                </OfferInfo>
                <OfferActions>
                  <OfferStatus status={offer.status}>
                    {offer.status}
                  </OfferStatus>
                  {offer.status === 'active' && (
                    <VoteButton onClick={() => alert(`Voted for offer: ${offer.price} by ${offer.buyer}`)}>
                      Vote
                    </VoteButton>
                  )}
                </OfferActions>
              </OfferItem>
            ))}
          </OffersList>
        </OffersSection>
      </ContentSection>
      

      
      {/* Reserve Tab */}
      <ContentSection active={activeTab === 'owner-booking'}>
        <OwnerBooking property={property} token={token} />
      </ContentSection>
    </PageContainer>
  );
};

export default PropertyDetailNew;
