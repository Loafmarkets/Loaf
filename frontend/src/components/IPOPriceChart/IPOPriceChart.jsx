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
  width: 100%;
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 2rem;
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
  color: white;
  
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

const ChartDescription = styled.p`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  margin-top: 1rem;
  line-height: 1.5;
  font-style: italic;
`;

const PastSalesContainer = styled.div`
  margin-top: 2rem;
  border-top: 1px solid var(--color-border);
  padding-top: 1.5rem;
`;

const PastSalesTitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: var(--color-text);
`;

const TimelineContainer = styled.div`
  position: relative;
  padding-left: 2rem;
  &:before {
    content: '';
    position: absolute;
    left: 15px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--color-border);
  }
`;

const TimelineEvent = styled.div`
  position: relative;
  margin-bottom: 2rem;
  display: flex;
  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineBadge = styled.div`
  position: absolute;
  left: -2rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: var(--color-accent);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  line-height: 1.2;
  font-size: 0.85rem;
  transform: translateX(-50%);
  z-index: 2;
`;

const Month = styled.div`
  text-transform: uppercase;
  font-size: 0.6rem;
  line-height: 1;
`;

const Year = styled.div`
  font-size: 0.8rem;
  line-height: 1;
`;

const TimelineContent = styled.div`
  background-color: rgba(62, 151, 255, 0.1);
  border-radius: 8px;
  padding: 1rem 1.5rem;
  flex: 1;
`;

const EventType = styled.div`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  background-color: #4a5568;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const SalePrice = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.25rem;
`;

const TokenPrice = styled.div`
  font-size: 0.9rem;
  color: var(--color-accent);
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const SaleDetails = styled.div`
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  margin-bottom: 0.5rem;
`;

const TokenEquivalent = styled.div`
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  margin-top: 0.5rem;
`;



const ViewMoreButton = styled.button`
  display: block;
  width: 100%;
  max-width: 300px;
  margin: 1.5rem auto 0;
  padding: 0.75rem 1rem;
  background-color: transparent;
  color: var(--color-accent);
  border: 1px solid var(--color-accent);
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(62, 151, 255, 0.1);
  }
