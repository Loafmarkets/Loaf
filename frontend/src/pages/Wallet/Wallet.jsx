import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../context/AuthContext';

const WalletContainer = styled.div`
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

const WalletCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const WalletCard = styled.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 1.5rem;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 500;
`;

const CardValue = styled.div`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const CardActions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${props => props.secondary ? 'transparent' : 'var(--color-accent)'};
  color: ${props => props.secondary ? 'var(--color-accent)' : 'var(--color-background)'};
  border: ${props => props.secondary ? '1px solid var(--color-accent)' : 'none'};
  border-radius: var(--border-radius);
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.secondary ? 'rgba(230, 200, 126, 0.1)' : 'var(--color-accent-hover)'};
  }
`;

const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 1.5rem;
`;

const Tab = styled.button`
  padding: 1rem 1.5rem;
  background: transparent;
  border: none;
  border-bottom: 2px solid ${props => props.active ? 'var(--color-accent)' : 'transparent'};
  color: ${props => props.active ? 'var(--color-accent)' : 'var(--color-text)'};
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    color: var(--color-accent);
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: var(--color-text-secondary);
`;

const Wallet = () => {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState('transactions');
  const [walletData, setWalletData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    fetchWalletData();
  }, []);
  
  const fetchWalletData = async () => {
    setIsLoading(true);
    try {
      // In a real app, you would call the API
      // const response = await walletService.getWallet();
      // setWalletData(response.data);
      
      // For now, we'll use mock data
      const mockWalletData = {
        balance: 15000.00,
        pendingDeposits: 2500.00,
        pendingWithdrawals: 0,
        transactions: [
          {
            id: 1,
            type: 'deposit',
            amount: 5000.00,
            status: 'completed',
            date: '2025-06-15T14:32:21Z'
          },
          {
            id: 2,
            type: 'withdrawal',
            amount: 1000.00,
            status: 'completed',
            date: '2025-06-10T09:45:17Z'
          },
          {
            id: 3,
            type: 'deposit',
            amount: 2500.00,
            status: 'pending',
            date: '2025-06-18T16:21:05Z'
          }
        ]
      };
      
      setWalletData(mockWalletData);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching wallet data:', error);
      setIsLoading(false);
    }
  };
  
  if (isLoading) {
    return <div className="container">Loading wallet...</div>;
  }
  
  if (!currentUser) {
    return (
      <WalletContainer className="container">
        <EmptyState>
          <h2>Please log in to view your wallet</h2>
          <p>You need to be logged in to access your wallet information.</p>
          <Button as={Link} to="/login">Log In</Button>
        </EmptyState>
      </WalletContainer>
    );
  }
  
  return (
    <WalletContainer className="container">
      <PageHeader>
        <PageTitle>My Wallet</PageTitle>
        <PageDescription>
          Manage your funds, make deposits and withdrawals
        </PageDescription>
      </PageHeader>
      
      <WalletCards>
        <WalletCard>
          <CardHeader>
            <CardTitle>Available Balance</CardTitle>
          </CardHeader>
          <CardValue>${walletData.balance.toLocaleString()}</CardValue>
          <CardActions>
            <Button>Deposit</Button>
            <Button secondary>Withdraw</Button>
          </CardActions>
        </WalletCard>
        
        <WalletCard>
          <CardHeader>
            <CardTitle>Pending Deposits</CardTitle>
          </CardHeader>
          <CardValue>${walletData.pendingDeposits.toLocaleString()}</CardValue>
        </WalletCard>
        
        <WalletCard>
          <CardHeader>
            <CardTitle>Pending Withdrawals</CardTitle>
          </CardHeader>
          <CardValue>${walletData.pendingWithdrawals.toLocaleString()}</CardValue>
        </WalletCard>
      </WalletCards>
      
      <Tabs>
        <Tab 
          active={activeTab === 'transactions'} 
          onClick={() => setActiveTab('transactions')}
        >
          Transactions
        </Tab>
        <Tab 
          active={activeTab === 'deposits'} 
          onClick={() => setActiveTab('deposits')}
        >
          Deposits
        </Tab>
        <Tab 
          active={activeTab === 'withdrawals'} 
          onClick={() => setActiveTab('withdrawals')}
        >
          Withdrawals
        </Tab>
      </Tabs>
      
      {walletData.transactions.length === 0 ? (
        <EmptyState>
          <p>You don't have any transactions yet.</p>
        </EmptyState>
      ) : (
        <div>
          {/* Transaction history would be displayed here */}
          <p>Transaction history will be displayed here.</p>
        </div>
      )}
    </WalletContainer>
  );
};

export default Wallet;
