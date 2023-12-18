import axios from 'axios'
export const api = axios.create({
  baseURL: 'https://halogenn.onrender.com',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
  },
})
