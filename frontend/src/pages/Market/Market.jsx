import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { tokenService } from '../../services/api';

const MarketContainer = styled.div`
  padding: 2rem 0;
  
  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }
`;

const PageHeader = styled.div`
  margin-bottom: 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const PageDescription = styled.p`
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto;
`;

const MarketStats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatCard = styled.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`;

const TableContainer = styled.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  overflow-x: auto;
  
  @media (max-width: 768px) {
    margin: 0 1rem;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: rgba(255, 255, 255, 0.05);
`;

const TableRow = styled.tr`
  border-bottom: 1px solid var(--color-border);
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.02);
  }
`;

const TableHeader = styled.th`
  padding: 1rem;
  text-align: left;
  font-weight: 500;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`;

const TableCell = styled.td`
  padding: 1rem;
  vertical-align: middle;
`;

const TokenInfo = styled.div`
  display: flex;
  align-items: center;
`;

const TokenImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
`;

const TokenName = styled.div`
  font-weight: 500;
`;

const TokenSymbol = styled.div`
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`;

const PriceChange = styled.div`
  color: ${props => props.isPositive ? 'var(--color-positive)' : 'var(--color-negative)'};
  font-weight: 500;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.25rem;
    width: 12px;
    height: 12px;
  }
`;

const ActionButton = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: var(--color-accent);
  color: var(--color-background);
  border-radius: var(--border-radius);
  font-weight: 500;
  text-align: center;
  
  &:hover {
    background-color: var(--color-accent-hover);
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem;
  }
`;

const FilterGroup = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${props => props.active ? 'var(--color-accent)' : 'transparent'};
  color: ${props => props.active ? 'var(--color-background)' : 'var(--color-text)'};
  border: 1px solid ${props => props.active ? 'var(--color-accent)' : 'var(--color-border)'};
  border-radius: var(--border-radius);
  font-weight: 500;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--color-accent)' : 'rgba(255, 255, 255, 0.05)'};
  }
`;

