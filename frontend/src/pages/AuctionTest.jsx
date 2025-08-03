import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Import actual components
import BidPanel from '../components/AuctionComponents/BidPanel';
import ActiveBidsPanel from '../components/AuctionComponents/ActiveBidsPanel';
import BidDistributionChart from '../components/AuctionComponents/BidDistributionChart';
import AuctionStatusPanel from '../components/AuctionComponents/AuctionStatusPanel';
import PropertyIcons from '../components/PropertyCard/PropertyIcons';

// Styled components
const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: var(--color-text, #f8f9fa);
  font-family: var(--font-family, 'Inter', sans-serif);
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: var(--color-text-secondary, #848e9c);
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
  text-decoration: none;
  
  svg {
    margin-right: 0.5rem;
  }
  
  &:hover {
    color: var(--color-accent, #f0b90b);
  }
`;

const AuctionPageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-text, #f8f9fa);
  margin-bottom: 0.75rem;
`;

const AuctionPageDescription = styled.p`
  font-size: 1.125rem;
  color: var(--color-text-secondary, #848e9c);
  margin-bottom: 2rem;
  max-width: 800px;
  line-height: 1.5;
`;

const PropertyHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const PropertyImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1.5rem;
`;

const PropertyImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PropertyInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PropertyDetails = styled.div`
  flex: 1;
`;

const PropertyName = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
  display: flex;
  align-items: baseline;
`;

const PropertyAddress = styled.span`
  font-size: 1rem;
  color: var(--color-text-secondary, #848e9c);
  margin-left: 1rem;
  font-weight: normal;
`;

const PropertyLocation = styled.p`
  font-size: 1.125rem;
  color: var(--color-text-secondary, #848e9c);
  margin-bottom: 1rem;
`;

const StatusBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f0d78a;
  color: #000;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.75rem;
  margin-bottom: 1rem;
  width: fit-content;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const LiveIndicatorText = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 600;
  font-size: 0.75rem;
  margin-left: 8px;
  color: #000;
`;

const PulsingDot = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: #2ecc71;
  border-radius: 50%;
  box-shadow: 0 0 4px 1px #2ecc71;
  animation: pulseGreen 1.5s infinite;
  margin-right: 2px;
  
  @keyframes pulseGreen {
    0% {
      box-shadow: 0 0 0 0 rgba(46, 204, 113, 0.7);
    }
    70% {
      box-shadow: 0 0 0 4px rgba(46, 204, 113, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(46, 204, 113, 0);
    }
  }
`;


const PropertyStats = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const PropertyStat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StatLabel = styled.span`
  font-size: 0.75rem;
  color: var(--color-text-secondary, #848e9c);
  margin-bottom: 0.25rem;
`;

const StatValue = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-text);
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
    width: 20px;
    height: 20px;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  
  @media (max-width: 768px) {
    margin-top: 1rem;
    flex-direction: row;
  }
`;

const ActionButton = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.9375rem;
  transition: all 0.2s;
  width: 140px;
  text-align: center;
  border: none;
  
  &:hover {
    opacity: 0.9;
  }
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    display: block;
  }
`;

const MobilePlaceBidButton = styled.button`
  display: none;
  background-color: var(--color-accent, #f0b90b);
  color: #000;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.875rem;
  
  @media (max-width: 1024px) {
    display: block;
  }
  
  &:hover {
    background-color: #d9a400;
  }
`;

const LeftColumn = styled.div`
  @media (max-width: 1024px) {
    .bid-distribution-section {
      margin-top: 2rem;
    }
  }
`;

const RightColumn = styled.div`
  @media (max-width: 1024px) {
    margin-top: 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const ExplainerBox = styled.div`
  background-color: rgba(var(--color-accent-rgb, 240, 185, 11), 0.1);
  border: 1px solid rgba(var(--color-accent-rgb, 240, 185, 11), 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  
  h3 {
    color: var(--color-accent, #f0b90b);
    margin-bottom: 0.75rem;
    font-size: 1.125rem;
    font-weight: 600;
  }
  
  p {
    font-size: 0.9375rem;
    line-height: 1.6;
  }
  
  .key-point {
    font-weight: bold;
    color: var(--color-accent, #f0b90b);
  }
`;

const AuctionTest = () => {
  // Mock property data
  const property = {
    id: 'auction-test-1',
    name: 'Hermitage',
    location: 'Vaucluse, Sydney',
    imageUrl: 'https://rimh2.domainstatic.com.au/K2F_ORgd_kmIe3ClzBwmk_giZC4=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2017423566_1_1_211118_045100-w1920-h1279',
    bedrooms: 5,
    bathrooms: 4,
    carSpots: 2,
    propertyType: 'House',
    totalTokens: 50000
  };

  // State for auction data
  const [clearingPrice, setClearingPrice] = useState(240.00);
  const [startingPrice] = useState(240.00);
  const [propertyValue, setPropertyValue] = useState(12000000);
  const [timeRemaining, setTimeRemaining] = useState(12000); // 3 hours 20 minutes in seconds
  const [userBids, setUserBids] = useState([
    { id: 'bid1', price: 244.00, tokenAmount: 750, timestamp: new Date().toISOString() },
    { id: 'bid2', price: 250.00, tokenAmount: 1125, timestamp: new Date().toISOString() },
    { id: 'bid3', price: 236.00, tokenAmount: 375, timestamp: new Date().toISOString() } // Below clearing price
  ]);
  const [bidToAmend, setBidToAmend] = useState(null);
  const [bidBeingAmended, setBidBeingAmended] = useState(null);
  // Track if the user has interacted with the bid panel to fix the bid price
  const [userInteractedWithBidPanel, setUserInteractedWithBidPanel] = useState(false);
  const bidPanelRef = useRef(null);
  
  // Generate bid distribution data with $2 intervals
  const generateBidDistribution = () => {
    const distribution = [];
    // Create price ranges from $240 to $400 in $2 increments
    for (let price = 240; price < 400; price += 2) {
      distribution.push({
        priceRange: [price, price + 2],
        count: 0,
        tokens: 0
      });
    }
    return distribution;
  };
  
  const [bidDistribution, setBidDistribution] = useState(generateBidDistribution());
  
  // Recent activity
  const [recentActivity, setRecentActivity] = useState([
    { id: 'initial-1', user: 'Alex S.', action: 'placed a bid', amount: '$242.00', tokens: 1052, time: '2 minutes ago', timestamp: Date.now() - 2 * 60 * 1000 },
    { id: 'initial-2', user: 'Morgan W.', action: 'placed a bid', amount: '$238.50', tokens: 875, time: '5 minutes ago', timestamp: Date.now() - 5 * 60 * 1000 },
    { id: 'initial-3', user: 'Taylor R.', action: 'placed a bid', amount: '$243.00', tokens: 1325, time: '8 minutes ago', timestamp: Date.now() - 8 * 60 * 1000 },
    { id: 'initial-4', user: 'Jordan K.', action: 'placed a bid', amount: '$241.00', tokens: 978, time: '12 minutes ago', timestamp: Date.now() - 12 * 60 * 1000 },
    { id: 'initial-5', user: 'Casey P.', action: 'placed a bid', amount: '$239.00', tokens: 752, time: '15 minutes ago', timestamp: Date.now() - 15 * 60 * 1000 }
  ]);
  
  // State to track recent bid activity for price impact
  const [recentBidImpact, setRecentBidImpact] = useState(1);
  const [clearingPriceHistory, setClearingPriceHistory] = useState([]);
  const [clearingPriceChange, setClearingPriceChange] = useState(0);
  
  // Effect to simulate periodic bids and update clearing price
  useEffect(() => {
    // Update bid times every 30 seconds
    const timeUpdateInterval = setInterval(() => {
      setRecentActivity(prev => {
        if (prev.length === 0) return prev;
        
        return prev.map(activity => {
          const secondsAgo = Math.floor((Date.now() - activity.timestamp) / 1000);
          let newTime;
          
          if (secondsAgo < 60) {
            newTime = 'just now';
          } else if (secondsAgo < 3600) {
            const minutes = Math.floor(secondsAgo / 60);
            newTime = `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
          } else {
            const hours = Math.floor(secondsAgo / 3600);
            newTime = `${hours} hour${hours !== 1 ? 's' : ''} ago`;
          }
          
          return { ...activity, time: newTime };
        });
      });
    }, 30000); // Update times every 30 seconds
    
    // Generate new bids
    const bidInterval = setInterval(() => {
      // Current price is the clearing price
      const currentPrice = clearingPrice;
      
      // Get highest bid from recent activity to use as reference
      const highestRecentBidPrice = recentActivity.length > 0 ?
        parseFloat(recentActivity[0].amount.replace(/[^0-9.k]/g, '')) : currentPrice / 1000;
      
      // Determine premium range based on auction phase and slow down as we approach 150k
      // Keep premiums extremely small to make bids very close to the clearing price
      let minPremium = 0.001; // Minimum 0.1% above reference price
      let maxPremium;
      let bidProbability = 0.9; // Default 90% chance of bid - increased frequency
      
      if (currentPrice < 130) {
        // Early auction - modest range of bids
        maxPremium = 0.005; // Up to 0.5% premium (reduced from 2%)
        bidProbability = 0.95; // 95% chance of bid
      } else if (currentPrice < 140) {
        // Mid auction - more conservative bidding
        maxPremium = 0.004; // Up to 0.4% premium (reduced from 1.5%)
        bidProbability = 0.9; // 90% chance of bid
      } else if (currentPrice < 145) {
        // Later mid auction - slightly more conservative
        maxPremium = 0.003; // Up to 0.3% premium (reduced from 1%)
        bidProbability = 0.8; // 80% chance of bid
      } else if (currentPrice < 148) {
        // Approaching property value - more cautious
        maxPremium = 0.002; // Up to 0.2% premium (reduced from 0.8%)
        bidProbability = 0.6; // 60% chance of bid (reduced)
      } else if (currentPrice < 150) {
        // Near valuation - very cautious
        maxPremium = 0.0015; // Up to 0.15% premium
        bidProbability = 0.3; // 30% chance of bid (significantly reduced)
      } else {
        // At or above market valuation - extremely few high bids
        maxPremium = 0.001; // Up to 0.1% premium
        bidProbability = 0.1; // Only 10% chance of bid (drastically reduced)
      }
      
      // Only proceed with bid if random chance is below bid probability
      if (Math.random() > bidProbability) {
        return; // Skip this bid cycle
      }
      
      // Generate a realistic bid amount with appropriate premium
      const premium = minPremium + Math.random() * (maxPremium - minPremium);
      
      // Always use the clearing price as the minimum reference price
      // This ensures no bids come in below the clearing price
      const referencePrice = Math.max(currentPrice, highestRecentBidPrice * 1000);
      
      // Make bids much closer to the clearing price with occasional outliers
      let bidAmount;
      
      // Determine bid strategy based on different bidder behaviors
      const bidStrategy = Math.random();
      
      if (bidStrategy < 0.80) {
        // 80% of bids are extremely close to the clearing price (incremental bidders)
        // These bidders are just trying to get in at the minimum viable price
        if (referencePrice >= 149) {
          // Very close to market value - bids should cluster tightly around 150
          // Ensure bid is at least 0.1% above clearing price
          bidAmount = Math.max(
            parseFloat((currentPrice * 1.001).toFixed(2)),
            149 + parseFloat((Math.random() * 1.5).toFixed(2))
          );
        } else if (referencePrice >= 145) {
          // Approaching market value - bids should start to plateau
          // Always ensure bid is at least 0.1% above clearing price
          const adjustedPremium = Math.max(0.001, premium * 0.2); // Minimum 0.1% premium
          bidAmount = Math.max(
            parseFloat((currentPrice * 1.001).toFixed(2)),
            parseFloat((referencePrice * (1 + adjustedPremium)).toFixed(2))
          );
        } else {
          // Normal bidding behavior but with smaller premiums
          // Most bids within 0.1% to 0.2% of clearing price
          const tightPremium = 0.001 + (Math.random() * 0.001);
          bidAmount = parseFloat((referencePrice * (1 + tightPremium)).toFixed(2));
        }
      } else if (bidStrategy < 0.95) {
        // 15% are strategic bidders who bid moderately higher to avoid constant rebidding
        // These bidders are willing to pay a bit more to secure their position
        const strategicPremium = 0.005 + (Math.random() * 0.015); // 0.5% to 2% premium
        bidAmount = parseFloat((referencePrice * (1 + strategicPremium)).toFixed(2));
      } else {
        // 5% are aggressive bidders who bid significantly higher to guarantee their position
        // These bidders want to ensure they get tokens and don't want to monitor the auction
        const aggressivePremium = 0.02 + (Math.random() * 0.03); // 2% to 5% premium
        bidAmount = parseFloat((referencePrice * (1 + aggressivePremium)).toFixed(2));
      }
      
      // Final check to ensure bid is never below clearing price
      bidAmount = Math.max(bidAmount, parseFloat((currentPrice * 1.001).toFixed(2)));
      
      // Token amount also changes as auction progresses
      // Fewer tokens per bid as price increases
      // Token amounts should be in hundreds or thousands, with occasional tens of thousands
      let maxTokens;
      
      // Determine if this will be a rare large bid (about 5% chance)
      const isLargeBid = Math.random() < 0.05;
      
      if (isLargeBid) {
        // Rare large bids in the thousands to tens of thousands
        if (currentPrice < 130) maxTokens = 15000;
        else if (currentPrice < 140) maxTokens = 12000;
        else if (currentPrice < 145) maxTokens = 10000;
        else if (currentPrice < 150) maxTokens = 8000;
        else maxTokens = 5000;
      } else {
        // Normal bids in the hundreds to thousands
        if (currentPrice < 130) maxTokens = 3000;
        else if (currentPrice < 140) maxTokens = 2500;
        else if (currentPrice < 145) maxTokens = 2000;
        else if (currentPrice < 150) maxTokens = 1500;
        else maxTokens = 1000;
      }
      
      // Generate a random token amount
      const minTokens = Math.max(100, maxTokens / 5);
      
      // Parse as float but don't force decimal places
      // This will show whole numbers without trailing zeros
      const tokenAmount = parseFloat(minTokens + Math.random() * (maxTokens - minTokens));
      
      // Names that sound like real investors
      const bidders = [
        'Alex S.', 'Morgan L.', 'Jamie W.', 'Taylor R.', 'Jordan B.',
        'Casey P.', 'Robin M.', 'Quinn T.', 'Avery D.', 'Blake C.',
        'Skyler F.', 'Riley H.', 'Dakota J.', 'Parker N.', 'Jordan V.'
      ];
      
      // Create simulated bid
      const simulatedBid = {
        id: `sim-bid-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        price: bidAmount,
        tokenAmount,
        timestamp: new Date().toISOString(),
        bidder: bidders[Math.floor(Math.random() * bidders.length)]
      };
      
      // Add to recent activity UI
      const newBid = {
        id: `bid-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        user: simulatedBid.bidder,
        action: 'placed a bid',
        amount: `$${bidAmount.toFixed(2)}`,
        tokens: simulatedBid.tokenAmount,
        time: 'just now',
        timestamp: Date.now()
      };
      
      setRecentActivity(prev => {
        // Keep up to 20 bids to ensure they don't disappear too quickly
        const updatedActivity = [newBid, ...prev];
        return updatedActivity.slice(0, 20);
      });
      
      // Update bid distribution data to include this new bid
      setBidDistribution(prevDistribution => {
        const updatedDistribution = [...prevDistribution];
        // Find the appropriate price range and update it
        // Convert bidAmount back to the full price scale for distribution
        const fullScaleBidAmount = bidAmount;
        for (const range of updatedDistribution) {
          const [minPrice, maxPrice] = range.priceRange;
          if (fullScaleBidAmount >= minPrice && fullScaleBidAmount < maxPrice) {
            range.count += 1;
            range.tokens += tokenAmount;
            break;
          }
        }
        
        return updatedDistribution;
      });
      
      // Store the new bid in a state variable to ensure it's included in clearing price calculation
      const marketBids = getSimulatedMarketBids();
      
      // Add the new bid to the simulated market bids for this calculation
      const allBids = [...userBids, ...marketBids, simulatedBid];
      
      // Calculate new clearing price based on all bids
      const newClearingPrice = calculateClearingPrice(allBids);
      
      // Update clearing price - ensure it's tied to the live bids
      // Only allow small increments to prevent large jumps
      if (newClearingPrice !== clearingPrice) {
        // Limit how much the clearing price can change in a single update
        // This creates a more realistic auction where price changes are gradual
        // In a Dutch auction, clearing price should never decrease
        // Limit price increases to max $500 per update for more gradual price movement
        const maxPriceChange = 500;
        
        // Only allow price to increase, never decrease
        // If new calculated price is lower than current, keep current price
        const adjustedClearingPrice = newClearingPrice > clearingPrice
          ? Math.min(newClearingPrice, clearingPrice + maxPriceChange)
          : clearingPrice;
        
        setClearingPrice(adjustedClearingPrice);
        setPropertyValue(adjustedClearingPrice * property.totalTokens);
        
        // Track clearing price history with timestamps
        setClearingPriceHistory(prevHistory => {
          const now = new Date();
          const newHistory = [...prevHistory, { price: adjustedClearingPrice, timestamp: now }];
          
          // Keep only the last 30 minutes of history (to avoid memory issues)
          const thirtyMinutesAgo = new Date(now.getTime() - 30 * 60 * 1000);
          return newHistory.filter(item => item.timestamp > thirtyMinutesAgo);
        });
        
        // Calculate bid impact percentage for UI
        const priceChangePercent = ((newClearingPrice - clearingPrice) / clearingPrice) * 100;
        const bidImpactMultiplier = 1 + (priceChangePercent / 100);
        setRecentBidImpact(bidImpactMultiplier);
      }
    }, 1000); // Increased frequency (every 1 second instead of 2)

    return () => {
      clearInterval(bidInterval);
      clearInterval(timeUpdateInterval);
    };
  }, [clearingPrice, recentActivity, userBids]);

  // Effect to countdown the auction timer
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining(prevTime => {
        if (prevTime <= 0) {
          clearInterval(timerInterval);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    
    return () => clearInterval(timerInterval);
  }, []);
  
  // We already update clearing price history when the price changes in the bid generation effect
  
  // Effect to calculate clearing price change over the past 5 minutes
  useEffect(() => {
    const changeInterval = setInterval(() => {
      // Calculate price change percentage over the last 5 minutes
      if (clearingPriceHistory.length > 0) {
        const now = new Date();
        const fiveMinutesAgo = new Date(now.getTime() - 5 * 60 * 1000);
        
        // Find the price point closest to exactly 5 minutes ago
        const pricePointsInWindow = clearingPriceHistory.filter(item => item.timestamp <= fiveMinutesAgo);
        
        if (pricePointsInWindow.length > 0) {
          // Get the price closest to exactly 5 minutes ago
          const closestToFiveMinutesAgo = pricePointsInWindow.reduce((closest, current) => {
            const currentDiff = Math.abs(current.timestamp - fiveMinutesAgo);
            const closestDiff = Math.abs(closest.timestamp - fiveMinutesAgo);
            return currentDiff < closestDiff ? current : closest;
          });
          
          const fiveMinutesAgoPrice = closestToFiveMinutesAgo.price;
          const currentPrice = clearingPrice;
          
          // Calculate simple percentage change from 5 minutes ago to now
          const changePercent = ((currentPrice - fiveMinutesAgoPrice) / fiveMinutesAgoPrice) * 100;
          
          // Round to 1 decimal place
          setClearingPriceChange(Math.round(changePercent * 10) / 10);
        } else if (clearingPriceHistory.length > 1) {
          // If we don't have 5 minutes of data yet, use the oldest available data point
          const oldestAvailable = clearingPriceHistory[0];
          const oldPrice = oldestAvailable.price;
          
          // Calculate percentage change
          const changePercent = ((clearingPrice - oldPrice) / oldPrice) * 100;
          
          // Round to 1 decimal place
          setClearingPriceChange(Math.round(changePercent * 10) / 10);
        }
      }
    }, 1000); // Update every second
    
    return () => clearInterval(changeInterval);
  }, [clearingPriceHistory, clearingPrice]);



  
  // Generate simulated market bids to represent other participants in the auction
  const getSimulatedMarketBids = () => {
    // Names that sound like real investors
    const bidders = [
      'Alex S.', 'Morgan L.', 'Jamie W.', 'Taylor R.', 'Jordan B.',
      'Casey P.', 'Robin M.', 'Quinn T.', 'Avery D.', 'Blake C.',
      'Skyler F.', 'Riley H.', 'Dakota J.', 'Parker N.', 'Jordan V.'
    ];
    
    // Generate simulated bids based on bid distribution
    const simulatedBids = [];
    
    // For each price range in the distribution, create a number of bids
    bidDistribution.forEach(range => {
      const [minPrice, maxPrice] = range.priceRange;
      const bidCount = range.count;
      
      for (let i = 0; i < bidCount; i++) {
        // Random price within this range
        const price = Math.min(400, parseFloat((minPrice + Math.random() * (maxPrice - minPrice)).toFixed(2)));
        
        // Random token amount (62.5 to 1250)
        const tokenAmount = Math.floor(62.5 + Math.random() * 1187.5);
        
        // Create simulated bid
        simulatedBids.push({
          id: `sim-${minPrice}-${i}`,
          price,
          tokenAmount,
          timestamp: new Date().toISOString(),
          bidder: bidders[Math.floor(Math.random() * bidders.length)]
        });
      }
    });
    
    return simulatedBids;
  };
  
  // Calculate clearing price based on top 50,000 tokens worth of bids
  const calculateClearingPrice = (allBids) => {
    // Sort bids by price (highest first)
    const sortedBids = [...allBids].sort((a, b) => b.price - a.price);
    
    let totalTokensFilled = 0;
    let clearingPriceFound = false;
    let newClearingPrice = 0;
    
    // Find the bid that fills the 100th token
    for (const bid of sortedBids) {
      // Add the token amount for this bid
      const previousTotal = totalTokensFilled;
      totalTokensFilled += bid.tokenAmount;
      
      // If this bid crosses the 50,000 token threshold, it's our clearing price
      if (previousTotal < 50000 && totalTokensFilled >= 50000) {
        newClearingPrice = bid.price;
        clearingPriceFound = true;
        break;
      }
    }
    
    // If we don't have enough bids to fill 100 tokens, use the lowest bid price
    // or the starting price if no bids
    if (!clearingPriceFound) {
      newClearingPrice = sortedBids.length > 0 ? 
        sortedBids[sortedBids.length - 1].price : startingPrice;
    }
    
    // Cap the clearing price at $400
    newClearingPrice = Math.min(400, newClearingPrice);
    
    console.log(`Clearing price calculated: $${newClearingPrice.toFixed(2)} based on ${totalTokensFilled} tokens`);
    return newClearingPrice;
  };
  
  // Effect to run once on component mount to generate initial bids
  useEffect(() => {
    // Generate enough initial bids to fill all 50,000 tokens
    const initialBids = [];
    let totalTokens = 0;
    
    console.log('Generating initial bids to fill all 50,000 tokens...');
    
    // First, calculate how many tokens are already in user bids
    const userBidsTokens = userBids.reduce((sum, bid) => sum + bid.tokenAmount, 0);
    totalTokens += userBidsTokens;
    
    // Safety counter to prevent infinite loops
    let safetyCounter = 0;
    const maxIterations = 1000;
    
    // Generate a set of initial bids until we reach 50,000 tokens
    while (totalTokens < 50000 && safetyCounter < maxIterations) {
      safetyCounter++;
      // Generate price based on different bidder strategies
      let bidAmount;
      
      // Determine bid strategy based on different bidder behaviors
      const bidStrategy = Math.random();
      
      if (bidStrategy < 0.80) {
        // 80% of bids are extremely close to the clearing price (incremental bidders)
        if (clearingPrice >= 298) {
          // Very close to market value - bids should cluster tightly around $300
          bidAmount = 298 + parseFloat((Math.random() * 3).toFixed(2));
        } else if (clearingPrice >= 290) {
          // Approaching market value - bids should start to plateau
          const adjustedPremium = 1 + ((Math.random() * 0.002) - 0.001); // Can be slightly below reference
          bidAmount = parseFloat((clearingPrice * adjustedPremium).toFixed(2));
        } else {
          // Normal bidding behavior but with much smaller premiums
          const tightPremium = 1 + (0.0001 + (Math.random() * 0.001));
          bidAmount = parseFloat((clearingPrice * tightPremium).toFixed(2));
        }
      } else if (bidStrategy < 0.95) {
        // 15% are strategic bidders who bid moderately higher to avoid constant rebidding
        const strategicPremium = 1 + (0.005 + (Math.random() * 0.015)); // 0.5% to 2% premium
        bidAmount = parseFloat((clearingPrice * strategicPremium).toFixed(2));
      } else {
        // 5% are aggressive bidders who bid significantly higher to guarantee their position
        const aggressivePremium = 1 + (0.02 + (Math.random() * 0.03)); // 2% to 5% premium
        bidAmount = Math.min(400, parseFloat((clearingPrice * aggressivePremium).toFixed(2)));
      }
      
      // Generate a random token amount (62.5 to 1250)
      const maxTokenAmount = Math.min(1250, 50000 - totalTokens);
      const tokenAmount = Math.floor(62.5 + Math.random() * (maxTokenAmount - 62.5));
      
      // Names that sound like real investors
      const bidders = [
        'Alex S.', 'Morgan L.', 'Jamie W.', 'Taylor R.', 'Jordan B.',
        'Casey P.', 'Robin M.', 'Quinn T.', 'Avery D.', 'Blake C.',
        'Skyler F.', 'Riley H.', 'Dakota J.', 'Parker N.', 'Jordan V.'
      ];
      
      const bidder = bidders[Math.floor(Math.random() * bidders.length)];
      
      // Create a simulated bid
      const simulatedBid = {
        id: `init-bid-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
        price: bidAmount,
        tokenAmount: tokenAmount,
        timestamp: new Date(Date.now() - Math.random() * 3600000).toISOString(),
        bidder: bidder
      };
      
      initialBids.push(simulatedBid);
      
      // Add to recent activity UI only for the most recent bids
      if (initialBids.length <= 5) {
        const newBid = {
          user: bidder,
          action: 'placed a bid',
          amount: `$${bidAmount.toFixed(2)}`,
          tokens: tokenAmount,
          time: Math.floor(Math.random() * 10) + 1 + ' minutes ago'
        };
        
        // Add with a slight delay between each to make it look more natural
        setTimeout(() => {
          setRecentActivity(prev => {
            const updatedActivity = [{
              ...newBid,
              id: `user-bid-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
              timestamp: Date.now()
            }, ...prev];
            return updatedActivity.slice(0, 20);
          });
        }, initialBids.length * 300); // Faster display of initial bids
      }
    }
    
    // Update bid distribution data to include these new bids
    setBidDistribution(prevDistribution => {
      const updatedDistribution = [...prevDistribution];
      
      // Update distribution counts based on initial bids
      initialBids.forEach(bid => {
        for (const range of updatedDistribution) {
          const [minPrice, maxPrice] = range.priceRange;
          // Check if the rounded price falls within this range
          if (bid.price >= minPrice && bid.price < maxPrice) {
            range.count += 1;
            range.tokens += bid.tokenAmount;
            break;
          }
        }
      });
      
      return updatedDistribution;
    });
    
    // Calculate new clearing price based on all bids
    const allBids = [...userBids, ...getSimulatedMarketBids(), ...initialBids];
    const newClearingPrice = calculateClearingPrice(allBids);
    
    // Update clearing price
    setClearingPrice(newClearingPrice);
    
    // Update property value
    setPropertyValue(newClearingPrice * 50000);
    
    console.log(`Generated ${initialBids.length} initial bids, new clearing price: $${newClearingPrice.toFixed(2)}`);
    
  }, []); // Empty dependency array means this runs once on mount
  
  // Handle new bid submission or amendment
  const handlePlaceBid = (price, tokenAmount, bidIdToUpdate = null) => {
    // Generate a new bid ID if not updating an existing bid
    const newBidId = bidIdToUpdate || `bid${Date.now()}`;
    
    // Create the new bid object
    const newBid = {
      id: newBidId,
      price,
      tokenAmount,
      timestamp: new Date().toISOString()
    };
    
    let updatedBids = [];
    
    if (bidIdToUpdate) {
      // Update an existing bid
      updatedBids = userBids.map(bid => 
        bid.id === bidIdToUpdate ? newBid : bid
      );
      setUserBids(updatedBids);
      
      // Reset bidToAmend
      setBidToAmend(null);
    } else {
      // Otherwise, add a new bid
      updatedBids = [...userBids, newBid];
      setUserBids(updatedBids);
    }
    
    // Add to recent activity
    const newActivity = {
      user: 'You',
      action: bidIdToUpdate ? 'amended a bid' : 'placed a bid',
      amount: `$${price.toFixed(2)}`,
      tokens: tokenAmount.toFixed(3),
      time: 'just now'
    };
    
    setRecentActivity(prev => {
      const updatedActivity = [{
        ...newActivity,
        id: `user-bid-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        timestamp: Date.now()
      }, ...prev];
      return updatedActivity.slice(0, 20);
    });
    
    // Update bid distribution data to include this new bid
    setBidDistribution(prevDistribution => {
      const updatedDistribution = [...prevDistribution];
      
      // If this is an amendment, first remove the old bid from the distribution
      if (bidIdToUpdate) {
        const oldBid = userBids.find(bid => bid.id === bidIdToUpdate);
        if (oldBid) {
          // Round up the old bid price to the nearest $1,000 to find the correct bucket
          const oldBidRounded = Math.ceil(oldBid.price / 1000) * 1000;
          
          // Find and update the range that contained the old bid
          for (const range of updatedDistribution) {
            const [minPrice, maxPrice] = range.priceRange;
            // Check if the rounded price falls within this range
            if (oldBidRounded >= minPrice && oldBidRounded < maxPrice) {
              range.count = Math.max(0, range.count - 1); // Ensure count doesn't go below 0
              range.tokens = Math.max(0, range.tokens - oldBid.tokenAmount); // Ensure tokens don't go below 0
              break;
            }
          }
        }
      }
      
      // Round up the new bid price to the nearest $1,000
      const priceRounded = Math.ceil(price / 1000) * 1000;
      
      // Now add the new bid to the distribution
      for (const range of updatedDistribution) {
        const [minPrice, maxPrice] = range.priceRange;
        // Check if the rounded price falls within this range
        if (priceRounded >= minPrice && priceRounded < maxPrice) {
          range.count += 1;
          range.tokens += tokenAmount;
          break;
        }
      }
      
      return updatedDistribution;
    });
    
    // Calculate new clearing price based on all bids
    // Combine user bids with simulated market bids
    const allBids = [...updatedBids, ...getSimulatedMarketBids()];
    const newClearingPrice = calculateClearingPrice(allBids);
    
    console.log(`New clearing price calculated: $${newClearingPrice.toFixed(2)} after user placed bid of $${price.toFixed(2)} for ${tokenAmount} tokens`);
    
    // Only update if the clearing price has changed
    if (newClearingPrice !== clearingPrice) {
      setClearingPrice(newClearingPrice);
      
      // Update property value
      setPropertyValue(newClearingPrice * property.totalTokens);
    }
    
    // Mark that the user has interacted with the bid panel
    setUserInteractedWithBidPanel(true);
    console.log('User placed/amended bid, marking as interacted with bid panel');
  };
  
  // Handle amending a bid
  const handleAmendBid = (bid) => {
    try {
      // Create a defensive copy of the bid to avoid reference issues
      const bidCopy = { ...bid };
      
      // Update state with the copied bid
      setBidToAmend(bidCopy);
      
      // Store the original bid details for later comparison when the bid is actually amended
      setBidBeingAmended(bidCopy);
      
      // Reset the user interaction flag so bid price can follow clearing price initially
      // but only when first clicking the Increase Bid button
      setUserInteractedWithBidPanel(false);
      console.log('Amend/Increase bid clicked, resetting userInteractedWithBidPanel to false');
      
      // Use a timeout to ensure state update completes before scrolling
      setTimeout(() => {
        try {
          // Scroll to the bid panel to make it clear to the user what's happening
          const bidPanelElement = document.getElementById('bid-panel');
          if (bidPanelElement) {
            bidPanelElement.scrollIntoView({ behavior: 'smooth' });
            
            // Add event listeners to the bid panel to detect user interaction
            // This ensures that once the user interacts with any input, the bid price stays fixed
            const inputs = bidPanelElement.querySelectorAll('input');
            const buttons = bidPanelElement.querySelectorAll('button:not([type="submit"])');
            
            // Function to handle any interaction with the bid panel
            const handleInteraction = () => {
              setUserInteractedWithBidPanel(true);
              console.log('User interacted with bid panel after clicking Increase Bid');
              
              // Remove event listeners once interaction is detected
              inputs.forEach(input => input.removeEventListener('focus', handleInteraction));
              buttons.forEach(button => button.removeEventListener('click', handleInteraction));
            };
            
            // Add event listeners to all inputs and buttons in the bid panel
            inputs.forEach(input => input.addEventListener('focus', handleInteraction));
            buttons.forEach(button => button.addEventListener('click', handleInteraction));
          }
          
          // Log success for debugging
          console.log('Successfully set bid to amend:', bidCopy);
        } catch (scrollError) {
          console.error('Error scrolling to bid panel:', scrollError);
        }
      }, 0);
    } catch (error) {
      console.error('Error in handleAmendBid:', error);
      // Prevent the screen from going blank by handling errors
      alert('There was an error processing your request. Please try again.');
    }
  };
  
  // Handle canceling bid amendment
  const handleCancelAmend = (event) => {
    try {
      // If event exists, prevent default behavior
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      
      // Reset the bidToAmend state to null
      setBidToAmend(null);
      console.log('Successfully cancelled amendment');
    } catch (error) {
      console.error('Error in handleCancelAmend:', error);
      // Prevent the screen from going blank by handling errors
    }
  };
  
  return (
    <PageContainer>
      <BackLink to="/ipo">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
        Back to IPO Listings
      </BackLink>
    
    <AuctionPageTitle>Auctions</AuctionPageTitle>
    <AuctionPageDescription>
      LOAF Auctions is pioneering a new multi-allocation auction system that enables true market price discovery.
    </AuctionPageDescription>
    
    <PropertyImageContainer>
      <PropertyImage src={property.imageUrl} alt={property.name} />
    </PropertyImageContainer>
    
    <PropertyHeader>
      <PropertyInfo>
        <PropertyDetails>
          <StatusBadge>
            AUCTION
            <LiveIndicatorText>
              <PulsingDot />
              LIVE
            </LiveIndicatorText>
          </StatusBadge>
          <PropertyName>
            {property.name}
            <PropertyAddress>83 Fitzwilliam Road</PropertyAddress>
          </PropertyName>
          <PropertyLocation>{property.location}</PropertyLocation>
          <PropertyStats>
            <PropertyStat>
              <StatLabel>
                Bedrooms
              </StatLabel>
              <StatValue>
                {property.bedrooms}
                <PropertyIcons.IconWrapper>
                  <PropertyIcons.BedroomIcon />
                </PropertyIcons.IconWrapper>
              </StatValue>
            </PropertyStat>
            <PropertyStat>
              <StatLabel>
                Bathrooms
              </StatLabel>
              <StatValue>
                {property.bathrooms}
                <PropertyIcons.IconWrapper>
                  <PropertyIcons.BathroomIcon />
                </PropertyIcons.IconWrapper>
              </StatValue>
            </PropertyStat>
            <PropertyStat>
              <StatLabel>
                Car Spots
              </StatLabel>
              <StatValue>
                {property.carSpots}
                <PropertyIcons.IconWrapper>
                  <PropertyIcons.CarIcon />
                </PropertyIcons.IconWrapper>
              </StatValue>
            </PropertyStat>
            <PropertyStat>
              <StatLabel>Property Type</StatLabel>
              <StatValue>{property.propertyType}</StatValue>
            </PropertyStat>
          </PropertyStats>
        </PropertyDetails>
        
        <ActionButtons>
          <ActionButton 
            style={{ backgroundColor: 'var(--color-accent)', color: '#000' }}
            onClick={() => bidPanelRef.current?.scrollIntoView({ behavior: 'smooth' })}
          >
            Place Bid
          </ActionButton>
          <ActionButton 
            style={{ backgroundColor: 'transparent', border: '1px solid var(--color-accent)', color: 'var(--color-accent)' }}
          >
            Property Details
          </ActionButton>
        </ActionButtons>
      </PropertyInfo>
    </PropertyHeader>
    
    <ExplainerBox>
      <h3>How This Auction Works</h3>
      <p>
        <span className="key-point">Bids above clearing price when auction ends = guaranteed allocation</span><br/>
        <span className="key-point">You pay clearing price</span>, not your bid price, even if your bid is higher.
      </p>
      <p>
        1. Place a bid above the clearing price (minimum bid 0.1% above)<br/>
        2. If your bid stays above the clearing price, you're guaranteed allocation for your bid<br/>
        3. The clearing price is related to bid demand and rises as more people bid at higher prices<br/>
        4. When the auction ends, successful bids which remain above the clearing price will receive allocation at the clearing price
      </p>
    </ExplainerBox>
    
    <MainContent>
      <LeftColumn>
        <SectionTitle>Auction Status</SectionTitle>
        <AuctionStatusPanel 
          clearingPrice={clearingPrice}
          startingPrice={startingPrice}
          propertyValue={propertyValue}
          timeRemaining={timeRemaining}
          recentActivity={recentActivity.slice(0, 10)}
          userBids={userBids}
          onAmendBid={handleAmendBid}
          clearingPriceChange={clearingPriceChange}
          mobilePlaceBidButton={
            <MobilePlaceBidButton onClick={() => {
              bidPanelRef.current?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Place Bid
            </MobilePlaceBidButton>
          }
        />
      </LeftColumn>
      
      {/* Bid Panel - will appear below auction status on mobile */}
      <RightColumn ref={bidPanelRef}>
        <SectionTitle>Place Your Bid</SectionTitle>
        <BidPanel 
          clearingPrice={clearingPrice}
          userBids={userBids}
          onPlaceBid={handlePlaceBid}
          propertyValue={propertyValue}
          totalTokens={property.totalTokens}
          bidToAmend={bidToAmend}
          onCancelAmend={handleCancelAmend}
          userInteracted={userInteractedWithBidPanel}
          setUserInteracted={setUserInteractedWithBidPanel}
        />
      </RightColumn>
      
      {/* Bid Distribution - will appear below bid panel on mobile */}
      <LeftColumn>
        <div className="bid-distribution-section">
          <SectionTitle>Bid Distribution</SectionTitle>
          <BidDistributionChart 
            bidDistribution={bidDistribution}
            clearingPrice={clearingPrice}
            userBids={userBids}
          />
        </div>
      </LeftColumn>
      </MainContent>
    </PageContainer>
  );
};

export default AuctionTest;
