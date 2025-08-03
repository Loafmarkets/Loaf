import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { usePrice } from '../../context/PriceContext';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ChartContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 2rem;
  position: relative;
`;

const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ChartTitle = styled.h3`
  margin: 0;
  font-size: 1.25rem;
`;

const PriceInfo = styled.div`
  display: flex;
  align-items: center;
`;

const CurrentPrice = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-right: 1rem;
  color: ${props => props.isPositive ? 'var(--color-positive)' : 'var(--color-negative)'};
  
  .decimal {
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

const PriceChange = styled.div`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: 500;
  background-color: ${props => props.isPositive ? 'rgba(0, 192, 118, 0.1)' : 'rgba(255, 87, 87, 0.1)'};
  color: ${props => props.isPositive ? 'var(--color-positive)' : 'var(--color-negative)'};
`;

const TimeframeSelector = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`;

const TimeButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${props => props.active ? 'var(--color-accent)' : 'transparent'};
  color: ${props => props.active ? 'var(--color-background)' : 'var(--color-text)'};
  border: 1px solid ${props => props.active ? 'var(--color-accent)' : 'var(--color-border)'};
  border-radius: var(--border-radius);
  margin-right: 0.5rem;
  font-weight: 500;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--color-accent)' : 'rgba(255, 255, 255, 0.05)'};
  }
`;

const ChartGrid = styled.div`
  position: absolute;
  top: 120px;
  left: 50px;
  right: 50px;
  bottom: 50px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  z-index: 1;
  pointer-events: none;
`;

const GridLine = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.08);
  
  &.horizontal {
    height: 1px;
    left: 0;
    right: 0;
  }
  
  &.vertical {
    width: 1px;
    top: 0;
    bottom: 0;
  }
`;

const YAxis = styled.div`
  position: absolute;
  top: 120px;
  right: 20px;
  bottom: 50px;
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
  pointer-events: none;
`;

const XAxis = styled.div`
  position: absolute;
  left: 50px;
  right: 50px;
  bottom: 25px;
  height: 25px;
  display: flex;
  justify-content: space-between;
  z-index: 2;
  pointer-events: none;
`;

const AxisLabel = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 10px;
  white-space: nowrap;
  
  &.y-label {
    text-align: right;
    padding-right: 5px;
  }
  
  &.x-label {
    text-align: center;
  }
