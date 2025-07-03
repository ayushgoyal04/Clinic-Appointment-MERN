// User registration/login logic
const User = require('../models/User');
const { hashPassword, comparePassword, generateToken } = require('../auth/authService');

const registerUser = async ({ name, email, password, role }) => {
  if (!email || !password || !role) throw new Error('Missing required fields');
  let user = await User.findOne({ email });
  if (user) throw new Error('User already exists');
  const hashed = await hashPassword(password);
  user = new User({ name, email, password: hashed, role });
  await user.save();
  return user;
};

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Invalid credentials');
  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');
  const token = await generateToken(user);
  return { user, token };
};

const logoutUser = async (user) => {
  user.token = null;
  await user.save();
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser
};
