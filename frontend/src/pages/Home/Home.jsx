import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import HomeTopSection from '../../components/HomeTopSection/HomeTopSection';
import AnimatedCounter from '../../components/AnimatedCounter/AnimatedCounter';
import FeaturedIPOCard from '../../components/IPOPropertyCard/FeaturedIPOCard';
import AuctionIPOPreviewCard from '../../components/IPOPropertyCard/AuctionIPOPreviewCard';
import LivePurchaseFeed from '../../components/LivePurchaseFeed/LivePurchaseFeed';
import AuctionBidsFeed from '../../components/LivePurchaseFeed/AuctionBidsFeed';
import FeaturedPropertyPanel from '../../components/FeaturedPropertyPanel/FeaturedPropertyPanel';
import IPOCarousel from '../../components/IPOCarousel/IPOCarousel';
import { IPOSubscriptionProvider } from '../../contexts/IPOSubscriptionContext';
import { AuctionProvider } from '../../contexts/AuctionContext';
import { propertyService, tokenService } from '../../services/api';
import ipoService from '../../services/ipoService';

const HomeContainer = styled.div`
  padding: 2rem 0;
  width: 100%;
`;

const HeroSection = styled.section`
  position: relative;
  background-color: transparent;
  padding: 4rem 2rem;
  margin-bottom: 2rem;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const HeroContent = styled.div`
  position: relative;
  max-width: 600px;
  flex: 1;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  color: var(--color-text);
  
  span {
    color: var(--color-accent);
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  color: var(--color-text-secondary);
  
  .highlight {
    color: var(--color-accent);
    font-weight: 700;
    position: relative;
    padding: 0 2px;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--color-accent);
      opacity: 0.7;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const TokenizedValueContainer = styled.div`
  background-color: rgba(30, 32, 38, 0.95);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  min-width: 300px;
  margin-left: 0;
  position: relative;
  right: 50px;
  
  @media (max-width: 1024px) {
    margin-left: 0;
    margin-top: 2rem;
    width: 100%;
    right: 0;
  }
`;

const TokenizedValueTitle = styled.h3`
  font-size: 1rem;
  color: #848e9c;
  margin-bottom: 0.5rem;
  font-weight: 400;
`;

const TokenizedValueAmount = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  color: var(--color-accent);
  margin-bottom: 0.25rem;
`;

const TokenizedValueChange = styled.div`
  font-size: 0.875rem;
  color: ${props => props.isPositive ? '#0ecb81' : '#f6465d'};
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 12px;
    height: 12px;
    margin-right: 4px;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  font-weight: 500;
  text-align: center;
  
  &.btn-primary {
    background-color: var(--color-accent);
    color: var(--color-background);
    
    &:hover {
      background-color: var(--color-accent-hover);
    }
  }
  
  &.btn-secondary {
    background-color: transparent;
    border: 1px solid var(--color-accent);
    color: var(--color-accent);
    
    &:hover {
      background-color: rgba(230, 200, 126, 0.1);
    }
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
`;

const SectionSubtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
  color: var(--color-text-secondary);
`;

const PropertyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2rem;
`;

const ViewAllLink = styled(Link)`
  color: var(--color-accent);
  font-weight: 500;
  text-decoration: none;
  display: flex;
  align-items: center;
  
  &:hover {
    text-decoration: underline;
  }
`;

const FeaturedContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const StatsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin: 3rem 0;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatCard = styled.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: var(--color-accent);
`;

const StatLabel = styled.div`
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`;

const Home = () => {
  const [featuredProperties, setFeaturedProperties] = useState([]);
  const [trendingProperties, setTrendingProperties] = useState([]);
  const [featuredIPO, setFeaturedIPO] = useState(null);
  const [recentPurchases, setRecentPurchases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [tokenizedValue, setTokenizedValue] = useState({
    amount: 15000000, // $15M as a number
    isPositive: true,
    change: "3.8"
  });
  const [derbyStreetProperty, setDerbyStreetProperty] = useState(null);
  const [initialAnimationComplete, setInitialAnimationComplete] = useState(false);
  const [animateValue, setAnimateValue] = useState(false);
  
  // Fetch featured IPO property
  const fetchFeaturedIPO = async () => {
    try {
      const response = await ipoService.getFeaturedIPO();
      setFeaturedIPO(response.data);
    } catch (error) {
      console.error('Error fetching featured IPO:', error);
    }
  };
  
  // Fetch recent purchases
  const fetchRecentPurchases = async () => {
    try {
      const response = await ipoService.getRecentPurchases();
      setRecentPurchases(response.data);
    } catch (error) {
      console.error('Error fetching recent purchases:', error);
    }
  };

  useEffect(() => {
    const fetchAllData = async () => {
      setIsLoading(true);
      await Promise.all([
        fetchProperties(),
        fetchFeaturedIPO(),
        fetchRecentPurchases(),
        fetchDerbyStreetProperty()
      ]);
      setIsLoading(false);
      
      // Trigger animation after data is loaded
      setTimeout(() => {
        setAnimateValue(true);
      }, 500);
    };
    
    fetchAllData();
    
    // Start animation after a short delay
    const timer = setTimeout(() => {
      setInitialAnimationComplete(true);
    }, 3000); // slightly longer than animation duration
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    // Update median house price randomly every 3 seconds
    const interval = setInterval(() => {
      setTokenizedValue(prev => {
        // Generate random fluctuation between -0.5% and +0.5%
        const fluctuation = (Math.random() - 0.45) * 0.01;
        let newAmount = prev.amount * (1 + fluctuation);
        
        // Ensure the price stays within $12M-$18M range
        const minPrice = 12000000; // $12M
        const maxPrice = 18000000; // $18M
        
        if (newAmount < minPrice) {
          newAmount = minPrice + (Math.random() * 500000); // Add a small random amount if at minimum
        } else if (newAmount > maxPrice) {
          newAmount = maxPrice - (Math.random() * 500000); // Subtract a small random amount if at maximum
        }
        
        return {
          amount: newAmount,
          change: Math.abs(fluctuation * 100).toFixed(2),
          isPositive: fluctuation >= 0
        };
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  const fetchProperties = async () => {
    setIsLoading(true);
    try {
      // In a real app, you would call the API
      // const response = await propertyService.getAllProperties();
      // const properties = response.data;
      
      // For now, we'll use mock data
      const mockProperties = generateMockProperties();
      
      // Sort properties by different criteria for different sections
      const featured = [...mockProperties].sort(() => 0.5 - Math.random()).slice(0, 3);
      
      // Filter out 28 Derby Street from trending properties since it has its own featured panel
      const filteredProperties = mockProperties.filter(property => !property.name.includes("28 Derby Street"));
      const trending = [...filteredProperties].sort((a, b) => parseFloat(b.priceChangePercent) - parseFloat(a.priceChangePercent)).slice(0, 6);
      
      setFeaturedProperties(featured);
      setTrendingProperties(trending);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching properties:', error);
      setIsLoading(false);
    }
  };
  
  // Fetch the 28 Derby Street property specifically
  const fetchDerbyStreetProperty = async () => {
    try {
      // In a real app, we would fetch this from the API
      // For now, we'll create mock data that matches the property detail page
      const derbyStreet = {
        id: 'derby-street',
        slug: '28-derby-street-elara',
        name: '28 Derby Street (Elara)',
        location: 'Vaucluse, Sydney',
        imageUrl: 'https://i2.au.reastatic.net/1232x688-resize,extend,r=33,g=40,b=46/5f6981d6e0c819bf4775b18f9b182ef5290b2271fec86b8ad05b6d9b3ebe6287/image.jpg',
        bedrooms: 4,
        bathrooms: 5,
        carSpots: 4,
        propertyType: 'House',
        token: {
          price: 126206824,
          basePrice: 125000000,
          priceChange: 0.97
        }
      };
      
      setDerbyStreetProperty(derbyStreet);
    } catch (error) {
      console.error('Error fetching Derby Street property:', error);
    }
  };
  
  // Generate mock property data
  const generateMockProperties = () => {
    const properties = [
      {
        id: 1,
        name: "28 Derby Street (Elara)",
        location: "Vaucluse, Sydney",
        price: 126206824,
        priceChange: 0.97,
        bedrooms: 4,
        bathrooms: 5,
        carSpots: 4,
        imageUrl: "https://i2.au.reastatic.net/1232x688-resize,extend,r=33,g=40,b=46/5f6981d6e0c819bf4775b18f9b182ef5290b2271fec86b8ad05b6d9b3ebe6287/image.jpg",
        tokenPrice: 125.00,
        tokenPriceChange: 2.1,
        slug: "28-derby-street-elara"
      },
      {
        id: 2,
        name: "42 Wolseley Road",
        location: "Point Piper, Sydney",
        imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        tokenPrice: "150,000",
        marketCap: "24,500,000",
        volume24h: "3,250,000",
        priceChangePercent: "-0.75",
        bedrooms: 6,
        bathrooms: 5,
        carSpots: 4,
        propertyType: "House"
      },
      {
        id: 3,
        name: "15 Roslyndale Avenue",
        location: "Woollahra, Sydney",
        imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        tokenPrice: "98,500",
        marketCap: "14,775,000",
        volume24h: "1,850,000",
        priceChangePercent: "1.25",
        bedrooms: 4,
        bathrooms: 3,
        carSpots: 2,
        propertyType: "House"
      },
      {
        id: 4,
        name: "7 Raglan Street",
        location: "Mosman, Sydney",
        imageUrl: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        tokenPrice: "112,800",
        marketCap: "16,920,000",
        volume24h: "2,250,000",
        priceChangePercent: "3.42",
        bedrooms: 3,
        bathrooms: 2,
        carSpots: 2,
        propertyType: "House"
      },
      {
        id: 5,
        name: "22 Arden Street",
        location: "Coogee, Sydney",
        imageUrl: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        tokenPrice: "85,400",
        marketCap: "12,810,000",
        volume24h: "1,750,000",
        priceChangePercent: "-1.05",
        bedrooms: 3,
        bathrooms: 2,
        carSpots: 1,
        propertyType: "Apartment"
      },
      {
        id: 6,
        name: "18 Killara Avenue",
        location: "Gordon, Sydney",
        imageUrl: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        tokenPrice: "72,500",
        marketCap: "10,875,000",
        volume24h: "1,450,000",
        priceChangePercent: "0.87",
        bedrooms: 4,
        bathrooms: 3,
        carSpots: 2,
        propertyType: "House"
      },
      {
        id: 7,
        name: "9 Kambala Road",
        location: "Bellevue Hill, Sydney",
        imageUrl: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        tokenPrice: "135,600",
        marketCap: "20,340,000",
        volume24h: "2,850,000",
        priceChangePercent: "2.18",
        bedrooms: 5,
        bathrooms: 4,
        carSpots: 3,
        propertyType: "House"
      },
      {
        id: 8,
        name: "32 Burran Avenue",
        location: "Mosman, Sydney",
        imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        tokenPrice: "95,200",
        marketCap: "14,280,000",
        volume24h: "1,950,000",
        priceChangePercent: "-0.32",
        bedrooms: 4,
        bathrooms: 3,
        carSpots: 2,
        propertyType: "House"
      }
    ];
    
    return properties;
  };
  
  return (
    <HomeContainer className="container">
      <HeroSection>
        <HeroContent>
          <HeroTitle>
            <span>Trading Property</span>
          </HeroTitle>
          <HeroSubtitle>
            Where Australia's most exclusive properties trade.
          </HeroSubtitle>
          <ButtonGroup>
            <Button to="/properties" className="btn-primary">Explore Properties</Button>
            <Button to="/register" className="btn-secondary">Get Started</Button>
          </ButtonGroup>
        </HeroContent>
        
        <TokenizedValueContainer>
          <TokenizedValueTitle>Median House Price</TokenizedValueTitle>
          {!initialAnimationComplete && animateValue ? (
            <AnimatedCounter 
              value={tokenizedValue.amount / 1000000}
              startValue={(tokenizedValue.amount / 1000000) - 3} 
              duration={2500}
              prefix="$"
              suffix="M"
              decimals={2}
            />
          ) : (
            <TokenizedValueAmount>
              ${(tokenizedValue.amount / 1000000).toFixed(2)}M
            </TokenizedValueAmount>
          )}
          <TokenizedValueChange isPositive={tokenizedValue.isPositive}>
            {tokenizedValue.isPositive ? (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 14l5-5 5 5H7z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            )}
            {tokenizedValue.change}% Today
          </TokenizedValueChange>
        </TokenizedValueContainer>
      </HeroSection>
      
      <HomeTopSection />
      
      {featuredIPO && (
        <section>
          <SectionHeader>
            <div>
              <SectionTitle>Current IPO</SectionTitle>
              <SectionSubtitle>Property currently in IPO - Allocation given on first come first serve bases</SectionSubtitle>
            </div>
            <ViewAllLink to="/ipo">View All IPOs</ViewAllLink>
          </SectionHeader>
          
          <IPOSubscriptionProvider initialProperty={featuredIPO}>
            <AuctionProvider>
              <IPOCarousel>
                {/* First slide - Current subscription panel */}
                <FeaturedContainer>
                  <FeaturedIPOCard property={featuredIPO} />
                  <LivePurchaseFeed purchases={recentPurchases} autoUpdate={true} />
                </FeaturedContainer>
                
                {/* Second slide - Auction IPO preview panel */}
                <FeaturedContainer>
                  <AuctionIPOPreviewCard property={featuredIPO} />
                  <AuctionBidsFeed purchases={[]} autoUpdate={true} />
                </FeaturedContainer>
              </IPOCarousel>
            </AuctionProvider>
          </IPOSubscriptionProvider>
        </section>
      )}
      
      <section>
        <SectionHeader>
          <div>
            <SectionTitle>Featured Properties</SectionTitle>
            <SectionSubtitle>Concentrate or diversify at will</SectionSubtitle>
          </div>
          <ViewAllLink to="/properties">View All</ViewAllLink>
        </SectionHeader>
        
        {isLoading ? (
          <div>Loading properties...</div>
        ) : (
          <>
            {derbyStreetProperty && (
              <FeaturedPropertyPanel property={derbyStreetProperty} />
            )}
            <PropertyGrid>
              {featuredProperties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </PropertyGrid>
          </>
        )}
      </section>
      
      <StatsSection>
        <StatCard>
          {animateValue ? (
            <AnimatedCounter 
              value={214.7}
              startValue={190}
              duration={2800}
              prefix="$"
              suffix="M"
              decimals={1}
              fontSize="2rem"
            />
          ) : (
            <StatValue>$214.7M</StatValue>
          )}
          <StatLabel>Total Property Value</StatLabel>
        </StatCard>
        <StatCard>
          {animateValue ? (
            <AnimatedCounter 
              value={12840}
              startValue={11500}
              duration={2600}
              decimals={0}
              fontSize="2rem"
            />
          ) : (
            <StatValue>12,840</StatValue>
          )}
          <StatLabel>Active Investors</StatLabel>
        </StatCard>
        <StatCard>
          {animateValue ? (
            <AnimatedCounter 
              value={22}
              startValue={18}
              duration={1800}
              decimals={0}
              fontSize="2rem"
            />
          ) : (
            <StatValue>22</StatValue>
          )}
          <StatLabel>Properties Tokenized</StatLabel>
        </StatCard>
        <StatCard>
          {animateValue ? (
            <AnimatedCounter 
              value={3.4}
              startValue={2.8}
              duration={2200}
              prefix="$"
              suffix="M"
              decimals={1}
              fontSize="2rem"
            />
          ) : (
            <StatValue>$3.4M</StatValue>
          )}
          <StatLabel>24h Trading Volume</StatLabel>
        </StatCard>
      </StatsSection>
      
      <section>
        <SectionHeader>
          <div>
            <SectionTitle>Trending Properties</SectionTitle>
            <SectionSubtitle>Most active properties in the last 24 hours</SectionSubtitle>
          </div>
          <ViewAllLink to="/market">View Market</ViewAllLink>
        </SectionHeader>
        
        {isLoading ? (
          <div>Loading properties...</div>
        ) : (
          <PropertyGrid>
            {trendingProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </PropertyGrid>
        )}
      </section>
    </HomeContainer>
  );
};

export default Home;
