import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import SubscriptionProgress from '../../components/SubscriptionProgress/SubscriptionProgress';
import LivePurchaseFeed from '../../components/LivePurchaseFeed/LivePurchaseFeed';
import IPOPriceChart from '../../components/IPOPriceChart/IPOPriceChart';
import QueueCounter from '../../components/QueueCounter/QueueCounter';
import ipoService from '../../services/ipoService';
import { useIPOSubscription, IPOSubscriptionProvider } from '../../contexts/IPOSubscriptionContext';

const DetailContainer = styled.div`
  padding: 2rem 0;
  width: 100%;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: var(--color-text-secondary);
  margin-bottom: 2rem;
  font-size: 0.875rem;
  text-decoration: none;
  
  &:hover {
    color: var(--color-accent);
  }
  
  svg {
    margin-right: 0.5rem;
  }
`;

const PropertyHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const PropertyName = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
`;

const PropertyLocation = styled.p`
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  margin-bottom: 1rem;
`;

const StatusBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-accent);
  color: var(--color-background);
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  width: fit-content;
  min-width: 150px;
`;

const LiveIndicatorText = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  font-size: 0.875rem;
  margin-left: 12px;
`;

const PulsingDot = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: ${props => props.isSubscribed ? '#e74c3c' : '#2ecc71'};
  border-radius: 50%;
  box-shadow: ${props => props.isSubscribed ? '0 0 6px 1px #e74c3c' : '0 0 6px 1px #2ecc71'};
  animation: ${props => props.isSubscribed ? 'pulseRed' : 'pulseGreen'} 1.5s infinite;
  
  @keyframes pulseGreen {
    0% {
      box-shadow: 0 0 0 0 rgba(46, 204, 113, 0.7);
    }
    70% {
      box-shadow: 0 0 0 6px rgba(46, 204, 113, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(46, 204, 113, 0);
    }
  }
  
  @keyframes pulseRed {
    0% {
      box-shadow: 0 0 0 0 rgba(231, 76, 60, 0.7);
    }
    70% {
      box-shadow: 0 0 0 6px rgba(231, 76, 60, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(231, 76, 60, 0);
    }
  }
`;


const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Section = styled.section`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: var(--color-text);
`;

const PropertyImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: var(--border-radius);
  margin-bottom: 1.5rem;
`;

const MediaTypeContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  padding: 0.75rem;
  background: linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%);
  z-index: 5;
`;

const MediaTypeButton = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
  
  svg {
    width: 24px;
    height: 24px;
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.5));
  }
`;

const PropertyDescription = styled.p`
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatLabel = styled.span`
  color: var(--color-text-secondary);
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
`;

const StatValue = styled.span`
  color: var(--color-text);
  font-weight: 600;
  font-size: 1.125rem;
`;

const GoldStatValue = styled(StatValue)`
  color: var(--color-gold, #E6C75F);
  font-weight: 700;
`;

const TokenPrice = styled(StatValue)`
  color: var(--color-accent);
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  
  &::before {
    content: '✓';
    display: inline-block;
    margin-right: 0.5rem;
    color: var(--color-accent);
    font-weight: bold;
  }
`;

const DocumentsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const DocumentItem = styled.li`
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--color-border);
  
  &:last-child {
    border-bottom: none;
  }
  
  a {
    display: flex;
    align-items: center;
    color: var(--color-text);
    text-decoration: none;
    
    &:hover {
      color: var(--color-accent);
    }
    
    svg {
      margin-right: 0.75rem;
      color: var(--color-text-secondary);
    }
  }
`;

const SubscriptionProgressContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const SubscriptionText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`;

const RaisedAmount = styled.span`
margin-left: auto;
font-weight: 600;
`;

const AllocationQueueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const AllocationQueueLabel = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--color-text-secondary);
`;

const AllocationQueueValue = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text);
`;

const BuyButton = styled(Link)`
  display: block;
  width: 100%;
  background-color: ${props => props.disabled ? '#999' : 'var(--color-accent)'};
  color: var(--color-background);
  text-align: center;
  padding: 1rem;
  border-radius: 8px;
  font-weight: 600;
  margin-top: 2rem;
  text-decoration: none;
  transition: background-color 0.2s;
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

  &:hover {
    background-color: ${props => props.disabled ? '#999' : 'var(--color-accent-hover)'};
    color: var(--color-background);
  }
