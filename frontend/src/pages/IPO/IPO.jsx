import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FeaturedIPOCard from '../../components/IPOPropertyCard/FeaturedIPOCard';
import PresaleIPOCard from '../../components/IPOPropertyCard/PresaleIPOCard';
import LivePurchaseFeed from '../../components/LivePurchaseFeed/LivePurchaseFeed';
import ipoService from '../../services/ipoService';
import { IPOSubscriptionProvider } from '../../contexts/IPOSubscriptionContext';

const IPOContainer = styled.div`
  padding: 2rem 0;
  width: 100%;
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

const FeaturedSection = styled.section`
  margin-bottom: 3rem;
`;

const FeaturedContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const PresaleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const IPO = () => {
  const [featuredIPO, setFeaturedIPO] = useState(null);
  const [presaleProperties, setPresaleProperties] = useState([]);
  const [recentPurchases, setRecentPurchases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Fetch featured IPO property
  const fetchFeaturedIPO = async () => {
    try {
      const response = await ipoService.getFeaturedIPO();
      setFeaturedIPO(response.data);
    } catch (error) {
      console.error('Error fetching featured IPO:', error);
    }
  };
  
  // Fetch presale properties
  const fetchPresaleProperties = async () => {
    try {
      const response = await ipoService.getPresaleProperties();
      setPresaleProperties(response.data);
    } catch (error) {
      console.error('Error fetching presale properties:', error);
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
  
  // Fetch all data on component mount
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await Promise.all([
        fetchFeaturedIPO(),
        fetchPresaleProperties(),
        fetchRecentPurchases()
      ]);
      setIsLoading(false);
    };
    
    fetchData();
  }, []);
  
  // We no longer need the progress simulation here as it's handled by the context
  
  if (isLoading) {
    return (
      <IPOContainer>
        <div>Loading IPO opportunities...</div>
      </IPOContainer>
    );
  }
  
  return (
    <IPOContainer>
      <FeaturedSection>
        <SectionTitle>Current IPO</SectionTitle>
        <SectionSubtitle>
          Property currently in IPO - Allocation given on first come first serve bases
        </SectionSubtitle>
        
        {featuredIPO && (
          <IPOSubscriptionProvider initialProperty={featuredIPO}>
            <FeaturedContainer>
              <FeaturedIPOCard property={featuredIPO} />
              <LivePurchaseFeed purchases={recentPurchases} autoUpdate={true} />
            </FeaturedContainer>
          </IPOSubscriptionProvider>
        )}
      </FeaturedSection>
      
      <section>
        <SectionTitle>Upcoming IPOs</SectionTitle>
        <SectionSubtitle>Properties in presale phase - Register your interest early</SectionSubtitle>
        
        <PresaleGrid>
          {presaleProperties.map(property => (
            <PresaleIPOCard key={property.id} property={property} />
          ))}
        </PresaleGrid>
      </section>
    </IPOContainer>
  );
};

export default IPO;
