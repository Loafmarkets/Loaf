import React, { useState } from 'react';
import styled from 'styled-components';
import { FaFilter } from 'react-icons/fa';

const FilterContainer = styled.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: ${props => props.compact ? '0.75rem' : '1rem'};
  margin-bottom: ${props => props.compact ? '0.75rem' : '2rem'};
  z-index: 20;
  position: relative;
`;

const FilterTitle = styled.h3`
  font-size: ${props => props.compact ? '0.875rem' : '1rem'};
  margin: 0 0 ${props => props.compact ? '0.5rem' : '1rem'} 0;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
  }
`;

const CategoryFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.compact ? '0.5rem' : '0.75rem'};
  margin-bottom: ${props => props.compact ? '0.5rem' : '1rem'};
`;

const CategoryButton = styled.button`
  background-color: ${props => props.active ? 'var(--color-accent)' : 'var(--color-background)'};
  color: ${props => props.active ? '#000' : 'var(--color-text)'};
  border: 1px solid ${props => props.active ? 'var(--color-accent)' : 'var(--color-border)'};
  border-radius: var(--border-radius);
  padding: ${props => props.compact ? '0.35rem 0.75rem' : '0.5rem 1rem'};
  font-size: ${props => props.compact ? '0.75rem' : '0.875rem'};
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    border-color: var(--color-accent);
  }
`;

const AdditionalFilters = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

const FilterGroup = styled.div``;

const FilterLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  color: var(--color-text-secondary);
`;

const SelectFilter = styled.select`
  width: 100%;
  padding: 0.5rem;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  color: var(--color-text);
  font-size: 0.875rem;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
`;

const RangeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const RangeInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  color: var(--color-text);
  font-size: 0.875rem;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
  
  &::placeholder {
    color: var(--color-text-secondary);
  }
`;

const CompactFilter = ({ onFilterChange, title = 'Filter' }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = [
    'All',
    'Luxury Property',
    'Industrial Property',
    'Watches',
    'Designer Pieces',
    'Art',
    'Collectibles'
  ];
  
  const handleCategoryChange = (e, category) => {
    // Prevent the event from bubbling up to document click handlers
    e.stopPropagation();
    
    setActiveCategory(category);
    if (onFilterChange) {
      onFilterChange({ category });
    }
  };
  
  return (
    <FilterContainer compact>
      <FilterTitle compact>
        <FaFilter />
        {title}
      </FilterTitle>
      
      <CategoryFilters compact>
        {categories.map(category => (
          <CategoryButton
            key={category}
            active={activeCategory === category}
            onClick={(e) => handleCategoryChange(e, category)}
            compact
            className="filter-button"
          >
            {category}
          </CategoryButton>
        ))}
      </CategoryFilters>
    </FilterContainer>
  );
};

const FilterBar = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  
  const categories = [
    'All',
    'Luxury Property',
    'Industrial Property',
    'Watches',
    'Designer Pieces',
    'Art',
    'Collectibles'
  ];
  
  const locations = [
    'Sydney',
    'Melbourne',
    'Brisbane',
    'Perth',
    'Adelaide',
    'Gold Coast'
  ];
  
  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'price_high', label: 'Price: High to Low' },
    { value: 'price_low', label: 'Price: Low to High' },
    { value: 'name_asc', label: 'Name: A to Z' },
    { value: 'name_desc', label: 'Name: Z to A' }
  ];
  
  return (
    <FilterContainer>
      <FilterTitle>Filters</FilterTitle>
      
      <CategoryFilters>
        {categories.map(category => (
          <CategoryButton
            key={category}
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </CategoryButton>
        ))}
      </CategoryFilters>
      
      <AdditionalFilters>
        <FilterGroup>
          <FilterLabel>Price Range</FilterLabel>
          <RangeContainer>
            <RangeInput
              type="text"
              placeholder="Min"
              value={priceRange.min}
              onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
            />
            <span>-</span>
            <RangeInput
              type="text"
              placeholder="Max"
              value={priceRange.max}
              onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
            />
          </RangeContainer>
        </FilterGroup>
        
        <FilterGroup>
          <FilterLabel>Location</FilterLabel>
          <SelectFilter
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">All Locations</option>
            {locations.map(loc => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </SelectFilter>
        </FilterGroup>
        
        <FilterGroup>
          <FilterLabel>Sort By</FilterLabel>
          <SelectFilter
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </SelectFilter>
        </FilterGroup>
      </AdditionalFilters>
    </FilterContainer>
  );
};

export { CompactFilter };
export default FilterBar;
