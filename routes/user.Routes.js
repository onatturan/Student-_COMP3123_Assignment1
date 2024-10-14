const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const router = express.Router();

// User registration (signup)
router.post('/signup', async (req, res) => {
  console.log('Request Body:', req.body);  // Gelen request'i loglayın
  const { username, email, password } = req.body;

  try {
    // Şifreyi hashleyin
    const hashedPassword = await bcrypt.hash(password, 10);

    // Yeni bir kullanıcı oluşturun
    const user = new User({ username, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'User successfully created', user_id: user._id });
  } catch (err) {
    console.error('User creation failed:', err);  // Hata mesajını loglayın
    res.status(400).json({ message: 'User creation failed', error: err.message });
  }
});

// User login (giriş) rotası
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Email ve şifre alanlarının boş olup olmadığını kontrol edin
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    // Kullanıcıyı email ile bulun
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Şifreyi kontrol edin
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    res.status(200).json({ message: 'Login successful', user_id: user._id });
  } catch (err) {
    console.error('Login failed:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router; 
