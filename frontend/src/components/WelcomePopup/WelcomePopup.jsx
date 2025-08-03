import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Check if icons exist, if not, create placeholder SVGs
const PlaceholderIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
          fill="#E6C656" stroke="#E6C656" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; transform: scale(0.8) translateY(50px) translateX(50px); }
`;

const slideUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const slideDown = keyframes`
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(20px); opacity: 0; }
`;

// Styled Components
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: ${props => props.isClosing ? 0 : 1};
  transition: opacity 0.3s ease-in-out;
  overflow: hidden;
  touch-action: none;
  animation: ${props => props.isClosing ? fadeOut : fadeIn} 0.3s ease-out;
  animation-fill-mode: forwards;
  padding: 20px 0;
  
  @media (max-width: 768px) {
    align-items: flex-start;
    padding: 20px 0 150px 0; /* Add significant padding at bottom for mobile */
  }
`;

const PopupContainer = styled.div`
  background-color: var(--color-background);
  border-radius: var(--border-radius);
  width: 90%;
  max-width: 650px;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(230, 198, 86, 0.3);
  animation: ${props => props.isClosing ? slideDown : slideUp} 0.3s ease-out;
  animation-fill-mode: forwards;
  padding: 2rem;
  padding-bottom: 3rem; /* Extra padding at bottom */
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem 4rem;
    margin-bottom: 3rem;
    border-bottom-width: 2px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
  height: 100px;
  align-items: center;
`;

const Logo = styled.img`
  height: 90px;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--color-text);
  
  span {
    color: var(--color-accent);
  }
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
`;

const ValuePropositions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ValueItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  
  svg, img {
    width: 100%;
    height: 100%;
    color: var(--color-accent);
  }
`;

const ValueTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
`;

const ValueDescription = styled.p`
  font-size: 0.9rem;
  color: var(--color-text-secondary);
`;

const DemoNotice = styled.div`
  background-color: rgba(230, 198, 86, 0.1);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 2.5rem;
  text-align: center;
  border: 1px solid rgba(230, 198, 86, 0.2);
  width: 100%;
  align-self: stretch;
`;

const DemoText = styled.p`
  font-size: 1rem;
  color: var(--color-text);
  margin: 0;
  
  span {
    color: var(--color-accent);
    font-weight: 600;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 1.5rem;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  flex: 1;
  
  &.primary {
    background-color: var(--color-accent);
    color: var(--color-background);
    border: none;
    
    &:hover {
      background-color: var(--color-accent-hover);
    }
  }
  
  &.secondary {
    background-color: transparent;
    border: 1px solid var(--color-accent);
    color: var(--color-accent);
    
    &:hover {
      background-color: rgba(230, 198, 86, 0.1);
    }
  }
`;

const SignupForm = styled.form`
  display: ${props => props.visible ? 'block' : 'none'};
  animation: ${fadeIn} 0.3s ease-out;
  width: 100%;
  margin-bottom: 1rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--color-border);
  background-color: var(--color-background-light);
  color: var(--color-text);
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent);
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
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  cursor: pointer;
`;

const SelectContainer = styled.div`
  margin-bottom: 1rem;
  position: relative;
  overflow: visible;
`;

const SelectLabel = styled.label`
  display: block;
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border-radius: var(--border-radius);
  border: 1px solid var(--color-border);
  background-color: var(--color-background-light);
  color: var(--color-text);
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
`;

const TooltipIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: var(--color-text-secondary);
  color: var(--color-background);
  font-size: 12px;
  margin-left: 8px;
  cursor: help;
  position: relative;
  
  &:hover > div {
    display: block;
  }
`;

const TooltipContent = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: calc(100% + 10px);
  width: 280px;
  padding: 10px;
  background-color: #1A1A1A;
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
  font-size: 0.85rem;
  color: var(--color-text);
  display: none;
  overflow-x: visible;
`;

const TooltipList = styled.ul`
  margin: 0.5rem 0 0 0;
  padding-left: 1.5rem;
  
  li {
    margin-bottom: 0.5rem;
    white-space: normal;
    word-break: break-word;
  }
`;

const SuccessMessage = styled.div`
  color: #0ecb81;
  text-align: center;
  padding: 1rem;
  border-radius: var(--border-radius);
  background-color: rgba(14, 203, 129, 0.1);
  margin-top: 1rem;
  display: ${props => props.visible ? 'block' : 'none'};
  animation: ${fadeIn} 0.3s ease-out;
`;

const ErrorMessage = styled.div`
  color: #e74c3c;
  text-align: center;
  padding: 1rem;
  border-radius: var(--border-radius);
  background-color: rgba(231, 76, 60, 0.1);
  margin-bottom: 1rem;
  animation: ${fadeIn} 0.3s ease-out;
`;

const SignupDescription = styled.div`
  color: var(--text-secondary);
  text-align: center;
  margin-bottom: 1.5rem;
  line-height: 1.5;
  font-size: 0.95rem;
  animation: ${fadeIn} 0.3s ease-out;
  display: ${props => props.visible ? 'block' : 'none'};
`;

