import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../context/AuthContext';

// Styled components for the top section
const TopSectionContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 100%;
  margin-bottom: 3rem;
  
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const TokensSection = styled.div`
  flex: 1;
  background-color: rgba(30, 32, 38, 0.95);
  border-radius: 8px;
  padding: 1rem 1.25rem;
  font-size: 0.875rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const NewsSection = styled.div`
  flex: 1;
  background-color: rgba(30, 32, 38, 0.95);
  border-radius: 8px;
  padding: 1rem 1.25rem;
  font-size: 0.875rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`;

const SectionTitle = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  color: #f8f9fa;
  
  svg {
    margin-right: 0.5rem;
    width: 16px;
    height: 16px;
  }
`;

const ViewAllLink = styled(Link)`
  color: #848e9c;
  font-size: 0.75rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  
  svg {
    margin-left: 4px;
    width: 12px;
    height: 12px;
  }
  
  &:hover {
    color: var(--color-accent);
  }
`;

const TabsContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding-bottom: 0.5rem;
`;

const Tab = styled.div`
  padding-bottom: 0.5rem;
  font-size: 0.75rem;
  cursor: pointer;
  color: ${props => props.active ? '#f8f9fa' : '#848e9c'};
  font-weight: ${props => props.active ? '600' : '400'};
  border-bottom: 2px solid ${props => props.active ? 'var(--color-accent)' : 'transparent'};
  margin-bottom: -1px;
  
  &:hover {
    color: ${props => props.active ? '#f8f9fa' : 'var(--color-accent)'};
  }
`;

const GoldTab = styled(Tab)`
  color: #f0b90b;
  font-weight: 700;
  border-bottom: 2px solid ${props => props.active ? '#f0b90b' : 'transparent'};
  
  &:hover {
    color: #f0b90b;
  }
`;

const ScrollableTableContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
  margin-bottom: 1rem;
  
  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(30, 32, 38, 0.5);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(240, 185, 11, 0.5);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(240, 185, 11, 0.8);
  }
`;

const TokenTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

const TokenRow = styled.tr`
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  height: 48px;
  cursor: pointer;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.02);
  }
`;

const TableHeader = styled.th`
  padding: 0 0.5rem;
  vertical-align: middle;
  text-align: ${props => props.align || 'left'};
  width: ${props => props.width || 'auto'};
  color: #848e9c;
  font-size: 0.65rem;
  font-weight: 400;
  opacity: 0.7;
  height: 0;
`;

const TokenCell = styled.td`
  padding: 0.75rem 0.5rem;
  vertical-align: middle;
  text-align: ${props => props.align || 'left'};
  border-bottom: 1px solid #2a2d3a;
  width: ${props => props.width || 'auto'};
`;

const TokenPrice = styled.div`
  font-weight: 600;
  font-size: 0.9rem;
  color: #f8f9fa;
`;

const CurrencySymbol = styled.span`
  color: #848e9c;
  font-size: 0.8rem;
  margin-right: 2px;
`;

const PriceArrow = styled.span`
  color: ${props => props.isPositive ? '#0ecb81' : '#f6465d'};
  margin: 0 2px;
  font-size: 0.8rem;
`;

const TokenChange = styled.div`
  font-size: 0.75rem;
  color: ${props => props.isPositive ? '#0ecb81' : '#f6465d'};
  display: flex;
  align-items: center;
  justify-content: ${props => props.align || 'flex-end'};
  
  &:nth-child(2) {
    text-align: right;
    font-weight: 500;
  }
  
  &:nth-child(3) {
    text-align: right;
    padding-right: 0.5rem;
  }
`;

