import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import Header from './components/Header/Header'
import NotificationBar, { NOTIFICATION_BAR_HEIGHT } from './components/NotificationBar/NotificationBar'
import Home from './pages/Home/Home'
import Properties from './pages/Properties/Properties'
import PropertyDetail from './pages/PropertyDetail/PropertyDetail'
import PropertyDetailNew from './pages/PropertyDetail/PropertyDetailNew'
import Market from './pages/Market/Market'
import Buy from './pages/Buy'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Portfolio from './pages/Portfolio/Portfolio'
import Wallet from './pages/Wallet/Wallet'
import Profile from './pages/Profile/Profile'
import IPO from './pages/IPO/IPO'
import IPODetail from './pages/IPO/IPODetail'
import BuyIPO from './pages/IPO/BuyIPO'
import QueueWaitingRoom from './pages/Queue/QueueWaitingRoom'
import AuctionTest from './pages/AuctionTest'
import Trade from './pages/Trade/Trade'
import HomeOwners from './pages/HomeOwners/HomeOwners'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import WelcomePopup from './components/WelcomePopup/WelcomePopup'
import EarlyAccessSignup from './components/EarlyAccessSignup/EarlyAccessSignup'
import { AuthProvider } from './context/AuthContext'
import { PriceProvider } from './context/PriceContext'
import { MapViewProvider, useMapView } from './context/MapViewContext'
import { AuctionProvider } from './contexts/AuctionContext'

const Container = styled.div`
  max-width: ${props => props.noMaxWidth ? 'none' : '1600px'};
  width: 100%;
  margin: 0 auto;
  padding: ${props => props.noPadding ? '0' : '0 5%'};
  transition: filter 0.3s ease;
  background-color: var(--color-background);
  ${props => props.blurred && `
    filter: blur(8px);
    pointer-events: none;
  `}
`

const BlurredHeader = styled(Header)`
  transition: filter 0.3s ease;
  ${props => props.blurred && `
    filter: blur(8px);
    pointer-events: none;
  `}
`;

const BlurredNotificationBar = styled(NotificationBar)`
  transition: filter 0.3s ease;
  ${props => props.blurred && `
    filter: blur(8px);
    pointer-events: none;
  `}
`;

const MainContent = styled.main`
  padding-top: calc(64px + ${NOTIFICATION_BAR_HEIGHT} + 1.5rem);
  width: 100%;
`

const ContentWrapper = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <MainContent isHomePage={isHomePage}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:propertySlug" element={<PropertyDetailNew />} />
        {/* The routes below are kept for backward compatibility but will be redirected */}
        <Route path="/property-new/:id" element={<PropertyDetailNew />} />
        <Route path="/property-new/:id/trade" element={<PropertyDetailNew initialTab="trade" />} />
        <Route path="/property-new/:id/offers" element={<PropertyDetailNew initialTab="offers" />} />
        <Route path="/market" element={<Market />} />
        <Route path="/buy" element={<Buy />} />
        {/* Trade/Swap page temporarily disabled - will be released when more properties are listed */}
        <Route path="/trade" element={<Navigate to="/" replace />} />
        <Route path="/ipo" element={<IPO />} />
        <Route path="/ipo/:id" element={<IPODetail />} />
        <Route path="/ipo/:id/buy" element={<QueueWaitingRoom />} />
        <Route path="/auction-test" element={<AuctionTest />} />
        <Route path="/home-owners" element={<HomeOwners />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/portfolio" element={
          <ProtectedRoute>
            <Portfolio />
          </ProtectedRoute>
        } />
        <Route path="/wallet" element={
          <ProtectedRoute>
            <Wallet />
          </ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
        {/* Add more routes as needed */}
      </Routes>
    </MainContent>
  );
}

function App() {
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const [showEarlyAccessSignup, setShowEarlyAccessSignup] = useState(false);
  const [popupClosingAnimation, setPopupClosingAnimation] = useState(false);
  const [isMapViewActive, setIsMapViewActive] = useState(false);
  
  useEffect(() => {
    // Only show welcome popup if it hasn't been seen in this session
    const welcomePopupSeenThisSession = sessionStorage.getItem('loafWelcomePopupSeenThisSession');
    
    if (!welcomePopupSeenThisSession) {
      setShowWelcomePopup(true);
      // Mark as seen for this session
      sessionStorage.setItem('loafWelcomePopupSeenThisSession', 'true');
    } else {
      // Always show the early access button when popup is not shown
      setShowEarlyAccessSignup(true);
    }
  }, []);
  
  // Listen for map-view-active class changes on the body
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isMapActive = document.body.classList.contains('map-view-active');
          setIsMapViewActive(isMapActive);
        }
      });
    });
    
    observer.observe(document.body, { attributes: true });
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  const handleCloseWelcomePopup = () => {
    // Start closing animation
    setPopupClosingAnimation(true);
    
    // After animation completes, hide popup and show early access button
    setTimeout(() => {
      setShowWelcomePopup(false);
      setPopupClosingAnimation(false);
      setShowEarlyAccessSignup(true);
    }, 300); // Animation duration
  };
  
  const handleReopenPopup = () => {
    setShowEarlyAccessSignup(false);
    setShowWelcomePopup(true);
  };
  
  return (
    <Router>
      <AuthProvider>
        <PriceProvider>
          <MapViewProvider>
            <AuctionProvider>
              <GlobalStyles />
          <div className="app-container" style={{ backgroundColor: 'var(--color-background)' }}>
            <BlurredNotificationBar blurred={showWelcomePopup} />
            <BlurredHeader blurred={showWelcomePopup} />
            <Container blurred={showWelcomePopup} noPadding={isMapViewActive} noMaxWidth={isMapViewActive}>
              <ContentWrapper />
            </Container>
            
            {/* Welcome Popup */}
            {showWelcomePopup && (
              <WelcomePopup onClose={handleCloseWelcomePopup} />
            )}
            
            {/* Early Access Signup */}
            {showEarlyAccessSignup && !showWelcomePopup && (
              <EarlyAccessSignup onButtonClick={handleReopenPopup} />
            )}
          </div>
            </AuctionProvider>
          </MapViewProvider>
        </PriceProvider>
      </AuthProvider>
    </Router>
  )
}

export default App
