import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const API_KEY = "1c6b8baa20c948a7992b15b2f89b2d05";
const BASE_URL = "https://newsapi.org/v2/everything?q=";

const NewsApp = () => {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("India");
  const [activeNav, setActiveNav] = useState("India");
  const [visibleCount, setVisibleCount] = useState(9); // Manage visible articles
  const [isLoading, setIsLoading] = useState(false); // Manage loading state

  useEffect(() => {
    fetchNews(searchQuery);
    setVisibleCount(9); // Reset to show first 9 articles on new search
  }, [searchQuery]);

  const fetchNews = async (query) => {
    const validQuery = query.trim() || "India"; // Default to "India" if query is empty
    try {
      const response = await axios.get(`${BASE_URL}${validQuery}`, {
        params: { apiKey: API_KEY },
      });
      setArticles(response.data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchQuery(searchQuery);
    }
  };

  const handleNavClick = (navItem) => {
    setSearchQuery(navItem);
    setActiveNav(navItem);
  };

  const handleShowMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + 9); // Show 9 more articles
      setIsLoading(false);
    }, 1000); // Simulate a 1-second loading time
  };

  return (
    <div className="container my-4">
      <div className="d-flex flex-row mb-3">
        <nav className="nav nav-pills mb-4 p-2 w-75">
          {["India", "Technology", "Sports", "Business"].map((navItem) => (
            <button
              key={navItem}
              className={`nav-link ${activeNav === navItem ? "active" : ""}`}
              onClick={() => handleNavClick(navItem)}
            >
              {navItem}
            </button>
          ))}
        </nav>

        {/* Search */}
        <form className="input-group mb-4 p-2" onSubmit={handleSearch}>
          <input
            type="text"
            className="form-control"
            placeholder="Search news..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </form>
      </div>

      {/* News Cards */}
      <div className="row g-3">
        {articles.slice(0, visibleCount).map((article, index) => (
          <div className="col-md-4" key={index}>
            <NewsCard article={article} />
          </div>
        ))}
      </div>

      {/* "Read More" Button */}
      {visibleCount < articles.length && (
        <div className="text-center mt-4">
          {isLoading ? (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <button className="btn btn-outline-primary" onClick={handleShowMore}>
              Read More
            </button>
          )}
        </div>
      )}
    </div>
  );
};

const NewsCard = ({ article }) => {
  if (!article.urlToImage) return null;

  return (
    <div
      className="card h-100 shadow-sm"
      onClick={() => window.open(article.url, "_blank")}
      style={{ cursor: "pointer" }}
    >
      <img
        src={article.urlToImage}
        alt={article.title}
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>
        <p className="card-text">{article.description}</p>
      </div>
      <div className="card-footer text-muted small">
        {article.source.name} •{" "}
        {new Date(article.publishedAt).toLocaleString("en-US", {
          timeZone: "Asia/Jakarta",
        })}
      </div>
    </div>
  );
};

export default NewsApp;
