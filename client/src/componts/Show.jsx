import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

const Show = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/blogs/${id}`)
      .then((res) => {
        setBlog(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blog:", err);
        setLoading(false);
      });
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5001/api/blogs/delete/${id}`)
      .then(() => navigate('/api/blogs'))
      .catch((err) => console.error("Error deleting blog:", err));
  };

  if (loading) {
    return <div className="text-center py-5">Loading...</div>;
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg border-0">
            <img
              className="card-img-top rounded-top"
              src={blog.imageUrl || "https://via.placeholder.com/300"}
              alt={blog.title}
              style={{ height: '300px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h4 className="card-title text-primary">{blog.title}</h4>
              <h6 className="text-secondary">
                Author: <span className="fw-bold">{blog.author}</span>
              </h6>
              <p className="card-text text-muted mt-3">{blog.content}</p>
              <div className="d-flex justify-content-between mt-4">
                <NavLink
                  className="btn btn-outline-primary"
                  to={`/api/blogs/update/${blog._id}`}
                >
                  Update
                </NavLink>
                <button className="btn btn-danger" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Show;
