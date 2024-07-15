// src/axiosInstance.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', // Remplacez par l'URL de votre backend
  timeout: 10000, // Timeout de 10 secondes (facultatif)
});

export default axiosInstance;
