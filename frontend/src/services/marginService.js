import axios from 'axios';
import { getAuthHeader } from '../utils/auth';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

export const marginService = {
  // Get margin account details for the current user
  getMarginAccount: async () => {
    try {
      const response = await axios.get(`${API_URL}/margin/account`, {
        headers: getAuthHeader()
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching margin account:', error);
      throw error;
    }
  },

  // Deposit collateral into margin account
  depositCollateral: async (amount) => {
    try {
      const response = await axios.post(`${API_URL}/margin/deposit`, { amount }, {
        headers: getAuthHeader()
      });
      return response.data;
    } catch (error) {
      console.error('Error depositing collateral:', error);
      throw error;
    }
  },

  // Withdraw collateral from margin account
  withdrawCollateral: async (amount) => {
    try {
      const response = await axios.post(`${API_URL}/margin/withdraw`, { amount }, {
        headers: getAuthHeader()
      });
      return response.data;
    } catch (error) {
      console.error('Error withdrawing collateral:', error);
      throw error;
    }
  },

  // Open a new margin position
  openPosition: async (positionData) => {
    try {
      const response = await axios.post(`${API_URL}/margin/positions`, positionData, {
        headers: getAuthHeader()
      });
      return response.data;
    } catch (error) {
      console.error('Error opening margin position:', error);
      throw error;
    }
  },

  // Close an existing margin position
  closePosition: async (positionId, closePrice) => {
    try {
      const response = await axios.post(`${API_URL}/margin/positions/${positionId}/close`, 
        { closePrice }, 
        { headers: getAuthHeader() }
      );
      return response.data;
    } catch (error) {
      console.error('Error closing margin position:', error);
      throw error;
    }
  },

  // Get all margin positions for the current user
  getPositions: async () => {
    try {
      const response = await axios.get(`${API_URL}/margin/positions`, {
        headers: getAuthHeader()
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching margin positions:', error);
      throw error;
    }
  },

  // Get details for a specific margin position
  getPosition: async (positionId) => {
    try {
      const response = await axios.get(`${API_URL}/margin/positions/${positionId}`, {
        headers: getAuthHeader()
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching margin position details:', error);
      throw error;
    }
  },

  // Get margin transaction history
  getTransactionHistory: async () => {
    try {
      const response = await axios.get(`${API_URL}/margin/transactions`, {
        headers: getAuthHeader()
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching margin transaction history:', error);
      throw error;
    }
  },

  // Get available leverage options with interest rates
  getLeverageOptions: async () => {
    try {
      const response = await axios.get(`${API_URL}/margin/leverage-options`, {
        headers: getAuthHeader()
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching leverage options:', error);
      throw error;
    }
  }
};

export default marginService;