const SortableHeader = styled.div`
  font-size: 0.65rem;
  color: #848e9c;
  opacity: 0.9;
  margin-bottom: 8px;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    color: #f8f9fa;
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

const SortArrows = styled.span`
  display: inline-block;
  margin-left: 4px;
  line-height: 1;
  
  .up-arrow {
    display: block;
    font-size: 10px;
    color: ${props => props.direction === 'desc' ? '#f0b90b' : '#848e9c'};
    margin-bottom: 1px;
  }
  
  .down-arrow {
    display: block;
    font-size: 10px;
    color: ${props => props.direction === 'asc' ? '#f0b90b' : '#848e9c'};
  }
`;

const TokenInfo = styled.div`
  display: flex;
  align-items: center;
`;

const TokenImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.75rem;
`;

const TokenName = styled.div`
  font-weight: 500;
  color: #f8f9fa;
`;

const TokenSymbol = styled.div`
  font-size: 0.8rem;
  color: #848e9c;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;

  `;

const TokenAddress = styled.div`
  font-size: 0.7rem;
  color: #848e9c;
  margin-top: 2px;
`;

const TokenHoldings = styled.div`
  font-size: 0.7rem;
  color: #f0b90b;
  margin-top: 4px;
  font-weight: 500;
  background: rgba(240, 185, 11, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
  display: inline-block;
`;

const PriceChange = styled.div`
  color: ${props => props.isPositive ? '#0ecb81' : '#f6465d'};
  font-weight: 600;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  svg {
    width: 12px;
    height: 12px;
    margin-right: 2px;
  }
`;

const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const NewsItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  cursor: pointer;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.02);
  }
`;

const NewsContent = styled.div`
  flex: 1;
`;

const NewsTitle = styled.h3`
  font-size: 0.85rem;
  font-weight: 400;
  margin-bottom: 0.25rem;
  color: #f8f9fa;
  line-height: 1.4;
  
  &:hover {
    color: var(--color-accent);
  }
`;

const NewsDetails = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

const NewsDate = styled.span`
  color: #848e9c;
  font-size: 0.7rem;
`;

const NewsTag = styled.span`
  padding: 0.15rem 0.4rem;
  border-radius: 2px;
  font-size: 0.65rem;
  background-color: ${props => 
    props.type === 'property' ? 'rgba(14, 203, 129, 0.1)' : 
    props.type === 'market' ? 'rgba(240, 185, 11, 0.1)' : 
    'rgba(255, 255, 255, 0.05)'
  };
  color: ${props => 
    props.type === 'property' ? '#0ecb81' : 
    props.type === 'market' ? '#f0b90b' : 
    '#848e9c'
  };
  font-weight: 500;
`;

const NewsArrow = styled.div`
  display: flex;
  align-items: center;
  color: #848e9c;
  margin-left: 0.5rem;
  
  svg {
    width: 14px;
    height: 14px;
  }
`;

// Mock data for tokens
const mockTokens = [
  {
    id: 1,
    name: "Elara",
    symbol: "ELRA",
    address: "Vaucluse, 28 Wentworth Road",
    imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    price: "125.78",
    absoluteChange: "+2.68",
    priceChangePercent: "+2.18%"
  },
  {
    id: 2,
    name: "Hermitage",
    symbol: "HERM",
    address: "Bellevue Hill, 45 Victoria Street",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    price: "98.45",
    absoluteChange: "-1.04",
    priceChangePercent: "-1.05%"
  },
  {
    id: 3,
    name: "Belvedere",
    symbol: "BELV",
    address: "12 Bellevue Hill Road, Bellevue Hill",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    price: "156.32",
    absoluteChange: "+5.16",
    priceChangePercent: "+3.42%"
  },
  {
    id: 4,
    name: "Mayfair",
    symbol: "MAYF",
    address: "Double Bay, 8 Double Bay Avenue",
    imageUrl: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    price: "112.65",
    absoluteChange: "+0.97",
    priceChangePercent: "+0.87%"
  },
  {
    id: 5,
    name: "Versailles",
    symbol: "VERS",
    address: "Coogee, 22 Arden Street",
    imageUrl: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    price: "85.40",
    absoluteChange: "-0.27",
    priceChangePercent: "-0.32%"
  }
];

// Mock data for news
const mockNews = [
  {
    id: 1,
    title: "Sydney's housing market is officially the second-most expensive in the world (again)",
    date: "2025-07-12",
    type: "market"
  },
  {
    id: 2,
    title: "Council approves rooftop terrace expansion for Vaucluse Mansion",
    date: "2025-06-18",
    type: "property"
  },
  {
    id: 3,
    title: "RBA slashes cash rate by 0.25bp, boosting property market",
    date: "2025-06-15",
    type: "market"
  },
  {
    id: 4,
    title: "Luxury property values in Eastern Suburbs rise 8.5% in Q2",
    date: "2025-06-10",
    type: "market"
  },
  {
    id: 5,
    title: "New elevator installation approved for Vaucluse Mansion",
    date: "2025-06-05",
    type: "property"
  }
];

// Chart component for the Loaf Index tab
const IndexChart = styled.div`
  width: 100%;
  height: 250px;
  background-color: rgba(20, 21, 26, 0.5);
  border-radius: 8px;
  padding: 1rem;
  position: relative;
  overflow: hidden;
  margin-bottom: 0.5rem;
