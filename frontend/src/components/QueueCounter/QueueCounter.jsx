import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CounterText = styled.span`
  font-weight: 600;
  color: #ffffff;
`;

const QueueCounter = () => {
  // Start with a base number over 10,000
  const [counter, setCounter] = useState(10742);
  
  useEffect(() => {
    // Update counter every 2-5 seconds with a random increment
    const interval = setInterval(() => {
      setCounter(prevCount => {
        // Random increment between 1-15
        const increment = Math.floor(Math.random() * 15) + 1;
        return prevCount + increment;
      });
    }, Math.random() * 3000 + 2000); // Random interval between 2-5 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  // Format the number with commas
  const formattedCounter = counter.toLocaleString();
  
  return <CounterText>{formattedCounter} ahead</CounterText>;
};

export default QueueCounter;
