import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { getIPOById } from '../../services/ipoService';

// Main page container
const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
  padding-top: 100px;
`;

// Back link to property details
const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  color: var(--color-text-secondary);
  font-size: 14px;
  margin-bottom: 24px;
  text-decoration: none;
  
  svg {
    margin-right: 8px;
    width: 16px;
    height: 16px;
  }
  
  &:hover {
    color: var(--color-accent);
  }
`;

// Main content layout
const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 32px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

// VR viewer container
const VRViewerContainer = styled.div`
  background-color: var(--color-card);
  border-radius: ${props => props.fullscreen ? '0' : 'var(--border-radius)'};
  overflow: hidden;
  height: ${props => props.fullscreen ? '100vh' : '600px'};
  position: ${props => props.fullscreen ? 'fixed' : 'relative'};
  top: ${props => props.fullscreen ? '0' : 'auto'};
  left: ${props => props.fullscreen ? '0' : 'auto'};
  right: ${props => props.fullscreen ? '0' : 'auto'};
  bottom: ${props => props.fullscreen ? '0' : 'auto'};
  z-index: ${props => props.fullscreen ? '1000' : '1'};
  width: ${props => props.fullscreen ? '100%' : 'auto'};
`;

// Media type tabs for switching between VR, photos, and videos
const MediaTypeTabs = styled.div`
  display: flex;
  background-color: var(--color-background-secondary);
  border-radius: ${props => props.fullscreen ? '0' : 'var(--border-radius) var(--border-radius) 0 0'};
`;

const MediaTab = styled.div`
  padding: 12px 24px;
  cursor: pointer;
  font-weight: 500;
  color: ${props => props.active ? 'var(--color-accent)' : 'var(--color-text-secondary)'};
  border-bottom: 2px solid ${props => props.active ? 'var(--color-accent)' : 'transparent'};
  
  &:hover {
    color: ${props => props.active ? 'var(--color-accent)' : 'var(--color-text)'};
  }
`;

// View mode selector for VR experience
const ViewModeSelector = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  padding: 8px;
  z-index: 10;
`;

// Fullscreen toggle button
const FullscreenButton = styled.div`
  position: absolute;
  top: 70px;
  right: 20px; /* Moved to right side */
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 20;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

// Floating queue status for fullscreen mode
const FloatingQueueStatus = styled.div`
  position: absolute;
  top: 70px; /* Moved lower to avoid top notice bar */
  left: 20px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 12px;
  padding: 12px;
  color: white;
  z-index: 20;
  display: ${props => props.show ? 'block' : 'none'};
  width: 280px;
`;

const FloatingQueueTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  
  svg {
    width: 16px;
    height: 16px;
    margin-right: 6px;
    color: var(--color-accent);
  }
`;

const FloatingQueuePosition = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 4px;
`;

const FloatingQueueBar = styled.div`
  height: 4px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  margin-bottom: 8px;
`;

const FloatingQueueFill = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${props => props.percentage}%;
  background-color: var(--color-accent);
  border-radius: 2px;
`;

const FloatingQueueTime = styled.div`
  font-size: 12px;
  opacity: 0.8;
  text-align: right;
`;

const BuyButton = styled.button`
  background-color: var(--color-accent);
  color: var(--color-text-inverse);
  border: none;
  border-radius: var(--border-radius);
  padding: 12px;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #d4b64c;
  }
  
  &:active {
    background-color: #c4a73d;
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

// Floating purchase button for fullscreen mode
const FloatingPurchaseButton = styled.button`
  background-color: var(--color-accent);
  color: var(--color-text-inverse);
  border: none;
  border-radius: var(--border-radius);
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 600;
  margin-top: 12px;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 100%;
  
  &:hover {
    background-color: #d4b64c;
  }
  
  &:active {
    background-color: #c4a73d;
  }
`;

// Modal components for deposit options
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: var(--color-background);
  border-radius: var(--border-radius);
  padding: 24px;
  width: 90%;
  max-width: 480px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const ModalTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--color-text-secondary);
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  line-height: 1;
`;

const DepositOption = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: 16px;
  margin-bottom: 12px;
  cursor: pointer;
  text-align: left;
  transition: border-color 0.2s;
  
  &:hover {
    border-color: var(--color-accent);
  }
  
  svg {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    color: var(--color-accent);
  }
`;

const OptionText = styled.div`
  flex: 1;
  
  h4 {
    margin: 0 0 4px 0;
    font-size: 16px;
    font-weight: 500;
  }
  
  p {
    margin: 0;
    font-size: 12px;
    color: var(--color-text-secondary);
  }
`;

// Purchase confirmation popup components
const PurchaseConfirmationOverlay = styled(ModalOverlay)`
  z-index: 1100; // Higher than deposit modal
`;

const ConfirmationContent = styled(ModalContent)`
  text-align: center;
  max-width: 550px;
`;

const PurchaseConfirmationTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 16px 0;
  color: var(--color-accent);
`;

const PropertyImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: var(--border-radius);
  margin: 16px 0;
`;

