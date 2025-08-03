import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled components
const PanelContainer = styled.div`
  margin-top: 1.5rem;
  
  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const UserBidsTitle = styled.h3`
  font-size: 1rem;
  color: var(--color-text, #eaecef);
  margin-bottom: 1rem;
`;

const BidTable = styled.div`
  background-color: var(--color-card, #1e2329);
  border-radius: 4px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    max-height: 300px;
    overflow-y: auto;
    padding-right: 4px; /* Space for scrollbar */
    
    /* Scrollbar styling */
    &::-webkit-scrollbar {
      width: 4px;
    }
    
    &::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 4px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 4px;
    }
  }
`;

const BidTableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.7fr 1fr 1.3fr 1fr;
  padding: 0.75rem;
  font-size: 0.75rem;
  background-color: #2b3139;
  color: var(--color-text-secondary, #848e9c);
  font-weight: 500;
  
  @media (max-width: 768px) {
    display: none; /* Hide the header on mobile */
  }
`;

const StatusHeaderContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: help;
`;

const InfoIcon = styled.span`
  margin-left: 5px;
  font-size: 12px;
  color: #848e9c;
  cursor: help;
`;

const Tooltip = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #1e2329;
  color: #eaecef;
  padding: 10px 15px;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  width: 280px;
  z-index: 10;
  margin-top: 10px;
  font-size: 12px;
  line-height: 1.5;
  text-align: left;
  border: 1px solid #2a2f37;
  
  &:before {
    content: '';
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #2a2f37;
  }
`;

const StatusType = styled.span`
  color: ${props => {
    if (props.type === 'competitive') return '#0ecb81';
    if (props.type === 'at-risk') return '#f0b90b';
    return '#f6465d';
  }};
  font-weight: 500;
`;

const StatusRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  width: 100%;
`;

const FillProgressContainer = styled.div`
  width: 80px;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 4px;
`;

const FillProgressBar = styled.div`
  height: 100%;
  border-radius: 2px;
  background-color: ${props => {
    if (props.status === 'competitive') return '#0ecb81';
    if (props.status === 'at-risk') return '#f0b90b';
    return '#f6465d';
  }};
  width: ${props => `${props.fillPercentage}%`};
  transition: width 0.5s ease-out;
`;

const BidTableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.7fr 1fr 1.3fr 1fr;
  padding: 0.75rem;
  border-bottom: 1px solid var(--color-border, #2a2f37);
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-areas:
      "price action"
      "tokens tokens"
      "total status";
    padding: 0.75rem;
    margin-bottom: 0.5rem;
    border-radius: 4px;
    background-color: #1a1d24;
    border: 1px solid rgba(255, 255, 255, 0.05);
    gap: 0.5rem;
  }
`;

const BidTableCell = styled.div`
  font-size: 0.875rem;
  color: var(--color-text, #eaecef);
  display: flex;
  align-items: center;
  
  &.status {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  
  &.price {
    color: var(--color-accent, #f0b90b);
  }
  
  &.status {
    color: ${props => {
      if (props.statusType === 'competitive') return '#0ecb81';
      if (props.statusType === 'at-risk') return '#f0b90b'; // Yellow
      return '#f6465d'; // Red for outbid
    }};
  }
  
  @media (max-width: 768px) {
    margin-bottom: 0;
    font-size: 0.8125rem;
    
    &:before {
      content: attr(data-label);
      font-size: 0.75rem;
      color: var(--color-text-secondary, #848e9c);
      margin-right: 0.5rem;
    }
    
    &.status-cell:before {
      content: none; /* Remove the Status label in mobile view */
    }
    
    &.price-cell {
      grid-area: price;
    }
    
    &.tokens-cell {
      grid-area: tokens;
    }
    
    &.total-cell {
      grid-area: total;
    }
    
    &.status-cell {
      grid-area: status;
      padding: 0.25rem 0;
      justify-content: flex-end;
      text-align: right;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    
    &.action-cell {
      grid-area: action;
      justify-content: flex-end;
      margin: 0;
      padding: 0;
      border-top: none;
    }
  }
`;

