import axios from 'axios'
export const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
  },
})
