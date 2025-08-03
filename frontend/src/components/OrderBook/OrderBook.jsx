import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { orderService } from '../../services/api';
import { usePrice } from '../../context/PriceContext';

const OrderBookContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

const OrderBookHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const OrderBookTitle = styled.h3`
  margin: 0;
  font-size: 1.25rem;
`;

const OrderBookTabs = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const Tab = styled.button`
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

const OrderTable = styled.div`
  width: 100%;
`;

const OrderTableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--color-border);
  font-weight: 500;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`;

const OrderList = styled.div`
  max-height: 300px;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: var(--color-background);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-border);
    border-radius: 3px;
  }
`;

const OrderRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 0.875rem;
  
  &:last-child {
    border-bottom: none;
  }
`;

const PriceCell = styled.div`
  color: ${props => props.type === 'buy' ? 'var(--color-positive)' : 'var(--color-negative)'};
`;

const AmountCell = styled.div`
  color: var(--color-text);
`;

const TotalCell = styled.div`
  color: var(--color-text-secondary);
`;

const Spread = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  margin: 0.5rem 0;
`;

const SpreadLabel = styled.span`
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`;

const CurrentPriceDisplay = styled.span`
  color: ${props => props.isPositive ? 'var(--color-positive)' : 'var(--color-negative)'};
  font-weight: 600;
  font-size: 1.1rem;
  
  .decimal {
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

const OrderBook = ({ tokenId }) => {
  const [activeTab, setActiveTab] = useState('both');
  const [orderBook, setOrderBook] = useState({ buys: [], sells: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [spread, setSpread] = useState({ value: 0, percentage: 0 });
  const priceData = usePrice();
  
  useEffect(() => {
    fetchOrderBook();
  }, [tokenId]);
  
  const fetchOrderBook = async () => {
    setIsLoading(true);
    try {
      // In a real app, you would call the API
      // const response = await orderService.getOrderBook(tokenId);
      // const data = response.data;
      
      // For now, we'll use mock data
      const mockData = generateMockOrderBook();
      setOrderBook(mockData);
      
      // Calculate spread
      if (mockData.sells.length > 0 && mockData.buys.length > 0) {
        const lowestSell = mockData.sells[mockData.sells.length - 1].price;
        const highestBuy = mockData.buys[0].price;
        const spreadValue = lowestSell - highestBuy;
        const spreadPercentage = (spreadValue / lowestSell) * 100;
        
        setSpread({
          value: spreadValue.toFixed(2),
          percentage: spreadPercentage.toFixed(2)
        });
      }
      
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching order book:', error);
      setIsLoading(false);
    }
  };
  
  // Generate mock order book data
  const generateMockOrderBook = () => {
    const buys = [];
    const sells = [];
    const basePrice = 338517.07; // Base price matching the chart
    const maxPriceDiff = 1500; // Smaller relative price differences for property
    
    // Generate buy orders (sorted by price descending)
    for (let i = 0; i < 15; i++) {
      // Much smaller price differences to reduce spread
      const priceDiff = (Math.random() * maxPriceDiff * i) / 15;
      const price = basePrice - priceDiff;
      // Smaller token amounts for property (fractional ownership)
      const amount = Math.round((0.01 + Math.random() * 0.3) * 100) / 100;
      buys.push({
        id: `buy-${i}`,
        price: price.toFixed(2),
        amount: amount.toFixed(2),
        total: (price * amount).toFixed(2),
        type: 'buy'
      });
    }
    
    // Generate sell orders (sorted by price ascending)
    for (let i = 0; i < 15; i++) {
      // Much smaller price differences to reduce spread
      const priceDiff = (Math.random() * maxPriceDiff * i) / 15;
      const price = basePrice + priceDiff;
      // Smaller token amounts for property (fractional ownership)
      const amount = Math.round((0.01 + Math.random() * 0.3) * 100) / 100;
      sells.push({
        id: `sell-${i}`,
        price: price.toFixed(2),
        amount: amount.toFixed(2),
        total: (price * amount).toFixed(2),
        type: 'sell'
      });
    }
    
    // Sort buy orders by price descending
    buys.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    
    // Sort sell orders by price ascending
    sells.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    
    return { buys, sells };
  };
  
  // Determine which orders to display based on active tab
  const getDisplayedOrders = () => {
    if (activeTab === 'buy') {
      return { buys: orderBook.buys, sells: [] };
    } else if (activeTab === 'sell') {
      return { buys: [], sells: orderBook.sells };
    } else {
      return orderBook;
    }
  };
  
  const displayedOrders = getDisplayedOrders();
  
  return (
    <OrderBookContainer>
      <OrderBookHeader>
        <OrderBookTitle>Order Book</OrderBookTitle>
        <OrderBookTabs>
          <Tab 
            active={activeTab === 'both'} 
            onClick={() => setActiveTab('both')}
          >
            All
          </Tab>
          <Tab 
            active={activeTab === 'buy'} 
            onClick={() => setActiveTab('buy')}
          >
            Buys
          </Tab>
          <Tab 
            active={activeTab === 'sell'} 
            onClick={() => setActiveTab('sell')}
          >
            Sells
          </Tab>
        </OrderBookTabs>
      </OrderBookHeader>
      
      <OrderTable>
        {isLoading ? (
          <div>Loading order book...</div>
        ) : (
          <>
            {/* Sell orders (displayed in reverse order) */}
            {displayedOrders.sells.length > 0 && (
              <>
                <OrderTableHeader>
                  <div>Price ($)</div>
                  <div>Amount</div>
                  <div>Total ($)</div>
                </OrderTableHeader>
                <OrderList>
                  {[...displayedOrders.sells].reverse().map(order => (
                    <OrderRow key={order.id}>
                      <PriceCell type="sell">{order.price}</PriceCell>
                      <AmountCell>{order.amount}</AmountCell>
                      <TotalCell>{order.total}</TotalCell>
                    </OrderRow>
                  ))}
                </OrderList>
              </>
            )}
            
            {/* Current price display (like Binance) */}
            {displayedOrders.buys.length > 0 && displayedOrders.sells.length > 0 && (
              <Spread>
                <CurrentPriceDisplay isPositive={priceData.change.isPositive}>
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
                </CurrentPriceDisplay>
              </Spread>
            )}
            
            {/* Buy orders */}
            {displayedOrders.buys.length > 0 && (
              <>
                <OrderTableHeader>
                  <div>Price ($)</div>
                  <div>Amount</div>
                  <div>Total ($)</div>
                </OrderTableHeader>
                <OrderList>
                  {displayedOrders.buys.map(order => (
                    <OrderRow key={order.id}>
                      <PriceCell type="buy">{order.price}</PriceCell>
                      <AmountCell>{order.amount}</AmountCell>
                      <TotalCell>{order.total}</TotalCell>
                    </OrderRow>
                  ))}
                </OrderList>
              </>
            )}
          </>
        )}
      </OrderTable>
    </OrderBookContainer>
  );
};

export default OrderBook;
