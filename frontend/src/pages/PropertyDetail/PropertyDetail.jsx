import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePrice } from '../../context/PriceContext';
import styled from 'styled-components';
import PriceChart from '../../components/PriceChart/PriceChart';
import OrderBook from '../../components/OrderBook/OrderBook';
import TradePanel from '../../components/TradePanel';
import PositionsPanel from '../../components/PositionsPanel';
import MarketTradesPanel from '../../components/MarketTradesPanel/MarketTradesPanel';
import { propertyService, tokenService } from '../../services/api';

const PropertyDetailContainer = styled.div`
  padding: 2rem 0;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const PropertyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PropertyInfo = styled.div`
  flex: 1;
`;

const PropertyNewsButton = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  padding: 0.75rem 1.25rem;
  margin: 1rem 0;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(8px);
  border-left: 3px solid var(--color-accent);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const PropertyNewsHeadline = styled.div`
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--color-text);
  display: flex;
  align-items: center;
  letter-spacing: 0.02em;
  
  svg {
    margin-right: 0.75rem;
    color: var(--color-accent);
    flex-shrink: 0;
  }
`;

const PropertyTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const PropertyLocation = styled.p`
  font-size: 1.25rem;
  color: var(--color-text-secondary);
  margin-bottom: 1rem;
`;

const PropertyDescription = styled.p`
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;
  max-width: 600px;
  line-height: 1.6;
`;

const PriceInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const CurrentPrice = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-right: 1rem;
  
  .decimal {
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

const PriceChange = styled.div`
  padding: 0.5rem 0.75rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  background-color: ${props => props.isPositive ? 'rgba(0, 192, 118, 0.1)' : 'rgba(255, 87, 87, 0.1)'};
  color: ${props => props.isPositive ? 'var(--color-positive)' : 'var(--color-negative)'};
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.25rem;
    width: 16px;
    height: 16px;
  }
`;

const PropertyImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  
  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 1rem;
    width: 100%;
  }
`;

const PropertyImage = styled.img`
  width: 450px;
  height: 300px;
  object-fit: cover;
  border-radius: var(--border-radius);
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ViewingOptions = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
`;

const ViewingOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    transform: translateY(-3px);
    background-color: var(--color-accent);
  }
  
  svg {
    width: 20px;
    height: 20px;
    color: var(--color-text);
  }
  
  &:hover svg {
    color: var(--color-background);
  }
`;

const PropertyStats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding: 0 1rem;
  
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

const TradingSection = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  margin: 0 auto 2rem;
  max-width: 100%;
  width: 100%;
  padding: 0 1rem;
  box-sizing: border-box;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    display: block;
  }
`;

const NewsSection = styled.div`
  margin-top: 2rem;
  padding: 0 1rem;
`;

const NewsHeader = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.75rem;
    color: var(--color-accent);
  }
`;

const NewsCategories = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const NewsCategory = styled.div`
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  font-weight: 500;
  background-color: ${props => props.active ? 'var(--color-accent)' : 'var(--color-card)'};
  color: ${props => props.active ? 'var(--color-background)' : 'var(--color-text)'};
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--color-accent)' : 'rgba(255, 255, 255, 0.1)'};
  }
`;

const NewsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NewsItem = styled.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.25rem;
  cursor: pointer;
  transition: transform 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &:hover {
    transform: translateY(-3px);
  }
`;

const NewsContent = styled.div`
  flex: 1;
`;

const NewsTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
`;

const NewsDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const NewsDate = styled.span`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
`;

const NewsTag = styled.span`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  background-color: ${props => props.type === 'property' ? 'rgba(0, 192, 118, 0.1)' : 'rgba(255, 215, 0, 0.1)'};
  color: ${props => props.type === 'property' ? 'var(--color-positive)' : 'var(--color-accent)'};
  font-weight: 500;
