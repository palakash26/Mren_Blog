const Blog = require("../models/DbSchema");

// const HandleLogin = (req, res) => {
//   const { username, password } = req.body;
//   if (username === 'admin' && password === 'password') {
//     req.session.user = { username };
//     res.status(200).json({ message: 'Login successful' });
//   } else {
//     res.status(401).json({ message: 'Invalid credentials' });
//   }
// }


// const HandleLogout = (req, res) => {
//   req.session.destroy(err => {
//     if (err) {
//       res.status(500).json({ message: 'Logout failed' });
//     } else {
//       res.status(200).json({ message: 'Logout successful' });
//     }
//   });
// }



const HandleBolgGet = async(req, res) => {
  try {
    const blogs =  await Blog.find();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const HandleBolgGetId = async(req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const HandleBolgPost =  async(req, res) => {
  const { title, content, imageUrl, author } = req.body;

  const newBlog = new Blog({
    title,
    content,
    imageUrl,
    author,
  });

  try {
    const savedBlog =  await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

};

const HandleBolgPut = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    if (!updatedBlog) return res.status(404).json({ message: 'Blog not found' });
    res.status(200).json(updatedBlog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const HandleBlogdelete = async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) return res.status(404).json({ message: 'Blog not found' });
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

const HandleserachBlog = async (req, res) => {
  const { query } = req.query;
  console.log(query);
  
  try {
    const blogs = await Blog.find({ title: { $regex: query, $options: 'i' } });
    console.log(blogs);
     // Case-insensitive search
    res.status(200).json(blogs);
  } catch (error) {
    console.error('Search error:', error.message);
    res.status(500).json({ message: 'Error searching blogs' });
  }
}

module.exports = { HandleBolgGet,HandleBolgGetId,HandleBolgPost,HandleBolgPut,HandleBlogdelete,HandleserachBlog};
