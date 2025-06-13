import axios from 'axios';

const api = axios.create({
  baseURL: '',
  // baseURL: import.meta.env.VITE_SERVER_URL_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');

  if (token && config.headers) {
    (config.headers as Record<string, string>)['Authorization'] = `Bearer ${token}`;
  }

  return config;
});

export default api;
