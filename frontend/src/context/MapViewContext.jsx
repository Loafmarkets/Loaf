import React, { createContext, useState, useContext } from 'react';

// Create the context
export const MapViewContext = createContext();

// Create a provider component
export const MapViewProvider = ({ children }) => {
  const [isMapViewActive, setIsMapViewActive] = useState(false);

  return (
    <MapViewContext.Provider value={{ isMapViewActive, setIsMapViewActive }}>
      {children}
    </MapViewContext.Provider>
  );
};

// Create a custom hook to use the context
export const useMapView = () => {
  const context = useContext(MapViewContext);
  if (!context) {
    throw new Error('useMapView must be used within a MapViewProvider');
  }
  return context;
};
