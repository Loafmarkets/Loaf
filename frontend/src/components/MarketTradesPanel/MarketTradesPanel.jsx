import React, { useState } from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';

const MarketTradesPanelContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-top: 2rem;
`;

const TradesTabContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

const TradesTab = styled.div`
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  cursor: pointer;
  color: ${props => props.active ? 'var(--color-text)' : 'var(--color-text-secondary)'};
  font-weight: ${props => props.active ? '600' : '400'};
  border-bottom: 2px solid ${props => props.active ? 'var(--color-accent)' : 'transparent'};
  
  &:hover {
    color: ${props => !props.active && 'var(--color-accent)'};
  }
`;

const TradesList = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;

const TradesHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.75rem;
  color: var(--color-text-secondary);
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const HeaderItem = styled.div`
  text-align: ${props => props.align || 'left'};
`;

const TradeItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  font-size: 0.875rem;
  
  &:last-child {
    border-bottom: none;
  }
`;

const TradePrice = styled.div`
  color: ${props => props.type === 'buy' ? '#0ecb81' : '#f6465d'};
  font-weight: 500;
`;

const TradeAmount = styled.div`
  font-weight: 500;
  text-align: center;
`;

const TradeTime = styled.div`
  color: var(--color-text-secondary);
  font-size: 0.75rem;
  text-align: right;
`;

const MarketTradesPanel = ({ token }) => {
  const [activeTab, setActiveTab] = useState('market'); // 'market' or 'my'
  
  // Mock market trades data for 20A Vaucluse Road property
  const marketTrades = [
    { id: 1, type: 'buy', amount: '0.03000', price: '338,517.07', timestamp: new Date(2025, 5, 20, 3, 14, 47) },
    { id: 2, type: 'buy', amount: '0.00103', price: '338,510.25', timestamp: new Date(2025, 5, 20, 3, 14, 46) },
    { id: 3, type: 'buy', amount: '0.00061', price: '338,505.17', timestamp: new Date(2025, 5, 20, 3, 14, 46) },
    { id: 4, type: 'sell', amount: '0.00050', price: '338,520.36', timestamp: new Date(2025, 5, 20, 3, 14, 46) },
    { id: 5, type: 'sell', amount: '0.00006', price: '338,525.18', timestamp: new Date(2025, 5, 20, 3, 14, 46) },
    { id: 6, type: 'buy', amount: '0.02254', price: '338,512.44', timestamp: new Date(2025, 5, 20, 3, 14, 46) },
    { id: 7, type: 'buy', amount: '0.00066', price: '338,508.75', timestamp: new Date(2025, 5, 20, 3, 14, 46) },
    { id: 8, type: 'buy', amount: '0.00043', price: '338,502.19', timestamp: new Date(2025, 5, 20, 3, 14, 45) },
    { id: 9, type: 'buy', amount: '0.00019', price: '338,498.32', timestamp: new Date(2025, 5, 20, 3, 14, 45) },
    { id: 10, type: 'buy', amount: '0.00193', price: '338,495.67', timestamp: new Date(2025, 5, 20, 3, 14, 45) },
    { id: 11, type: 'buy', amount: '0.01175', price: '338,490.28', timestamp: new Date(2025, 5, 20, 3, 14, 44) },
    { id: 12, type: 'sell', amount: '0.00300', price: '338,530.15', timestamp: new Date(2025, 5, 20, 3, 14, 44) },
    { id: 13, type: 'buy', amount: '0.00015', price: '338,485.92', timestamp: new Date(2025, 5, 20, 3, 14, 44) },
    { id: 14, type: 'buy', amount: '0.00092', price: '338,480.75', timestamp: new Date(2025, 5, 20, 3, 14, 43) },
    { id: 15, type: 'buy', amount: '0.00676', price: '338,475.33', timestamp: new Date(2025, 5, 20, 3, 14, 43) },
    { id: 16, type: 'buy', amount: '0.00010', price: '338,470.18', timestamp: new Date(2025, 5, 20, 3, 14, 43) },
    { id: 17, type: 'buy', amount: '0.00092', price: '338,465.44', timestamp: new Date(2025, 5, 20, 3, 14, 42) },
    { id: 18, type: 'buy', amount: '0.00064', price: '338,460.27', timestamp: new Date(2025, 5, 20, 3, 14, 42) },
    { id: 19, type: 'sell', amount: '0.00022', price: '338,535.22', timestamp: new Date(2025, 5, 20, 3, 14, 42) },
    { id: 20, type: 'buy', amount: '0.26787', price: '338,455.80', timestamp: new Date(2025, 5, 20, 3, 14, 41) },
  ];
  
  // Mock my trades data for 20A Vaucluse Road property
  const myTrades = [
    { id: 101, type: 'buy', amount: '0.15', price: '335,250.00', timestamp: new Date(2025, 5, 19, 10, 15, 30) },
    { id: 102, type: 'buy', amount: '0.075', price: '332,100.00', timestamp: new Date(2025, 5, 18, 16, 45, 12) },
    { id: 103, type: 'sell', amount: '0.025', price: '336,800.00', timestamp: new Date(2025, 5, 17, 11, 22, 45) },
    { id: 104, type: 'buy', amount: '0.10', price: '330,500.00', timestamp: new Date(2025, 5, 15, 9, 30, 20) },
  ];
  
  return (
    <MarketTradesPanelContainer>
      <TradesTabContainer>
        <TradesTab 
          active={activeTab === 'market'}
          onClick={() => setActiveTab('market')}
        >
          Market Trades
        </TradesTab>
        <TradesTab 
          active={activeTab === 'my'}
          onClick={() => setActiveTab('my')}
        >
          My Trades
        </TradesTab>
      </TradesTabContainer>
      
      <TradesHeader>
        <HeaderItem>Price (USDT)</HeaderItem>
        <HeaderItem><p class="sc-fHHfTq iBukra">Property currently in IPO - Allocation given on first come first serve bases</p></HeaderItem>
        <HeaderItem align="right">Time</HeaderItem>
      </TradesHeader>
      
      <TradesList>
        {activeTab === 'market' ? (
          marketTrades.map(trade => (
            <TradeItem key={trade.id}>
              <TradePrice type={trade.type}>
                ${trade.price}
              </TradePrice>
              <TradeAmount>{trade.amount}</TradeAmount>
              <TradeTime>{format(trade.timestamp, 'HH:mm:ss')}</TradeTime>
            </TradeItem>
          ))
        ) : (
          myTrades.map(trade => (
            <TradeItem key={trade.id}>
              <TradePrice type={trade.type}>
                ${trade.price}
              </TradePrice>
              <TradeAmount>{trade.amount}</TradeAmount>
              <TradeTime>{format(trade.timestamp, 'MM/dd/yyyy HH:mm')}</TradeTime>
            </TradeItem>
          ))
        )}
      </TradesList>
    </MarketTradesPanelContainer>
  );
};

export default MarketTradesPanel;
