
import axios from 'axios';

const apiClient = axios.create({
  //baseURL: 'https://api.sosoda.com.my/api/'; 
  baseURL: 'https://localhost:7159/api/', // 🌐 Set your domain here
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
