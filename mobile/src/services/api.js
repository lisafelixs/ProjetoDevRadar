import axios from 'axios';

const api = axios.create({
    baseURL: 'http://155.1.1.52:3333',
});

export default api;