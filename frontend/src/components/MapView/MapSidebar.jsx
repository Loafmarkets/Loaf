import React from 'react';
import styled from 'styled-components';
import PropertyCard from '../PropertyCard/PropertyCard';

const MapSidebar = ({ 
  properties, 
  activeFilters, 
  onFilterChange, 
  hoveredProperty,
  onPropertyHover 
}) => {
  // Filter properties based on active filters
  const filteredProperties = properties.filter(property => {
    if (activeFilters.length === 0) return true;
    return activeFilters.includes(property.type);
  });

  return (
    <SidebarContainer>
      <FilterContainer>
        <FilterHeading>Filter Properties</FilterHeading>
        <FilterOptions>
          <FilterOption 
            active={activeFilters.includes('luxury')}
            onClick={() => onFilterChange('luxury')}
          >
            Luxury Homes
          </FilterOption>
          <FilterOption 
            active={activeFilters.includes('apartment')}
            onClick={() => onFilterChange('apartment')}
          >
            Premium Apartments
          </FilterOption>
          <FilterOption 
            active={activeFilters.includes('commercial')}
            onClick={() => onFilterChange('commercial')}
          >
            Commercial
          </FilterOption>
          <FilterOption 
            active={activeFilters.includes('industrial')}
            onClick={() => onFilterChange('industrial')}
          >
            Industrial
          </FilterOption>
        </FilterOptions>
      </FilterContainer>

      <ResultsCount>{filteredProperties.length} Properties</ResultsCount>

      <PropertiesList>
        {filteredProperties.map(property => (
          <PropertyCardWrapper 
            key={property.id}
            isHovered={hoveredProperty?.id === property.id}
            onMouseEnter={() => onPropertyHover(property)}
            onMouseLeave={() => onPropertyHover(null)}
          >
            <PropertyCard 
              property={property}
              compact={true}
            />
          </PropertyCardWrapper>
        ))}
      </PropertiesList>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-background);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 32px;
  box-sizing: border-box;
`;

const FilterContainer = styled.div`
  margin-bottom: 16px;
`;

const FilterHeading = styled.h3`
  font-size: 16px;
  color: white;
  margin: 0 0 12px 0;
`;

const FilterOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const FilterOption = styled.button`
  background-color: ${props => props.active ? '#6200EA' : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.active ? 'white' : '#CCCCCC'};
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${props => props.active ? '#7C4DFF' : 'rgba(255, 255, 255, 0.15)'};
  }
`;

const ResultsCount = styled.div`
  font-size: 14px;
  color: #CCCCCC;
  margin-bottom: 16px;
`;

const PropertiesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const PropertyCardWrapper = styled.div`
  transition: transform 0.2s;
  transform: ${props => props.isHovered ? 'scale(1.02)' : 'scale(1)'};
  box-shadow: ${props => props.isHovered ? '0 4px 12px rgba(0, 0, 0, 0.2)' : 'none'};
  border-radius: 8px;
`;

export default MapSidebar;
