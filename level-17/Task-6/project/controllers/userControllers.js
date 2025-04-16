const User = require('../models/User');

// Get all posts by user ID
const getUserPosts = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const posts = await require('../models/Post').find({ author: req.params.id }).populate('author', 'name email');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = { getUserPosts };
