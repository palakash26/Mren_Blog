import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/blogs")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container py-5">
      <div className="row g-4">
        {blogs.map((blog) => (
          <div className="col-md-4" key={blog._id}>
            <div className="card shadow-sm border-0 h-100">
              <NavLink  to={`/api/blogs/${blog._id}`} className="text-decoration-none">
                <img
                  className="card-img-top rounded-top"
                  src={blog.imageUrl}
                  alt={blog.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
              </NavLink>
              <div className="card-body d-flex flex-column">
                <h4 className="card-title text-primary">{blog.title}</h4>
                <p className="card-text text-muted">
                  {blog.content.slice(0, 100)}...
                </p>
                <h6 className="text-secondary mt-auto">
                  Author: <span className="fw-bold">{blog.author}</span>
                </h6>
                <h6 className="text-secondary">
                  Created At:{" "}
                  <span className="fw-bold">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </span>
                </h6>
                <NavLink
                  className="btn btn-outline-primary mt-3"
                  to={`/api/blogs/${blog._id}`}
                  role="button"
                >
                  Read More
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
