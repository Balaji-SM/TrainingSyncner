const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./User.js');

dotenv.config();
const app = express();
app.use(express.json());

// 🔗 Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error(err));

// 🚀 Routes

// Create User
app.post('/api/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: 'User created', user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all active users
app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Get user profile
app.get('/api/users/:id/profile', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user.generateProfile());
});

// Find users by email domain
app.get('/api/users/domain/:domain', async (req, res) => {
  const users = await User.findByEmailDomain(req.params.domain);
  res.json(users);
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
