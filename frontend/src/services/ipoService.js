import api, { ipoService as apiIpoService } from './api';

// Mock data for IPO properties
const mockFeaturedIPO = {
  id: 'ipo-001',
  name: 'Hermitage',
  address: '42 Wentworth Road',
  location: 'Vaucluse, Sydney',
  imageUrl: 'https://rimh2.domainstatic.com.au/K2F_ORgd_kmIe3ClzBwmk_giZC4=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2017423566_1_1_211118_045100-w1920-h1279',
  description: 'Prestigious waterfront mansion in Vaucluse with breathtaking panoramic views of Sydney Harbour, the Opera House, and Harbour Bridge. This architectural masterpiece offers unparalleled luxury living.',
  images: [
    'https://rimh2.domainstatic.com.au/K2F_ORgd_kmIe3ClzBwmk_giZC4=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/2017423566_1_1_211118_045100-w1920-h1279',
    'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  ],
  tokenPrice: 250.00, // Displayed as $250.00
  totalTokens: 50000, // Changed to 50,000 tokens as requested
  tokensSold: 67500,
  subscriptionPercentage: 67.5,
  targetRaise: 12500000,
  raisedAmount: 8437500,
  minInvestment: 625000, // 5% of total target raise
  ipoStartDate: '2025-06-01T00:00:00Z',
  ipoEndDate: '2025-07-15T00:00:00Z',
  features: [
    '7 Bedrooms',
    '8 Bathrooms',
    '6 Car Garage',
    'Infinity Pool',
    'Private Jetty'
  ],
  projectedYield: 6.2,
  propertyValue: 12500000,
  propertySize: 1250, // Displayed as 1,250
  yearBuilt: 2023,
  documents: [
    { name: 'Investment Memorandum', url: '#' },
    { name: 'Financial Projections', url: '#' },
    { name: 'Legal Documentation', url: '#' }
  ]
};

const mockPresaleProperties = [
  {
    id: 'ipo-002',
    name: '15 Bondi Road',
    location: 'Bondi, Sydney',
    imageUrl: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Beachside apartment complex just steps from the iconic Bondi Beach.',
    tokenPrice: 85.00,
    totalTokens: 150000,
    targetRaise: 12750000,
    projectedYield: 4.9,
    ipoStartDate: '2025-07-20T00:00:00Z',
    propertyValue: 12750000,
    propertySize: 1200,
    yearBuilt: 2021
  },
  {
    id: 'ipo-003',
    name: '78 Collins Avenue',
    location: 'Melbourne, Australia',
    imageUrl: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Modern office building in Melbourne CBD with long-term corporate tenants.',
    tokenPrice: 110.00,
    totalTokens: 180000,
    targetRaise: 19800000,
    projectedYield: 6.2,
    ipoStartDate: '2025-08-05T00:00:00Z',
    propertyValue: 19800000,
    propertySize: 2800,
    yearBuilt: 2019
  },
  {
    id: 'ipo-004',
    name: '23 River View',
    location: 'Brisbane, Australia',
    imageUrl: 'https://images.unsplash.com/photo-1600607687644-a7e0722b0d11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Luxury riverside apartments with stunning views of the Brisbane River.',
    tokenPrice: 95.00,
    totalTokens: 120000,
    targetRaise: 11400000,
    projectedYield: 5.5,
    ipoStartDate: '2025-08-15T00:00:00Z',
    propertyValue: 11400000,
    propertySize: 1800,
    yearBuilt: 2023
  }
];

// Mock recent purchases for live feed
const mockRecentPurchases = [
  { id: 'p1', name: 'Alex', amount: 25000, timestamp: new Date(Date.now() - 35000).toISOString() },
  { id: 'p2', name: 'Sarah', amount: 12500, timestamp: new Date(Date.now() - 180000).toISOString() },
  { id: 'p3', name: 'Michael', amount: 50000, timestamp: new Date(Date.now() - 360000).toISOString() },
  { id: 'p4', name: 'Emma', amount: 37500, timestamp: new Date(Date.now() - 720000).toISOString() },
  { id: 'p5', name: 'David', amount: 62500, timestamp: new Date(Date.now() - 1200000).toISOString() }
];

// Get featured IPO property
export const getFeaturedIPO = async () => {
  try {
    // In a real app, this would be an API call
    // return await apiClient.get('/ipos/featured');
    return { data: mockFeaturedIPO };
  } catch (error) {
    console.error('Error fetching featured IPO:', error);
    throw error;
  }
};

// Get presale properties
export const getPresaleProperties = async () => {
  try {
    // In a real app, this would be an API call
    // return await apiClient.get('/ipos/presale');
    return { data: mockPresaleProperties };
  } catch (error) {
    console.error('Error fetching presale properties:', error);
    throw error;
  }
};

// Get recent purchases for a specific IPO
export const getRecentPurchases = async (ipoId) => {
  try {
    // In a real app, this would be an API call
    // return await apiClient.get(`/ipos/${ipoId}/purchases`);
    return { data: mockRecentPurchases };
  } catch (error) {
    console.error('Error fetching recent purchases:', error);
    throw error;
  }
};

// Simulate a purchase for the IPO
export const purchaseIPOTokens = async (ipoId, amount, userId) => {
  try {
    // In a real app, this would be an API call
    // return await apiClient.post(`/ipos/${ipoId}/purchase`, { amount, userId });
    return { 
      success: true, 
      message: 'Purchase successful',
      data: {
        transactionId: `tx-${Date.now()}`,
        amount,
        timestamp: new Date().toISOString()
      }
    };
  } catch (error) {
    console.error('Error purchasing IPO tokens:', error);
    throw error;
  }
};

// Get IPO details by ID
export const getIPOById = async (ipoId) => {
  try {
    console.log('getIPOById called with ID:', ipoId);
    // In a real app, this would be an API call
    // return await apiClient.get(`/ipos/${ipoId}`);
    
    // Check if the ID matches the featured IPO
    if (ipoId === mockFeaturedIPO.id) {
      console.log('Found matching featured IPO');
      return { data: mockFeaturedIPO };
    }
    
    // Check if the ID matches any presale properties
    const presaleProperty = mockPresaleProperties.find(property => property.id === ipoId);
    if (presaleProperty) {
      console.log('Found matching presale property');
      return { data: presaleProperty };
    }
    
    // Log all available IDs for debugging
    console.log('Available IPO IDs:', [
      mockFeaturedIPO.id,
      ...mockPresaleProperties.map(p => p.id)
    ]);
    
    throw new Error(`IPO with ID ${ipoId} not found`);
  } catch (error) {
    console.error(`Error fetching IPO with ID ${ipoId}:`, error);
    throw error;
  }
};

const ipoService = {
  getFeaturedIPO,
  getPresaleProperties,
  getRecentPurchases,
  purchaseIPOTokens,
  getIPOById
};

export default ipoService;
