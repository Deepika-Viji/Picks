const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ||
  (import.meta.env.PROD 
    ? import.meta.env.RENDER_EXTERNAL_URL || 'https://picks-wu9p.onrender.com' // URL provided by Render if available
    : 'http://localhost:5000'); // Local development URL

const API_CONFIG = {
  baseUrl: API_BASE_URL,
  endpoints: {
    auth: {
      login: '/api/auth/login',
      register: '/api/auth/register',
      verify: '/api/auth/verify',
      refresh: '/api/auth/refresh',
      logout: '/api/auth/logout'
    },
    user: {
      profile: '/api/users/me',
      update: '/api/users/update'
    },
    hardware: '/api/hardware',
    application: '/api/application',
    models: '/api/models',
    channels: '/api/channels',
    configurations: '/api/configurations',
    parameters: '/api/picksparameters',
    tables: '/api/calculate/tables'
  },
  headers: {    
    common: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
  },
  withCredentials: true
};

console.log('API Base URL:', API_BASE_URL);
console.log('Login Endpoint:', API_CONFIG.endpoints.auth.login);


export default API_CONFIG;