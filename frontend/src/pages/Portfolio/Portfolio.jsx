import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../context/AuthContext';
import { walletService } from '../../services/api';
import PortfolioValueChart from '../../components/PortfolioValueChart/PortfolioValueChart';

const PortfolioContainer = styled.div`
  padding: 2rem 0;
  width: 100%;
`;

const PageHeader = styled.div`
  margin-bottom: 2rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const PageDescription = styled.p`
  color: var(--color-text-secondary);
  max-width: 600px;
`;

const SummaryCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SummaryCard = styled.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
`;

const CardValue = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const CardLabel = styled.div`
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  margin-top: 3rem;
`;

const TableContainer = styled.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  overflow: hidden;
  margin-bottom: 2rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: rgba(255, 255, 255, 0.05);
`;

const TableRow = styled.tr`
  border-bottom: 1px solid var(--color-border);
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.02);
  }
`;

const TableHeader = styled.th`
  padding: 1rem;
  text-align: left;
  font-weight: 500;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`;

const TableCell = styled.td`
  padding: 1rem;
  vertical-align: middle;
`;

const TokenInfo = styled.div`
  display: flex;
  align-items: center;
`;

const TokenImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
`;

const TokenName = styled.div`
  font-weight: 500;
`;

const TokenSymbol = styled.div`
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`;

const PriceChange = styled.div`
  color: ${props => props.isPositive ? 'var(--color-positive)' : 'var(--color-negative)'};
  font-weight: 500;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.25rem;
    width: 12px;
    height: 12px;
  }
`;

