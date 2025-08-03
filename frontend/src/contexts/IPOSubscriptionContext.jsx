import React, { createContext, useState, useContext, useEffect } from 'react';

// Create context
export const IPOSubscriptionContext = createContext();

// Custom hook to use the IPO subscription context
export const useIPOSubscription = () => useContext(IPOSubscriptionContext);

// Provider component
export const IPOSubscriptionProvider = ({ children, initialProperty }) => {
  // State for the featured IPO property
  const [property, setProperty] = useState(initialProperty || null);
  
  // State for tracking if the IPO is fully subscribed
  const [isFullySubscribed, setIsFullySubscribed] = useState(false);
  
  // Initialize property when initialProperty changes
  useEffect(() => {
    if (initialProperty) {
      setProperty(initialProperty);
    }
  }, [initialProperty]);
  
  // Check if property is fully subscribed
  useEffect(() => {
    if (property && property.subscriptionPercentage >= 100) {
      setIsFullySubscribed(true);
    }
  }, [property?.subscriptionPercentage]);
  
  // Function to add a new purchase and update the property data
  const addPurchase = (purchaseAmount) => {
    if (!property || isFullySubscribed) return;
    
    setProperty(prevProperty => {
      // Calculate new raised amount
      const newRaisedAmount = prevProperty.raisedAmount + purchaseAmount;
      
      // Calculate new subscription percentage based on target raise of $12.5M
      // Ensure it never decreases and is capped at 100%
      const newPercentage = Math.min(100, Math.max(prevProperty.subscriptionPercentage, (newRaisedAmount / prevProperty.targetRaise) * 100));
      
      // Return updated property
      return {
        ...prevProperty,
        raisedAmount: newRaisedAmount,
        subscriptionPercentage: newPercentage
      };
    });
  };
  
  // Value to be provided by the context
  const value = {
    property,
    isFullySubscribed,
    addPurchase
  };
  
  return (
    <IPOSubscriptionContext.Provider value={value}>
      {children}
    </IPOSubscriptionContext.Provider>
  );
};