`;

const PriceChart = ({ tokenId }) => {
  const [timeframe, setTimeframe] = useState('1D');
  const [chartData, setChartData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Use the shared price context
  const priceData = usePrice();
  
  // Store the last generated chart data
  const [lastBasePrice, setLastBasePrice] = useState(null);
  
  // Generate chart data only when timeframe changes or token changes
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Generate mock data based on timeframe and current price
      const data = generateMockData(timeframe);
      setChartData(data);
      setLastBasePrice(priceData.value);
      setIsLoading(false);
    }, 300);
  }, [timeframe, tokenId]);
  
  // Update only the current price display without regenerating the entire chart
  useEffect(() => {
    // Skip the first render or when chart is loading
    if (isLoading || !chartData || !lastBasePrice) return;
    
    // Only update the current price display, not the entire chart
    // This prevents the chart from disappearing on every price update
  }, [priceData.value]);
  
  // Generate mock line chart data
  const generateMockData = (timeframe) => {
    let labels = [];
    let priceData = [];
    // Use a consistent base price of 325000 for the chart data
    // This prevents the chart from completely regenerating when the price changes
    let basePrice = 325000;
    let volatility;
    let tooltipLabels = [];
    let dataPoints;
    
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    switch(timeframe) {
      case '1D':
        // Generate hourly candles for the last 24 hours
        dataPoints = 24;
        labels = Array.from({ length: dataPoints }, (_, i) => {
          const date = new Date(today);
          date.setHours(i, 0, 0);
          return date.toISOString();
        });
        tooltipLabels = Array.from({ length: dataPoints }, (_, i) => {
          const date = new Date(today);
          date.setHours(i, 0, 0);
          return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        });
        volatility = basePrice * 0.005; // 0.5% of base price
        break;
      case '1W':
        dataPoints = 28; // 4 data points per day for a week
        labels = Array.from({ length: dataPoints }, (_, i) => {
          const date = new Date(today);
          date.setDate(date.getDate() - 7); // Start 7 days ago
          // Add hours to create multiple points per day
          date.setHours(Math.floor(i / 4) * 6, 0, 0);
          return date.toISOString();
        });
        tooltipLabels = Array.from({ length: dataPoints }, (_, i) => {
          const date = new Date(today);
          date.setDate(date.getDate() - 7); // Start 7 days ago
          date.setHours(Math.floor(i / 4) * 6, 0, 0);
          return date.toLocaleDateString([], { weekday: 'short' }) + ' ' + 
                 date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        });
        volatility = basePrice * 0.01; // 1% of base price
        break;
      case '1M':
        dataPoints = 10; // Reduced from 30 to 10 data points (roughly every 3 days)
        labels = Array.from({ length: dataPoints }, (_, i) => {
          const date = new Date(today);
          date.setDate(date.getDate() - 30 + (i * 3)); // Every 3 days
          return date.toISOString();
        });
        tooltipLabels = Array.from({ length: dataPoints }, (_, i) => {
          const date = new Date(today);
          date.setDate(date.getDate() - 30 + (i * 3));
          return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
        });
        volatility = basePrice * 0.015; // 1.5% of base price
        break;
      case '3M':
        dataPoints = 12; // Reduced from 90 to 12 data points (roughly weekly)
        labels = Array.from({ length: dataPoints }, (_, i) => {
          const date = new Date(today);
          date.setDate(date.getDate() - 90 + (i * 7.5)); // Roughly weekly
          return date.toISOString();
        });
        tooltipLabels = Array.from({ length: dataPoints }, (_, i) => {
          const date = new Date(today);
          date.setDate(date.getDate() - 90 + (i * 7.5));
          return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
        });
        volatility = basePrice * 0.025; // 2.5% of base price
        break;
      case '1Y':
        dataPoints = 12; // Reduced from 365 to 12 data points (monthly)
        labels = Array.from({ length: dataPoints }, (_, i) => {
          const date = new Date(today);
          date.setMonth(date.getMonth() - 12 + i); // Monthly data points
          return date.toISOString();
        });
        tooltipLabels = Array.from({ length: dataPoints }, (_, i) => {
          const date = new Date(today);
          date.setMonth(date.getMonth() - 12 + i);
          return date.toLocaleDateString([], { month: 'long', year: 'numeric' });
        });
        volatility = basePrice * 0.05; // 5% of base price
        break;
      default:
        // Default to 1D
        dataPoints = 24;
        labels = Array.from({ length: dataPoints }, (_, i) => {
          const date = new Date(today);
          date.setHours(i, 0, 0); // One data point per hour
          return date.toISOString();
        });
        tooltipLabels = Array.from({ length: dataPoints }, (_, i) => {
          const date = new Date(today);
          date.setHours(i, 0, 0);
          return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        });
        volatility = basePrice * 0.005; // 0.5% of base price
    }
    
    // Generate line chart data points with appropriate trends and fluctuations
    priceData = Array.from({ length: dataPoints }, (_, i) => {
      // Different volatility and trend patterns based on timeframe
      let price;
      
      if (timeframe === '1D' || timeframe === '1W') {
        // For short timeframes (1D, 1W), create more volatility/fluctuations
        
        // Start with a base trend that's overall positive
        const trendFactor = 1 + (i / dataPoints) * 0.05;
        const basePriceWithTrend = basePrice * trendFactor;
        
        // Add significant volatility for short-term charts
        // Use sine waves with different frequencies to create realistic price movements
        const volatilityFactor = 0.015; // 1.5% volatility
        const sinComponent1 = Math.sin(i / (dataPoints / 8)) * volatilityFactor;
        const sinComponent2 = Math.sin(i / (dataPoints / 4) + 2) * volatilityFactor * 0.7;
        const sinComponent3 = Math.sin(i / (dataPoints / 2) + 4) * volatilityFactor * 0.5;
        
        // Add some randomness on top of the sine patterns
        const randomComponent = (Math.random() - 0.5) * 0.01;
        
        // Combine all components
        price = basePriceWithTrend * (1 + sinComponent1 + sinComponent2 + sinComponent3 + randomComponent);
      } else {
        // For longer timeframes, use smoother trends with less dramatic fluctuations
        const trendFactor = 1 + (i / dataPoints) * 0.08;
        const basePriceWithTrend = basePrice * trendFactor;
        
        // Add moderate randomness to create a realistic price movement
        const randomFactor = 1 + (Math.random() * 0.01 - 0.004); // +1% to -0.4% variation
        price = basePriceWithTrend * randomFactor;
      }
      
      // For the first point, ensure it's lower than the final price
      if (i === 0) {
        price = basePrice * 0.98; // Start 2% below base price
      }
      
      // For the last point, make it higher than the starting price
      if (i === dataPoints - 1) {
        // End approximately 7-9% higher than starting price
        price = basePrice * (1.07 + Math.random() * 0.02);
      }
      
      return price;
    });
    
    const lineColor = 'rgba(0, 192, 118, 1)';
    const areaColor = 'rgba(0, 192, 118, 0.1)';
    
    return {
      labels,
      tooltipLabels,
      datasets: [
        {
          label: 'Price',
          data: priceData,
          borderColor: lineColor,
          backgroundColor: areaColor,
          borderWidth: 2,
          pointRadius: 0,
          pointHoverRadius: 4,
          pointHoverBackgroundColor: lineColor,
          pointHoverBorderColor: '#fff',
          pointHoverBorderWidth: 2,
          tension: 0.4,
          fill: true,
        }
      ]
    };
  };
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(30, 30, 40, 0.95)',
        titleColor: 'rgba(255, 255, 255, 0.95)',
        bodyColor: 'rgba(255, 255, 255, 0.95)',
        borderColor: 'var(--color-border)',
        borderWidth: 1,
        padding: 12,
        displayColors: false,
        titleFont: {
          size: 14
        },
        bodyFont: {
          size: 12
        },
        callbacks: {
          title: function(tooltipItems) {
            if (!chartData || !chartData.tooltipLabels) return '';
            return chartData.tooltipLabels[tooltipItems[0].dataIndex];
          },
          label: function(context) {
            return '$' + context.parsed.y.toLocaleString();
          }
        }
      }
    },
    scales: {
      x: {
        type: 'category',
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.8)',
          maxRotation: 0,
          autoSkip: false,
          font: {
            size: 10,
            weight: '500'
          },
          callback: function(value, index) {
            if (!chartData || !chartData.tooltipLabels) return '';
            
            const totalPoints = chartData.tooltipLabels.length;
            const timeframeDisplay = {
              '1D': () => {
                // For 1D, show hours: 00:00, 04:00, 08:00, 12:00, 16:00, 20:00
                if (index % 4 === 0 || index === totalPoints - 1) {
                  return chartData.tooltipLabels[index].split(' ')[0]; // Just show time
                }
                return '';
              },
              '1W': () => {
                // For 1W, show days: Sun, Mon, Tue, Wed, Thu, Fri, Sat
                if (index % 4 === 0 || index === totalPoints - 1) {
                  return chartData.tooltipLabels[index].split(' ')[0]; // Just show day
                }
                return '';
              },
              '1M': () => {
                // For 1M, show all data points with date
                const date = new Date(chartData.labels[index]);
                return date.getDate() + ' ' + date.toLocaleDateString(undefined, { month: 'short' });
              },
              '3M': () => {
                // For 3M, show all data points
                const date = new Date(chartData.labels[index]);
                return date.getDate() + ' ' + date.toLocaleDateString(undefined, { month: 'short' });
              },
              '1Y': () => {
                // For 1Y, show all months
                const date = new Date(chartData.labels[index]);
                return date.toLocaleDateString(undefined, { month: 'short' });
              }
            };
            
            // Use the appropriate display function for the current timeframe
            return timeframeDisplay[timeframe] ? timeframeDisplay[timeframe]() : '';
          }
        },
        position: 'bottom'
      },
      y: {
        position: 'left',
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false
        },
        ticks: {
          display: false // Hide left y-axis ticks
        },
        border: {
          display: false
        }
      },
      y1: {
        position: 'right',
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.8)',
          font: {
            size: 10,
            weight: '500'
          },
          callback: function(value) {
            return '$' + value.toLocaleString();
          }
        },
        border: {
          display: false
        }
      }
    },
    interaction: {
      mode: 'index',
      intersect: false
    },
    animation: {
      duration: 500
    }
  };
  
  return (
    <ChartContainer>
      <ChartHeader>
        <ChartTitle>Price Chart</ChartTitle>
        <PriceInfo>
          <CurrentPrice isPositive={priceData.change.isPositive}>
            ${
              (() => {
                const parts = priceData.formatted.split('.');
                return (
                  <>
                    {parts[0]}
                    {parts.length > 1 && (
                      <span className="decimal">.{parts[1]}</span>
                    )}
                  </>
                );
              })()
            }
          </CurrentPrice>
          <PriceChange isPositive={priceData.change.isPositive}>
            {priceData.change.isPositive ? '+' : ''}{priceData.change.percentage}%
          </PriceChange>
        </PriceInfo>
      </ChartHeader>
      
      <TimeframeSelector>
        {['1D', '1W', '1M', '3M', '1Y'].map(tf => (
          <TimeButton 
            key={tf} 
            active={timeframe === tf}
            onClick={() => setTimeframe(tf)}
          >
            {tf}
          </TimeButton>
        ))}
      </TimeframeSelector>
      
      <div style={{ height: '300px', position: 'relative' }}>
        {isLoading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <div>Loading price chart...</div>
          </div>
        ) : chartData ? (
          <>
            {/* Custom chart grid */}
            <ChartGrid className="chart-grid">
              {/* Horizontal grid lines */}
              {[0, 25, 50, 75, 100].map((position) => (
                <GridLine 
                  key={`h-${position}`} 
                  className="chart-grid-line horizontal" 
                  style={{ bottom: `${position}%` }} 
                />
              ))}
              
              {/* Vertical grid lines */}
              {[0, 20, 40, 60, 80, 100].map((position) => (
                <GridLine 
                  key={`v-${position}`} 
                  className="chart-grid-line vertical" 
                  style={{ left: `${position}%` }} 
                />
              ))}
              
              {/* Chart line placeholder */}
              <div className="chart-line"></div>
            </ChartGrid>
            
            {/* Y-axis on the right side */}
            {!isLoading && chartData && (
              <YAxis>
                {chartData.datasets[0].data.length > 0 && [
                  Math.floor(Math.min(...chartData.datasets[0].data)),
                  Math.floor(Math.min(...chartData.datasets[0].data) + (Math.max(...chartData.datasets[0].data) - Math.min(...chartData.datasets[0].data)) * 0.33),
                  Math.floor(Math.min(...chartData.datasets[0].data) + (Math.max(...chartData.datasets[0].data) - Math.min(...chartData.datasets[0].data)) * 0.66),
                  Math.ceil(Math.max(...chartData.datasets[0].data))
                ].map((value, index) => (
                  <AxisLabel key={`y-${index}`} className="y-label">
                    ${value.toLocaleString()}
                  </AxisLabel>
                ))}
              </YAxis>
            )}
            
            {/* X-axis at the bottom */}
            {!isLoading && chartData && (
              <XAxis>
                {chartData.tooltipLabels.filter((_, i) => i % Math.ceil(chartData.tooltipLabels.length / 6) === 0 || i === chartData.tooltipLabels.length - 1).map((label, index) => (
                  <AxisLabel key={`x-${index}`} className="x-label">
                    {timeframe === '1D' ? label.split(' ')[0] : 
                     timeframe === '1W' ? label.split(' ')[0] :
                     timeframe === '1M' || timeframe === '3M' ? new Date(chartData.labels[index * Math.ceil(chartData.tooltipLabels.length / 6)]).getDate() + ' ' + new Date(chartData.labels[index * Math.ceil(chartData.tooltipLabels.length / 6)]).toLocaleDateString(undefined, { month: 'short' }) :
                     new Date(chartData.labels[index * Math.ceil(chartData.tooltipLabels.length / 6)]).toLocaleDateString(undefined, { month: 'short' })}
                  </AxisLabel>
                ))}
              </XAxis>
            )}
            
            {/* Main chart */}
            <Line data={chartData} options={chartOptions} />
          </>
        ) : (
          <div>No data available</div>
        )}
      </div>
    </ChartContainer>
  );
};

export default PriceChart;