`;

const NewsIcon = styled.div`
  margin-left: 1rem;
  color: var(--color-text-secondary);
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const ChartSection = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  
  & > div {
    width: 100%;
    max-width: 100%;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const TradeSection = styled.div`
  width: 100%;
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const MobileTradePanelWrapper = styled.div`
  display: none;
  margin-bottom: 1rem;
  width: 100%;
  height: fit-content;
  max-height: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const DesktopTradePanelWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  height: fit-content;
  max-height: none;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeNewsCategory, setActiveNewsCategory] = useState('all');
  
  // Use the shared price context
  const priceData = usePrice();
  
  useEffect(() => {
    fetchPropertyDetails();
  }, [id]);
  
  const fetchPropertyDetails = async () => {
    setIsLoading(true);
    try {
      // In a real app, you would call the API
      // const propertyResponse = await propertyService.getPropertyById(id);
      // const tokenResponse = await tokenService.getTokenById(id);
      // setProperty(propertyResponse.data);
      // setToken(tokenResponse.data);
      
      // For now, we'll use mock data
      const mockData = generateMockPropertyData(id);
      setProperty(mockData.property);
      setToken(mockData.token);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching property details:', error);
      setIsLoading(false);
    }
  };
  
  // Generate property data for 20A Vaucluse Road
  const generateMockPropertyData = (id) => {
    // Generate news data
    const mockNews = [
      {
        id: 'news-1',
        title: 'Council approves rooftop terrace renovation for 20A Vaucluse Road',
        date: '2025-06-18',
        type: 'property',
        category: 'property'
      },
      {
        id: 'news-2',
        title: 'RBA holds cash rate, Eastern Suburbs property market remains strong',
        date: '2025-06-15',
        type: 'market',
        category: 'economy'
      },
      {
        id: 'news-3',
        title: 'Luxury harbourside properties see 12.3% growth in Q2 2025',
        date: '2025-06-10',
        type: 'market',
        category: 'market'
      },
      {
        id: 'news-4',
        title: 'Smart home system upgrade completed at 20A Vaucluse Road',
        date: '2025-06-05',
        type: 'property',
        category: 'property'
      },
      {
        id: 'news-5',
        title: 'Sydney\'s eastern suburbs outperform broader market with 9.7% annual growth',
        date: '2025-05-28',
        type: 'market',
        category: 'economy'
      },
      {
        id: 'news-6',
        title: '20A Vaucluse Road featured in Luxury Homes Australia magazine',
        date: '2025-05-20',
        type: 'property',
        category: 'property'
      }
    ];
    
    // Get the current price data
    const currentPrice = priceData ? priceData.formatted : "325,000.00";
    const priceChangePercentage = priceData ? priceData.change.percentage : "0.50";
    const isPriceChangePositive = priceData ? priceData.change.isPositive : true;
    
    return {
      property: {
        id,
        name: "20A Vaucluse Road",
        address: "20A Vaucluse Road, Vaucluse NSW 2030",
        description: "Prestigious harbourside residence with panoramic views of Sydney Harbour and the iconic Bridge. This architectural masterpiece features 5 bedrooms, 6 bathrooms, a home cinema, infinity pool, and direct harbour access.",
        imageUrl: "https://res.akamaized.net/domain/image/upload/t_web/c_fill,w_720,h_480/v1593586442/1Vaucluse_Road_20A_Vaucluse__DJI0029_1_xctmfj.jpg",
        // Use the dynamic price from context with fallback
        price: `$${currentPrice}`,
        priceChange: `${isPriceChangePositive ? '+' : ''}${priceChangePercentage}%`,
        isPositive: isPriceChangePositive,
        area: 920, // square meters
        yearBuilt: 2018,
        lastValuation: "32,000,000",
        annualReturn: "14.2",
        rentalYield: "1.6",
        propertyType: "Luxury Residential",
        news: mockNews
      },
      token: {
        id,
        symbol: "VCLSE",
        name: "20A Vaucluse Road Shares",
        currentPrice: currentPrice,
        priceChangePercent: priceChangePercentage,
        isPriceChangePositive: isPriceChangePositive,
        marketCap: "32,000,000",
        volume24h: "2,850,000",
        totalSupply: "100,000",
        modelledPriceGuide: "32,000,000",
        modelledPriceGuideChange: "2.3",
        circulatingSupply: "85,000",
        allTimeHigh: "355,000",
        allTimeLow: "295,000"
      }
    };
  };
  
  const handleOrderSubmit = (order) => {
    console.log('Order submitted:', order);
    // In a real app, you would update the UI or show a notification
    alert(`${order.type.toUpperCase()} order placed successfully!`);
  };
  
  if (isLoading) {
    return <div className="container">Loading property details...</div>;
  }
  
  if (!property || !token) {
    return <div className="container">Property not found</div>;
  }
  
  return (
    <PropertyDetailContainer className="container">
      <PropertyHeader>
        <PropertyInfo>
          <PropertyTitle>{property.name}</PropertyTitle>
          <PropertyLocation>{property.location}</PropertyLocation>
          <PriceInfo>
            <CurrentPrice>
              ${
                (() => {
                  const parts = priceData.formatted.split('.');
                  return (
                    <>
                      {parts[0]}
                      {parts.length > 1 && (
                        <span className="decimal">.{parts[1]}</span>
                      )}
                    </>
                  );
                })()
              }
            </CurrentPrice>
            <PriceChange isPositive={priceData.change.isPositive}>
              {priceData.change.isPositive ? (
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 14l5-5 5 5H7z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 10l5 5 5-5H7z" />
                </svg>
              )}
              {priceData.change.percentage}%
            </PriceChange>
          </PriceInfo>
          <PropertyDescription>{property.description}</PropertyDescription>
          
          <PropertyNewsButton onClick={() => alert('Opening news article...')}>
            <PropertyNewsHeadline>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h-2v-6h2v6zm4 0h-2v-6h2v6zm-1-8h-4V6h4v2z"/>
              </svg>
              Council approves rooftop terrace expansion for Vaucluse Mansion
            </PropertyNewsHeadline>
          </PropertyNewsButton>
        </PropertyInfo>
        <PropertyImageContainer>
          <PropertyImage src={property.imageUrl} alt={property.name} />
          <ViewingOptions>
            <ViewingOption onClick={() => alert('Photo gallery coming soon')}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 5h16v14H4V5zm15 13V6H5v12h14zM7 13l3-3 2 2 3-3 2 2v3H7v-1z" />
              </svg>
            </ViewingOption>
            <ViewingOption onClick={() => alert('Video tour coming soon')}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5V9.5l6 3.5-6 3.5z" />
              </svg>
            </ViewingOption>
            <ViewingOption onClick={() => alert('AR experience coming soon')}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" />
                <path d="M12 6a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4V6z" />
                <path d="M18 12a6 6 0 0 0-6-6v2a4 4 0 0 1 4 4h2z" />
              </svg>
            </ViewingOption>
          </ViewingOptions>
        </PropertyImageContainer>
      </PropertyHeader>
      
      <PropertyStats>
        <StatCard>
          <StatValue>${Math.round(priceData.value * 100).toLocaleString()}</StatValue>
          <StatLabel>Implied Value</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{property.annualReturn}%</StatValue>
          <StatLabel>Annual Return</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>{property.rentalYield}%</StatValue>
          <StatLabel>Rental Yield (TTM)</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>${token.modelledPriceGuide}</StatValue>
          <StatLabel>Modelled Price Guide <span style={{ color: 'var(--color-positive)', display: 'inline-flex', alignItems: 'center' }}>(<svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12"><path d="M7 14l5-5 5 5H7z" /></svg>{token.modelledPriceGuideChange}%)</span></StatLabel>
        </StatCard>
      </PropertyStats>
      
      <TradingSection>
        <ChartSection>
          <PriceChart tokenId={id} />
          <MobileTradePanelWrapper>
            <TradePanel token={token} onOrderSubmit={handleOrderSubmit} />
          </MobileTradePanelWrapper>
          <OrderBook tokenId={id} />
          <MarketTradesPanel token={token} />
        </ChartSection>
        <DesktopTradePanelWrapper>
          <TradePanel token={token} onOrderSubmit={handleOrderSubmit} />
        </DesktopTradePanelWrapper>
      </TradingSection>
      
      <PositionsPanel />
      
      <NewsSection>
        <NewsHeader>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
          </svg>
          Property News & Updates
        </NewsHeader>
        
        <NewsCategories>
          <NewsCategory 
            active={activeNewsCategory === 'all'}
            onClick={() => setActiveNewsCategory('all')}
          >
            All News
          </NewsCategory>
          <NewsCategory 
            active={activeNewsCategory === 'property'}
            onClick={() => setActiveNewsCategory('property')}
          >
            Property Updates
          </NewsCategory>
          <NewsCategory 
            active={activeNewsCategory === 'market'}
            onClick={() => setActiveNewsCategory('market')}
          >
            Market News
          </NewsCategory>
          <NewsCategory 
            active={activeNewsCategory === 'economy'}
            onClick={() => setActiveNewsCategory('economy')}
          >
            Economy
          </NewsCategory>
        </NewsCategories>
        
        <NewsList>
          {property.news
            .filter(item => activeNewsCategory === 'all' || item.category === activeNewsCategory)
            .map(newsItem => (
              <NewsItem key={newsItem.id} onClick={() => alert(`Opening article: ${newsItem.title}`)}>
                <NewsContent>
                  <NewsTitle>{newsItem.title}</NewsTitle>
                  <NewsDetails>
                    <NewsDate>{newsItem.date}</NewsDate>
                    <NewsTag type={newsItem.type}>
                      {newsItem.type === 'property' ? 'Property Update' : 'Market News'}
                    </NewsTag>
                  </NewsDetails>
                </NewsContent>
                <NewsIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                </NewsIcon>
              </NewsItem>
            ))}
        </NewsList>
      </NewsSection>
    </PropertyDetailContainer>
  );
};

export default PropertyDetail;
