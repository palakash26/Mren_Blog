const express = require('express');
const {
  HandleBolgGet,
  HandleBolgGetId,
  HandleBolgPost,
  HandleBolgPut,
  HandleBlogdelete,
  HandleserachBlog,
} = require('../controlles/BlogControlles');

const router = express.Router();

// Show Blogs
router.get('/', HandleBolgGet);

// Search Blogs (specific route should come before dynamic ones)
router.get('/search', HandleserachBlog);

// Show Blog By ID
router.get('/:id', HandleBolgGetId);

// Add Blogs
router.post('/add', HandleBolgPost);

// Edit Blogs
router.put('/update/:id', HandleBolgPut);

// Delete Blogs
router.delete('/delete/:id', HandleBlogdelete);

module.exports = router;
