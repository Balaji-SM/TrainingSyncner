const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');

// 🔹 POST /api/users (already implemented earlier)
router.post('/api/users', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json(newUser);

  } catch (err) {
    console.error('Error creating user:', err);
    res.status(500).json({ message: 'Server error' });
  }
});


// ✅ GET /api/users - List users with pagination and filtering
router.get('/api/users', async (req, res) => {
  try {
    const { page = 1, limit = 5, name, email } = req.query;

    const query = {};
    if (name) query.name = new RegExp(name, 'i'); // Case-insensitive filter
    if (email) query.email = new RegExp(email, 'i');

    const users = await User.find(query)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    const total = await User.countDocuments(query);

    res.status(200).json({
      total,
      page: parseInt(page),
      limit: parseInt(limit),
      users
    });
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ message: 'Server error' });
  }
});


// ✅ GET /api/users/:id - Get single user by ID with validation
router.get('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (err) {
    console.error('Error fetching user:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
