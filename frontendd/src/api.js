import axios from 'axios';

// Create an instance of axios with default headers
const api = axios.create({
  baseURL: 'http://localhost:3001/api',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

export default api;