const WelcomePopup = ({ onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [acceptMarketing, setAcceptMarketing] = useState(true);
  const [wholesaleInvestor, setWholesaleInvestor] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Prevent body scrolling when popup is open
  React.useEffect(() => {
    // Save the original styles
    const originalStyle = window.getComputedStyle(document.body);
    const originalOverflow = originalStyle.overflow;
    const originalPosition = originalStyle.position;
    const originalWidth = originalStyle.width;
    const originalTop = originalStyle.top;
    const originalScrollY = window.scrollY;
    
    // Apply strict scroll locking
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = `-${originalScrollY}px`;
    
    // Restore original styles on cleanup
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.position = originalPosition;
      document.body.style.width = originalWidth;
      document.body.style.top = originalTop;
      
      // Restore scroll position
      window.scrollTo(0, originalScrollY);
    };
  }, []);
  
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 250); // Slightly less than animation duration to ensure smooth transition
  };
  
  const handleTryDemo = () => {
    // Store in sessionStorage for this session
    sessionStorage.setItem('loafWelcomePopupSeenThisSession', 'true');
    handleClose();
  };
  
  const handleSignupClick = () => {
    setShowSignupForm(true);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset states
    setError('');
    setLoading(true);
    
    try {
      // For demo purposes, just show success without actual API call
      // Show success message
      setSubmitted(true);
      
      // Save to localStorage that user has seen the popup
      // Store in both localStorage (for permanent preference) and sessionStorage (for this session)
      localStorage.setItem('loafWelcomePopupSeen', 'true');
      sessionStorage.setItem('loafWelcomePopupSeenThisSession', 'true');
      
      // Clear form
      setEmail('');
      setName('');
      setWholesaleInvestor('');
    } catch (err) {
      console.error('Early access signup error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Overlay isClosing={isClosing}>
      <PopupContainer isClosing={isClosing}>
        <LogoContainer>
          <Logo src="/loaf-logo.png" alt="Loaf Logo" />
        </LogoContainer>
        
        <Title>Welcome to <span>Loaf</span></Title>
        <Subtitle>
          Where Australia's most prestious properties trade
        </Subtitle>
        
        <ValuePropositions>
          <ValueItem>
            <IconContainer>
              <img src="/icons/access-icon.svg" alt="Access Icon" />
            </IconContainer>
            <ValueTitle>Access.</ValueTitle>
            <ValueDescription>
              Invest in an exclusive class of blue-chip real estate assets
            </ValueDescription>
          </ValueItem>
          
          <ValueItem>
            <IconContainer>
              <img src="/icons/simplify-icon.svg" alt="Tradeability Icon" />
            </IconContainer>
            <ValueTitle>Tradeability.</ValueTitle>
            <ValueDescription>
              Pioneering true tradability in a traditionally illiquid asset.
            </ValueDescription>
          </ValueItem>
          
          <ValueItem>
            <IconContainer>
              <img src="/icons/credit-card-icon.svg" alt="Utility Icon" />
            </IconContainer>
            <ValueTitle>Utility.</ValueTitle>
            <ValueDescription>
              More than an investment. Powered by blockchain.
            </ValueDescription>
          </ValueItem>
        </ValuePropositions>
        
        <DemoNotice>
          <DemoText>
            You are viewing a <span>demo version</span> of the Loaf platform. 
            Experience how we're transforming property investment.
          </DemoText>
        </DemoNotice>
        
        <ButtonGroup>
          <Button className="primary" onClick={handleTryDemo}>
            Try Demo
          </Button>
          <Button className="secondary" onClick={handleSignupClick}>
            Exclusive Early Access
          </Button>
        </ButtonGroup>
        
        <SignupForm visible={showSignupForm} onSubmit={handleSubmit}>
          <SignupDescription visible={showSignupForm}>
            Join our waitlist to be invited for exclusive early access. Get exclusive access to presale opportunities and premium property viewings.
          </SignupDescription>
          {error && (
            <ErrorMessage>
              {error}
            </ErrorMessage>
          )}
          
          <FormGroup>
            <Input 
              type="text" 
              placeholder="Your name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Input 
              type="email" 
              placeholder="Your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormGroup>
          
          {name && email && (
            <SelectContainer>
              <SelectLabel>
                I or someone I am acting on behalf of am classified as a wholesale investor
                <TooltipIcon>?
                  <TooltipContent>
                    To qualify as a wholesale investor in Australia, you must either:
                    <TooltipList>
                      <li>Have a gross income of AUD 250,000 or more per annum for the last two years</li>
                      <li>Have net assets of at least AUD 2.5 million</li>
                      <li>Be a professional investor, such as a financial services licensee or someone who controls gross assets of AUD 10 million or more</li>
                    </TooltipList>
                  </TooltipContent>
                </TooltipIcon>
              </SelectLabel>
              <Select
                value={wholesaleInvestor}
                onChange={(e) => setWholesaleInvestor(e.target.value)}
                required
              >
                <option value="">Please select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Select>
            </SelectContainer>
          )}
          
          <CheckboxContainer>
            <Checkbox 
              type="checkbox" 
              id="marketing" 
              checked={acceptMarketing}
              onChange={(e) => setAcceptMarketing(e.target.checked)}
            />
            <CheckboxLabel htmlFor="marketing">
              I agree to receive updates about early access and exclusive property offerings
            </CheckboxLabel>
          </CheckboxContainer>
          
          <Button 
            className="primary" 
            type="submit" 
            style={{ width: '100%' }} 
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Sign Up'}
          </Button>
          
          <SuccessMessage visible={submitted}>
            Signed up
          </SuccessMessage>
        </SignupForm>
      </PopupContainer>
    </Overlay>
  );
};

export default WelcomePopup;
