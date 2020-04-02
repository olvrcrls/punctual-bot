const axios = require('axios');

const apiService = axios.create({
  baseURL: process.env.BASE_API_URL,
  timeout: 1000,
});

export default apiService;
