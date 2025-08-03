import React, { useState, useEffect, useMemo } from 'react';
import Map, { Marker, NavigationControl, Popup } from 'react-map-gl';
import styled from 'styled-components';
import 'mapbox-gl/dist/mapbox-gl.css';
import PropertyMarker from './PropertyMarker';
import MarkerPopup from './MarkerPopup';

// You'll need to get a Mapbox access token
// https://docs.mapbox.com/help/getting-started/access-tokens/
const MAPBOX_TOKEN = 'pk.eyJ1IjoibG9hZm1hcmtldHMiLCJhIjoiY2x3MnVnNWxvMDFrZTJrcGR5ZmF0ZXdwMCJ9.7ZlCb1bdgTqZm9M9wLXKvg';

// Sydney coordinates as default center
const DEFAULT_CENTER = { 
  longitude: 151.2093, 
  latitude: -33.8688,
  zoom: 12
};

const MapContainer = ({ properties, onViewportChange, onPropertyHover }) => {
  const [viewport, setViewport] = useState(DEFAULT_CENTER);
  const [hoveredProperty, setHoveredProperty] = useState(null);
  const [popupInfo, setPopupInfo] = useState(null);
  
  // Update parent component when viewport changes
  useEffect(() => {
    if (onViewportChange) {
      onViewportChange(viewport);
    }
  }, [viewport, onViewportChange]);
  
  // Filter properties to only those with coordinates
  const propertiesWithCoordinates = useMemo(() => {
    return properties.filter(property => 
      property.coordinates && 
      property.coordinates.lat && 
      property.coordinates.lng
    );
  }, [properties]);
  
  const handleMarkerHover = (property) => {
    setHoveredProperty(property);
    if (onPropertyHover) {
      onPropertyHover(property);
    }
  };
  
  const handleMarkerClick = (property) => {
    setPopupInfo(property);
  };
  
  return (
    <MapContainerWrapper>
      <Map
        mapboxAccessToken={MAPBOX_TOKEN}
        initialViewState={viewport}
        onMove={evt => setViewport(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/light-v11"
        style={{ width: '100%', height: '100%' }}
      >
        <NavigationControl position="top-right" />
        
        {propertiesWithCoordinates.map(property => (
          <Marker
            key={property.id}
            longitude={property.coordinates.lng}
            latitude={property.coordinates.lat}
            anchor="bottom"
          >
            <PropertyMarker 
              property={property}
              isHovered={hoveredProperty?.id === property.id}
              onClick={() => handleMarkerClick(property)}
              onMouseEnter={() => handleMarkerHover(property)}
              onMouseLeave={() => handleMarkerHover(null)}
            />
          </Marker>
        ))}
        
        {popupInfo && (
          <Popup
            anchor="top"
            longitude={popupInfo.coordinates.lng}
            latitude={popupInfo.coordinates.lat}
            onClose={() => setPopupInfo(null)}
            closeOnClick={false}
            offset={20}
          >
            <MarkerPopup property={popupInfo} />
          </Popup>
        )}
      </Map>
    </MapContainerWrapper>
  );
};

const MapContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
  left: 0;
  
  .mapboxgl-popup-content {
    padding: 0;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

export default MapContainer;
