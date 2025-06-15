const mongoose = require('mongoose');

// Schema Definition
const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  imageUrl: String,
  author: String,
  createdAt: { type: Date, default: Date.now },
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog
