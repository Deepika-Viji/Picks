const jwt = require('jsonwebtoken');
const Token = require('../models/Token');

const authMiddleware = async (req, res, next) => {
  console.log('Incoming headers:', req.headers); 
  console.log('Incoming cookies:', req.cookies);

  try {
    // Get token from header or cookie
    let token = req.header('Authorization') || req.cookies?.token;
    console.log('Extracted token:', token);
    
    if (!token) {
      console.log('No token found');
      return res.status(401).json({ message: 'Authentication required' });
    }

    // Remove Bearer if present
    if (token.startsWith('Bearer ')) {
      token = token.substring(7);
    }

    // Verify token with clock tolerance
    const decoded = jwt.verify(token, process.env.JWT_SECRET, {
      clockTolerance: 30 // 30 seconds leeway for clock skew
    });

    // Validate required claims
    if (!decoded.userId) {
      console.log('Token missing userId');
      return res.status(401).json({ message: 'Invalid token payload' });
    }

    // Attach user to request
    req.user = decoded;
    console.log(`Authenticated user ${decoded.userId} for ${req.method} ${req.path}`);
    next();
  } catch (error) {
    console.error('Authentication error:', error.message);
    
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ 
        message: 'Session expired',
        code: 'TOKEN_EXPIRED'
      });
    }
    
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ 
        message: 'Invalid token',
        code: 'INVALID_TOKEN'
      });
    }
    
    res.status(401).json({ 
      message: 'Authentication failed',
      code: 'AUTH_FAILED'
    });
  }
};

module.exports = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) throw new Error('Authentication required');

    // Check blacklist
    const blacklisted = await Token.findOne({ token });
    if (blacklisted) throw new Error('Token revoked');

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed' });
  }
};