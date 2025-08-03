import axios from 'axios';

const API_URL = 'http://localhost:5001/api';

// Create axios instance with base URL
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the auth token in requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Authentication services
export const authService = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  getProfile: () => api.get('/auth/profile'),
};

// Property services
export const propertyService = {
  getAllProperties: () => api.get('/properties'),
  getPropertyById: (id) => api.get(`/properties/${id}`),
  getValuationHistory: (id) => api.get(`/properties/${id}/valuation-history`),
};

// Token services
export const tokenService = {
  getAllTokens: () => api.get('/tokens'),
  getTokenById: (id) => api.get(`/tokens/${id}`),
  getPriceHistory: (id) => api.get(`/tokens/${id}/price-history`),
  getMarketStats: (id) => api.get(`/tokens/${id}/market-stats`),
};

// Order services
export const orderService = {
  createOrder: (orderData) => api.post('/orders', orderData),
  getUserOrders: () => api.get('/orders'),
  getOrderById: (id) => api.get(`/orders/${id}`),
  cancelOrder: (id) => api.put(`/orders/${id}/cancel`),
  getOrderBook: (tokenId) => api.get(`/orders/book/${tokenId}`),
};

// Trade services
export const tradeService = {
  getAllTrades: () => api.get('/trades'),
  getTradeById: (id) => api.get(`/trades/${id}`),
  getUserTrades: () => api.get('/trades/user'),
  getTokenTrades: (tokenId) => api.get(`/trades/token/${tokenId}`),
  getTradeStatistics: (tokenId) => api.get(`/trades/token/${tokenId}/statistics`),
};

// Wallet services
export const walletService = {
  getUserWallet: () => api.get('/wallet'),
  getUserTokenWallet: (tokenId) => api.get(`/wallet/token/${tokenId}`),
  getWalletTransactions: () => api.get('/wallet/transactions'),
  depositFunds: (data) => api.post('/wallet/deposit', data),
  withdrawFunds: (data) => api.post('/wallet/withdraw', data),
  getUserPortfolio: () => api.get('/wallet/portfolio'),
};

// IPO services
export const ipoService = {
  getAllIpos: () => api.get('/ipos'),
  getIpoById: (id) => api.get(`/ipos/${id}`),
  subscribeToIpo: (ipoId, data) => api.post(`/ipos/${ipoId}/subscribe`, data),
  getUserSubscriptions: () => api.get('/ipos/subscriptions'),
};

export default api;
