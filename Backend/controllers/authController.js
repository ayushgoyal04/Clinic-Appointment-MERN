// Handles register/login requests
const userService = require('../services/userService');

const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user = await userService.registerUser({ name, email, password, role });
    res.status(201).json({ message: 'User registered', user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { user, token } = await userService.loginUser({ email, password });
    res.status(200).json({ message: 'Login successful', token, user });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};

// Get current user profile
const me = async (req, res) => {
  res.status(200).json({ user: req.user });
};

const logout = async (req, res) => {
  try {
    await userService.logoutUser(req.user);
    res.status(200).json({ message: 'Logged out' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  register,
  login,
  logout,
  me,
};