const ConfirmationDetails = styled.div`
  margin: 24px 0;
  text-align: left;
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 16px;
`;

const DetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const DetailLabel = styled.span`
  color: var(--color-text-secondary);
`;

const DetailValue = styled.span`
  font-weight: 500;
`;

const DocumentsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: 24px;
`;

const DocumentButton = styled.button`
  flex: 1;
  background-color: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: border-color 0.2s;
  
  &:hover {
    border-color: var(--color-accent);
  }
  
  svg {
    width: 32px;
    height: 32px;
    margin-bottom: 8px;
    color: var(--color-accent);
  }
`;

const DocumentTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
`;

const SecondaryButton = styled.button`
  flex: 1;
  background-color: var(--color-background-secondary);
  color: var(--color-text);
  border: none;
  border-radius: var(--border-radius);
  padding: 12px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: var(--color-background-dark);
  }
`;

// Subscription progress components for fullscreen mode - styled to match IPO subscription panel
const FloatingSubscriptionProgress = styled.div`
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

// Styled components matching the IPO subscription panel
const SubscriptionProgressContainer = styled.div`
  margin-bottom: 12px;
`;

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  margin-bottom: 8px;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    animation: waveShimmer 2s infinite;
  }
  
  @keyframes waveShimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

const ProgressBarFill = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${props => props.percentage}%;
  background: linear-gradient(90deg, #E6C656 0%, #f0b90b 100%); /* Gold gradient */
  border-radius: 4px;
  transition: width 1s ease;
`;

const ProgressInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProgressPercentText = styled.div`
  font-weight: 600;
  color: #E6C656; /* Gold color from the screenshot */
  font-size: 14px;
`;

const ProgressAmountText = styled.div`
  font-weight: 600;
  color: white;
  font-size: 14px;
`;

// Stats grid for property details
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 16px;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatLabel = styled.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 4px;
`;

const StatValue = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: white;
`;

const GoldStatValue = styled(StatValue)`
  color: #E6C656; /* Gold color for token price */
`;

const ViewModeButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  color: ${props => props.active ? 'var(--color-background)' : 'white'};
  background-color: ${props => props.active ? 'var(--color-accent)' : 'transparent'};
  
  svg {
    margin-right: 6px;
    width: 16px;
    height: 16px;
  }
  
  &:hover {
    background-color: ${props => props.active ? 'var(--color-accent)' : 'rgba(255, 255, 255, 0.1)'};
  }
`;

// Queue status panel
const QueuePanel = styled.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 24px;
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

const QueueTitle = styled.h2`
  font-size: 20px;
  color: var(--color-text);
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 8px;
    color: var(--color-accent);
  }
`;

const QueueDescription = styled.p`
  color: var(--color-text-secondary);
  font-size: 14px;
  margin-bottom: 24px;
  line-height: 1.6;
`;

const PropertyName = styled.h3`
  font-size: 18px;
  color: var(--color-text);
  margin-bottom: 4px;
`;

const PropertyLocation = styled.p`
  color: var(--color-text-secondary);
  font-size: 14px;
  margin-bottom: 24px;
`;

// Queue progress components
const QueueProgressContainer = styled.div`
  margin-bottom: 24px;
`;

const QueueProgressLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
`;

const TotalChangeIndicator = styled.span`
  margin-left: 6px;
  font-size: 12px;
  font-weight: 500;
  color: ${props => props.isIncrease ? 'var(--color-positive)' : 'var(--color-negative)'};
  opacity: ${props => props.isVisible ? 1 : 0};
  transition: opacity 0.5s ease;
`;

const QueuePosition = styled.span`
  color: var(--color-text);
  font-weight: 600;
`;

const QueueTotal = styled.span`
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
`;

const QueueProgressBar = styled.div`
  height: 8px;
  background-color: var(--color-background-secondary);
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    animation: waveShimmer 2s infinite;
  }
  
  @keyframes waveShimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

const QueueProgressFill = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${props => props.percentage}%;
  background: linear-gradient(90deg, var(--color-accent) 0%, #f0b90b 100%);
  border-radius: 4px;
  transition: width 1s ease;
`;

const EstimatedTimeContainer = styled.div`
  background-color: var(--color-background-secondary);
  border-radius: var(--border-radius);
  padding: 16px;
  margin-bottom: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EstimatedTimeLabel = styled.div`
  color: var(--color-text-secondary);
  font-size: 12px;
  margin-bottom: 4px;
`;

const EstimatedTime = styled.div`
  color: var(--color-text);
  font-size: 20px;
  font-weight: 600;
`;

const CountdownTimer = styled.div`
  color: var(--color-accent);
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
`;

// Subscription Panel Components
const SubscriptionPanel = styled.div`
  width: 100%;
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 16px;
  margin-top: 16px;
`;


const AvailableContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-background-dark);
  padding: 12px 16px;
  border-radius: var(--border-radius);
  margin-bottom: 4px;
`;

const AvailableLabel = styled.span`
  color: var(--color-text-secondary);
`;

const AvailableAmount = styled.span`
  font-weight: 600;
`;

