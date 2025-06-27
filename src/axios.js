import axios from 'axios';

axios.defaults.baseURL = 'https://hsr-backend.onrender.com/api'; // Replace with your actual Render backend URL

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axios;
