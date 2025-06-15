import React, { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import axios from "axios";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query) {
      axios
        .get(`http://localhost:5001/api/blogs/search?query=${query}`)
        .then((res) => {
          setBlogs(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching search results:", err);
          setLoading(false);
        });
    }
  }, [query]);

  if (loading) {
    return <div className="text-center py-5">Loading...</div>;
  }

  return (
    <div className="container py-5">
      <h2>Search Results for "{query}"</h2>
      <div className="row g-3">
        {blogs.length ? (
          blogs.map((blog) => (
            <div className="col-md-4" key={blog._id}>
              <div className="card shadow-sm">
                <img
                  className="card-img-top"
                  src={blog.imageUrl || "https://via.placeholder.com/150"}
                  alt={blog.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">{blog.content.slice(0, 100)}...</p>
                  <NavLink to={`/api/blogs/${blog._id}`} className="btn btn-primary">
                    Read More
                  </NavLink>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted">No results found for "{query}"</p>
        )}
      </div>
    </div>
  );
};


export default SearchResults;
