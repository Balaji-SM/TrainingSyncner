const Post = require('../models/Post');
const User = require('../models/User');

// ✅ Create a new post
const createPost = async (req, res) => {
  try {
    const { title, content, author } = req.body;

    const user = await User.findById(author);
    if (!user) {
      return res.status(404).json({ message: 'Author not found' });
    }

    const post = new Post({ title, content, author });
    await post.save();
    res.status(201).json({ message: 'Post created successfully', post });
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

// ✅ Get all posts with populated author
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'name email');
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

// ✅ Get posts by specific author
const getPostsByAuthor = async (req, res) => {
  try {
    const authorId = req.params.id;

    const posts = await Post.find({ author: authorId }).populate('author', 'name email');
    if (!posts.length) {
      return res.status(404).json({ message: 'No posts found for this author' });
    }

    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

// ✅ Export all functions
module.exports = {
  createPost,
  getAllPosts,
  getPostsByAuthor
};
