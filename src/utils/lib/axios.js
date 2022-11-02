import axios from 'axios';

const API_URL = 'https://preonboarding.platdev.net/api/';

const client = axios.create({
  baseURL: API_URL,
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
    'Content-Type': 'application/json'
  }
});

export default client;