const ActionButton = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: var(--color-accent);
  color: var(--color-background);
  border-radius: var(--border-radius);
  font-weight: 500;
  text-align: center;
  
  &:hover {
    background-color: var(--color-accent-hover);
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: var(--color-text-secondary);
`;

const ChartContainer = styled.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

const ChartTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const ChartPlaceholder = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.02);
  border-radius: var(--border-radius);
  color: var(--color-text-secondary);
`;

const Portfolio = () => {
  const { currentUser } = useAuth();
  const [portfolio, setPortfolio] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetchPortfolio();
  }, []);
  
  const fetchPortfolio = async () => {
    setIsLoading(true);
    try {
      // In a real app, you would call the API
      // const response = await walletService.getPortfolio();
      // setPortfolio(response.data);
      
      // For now, we'll use mock data
      const mockPortfolio = generateMockPortfolio();
      setPortfolio(mockPortfolio);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching portfolio:', error);
      setIsLoading(false);
    }
  };
  
  // Generate mock portfolio data
  const generateMockPortfolio = () => {
    return {
      totalValue: 28750.42,
      totalProfit: 3245.18,
      profitPercentage: 12.72,
      tokenCount: 5,
      tokens: [
        {
          id: 1,
          symbol: "BUNYA",
          name: "Bunya Parade Token",
          propertyName: "14 Bunya Parade",
          propertyLocation: "South Coogee, Sydney",
          imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
          currentPrice: "215.00",
          priceChangePercent: "2.57",
          quantity: 50,
          value: 10750.00,
          profit: 1285.00,
          profitPercentage: 13.58
        },
        {
          id: 2,
          symbol: "HARB",
          name: "Harbour View Token",
          propertyName: "42 Harbour View",
          propertyLocation: "Circular Quay, Sydney",
          imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
          currentPrice: "325.75",
          priceChangePercent: "1.23",
          quantity: 25,
          value: 8143.75,
          profit: 768.75,
          profitPercentage: 10.42
        },
        {
          id: 3,
          symbol: "MOUNT",
          name: "Mountain Retreat Token",
          propertyName: "8 Mountain Retreat",
          propertyLocation: "Blue Mountains, NSW",
          imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
          currentPrice: "87.50",
          priceChangePercent: "-0.75",
          quantity: 30,
          value: 2625.00,
          profit: -60.00,
          profitPercentage: -2.24
        },
        {
          id: 4,
          symbol: "BONDI",
          name: "Bondi Beach Token",
          propertyName: "15 Beachfront Villa",
          propertyLocation: "Bondi Beach, Sydney",
          imageUrl: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
          currentPrice: "178.30",
          priceChangePercent: "3.42",
          quantity: 35,
          value: 6240.50,
          profit: 1190.50,
          profitPercentage: 23.58
        },
        {
          id: 7,
          symbol: "WINE",
          name: "Vineyard Estate Token",
          propertyName: "19 Vineyard Estate",
          propertyLocation: "Barossa Valley, SA",
          imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
          currentPrice: "210.40",
          priceChangePercent: "2.18",
          quantity: 5,
          value: 1052.00,
          profit: 60.00,
          profitPercentage: 6.05
        }
      ],
      recentTransactions: [
        {
          id: 1,
          type: "buy",
          tokenSymbol: "BUNYA",
          tokenName: "Bunya Parade Token",
          amount: 10,
          price: 210.50,
          total: 2105.00,
          date: "2025-06-15T14:32:21Z"
        },
        {
          id: 2,
          type: "sell",
          tokenSymbol: "MOUNT",
          tokenName: "Mountain Retreat Token",
          amount: 5,
          price: 88.20,
          total: 441.00,
          date: "2025-06-12T09:45:17Z"
        },
        {
          id: 3,
          type: "buy",
          tokenSymbol: "BONDI",
          tokenName: "Bondi Beach Token",
          amount: 15,
          price: 172.80,
          total: 2592.00,
          date: "2025-06-10T16:21:05Z"
        },
        {
          id: 4,
          type: "buy",
          tokenSymbol: "WINE",
          tokenName: "Vineyard Estate Token",
          amount: 5,
          price: 205.60,
          total: 1028.00,
          date: "2025-06-08T11:17:32Z"
        },
        {
          id: 5,
          type: "sell",
          tokenSymbol: "HARB",
          tokenName: "Harbour View Token",
          amount: 3,
          price: 320.25,
          total: 960.75,
          date: "2025-06-05T13:42:19Z"
        }
      ]
    };
  };
  
  if (isLoading) {
    return <div className="container">Loading portfolio...</div>;
  }
  
  if (!currentUser) {
    return (
      <PortfolioContainer className="container">
        <EmptyState>
          <h2>Please log in to view your portfolio</h2>
          <p>You need to be logged in to access your portfolio information.</p>
          <ActionButton to="/login">Log In</ActionButton>
        </EmptyState>
      </PortfolioContainer>
    );
  }
  
  return (
    <PortfolioContainer className="container">
      <PageHeader>
        <PageTitle>My Portfolio</PageTitle>
        <PageDescription>
          Track your property token investments and performance
        </PageDescription>
      </PageHeader>
      
      <SummaryCards>
        <SummaryCard>
          <CardValue>${portfolio.totalValue.toLocaleString()}</CardValue>
          <CardLabel>Total Value</CardLabel>
        </SummaryCard>
        <SummaryCard>
          <CardValue style={{ color: portfolio.profitPercentage >= 0 ? 'var(--color-positive)' : 'var(--color-negative)' }}>
            {portfolio.profitPercentage >= 0 ? '+' : ''}{portfolio.profitPercentage}%
          </CardValue>
          <CardLabel>Total Return</CardLabel>
        </SummaryCard>
        <SummaryCard>
          <CardValue style={{ color: portfolio.totalProfit >= 0 ? 'var(--color-positive)' : 'var(--color-negative)' }}>
            {portfolio.totalProfit >= 0 ? '+$' : '-$'}{Math.abs(portfolio.totalProfit).toLocaleString()}
          </CardValue>
          <CardLabel>Profit/Loss</CardLabel>
        </SummaryCard>
        <SummaryCard>
          <CardValue>{portfolio.tokenCount}</CardValue>
          <CardLabel>Properties</CardLabel>
        </SummaryCard>
      </SummaryCards>
      
      <ChartContainer>
        <PortfolioValueChart userId={currentUser?.id} />
      </ChartContainer>
      
      <SectionTitle>My Property Tokens</SectionTitle>
      
      {portfolio.tokens.length === 0 ? (
        <EmptyState>
          <p>You don't have any property tokens yet.</p>
          <ActionButton to="/market">Explore Market</ActionButton>
        </EmptyState>
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Property</TableHeader>
                <TableHeader>Price</TableHeader>
                <TableHeader>24h</TableHeader>
                <TableHeader>Quantity</TableHeader>
                <TableHeader>Value</TableHeader>
                <TableHeader>Profit/Loss</TableHeader>
                <TableHeader>Action</TableHeader>
              </TableRow>
            </TableHead>
            <tbody>
              {portfolio.tokens.map(token => {
                const isPriceChangePositive = parseFloat(token.priceChangePercent) >= 0;
                const isProfitPositive = token.profit >= 0;
                
                return (
                  <TableRow key={token.id}>
                    <TableCell>
                      <TokenInfo>
                        <TokenImage src={token.imageUrl} alt={token.name} />
                        <div>
                          <TokenName>{token.propertyName}</TokenName>
                          <TokenSymbol>{token.symbol}</TokenSymbol>
                        </div>
                      </TokenInfo>
                    </TableCell>
                    <TableCell>${token.currentPrice}</TableCell>
                    <TableCell>
                      <PriceChange isPositive={isPriceChangePositive}>
                        {isPriceChangePositive ? (
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7 14l5-5 5 5H7z" />
                          </svg>
                        ) : (
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7 10l5 5 5-5H7z" />
                          </svg>
                        )}
                        {isPriceChangePositive ? '+' : ''}{token.priceChangePercent}%
                      </PriceChange>
                    </TableCell>
                    <TableCell>{token.quantity}</TableCell>
                    <TableCell>${token.value.toLocaleString()}</TableCell>
                    <TableCell>
                      <PriceChange isPositive={isProfitPositive}>
                        {isProfitPositive ? '+$' : '-$'}{Math.abs(token.profit).toLocaleString()} ({isProfitPositive ? '+' : ''}{token.profitPercentage}%)
                      </PriceChange>
                    </TableCell>
                    <TableCell>
                      <ActionButton to={`/property-new/${token.id}/trade`}>Trade</ActionButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </tbody>
          </Table>
        </TableContainer>
      )}
      
      <SectionTitle>Recent Transactions</SectionTitle>
      
      {portfolio.recentTransactions.length === 0 ? (
        <EmptyState>
          <p>You don't have any transactions yet.</p>
        </EmptyState>
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Type</TableHeader>
                <TableHeader>Token</TableHeader>
                <TableHeader>Amount</TableHeader>
                <TableHeader>Price</TableHeader>
                <TableHeader>Total</TableHeader>
                <TableHeader>Date</TableHeader>
              </TableRow>
            </TableHead>
            <tbody>
              {portfolio.recentTransactions.map(transaction => {
                const isBuy = transaction.type === 'buy';
                const date = new Date(transaction.date);
                
                return (
                  <TableRow key={transaction.id}>
                    <TableCell>
                      <PriceChange isPositive={isBuy}>
                        {isBuy ? 'Buy' : 'Sell'}
                      </PriceChange>
                    </TableCell>
                    <TableCell>
                      <div>
                        <TokenName>{transaction.tokenName}</TokenName>
                        <TokenSymbol>{transaction.tokenSymbol}</TokenSymbol>
                      </div>
                    </TableCell>
                    <TableCell>{transaction.amount}</TableCell>
                    <TableCell>${transaction.price.toFixed(2)}</TableCell>
                    <TableCell>${transaction.total.toLocaleString()}</TableCell>
                    <TableCell>{date.toLocaleDateString()} {date.toLocaleTimeString()}</TableCell>
                  </TableRow>
                );
              })}
            </tbody>
          </Table>
        </TableContainer>
      )}
    </PortfolioContainer>
  );
};

export default Portfolio;