`;

const IPODetailContent = () => {
  // Use the IPO subscription context
  const { property, isFullySubscribed } = useIPOSubscription();
  const [recentPurchases, setRecentPurchases] = useState([]);
  
  // Fetch recent purchases for active IPOs
  useEffect(() => {
    const fetchPurchases = async () => {
      if (property && property.id && property.subscriptionPercentage !== undefined) {
        try {
          const purchasesResponse = await ipoService.getRecentPurchases(property.id);
          setRecentPurchases(purchasesResponse.data);
        } catch (error) {
          console.error('Error fetching recent purchases:', error);
        }
      }
    };
    
    fetchPurchases();
  }, [property]);
  
  if (!property) {
    return (
      <DetailContainer>
        <div>Property not found</div>
      </DetailContainer>
    );
  }

  // Determine if this is an active IPO or presale
  const isActiveIPO = property.subscriptionPercentage !== undefined;

  
  // Format currency amounts
  const formatCurrency = (amount) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    } else {
      return `$${amount.toFixed(0)}`;
    }
  };
  
  // Format date to readable format
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  return (
    <DetailContainer>
      <BackLink to="/ipo">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
        </svg>
        Back to IPO Opportunities
      </BackLink>
      
      <PropertyHeader>
        <PropertyName>{property.name}</PropertyName>
        <PropertyLocation>{property.location}</PropertyLocation>
        <StatusBadge>
          {isActiveIPO ? (
            <>
              Public IPO
              <LiveIndicatorText>
                {property.subscriptionPercentage >= 100 ? 'CLOSED' : 'LIVE'} 
                <PulsingDot isSubscribed={property.subscriptionPercentage >= 100} />
              </LiveIndicatorText>
            </>
          ) : 'IPO Coming Soon'}
        </StatusBadge>
      </PropertyHeader>
      
      <ContentGrid>
        <MainContent>
          <Section>
            <div style={{ position: 'relative' }}>
              <PropertyImage src={property.imageUrl} alt={property.name} />
              <MediaTypeContainer>
                <MediaTypeButton>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 5h16v14H4V5zm15 13V6H5v12h14zM7 13l3-3 2 2 3-3 2 2v3H7v-1z"></path>
                  </svg>
                </MediaTypeButton>
                <MediaTypeButton>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5V9.5l6 3.5-6 3.5z"></path>
                  </svg>
                </MediaTypeButton>
                <MediaTypeButton>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"></path>
                    <path d="M12 6a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4V6z"></path>
                    <path d="M18 12a6 6 0 0 0-6-6v2a4 4 0 0 1 4 4h2z"></path>
                  </svg>
                </MediaTypeButton>
              </MediaTypeContainer>
            </div>
            <PropertyDescription>{property.description}</PropertyDescription>
            
            {isActiveIPO && (
              <SubscriptionProgress 
                percentage={property.subscriptionPercentage}
                raisedAmount={property.raisedAmount}
                targetAmount={property.targetRaise}
                animate={false}
              />
            )}
            
            <StatsGrid>
              <StatItem>
                <StatLabel>Token Price</StatLabel>
                <TokenPrice>${property.tokenPrice?.toLocaleString()}</TokenPrice>
              </StatItem>
              <StatItem>
                <StatLabel>IPO Valuation</StatLabel>
                <StatValue>$30M</StatValue>
              </StatItem>
              <StatItem>
                <StatLabel>Property Valuation</StatLabel>
                <StatValue>$30M</StatValue>
              </StatItem>
              <StatItem>
                <StatLabel>Property Size</StatLabel>
                <StatValue>{property.propertySize?.toLocaleString()} m²</StatValue>
              </StatItem>
              <StatItem>
                <StatLabel>Year Built</StatLabel>
                <StatValue>{property.yearBuilt}</StatValue>
              </StatItem>
              {isActiveIPO && (
                <StatItem>
                  <StatLabel>IPO Closes</StatLabel>
                  <StatValue>{formatDate(property.ipoEndDate)}</StatValue>
                </StatItem>
              )}
              {!isActiveIPO && (
                <StatItem>
                  <StatLabel>IPO Starts</StatLabel>
                  <StatValue>{formatDate(property.ipoStartDate)}</StatValue>
                </StatItem>
              )}
            </StatsGrid>
          </Section>
          
          {property.features && (
            <>
              <Section>
                <IPOPriceChart propertyId={property.id} />
              </Section>
              
              <Section>
                <SectionTitle>Property Features</SectionTitle>
                <FeaturesList>
                  {property.features.map((feature, index) => (
                    <FeatureItem key={index}>{feature}</FeatureItem>
                  ))}
                </FeaturesList>
              </Section>
            </>
          )}
          
          {property.documents && (
            <Section>
              <SectionTitle>Investment Documents</SectionTitle>
              <DocumentsList>
                {property.documents.map((doc, index) => (
                  <DocumentItem key={index}>
                    <a href={doc.url} target="_blank" rel="noopener noreferrer">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                      </svg>
                      {doc.name}
                    </a>
                  </DocumentItem>
                ))}
              </DocumentsList>
            </Section>
          )}
        </MainContent>
        
        <Sidebar>
          <Section>
            <SubscriptionProgressContainer>
              <SubscriptionProgress 
                percentage={property.subscriptionPercentage} 
                raisedAmount={property.raisedAmount || (property.subscriptionPercentage * property.targetRaise / 100)}
                targetAmount={property.targetRaise || 12500000}
                height="10px" 
                borderRadius="5px" 
              />
            </SubscriptionProgressContainer>
            
            <StatsGrid>
              <StatItem>
                <StatLabel>Token Price</StatLabel>
                <GoldStatValue>${property.tokenPrice.toLocaleString()}</GoldStatValue>
              </StatItem>
              <StatItem>
                <StatLabel>Property Valuation</StatLabel>
                <StatValue>$30M</StatValue>
              </StatItem>
              <StatItem>
                <StatLabel>Max Investment</StatLabel>
                <StatValue>{formatCurrency(property.minInvestment)}</StatValue>
              </StatItem>
              <StatItem>
                <StatLabel>Closing Date</StatLabel>
                <StatValue>15 July 2025</StatValue>
              </StatItem>
            </StatsGrid>
            
            {isActiveIPO && (
              <>
                <AllocationQueueContainer>
                  <AllocationQueueLabel>Subscription Queue</AllocationQueueLabel>
                  <AllocationQueueValue><QueueCounter /></AllocationQueueValue>
                </AllocationQueueContainer>
                
                <BuyButton 
                  to={property.subscriptionPercentage >= 100 ? '#' : `/ipo/${property.id}/buy`}
                  disabled={property.subscriptionPercentage >= 100}
                >
                  {property.subscriptionPercentage >= 100 ? 'FULLY SUBSCRIBED' : 'Subscribe'}
                </BuyButton>
              </>
            )}
          </Section>
          
          {isActiveIPO && (
            <Section>
              <LivePurchaseFeed 
                purchases={recentPurchases} 
                autoUpdate={true} 
              />
            </Section>
          )}
        </Sidebar>
      </ContentGrid>
    </DetailContainer>
  );
};

// Wrapper component that fetches the IPO data and provides it to the context
const IPODetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch property details
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        console.log('Fetching IPO details for ID:', id);
        const propertyResponse = await ipoService.getIPOById(id);
        console.log('IPO details response:', propertyResponse);
        
        if (propertyResponse && propertyResponse.data) {
          setProperty(propertyResponse.data);
        } else {
          setError('No data returned from getIPOById');
          console.error('No data returned from getIPOById');
        }
      } catch (error) {
        setError(`Error fetching IPO details: ${error.message}`);
        console.error('Error fetching IPO details:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    if (id) {
      fetchData();
    } else {
      setError('No IPO ID provided in URL parameters');
      console.error('No IPO ID provided in URL parameters');
      setIsLoading(false);
    }
  }, [id]);

  if (isLoading) {
    return (
      <DetailContainer>
        <div>Loading property details...</div>
      </DetailContainer>
    );
  }

  if (error || !property) {
    return (
      <DetailContainer>
        <BackLink to="/ipo">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
          Back to IPO Opportunities
        </BackLink>
        <div style={{ marginTop: '2rem', color: 'var(--color-text-secondary)' }}>
          {error || 'Property not found'}
        </div>
      </DetailContainer>
    );
  }

  return (
    <IPOSubscriptionProvider initialProperty={property}>
      <IPODetailContent />
    </IPOSubscriptionProvider>
  );
};

export default IPODetail;
