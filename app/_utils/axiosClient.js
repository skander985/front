// src/api/axiosClient.js

import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:8080/api', // Replace with your backend URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