`;

// Current IPO data
const currentTokenPrice = 250; // $250 per token
const currentPropertyValue = 12500000; // $12.5M property value (50,000 tokens * $250)

// Past sales data for the property
const pastSalesData = [
  { 
    year: 2021, 
    month: 2, // March (0-indexed)
    day: 15,
    price: 25000000, // $25M in March 2021
    get tokenPrice() { return Math.round((this.price / currentPropertyValue) * currentTokenPrice); },
    get date() { return new Date(this.year, this.month, this.day); },
    get formattedDate() { return new Date(this.year, this.month, this.day).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }); }
  },  
  { 
    year: 2010, 
    month: 6, // July (0-indexed)
    day: 22,
    price: 15000000, // $15M in July 2010
    get tokenPrice() { return Math.round((this.price / currentPropertyValue) * currentTokenPrice); },
    get date() { return new Date(this.year, this.month, this.day); },
    get formattedDate() { return new Date(this.year, this.month, this.day).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }); }
  }, 
  { 
    year: 2000, 
    month: 4, // May (0-indexed)
    day: 8,
    price: 8000000, // $8M in May 2000
    get tokenPrice() { return Math.round((this.price / currentPropertyValue) * currentTokenPrice); },
    get date() { return new Date(this.year, this.month, this.day); },
    get formattedDate() { return new Date(this.year, this.month, this.day).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }); }
  }
];

const IPOPriceChart = ({ propertyId }) => {
  const [timeframe, setTimeframe] = useState('1Y');
  const [chartData, setChartData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Filter past sales based on selected timeframe
  const getVisibleSales = () => {
    const currentYear = 2025; // Current year (IPO launch)
    let startYear;
    
    switch(timeframe) {
      case '1Y': startYear = currentYear - 1; break;
      case '3Y': startYear = currentYear - 3; break;
      case '5Y': startYear = currentYear - 5; break;
      case '10Y': startYear = currentYear - 10; break;
      case '20Y': startYear = currentYear - 20; break;
      default: startYear = currentYear - 1;
    }
    
    return pastSalesData.filter(sale => sale.year >= startYear);
  };
  
  const visibleSales = getVisibleSales();
  
  // Calculate percentage change based on timeframe
  const calculatePercentageChange = (timeframe) => {
    // Calculate exact percentage growth based on timeframe
    switch(timeframe) {
      case '1Y':
        return { isPositive: true, percentage: '10.00' }; // 10% annual growth
      case '3Y':
        return { isPositive: true, percentage: '33.10' }; // (1.10^3 - 1) * 100
      case '5Y':
        return { isPositive: true, percentage: '61.05' }; // (1.10^5 - 1) * 100
      case '10Y':
        return { isPositive: true, percentage: '159.37' }; // (1.10^10 - 1) * 100
      case '20Y':
        return { isPositive: true, percentage: '572.75' }; // (1.10^20 - 1) * 100
      default:
        return { isPositive: true, percentage: '10.00' };
    }
  };
  
  // Mock price data for IPO
  const priceData = {
    value: 125000,
    formatted: '125,000.00',
    change: calculatePercentageChange(timeframe)
  };
  
  // Generate chart data when timeframe changes
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Generate mock data based on timeframe
      const data = generateMockData(timeframe);
      setChartData(data);
      setIsLoading(false);
    }, 300);
  }, [timeframe, propertyId]);
  
  // Generate mock line chart data
  const generateMockData = (timeframe) => {
    // Sort past sales data by year
    const sortedSales = [...pastSalesData].sort((a, b) => a.year - b.year);
    
    // Create a map of historical sales by exact date
    const salesByDate = {};
    const salesByYear = {};
    pastSalesData.forEach(sale => {
      // Calculate the token price based on the ratio to current valuation
      const tokenPrice = Math.round((sale.price / currentPropertyValue) * currentTokenPrice);
      
      // Store by exact date for precise matching
      const dateKey = `${sale.year}-${sale.month+1}-${sale.day}`; // Format: YYYY-MM-DD
      salesByDate[dateKey] = {
        price: tokenPrice,
        propertyPrice: sale.price,
        year: sale.year,
        month: sale.month,
        day: sale.day,
        formattedDate: sale.formattedDate
      };
      
      // Also keep the year mapping for fallback
      salesByYear[sale.year] = {
        price: tokenPrice,
        propertyPrice: sale.price,
        formattedDate: sale.formattedDate
      };
    });
    
    let labels = [];
    let priceData = [];
    // End price for the IPO property (token price)
    let endPrice = currentTokenPrice; // $125,000 per token
    // Start with a lower base price for historical modeling
    let basePrice = sortedSales[0] ? Math.round((sortedSales[0].price / currentPropertyValue) * currentTokenPrice) * 0.7 : 30000;
    // Last year's price (slightly higher than current)
    let lastYearPrice = 135000;
    let volatility;
    let tooltipLabels = [];
    let dataPoints;
    
    // Track sales points to mark on chart
    let salesPoints = [];
    
    // Set end date to June 28, 2025 (IPO launch date)
    const endDate = new Date(2025, 5, 28); // Month is 0-indexed, so 5 = June
    
    switch(timeframe) {
      case '1D':
        // Generate hourly data points for the last 24 hours
        dataPoints = 24;
        volatility = 0.002; // Lower volatility for 24h
        
        for (let i = 0; i < dataPoints; i++) {
          const hour = i;
          const date = new Date(endDate);
          date.setHours(hour, 0, 0);
          
          labels.push(date.toISOString());
          tooltipLabels.push(`${hour.toString().padStart(2, '0')}:00`);
          
          // Generate a price with some randomness but an overall trend
          const trendFactor = (i / dataPoints) * 0.05; // Small upward trend
          const randomFactor = (Math.random() - 0.5) * volatility;
          const price = basePrice * (1 + trendFactor + randomFactor);
          
          priceData.push(price);
        }
        break;
        
      case '1W':
        // Generate daily data points for the last week
        dataPoints = 7;
        volatility = 0.005; // Slightly higher volatility for week
        
        for (let i = 0; i < dataPoints; i++) {
          const date = new Date(endDate);
          date.setDate(date.getDate() - (dataPoints - 1) + i);
          
          const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
          labels.push(date.toISOString());
          tooltipLabels.push(dayName);
          
          // Generate a price with some randomness but an overall trend
          const trendFactor = (i / dataPoints) * 0.08; // Upward trend
          const randomFactor = (Math.random() - 0.5) * volatility;
          const price = basePrice * (1 + trendFactor + randomFactor);
          
          priceData.push(price);
        }
        break;
        
      case '1M':
        // Generate data points for the last month
        dataPoints = 30;
        volatility = 0.01; // Higher volatility for month
        
        for (let i = 0; i < dataPoints; i++) {
          const date = new Date(endDate);
          date.setDate(date.getDate() - (dataPoints - 1) + i);
          
          const dayMonth = date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
          labels.push(date.toISOString());
          tooltipLabels.push(dayMonth);
          
          // Generate a price with some randomness but an overall trend
          const trendFactor = (i / dataPoints) * 0.15; // Stronger upward trend
          const randomFactor = (Math.random() - 0.5) * volatility;
          const price = basePrice * (1 + trendFactor + randomFactor);
          
          priceData.push(price);
        }
        break;
        
      case '3M':
        // Generate data points for the last 3 months
        dataPoints = 90;
        volatility = 0.015; // Higher volatility for 3 months
        
        for (let i = 0; i < dataPoints; i++) {
          const date = new Date(endDate);
          date.setDate(date.getDate() - (dataPoints - 1) + i);
          
          const dayMonth = date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
          labels.push(date.toISOString());
          tooltipLabels.push(dayMonth);
          
          // Generate a price with some randomness but an overall trend
          const trendFactor = (i / dataPoints) * 0.25; // Strong upward trend
          const randomFactor = (Math.random() - 0.5) * volatility;
          const price = basePrice * (1 + trendFactor + randomFactor);
          
          priceData.push(price);
        }
        break;
        
      case '1Y':
        // Generate monthly data points for the last year
        dataPoints = 12;
        volatility = 0.02; // Higher volatility for year
        
        for (let i = 0; i < dataPoints; i++) {
          const date = new Date(endDate.getFullYear(), endDate.getMonth() - (dataPoints - 1) + i, 1);
          
          const monthYear = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
          labels.push(date.toISOString());
          tooltipLabels.push(monthYear);
          
          // Create a rising trend that peaks around 10 months (last year) then slightly declines
          let price;
          if (i < 10) {
            // Rising trend from base price to peak
            const progressTowardsPeak = i / 9; // 0 to 1 over first 10 months
            const trendFactor = progressTowardsPeak * ((lastYearPrice - basePrice) / basePrice);
            const randomFactor = (Math.random() - 0.5) * volatility;
            price = basePrice * (1 + trendFactor + randomFactor);
          } else {
            // Slight decline from peak to current price
            const progressFromPeak = (i - 9) / 2; // 0 to 1 over last 2 months
            const trendFactor = (lastYearPrice - endPrice) / lastYearPrice * progressFromPeak;
            const randomFactor = (Math.random() - 0.5) * volatility * 0.5; // Less volatility in decline
            price = lastYearPrice * (1 - trendFactor + randomFactor);
          }
          
          priceData.push(price);
        }
        break;
        
      case '3Y':
        // Generate data points for the last 3 years (quarterly)
        dataPoints = 12; // 4 quarters x 3 years
        volatility = 0.03;
        
        // Calculate starting price based on 10% annual growth backward from current price
        // For 3 years: current price / (1.10)^3
        const threeYearStartPrice = endPrice / Math.pow(1.10, 3);
        
        for (let i = 0; i < dataPoints; i++) {
          // Calculate quarter and year
          const quarterIdx = i % 4;
          const yearOffset = Math.floor(i / 4);
          const date = new Date(endDate.getFullYear() - 3 + yearOffset, quarterIdx * 3, 1);
          
          const quarterYear = `Q${quarterIdx + 1} ${date.getFullYear()}`;
          labels.push(date.toISOString());
          tooltipLabels.push(quarterYear);
          
          // Calculate price with compound growth and some randomness
          const yearProgress = yearOffset + (quarterIdx / 4);
          const growthFactor = Math.pow(1.10, yearProgress); // 10% annual growth
          const randomFactor = (Math.random() - 0.5) * volatility;
          const price = threeYearStartPrice * growthFactor * (1 + randomFactor);
          
          priceData.push(price);
        }
        break;
        
      case '5Y':
        // Generate data points for the last 5 years (semi-annual)
        dataPoints = 10; // 2 data points per year x 5 years
        volatility = 0.04;
        
        // Calculate starting price based on 10% annual growth backward from current price
        // For 5 years: current price / (1.10)^5
        const fiveYearStartPrice = endPrice / Math.pow(1.10, 5);
        
        for (let i = 0; i < dataPoints; i++) {
          // Calculate half-year and year
          const halfYearIdx = i % 2;
          const yearOffset = Math.floor(i / 2);
          const date = new Date(endDate.getFullYear() - 5 + yearOffset, halfYearIdx * 6, 1);
          
          const halfYear = halfYearIdx === 0 ? 'H1' : 'H2';
          const halfYearYear = `${halfYear} ${date.getFullYear()}`;
          labels.push(date.toISOString());
          tooltipLabels.push(halfYearYear);
          
          // Calculate price with compound growth and some randomness
          const yearProgress = yearOffset + (halfYearIdx / 2);
          const growthFactor = Math.pow(1.10, yearProgress); // 10% annual growth
          const randomFactor = (Math.random() - 0.5) * volatility;
          const price = fiveYearStartPrice * growthFactor * (1 + randomFactor);
          
          priceData.push(price);
        }
        break;
        
      case '10Y':
        // Generate data points for the last 10 years (annual)
        dataPoints = 10; // 1 data point per year x 10 years
        volatility = 0.05;
        
        // Calculate starting price based on 10% annual growth backward from current price
        // For 10 years: current price / (1.10)^10
        const tenYearStartPrice = endPrice / Math.pow(1.10, 10);
        
        for (let i = 0; i < dataPoints; i++) {
          const year = endDate.getFullYear() - 10 + i;
          
          // Check if we have a historical sale for this year
          const sale = pastSalesData.find(s => s.year === year);
          
          // If we have a sale, use the exact month and day
          const month = sale ? sale.month : 0;
          const day = sale ? sale.day : 1;
          
          const date = new Date(year, month, day);
          const yearLabel = date.getFullYear().toString();
          
          labels.push(date.toISOString());
          tooltipLabels.push(yearLabel);
          
          // Calculate price with compound growth and some randomness
          let price;
          if (sale) {
            // Use the exact historical sale price
            price = Math.round((sale.price / currentPropertyValue) * currentTokenPrice);
            
            // Add this to our sale points
            salesPoints.push({
              index: i,
              year: year,
              month: month,
              day: day,
              price: price,
              propertyPrice: sale.price,
              formattedDate: sale.formattedDate
            });
          } else {
            // Calculate a price based on growth model
            const growthFactor = Math.pow(1.10, i); // 10% annual growth
            const randomFactor = (Math.random() - 0.5) * volatility;
            price = tenYearStartPrice * growthFactor * (1 + randomFactor);
          }
          
          priceData.push(price);
        }
        break;
        
      case '20Y':
        // Generate data points for the last 20 years
        dataPoints = 24; // More data points for smoother curve
        volatility = 0.08;
        
        // Get the years we need to include in our chart
        const startYear = endDate.getFullYear() - 20;
        const endYear = endDate.getFullYear();
        
        // Create a map of historical sales by year for quick lookup
        const salesByYear = {};
        pastSalesData.forEach(sale => {
          if (sale.year >= startYear && sale.year <= endYear) {
            // Calculate the token price based on the ratio to current valuation
            const tokenPrice = Math.round((sale.price / currentPropertyValue) * currentTokenPrice);
            salesByYear[sale.year] = tokenPrice;
          }
        });
        
        // Generate dates and initial prices
        const dates = [];
        const initialPrices = [];
        
        // First, add all the years we need to include
        for (let year = startYear; year <= endYear; year++) {
          // Check if we have a historical sale for this year
          const sale = pastSalesData.find(s => s.year === year);
          
          // If we have a sale, use the exact month and day
          const month = sale ? sale.month : 0;
          const day = sale ? sale.day : 1;
          
          const date = new Date(year, month, day);
          dates.push(date);
          
          // If we have a sale for this year, use that price
          if (sale) {
            const tokenPrice = Math.round((sale.price / currentPropertyValue) * currentTokenPrice);
            initialPrices.push(tokenPrice);
          } else {
            // Otherwise, push null for now
            initialPrices.push(null);
          }
        }
        
        // Fill in the gaps with interpolated values
        let lastKnownPrice = basePrice;
        let lastKnownIndex = -1;
        
        // First pass: forward fill
        for (let i = 0; i < initialPrices.length; i++) {
          if (initialPrices[i] !== null) {
            // Fill in any gaps between last known price and this one
            if (lastKnownIndex !== -1 && i - lastKnownIndex > 1) {
              const priceDiff = initialPrices[i] - lastKnownPrice;
              const steps = i - lastKnownIndex;
              
              for (let j = 1; j < steps; j++) {
                // Linear interpolation with some randomness
                const progress = j / steps;
                const interpolatedPrice = lastKnownPrice + (priceDiff * progress);
                const randomFactor = (Math.random() - 0.5) * volatility * interpolatedPrice;
                initialPrices[lastKnownIndex + j] = Math.round(interpolatedPrice + randomFactor);
              }
            }
            
            lastKnownPrice = initialPrices[i];
            lastKnownIndex = i;
          }
        }
        
        // Handle any remaining nulls after the last known price
        if (lastKnownIndex !== -1 && lastKnownIndex < initialPrices.length - 1) {
          const remainingSteps = initialPrices.length - 1 - lastKnownIndex;
          const targetPrice = endPrice;
          const priceDiff = targetPrice - lastKnownPrice;
          
          for (let j = 1; j <= remainingSteps; j++) {
            const progress = j / (remainingSteps + 1); // +1 to leave room for the final price
            const interpolatedPrice = lastKnownPrice + (priceDiff * progress);
            const randomFactor = (Math.random() - 0.5) * volatility * interpolatedPrice;
            initialPrices[lastKnownIndex + j] = Math.round(interpolatedPrice + randomFactor);
          }
        }
        
        // Handle any remaining nulls at the beginning
        if (initialPrices[0] === null) {
          let firstKnownIndex = initialPrices.findIndex(p => p !== null);
          if (firstKnownIndex === -1) {
            // If no known prices, use a simple growth model
            for (let i = 0; i < initialPrices.length; i++) {
              const growthFactor = Math.pow(1.12, i);
              const randomFactor = (Math.random() - 0.5) * volatility;
              initialPrices[i] = Math.round(basePrice * growthFactor * (1 + randomFactor));
            }
          } else {
            const firstKnownPrice = initialPrices[firstKnownIndex];
            const steps = firstKnownIndex;
            
            for (let j = 0; j < steps; j++) {
              const progress = j / steps;
              const interpolatedPrice = basePrice + (firstKnownPrice - basePrice) * progress;
              const randomFactor = (Math.random() - 0.5) * volatility * interpolatedPrice;
              initialPrices[j] = Math.round(interpolatedPrice + randomFactor);
            }
          }
        }
        
        // Ensure the last price is exactly the current token price
        initialPrices[initialPrices.length - 1] = endPrice;
        
        // Now create the actual data points for the chart
        for (let i = 0; i < dates.length; i++) {
          const date = dates[i];
          const year = date.getFullYear().toString();
          labels.push(date.toISOString());
          tooltipLabels.push(year);
          priceData.push(initialPrices[i]);
          
          // Check if this date corresponds to a historical sale
          const sale = pastSalesData.find(s => 
            s.year === date.getFullYear() && 
            s.month === date.getMonth() && 
            s.day === date.getDate()
          );
          
          if (sale) {
            // This is a historical sale point - mark it
            const tokenPrice = Math.round((sale.price / currentPropertyValue) * currentTokenPrice);
            
            salesPoints.push({
              index: i,
              year: sale.year,
              month: sale.month,
              day: sale.day,
              price: tokenPrice,
              propertyPrice: sale.price,
              formattedDate: sale.formattedDate
            });
            
            // Ensure price data matches the historical sale
            priceData[i] = tokenPrice;
          }
        }
        break;
        
      default:
        // Default to 1D
        return generateMockData('1D');
    }
    
    // Ensure the last price matches the token price
    priceData[priceData.length - 1] = endPrice;
    
    // Find sales points that match our labels
    const salePoints = [];
    
    // Process labels to find matching sales dates
    labels.forEach((label, index) => {
      try {
        // Try to extract date from ISO string
        if (label.includes('-')) {
          const labelDate = new Date(label);
          const year = labelDate.getFullYear();
          const month = labelDate.getMonth();
          const day = labelDate.getDate();
          
          // Check for exact date match first (most precise)
          const dateKey = `${year}-${month+1}-${day}`;
          if (salesByDate[dateKey]) {
            salePoints.push({
              index: index,
              year: year,
              month: month,
              day: day,
              price: salesByDate[dateKey].price,
              propertyPrice: salesByDate[dateKey].propertyPrice,
              formattedDate: salesByDate[dateKey].formattedDate
            });
            
            // Ensure the price data at this index matches the historical sale price
            priceData[index] = salesByDate[dateKey].price;
          }
          // Fall back to year match if we don't have the exact date
          else if (salesByYear[year]) {
            // For year matches, check if this is the closest date we have to the actual sale date
            const saleMonth = pastSalesData.find(sale => sale.year === year)?.month || 0;
            const saleDay = pastSalesData.find(sale => sale.year === year)?.day || 1;
            
            // Calculate difference in days to find closest date
            const saleDateObj = new Date(year, saleMonth, saleDay);
            const labelDateObj = new Date(year, month, day);
            const diffDays = Math.abs((saleDateObj - labelDateObj) / (1000 * 60 * 60 * 24));
            
            // Only mark if this is the closest date we've found (within 15 days)
            if (diffDays <= 15) {
              const existingSalePoint = salePoints.find(sp => sp.year === year);
              if (!existingSalePoint) {
                salePoints.push({
                  index: index,
                  year: year,
                  month: saleMonth,
                  day: saleDay,
                  price: salesByYear[year].price,
                  propertyPrice: salesByYear[year].propertyPrice,
                  formattedDate: salesByYear[year].formattedDate
                });
                
                // Ensure the price data at this index matches the historical sale price
                priceData[index] = salesByYear[year].price;
              }
            }
          }
        }
        // Try to extract year from tooltip label
        else if (tooltipLabels[index]) {
          const match = tooltipLabels[index].match(/(\d{4})/);
          if (match) {
            const year = parseInt(match[0]);
            if (salesByYear[year]) {
              // For tooltip labels, we don't have exact dates, so just use the year
              salePoints.push({
                index: index,
                year: year,
                price: salesByYear[year].price,
                propertyPrice: salesByYear[year].propertyPrice,
                formattedDate: salesByYear[year].formattedDate
              });
              
              // Ensure the price data at this index matches the historical sale price
              priceData[index] = salesByYear[year].price;
            }
          }
        }
      } catch (e) {
        // Skip this label if we can't parse it
      }
    });
    
    // Create data for historical sales points only
    const salesPointsData = Array(priceData.length).fill(null);
    salePoints.forEach(point => {
      salesPointsData[point.index] = priceData[point.index];
    });
    
    // Create gradient for the area under the line
    const gradientData = {
      labels,
      datasets: [
        {
          label: 'Token Price',
          data: priceData,
          borderColor: '#3E97FF',
          backgroundColor: (context) => {
            const chart = context.chart;
            const {ctx, chartArea} = chart;
            
            if (!chartArea) {
              // This case happens on initial chart load
              return 'rgba(62, 151, 255, 0.2)';
            }
            
            // Create gradient
            const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
            gradient.addColorStop(0, 'rgba(62, 151, 255, 0)');
            gradient.addColorStop(1, 'rgba(62, 151, 255, 0.2)');
            return gradient;
          },
          borderWidth: 2,
          pointRadius: 0, // Hide regular points
          tension: 0.4,
          fill: 'start',
        },
        {
          // Separate dataset just for historical sale points
          label: 'Historical Sales',
          data: salesPointsData,
          borderColor: 'transparent',
          backgroundColor: 'transparent',
          pointRadius: 12, // Larger points for historical sales
          pointBackgroundColor: '#FFD700', // Gold color
          pointBorderColor: '#B8860B', // Darker gold border
          pointBorderWidth: 2,
          pointStyle: 'circle',
          pointHoverRadius: 14,
          pointHoverBackgroundColor: '#FFD700',
          pointHoverBorderColor: '#B8860B',
          pointHoverBorderWidth: 3,
          tension: 0,
          fill: false,
          // Add a shadow effect to make points stand out
          pointShadowBlur: 10,
          pointShadowColor: 'rgba(255, 215, 0, 0.5)',
        }
      ],
      tooltipLabels,
      salesPoints: salePoints
    };
    
    return gradientData;
  };
  
  // Chart configuration
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
        backgroundColor: 'rgba(20, 20, 30, 0.9)',
        titleColor: '#FFD700',
        titleFont: {
          weight: 'bold',
          size: 14
        },
        bodyColor: '#FFFFFF',
        bodyFont: {
          size: 13
        },
        borderColor: '#FFD700',
        borderWidth: 1,
        cornerRadius: 6,
        padding: 12,
        displayColors: false,
        boxPadding: 6,
        callbacks: {
          title: function(context) {
            if (!chartData || !chartData.tooltipLabels) return '';
            const index = context[0].dataIndex;
            
            // Check if this is a historical sale point
            if (context[0].datasetIndex === 1 && context[0].parsed.y !== null) {
              const salesPoint = chartData.salesPoints && chartData.salesPoints.find(p => p.index === index);
              if (salesPoint) {
                const dateDisplay = salesPoint.formattedDate || salesPoint.year;
                return `${dateDisplay} - Property Sale`;
              }
            }
            
            return chartData.tooltipLabels[index];
          },
          label: function(context) {
            // Skip null values in the historical sales dataset
            if (context.datasetIndex === 1 && context.parsed.y === null) return null;
            
            const value = context.parsed.y;
            if (!value && value !== 0) return null;
            
            const tokenPrice = value;
            const propertyPrice = tokenPrice * (30000000 / currentTokenPrice); // Calculate property price based on current ratio
            const propertyPriceInMillions = propertyPrice / 1000000;
            
            // If this is from the historical sales dataset, format it specially
            if (context.datasetIndex === 1) {
              const index = context.dataIndex;
              const salesPoint = chartData.salesPoints && chartData.salesPoints.find(p => p.index === index);
              if (salesPoint) {
                return [
                  `Property Sale: $${(salesPoint.propertyPrice/1000000).toFixed(1)}M`,
                  `Token Price: $${tokenPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                ];
              }
            }
            
            return [
              `Token Price: $${tokenPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
              `Property Value: $${propertyPriceInMillions.toFixed(1)}M`
            ];
          },
          // We don't need afterLabel anymore since we're handling everything in label
          afterLabel: function(context) {
            return '';
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        border: {
          display: true,
          color: 'rgba(255, 255, 255, 0.2)'
        },
        ticks: {
          color: function(context) {
            // Check if this point is a historical sale
            const index = context.index;
            const isSalePoint = chartData && chartData.salesPoints && chartData.salesPoints.some(p => p.index === index);
            return isSalePoint ? '#FFD700' : 'rgba(255, 255, 255, 0.8)';
          },
          font: function(context) {
            // Check if this point is a historical sale
            const index = context.index;
            const isSalePoint = chartData && chartData.salesPoints && chartData.salesPoints.some(p => p.index === index);
            return {
              size: isSalePoint ? 14 : 12,
              weight: isSalePoint ? '700' : '600'
            };
          },
          padding: 10,
          maxRotation: 0,
          autoSkip: false,
          callback: function(value, index) {
            if (!chartData || !chartData.tooltipLabels) return '';
            
            // Check if this point is a historical sale
            const isSalePoint = chartData.salesPoints && chartData.salesPoints.some(p => p.index === index);
            
            const totalPoints = chartData.tooltipLabels.length;
            let shouldShowLabel = false;
            let label = '';
            
            // Always show labels for historical sale points
            if (isSalePoint) {
              shouldShowLabel = true;
              // For sale points, use the formatted date if available
              const salePoint = chartData.salesPoints.find(p => p.index === index);
              if (salePoint && salePoint.formattedDate) {
                label = salePoint.formattedDate;
              } else {
                label = chartData.tooltipLabels[index];
              }
            } else {
              // For non-sale points, use the standard timeframe logic
              const timeframeDisplay = {
                '1D': () => {
                  // For 1D, show hours: 00:00, 04:00, 08:00, 12:00, 16:00, 20:00
                  if (index % 4 === 0 || index === totalPoints - 1) {
                    shouldShowLabel = true;
                    return chartData.tooltipLabels[index].split(' ')[0]; // Just show time
                  }
                  return '';
                },
                '1W': () => {
                  // For 1W, show days: Sun, Mon, Tue, Wed, Thu, Fri, Sat
                  if (index % 1 === 0 || index === totalPoints - 1) {
                    shouldShowLabel = true;
                    return chartData.tooltipLabels[index].split(' ')[0]; // Just show day
                  }
                  return '';
                },
                '1M': () => {
                  // For 1M, show every 5 days
                  if (index % 5 === 0 || index === totalPoints - 1) {
                    shouldShowLabel = true;
                    return chartData.tooltipLabels[index];
                  }
                  return '';
                },
                '3M': () => {
                  // For 3M, show every 15 days
                  if (index % 15 === 0 || index === totalPoints - 1) {
                    shouldShowLabel = true;
                    return chartData.tooltipLabels[index];
                  }
                  return '';
                },
                '1Y': () => {
                  // For 1Y, show all months
                  shouldShowLabel = true;
                  return chartData.tooltipLabels[index];
                },
                '3Y': () => {
                  // For 3Y, show all quarters
                  shouldShowLabel = true;
                  return chartData.tooltipLabels[index];
                },
                '5Y': () => {
                  // For 5Y, show all half-years
                  shouldShowLabel = true;
                  return chartData.tooltipLabels[index];
                },
                '10Y': () => {
                  // For 10Y, show all years
                  shouldShowLabel = true;
                  return chartData.tooltipLabels[index];
                },
                '20Y': () => {
                  // For 20Y, show every 2 years or years with sales
                  if (index % 2 === 0 || index === totalPoints - 1) {
                    shouldShowLabel = true;
                    return chartData.tooltipLabels[index];
                  }
                  return '';
                }
              };
              
              // Use the appropriate display function for the current timeframe
              if (timeframeDisplay[timeframe]) {
                label = timeframeDisplay[timeframe]();
              }
            }
            
            // Apply special styling to sale point labels via a prefix that will be styled in the afterFit callback
            return shouldShowLabel ? label : '';
          }
        }
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
          drawBorder: false,
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.6)',
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
        <ChartTitle>Modelled Historical Price</ChartTitle>
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
        {['1Y', '3Y', '5Y', '10Y', '20Y'].map(tf => (
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
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <div>Loading price chart...</div>
          </div>
        ) : chartData ? (
          <Line data={chartData} options={chartOptions} />
        ) : (
          <div>No data available</div>
        )}
      </div>
      
      <ChartDescription>
        This chart shows the modelled historical price of the property leading up to the IPO launch on June 28, 2025.
        The model incorporates past sales data and market trends to estimate how the property value reached its current token price of $250.
      </ChartDescription>
      
      <PastSalesContainer>
        <PastSalesTitle>Property history</PastSalesTitle>
        <div>
          <div style={{ display: 'flex', marginBottom: '1.5rem' }}>
            <button style={{ 
              flex: 1, 
              padding: '0.75rem', 
              background: 'transparent', 
              border: 'none', 
              borderBottom: '2px solid var(--color-accent)', 
              color: 'var(--color-text)', 
              fontWeight: 600,
              cursor: 'pointer'
            }}>
              ALL
            </button>
            <button style={{ 
              flex: 1, 
              padding: '0.75rem', 
              background: 'transparent', 
              border: 'none', 
              borderBottom: '1px solid var(--color-border)', 
              color: 'var(--color-text-secondary)', 
              fontWeight: 600,
              cursor: 'pointer'
            }}>
              SOLD
            </button>
            <button style={{ 
              flex: 1, 
              padding: '0.75rem', 
              background: 'transparent', 
              border: 'none', 
              borderBottom: '1px solid var(--color-border)', 
              color: 'var(--color-text-secondary)', 
              fontWeight: 600,
              cursor: 'pointer'
            }}>
              RENTED
            </button>
          </div>
          
          <TimelineContainer>
            {pastSalesData.map((sale, index) => {
              // Assign specific months to each sale for consistency
              const months = ['MAR', 'JUN', 'MAY'];
              const month = months[index % months.length];
              
              return (
                <TimelineEvent key={sale.year}>
                  <TimelineBadge>
                    <Month>{month}</Month>
                    <Year>{sale.year}</Year>
                  </TimelineBadge>
                  <TimelineContent>
                    <EventType>SOLD</EventType>
                    <SalePrice>${(sale.price / 1000000).toFixed(1)}M</SalePrice>
                    <TokenPrice>Implied token price: ${sale.tokenPrice.toLocaleString()}</TokenPrice>
                    <SaleDetails>
                      Listed by Sydney Sotheby's International Realty{index % 2 === 0 ? ' - Double Bay' : ''}
                    </SaleDetails>
                    <TokenEquivalent>{index % 2 === 0 ? '16' : '18'} days listed</TokenEquivalent>
                  </TimelineContent>
                </TimelineEvent>
              );
            })}
          </TimelineContainer>
          
          <ViewMoreButton>
            View more results
          </ViewMoreButton>
        </div>
      </PastSalesContainer>
    </ChartContainer>
  );
};

export default IPOPriceChart;
