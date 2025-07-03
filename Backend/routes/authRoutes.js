// Routes: /api/auth/register, /login
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { protect } = require('../auth/rbac');


// Register, login, logout, and get current user
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', protect, authController.logout);
router.get('/me', protect, authController.me);

module.exports = router;
