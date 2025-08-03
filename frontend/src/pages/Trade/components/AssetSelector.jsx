import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FaSearch, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { CompactFilter } from './FilterBar';

const SelectorContainer = styled.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const SelectorHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const SelectorTitle = styled.h3`
  font-size: 1rem;
  color: var(--color-text-secondary);
  margin: 0;
`;

const BalanceInfo = styled.div`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
`;

const SelectedAssetContainer = styled.div`
  cursor: pointer;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  transition: all 0.2s;
  flex: 1;
  
  &:hover {
    border-color: var(--color-accent);
  }
`;

const AssetInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const AssetImage = styled.div`
  width: ${props => props.large ? '100%' : '48px'};
  height: ${props => props.large ? '250px' : '48px'};
  border-radius: 8px;
  overflow: hidden;
  margin-right: ${props => props.large ? '0' : '1rem'};
  margin-bottom: ${props => props.large ? '1rem' : '0'};
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AssetDetails = styled.div`
  text-align: ${props => props.centered ? 'center' : 'left'};
  width: 100%;
`;

const AssetName = styled.div`
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const AssetLocation = styled.div`
  font-size: 0.75rem;
  color: var(--color-text-secondary);
`;

const AssetCategory = styled.div`
  font-size: 0.75rem;
  color: var(--color-accent);
`;

const AssetQuantity = styled.div`
  font-weight: 600;
`;

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  z-index: 10;
`;

const DropdownList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  margin-top: 0.5rem;
  max-height: 300px;
  overflow-y: auto;
  display: ${props => props.isOpen ? 'block' : 'none'};
  z-index: 30;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

const SearchContainer = styled.div`
  padding: 0.75rem;
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  background-color: var(--color-card);
  z-index: 1;
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--color-background);
  border-radius: var(--border-radius);
  padding: 0.5rem 0.75rem;
  
  svg {
    color: var(--color-text-secondary);
    margin-right: 0.5rem;
  }
  
  input {
    background: none;
    border: none;
    color: var(--color-text);
    width: 100%;
    outline: none;
    
    &::placeholder {
      color: var(--color-text-secondary);
    }
  }
`;

const AssetOption = styled.div`
  padding: 0.75rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: var(--color-background);
  }
  
  ${props => props.selected && `
    background-color: rgba(var(--color-accent-rgb), 0.1);
  `}
`;

const NoResults = styled.div`
  padding: 1rem;
  text-align: center;
  color: var(--color-text-secondary);
`;

// AssetOption is already defined above

const AssetSelector = ({ title, assets, selectedAsset, onSelectAsset, showOwned }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const dropdownRef = useRef(null);
  
  // Close dropdown when clicking outside, but not when clicking on filters
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click was on a filter element
      const isFilterElement = !!event.target.closest('.filter-container') || 
                             !!event.target.closest('.filter-button');
      
      // Only close dropdown if click was outside dropdown AND not on a filter element
      if (dropdownRef.current && 
          !dropdownRef.current.contains(event.target) && 
          !isFilterElement) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  // Prevent clicks on filter container from closing dropdown
  const handleFilterContainerClick = (e) => {
    e.stopPropagation();
  };
  
  const handleFilterChange = ({ category }) => {
    setCategoryFilter(category);
    // Ensure dropdown stays open when filter changes
    setIsOpen(true);
  };
  
  // Filter assets based on search term and category
  const filteredAssets = assets.filter(asset => {
    const matchesSearch = 
      asset.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (asset.location && asset.location.toLowerCase().includes(searchTerm.toLowerCase())) ||
      asset.category.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = categoryFilter === 'All' || asset.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <SelectorContainer>
      <SelectorHeader>
        <SelectorTitle>{title}</SelectorTitle>
        {showOwned && selectedAsset && (
          <BalanceInfo>
            Balance: {selectedAsset.quantity} {selectedAsset.name.split(' ')[0]}
          </BalanceInfo>
        )}
      </SelectorHeader>
      
      <div className="filter-container" onClick={handleFilterContainerClick}>
        <CompactFilter 
          onFilterChange={handleFilterChange}
          title={`Filter ${title} Suburb`}
        />
      </div>
      
      <DropdownContainer ref={dropdownRef}>
        <SelectedAssetContainer onClick={() => setIsOpen(!isOpen)}>
          {selectedAsset ? (
            <>
              <AssetInfo>
                <AssetImage large={true}>
                  <img src={selectedAsset.imageUrl} alt={selectedAsset.name} />
                </AssetImage>
                <AssetDetails centered={true}>
                  <AssetName>{selectedAsset.name}</AssetName>
                  {selectedAsset.location && (
                    <AssetLocation>{selectedAsset.location}</AssetLocation>
                  )}
                  <AssetCategory>{selectedAsset.category}</AssetCategory>
                </AssetDetails>
              </AssetInfo>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: '1rem' }}>
                {showOwned && (
                  <AssetQuantity>You own: {selectedAsset.quantity}</AssetQuantity>
                )}
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </>
          ) : (
            <div>Select an asset</div>
          )}
        </SelectedAssetContainer>
        
        {isOpen && (
          <DropdownList isOpen={isOpen}>
            <SearchContainer>
              <SearchInput>
                <FaSearch />
                <input 
                  type="text" 
                  placeholder="Search assets..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                  autoFocus
                />
              </SearchInput>
            </SearchContainer>
            
            {filteredAssets.length > 0 ? (
              filteredAssets.map(asset => (
                <AssetOption 
                  key={asset.id}
                  selected={selectedAsset && selectedAsset.id === asset.id}
                  onClick={() => {
                    onSelectAsset(asset);
                    setIsOpen(false);
                    setSearchTerm('');
                  }}
                >
                  <AssetImage>
                    <img src={asset.imageUrl} alt={asset.name} />
                  </AssetImage>
                  <AssetDetails>
                    <AssetName>{asset.name}</AssetName>
                    {asset.location && (
                      <AssetLocation>{asset.location}</AssetLocation>
                    )}
                    <AssetCategory>{asset.category}</AssetCategory>
                  </AssetDetails>
                </AssetOption>
              ))
            ) : (
              <NoResults>No assets found</NoResults>
            )}
          </DropdownList>
        )}
      </DropdownContainer>
    </SelectorContainer>
  );
};

export default AssetSelector;
