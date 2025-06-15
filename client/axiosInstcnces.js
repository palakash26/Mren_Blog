import axios from 'axios';

export const bookBaseUrl = axios.create({
  baseURL: 'http://localhost:5001/api/blogs'
});