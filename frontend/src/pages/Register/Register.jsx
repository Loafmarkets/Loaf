import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../context/AuthContext';

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px);
  padding: 2rem;
  width: 100%;
`;

const RegisterCard = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 2.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`;

const RegisterHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const RegisterTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const RegisterSubtitle = styled.p`
  color: var(--color-text-secondary);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
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

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  color: var(--color-text-secondary);
  font-size: 0.875rem;
  cursor: pointer;
  
  a {
    color: var(--color-accent);
    margin-left: 0.25rem;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const validateForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('All fields are required');
      return false;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return false;
    }
    
    if (!formData.agreeToTerms) {
      setError('You must agree to the Terms of Service and Privacy Policy');
      return false;
    }
    
    return true;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    try {
      const result = await register({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password
      });
      
      if (result.success) {
        navigate('/');
      } else {
        setError(result.error || 'Registration failed');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error('Registration error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <RegisterContainer>
      <RegisterCard>
        <RegisterHeader>
          <RegisterTitle>Create an account</RegisterTitle>
          <RegisterSubtitle>Join LOAF to start investing in tokenized real estate</RegisterSubtitle>
        </RegisterHeader>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        <Form onSubmit={handleSubmit}>
          <FormRow>
            <FormGroup>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
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
                placeholder="Enter your last name"
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
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
            />
          </FormGroup>
          
          <FormGroup>
            <CheckboxLabel>
              <Checkbox
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
              />
              I agree to the
              <Link to="/terms">Terms of Service</Link>
              and
              <Link to="/privacy">Privacy Policy</Link>
            </CheckboxLabel>
          </FormGroup>
          
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Creating account...' : 'Create Account'}
          </Button>
        </Form>
        
        <FooterText>
          Already have an account? <Link to="/login">Sign in</Link>
        </FooterText>
      </RegisterCard>
    </RegisterContainer>
  );
};

export default Register;
