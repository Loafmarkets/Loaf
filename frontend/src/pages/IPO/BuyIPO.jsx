import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { getIPOById } from '../../services/ipoService';
import IPOPurchaseForm from '../../components/IPOPurchaseForm/IPOPurchaseForm';
import SubscriptionProgress from '../../components/SubscriptionProgress/SubscriptionProgress';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  padding-top: 100px;
`;

const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #b7bdc6;
  font-size: 14px;
  margin-bottom: 24px;
  text-decoration: none;
  
  svg {
    margin-right: 8px;
    width: 16px;
    height: 16px;
  }
  
  &:hover {
    color: #f0b90b;
  }
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PropertyDetails = styled.div`
  background-color: #1e2329;
  border-radius: 8px;
  overflow: hidden;
`;

const PropertyImage = styled.div`
  width: 100%;
  height: 240px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Badge = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: #f0b90b;
  color: #0b0e11;
  padding: 6px 12px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 12px;
`;

const PropertyInfo = styled.div`
  padding: 24px;
`;

const PropertyName = styled.h1`
  font-size: 24px;
  color: #eaecef;
  margin-bottom: 8px;
`;

const PropertyLocation = styled.p`
  color: #b7bdc6;
  font-size: 14px;
  margin-bottom: 16px;
`;

const PropertyDescription = styled.p`
  color: #eaecef;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 24px;
`;

const ProgressContainer = styled.div`
  margin-top: 24px;
`;

const ProgressTitle = styled.h3`
  font-size: 16px;
  color: #eaecef;
  margin-bottom: 16px;
`;

const BuyIPO = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const data = await getIPOById(id);
        setProperty(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching IPO property:', err);
        setError('Failed to load property details');
        setLoading(false);
      }
    };
    
    fetchProperty();
  }, [id]);
  
  if (loading) {
    return (
      <PageContainer>
        <div style={{ textAlign: 'center', padding: '100px 0' }}>
          <div>Loading property details...</div>
        </div>
      </PageContainer>
    );
  }
  
  if (error || !property) {
    return (
      <PageContainer>
        <div style={{ textAlign: 'center', padding: '100px 0', color: '#f6465d' }}>
          {error || 'Property not found'}
        </div>
      </PageContainer>
    );
  }
  
  return (
    <PageContainer>
      <BackLink to={`/ipo/${id}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
        Back to Property Details
      </BackLink>
      
      <ContentContainer>
        <PropertyDetails>
          <PropertyImage image={property.imageUrl}>
            {property.status === 'presale' ? (
              <Badge>IPO Coming Soon</Badge>
            ) : (
              <Badge>Active IPO</Badge>
            )}
          </PropertyImage>
          
          <PropertyInfo>
            <PropertyName>{property.name}</PropertyName>
            <PropertyLocation>{property.location}</PropertyLocation>
            <PropertyDescription>{property.description}</PropertyDescription>
            
            {property.status === 'active' && (
              <ProgressContainer>
                <ProgressTitle>Subscription Progress</ProgressTitle>
                <SubscriptionProgress 
                  currentAmount={property.currentInvestment} 
                  targetAmount={property.targetInvestment}
                />
              </ProgressContainer>
            )}
          </PropertyInfo>
        </PropertyDetails>
        
        {property.status === 'active' ? (
          <IPOPurchaseForm property={property} />
        ) : (
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center',
            backgroundColor: '#1e2329',
            borderRadius: '8px',
            padding: '32px'
          }}>
            <h2 style={{ color: '#eaecef', marginBottom: '16px' }}>IPO Coming Soon</h2>
            <p style={{ color: '#b7bdc6', textAlign: 'center', marginBottom: '24px' }}>
              This property is not yet available for investment. 
              Register your interest to be notified when the IPO launches.
            </p>
            <button style={{ 
              padding: '12px 24px',
              backgroundColor: '#2b3139',
              color: '#f0b90b',
              border: '1px solid #f0b90b',
              borderRadius: '4px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Register Interest
            </button>
          </div>
        )}
      </ContentContainer>
    </PageContainer>
  );
};

export default BuyIPO;
