import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../context/AuthContext';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px);
  padding: 2rem;
  width: 100%;
`;

const LoginCard = styled.div`
  width: 100%;
  max-width: 450px;
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 2.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`;

const LoginHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const LoginTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const LoginSubtitle = styled.p`
  color: var(--color-text-secondary);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  color: var(--color-text);
  font-size: 1rem;
  transition: border-color var(--transition-speed) ease;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
  
  &::placeholder {
    color: var(--color-text-secondary);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: var(--color-accent);
  color: var(--color-background);
  border: none;
  border-radius: var(--border-radius);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color var(--transition-speed) ease;
  
  &:hover {
    background-color: var(--color-accent-hover);
  }
  
  &:disabled {
    background-color: var(--color-border);
    color: var(--color-text-secondary);
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: var(--color-negative);
  background-color: rgba(255, 87, 87, 0.1);
  border-radius: var(--border-radius);
  padding: 0.75rem 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
`;

const FooterText = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  
  a {
    color: var(--color-accent);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the redirect path from location state or default to home
  const from = location.state?.from?.pathname || '/';
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    try {
      const result = await login(email, password);
      
      if (result.success) {
        // Redirect to the page the user was trying to access, or home
        navigate(from, { replace: true });
      } else {
        setError(result.error || 'Invalid email or password');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error('Login error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <LoginContainer>
      <LoginCard>
        <LoginHeader>
          <LoginTitle>Welcome back</LoginTitle>
          <LoginSubtitle>Sign in to access your LOAF account</LoginSubtitle>
        </LoginHeader>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </FormGroup>
          
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Signing in...' : 'Sign In'}
          </Button>
        </Form>
        
        <FooterText>
          Don't have an account? <Link to="/register">Sign up</Link>
        </FooterText>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
