// JWT middleware + allowRoles()
const { validateToken } = require('./authService');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer ')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }
  const decoded = validateToken(token);
  if (!decoded) {
    return res.status(401).json({ message: 'Not authorized, token failed' });
  }
  // Check token in DB
  const user = await User.findById(decoded.id);
  if (!user || user.token !== token) {
    return res.status(401).json({ message: 'Not authorized, invalid session' });
  }
  req.user = user;
  next();
};

const allowRoles = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message: 'Forbidden: insufficient role' });
  }
  next();
};

module.exports = {
  protect,
  allowRoles
};