`;

const ChartLegend = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 0.5rem;
  font-size: 0.75rem;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LegendColor = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background-color: ${props => props.color};
`;

const ChartLine = styled.div`
  position: absolute;
  height: 2px;
  background: ${props => props.color};
  bottom: ${props => props.position}px;
  left: 10%;
  width: 80%;
  opacity: 0.8;
  &:before {
    content: '';
    position: absolute;
    top: -4px;
    left: 0;
    width: 100%;
    height: 10px;
    background: ${props => props.color};
    filter: blur(12px);
    opacity: 0.5;
  }
`;

const ChartLabel = styled.div`
  position: absolute;
  left: 1rem;
  color: #848e9c;
  font-size: 0.7rem;
  bottom: ${props => props.position - 5}px;
`;

const LoafIndexChart = () => {
  return (
    <>
      <IndexChart>
        {/* Loaf Assets line - highest growth */}
        <ChartLine color="#f0b90b" position={180} />
        <ChartLabel position={180}>Loaf Assets +32.4%</ChartLabel>
        
        {/* ASX200 line - medium growth */}
        <ChartLine color="#2196f3" position={120} />
        <ChartLabel position={120}>ASX200 +8.7%</ChartLabel>
        
        {/* Global House Price line - lowest growth */}
        <ChartLine color="#e91e63" position={70} />
        <ChartLabel position={70}>Global House Price +3.2%</ChartLabel>
        
        {/* Base line */}
        <ChartLine color="rgba(255,255,255,0.1)" position={30} />
      </IndexChart>
      
      <ChartLegend>
        <LegendItem>
          <LegendColor color="#f0b90b" />
          <span>Loaf Assets</span>
        </LegendItem>
        <LegendItem>
          <LegendColor color="#2196f3" />
          <span>ASX200</span>
        </LegendItem>
        <LegendItem>
          <LegendColor color="#e91e63" />
          <span>Global House Price</span>
        </LegendItem>
      </ChartLegend>
    </>
  );
};

