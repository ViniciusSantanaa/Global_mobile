import axios from 'axios';

const api = axios.create({
  baseURL: 'https://flood-safe-api-production.up.railway.app', 
  timeout: 5000,
});

export default api;
