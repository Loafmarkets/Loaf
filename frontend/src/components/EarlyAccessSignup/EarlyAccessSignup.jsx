import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 100;
  animation: ${fadeIn} 0.5s ease-out;
`;

const FloatingButton = styled.button`
  background-color: var(--color-accent);
  color: var(--color-background);
  border: none;
  border-radius: 50px;
  padding: 12px 20px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;
  
  &:hover {
    background-color: var(--color-accent-hover);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
  
  svg {
    margin-right: 8px;
  }
`;

const FormContainer = styled.div`
  position: absolute;
  bottom: 60px;
  right: 0;
  background-color: var(--color-background);
  border-radius: 12px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(230, 198, 86, 0.3);
  animation: ${fadeIn} 0.3s ease-out;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    right: 20px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid var(--color-background);
  }
`;

const Title = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: var(--color-text);
  
  span {
    color: var(--color-accent);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: var(--border-radius);
  border: 1px solid var(--color-border);
  background-color: var(--color-background-light);
  color: var(--color-text);
  font-size: 0.9rem;
  margin-bottom: 10px;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: var(--border-radius);
  background-color: var(--color-accent);
  color: var(--color-background);
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: var(--color-accent-hover);
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  font-size: 0.8rem;
  color: var(--color-text-secondary);
  cursor: pointer;
`;

const SuccessMessage = styled.div`
  color: #0ecb81;
  text-align: center;
  padding: 0.5rem;
  font-size: 0.9rem;
`;

const EarlyAccessSignup = ({ onButtonClick }) => {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState('');
  const [acceptMarketing, setAcceptMarketing] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const toggleForm = () => {
    setShowForm(!showForm);
    if (submitted) setSubmitted(false);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email);
    console.log('Marketing accepted:', acceptMarketing);
    
    // For demo, just show success message
    setSubmitted(true);
    setEmail('');
    setAcceptMarketing(false);
    
    // In a real implementation, you would send this to your backend
    // and handle success/error states
  };
  
  return (
    <Container>
      {showForm && (
        <FormContainer>
          {!submitted ? (
            <>
              <Title>Get <span>Early Access</span></Title>
              <form onSubmit={handleSubmit}>
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                
                <CheckboxContainer>
                  <Checkbox 
                    type="checkbox" 
                    id="marketing-floating" 
                    checked={acceptMarketing}
                    onChange={(e) => setAcceptMarketing(e.target.checked)}
                  />
                  <CheckboxLabel htmlFor="marketing-floating">
                    I agree to receive updates about early access
                  </CheckboxLabel>
                </CheckboxContainer>
                
                <SubmitButton type="submit">
                  Sign Up
                </SubmitButton>
              </form>
            </>
          ) : (
            <SuccessMessage>
              Thank you! We'll notify you when early access becomes available.
            </SuccessMessage>
          )}
        </FormContainer>
      )}
      
      <FloatingButton onClick={onButtonClick || toggleForm}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
        </svg>
        Get Early Access
      </FloatingButton>
    </Container>
  );
};

export default EarlyAccessSignup;
