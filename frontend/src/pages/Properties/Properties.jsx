import React, { useState, useEffect } from 'react';
import { useMapView } from '../../context/MapViewContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import westfieldImage from '../../assets/Westfield.jpg';
import barangarooImage from '../../assets/barangaroo.avif';
import { MapView } from '../../components/MapView';

const PropertiesContainer = styled.div`
  padding: ${props => props.isMapView ? '0' : '2rem 0'};
  height: ${props => props.isMapView ? 'calc(100vh - 64px)' : 'auto'};
  overflow: ${props => props.isMapView ? 'hidden' : 'visible'};
  position: ${props => props.isMapView ? 'relative' : 'static'};
  margin: 0;
  width: ${props => props.isMapView ? '100vw' : '100%'};
  max-width: ${props => props.isMapView ? 'none' : '100%'};
`;

const PageHeader = styled.div`
  margin-bottom: 2rem;
  text-align: center;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const PageDescription = styled.p`
  color: var(--color-text-secondary);
  max-width: 700px;
  margin: 0 auto;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const FilterButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.active ? 'var(--color-accent)' : 'transparent'};
  color: ${props => props.active ? 'var(--color-background)' : 'var(--color-text)'};
  border: 1px solid ${props => props.active ? 'var(--color-accent)' : 'var(--color-border)'};
  border-radius: var(--border-radius);
  font-weight: 500;
  transition: all var(--transition-speed) ease;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--color-accent)' : 'rgba(255, 255, 255, 0.05)'};
  }
`;

const PropertyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const CategorySection = styled.section`
  margin-bottom: 4rem;
`;

const CategoryHeader = styled.div`
  margin-bottom: 2rem;
`;

const CategoryTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
`;

const CategoryDescription = styled.p`
  font-size: 1rem;
  color: var(--color-text-secondary);
`;

const ViewToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  border-radius: var(--border-radius);
  background-color: rgba(255, 255, 255, 0.05);
  padding: 0.25rem;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
