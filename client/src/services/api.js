import axios from 'axios';

export const api = axios.create({ 
  baseURL: 'https://1-web-d-proyecto-final-ten.vercel.app/api',
  withCredentials: true 
});