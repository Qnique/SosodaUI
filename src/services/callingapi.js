
import axios from 'axios';

const apiClient = axios.create({
  //baseURL: 'https://api.sosoda.com.my/api/'; 
  baseURL: 'http://localhost:5029/api/', // 🌐 Set your domain here
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
