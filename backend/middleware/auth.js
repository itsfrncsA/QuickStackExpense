const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('x-auth-token');

  console.log('Auth middleware - Token received:', token ? 'Yes' : 'No');

  if (!token) {
    console.log('No token provided');
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded user:', decoded);
    req.user = decoded.user;
    next();
  } catch (err) {
    console.log('Token verification failed:', err.message);
    res.status(401).json({ message: 'Token is not valid' });
  }
};