const DepositButton = styled.button`
  background: none;
  border: none;
  color: var(--color-accent);
  font-size: 12px;
  padding: 0;
  margin: 0 0 12px 0;
  cursor: pointer;
  text-align: right;
  display: block;
  width: 100%;
  
  &:hover {
    text-decoration: underline;
  }
`;

const InputGroup = styled.div`
  margin-bottom: 16px;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  color: var(--color-text-secondary);
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: var(--border-radius);
  overflow: hidden;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  background-color: transparent;
  border: none;
  color: var(--color-text);
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

const InputSuffix = styled.span`
  padding-right: 12px;
  color: var(--color-text-secondary);
  font-weight: 500;
`;

const PercentageButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-top: 8px;
`;

const PercentButton = styled.button`
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.05);
  border: none;
  border-radius: var(--border-radius);
  color: var(--color-text);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: ${props => props.noBorder ? 'none' : '1px solid rgba(255, 255, 255, 0.1)'};
`;

const SummaryLabel = styled.span`
  color: var(--color-text-secondary);
`;

const SummaryValue = styled.span`
  font-weight: 500;
`;

const SubscribeButton = styled.button`
  width: 100%;
  padding: 14px;
  background-color: var(--color-accent);
  color: #000;
  border: none;
  border-radius: var(--border-radius);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 16px;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const LeaveQueueButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: transparent;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-top: auto;
  
  &:hover {
    background-color: var(--color-background-secondary);
  }
`;

// Mock VR placeholder component
const VRPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  
  svg {
    width: 64px;
    height: 64px;
    margin-bottom: 16px;
    color: var(--color-accent);
  }
`;

// Photo gallery placeholder
const PhotoGalleryPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1a1a1a;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 8px;
  padding: 8px;
`;

const PhotoItem = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  border-radius: 4px;
`;

// Video player placeholder
const VideoPlayerPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  
  svg {
    width: 64px;
    height: 64px;
    margin-bottom: 16px;
    color: var(--color-accent);
  }
`;

// Property details styled components
const PropertyDetailsView = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--color-card);
  padding: 24px;
  overflow-y: auto;
`;

const PropertyDetailsHeader = styled.div`
  margin-bottom: 24px;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 16px;
`;

const PropertyDetailsTitle = styled.h2`
  font-size: 24px;
  color: var(--color-text);
  margin-bottom: 8px;
`;

const PropertyDetailsLocation = styled.p`
  color: var(--color-text-secondary);
  font-size: 16px;
`;

const PropertyDetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 24px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const PropertyDetailItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const PropertyDetailLabel = styled.span`
  color: var(--color-text-secondary);
  font-size: 12px;
  margin-bottom: 4px;
`;

const PropertyDetailValue = styled.span`
  color: var(--color-text);
  font-size: 16px;
  font-weight: 600;
`;

const PropertyDescription = styled.p`
  color: var(--color-text);
  font-size: 14px;
  line-height: 1.6;
  margin-top: 24px;
  border-top: 1px solid var(--color-border);
  padding-top: 24px;
`;

// Confirmation popup styled components
const ConfirmationOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ConfirmationPopup = styled.div`
  background-color: var(--color-card);
  border-radius: var(--border-radius);
  padding: 24px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`;

const ConfirmationTitle = styled.h3`
  font-size: 20px;
  color: var(--color-text);
  margin-bottom: 12px;
`;

const ConfirmationMessage = styled.p`
  color: var(--color-text-secondary);
  font-size: 16px;
  margin-bottom: 24px;
`;

const ConfirmationButtons = styled.div`
  display: flex;
  gap: 12px;
`;

const ConfirmButton = styled.button`
  background-color: var(--color-negative);
  color: white;
  border: none;
  border-radius: var(--border-radius);
  padding: 12px 16px;
  font-weight: 500;
  cursor: pointer;
  flex: 1;
  
  &:hover {
    background-color: #d32f2f;
  }
`;

const CancelButton = styled.button`
  background-color: var(--color-background-secondary);
  color: var(--color-text);
  border: none;
  border-radius: var(--border-radius);
  padding: 12px 16px;
  font-weight: 500;
  cursor: pointer;
  flex: 1;
  
  &:hover {
    background-color: var(--color-border);
  }
