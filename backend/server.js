const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const calculationRoute = require('./routes/calculate');
const connectDB = require('./config/db');  // MongoDB connection function
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const authMiddleware = require('./middleware/authMiddleware');
const helmet = require('helmet');
const morgan = require('morgan');
const picksHardwareRoutes = require('./routes/picks_hardware');  // Hardware routes
const picksApplicationRoutes = require('./routes/picks_application');  // Application routes
const picksTableRoutes = require('./routes/picks_table');  // Picks Table routes
const picksModelRoutes = require('./routes/picks_model');  // Picks Model routes
const picksParametersRoutes = require('./routes/picks_parameter'); 
const picksChannelRoutes = require('./routes/picks_channel');
const configurationRoutes = require('./routes/picks_configuration');
const { createConfiguration } = require('./controllers/configurationController');


dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Enhanced logging
console.log('Environment Variables:');
console.log('MongoDB URI:', process.env.MONGO_URI ? '***configured***' : 'missing');
console.log('JWT Secret:', process.env.JWT_SECRET ? '***configured***' : 'missing');
console.log('Frontend URL:', process.env.FRONTEND_URL || 'http://localhost:5173');

// Security middleware
app.use(helmet());
app.use(morgan('dev')); // Log all requests

// Enhanced CORS configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  exposedHeaders: ['Authorization']
};

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  exposedHeaders: ['Authorization']
}));

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Enable pre-flight for all routes


// Body parsing with increased limit for configurations
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Database connection with retry logic
const connectWithRetry = async () => {
  try {
    await connectDB();
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    console.log("Retrying in 5 seconds...");
    setTimeout(connectWithRetry, 5000);
  }
};

connectWithRetry();

// Route registration with logging
const registerRoute = (path, router) => {
  console.log(`Registering route: ${path}`);
  app.use(path, router);
};

registerRoute('/api/configurations', configurationRoutes);
registerRoute('/api/calculate', calculationRoute);
registerRoute('/api/users', userRoutes);
registerRoute('/api/hardware', picksHardwareRoutes);
registerRoute('/api/application', picksApplicationRoutes);
registerRoute('/api/calculate/tables', picksTableRoutes);
registerRoute('/api/calculate/models', picksModelRoutes);
registerRoute('/api/picksparameters', picksParametersRoutes);
registerRoute('/api/channels', picksChannelRoutes);

// Enhanced auth verification endpoint
app.get('/api/auth/verify', authMiddleware, (req, res) => {
  console.log('Token verification successful for user:', req.user.userId);
  res.status(200).json({
    success: true,
    user: {
      id: req.user.userId,
      username: req.user.username,
      role: req.user.role
    }
  });
});

// Enhanced health check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date(),
    uptime: process.uptime()
  });
});

// Enhanced 404 handler
app.all('*', (req, res) => {
  console.log(`404: ${req.method} ${req.originalUrl}`);
  res.status(404).json({
    error: 'Route not found',
    path: req.originalUrl
  });
});

// Enhanced error handler
app.use((err, req, res, next) => {
  console.error('Error:', {
    path: req.originalUrl,
    method: req.method,
    error: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });

  res.status(err.status || 500).json({
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// Server startup
const server = app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${port}`);
});

// Handle shutdown gracefully
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    console.log('Server terminated');
    process.exit(0);
  });
});