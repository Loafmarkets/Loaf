import React, { createContext, useState, useEffect, useContext } from 'react';
import { authService } from '../services/api';

// Create the authentication context
export const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check if user is already logged in on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetchUserProfile(token);
    } else {
      setLoading(false);
    }
  }, []);

  // Fetch user profile using the token
  const fetchUserProfile = async (token) => {
    try {
      // In a real app, you would call the API
      // const response = await authService.getProfile();
      // setCurrentUser(response.data);
      
      // For now, we'll use mock data
      const mockUser = {
        id: 1,
        email: 'user@example.com',
        firstName: 'John',
        lastName: 'Doe',
        createdAt: new Date().toISOString()
      };
      
      setCurrentUser(mockUser);
      setError(null);
    } catch (err) {
      console.error('Error fetching user profile:', err);
      setError('Failed to fetch user profile');
      localStorage.removeItem('token');
    } finally {
      setLoading(false);
    }
  };

  // Login function
  const login = async (email, password) => {
    setLoading(true);
    try {
      // In a real app, you would call the API
      // const response = await authService.login({ email, password });
      // const { token, user } = response.data;
      
      // For now, we'll simulate a successful login
      const token = 'mock-jwt-token';
      const user = {
        id: 1,
        email,
        firstName: 'John',
        lastName: 'Doe',
        createdAt: new Date().toISOString()
      };
      
      localStorage.setItem('token', token);
      setCurrentUser(user);
      setError(null);
      return { success: true };
    } catch (err) {
      console.error('Login error:', err);
      setError(err.response?.data?.message || 'Invalid email or password');
      return { success: false, error: err.response?.data?.message || 'Invalid email or password' };
    } finally {
      setLoading(false);
    }
  };

  // Register function
  const register = async (userData) => {
    setLoading(true);
    try {
      // In a real app, you would call the API
      // const response = await authService.register(userData);
      // const { token, user } = response.data;
      
      // For now, we'll simulate a successful registration
      const token = 'mock-jwt-token';
      const user = {
        id: 1,
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        createdAt: new Date().toISOString()
      };
      
      localStorage.setItem('token', token);
      setCurrentUser(user);
      setError(null);
      return { success: true };
    } catch (err) {
      console.error('Registration error:', err);
      setError(err.response?.data?.message || 'Registration failed');
      return { success: false, error: err.response?.data?.message || 'Registration failed' };
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    setCurrentUser(null);
  };

  // Update user profile
  const updateProfile = async (userData) => {
    setLoading(true);
    try {
      // In a real app, you would call the API
      // const response = await authService.updateProfile(userData);
      // const updatedUser = response.data;
      
      // For now, we'll simulate a successful profile update
      const updatedUser = {
        ...currentUser,
        ...userData
      };
      
      setCurrentUser(updatedUser);
      setError(null);
      return { success: true };
    } catch (err) {
      console.error('Update profile error:', err);
      setError(err.response?.data?.message || 'Failed to update profile');
      return { success: false, error: err.response?.data?.message || 'Failed to update profile' };
    } finally {
      setLoading(false);
    }
  };

  // Context value
  const value = {
    currentUser,
    loading,
    error,
    login,
    register,
    logout,
    updateProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
