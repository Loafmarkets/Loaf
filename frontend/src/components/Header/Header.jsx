import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../assets/loaf-logo-clipped.png';
import { useAuth } from '../../context/AuthContext';
import { NOTIFICATION_BAR_HEIGHT } from '../NotificationBar/NotificationBar';

const Overlay = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(3px);
  z-index: 999;
`;

const MobileOnlyButton = styled.button`
  display: none;
  background-color: ${props => props.isOpen ? 'rgba(240, 185, 11, 0.2)' : '#f0b90b'};
  color: ${props => props.isOpen ? '#ffffff' : '#0b0e11'};
  font-size: 24px;
  font-weight: bold;
  width: 44px;
  height: 44px;
  justify-content: center;
  align-items: center;
  margin-left: 0.75rem;
  z-index: 1100;
  border-radius: 8px;
  border: ${props => props.isOpen ? '1px solid #f0b90b' : 'none'};
  line-height: 1;
  padding: 0;
  cursor: pointer;
  box-shadow: ${props => props.isOpen ? '0 2px 8px rgba(0, 0, 0, 0.3)' : 'none'};
  
  &:hover {
    background-color: ${props => props.isOpen ? 'rgba(240, 185, 11, 0.3)' : '#e0aa0b'};
  }
  
  &:active {
    background-color: ${props => props.isOpen ? 'rgba(240, 185, 11, 0.4)' : '#d19f0a'};
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background-color: #0b0e11;
  border-bottom: 1px solid #232a32;
  position: fixed;
  top: ${NOTIFICATION_BAR_HEIGHT};
  left: 0;
  right: 0;
  z-index: 1000; /* Lower than notification bar z-index but still high */
  width: 100%;
  height: 64px;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
  padding-top: 6px; /* Increased padding to move logo further down */
  
  img {
    height: 36px;
  }
  
  h1 {
    display: none;
  }
  
  @media (max-width: 768px) {
    img {
      height: 30px;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  
  .desktop-nav {
    display: flex;
  }
  
  .mobile-menu-content {
    display: none;
  }
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => props.isOpen ? '0' : '-100%'};
    width: 80%;
    max-width: 320px;
    height: 100vh;
    background-color: #1a2030;
    z-index: 1000;
    transition: right 0.3s ease;
    box-shadow: ${props => props.isOpen ? '-5px 0 15px rgba(0, 0, 0, 0.3)' : 'none'};
    overflow-y: auto;
    
    .desktop-nav {
      display: none;
    }
    
    .mobile-menu-content {
      display: flex;
      flex-direction: column;
      padding-top: 64px;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
`;

const NavLink = styled(Link)`
  margin: 0 16px;
  color: #eaecef;
  font-weight: 600;
  font-size: 14px;
  padding: 0 4px;
  height: 64px;
  display: flex;
  align-items: center;
  position: relative;
  transition: color 0.2s ease;
  
  &:first-child {
    margin-left: 0;
  }
  
  &:hover, &.active {
    color: #f0b90b;
  }
  
  &.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #f0b90b;
  }
  
  @media (max-width: 768px) {
    margin: 0;
    padding: 16px 24px;
    width: 100%;
    height: auto;
    text-align: left;
    font-size: 16px;
    color: #eaecef;
    display: flex;
    align-items: center;
    
    &:hover {
      background-color: #2b3139;
    }
    
    &.active::after {
      display: none;
    }
    
    svg {
      margin-right: 12px;
      width: 20px;
      height: 20px;
    }
  }
`;

const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    margin-left: auto;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  margin-left: 1rem;
  transition: all 0.2s ease;
  
  &.login {
    background-color: transparent;
    border: 1px solid #f0b90b;
    color: #f0b90b;
    
    &:hover {
      background-color: rgba(240, 185, 11, 0.1);
    }
  }
  
  &.signup {
    background-color: #f0b90b;
    color: #0b0e11;
    border: none;
    
    &:hover {
      background-color: #f8d12f;
    }
  }
  
  @media (max-width: 768px) {
    padding: 0.4rem 0.75rem;
    font-size: 0.9rem;
    margin-left: 0.5rem;
  }
`;

const UserMenu = styled.div`
  position: relative;
  margin-left: 1rem;
  height: 64px;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    margin-left: auto;
  }
`;

const UserButton = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  color: #eaecef;
  font-size: 14px;
  padding: 0 8px;
  height: 36px;
  border-radius: 4px;
  
  &:hover {
    background-color: #2b3139;
  }
  
  span {
    margin-right: 0.5rem;
  }
  
  svg {
    width: 12px;
    height: 12px;
    transition: transform 0.2s ease;
    transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0)'};
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background-color: #1e2329;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  border: 1px solid #2b3139;
  min-width: 200px;
  overflow: hidden;
  z-index: 10;
  padding: 0.5rem 0;
`;

const MenuItem = styled.div`
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  color: #eaecef;
  font-size: 14px;
  border-bottom: 1px solid #2b3139;
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: #2b3139;
  }
  
  &.logout {
    color: #f6465d;
  }
`;

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #2b3139;
`;

const MobileMenuClose = styled.button`
  background: none;
  border: none;
  color: #eaecef;
  cursor: pointer;
  padding: 8px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 8px 12px;
  margin: 16px 24px 8px;
  border: 1px solid rgba(240, 185, 11, 0.3);
  
  svg {
    color: #f0b90b;
    margin-right: 8px;
    width: 16px;
    height: 16px;
  }
  
  input {
    background: none;
    border: none;
    color: #ffffff;
    font-size: 14px;
    width: 100%;
    outline: none;
    height: 24px;
    
    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

const MobileNavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-weight: 500;
  
  &:hover {
    background-color: rgba(240, 185, 11, 0.1);
    color: #f0b90b;
  }
  
  svg {
    width: 20px;
    height: 20px;
    margin-right: 12px;
    color: #f0b90b;
  }
`;

const MobileMenuButton = styled.button`
  display: flex; /* Always display flex */
  background: transparent;
  color: #f0b90b; /* Binance yellow */
  font-size: 1.25rem;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  margin-left: 0.75rem;
  z-index: 1100; /* Increased z-index */
  transition: transform 0.2s ease;
  border-radius: 4px;
  border: 1px solid #f0b90b; /* Added border for visibility */
  
  &:hover {
    background-color: rgba(240, 185, 11, 0.1);
  }
  
  @media (max-width: 768px) {
    position: ${props => props.isOpen ? 'fixed' : 'relative'};
    right: ${props => props.isOpen ? '1rem' : '0'};
    top: ${props => props.isOpen ? '1rem' : '0'};
  }
  
  @media (min-width: 769px) {
    display: none; /* Hide on desktop */
  }
  
  svg {
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease;
    fill: #f0b90b; /* Explicitly set fill color */
  }
  
  &:hover svg {
    transform: scale(1.1);
  }
`;

const Header = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  // Use the authentication context
  const { currentUser, logout } = useAuth();
  const isAuthenticated = !!currentUser;
  
  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isUserMenuOpen && !event.target.closest('.user-menu')) {
        setIsUserMenuOpen(false);
      }
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isUserMenuOpen, isMobileMenuOpen]);
  
  // Close mobile menu when navigating
  const handleNavigation = (path) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };
  
  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
    setIsMobileMenuOpen(false);
    navigate('/');
  };
  
  return (
    <>
      <Overlay isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(false)} />
      <HeaderContainer>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Logo>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <img src={logo} alt="LOAF Logo" />
          </Link>
          <h1>LOAF</h1>
        </Logo>
        
        <Nav isOpen={isMobileMenuOpen} className="mobile-menu">
          {/* Desktop navigation links - hidden when mobile menu is open */}
          {!isMobileMenuOpen && (
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', height: '64px' }} className="desktop-nav">
              <NavLink to="/" className={location.pathname === '/' ? 'active' : ''}>Home</NavLink>
              <NavLink to="/properties" className={location.pathname.startsWith('/properties') ? 'active' : ''}>Properties</NavLink>
              <NavLink to="/market" className={location.pathname === '/market' ? 'active' : ''}>Market</NavLink>
              {/* Swap page temporarily hidden - will be released when more properties are listed */}
              <NavLink to="/ipo" className={location.pathname.startsWith('/ipo') ? 'active' : ''}>IPOs</NavLink>
              <NavLink to="/auction-test" className={location.pathname.startsWith('/auction-test') ? 'active' : ''}>Live Auction</NavLink>
              <NavLink to="/home-owners" className={location.pathname === '/home-owners' ? 'active' : ''}>Home Owners</NavLink>
              {isAuthenticated ? (
                <>
                  <NavLink to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>My Portfolio</NavLink>
                  <NavLink to="/wallet" className={location.pathname === '/wallet' ? 'active' : ''}>Wallet</NavLink>
                </>
              ) : (
                <NavLink to="/buy" className={location.pathname === '/buy' ? 'active' : ''}>Buy Property</NavLink>
              )}
            </div>
          )}
          
          {/* Mobile menu content - LOAF Real Estate style */}
          <div className="mobile-menu-content">
            <MobileMenuHeader>
              <MobileMenuClose onClick={() => setIsMobileMenuOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </MobileMenuClose>
            </MobileMenuHeader>
            
            {!isAuthenticated && (
              <div style={{ display: 'flex', gap: '12px', padding: '16px 24px' }}>
                <Button className="login" onClick={() => navigate('/login')} style={{ flex: 1, margin: 0 }}>Log In</Button>
                <Button className="signup" onClick={() => navigate('/register')} style={{ flex: 1, margin: 0 }}>Sign Up</Button>
              </div>
            )}
            
            <SearchBar>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
              <input type="text" placeholder="Search..." />
            </SearchBar>
            
            <MobileNavItem onClick={() => handleNavigation('/')}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
              Home
            </MobileNavItem>
            
            <MobileNavItem onClick={() => handleNavigation('/buy')}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
              </svg>
              Buy Property
            </MobileNavItem>

            <MobileNavItem onClick={() => handleNavigation('/market')}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/>
              </svg>
              Market
            </MobileNavItem>
            
            <MobileNavItem onClick={() => handleNavigation('/trade')}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"/>
              </svg>
              Trade
            </MobileNavItem>

            <MobileNavItem onClick={() => handleNavigation('/properties')}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
              Properties
            </MobileNavItem>

            <MobileNavItem onClick={() => handleNavigation('/ipo')}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-9-1c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-6v11c0 1.1-.9 2-2 2H4v-2h17V7h2z"/>
              </svg>
              IPOs
            </MobileNavItem>

            <MobileNavItem onClick={() => handleNavigation('/auction-test')}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.75 22c0 .97-.78 1.75-1.75 1.75s-1.75-.78-1.75-1.75.78-1.75 1.75-1.75 1.75.78 1.75 1.75zm-1.75-22c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2s2-.9 2-2v-6c0-1.1-.9-2-2-2zm4.25 9.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0 4.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm-4.25 3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm-4.5-8c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0 4.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0 4.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"/>
              </svg>
              Live Auction
            </MobileNavItem>
            
            <MobileNavItem onClick={() => handleNavigation('/home-owners')}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 9.3V4h-3v2.6L12 3 2 12h3v8h5v-6h4v6h5v-8h3l-3-2.7zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2h-4z"/>
              </svg>
              Home Owners
            </MobileNavItem>

            {isAuthenticated && (
              <MobileNavItem onClick={() => handleNavigation('/portfolio')}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 8.69V4h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
                </svg>
                Portfolio
              </MobileNavItem>
            )}

            {isAuthenticated && (
              <MobileNavItem onClick={() => handleNavigation('/wallet')}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                </svg>
                Wallet
              </MobileNavItem>
            )}
            
            <div style={{ borderTop: '1px solid #2b3139', margin: '8px 0' }}></div>
            
            <MobileNavItem>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>
              </svg>
              Theme
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '8px', color: '#848e9c' }}>Light</span>
                <div style={{ width: '40px', height: '20px', backgroundColor: '#2b3139', borderRadius: '10px', position: 'relative', cursor: 'pointer' }}>
                  <div style={{ position: 'absolute', right: '2px', top: '2px', width: '16px', height: '16px', backgroundColor: '#f0b90b', borderRadius: '50%' }}></div>
                </div>
              </div>
            </MobileNavItem>
            
            {isAuthenticated && (
              <MobileNavItem onClick={handleLogout} style={{ color: '#f6465d' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#f6465d' }}>
                  <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                </svg>
                Logout
              </MobileNavItem>
            )}
          </div>
        </Nav>
      </div>
      
      {/* Only show the fixed position button when menu is open */}
      {isMobileMenuOpen && (
        <MobileOnlyButton 
          onClick={() => setIsMobileMenuOpen(false)}
          isOpen={true}
          style={{ position: 'fixed', right: '1rem', top: '1rem' }}
        >
          ✕
        </MobileOnlyButton>
      )}
      
      {isAuthenticated ? (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <UserMenu>
            <UserButton 
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              isOpen={isUserMenuOpen}
              className="user-menu"
            >
              <span>{currentUser?.firstName || 'User'}</span>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </UserButton>
            
            {isUserMenuOpen && (
              <DropdownMenu>
                <MenuItem onClick={() => handleNavigation('/profile')}>Profile</MenuItem>
                <MenuItem onClick={() => handleNavigation('/portfolio')}>Portfolio</MenuItem>
                <MenuItem onClick={() => handleNavigation('/orders')}>Orders</MenuItem>
                <MenuItem onClick={() => handleNavigation('/wallet')}>Wallet</MenuItem>
                <MenuItem className="logout" onClick={handleLogout}>Logout</MenuItem>
              </DropdownMenu>
            )}
          </UserMenu>
          {/* Only show the regular button when menu is closed */}
          {!isMobileMenuOpen && (
            <MobileOnlyButton 
              onClick={() => setIsMobileMenuOpen(true)}
              isOpen={false}
            >
              ☰
            </MobileOnlyButton>
          )}
        </div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <AuthButtons>
            <Button className="login" onClick={() => navigate('/login')}>Login</Button>
            <Button className="signup" onClick={() => navigate('/register')}>Sign Up</Button>
          </AuthButtons>
          {/* Only show the regular button when menu is closed */}
          {!isMobileMenuOpen && (
            <MobileOnlyButton 
              onClick={() => setIsMobileMenuOpen(true)}
              isOpen={false}
            >
              ☰
            </MobileOnlyButton>
          )}
        </div>
      )}
    </HeaderContainer>
    </>
  );
};

export default Header;
