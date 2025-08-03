import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-background: #0A0A0C;
    --color-background-secondary: #121216;
    --color-text: #FFFFFF;
    --color-text-secondary: #B0B0B8;
    --color-accent: #E6C87E;
    --color-accent-hover: #F2D898;
    --color-positive: #00C076;
    --color-negative: #FF5757;
    --color-border: #2A2A32;
    --color-card: #16161C;
    --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    --border-radius: 8px;
    --transition-speed: 0.2s;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    font-family: var(--font-family);
    background-color: var(--color-background) !important;
    color: var(--color-text) !important;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
  }
  
  #root {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  main {
    flex: 1;
    width: 100%;
  }

  a {
    color: var(--color-accent);
    text-decoration: none;
    transition: color var(--transition-speed) ease;
    
    &:hover {
      color: var(--color-accent-hover);
    }
  }

  button {
    font-family: var(--font-family);
    cursor: pointer;
    border: none;
    outline: none;
    transition: all var(--transition-speed) ease;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .positive {
    color: var(--color-positive);
  }

  .negative {
    color: var(--color-negative);
  }

  .card {
    background-color: var(--color-card);
    border-radius: var(--border-radius);
    padding: 1.5rem;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.03);
  }

  .app-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow-x: hidden;
    max-width: 100vw;
  }

  .container {
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .map-view-active .container {
    padding: 0;
  }

  .btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border-radius: var(--border-radius);
    font-weight: 500;
    text-align: center;
    letter-spacing: 0.03em;
    transition: all 0.3s ease;
    
    &.btn-primary {
      background-color: var(--color-accent);
      color: var(--color-background);
      
      &:hover {
        background-color: var(--color-accent-hover);
      }
    }
    
    &.btn-secondary {
      background-color: transparent;
      border: 1px solid var(--color-accent);
      color: var(--color-accent);
      
      &:hover {
        background-color: rgba(230, 200, 126, 0.1);
      }
    }
  }
`;

export default GlobalStyles;
