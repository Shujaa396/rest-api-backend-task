const express = require('express');
const router = express.Router();
const { signupUser, login } = require('../controllers/authController');

// Signup as user
router.post('/signup/user', (req, res) => {
  req.body.role = 'user';
  signupUser(req, res);
});

// Signup as developer
router.post('/signup/developer', (req, res) => {
  req.body.role = 'developer';
  signupUser(req, res);
});

// Login (same for both)
router.post('/login', login);

module.exports = router;