`;

const QueueWaitingRoom = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Queue state
  const [queuePosition, setQueuePosition] = useState(1000);
  const [totalInQueue, setTotalInQueue] = useState(12500);
  const [estimatedTime, setEstimatedTime] = useState('0:45');
  const [lastTotalChange, setLastTotalChange] = useState(0); // Track last change to total
  const [showTotalChange, setShowTotalChange] = useState(false); // Control visibility of change indicator
  
  // Confirmation popup state
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  // Fullscreen state
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Subscription progress state (mock data) - updated to match the screenshot values
  const [subscriptionProgress, setSubscriptionProgress] = useState(76.4); // percentage
  const [totalRaised, setTotalRaised] = useState(9600000); // $9.6M in dollars
  const [targetAmount, setTargetAmount] = useState(12500000); // $12.5M in dollars
  const [tokenPrice, setTokenPrice] = useState(125000); // $125,000
  const [propertyValuation, setPropertyValuation] = useState("$30M"); // $30M
  const [maxInvestment, setMaxInvestment] = useState("$625K"); // $625K
  const [closingDate, setClosingDate] = useState("15 July 2025"); // 15 July 2025
  
  // Subscription panel state
  const [availableBalance, setAvailableBalance] = useState(80000); // $80,000 available to invest
  const [tokenAmount, setTokenAmount] = useState(""); // Amount of tokens to purchase
  const [totalCost, setTotalCost] = useState(0); // Total cost of subscription
  const [showDepositModal, setShowDepositModal] = useState(false); // State for deposit modal
  const [showPurchaseConfirmation, setShowPurchaseConfirmation] = useState(false); // State for purchase confirmation popup
  const [purchasedTokens, setPurchasedTokens] = useState(0); // Number of tokens purchased
  
  // Countdown timer state
  const [timeRemaining, setTimeRemaining] = useState(5 * 60); // 5 minutes in seconds
  const [timerActive, setTimerActive] = useState(false);
  const [queueAhead, setQueueAhead] = useState(10753); // 10,753 ahead
  
  // Format currency amounts
  const formatCurrency = (amount) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    } else {
      return `$${amount.toFixed(0)}`;
    }
  };
  
  // Format time remaining for countdown timer
  const formatTimeRemaining = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  
  // Media view state
  const [activeMediaType, setActiveMediaType] = useState('vr');
  const [activeViewMode, setActiveViewMode] = useState('interior');
  
  // Simulate queue progress - drop from 1000 to 0 in 45 seconds with dynamic decreases
  useEffect(() => {
    // We'll update every 1000ms (1 second)
    const updateInterval = 1000; // milliseconds
    
    // Total updates needed = 45 (for 45 seconds)
    // Total positions to decrease = 1000
    // Average decrease per update = 1000/45 ≈ 22 positions per update
    // But we'll make it dynamic between 10-50 to simulate real-world behavior
    
    const queueInterval = setInterval(() => {
      // Update position
      setQueuePosition(prevPosition => {
        if (prevPosition <= 0) {
          clearInterval(queueInterval);
          // Redirect to buy form when position reaches 0
          // window.location.href = `/ipo/${id}/buy/form`;
          return 0;
        }
        
        // Dynamic decrease - simulate batches of people completing purchases
        // Small batches (10-20) most of the time
        // Medium batches (20-40) sometimes
        // Large batches (40-60) occasionally
        
        let decreaseAmount;
        const random = Math.random();
        
        if (random < 0.6) { // 60% chance - small batch
          decreaseAmount = Math.floor(Math.random() * 11) + 10; // 10-20
        } else if (random < 0.9) { // 30% chance - medium batch
          decreaseAmount = Math.floor(Math.random() * 21) + 20; // 20-40
        } else { // 10% chance - large batch
          decreaseAmount = Math.floor(Math.random() * 21) + 40; // 40-60
        }
        
        // Ensure we don't go below 0
        return Math.max(0, prevPosition - decreaseAmount);
      });
      
      // Update total in queue - simulate people joining and leaving
      setTotalInQueue(prevTotal => {
        // Determine if we should increase or decrease the total
        const shouldIncrease = Math.random() < 0.4; // 40% chance to increase
        
        if (shouldIncrease) {
          // New people joining the queue
          const increaseAmount = Math.floor(Math.random() * 31) + 10; // 10-40 new people
          setLastTotalChange(increaseAmount);
          setShowTotalChange(true);
          
          // Set a timeout to hide the indicator after 2 seconds
          setTimeout(() => setShowTotalChange(false), 2000);
          
          return prevTotal + increaseAmount;
        } else {
          // People leaving the queue (besides those being processed)
          const decreaseAmount = Math.floor(Math.random() * 21) + 5; // 5-25 people leaving
          setLastTotalChange(-decreaseAmount);
          setShowTotalChange(true);
          
          // Set a timeout to hide the indicator after 2 seconds
          setTimeout(() => setShowTotalChange(false), 2000);
          
          return Math.max(queuePosition + 100, prevTotal - decreaseAmount); // Ensure total stays above position
        }
      });
      
      // Update estimated time - remaining seconds based on current position and average rate
      // 1000 positions over 45 seconds ≈ 22.22 positions per second
      // So current position / 22.22 = seconds remaining
      const remainingSeconds = Math.ceil(queuePosition / 22.22);
      const minutes = Math.floor(remainingSeconds / 60);
      const seconds = remainingSeconds % 60;
      
      setEstimatedTime(`${minutes}:${seconds.toString().padStart(2, '0')}`);
    }, updateInterval);
    
    return () => clearInterval(queueInterval);
  }, [queuePosition, id]);
  
  // Effect for handling escape key to exit fullscreen mode
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFullscreen]);
  
  // Effect for countdown timer when user reaches front of queue
  useEffect(() => {
    let interval;
    
    if (queuePosition === 0 && !timerActive) {
      setTimerActive(true);
      setTimeRemaining(5 * 60); // Reset to 5 minutes
    }
    
    if (timerActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      // Handle timer expiration - could redirect or reset queue position
      setTimerActive(false);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [queuePosition, timerActive, timeRemaining]);
  
  // Effect to simulate subscription progress growing over time
  useEffect(() => {
    // Only run this effect if the subscription is not yet complete
    if (subscriptionProgress < 100) {
      const progressInterval = setInterval(() => {
        setSubscriptionProgress(prevProgress => {
          // Random small increment between 0.05% and 0.2%
          const increment = Math.random() * 0.15 + 0.05;
          const newProgress = Math.min(prevProgress + increment, 100);
          
          // Also update the total raised amount based on the new percentage
          const newRaised = (newProgress / 100) * targetAmount;
          setTotalRaised(newRaised);
          
          return newProgress;
        });
      }, 3000); // Update every 3 seconds
      
      return () => clearInterval(progressInterval);
    }
  }, [subscriptionProgress, targetAmount]);
  
  // Fetch property data
  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await getIPOById(id);
        setProperty(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching IPO property:', err);
        setError('Failed to load property details');
        setLoading(false);
      }
    };
    
    fetchProperty();
  }, [id]);
  
  if (loading) {
    return (
      <PageContainer>
        <div style={{ textAlign: 'center', padding: '100px 0' }}>
          <div>Loading property details...</div>
        </div>
      </PageContainer>
    );
  }
  
  if (error || !property) {
    return (
      <PageContainer>
        <div style={{ textAlign: 'center', padding: '100px 0', color: 'var(--color-negative)' }}>
          {error || 'Property not found'}
        </div>
      </PageContainer>
    );
  }
  
  // Calculate queue progress percentage
  const queueProgressPercentage = Math.max(0, Math.min(100, ((totalInQueue - queuePosition) / totalInQueue) * 100));
  
  return (
    <PageContainer>
      <BackLink to={`/ipo/${id}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
        Back to Property Details
      </BackLink>
      
      <ContentContainer>
        <VRViewerContainer fullscreen={isFullscreen}>
          <MediaTypeTabs fullscreen={isFullscreen}>
            <MediaTab 
              active={activeMediaType === 'vr'} 
              onClick={() => setActiveMediaType('vr')}
            >
              Virtual Tour
            </MediaTab>
            <MediaTab 
              active={activeMediaType === 'photos'} 
              onClick={() => setActiveMediaType('photos')}
            >
              Photos
            </MediaTab>
            <MediaTab 
              active={activeMediaType === 'video'} 
              onClick={() => setActiveMediaType('video')}
            >
              Video
            </MediaTab>
            <MediaTab 
              active={activeMediaType === 'details'} 
              onClick={() => setActiveMediaType('details')}
            >
              Details
            </MediaTab>
          </MediaTypeTabs>
          
          {/* Fullscreen toggle button */}
          <FullscreenButton onClick={() => setIsFullscreen(!isFullscreen)}>
            {isFullscreen ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
              </svg>
            )}
          </FullscreenButton>
          
          {/* Floating queue status for fullscreen mode */}
          <FloatingQueueStatus show={isFullscreen}>
            <FloatingQueueTitle>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 10v8h-2v-8h-4V8h10v2h-4zm-2-6H4v2h16V4zm0 4H4v8h10v2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v2z"/>
              </svg>
              Queue Position
            </FloatingQueueTitle>
            <FloatingQueuePosition>Position: {queuePosition} of {totalInQueue}</FloatingQueuePosition>
            <FloatingQueueBar>
              <FloatingQueueFill percentage={queueProgressPercentage} />
            </FloatingQueueBar>
            {queuePosition > 0 ? (
              <FloatingQueueTime>Est. wait: {estimatedTime}</FloatingQueueTime>
            ) : (
              <>
                <FloatingQueueTime style={{ color: '#E6C656', fontWeight: 'bold' }}>Your turn!</FloatingQueueTime>
                <FloatingPurchaseButton onClick={() => setIsFullscreen(false)}>Purchase Now</FloatingPurchaseButton>
              </>
            )}
            
            {/* Subscription progress in fullscreen mode - styled to match IPO subscription panel */}
            <FloatingSubscriptionProgress>
              <SubscriptionProgressContainer>
                <ProgressBarContainer>
                  <ProgressBarFill percentage={subscriptionProgress} />
                </ProgressBarContainer>
                <ProgressInfoContainer>
                  <ProgressPercentText>{subscriptionProgress.toFixed(1)}% Subscribed</ProgressPercentText>
                  <ProgressAmountText>${(totalRaised / 1000000).toFixed(1)}M / ${(targetAmount / 1000000).toFixed(1)}M</ProgressAmountText>
                </ProgressInfoContainer>
              </SubscriptionProgressContainer>
              
              {/* Property stats grid */}
              <StatsGrid>
                <StatItem>
                  <StatLabel>Token Price</StatLabel>
                  <GoldStatValue>${tokenPrice.toLocaleString()}</GoldStatValue>
                </StatItem>
                <StatItem>
                  <StatLabel>Property Valuation</StatLabel>
                  <StatValue>{propertyValuation}</StatValue>
                </StatItem>
                <StatItem>
                  <StatLabel>Max Investment</StatLabel>
                  <StatValue>{maxInvestment}</StatValue>
                </StatItem>
                <StatItem>
                  <StatLabel>Closing Date</StatLabel>
                  <StatValue>{closingDate}</StatValue>
                </StatItem>
              </StatsGrid>
            </FloatingSubscriptionProgress>
          </FloatingQueueStatus>
          
          {activeMediaType === 'vr' && (
            <>
              <VRPlaceholder>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H3V6h18v12zM9 10v6l5-3z"/>
                </svg>
                <div>Virtual Reality Tour</div>
                <div style={{ fontSize: '14px', color: '#aaa', marginTop: '8px' }}>
                  {activeViewMode === 'interior' && 'Explore the interior of the property'}
                  {activeViewMode === 'exterior' && 'View the exterior and surroundings'}
                  {activeViewMode === 'drone' && 'Aerial drone view of the property'}
                </div>
              </VRPlaceholder>
              
              <ViewModeSelector>
                <ViewModeButton 
                  active={activeViewMode === 'interior'} 
                  onClick={() => setActiveViewMode('interior')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
                  </svg>
                  Interior
                </ViewModeButton>
                <ViewModeButton 
                  active={activeViewMode === 'exterior'} 
                  onClick={() => setActiveViewMode('exterior')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17 12h2L12 3 2 12h2v8h2v-2h12v2h2v-8zm-5 2v-2h2v2h-2zm-4-2h2v2H8v-2z"/>
                  </svg>
                  Exterior
                </ViewModeButton>
                <ViewModeButton 
                  active={activeViewMode === 'drone'} 
                  onClick={() => setActiveViewMode('drone')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
                  </svg>
                  Drone View
                </ViewModeButton>
              </ViewModeSelector>
            </>
          )}
          
          {activeMediaType === 'photos' && (
            <PhotoGalleryPlaceholder>
              <PhotoItem image={property.imageUrl} />
              <PhotoItem image={property.images?.[1] || property.imageUrl} />
              <PhotoItem image={property.images?.[2] || property.imageUrl} />
              <PhotoItem image={property.images?.[3] || property.imageUrl} />
            </PhotoGalleryPlaceholder>
          )}
          
          {activeMediaType === 'video' && (
            <VideoPlayerPlaceholder>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
              </svg>
              <div>Property Video Tour</div>
            </VideoPlayerPlaceholder>
          )}
          
          {activeMediaType === 'details' && (
            <PropertyDetailsView>
              <PropertyDetailsHeader>
                <PropertyDetailsTitle>{property.name}</PropertyDetailsTitle>
                <PropertyDetailsLocation>{property.location}</PropertyDetailsLocation>
              </PropertyDetailsHeader>
              
              <PropertyDetailsGrid>
                <PropertyDetailItem>
                  <PropertyDetailLabel>Property Value</PropertyDetailLabel>
                  <PropertyDetailValue>${property.propertyValue?.toLocaleString() || '5,750,000'}</PropertyDetailValue>
                </PropertyDetailItem>
                
                <PropertyDetailItem>
                  <PropertyDetailLabel>Token Price</PropertyDetailLabel>
                  <PropertyDetailValue>${property.tokenPrice || '57.50'}</PropertyDetailValue>
                </PropertyDetailItem>
                
                <PropertyDetailItem>
                  <PropertyDetailLabel>Total Tokens</PropertyDetailLabel>
                  <PropertyDetailValue>{property.totalTokens?.toLocaleString() || '100,000'}</PropertyDetailValue>
                </PropertyDetailItem>
                
                <PropertyDetailItem>
                  <PropertyDetailLabel>Maximum Investment</PropertyDetailLabel>
                  <PropertyDetailValue>${property.maxInvestment?.toLocaleString() || '575,000'}</PropertyDetailValue>
                </PropertyDetailItem>
                
                <PropertyDetailItem>
                  <PropertyDetailLabel>Projected Yield</PropertyDetailLabel>
                  <PropertyDetailValue>{property.projectedYield || '8.2'}%</PropertyDetailValue>
                </PropertyDetailItem>
                
                <PropertyDetailItem>
                  <PropertyDetailLabel>Property Type</PropertyDetailLabel>
                  <PropertyDetailValue>{property.propertyType || 'Residential'}</PropertyDetailValue>
                </PropertyDetailItem>
                
                <PropertyDetailItem>
                  <PropertyDetailLabel>Square Footage</PropertyDetailLabel>
                  <PropertyDetailValue>{property.squareFootage?.toLocaleString() || '3,200'} sq ft</PropertyDetailValue>
                </PropertyDetailItem>
                
                <PropertyDetailItem>
                  <PropertyDetailLabel>Year Built</PropertyDetailLabel>
                  <PropertyDetailValue>{property.yearBuilt || '2020'}</PropertyDetailValue>
                </PropertyDetailItem>
              </PropertyDetailsGrid>
              
              <PropertyDescription>
                {property.fullDescription || 'This luxury property features modern architecture with premium finishes throughout. Located in a prime neighborhood with excellent amenities, the property offers strong rental income potential and projected appreciation. The property has been fully renovated with high-end appliances, smart home technology, and energy-efficient systems.'}
              </PropertyDescription>
            </PropertyDetailsView>
          )}
        </VRViewerContainer>
        
        <QueuePanel>
          <QueueTitle>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M22 10v8h-2v-8h-4V8h10v2h-4zm-2-6H4v2h16V4zm0 4H4v8h10v2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v2z"/>
            </svg>
            Queue Position
          </QueueTitle>
          <QueueDescription>
            You are in line to purchase tokens for this property. 
            When it's your turn, you'll have 5 minutes to complete your purchase.
          </QueueDescription>
          
          <PropertyName>{property.name}</PropertyName>
          <PropertyLocation>{property.location}</PropertyLocation>
          
          <QueueProgressContainer>
            <QueueProgressLabel>
              <QueuePosition>Position: {queuePosition}</QueuePosition>
              <QueueTotal>
                Total: {totalInQueue}
              </QueueTotal>
            </QueueProgressLabel>
            <QueueProgressBar>
              <QueueProgressFill percentage={queueProgressPercentage} />
            </QueueProgressBar>
          </QueueProgressContainer>
          
          <EstimatedTimeContainer>
            {queuePosition > 0 ? (
              <>
                <EstimatedTimeLabel>Estimated Wait Time</EstimatedTimeLabel>
                <EstimatedTime>{estimatedTime}</EstimatedTime>
              </>
            ) : (
              <>
                <EstimatedTimeLabel>Time Remaining</EstimatedTimeLabel>
                <CountdownTimer>{formatTimeRemaining(timeRemaining)}</CountdownTimer>
                <SubscriptionPanel>
                  
                  <AvailableContainer>
                    <AvailableLabel>Available:</AvailableLabel>
                    <AvailableAmount>${availableBalance.toLocaleString()}.00</AvailableAmount>
                  </AvailableContainer>
                  <DepositButton onClick={() => setShowDepositModal(true)}>+ Deposit more funds</DepositButton>
                  
                  <InputGroup>
                    <InputLabel>Price per token</InputLabel>
                    <InputContainer>
                      <Input type="text" value={tokenPrice.toLocaleString()} readOnly />
                      <InputSuffix>$</InputSuffix>
                    </InputContainer>
                  </InputGroup>
                  
                  <InputGroup>
                    <InputLabel>Amount</InputLabel>
                    <InputContainer>
                      <Input 
                        type="text" 
                        placeholder="0.00" 
                        value={tokenAmount}
                        onChange={(e) => {
                          const value = e.target.value.replace(/[^0-9.]/g, '');
                          setTokenAmount(value);
                          const numTokens = parseFloat(value) || 0;
                          setTotalCost(numTokens * tokenPrice);
                        }} 
                      />
                      <InputSuffix>Tokens</InputSuffix>
                    </InputContainer>
                    
                    <PercentageButtons>
                      {[25, 50, 75, 100].map((percent) => (
                        <PercentButton 
                          key={percent}
                          onClick={() => {
                            // Calculate how many tokens the user can afford with their available balance
                            // For demo purposes, let's assume they can buy fractional tokens
                            const maxTokens = availableBalance / tokenPrice;
                            // Calculate tokens based on percentage
                            const tokensToGet = (maxTokens * (percent / 100)).toFixed(2);
                            // Update token amount and total cost
                            setTokenAmount(tokensToGet);
                            setTotalCost(parseFloat(tokensToGet) * tokenPrice);
                          }}
                        >
                          {percent}%
                        </PercentButton>
                      ))}
                    </PercentageButtons>
                  </InputGroup>
                  
                  <SummaryRow>
                    <SummaryLabel>Price per token</SummaryLabel>
                    <SummaryValue>${tokenPrice.toLocaleString()}</SummaryValue>
                  </SummaryRow>
                  
                  <SummaryRow>
                    <SummaryLabel>Amount</SummaryLabel>
                    <SummaryValue>{tokenAmount ? parseFloat(tokenAmount).toLocaleString() : "0"} Tokens</SummaryValue>
                  </SummaryRow>
                  
                  <SummaryRow noBorder>
                    <SummaryLabel>Total</SummaryLabel>
                    <SummaryValue>${totalCost.toLocaleString()}.00</SummaryValue>
                  </SummaryRow>
                  
                  <SubscribeButton 
                    disabled={!tokenAmount || totalCost <= 0 || totalCost > availableBalance}
                    onClick={() => {
                      // Process the purchase
                      const purchasedAmount = parseFloat(tokenAmount);
                      
                      // Update available balance
                      setAvailableBalance(prev => prev - totalCost);
                      
                      // Track purchased tokens
                      setPurchasedTokens(prev => prev + purchasedAmount);
                      
                      // Show confirmation popup
                      setShowPurchaseConfirmation(true);
                      
                      // Reset token amount input
                      setTokenAmount("");
                      setTotalCost(0);
                    }}
                  >
                    Purchase
                  </SubscribeButton>
                </SubscriptionPanel>
              </>
            )}
          </EstimatedTimeContainer>
          
          <LeaveQueueButton onClick={() => setShowConfirmation(true)}>
            Leave Queue
          </LeaveQueueButton>
          
          {/* Confirmation Popup */}
          {showConfirmation && (
            <ConfirmationOverlay>
              <ConfirmationPopup>
                <ConfirmationTitle>Are you sure?</ConfirmationTitle>
                <ConfirmationMessage>You will lose your position in the queue.</ConfirmationMessage>
                <ConfirmationButtons>
                  <ConfirmButton onClick={() => window.location.href = `/ipo/${id}`}>Yes, Leave Queue</ConfirmButton>
                  <CancelButton onClick={() => setShowConfirmation(false)}>No, Stay in Queue</CancelButton>
                </ConfirmationButtons>
              </ConfirmationPopup>
            </ConfirmationOverlay>
          )}
        </QueuePanel>
      </ContentContainer>
      
      {/* Deposit Modal */}
      {showDepositModal && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Deposit Funds</ModalTitle>
              <CloseButton onClick={() => setShowDepositModal(false)}>&times;</CloseButton>
            </ModalHeader>
            
            <DepositOption>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-3-7h5.5a2.5 2.5 0 1 0 0-5H10v-.5h2v-2h-2V4h-2v1.5H7v2h4.5a.5.5 0 0 1 0 1H6v2h2v.5H6v2h1v1.5h2V14z"/>
              </svg>
              <OptionText>
                <h4>Cryptocurrency</h4>
                <p>Deposit using Bitcoin, Ethereum, or other cryptocurrencies</p>
              </OptionText>
            </DepositOption>
            
            <DepositOption>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 15h16v2H4v-2zm0 4h16v2H4v-2zm9-14V3h7v18h-7v-2h5V5h-5V3H5v18H3V3h10zm-2 7h-3v2h3v-2z"/>
              </svg>
              <OptionText>
                <h4>Bank Transfer</h4>
                <p>Connect your bank account for direct transfers</p>
              </OptionText>
            </DepositOption>
            
            <DepositOption>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 10v8h-2v-8h-4V8h10v2h-4zm-2-6H4v2h16V4zm0 4H4v8h10v2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v2z"/>
              </svg>
              <OptionText>
                <h4>Credit/Debit Card</h4>
                <p>Quick deposit using your credit or debit card</p>
              </OptionText>
            </DepositOption>
          </ModalContent>
        </ModalOverlay>
      )}
      
      {/* Purchase Confirmation Popup */}
      {showPurchaseConfirmation && (
        <PurchaseConfirmationOverlay>
          <ConfirmationContent>
            <ModalHeader>
              <PurchaseConfirmationTitle>Congratulations!</PurchaseConfirmationTitle>
              <CloseButton onClick={() => setShowPurchaseConfirmation(false)}>&times;</CloseButton>
            </ModalHeader>
            
            <p>You now own property interest in</p>
            <h3>123 Luxury Avenue, Beverly Hills, CA 90210</h3>
            
            <PropertyImage src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80" alt="Luxury Property" />
            
            <ConfirmationDetails>
              <DetailRow>
                <DetailLabel>Tokens Purchased:</DetailLabel>
                <DetailValue>{purchasedTokens.toFixed(2)}</DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Token Price:</DetailLabel>
                <DetailValue>${tokenPrice.toLocaleString()}</DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Total Investment:</DetailLabel>
                <DetailValue>${(purchasedTokens * tokenPrice).toLocaleString()}</DetailValue>
              </DetailRow>
              <DetailRow>
                <DetailLabel>Ownership Percentage:</DetailLabel>
                <DetailValue>{((purchasedTokens * tokenPrice / 30000000) * 100).toFixed(4)}%</DetailValue>
              </DetailRow>
            </ConfirmationDetails>
            
            <DocumentsContainer>
              <DocumentButton>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
                </svg>
                <DocumentTitle>Ownership Contract</DocumentTitle>
              </DocumentButton>
              
              <DocumentButton>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zm-7.5-1c1.38 0 2.5-1.12 2.5-2.5V7h3V5h-4v5.51c-.42-.32-.93-.51-1.5-.51-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"/>
                </svg>
                <DocumentTitle>Ownership Certificate</DocumentTitle>
              </DocumentButton>
            </DocumentsContainer>
            
            <ActionButtons>
              <SecondaryButton onClick={() => setShowPurchaseConfirmation(false)}>Close</SecondaryButton>
              <SubscribeButton onClick={() => {
                setShowPurchaseConfirmation(false);
                // Reset token amount for new purchase
                setTokenAmount("");
              }}>Buy More</SubscribeButton>
            </ActionButtons>
          </ConfirmationContent>
        </PurchaseConfirmationOverlay>
      )}
    </PageContainer>
  );
};

export default QueueWaitingRoom;
