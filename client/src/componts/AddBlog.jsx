import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    imageUrl: '',
    author: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/api/blogs/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        alert('Blog added successfully!');
        navigate('/api/blogs');
      } else {
        alert(data.message || 'Failed to add blog');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while adding the blog.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white text-center">
              <h3>Add a New Blog</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="form-control"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter blog title"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="content" className="form-label">
                    Content
                  </label>
                  <textarea
                    name="content"
                    id="content"
                    className="form-control"
                    value={formData.content}
                    onChange={handleChange}
                    placeholder="Enter blog content"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="imageUrl" className="form-label">
                    Image URL
                  </label>
                  <input
                    type="text"
                    name="imageUrl"
                    id="imageUrl"
                    className="form-control"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    placeholder="Enter image URL"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="author" className="form-label">
                    Author
                  </label>
                  <input
                    type="text"
                    name="author"
                    id="author"
                    className="form-control"
                    value={formData.author}
                    onChange={handleChange}
                    placeholder="Enter author's name"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Add Blog
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
