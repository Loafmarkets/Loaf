import React, { useMemo, useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

// Styled components
const ChartContainer = styled.div`
  background-color: #1e2329;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ChartTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: #f8f9fa;
`;

const ChartExplainer = styled.div`
  font-size: 0.75rem;
  color: #848e9c;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

const AxisIndicator = styled.div`
  position: absolute;
  bottom: -30px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  color: #848e9c;
  font-size: 0.7rem;
  padding: 0 40px;
`;

const XAxis = styled.div`
  position: absolute;
  bottom: 0;
  left: 40px;
  right: 0;
  height: 1px;
  background-color: #2b3139;
`;

const PriceAxisLabels = styled.div`
  position: absolute;
  bottom: -15px;
  left: 40px;
  right: 0;
  display: flex;
  justify-content: space-between;
  color: #848e9c;
  font-size: 0.7rem;
`;

const XAxisLabel = styled.div`
  position: absolute;
  transform: translateX(-50%);
  white-space: nowrap;
  left: ${props => props.position}%;
`;

const ChartContent = styled.div`
  position: relative;
  height: 200px;
  margin-bottom: 2rem;
`;

const YAxisLabels = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 0.5rem;
  color: #848e9c;
  font-size: 0.7rem;
  text-align: right;
`;

const BarsContainer = styled.div`
  position: absolute;
  left: 40px;
  right: 0;
  top: 0;
  bottom: 20px;
  align-items: flex-end;
  border-left: 1px solid #2b3139;
  position: relative;
  overflow: hidden;
`;

const BarGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 0;
  transform: translateX(-50%);
`;

const Bar = styled.div`
  width: 70%;
  height: ${props => props.height || '0%'};
  background-color: ${props => props.color || '#f0b90b'};
  border-radius: 2px 2px 0 0;
  transition: height 0.3s ease;
  position: relative;
  
  &:hover {
    opacity: 0.8;
  }
`;

const BarLabel = styled.div`
  position: absolute;
  bottom: -20px;
  font-size: 0.7rem;
  color: #848e9c;
  transform: rotate(-45deg);
  transform-origin: left top;
  white-space: nowrap;
  display: ${props => props.show ? 'block' : 'none'};
`;

const ClearingPriceLine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 25%; /* Fixed position at 25% of chart width */
  width: 2px;
  background-color: #F0B90B;
  z-index: 5;
`;

const ClearingPriceLabel = styled.div`
  position: absolute;
  top: -20px;
  left: 0;
  transform: translateX(-50%);
  background-color: #f0b90b;
  color: #0b0e11;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  white-space: nowrap;
`;

const UserBidMarker = styled.div`
  position: absolute;
  bottom: ${props => props.position || '0%'};
  width: 12px;
  height: 12px;
  background-color: #f8f9fa;
  transform: rotate(45deg);
  z-index: 3;
  border: 2px solid #0b0e11;
`;

const ChartLegend = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
`;

const ColorSwatch = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background-color: ${props => props.color};
  margin-right: 6px;
`;

const DiamondMarker = styled.div`
  width: 10px;
  height: 10px;
  background-color: #f8f9fa;
  transform: rotate(45deg);
  margin-right: 6px;
  border: 1px solid #0b0e11;
`;

const LegendText = styled.span`
  font-size: 0.75rem;
  color: #848e9c;
`;

const DistributionCurve = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
  overflow: visible;
`;

const CurvePath = styled.path`
  fill: none;
  stroke: #f0b90b;
  stroke-width: 3px;
  stroke-linecap: round;
  stroke-linejoin: round;
  opacity: 0.9;
`;

const CurveArea = styled.path`
  fill: url(#curveGradient);
  opacity: 0.4;
`;

const BidDistributionChart = ({ bidDistribution, clearingPrice, userBids }) => {
  const [visiblePriceRange, setVisiblePriceRange] = useState({ min: 0, max: 0 });
  const [animating, setAnimating] = useState(false);
  const prevClearingPriceRef = useRef(clearingPrice);
  
  // Find max count for scaling (default to 1 if no bids)
  const maxCount = bidDistribution.length > 0 ? Math.max(1, ...bidDistribution.map(bucket => bucket.count)) : 1;
  
  // Calculate the visible price range based on clearing price
  useEffect(() => {
    // Calculate new visible price range
    // Clearing price should be at 25% of the chart
    const rangeWidth = clearingPrice * 2; // Total width of visible range
    const minPrice = Math.max(0, clearingPrice - (rangeWidth * 0.25)); // Position clearing price at 25%
    const maxPrice = minPrice + rangeWidth;
    
    // Only animate if clearing price has changed and not the initial render
    if (prevClearingPriceRef.current !== clearingPrice && prevClearingPriceRef.current !== 0) {
      setAnimating(true);
    }
    
    setVisiblePriceRange({ min: minPrice, max: maxPrice });
    prevClearingPriceRef.current = clearingPrice;
    
    // Reset animation flag after animation completes
    const timer = setTimeout(() => {
      setAnimating(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [clearingPrice]);
  
  // Initialize visible price range on first render
  useEffect(() => {
    if (visiblePriceRange.min === 0 && visiblePriceRange.max === 0 && bidDistribution.length > 0) {
      // Calculate initial range based on clearing price
      const rangeWidth = clearingPrice * 2;
      
      // Position clearing price at 25% initially
      const newMin = clearingPrice - (rangeWidth * 0.25);
      const newMax = newMin + rangeWidth;
      
      setVisiblePriceRange({ min: newMin, max: newMax });
      prevClearingPriceRef.current = clearingPrice;
      
      console.log(`Chart initialized: $${newMin.toLocaleString()} - $${newMax.toLocaleString()}, clearing price: $${clearingPrice.toLocaleString()}`);
    }
  }, [bidDistribution, clearingPrice, visiblePriceRange]);
  
  // Find which buckets contain user bids
  const userBidBuckets = new Set();
  userBids.forEach(userBid => {
    bidDistribution.forEach((bucket, index) => {
      const [minPrice, maxPrice] = bucket.priceRange;
      if (userBid.price >= minPrice && userBid.price < maxPrice) {
        userBidBuckets.add(index);
      }
    });
  });
  
  // Generate curve data for visualization
  const curveData = useMemo(() => {
    if (bidDistribution.length === 0 || maxCount === 0) {
      return { curvePath: '', areaPath: '' };
    }
    
    const points = bidDistribution.map((bucket, index) => {
      // Calculate price at center of bucket
      const bucketPrice = (bucket.priceRange[0] + bucket.priceRange[1]) / 2;
      
      // Calculate x position based on price within visible range
      const x = ((bucketPrice - visiblePriceRange.min) / (visiblePriceRange.max - visiblePriceRange.min)) * 100;
      
      // Calculate y position (inverted since SVG y=0 is at top)
      const y = 100 - ((bucket.count / maxCount) * 100);
      return { x, y, price: bucketPrice };
    });
    
    // Make sure we have at least 2 points for a curve
    if (points.length < 2) {
      points.push({ x: 100, y: points[0].y });
    }
    
    // Generate SVG path for the curve
    let pathD = `M${points[0].x},${points[0].y}`;
    
    // For a smoother curve, use a cardinal spline
    for (let i = 1; i < points.length; i++) {
      // Use bezier curves for smoother lines
      const cp1x = points[i-1].x + (points[i].x - points[i-1].x) / 3;
      const cp1y = points[i-1].y;
      const cp2x = points[i].x - (points[i].x - points[i-1].x) / 3;
      const cp2y = points[i].y;
      pathD += ` C${cp1x},${cp1y} ${cp2x},${cp2y} ${points[i].x},${points[i].y}`;
    }
    
    // Generate area path (curve + bottom line to create filled area)
    const areaPathD = `${pathD} L${points[points.length-1].x},100 L${points[0].x},100 Z`;
    
    return { curvePath: pathD, areaPath: areaPathD };
  }, [bidDistribution, maxCount]);
  
  return (
    <ChartContainer>
      <ChartHeader>
        <ChartTitle>Bid Distribution</ChartTitle>
      </ChartHeader>
      
      <ChartExplainer>
        This chart shows the distribution of all bids in $1,000 intervals. Gold bars represent bids above the current clearing price (successful), 
        while grey bars show bids below the clearing price (unsuccessful). Diamond markers show your bids. Bids are rounded up to the nearest $1,000.
      </ChartExplainer>
      
      <ChartContent>
        <YAxisLabels>
          <div>50</div>
          <div>40</div>
          <div>30</div>
          <div>20</div>
          <div>10</div>
          <div>0</div>
        </YAxisLabels>
        
        <XAxis />
        
        <PriceAxisLabels>
          {/* Generate price labels at regular intervals */}
          {[0, 20, 40, 60, 80, 100].map(position => {
            // Calculate the price at this position
            const price = visiblePriceRange.min + ((visiblePriceRange.max - visiblePriceRange.min) * (position / 100));
            return (
              <XAxisLabel key={position} position={position}>
                ${Math.round(price / 1000)}k
              </XAxisLabel>
            );
          })}
        </PriceAxisLabels>
        
        <BarsContainer>
          {/* SVG for the curve visualization */}
          <DistributionCurve>
            <defs>
              <linearGradient id="curveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F0B90B" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#F0B90B" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <CurveArea d={curveData.areaPath} />
            <CurvePath d={curveData.curvePath} />
          </DistributionCurve>
          
          {/* Bar chart visualization */}
          {bidDistribution.map((bucket, index) => {
            // Determine if this bucket is above or below clearing price
            const isAboveClearingPrice = bucket.priceRange[0] >= clearingPrice;
            const barHeight = `${(bucket.count / maxCount) * 100}%`;
            const hasUserBid = userBidBuckets.has(index);
            
            // Calculate position based on price within visible range
            const bucketPrice = (bucket.priceRange[0] + bucket.priceRange[1]) / 2;
            const xPosition = ((bucketPrice - visiblePriceRange.min) / (visiblePriceRange.max - visiblePriceRange.min)) * 100;
            
            // Only show bars that are within the visible range (with some buffer)
            if (xPosition < -10 || xPosition > 110) return null;
            
            return (
              <BarGroup 
                key={index} 
                style={{
                  position: 'absolute',
                  left: `${xPosition}%`,
                  width: '3%',
                  transition: animating ? 'left 0.5s ease-out' : 'none'
                }}
              >
                <Bar 
                  height={barHeight} 
                  color={isAboveClearingPrice ? '#F0B90B' : '#848E9C'}
                />
                <BarLabel show={index % 5 === 0}>${(bucket.priceRange[0] / 1000).toFixed(0)}k</BarLabel>
                {hasUserBid && (
                  <UserBidMarker position={barHeight} />
                )}
              </BarGroup>
            );
          })}
          
          <ClearingPriceLine>
            <ClearingPriceLabel>
              ${clearingPrice.toLocaleString()}
            </ClearingPriceLabel>
          </ClearingPriceLine>
        </BarsContainer>
      </ChartContent>
      
      <ChartLegend>
        <LegendItem>
          <ColorSwatch color="#F0B90B" />
          <LegendText>Bids above clearing price (successful)</LegendText>
        </LegendItem>
        <LegendItem>
          <ColorSwatch color="#848E9C" />
          <LegendText>Bids below clearing price (unsuccessful)</LegendText>
        </LegendItem>
        <LegendItem>
          <DiamondMarker />
          <LegendText>Your bids</LegendText>
        </LegendItem>
        <LegendItem>
          <div style={{ width: '2px', height: '12px', backgroundColor: '#F0B90B', marginRight: '6px' }} />
          <LegendText>Clearing price line (fixed position)</LegendText>
        </LegendItem>
      </ChartLegend>
    </ChartContainer>
  );
};

export default BidDistributionChart;
