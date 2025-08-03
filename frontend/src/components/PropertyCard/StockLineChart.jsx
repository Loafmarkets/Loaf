import React from 'react';
import styled from 'styled-components';

const ChartContainer = styled.div`
  width: 120px;
  height: 30px;
  position: relative;
  margin-left: auto;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChartSvg = styled.svg`
  width: 100%;
  height: 100%;
  overflow: visible;
`;

const ChartPath = styled.path`
  stroke: ${props => props.isPositive ? '#4CAF50' : '#FF5252'};
  stroke-width: 2;
  fill: none;
  filter: drop-shadow(0 0 2px ${props => props.isPositive ? 'rgba(76, 175, 80, 0.6)' : 'rgba(255, 82, 82, 0.6)'});
`;

// Generate random points for the chart path
const generateChartPath = (isPositive) => {
  const points = [];
  const width = 80;
  const height = 30;
  const pointCount = 20;
  
  // Generate random points with an overall trend based on isPositive
  for (let i = 0; i < pointCount; i++) {
    const x = (i / (pointCount - 1)) * width;
    
    // Create a general trend based on whether price is positive or negative
    let trendFactor = isPositive ? 0.7 : -0.7;
    
    // Add some randomness
    const randomness = Math.random() * 10 - 5;
    
    // Calculate y with a trend and randomness
    // For positive trend, we want the line to generally go up
    // For negative trend, we want the line to generally go down
    let y;
    if (isPositive) {
      y = height - ((i / (pointCount - 1)) * height * trendFactor + randomness);
    } else {
      y = ((i / (pointCount - 1)) * height * trendFactor + randomness) + height/2;
    }
    
    points.push(`${x},${y}`);
  }
  
  return `M ${points.join(' L ')}`;
};

const ReferenceLine = styled.line`
  stroke: rgba(255, 255, 255, 0.15);
  stroke-width: 0.5;
  stroke-dasharray: 1, 2;
`;

const StockLineChart = ({ isPositive }) => {
  const chartPath = generateChartPath(isPositive);
  
  return (
    <ChartContainer>
      <ChartSvg viewBox="0 0 80 30">
        <ReferenceLine x1="0" y1="15" x2="80" y2="15" />
        <ChartPath d={chartPath} isPositive={isPositive} />
      </ChartSvg>
    </ChartContainer>
  );
};

export default StockLineChart;
