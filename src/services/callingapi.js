
import axios from 'axios';

const apiClient = axios.create({
  //baseURL: 'https://api.sosoda.com.my/api/'; 
  baseURL: 'https://localhost:7159/api/', // 🌐 Set your domain here
  // baseURL: 'http://localhost:5029/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
