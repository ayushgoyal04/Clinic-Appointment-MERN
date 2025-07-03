// Password hashing, token generation, validation
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

const generateToken = async (user) => {
  const payload = {
    id: user._id,
    role: user.role,
    email: user.email
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });
  // Store token in DB
  user.token = token;
  await user.save();
  return token;
};

const validateToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return null;
  }
};

module.exports = {
  hashPassword,
  comparePassword,
  generateToken,
  validateToken
};