// Mock user properties data for the My Properties tab
const mockUserProperties = [
  {
    id: 1,
    name: "Athena",
    symbol: "ATHN",
    address: "Point Piper, 42 Wolseley Road",
    units: 288,
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    price: "87.140",
    priceChange: "-3.440",
    lastPrice: "-3.440",
    absoluteChange: "-990.72", // 288 units * -3.44 price change
    percentChange: "-3.80%",
    currency: "USD"
  },
  {
    id: 2,
    name: "Windsor",
    symbol: "WNDS",
    address: "Point Piper, 18 Wunulla Road",
    units: 261,
    imageUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    price: "118.370",
    priceChange: "-1.860",
    lastPrice: "-1.860",
    absoluteChange: "-485.46", // 261 units * -1.86 price change
    percentChange: "-1.55%",
    currency: "USD"
  },
  {
    id: 3,
    name: "Riviera",
    symbol: "RVRA",
    address: "Vaucluse, 56 Coolong Road",
    units: 53,
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    price: "321.200",
    priceChange: "-4.390",
    lastPrice: "-4.390",
    absoluteChange: "-232.67", // 53 units * -4.39 price change
    percentChange: "-1.35%",
    currency: "USD"
  },
  {
    id: 4,
    name: "Avalon",
    symbol: "AVLN",
    address: "Darling Point, 3 Lindsay Avenue",
    units: 255,
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    price: "98.940",
    priceChange: "+0.320",
    lastPrice: "+0.320",
    absoluteChange: "+81.60", // 255 units * +0.32 price change
    percentChange: "+0.32%",
    currency: "USD"
  },
  {
    id: 5,
    name: "Monarch",
    symbol: "MNCH",
    address: "Rose Bay, 5 Rose Bay Avenue",
    units: 53,
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    price: "196.430",
    priceChange: "+3.010",
    lastPrice: "+3.010",
    absoluteChange: "+159.53", // 53 units * +3.01 price change
    percentChange: "+1.56%",
    currency: "USD"
  },
  {
    id: 6,
    name: "Bellevue",
    symbol: "BLVU",
    address: "Bellevue Hill, 21 Victoria Road",
    units: 175,
    imageUrl: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    price: "143.780",
    priceChange: "+2.650",
    lastPrice: "+2.650",
    absoluteChange: "+463.75", // 175 units * +2.65 price change
    percentChange: "+1.88%",
    currency: "USD"
  },
  {
    id: 7,
    name: "Serenity",
    symbol: "SRNTY",
    address: "Mosman, 8 Bradleys Head Road",
    units: 120,
    imageUrl: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    price: "78.250",
    priceChange: "-1.120",
    lastPrice: "-1.120",
    absoluteChange: "-134.40", // 120 units * -1.12 price change
    percentChange: "-1.41%",
    currency: "USD"
  },
  {
    id: 8,
    name: "Horizon",
    symbol: "HRZN",
    address: "Dover Heights, 15 Military Road",
    units: 89,
    imageUrl: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    price: "210.350",
    priceChange: "+4.780",
    lastPrice: "+4.780",
    absoluteChange: "+425.42", // 89 units * +4.78 price change
    percentChange: "+2.33%",
    currency: "USD"
  },
  {
    id: 9,
    name: "Oasis",
    symbol: "OASS",
    address: "Vaucluse, 32 Wentworth Road",
    units: 67,
    imageUrl: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    price: "289.670",
    priceChange: "-5.230",
    lastPrice: "-5.230",
    absoluteChange: "-350.41", // 67 units * -5.23 price change
    percentChange: "-1.77%",
    currency: "USD"
  },
  {
    id: 10,
    name: "Elysium",
    symbol: "ELYSM",
    address: "Cremorne Point, 12 Kareela Road",
    units: 145,
    imageUrl: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    price: "167.890",
    priceChange: "+3.450",
    lastPrice: "+3.450",
    absoluteChange: "+500.25", // 145 units * +3.45 price change
    percentChange: "+2.10%",
    currency: "USD"
  }
];

