import React, { useState } from 'react';
import styled from 'styled-components';

const ChartContainer = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
`;

const TimeframeSelector = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

const TimeframeButton = styled.button`
  background: ${props => props.active ? 'var(--color-accent)' : 'transparent'};
  color: ${props => props.active ? '#000' : 'var(--color-text-secondary)'};
  border: none;
  border-radius: var(--border-radius);
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    color: ${props => props.active ? '#000' : 'var(--color-text)'};
  }
`;

const ChartPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-background);
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const ChartLine = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const ChartPath = styled.path`
  stroke: var(--color-accent);
  stroke-width: 2;
  fill: none;
`;

const ChartFill = styled.path`
  fill: url(#gradient);
  opacity: 0.2;
`;

const PairInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const PairImages = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

const AssetImage = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  
  &:first-child {
    margin-right: -8px;
    z-index: 1;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PairName = styled.div`
  font-weight: 600;
`;

const PairRate = styled.div`
  margin-left: auto;
  font-weight: 600;
  color: var(--color-accent);
`;

const PriceStats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatLabel = styled.div`
  font-size: 0.75rem;
  color: var(--color-text-secondary);
  margin-bottom: 0.25rem;
`;

const StatValue = styled.div`
  font-weight: 600;
`;

// Generate random chart data
const generateChartData = (points, trend) => {
  const data = [];
  let value = 100;
  
  for (let i = 0; i < points; i++) {
    // Random fluctuation with overall trend
    const change = (Math.random() - 0.5) * 10 + trend;
    value += change;
    value = Math.max(value, 50); // Ensure value doesn't go too low
    
    data.push({
      x: i / (points - 1),
      y: value
    });
  }
  
  return data;
};

// Generate SVG path from data points
const generatePath = (data, height, width) => {
  if (!data || data.length === 0) return '';
  
  const minValue = Math.min(...data.map(point => point.y));
  const maxValue = Math.max(...data.map(point => point.y));
  const range = maxValue - minValue;
  
  // Normalize data to fit in chart
  const normalizedData = data.map(point => ({
    x: point.x * width,
    y: height - ((point.y - minValue) / range) * (height * 0.8) - (height * 0.1)
  }));
  
  // Create SVG path
  let path = `M ${normalizedData[0].x} ${normalizedData[0].y}`;
  
  for (let i = 1; i < normalizedData.length; i++) {
    path += ` L ${normalizedData[i].x} ${normalizedData[i].y}`;
  }
  
  return path;
};

// Generate fill path for area under the line
const generateFillPath = (pathData, height, width) => {
  if (!pathData) return '';
  return `${pathData} L ${width} ${height} L 0 ${height} Z`;
};

const PriceChart = ({ fromAsset, toAsset }) => {
  const [timeframe, setTimeframe] = useState('1D');
  
  // Generate chart data based on timeframe
  const getChartData = () => {
    switch (timeframe) {
      case '1H':
        return generateChartData(60, 0.1);
      case '1D':
        return generateChartData(24, 0.2);
      case '1W':
        return generateChartData(7, 0.5);
      case '1M':
        return generateChartData(30, 1);
      case '1Y':
        return generateChartData(12, 2);
      default:
        return generateChartData(24, 0.2);
    }
  };
  
  const chartData = getChartData();
  const chartWidth = 1000;
  const chartHeight = 250;
  const pathData = generatePath(chartData, chartHeight, chartWidth);
  const fillPathData = generateFillPath(pathData, chartHeight, chartWidth);
  
  // Calculate exchange rate
  const exchangeRate = fromAsset && toAsset ? (toAsset.price / fromAsset.price).toFixed(6) : 0;
  
  // Calculate 24h change (random for demo)
  const change24h = ((Math.random() * 10) - 5).toFixed(2);
  const isPositive = parseFloat(change24h) >= 0;
  
  return (
    <>
      <PairInfo>
        {fromAsset && toAsset && (
          <>
            <PairImages>
              <AssetImage>
                <img src={fromAsset.imageUrl} alt={fromAsset.name} />
              </AssetImage>
              <AssetImage>
                <img src={toAsset.imageUrl} alt={toAsset.name} />
              </AssetImage>
            </PairImages>
            <PairName>
              {fromAsset.name.split(' ')[0]}/{toAsset.name.split(' ')[0]}
            </PairName>
            <PairRate>
              1 {fromAsset.name.split(' ')[0]} = {exchangeRate} {toAsset.name.split(' ')[0]}
            </PairRate>
          </>
        )}
      </PairInfo>
      
      <TimeframeSelector>
        {['1H', '1D', '1W', '1M', '1Y'].map(tf => (
          <TimeframeButton
            key={tf}
            active={timeframe === tf}
            onClick={() => setTimeframe(tf)}
          >
            {tf}
          </TimeframeButton>
        ))}
      </TimeframeSelector>
      
      <ChartContainer>
        <ChartPlaceholder>
          <ChartLine viewBox={`0 0 ${chartWidth} ${chartHeight}`} preserveAspectRatio="none">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <ChartPath d={pathData} />
            <ChartFill d={fillPathData} />
          </ChartLine>
        </ChartPlaceholder>
      </ChartContainer>
      
      <PriceStats>
        <StatItem>
          <StatLabel>24h Change</StatLabel>
          <StatValue style={{ color: isPositive ? '#4CAF50' : '#F44336' }}>
            {isPositive ? '+' : ''}{change24h}%
          </StatValue>
        </StatItem>
        <StatItem>
          <StatLabel>24h High</StatLabel>
          <StatValue>{(parseFloat(exchangeRate) * (1 + Math.random() * 0.1)).toFixed(6)}</StatValue>
        </StatItem>
        <StatItem>
          <StatLabel>24h Low</StatLabel>
          <StatValue>{(parseFloat(exchangeRate) * (1 - Math.random() * 0.1)).toFixed(6)}</StatValue>
        </StatItem>
        <StatItem>
          <StatLabel>24h Volume</StatLabel>
          <StatValue>${(Math.random() * 1000000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</StatValue>
        </StatItem>
      </PriceStats>
    </>
  );
};

export default PriceChart;
