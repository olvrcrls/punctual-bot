const axios = require('axios');

const apiService = axios.create({
  baseURL: process.env.BASE_API_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds of timeout
});

module.exports = apiService;
