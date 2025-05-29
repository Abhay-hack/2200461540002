const axios = require('axios');
const config = require('../config/config');

const BASE_URL = config.apiBaseUrl;
const ACCESS_TOKEN = config.accessToken;

exports.fetchData = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}${url}`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('API Error - Data:', error.response.data);
      console.error('API Error - Status:', error.response.status);
      console.error('API Error - Headers:', error.response.headers);
      throw new Error(`API request failed with status ${error.response.status}: ${error.response.data?.message || 'No detailed message'}`);
    } else if (error.request) {
      console.error('API Error - No Response:', error.request);
      throw new Error('API request failed: No response received');
    } else {
      console.error('API Error - Message:', error.message);
      throw new Error(`API request failed: ${error.message}`);
    }
  }
};

exports.getAllStocks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/stocks`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching all stocks:', error.message);
    throw new Error(`Failed to fetch all stocks: ${error.message}`);
  }
};