import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
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
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 2rem;
  height: 100%;
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

const ValueInfo = styled.div`
  display: flex;
  align-items: center;
`;

const CurrentValue = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-right: 1rem;
`;

const ValueChange = styled.div`
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

const PortfolioValueChart = ({ userId }) => {
  const [timeframe, setTimeframe] = useState('1M');
  const [chartData, setChartData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [portfolioValue, setPortfolioValue] = useState('28,750.42');
  const [valueChange, setValueChange] = useState({ percentage: '3.2', isPositive: true });
  
  // Mock data for different timeframes
  const timeframeData = {
    '1D': { value: '28,750.42', change: '0.5', isPositive: true },
    '1W': { value: '28,750.42', change: '1.8', isPositive: true },
    '1M': { value: '28,750.42', change: '3.2', isPositive: true },
    '3M': { value: '28,750.42', change: '5.7', isPositive: true },
    '1Y': { value: '28,750.42', change: '12.4', isPositive: true }
  };
  
  // Update value and change when timeframe changes
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate loading delay
    const timer = setTimeout(() => {
      const data = timeframeData[timeframe];
      setPortfolioValue(data.value);
      setValueChange({
        percentage: data.change,
        isPositive: data.isPositive
      });
      
      // Generate chart data based on timeframe
      const chartData = generateMockData(timeframe);
      setChartData(chartData);
      
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [timeframe]);
  
  // Generate mock chart data
  const generateMockData = (timeframe) => {
    let labels = [];
    let data = [];
    let baseValue = 28750.42; // Base portfolio value
    let volatility;
    let tooltipLabels = [];
    
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    switch(timeframe) {
      case '1D':
        // Generate hourly labels for the last 24 hours
        labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);
        tooltipLabels = Array.from({ length: 24 }, (_, i) => {
          const date = new Date(today);
          date.setHours(i, 0, 0);
          return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        });
        volatility = baseValue * 0.003; // 0.3% of base value
        data = generatePriceData(baseValue, 24, volatility, 0.5); // 0.5% overall trend
        break;
      case '1W':
        // Generate daily labels for the last 7 days
        for (let i = 6; i >= 0; i--) {
          const date = new Date(today);
          date.setDate(date.getDate() - i);
          labels.push(date.toLocaleDateString([], { weekday: 'short' }));
          tooltipLabels.push(date.toLocaleDateString([], { month: 'short', day: 'numeric' }));
        }
        volatility = baseValue * 0.005; // 0.5% of base value
        data = generatePriceData(baseValue, 7, volatility, 1.8); // 1.8% overall trend
        break;
      case '1M':
        // Generate weekly labels for the last month (4 weeks)
        for (let i = 4; i >= 0; i--) {
          const date = new Date(today);
          date.setDate(date.getDate() - (i * 7));
          labels.push(`Week ${4-i}`);
          tooltipLabels.push(date.toLocaleDateString([], { month: 'short', day: 'numeric' }));
        }
        volatility = baseValue * 0.008; // 0.8% of base value
        data = generatePriceData(baseValue, 5, volatility, 3.2); // 3.2% overall trend
        break;
      case '3M':
        // Generate monthly labels for the last 3 months
        for (let i = 3; i >= 0; i--) {
          const date = new Date(today);
          date.setMonth(date.getMonth() - i);
          labels.push(date.toLocaleDateString([], { month: 'short' }));
          tooltipLabels.push(date.toLocaleDateString([], { month: 'short', year: 'numeric' }));
        }
        volatility = baseValue * 0.01; // 1% of base value
        data = generatePriceData(baseValue, 4, volatility, 5.7); // 5.7% overall trend
        break;
      case '1Y':
        // Generate quarterly labels for the last year
        for (let i = 4; i >= 0; i--) {
          const date = new Date(today);
          date.setMonth(date.getMonth() - (i * 3));
          labels.push(`Q${4-i}`);
          tooltipLabels.push(date.toLocaleDateString([], { month: 'short', year: 'numeric' }));
        }
        volatility = baseValue * 0.02; // 2% of base value
        data = generatePriceData(baseValue, 5, volatility, 12.4); // 12.4% overall trend
        break;
      default:
        labels = ['No Data'];
        data = [baseValue];
    }
    
    return {
      labels,
      tooltipLabels,
      datasets: [
        {
          label: 'Portfolio Value',
          data: data,
          borderColor: valueChange.isPositive ? 'var(--color-positive)' : 'var(--color-negative)',
          backgroundColor: function(context) {
            const chart = context.chart;
            const {ctx, chartArea} = chart;
            if (!chartArea) {
              return null;
            }
            const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
            const color = valueChange.isPositive ? 'rgba(0, 192, 118, 0.3)' : 'rgba(255, 87, 87, 0.3)';
            gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
            gradient.addColorStop(1, color);
            return gradient;
          },
          borderWidth: 3,
          pointRadius: 0,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: valueChange.isPositive ? 'var(--color-positive)' : 'var(--color-negative)',
          tension: 0.4,
          fill: true,
        }
      ]
    };
  };
  
  // Helper function to generate price data with a trend
  const generatePriceData = (baseValue, points, volatility, percentChange) => {
    const data = [];
    const trend = (percentChange / 100) * baseValue;
    const startValue = baseValue - trend;
    
    for (let i = 0; i < points; i++) {
      // Calculate the expected value based on linear trend
      const expectedValue = startValue + (trend * i / (points - 1));
      
      // Add random volatility
      const randomFactor = (Math.random() - 0.5) * 2 * volatility;
      const value = expectedValue + randomFactor;
      
      data.push(Math.max(value, 0)); // Ensure value is not negative
    }
    
    return data;
  };
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
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
          size: 14,
          weight: 'bold'
        },
        bodyFont: {
          size: 14
        },
        callbacks: {
          title: function(context) {
            // Display the custom time/date from tooltipLabels
            if (context[0] && chartData && chartData.tooltipLabels) {
              const index = context[0].dataIndex;
              return chartData.tooltipLabels[index] || '';
            }
            return '';
          },
          label: function(context) {
            // Format the value with commas and 2 decimal places
            return `Value: $${context.parsed.y.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
          }
        }
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.8)',
          maxRotation: 0,
          autoSkip: true,
          maxTicksLimit: 8,
          font: {
            size: 12,
            weight: '500'
          }
        }
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.8)',
          font: {
            size: 12,
            weight: '500'
          },
          callback: function(value) {
            return '$' + value.toLocaleString();
          }
        }
      }
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    },
    animation: {
      duration: 1000
    }
  };
  
  return (
    <ChartContainer>
      <ChartHeader>
        <ChartTitle>Portfolio Value Over Time</ChartTitle>
        <ValueInfo>
          <CurrentValue>${portfolioValue}</CurrentValue>
          <ValueChange isPositive={valueChange.isPositive}>
            {valueChange.isPositive ? '+' : ''}{valueChange.percentage}%
          </ValueChange>
        </ValueInfo>
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
      
      <div style={{ height: '300px' }}>
        {isLoading ? (
          <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Loading chart data...
          </div>
        ) : chartData ? (
          <Line data={chartData} options={chartOptions} />
        ) : (
          <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            No data available
          </div>
        )}
      </div>
    </ChartContainer>
  );
};

export default PortfolioValueChart;