const HomeTopSection = () => {
  const navigate = useNavigate();
  const [activeTokenTab, setActiveTokenTab] = useState('popular');
  const [activeNewsTab, setActiveNewsTab] = useState('all');
  const [sortDirection, setSortDirection] = useState('desc'); // 'desc' = top gainers first (default)
  const [sortedProperties, setSortedProperties] = useState(() => {
    // Initialize with sorted properties - top gainers first
    return [...mockUserProperties].sort((a, b) => {
      const aValue = parseFloat(a.absoluteChange.replace(/[+\-$,]/g, '')) * (a.absoluteChange.includes('-') ? -1 : 1);
      const bValue = parseFloat(b.absoluteChange.replace(/[+\-$,]/g, '')) * (b.absoluteChange.includes('-') ? -1 : 1);
      return bValue - aValue; // descending: highest gain first
    });
  });
  const { currentUser } = useAuth();
  
  // Sort properties by day gain/loss
  const sortPropertiesByGain = () => {
    const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    setSortDirection(newDirection);
    
    const sorted = [...mockUserProperties].sort((a, b) => {
      // Extract numeric values from absoluteChange
      const aValue = parseFloat(a.absoluteChange.replace(/[+\-$,]/g, '')) * (a.absoluteChange.includes('-') ? -1 : 1);
      const bValue = parseFloat(b.absoluteChange.replace(/[+\-$,]/g, '')) * (b.absoluteChange.includes('-') ? -1 : 1);
      
      return newDirection === 'asc' 
        ? aValue - bValue // ascending: lowest gain (or highest loss) first
        : bValue - aValue; // descending: highest gain first
    });
    
    setSortedProperties(sorted);
  };
  
  // Update sortedProperties when tab changes
  useEffect(() => {
    // Re-sort properties when tab changes, maintaining the current sort direction
    if (activeTokenTab === 'myProperties') {
      const sorted = [...mockUserProperties].sort((a, b) => {
        const aValue = parseFloat(a.absoluteChange.replace(/[+\-$,]/g, '')) * (a.absoluteChange.includes('-') ? -1 : 1);
        const bValue = parseFloat(b.absoluteChange.replace(/[+\-$,]/g, '')) * (b.absoluteChange.includes('-') ? -1 : 1);
        
        return sortDirection === 'asc' 
          ? aValue - bValue // ascending: lowest gain (or highest loss) first
          : bValue - aValue; // descending: highest gain first
      });
      setSortedProperties(sorted);
    }
  }, [activeTokenTab, sortDirection]);
  
  return (
    <TopSectionContainer>
      <TokensSection>
        <SectionHeader>
          <SectionTitle>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
            </svg>
            Market Overview
          </SectionTitle>
          <ViewAllLink to="/market">
            View All 350+ Coins
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </ViewAllLink>
        </SectionHeader>
        
        <TabsContainer>
          <Tab 
            active={activeTokenTab === 'popular'} 
            onClick={() => setActiveTokenTab('popular')}
          >
            Popular
          </Tab>
          <Tab 
            active={activeTokenTab === 'gainers'} 
            onClick={() => setActiveTokenTab('gainers')}
          >
            Gainers
          </Tab>
          <Tab 
            active={activeTokenTab === 'new'} 
            onClick={() => setActiveTokenTab('new')}
          >
            New Listings
          </Tab>
          <Tab 
            active={activeTokenTab === 'loafIndex'} 
            onClick={() => setActiveTokenTab('loafIndex')}
          >
            Loaf Index
          </Tab>
          {currentUser && (
            <GoldTab 
              active={activeTokenTab === 'myProperties'} 
              onClick={() => setActiveTokenTab('myProperties')}
            >
              My Properties
            </GoldTab>
          )}
        </TabsContainer>
        
        {activeTokenTab === 'loafIndex' ? (
          <LoafIndexChart />
        ) : activeTokenTab === 'myProperties' && currentUser ? (
          <>
            <table width="100%">
              <tbody>
                <tr>
                  <td width="40%"></td>
                  <td width="30%" align="center">
                    <SortableHeader onClick={sortPropertiesByGain}>
                      Day Gain/Loss
                      <SortArrows direction={sortDirection}>
                        <span className="up-arrow">▲</span>
                        <span className="down-arrow">▼</span>
                      </SortArrows>
                    </SortableHeader>
                  </td>
                  <td width="30%"></td>
                </tr>
              </tbody>
            </table>
            <ScrollableTableContainer>
              <TokenTable>
                <tbody>
              {sortedProperties.map(property => {
                const isPositive = !property.percentChange.startsWith('-');
                
                return (
                  <TokenRow key={property.id} onClick={() => navigate('/portfolio')}>
                    <TokenCell width="40%">
                      <TokenInfo>
                        <TokenImage src={property.imageUrl} alt={property.name} />
                        <div>
                          <TokenName>{property.name}</TokenName>
                          <TokenSymbol>{property.address}</TokenSymbol>
                          <TokenHoldings>Held: {property.units}</TokenHoldings>
                        </div>
                      </TokenInfo>
                    </TokenCell>
                    <TokenCell width="30%" align="center">
                      <TokenChange isPositive={isPositive} align="center">
                        {isPositive ? '+' : ''}{Number(property.absoluteChange.replace(/[+\-]/g, '')).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                      </TokenChange>
                    </TokenCell>
                    <TokenCell width="30%" align="right">
                      <TokenPrice>
                        <CurrencySymbol>AUD</CurrencySymbol>
                        <PriceArrow isPositive={isPositive}>
                          {isPositive ? '▲' : '▼'}
                        </PriceArrow>
                        {property.price}
                      </TokenPrice>
                      <TokenChange isPositive={isPositive}>
                        ({property.percentChange})
                      </TokenChange>
                    </TokenCell>
                  </TokenRow>
                );
              })}
            </tbody>
          </TokenTable>
          </ScrollableTableContainer>
          </>
        ) : (
          <TokenTable>
            <tbody>
              {mockTokens.map(token => {
                const isPositive = token.priceChangePercent.startsWith('+');
                
                return (
                  <TokenRow key={token.id} onClick={() => navigate('/properties/28-derby-street-elara#trade')}>
                    <TokenCell>
                      <TokenInfo>
                        <TokenImage src={token.imageUrl} alt={token.name} />
                        <div>
                          <TokenName>{token.name}</TokenName>
                          <TokenSymbol>{token.address}</TokenSymbol>
                        </div>
                      </TokenInfo>
                    </TokenCell>
                    <TokenCell align="right">
                      <TokenPrice>
                        <CurrencySymbol>AUD</CurrencySymbol>
                        <PriceArrow isPositive={token.priceChangePercent.startsWith('+')}>  
                          {token.priceChangePercent.startsWith('+') ? '▲' : '▼'}
                        </PriceArrow>
                        {token.price.toLocaleString()}
                      </TokenPrice>
                      <TokenChange isPositive={isPositive}>
                        {token.absoluteChange} ({token.priceChangePercent})
                      </TokenChange>
                    </TokenCell>
                  </TokenRow>
                );
              })}
            </tbody>
          </TokenTable>
        )}
      </TokensSection>
      
      <NewsSection>
        <SectionHeader>
          <SectionTitle>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
            </svg>
            Property News & Updates
          </SectionTitle>
          <ViewAllLink to="/news">
            View All News
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </ViewAllLink>
        </SectionHeader>
        
        <TabsContainer>
          <Tab 
            active={activeNewsTab === 'all'} 
            onClick={() => setActiveNewsTab('all')}
          >
            All News
          </Tab>
          <Tab 
            active={activeNewsTab === 'property'} 
            onClick={() => setActiveNewsTab('property')}
          >
            Property Updates
          </Tab>
          <Tab 
            active={activeNewsTab === 'market'} 
            onClick={() => setActiveNewsTab('market')}
          >
            Market News
          </Tab>
        </TabsContainer>
        
        <NewsContainer>
          {mockNews.map(news => (
            <NewsItem key={news.id}>
              <NewsContent>
                <NewsTitle>{news.title}</NewsTitle>
                <NewsDetails>
                  <NewsDate>{news.date}</NewsDate>
                  <NewsTag type={news.type}>
                    {news.type === 'property' ? 'Property Update' : 'Market News'}
                  </NewsTag>
                </NewsDetails>
              </NewsContent>
              <NewsArrow>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </NewsArrow>
            </NewsItem>
          ))}
        </NewsContainer>
      </NewsSection>
    </TopSectionContainer>
  );
};

export default HomeTopSection;
