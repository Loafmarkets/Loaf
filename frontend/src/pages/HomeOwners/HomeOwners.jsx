import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeOwnersContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  color: var(--color-text);
`;

const Hero = styled.div`
  background: linear-gradient(135deg, #1a2030 0%, #0a101f 100%);
  border-radius: 12px;
  padding: 3rem 2rem;
  margin-bottom: 3rem;
  text-align: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(90deg, #f0b90b, #f8d33a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto 2rem;
    color: #eaecef;
    line-height: 1.6;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  background: linear-gradient(90deg, #f0b90b, #f8d33a);
  color: #000;
  font-weight: 600;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(240, 185, 11, 0.3);
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #f0b90b;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const RequirementsList = styled.ul`
  list-style-type: none;
  padding: 0;
  
  li {
    background-color: rgba(26, 32, 48, 0.8);
    margin-bottom: 1rem;
    padding: 1.2rem;
    border-radius: 8px;
    border-left: 4px solid #f0b90b;
    display: flex;
    align-items: flex-start;
    
    svg {
      margin-right: 1rem;
      min-width: 24px;
      color: #f0b90b;
    }
    
    div {
      h3 {
        margin: 0 0 0.5rem;
        font-size: 1.2rem;
      }
      
      p {
        margin: 0;
        color: #b7bdc6;
        line-height: 1.5;
      }
    }
  }
`;

const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  
  .step {
    background-color: rgba(26, 32, 48, 0.8);
    border-radius: 8px;
    padding: 1.5rem;
    position: relative;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    
    .step-number {
      position: absolute;
      top: -15px;
      left: 50%;
      transform: translateX(-50%);
      background: #f0b90b;
      color: #000;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }
    
    h3 {
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      text-align: center;
      font-size: 1.2rem;
    }
    
    p {
      color: #b7bdc6;
      line-height: 1.5;
      margin: 0;
    }
  }
`;

const FAQSection = styled.div`
  .faq-item {
    background-color: rgba(26, 32, 48, 0.8);
    border-radius: 8px;
    margin-bottom: 1rem;
    overflow: hidden;
    
    .faq-question {
      padding: 1.2rem;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: 600;
      
      &:hover {
        background-color: rgba(240, 185, 11, 0.1);
      }
    }
    
    .faq-answer {
      padding: 0 1.2rem 1.2rem;
      color: #b7bdc6;
      line-height: 1.5;
    }
  }
`;

const ContactSection = styled.div`
  background-color: rgba(26, 32, 48, 0.8);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  
  h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  
  p {
    margin-bottom: 1.5rem;
    color: #b7bdc6;
  }
`;

const HomeOwners = () => {
  return (
    <HomeOwnersContainer>
      <Hero>
        <h1>List Your Property on LOAF</h1>
        <p>
          Turn your property into a tradable digital asset. Unlock new opportunities for 
          property ownership, investment, and liquidity with LOAF's innovative tokenization platform.
        </p>
        <Button to="/contact">Get Started</Button>
      </Hero>
      
      <Section>
        <SectionTitle>Why List Your Property on LOAF?</SectionTitle>
        <RequirementsList>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <div>
              <h3>Increased Property Liquidity</h3>
              <p>Transform your illiquid real estate asset into tradable tokens that can be bought and sold 24/7 on our platform.</p>
            </div>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <div>
              <h3>Access to Global Investors</h3>
              <p>Reach a worldwide audience of potential investors interested in fractional property ownership.</p>
            </div>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <div>
              <h3>Transparent Valuation</h3>
              <p>Benefit from market-driven property valuation with real-time price discovery.</p>
            </div>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <div>
              <h3>Simplified Management</h3>
              <p>Our platform handles the complexities of property tokenization, legal compliance, and trading infrastructure.</p>
            </div>
          </li>
        </RequirementsList>
      </Section>
      
      <Section>
        <SectionTitle>Property Requirements</SectionTitle>
        <RequirementsList>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="9" x2="15" y2="15"></line>
              <line x1="15" y1="9" x2="9" y2="15"></line>
            </svg>
            <div>
              <h3>Clear Title</h3>
              <p>Property must have a clear title with no liens or encumbrances that would prevent tokenization.</p>
            </div>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="9" x2="15" y2="15"></line>
              <line x1="15" y1="9" x2="9" y2="15"></line>
            </svg>
            <div>
              <h3>Professional Valuation</h3>
              <p>Recent professional property valuation (within the last 6 months).</p>
            </div>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="9" x2="15" y2="15"></line>
              <line x1="15" y1="9" x2="9" y2="15"></line>
            </svg>
            <div>
              <h3>Property Documentation</h3>
              <p>Complete property documentation including floor plans, inspection reports, and maintenance records.</p>
            </div>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="9" x2="15" y2="15"></line>
              <line x1="15" y1="9" x2="9" y2="15"></line>
            </svg>
            <div>
              <h3>Legal Compliance</h3>
              <p>Property must comply with all local zoning laws and regulations for tokenization.</p>
            </div>
          </li>
        </RequirementsList>
      </Section>
      
      <Section>
        <SectionTitle>The Listing Process</SectionTitle>
        <ProcessSteps>
          <div className="step">
            <div className="step-number">1</div>
            <h3>Initial Application</h3>
            <p>Submit your property details through our online application form for preliminary review.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Property Assessment</h3>
            <p>Our team conducts a thorough assessment of your property and documentation.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Legal Structure</h3>
            <p>We establish the appropriate legal structure for tokenizing your property.</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Token Creation</h3>
            <p>Your property is tokenized and prepared for listing on the LOAF platform.</p>
          </div>
          <div className="step">
            <div className="step-number">5</div>
            <h3>Market Launch</h3>
            <p>Your property tokens are listed on our marketplace and made available to investors.</p>
          </div>
        </ProcessSteps>
      </Section>
      
      <Section>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <FAQSection>
          <div className="faq-item">
            <div className="faq-question">
              How long does the tokenization process take?
            </div>
            <div className="faq-answer">
              The typical timeline from application to market listing is 4-6 weeks, depending on property complexity and documentation readiness.
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              What fees are involved in listing my property?
            </div>
            <div className="faq-answer">
              LOAF charges a one-time tokenization fee and a small percentage of the total property value. Detailed fee structures are provided during the application process.
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              Can I still live in or use my property after tokenization?
            </div>
            <div className="faq-answer">
              Yes, depending on the tokenization structure chosen, you may retain certain usage rights while benefiting from the liquidity of tokenization.
            </div>
          </div>
          <div className="faq-item">
            <div className="faq-question">
              How is my property valued on the platform?
            </div>
            <div className="faq-answer">
              Initial valuation is based on professional appraisals, while ongoing valuation is determined by market trading activity on the LOAF platform.
            </div>
          </div>
        </FAQSection>
      </Section>
      
      <ContactSection>
        <h3>Ready to List Your Property?</h3>
        <p>Our team is ready to guide you through every step of the property tokenization process.</p>
        <Button to="/contact">Contact Us</Button>
      </ContactSection>
    </HomeOwnersContainer>
  );
};

export default HomeOwners;
