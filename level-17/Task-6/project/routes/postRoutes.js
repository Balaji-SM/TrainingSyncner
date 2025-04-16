const express = require('express');
const router = express.Router();
const { createPost, getAllPosts, getPostsByAuthor } = require('../controllers/postControllers');

router.post('/', createPost);         // POST /api/posts
router.get('/', getAllPosts);         // GET /api/posts
router.get('/author/:id', getPostsByAuthor); // GET /api/posts/author/:id

module.exports = router;