const AmendButton = styled.button`
  background-color: transparent;
  border: 1px solid ${props => {
    if (props.status === 'outbid') return '#f6465d'; // Red
    if (props.status === 'at-risk') return '#f0b90b'; // Yellow - same as caution
    return '#0ecb81'; // Green
  }};
  color: ${props => {
    if (props.status === 'outbid') return '#f6465d'; // Red
    if (props.status === 'at-risk') return '#f0b90b'; // Yellow - same as caution
    return '#0ecb81'; // Green
  }};
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${props => {
      if (props.status === 'outbid') return 'rgba(246, 70, 93, 0.1)';
      if (props.status === 'at-risk') return 'rgba(240, 185, 11, 0.1)';
      return 'rgba(14, 203, 129, 0.1)';
    }};
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  @media (max-width: 768px) {
    padding: 0.25rem 0.75rem;
    font-size: 0.8125rem;
    width: auto;
  }
`;

// Helper function to determine bid status
const getBidStatus = (bidPrice, clearingPrice) => {
  if (bidPrice < clearingPrice) {
    return 'outbid';
  }
  
  // Calculate how much above clearing price the bid is
  const percentAbove = ((bidPrice - clearingPrice) / clearingPrice) * 100;
  
  // If less than 2% above clearing price, consider it "at risk"
  if (percentAbove < 2) {
    return 'at-risk';
  }
  
  return 'competitive';
};

// Helper function to generate bid status text
const getBidStatusText = (bidPrice, clearingPrice) => {
  if (!clearingPrice) return 'Pending';
  
  if (bidPrice < clearingPrice) {
    // Calculate percentage below clearing price
    const percentBelow = ((clearingPrice - bidPrice) / clearingPrice) * 100;
    return `Outbid (-${percentBelow.toFixed(1)}%)`;
  }
  
  // Calculate percentage above clearing price
  const percentAbove = ((bidPrice - clearingPrice) / clearingPrice) * 100;
  
  if (percentAbove < 2) {
    return `At Risk (+${percentAbove.toFixed(1)}%)`;
  }
  
  return `Competitive (+${percentAbove.toFixed(1)}%)`;
};

// Helper function to generate short bid status text (for mobile)
const getShortBidStatusText = (bidPrice, clearingPrice) => {
  if (!clearingPrice) return '';
  
  if (bidPrice < clearingPrice) {
    // Calculate percentage below clearing price
    const percentBelow = ((clearingPrice - bidPrice) / clearingPrice) * 100;
    return `(-${percentBelow.toFixed(1)}%)`;
  }
  
  // Calculate percentage above clearing price
  const percentAbove = ((bidPrice - clearingPrice) / clearingPrice) * 100;
  return `(+${percentAbove.toFixed(1)}%)`;
};

