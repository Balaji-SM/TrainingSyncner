const express = require('express');
const router = express.Router();
const { getUserPosts } = require('../controllers/userControllers');

router.get('/:id/posts', getUserPosts); 
module.exports = router;