`;

const ViewToggleButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ${props => props.active ? 'var(--color-accent)' : 'transparent'};
  color: ${props => props.active ? 'var(--color-background)' : 'var(--color-text)'};
  border: none;
  border-radius: var(--border-radius);
  font-weight: 500;
  transition: all var(--transition-speed) ease;
  
  svg {
    width: 18px;
    height: 18px;
    stroke: currentColor;
  }
  
  &:hover {
    background-color: ${props => props.active ? 'var(--color-accent)' : 'rgba(255, 255, 255, 0.1)'};
  }
`;

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  const { setIsMapViewActive } = useMapView();
  const [isMapView, setIsMapView] = useState(false);
  
  useEffect(() => {
    fetchProperties();
  }, []);
  
  useEffect(() => {
    if (isMapView) {
      document.body.classList.add('map-view-active');
      setIsMapViewActive(true);
    } else {
      document.body.classList.remove('map-view-active');
      setIsMapViewActive(false);
    }
    
    return () => {
      document.body.classList.remove('map-view-active');
      setIsMapViewActive(false);
    };
  }, [isMapView, setIsMapViewActive]);
  
  useEffect(() => {
    filterProperties(activeFilter);
  }, [activeFilter, properties]);
  
  const fetchProperties = async () => {
    setIsLoading(true);
    try {
      // In a real app, you would call the API
      // For now, we'll use mock data
      const mockProperties = generateMockProperties();
      setProperties(mockProperties);
      setFilteredProperties(mockProperties);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching properties:', error);
      setIsLoading(false);
    }
  };
  
  const filterProperties = (filter) => {
    if (filter === 'all') {
      setFilteredProperties(properties);
    } else {
      const filtered = properties.filter(property => property.type === filter);
      setFilteredProperties(filtered);
    }
  };
  
  // Generate mock property data with diverse property types
  const generateMockProperties = () => {
    return [
      // Luxury Residential Properties
      {
        id: 1,
        name: "42 Vaucluse Road",
        shortName: "Vaucluse",
        location: "Vaucluse",
        type: "residential",
        category: "Luxury Mansion",
        imageUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        tokenPrice: "102,520",
        marketCap: "28,500,000",
        volume24h: "1,250,000",
        priceChangePercent: "1.20",
        bedrooms: 7,
        bathrooms: 6,
        carSpots: 5,
        propertyType: "House",
        description: "Prestigious waterfront mansion with harbor views, 7 bedrooms, pool, and private jetty."
      },
      {
        id: 2,
        name: "24 Wolseley Road",
        shortName: "Point Piper",
        location: "Point Piper",
        type: "residential",
        category: "Luxury Mansion",
        imageUrl: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        tokenPrice: "145,750",
        marketCap: "42,750,000",
        volume24h: "1,875,000",
        priceChangePercent: "2.35",
        bedrooms: 6,
        bathrooms: 5,
        carSpots: 4,
        propertyType: "House",
        description: "Iconic waterfront estate with panoramic harbor views, 6 bedrooms, and private beach access."
      },
      {
        id: 3,
        name: "18 Victoria Road",
        shortName: "Bellevue Hill",
        location: "Bellevue Hill",
        type: "residential",
        category: "Luxury Mansion",
        imageUrl: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        tokenPrice: "98,500",
        marketCap: "32,500,000",
        volume24h: "985,000",
        priceChangePercent: "-0.75",
        bedrooms: 5,
        bathrooms: 4,
        carSpots: 3,
        propertyType: "House",
        description: "Heritage-listed mansion with tennis court, pool, and extensive gardens on 2,000sqm land."
      },
      
      // Luxury Apartments
      {
        id: 4,
        name: "Penthouse, 15 Cross Street",
        shortName: "Double Bay",
        location: "Double Bay",
        type: "apartment",
        category: "Luxury Apartment",
        imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        tokenPrice: "78,300",
        marketCap: "18,750,000",
        volume24h: "1,120,000",
        priceChangePercent: "3.42",
        bedrooms: 4,
        bathrooms: 3,
        carSpots: 2,
        propertyType: "Apartment",
        description: "Exclusive penthouse with 360° views, private elevator, and rooftop terrace with infinity pool."
      },
      {
        id: 5,
        name: "Apartment 1201, 130 Elizabeth Street",
        shortName: "Elizabeth",
        location: "Sydney CBD",
        type: "apartment",
        category: "Luxury Apartment",
        imageUrl: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        tokenPrice: "65,400",
        marketCap: "15,750,000",
        volume24h: "850,000",
        priceChangePercent: "1.85",
        bedrooms: 3,
        bathrooms: 2,
        carSpots: 1,
        propertyType: "Apartment",
        description: "Premium high-rise apartment with city views, 3 bedrooms, and access to 5-star amenities."
      },
      {
        id: 6,
        name: "Penthouse, 71 Macquarie Street",
        shortName: "Macquarie",
        location: "Circular Quay",
        type: "apartment",
        category: "Luxury Apartment",
        imageUrl: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        tokenPrice: "92,800",
        marketCap: "22,450,000",
        volume24h: "750,000",
        priceChangePercent: "0.87",
        bedrooms: 4,
        bathrooms: 3,
        carSpots: 2,
        propertyType: "Apartment",
        description: "Harbor-front penthouse with Opera House views, 4 bedrooms, and private wine cellar.",
        agent: {
          name: "Steven Chen",
          agency: "The Agency",
          photoUrl: "https://randomuser.me/api/portraits/men/37.jpg",
          agencyLogoUrl: "https://via.placeholder.com/100x40?text=THE+AGENCY"
        }
      },
      
      // Commercial Properties
      {
        id: 7,
        name: "Westfield Shopping Centre",
        location: "Bondi Junction",
        type: "commercial",
        category: "Shopping Centre",
        imageUrl: westfieldImage,
        tokenPrice: "125,000",
        marketCap: "75,000,000",
        volume24h: "2,500,000",
        priceChangePercent: "4.25",
        description: "Prime retail location with over 250 stores and annual foot traffic of 28 million visitors.",
        agent: {
          name: "Steven Chen",
          agency: "The Agency",
          photoUrl: "https://randomuser.me/api/portraits/men/32.jpg",
          agencyLogoUrl: "https://via.placeholder.com/100x40?text=THE+AGENCY"
        }
      },
      {
        id: 8,
        name: "Barangaroo Office Tower",
        location: "Barangaroo",
        type: "commercial",
        category: "Office Building",
        imageUrl: barangarooImage,
        tokenPrice: "185,750",
        marketCap: "120,500,000",
        volume24h: "2,850,000",
        priceChangePercent: "-1.25",
        description: "A-grade office tower with harbor views, fully leased to blue-chip tenants on 10+ year terms.",
        agent: {
          name: "Jessica Wong",
          agency: "The Agency",
          photoUrl: "https://randomuser.me/api/portraits/women/44.jpg",
          agencyLogoUrl: "https://via.placeholder.com/100x40?text=THE+AGENCY"
        }
      },
      {
        id: 9,
        name: "AI Power Coffee Stand",
        location: "Surry Hills",
        type: "commercial",
        category: "Retail - F&B",
        imageUrl: "https://i0.wp.com/thespoon.tech/wp-content/uploads/2018/06/DSC00168-scaled.jpg?w=2560&ssl=1",
        tokenPrice: "100",
        marketCap: "50,500",
        volume24h: "10,200",
        priceChangePercent: "-0.45",
        description: "Innovative AI-powered coffee stand with automated baristas and premium coffee beans.",
        agent: {
          name: "Michael Zhang",
          agency: "The Agency",
          photoUrl: "https://randomuser.me/api/portraits/men/22.jpg",
          agencyLogoUrl: "https://via.placeholder.com/100x40?text=THE+AGENCY"
        }
      },
      
      // Industrial Properties
      {
        id: 10,
        name: "Alexandria Logistics Hub",
        location: "Alexandria",
        type: "industrial",
        category: "Logistics Facility",
        imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        tokenPrice: "75,200",
        marketCap: "52,450,000",
        volume24h: "950,000",
        priceChangePercent: "0.95",
        description: "State-of-the-art logistics facility with automated systems, leased to major e-commerce company.",
        agent: {
          name: "Sarah Johnson",
          agency: "The Agency",
          photoUrl: "https://randomuser.me/api/portraits/women/28.jpg",
          agencyLogoUrl: "https://via.placeholder.com/100x40?text=THE+AGENCY"
        }
      },
      {
        id: 11,
        name: "Eastern Creek Data Center",
        location: "Eastern Creek",
        type: "industrial",
        category: "Data Center",
        imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        tokenPrice: "68,750",
        marketCap: "48,250,000",
        volume24h: "875,000",
        priceChangePercent: "1.65",
        description: "Modern distribution center with excellent motorway access, solar power, and long-term tenant."
      },
      {
        id: 12,
        name: "Port Botany Warehouse",
        location: "Port Botany",
        type: "industrial",
        category: "Warehouse",
        imageUrl: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
        tokenPrice: "55,400",
        marketCap: "38,750,000",
        volume24h: "650,000",
        priceChangePercent: "-0.32",
        description: "Strategic port-side warehouse with customs facilities and direct access to shipping terminals."
      }
    ];
  };
  
  // Group properties by type for category sections
  const residentialProperties = filteredProperties.filter(p => p.type === 'residential');
  const apartmentProperties = filteredProperties.filter(p => p.type === 'apartment');
  const commercialProperties = filteredProperties.filter(p => p.type === 'commercial');
  const industrialProperties = filteredProperties.filter(p => p.type === 'industrial');
  
  return (
    <PropertiesContainer isMapView={isMapView}>
      {isMapView ? (
        <MapView 
          properties={properties} 
          onClose={() => setIsMapView(false)} 
        />
      ) : (
        <>
          <PageHeader>
            <PageTitle>Tokenized Properties</PageTitle>
            <PageDescription>
              Invest in fractional ownership of premium real estate assets
            </PageDescription>
          </PageHeader>
          
          <ViewToggleContainer>
            <ViewToggleButton 
              active={!isMapView} 
              onClick={() => setIsMapView(false)}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              List View
            </ViewToggleButton>
            <ViewToggleButton 
              active={isMapView} 
              onClick={() => setIsMapView(true)}
            >
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 20L3 17V4L9 7M9 20V7M9 20L15 17M9 7L15 4M15 17V4M15 17L21 20V7L15 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Map View
            </ViewToggleButton>
          </ViewToggleContainer>
          
          <FilterContainer>
            <FilterButton 
              active={activeFilter === 'all'} 
              onClick={() => setActiveFilter('all')}
            >
              All Properties
            </FilterButton>
            <FilterButton 
              active={activeFilter === 'residential'} 
              onClick={() => setActiveFilter('residential')}
            >
              Luxury Homes
            </FilterButton>
            <FilterButton 
              active={activeFilter === 'apartment'} 
              onClick={() => setActiveFilter('apartment')}
            >
              Premium Apartments
            </FilterButton>
            <FilterButton 
              active={activeFilter === 'commercial'} 
              onClick={() => setActiveFilter('commercial')}
            >
              Commercial
            </FilterButton>
            <FilterButton 
              active={activeFilter === 'industrial'} 
              onClick={() => setActiveFilter('industrial')}
            >
              Industrial
            </FilterButton>
          </FilterContainer>
          
          {isLoading ? (
            <div>Loading properties...</div>
          ) : (
            <>
              {activeFilter === 'all' ? (
                <>
                  {residentialProperties.length > 0 && (
                    <CategorySection>
                      <CategoryHeader>
                        <CategoryTitle>Luxury Residential Properties</CategoryTitle>
                        <CategoryDescription>Prestigious homes in Australia's most exclusive neighborhoods</CategoryDescription>
                      </CategoryHeader>
                      <PropertyGrid>
                        {residentialProperties.map(property => (
                          <PropertyCard key={property.id} property={property} />
                        ))}
                      </PropertyGrid>
                    </CategorySection>
                  )}
                  
                  {apartmentProperties.length > 0 && (
                    <CategorySection>
                      <CategoryHeader>
                        <CategoryTitle>Premium Apartments</CategoryTitle>
                        <CategoryDescription>High-end apartments and penthouses in prime locations</CategoryDescription>
                      </CategoryHeader>
                      <PropertyGrid>
                        {apartmentProperties.map(property => (
                          <PropertyCard key={property.id} property={property} />
                        ))}
                      </PropertyGrid>
                    </CategorySection>
                  )}
                  
                  {commercialProperties.length > 0 && (
                    <CategorySection>
                      <CategoryHeader>
                        <CategoryTitle>Commercial Properties</CategoryTitle>
                        <CategoryDescription>Retail centers and office buildings with premium tenants</CategoryDescription>
                      </CategoryHeader>
                      <PropertyGrid>
                        {commercialProperties.map(property => (
                          <PropertyCard key={property.id} property={property} />
                        ))}
                      </PropertyGrid>
                    </CategorySection>
                  )}
                  
                  {industrialProperties.length > 0 && (
                    <CategorySection>
                      <CategoryHeader>
                        <CategoryTitle>Industrial Assets</CategoryTitle>
                        <CategoryDescription>High-performing logistics and industrial facilities</CategoryDescription>
                      </CategoryHeader>
                      <PropertyGrid>
                        {industrialProperties.map(property => (
                          <PropertyCard key={property.id} property={property} />
                        ))}
                      </PropertyGrid>
                    </CategorySection>
                  )}
                </>
              ) : (
                <PropertyGrid>
                  {filteredProperties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </PropertyGrid>
              )}
            </>
          )}
        </>
      )}
    </PropertiesContainer>
  );
};

export default Properties;