const ActiveBidsPanel = ({ userBids, clearingPrice, onAmendBid }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [fillPercentages, setFillPercentages] = useState({});
  // If there are no bids, don't render the panel
  if (!userBids || userBids.length === 0) {
    return null;
  }
  
  // Calculate and update fill percentages when clearing price changes or approaches bid prices
  useEffect(() => {
    const newFillPercentages = {};
    
    userBids.forEach(bid => {
      const status = getBidStatus(bid.price, clearingPrice);
      
      // For competitive and at-risk bids, start with 100% fill
      if (status === 'competitive' || status === 'at-risk') {
        // If the bid already has a fill percentage, keep it, otherwise set to 100%
        if (fillPercentages[bid.id] === undefined) {
          newFillPercentages[bid.id] = 100;
        } else {
          newFillPercentages[bid.id] = fillPercentages[bid.id];
        }
      } else {
        // For outbid bids, set to 0%
        newFillPercentages[bid.id] = 0;
      }
    });
    
    // Initialize fill percentages for new bids
    setFillPercentages(prev => {
      return {...prev, ...newFillPercentages};
    });
    
    // Simulate decreasing fill percentage when bid price equals or is close to clearing price
    const interval = setInterval(() => {
      setFillPercentages(prev => {
        const updated = {...prev};
        
        userBids.forEach(bid => {
          // Calculate the difference between bid price and clearing price
          const priceDiff = bid.price - clearingPrice;
          
          // Case 1: If clearing price is exactly equal to bid price
          // Start decreasing the fill bar incrementally
          if (priceDiff === 0) {
            if (updated[bid.id] > 0) {
              // Decrease by a small random amount (1-3%)
              const decreaseAmount = 1 + Math.random() * 2;
              updated[bid.id] = Math.max(0, updated[bid.id] - decreaseAmount);
            }
          }
          // Case 2: If clearing price is slightly above bid price (within 0.5%)
          // Decrease more rapidly but still incrementally
          else if (priceDiff > 0 && priceDiff < (clearingPrice * 0.005)) {
            if (updated[bid.id] > 0) {
              // Decrease more rapidly (3-8%)
              const decreaseAmount = 3 + Math.random() * 5;
              updated[bid.id] = Math.max(0, updated[bid.id] - decreaseAmount);
            }
          }
          // Case 3: If clearing price has jumped over bid price
          // Immediately set to 0
          else if (priceDiff < 0) {
            updated[bid.id] = 0;
          }
        });
        
        return updated;
      });
    }, 1000); // Update every second for smoother animation
    
    return () => clearInterval(interval);
  }, [userBids, clearingPrice, fillPercentages]);
  
  return (
    <PanelContainer>
      <UserBidsTitle>Your Active Bids</UserBidsTitle>
      <BidTable>
        <BidTableHeader>
          <div>Bid Price</div>
          <div>Tokens</div>
          <div>Total Bid</div>
          <StatusHeaderContainer 
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <div>Status</div>
            <InfoIcon title="Bid status information">ⓘ</InfoIcon>
            {showTooltip && (
              <Tooltip>
                <p><StatusType type="competitive">Competitive</StatusType>: Strong bid that will receive token allocation.</p>
                <p><StatusType type="at-risk">At Risk</StatusType>: At risk of being outbid and may need attention, but will still receive allocation if auction concludes now.</p>
                <p><StatusType type="outbid">Outbid</StatusType>: Below clearing price and will not receive allocation. Must be increased to participate. Funds automatically become available to increase bid or place new bids.</p>
              </Tooltip>
            )}
          </StatusHeaderContainer>
          <div>Action</div>
        </BidTableHeader>
        {[...userBids]
          .sort((a, b) => b.price - a.price) // Sort by bid price from highest to lowest
          .map((bid, index) => (
          <BidTableRow key={bid.id}>
            <BidTableCell className="price price-cell" data-label="Bid Price">${bid.price % 1 === 0 ? bid.price.toLocaleString() : bid.price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</BidTableCell>
            <BidTableCell className="tokens-cell" data-label="Tokens">{bid.tokenAmount % 1 === 0 ? bid.tokenAmount.toLocaleString() : bid.tokenAmount.toLocaleString(undefined, {maximumFractionDigits: 3})}</BidTableCell>
            <BidTableCell className="total-cell" data-label="Total Bid">${(bid.price * bid.tokenAmount) % 1 === 0 ? (bid.price * bid.tokenAmount).toLocaleString() : (bid.price * bid.tokenAmount).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</BidTableCell>
            <BidTableCell 
              className="status status-cell"
              statusType={getBidStatus(bid.price, clearingPrice)}
            >
              {getBidStatus(bid.price, clearingPrice) === 'competitive' ? (
                <>
                  <StatusRow>
                    <div>Competitive {getShortBidStatusText(bid.price, clearingPrice)}</div>
                  </StatusRow>
                  <FillProgressContainer>
                    <FillProgressBar 
                      status="competitive" 
                      fillPercentage={fillPercentages[bid.id] || 100}
                    />
                  </FillProgressContainer>
                </>
              ) : (
                <>
                  <StatusRow>
                    <div>
                      {getBidStatus(bid.price, clearingPrice) === 'at-risk' ? 'At Risk' : 'Outbid'} {getShortBidStatusText(bid.price, clearingPrice)}
                    </div>
                  </StatusRow>
                  <FillProgressContainer>
                    <FillProgressBar 
                      status={getBidStatus(bid.price, clearingPrice)} 
                      fillPercentage={fillPercentages[bid.id] || (getBidStatus(bid.price, clearingPrice) === 'at-risk' ? 100 : 0)}
                    />
                  </FillProgressContainer>
                </>
              )}
            </BidTableCell>
            <BidTableCell className="action-cell">
              <AmendButton 
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  try {
                    onAmendBid(bid);
                  } catch (error) {
                    console.error('Error in AmendButton click:', error);
                  }
                }} 
                status={getBidStatus(bid.price, clearingPrice)}
              >
                {getBidStatus(bid.price, clearingPrice) === 'competitive' ? 'Amend' : 'Increase Bid'}
              </AmendButton>
            </BidTableCell>
          </BidTableRow>
        ))}
      </BidTable>
    </PanelContainer>
  );
};

export default ActiveBidsPanel;
