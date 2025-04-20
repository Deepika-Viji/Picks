const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 
  (import.meta.env.PROD ? 'https://picks-usoa.onrender.com' : 'http://localhost:5000');

console.log('Environment:', import.meta.env.MODE);
console.log('API Base URL:', API_BASE_URL);
  

const API_CONFIG = {
  baseUrl: API_BASE_URL,
  endpoints: {
    auth: {
      login: '/api/users/login',
      register: '/api/auth/register',
      verify: '/api/auth/verify',
      refresh: '/api/users/refresh',
      logout: '/api/users/logout'
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