import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import MapContainer from './MapContainer';
import MapSidebar from './MapSidebar';
import MapControls from './MapControls';

const MapView = ({ properties, onClose }) => {
  const [activeFilters, setActiveFilters] = useState([]);
  const [viewport, setViewport] = useState(null);
  const [hoveredProperty, setHoveredProperty] = useState(null);
  
  // Add coordinates to properties if they don't have them
  // In a real implementation, these would come from your database
  const propertiesWithCoordinates = useMemo(() => {
    return properties.map(property => {
      // If property already has coordinates, return as is
      if (property.coordinates) return property;
      
      // Otherwise, assign mock coordinates based on location
      // This is just for demo purposes - in a real app, you'd have actual coordinates
      const mockCoordinates = getMockCoordinates(property.location);
      
      return {
        ...property,
        coordinates: mockCoordinates
      };
    });
  }, [properties]);
  
  // Handle filter changes
  const handleFilterChange = (filterType) => {
    setActiveFilters(prev => {
      if (prev.includes(filterType)) {
        return prev.filter(f => f !== filterType);
      } else {
        return [...prev, filterType];
      }
    });
  };
  
  // Filter properties based on map bounds
  const visibleProperties = useMemo(() => {
    if (!viewport) return propertiesWithCoordinates;
    
    // In a real implementation, you would filter based on the actual map bounds
    // For now, we'll just return all properties
    return propertiesWithCoordinates;
  }, [propertiesWithCoordinates, viewport]);
  
  // Handle property hover
  const handlePropertyHover = (property) => {
    setHoveredProperty(property);
  };
  
  return (
    <MapViewContainer>
      <SidebarColumn>
        <MapSidebar 
          properties={visibleProperties}
          activeFilters={activeFilters}
          onFilterChange={handleFilterChange}
          hoveredProperty={hoveredProperty}
          onPropertyHover={handlePropertyHover}
        />
      </SidebarColumn>
      
      <MapViewContent>
        <MapContainer 
          properties={visibleProperties.filter(p => {
            if (activeFilters.length === 0) return true;
            return activeFilters.includes(p.type);
          })}
          onViewportChange={setViewport}
          onPropertyHover={handlePropertyHover}
        />
        <MapControls onClose={onClose} />
      </MapViewContent>
    </MapViewContainer>
  );
};

// Helper function to generate mock coordinates based on location
// In a real app, you would have actual coordinates from your database
const getMockCoordinates = (location) => {
  // Sydney center coordinates
  const sydneyCenter = { lat: -33.8688, lng: 151.2093 };
  
  // Generate a random offset within ~5km of Sydney center
  const latOffset = (Math.random() - 0.5) * 0.1;
  const lngOffset = (Math.random() - 0.5) * 0.1;
  
  // Some hardcoded locations for demo purposes
  const locationMap = {
    'Vaucluse, Sydney': { lat: -33.8568, lng: 151.2780 },
    'Bondi, Sydney': { lat: -33.8910, lng: 151.2745 },
    'Double Bay, Sydney': { lat: -33.8780, lng: 151.2400 },
    'Circular Quay, Sydney': { lat: -33.8610, lng: 151.2130 },
    'Bondi Junction, Sydney': { lat: -33.8916, lng: 151.2501 },
    'Barangaroo, Sydney': { lat: -33.8605, lng: 151.2010 },
    'Surry Hills, Sydney': { lat: -33.8845, lng: 151.2115 }
  };
  
  // Return mapped coordinates if available, otherwise generate random ones
  return locationMap[location] || {
    lat: sydneyCenter.lat + latOffset,
    lng: sydneyCenter.lng + lngOffset
  };
};

const MapViewContainer = styled.div`
  display: flex;
  height: calc(100vh - 64px);
  width: 100vw;
  position: fixed;
  top: 64px; /* Height of the navigation bar */
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  overflow: hidden;
  background-color: var(--color-background);
  margin: 0;
  padding: 0;
  transform: translateX(0);
  padding-top: 40px; /* Match spacing from the screenshot */
`;

const SidebarColumn = styled.div`
  width: 50%;
  max-width: 600px;
  height: 100%;
  overflow-y: auto;
  padding: 1.5rem;
  background-color: var(--color-background);
  border-right: 1px solid var(--color-border);
  box-sizing: border-box;
`;

const MapViewContent = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export default MapView;