const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  color: var(--color-text);
  width: 250px;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
  
  &::placeholder {
    color: var(--color-text-secondary);
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Market = () => {
  const [tokens, setTokens] = useState([]);
  const [filteredTokens, setFilteredTokens] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    fetchTokens();
  }, []);
  
  useEffect(() => {
    filterTokens();
  }, [tokens, activeFilter, searchQuery]);
  
  const fetchTokens = async () => {
    setIsLoading(true);
    try {
      // In a real app, you would call the API
      // const response = await tokenService.getAllTokens();
      // const tokensData = response.data;
      
      // For now, we'll use mock data
      const mockTokens = generateMockTokens();
      setTokens(mockTokens);
      setFilteredTokens(mockTokens);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching tokens:', error);
      setIsLoading(false);
    }
  };
  
  const filterTokens = () => {
    let filtered = [...tokens];
    
    // Apply filter by performance
    if (activeFilter === 'gainers') {
      filtered = filtered.filter(token => parseFloat(token.priceChangePercent) > 0);
    } else if (activeFilter === 'losers') {
      filtered = filtered.filter(token => parseFloat(token.priceChangePercent) < 0);
    } else if (activeFilter === 'volume') {
      filtered = filtered.sort((a, b) => parseFloat(b.volume24h.replace(/,/g, '')) - parseFloat(a.volume24h.replace(/,/g, '')));
    }
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(token => 
        token.name.toLowerCase().includes(query) || 
        token.symbol.toLowerCase().includes(query) ||
        token.propertyName.toLowerCase().includes(query)
      );
    }
    
    setFilteredTokens(filtered);
  };
  
  // Generate mock token data
  const generateMockTokens = () => {
    return [
      {
        id: 1,
        symbol: "VAUC",
        name: "Vaucluse Mansion",
        propertyName: "42 Vaucluse Road",
        propertyLocation: "Vaucluse, Sydney",
        imageUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        currentPrice: "102,520.00",
        priceChangePercent: "1.20",
        marketCap: "28,500,000",
        volume24h: "1,250,000",
      },
      {
        id: 2,
        symbol: "POIN",
        name: "Point Piper Estate",
        propertyName: "24 Wolseley Road",
        propertyLocation: "Point Piper, Sydney",
        imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        currentPrice: "145,750.00",
        priceChangePercent: "2.35",
        marketCap: "42,750,000",
        volume24h: "1,875,000",
      },
      {
        id: 3,
        symbol: "BELV",
        name: "Bellevue Hill Mansion",
        propertyName: "18 Victoria Road",
        propertyLocation: "Bellevue Hill, Sydney",
        imageUrl: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        currentPrice: "98,500.00",
        priceChangePercent: "-0.75",
        marketCap: "32,500,000",
        volume24h: "985,000",
      },
      {
        id: 4,
        symbol: "DBAY",
        name: "Double Bay Penthouse",
        propertyName: "15 Cross Street",
        propertyLocation: "Double Bay, Sydney",
        imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        currentPrice: "78,300.00",
        priceChangePercent: "3.42",
        marketCap: "18,750,000",
        volume24h: "1,120,000",
      },
      {
        id: 5,
        symbol: "TOOR",
        name: "Toorak Mansion",
        propertyName: "27 St Georges Road",
        propertyLocation: "Toorak, Melbourne",
        imageUrl: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        currentPrice: "115,250.00",
        priceChangePercent: "-1.05",
        marketCap: "25,650,000",
        volume24h: "875,000",
      },
      {
        id: 6,
        symbol: "MOSR",
        name: "Mosman Residence",
        propertyName: "5 Bradleys Head Road",
        propertyLocation: "Mosman, Sydney",
        imageUrl: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        currentPrice: "92,800.00",
        priceChangePercent: "0.87",
        marketCap: "22,450,000",
        volume24h: "750,000",
      },
      {
        id: 7,
        symbol: "PALM",
        name: "Palm Beach Estate",
        propertyName: "19 Barrenjoey Road",
        propertyLocation: "Palm Beach, Sydney",
        imageUrl: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        currentPrice: "110,400.00",
        priceChangePercent: "2.18",
        marketCap: "24,250,000",
        volume24h: "1,050,000",
      },
      {
        id: 8,
        symbol: "BRTN",
        name: "Brighton Beachfront",
        propertyName: "36 The Esplanade",
        propertyLocation: "Brighton, Melbourne",
        imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        currentPrice: "85,600.00",
        priceChangePercent: "-0.32",
        marketCap: "19,850,000",
        volume24h: "680,000",
      }
    ];
  };
  
  const calculateMarketStats = () => {
    const totalMarketCap = tokens.reduce((sum, token) => sum + parseFloat(token.marketCap.replace(/,/g, '')), 0);
    const totalVolume = tokens.reduce((sum, token) => sum + parseFloat(token.volume24h.replace(/,/g, '')), 0);
    const gainers = tokens.filter(token => parseFloat(token.priceChangePercent) > 0).length;
    const losers = tokens.filter(token => parseFloat(token.priceChangePercent) < 0).length;
    
    return {
      totalMarketCap: totalMarketCap.toLocaleString(),
      totalVolume: totalVolume.toLocaleString(),
      gainers,
      losers
    };
  };
  
  const stats = calculateMarketStats();
  
  return (
    <MarketContainer className="container">
      <PageHeader>
        <PageTitle>Market</PageTitle>
        <PageDescription>
          Explore and trade tokenized real estate properties on the LOAF platform
        </PageDescription>
      </PageHeader>
      
      <MarketStats>
        <StatCard>
          <StatValue>${stats.totalMarketCap}</StatValue>
          <StatLabel>Total Property Value</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>${stats.totalVolume}</StatValue>
          <StatLabel>24h Volume</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{stats.gainers}</StatValue>
          <StatLabel>Gainers (24h)</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{stats.losers}</StatValue>
          <StatLabel>Losers (24h)</StatLabel>
        </StatCard>
      </MarketStats>
      
      <FilterContainer>
        <FilterGroup>
          <FilterButton 
            active={activeFilter === 'all'} 
            onClick={() => setActiveFilter('all')}
          >
            All
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'gainers'} 
            onClick={() => setActiveFilter('gainers')}
          >
            Gainers
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'losers'} 
            onClick={() => setActiveFilter('losers')}
          >
            Losers
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'volume'} 
            onClick={() => setActiveFilter('volume')}
          >
            Highest Volume
          </FilterButton>
        </FilterGroup>
        
        <SearchInput 
          type="text" 
          placeholder="Search tokens..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </FilterContainer>
      
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Property</TableHeader>
              <TableHeader>Price per Share</TableHeader>
              <TableHeader>24h Change</TableHeader>
              <TableHeader>Implied Property Value</TableHeader>
              <TableHeader>24h Volume</TableHeader>
              <TableHeader>Action</TableHeader>
            </TableRow>
          </TableHead>
          <tbody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan="6">Loading tokens...</TableCell>
              </TableRow>
            ) : filteredTokens.length === 0 ? (
              <TableRow>
                <TableCell colSpan="6">No tokens found</TableCell>
              </TableRow>
            ) : (
              filteredTokens.map(token => {
                const isPriceChangePositive = parseFloat(token.priceChangePercent) >= 0;
                
                return (
                  <TableRow key={token.id}>
                    <TableCell>
                      <TokenInfo>
                        <TokenImage src={token.imageUrl} alt={token.name} />
                        <div>
                          <TokenName>{token.propertyName}</TokenName>
                          <TokenSymbol>{token.symbol}</TokenSymbol>
                        </div>
                      </TokenInfo>
                    </TableCell>
                    <TableCell>${token.currentPrice}</TableCell>
                    <TableCell>
                      <PriceChange isPositive={isPriceChangePositive}>
                        {isPriceChangePositive ? (
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7 14l5-5 5 5H7z" />
                          </svg>
                        ) : (
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7 10l5 5 5-5H7z" />
                          </svg>
                        )}
                        {isPriceChangePositive ? '+' : ''}{token.priceChangePercent}%
                      </PriceChange>
                    </TableCell>
                    <TableCell>${token.marketCap}</TableCell>
                    <TableCell>${token.volume24h}</TableCell>
                    <TableCell>
                      <ActionButton to={`/property-new/${token.id}/trade`}>Trade</ActionButton>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </tbody>
        </Table>
      </TableContainer>
    </MarketContainer>
  );
};

export default Market;
