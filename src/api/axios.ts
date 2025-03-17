import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api'; // Replace with your API base URL

const instance = axios.create({
    baseURL,
    timeout: 10000, // Timeout in milliseconds
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add request interceptors (e.g., for authentication)
instance.interceptors.request.use(
    (config) => {
        // Add authentication token if needed
        // const token = localStorage.getItem('token');
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add response interceptors (e.g., for error handling)
instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        // Handle errors (e.g., show notifications)
        return Promise.reject(error);
    }
);

export default instance;