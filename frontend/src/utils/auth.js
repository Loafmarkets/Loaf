// Authentication utility functions

/**
 * Get the authentication token from local storage
 * @returns {string|null} The authentication token or null if not found
 */
export const getToken = () => {
  return localStorage.getItem('token');
};

/**
 * Set the authentication token in local storage
 * @param {string} token - The authentication token to store
 */
export const setToken = (token) => {
  localStorage.setItem('token', token);
};

/**
 * Remove the authentication token from local storage
 */
export const removeToken = () => {
  localStorage.removeItem('token');
};

/**
 * Check if the user is authenticated
 * @returns {boolean} True if the user is authenticated, false otherwise
 */
export const isAuthenticated = () => {
  return !!getToken();
};

/**
 * Get the authentication header for API requests
 * @returns {Object} The authentication header object
 */
export const getAuthHeader = () => {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
};

/**
 * Parse the JWT token to get user information
 * @returns {Object|null} The decoded user information or null if not authenticated
 */
export const getUserInfo = () => {
  const token = getToken();
  if (!token) return null;
  
  try {
    // JWT tokens are in the format: header.payload.signature
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Error parsing token:', error);
    return null;
  }
};
