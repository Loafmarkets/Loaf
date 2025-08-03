import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const CounterContainer = styled.div`
  font-size: ${props => props.fontSize || '2.5rem'};
  font-weight: 600;
  color: var(--color-accent);
  margin-bottom: 0.25rem;
`;

const AnimatedCounter = ({ 
  value, 
  startValue = null, 
  duration = 2000, 
  prefix = '', 
  suffix = '', 
  decimals = 2,
  fontSize = '2.5rem'
}) => {
  const [displayValue, setDisplayValue] = useState(startValue !== null ? startValue : value);
  const startTime = useRef(null);
  const frameId = useRef(null);
  const initialValue = useRef(startValue !== null ? startValue : value);
  
  // Format the number with commas and decimals
  const formatNumber = (num) => {
    return num.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  };

  useEffect(() => {
    // If the value hasn't changed, don't animate
    if (value === initialValue.current) {
      return;
    }

    // Cancel any existing animation
    if (frameId.current) {
      cancelAnimationFrame(frameId.current);
    }

    // Animation function
    const animate = (timestamp) => {
      if (!startTime.current) {
        startTime.current = timestamp;
      }
      
      const elapsed = timestamp - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentValue = initialValue.current + (value - initialValue.current) * easeOutQuart;
      setDisplayValue(currentValue);
      
      if (progress < 1) {
        frameId.current = requestAnimationFrame(animate);
      } else {
        // Ensure we end exactly at the target value
        setDisplayValue(value);
        startTime.current = null;
        frameId.current = null;
      }
    };
    
    frameId.current = requestAnimationFrame(animate);
    
    return () => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
    };
  }, [value, duration]);

  return (
    <CounterContainer fontSize={fontSize}>
      {prefix}{formatNumber(displayValue)}{suffix}
    </CounterContainer>
  );
};

export default AnimatedCounter;
