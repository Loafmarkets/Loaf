import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../context/AuthContext';
import PortfolioValueChart from '../../components/PortfolioValueChart/PortfolioValueChart';

const ProfileContainer = styled.div`
  padding: 2rem 0;
  width: 100%;
`;

const DashboardSection = styled.div`
  margin-bottom: 2rem;
`;

const ChartContainer = styled.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  margin-bottom: 2rem;
  width: 100%;
  height: 450px;
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

const ProfileCard = styled.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 2rem;
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  color: var(--color-text);
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: var(--color-accent);
  color: var(--color-background);
  border: none;
  border-radius: var(--border-radius);
  font-weight: 500;
  cursor: pointer;
  align-self: flex-start;
  margin-top: 1rem;
  
  &:hover {
    background-color: var(--color-accent-hover);
  }
  
  &:disabled {
    background-color: var(--color-border);
    color: var(--color-text-secondary);
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  color: var(--color-positive);
  background-color: rgba(39, 174, 96, 0.1);
  border-radius: var(--border-radius);
  padding: 1rem;
  margin-bottom: 1.5rem;
`;

const ErrorMessage = styled.div`
  color: var(--color-negative);
  background-color: rgba(255, 87, 87, 0.1);
  border-radius: var(--border-radius);
  padding: 1rem;
  margin-bottom: 1.5rem;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  color: var(--color-text-secondary);
`;

const Profile = () => {
  const { currentUser, updateProfile, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const [formData, setFormData] = useState({
    firstName: currentUser?.firstName || '',
    lastName: currentUser?.lastName || '',
    email: currentUser?.email || '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');
    
    try {
      const result = await updateProfile({
        firstName: formData.firstName,
        lastName: formData.lastName
      });
      
      if (result.success) {
        setSuccessMessage('Profile updated successfully');
      } else {
        setErrorMessage(result.error || 'Failed to update profile');
      }
    } catch (err) {
      setErrorMessage('An unexpected error occurred');
      console.error('Profile update error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    
    if (formData.newPassword !== formData.confirmPassword) {
      setErrorMessage('New passwords do not match');
      return;
    }
    
    if (formData.newPassword.length < 8) {
      setErrorMessage('New password must be at least 8 characters long');
      return;
    }
    
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');
    
    try {
      // In a real app, you would call the API
      // const result = await authService.updatePassword({
      //   currentPassword: formData.currentPassword,
      //   newPassword: formData.newPassword
      // });
      
      // For now, we'll simulate a successful password update
      const result = { success: true };
      
      if (result.success) {
        setSuccessMessage('Password updated successfully');
        setFormData(prev => ({
          ...prev,
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        }));
      } else {
        setErrorMessage(result.error || 'Failed to update password');
      }
    } catch (err) {
      setErrorMessage('An unexpected error occurred');
      console.error('Password update error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (!currentUser) {
    return (
      <ProfileContainer className="container">
        <EmptyState>
          <h2>Please log in to view your profile</h2>
          <p>You need to be logged in to access your profile information.</p>
        </EmptyState>
      </ProfileContainer>
    );
  }
  
  return (
    <ProfileContainer className="container">
      <PageHeader>
        <PageTitle>My Profile</PageTitle>
        <PageDescription>
          View and update your account information
        </PageDescription>
      </PageHeader>
      
      <DashboardSection>
        <ChartContainer>
          <PortfolioValueChart userId={currentUser?.id} />
        </ChartContainer>
      </DashboardSection>
      
      <ProfileCard>
        <Tabs>
          <Tab 
            active={activeTab === 'profile'} 
            onClick={() => setActiveTab('profile')}
          >
            Profile Information
          </Tab>
          <Tab 
            active={activeTab === 'security'} 
            onClick={() => setActiveTab('security')}
          >
            Security
          </Tab>
        </Tabs>
        
        {activeTab === 'profile' && (
          <>
            {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            
            <Form onSubmit={handleProfileUpdate}>
              <FormRow>
                <FormGroup>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </FormRow>
              
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  disabled
                />
              </FormGroup>
              
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Updating...' : 'Update Profile'}
              </Button>
            </Form>
          </>
        )}
        
        {activeTab === 'security' && (
          <>
            {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            
            <Form onSubmit={handlePasswordUpdate}>
              <FormGroup>
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input
                  id="currentPassword"
                  name="currentPassword"
                  type="password"
                  value={formData.currentPassword}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="newPassword">New Password</Label>
                <Input
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  value={formData.newPassword}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Updating...' : 'Update Password'}
              </Button>
            </Form>
          </>
        )}
      </ProfileCard>
    </ProfileContainer>
  );
};

export default Profile;
