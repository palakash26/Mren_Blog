Here’s a detailed **README.md** for your project:

---

# Blog and News Application

A full-stack application that enables users to manage blogs and search for news. Built using **React**, **Node.js**, **Express**, and **MongoDB**.

## Features

* **Blog Management**:

  * Create, Read, Update, and Delete (CRUD) operations for blogs.
  * Search blogs by title using case-insensitive queries.

* **News Integration**:

  * Fetch and display news articles from an external API with search and navigation functionalities.

* **Authentication**:

  * Basic login and logout functionality using session management.

## Tech Stack

* **Frontend**: React, React Router, Bootstrap
* **Backend**: Node.js, Express, MongoDB (with Mongoose)
* **Styling**: Bootstrap

## Installation and Setup

### Prerequisites

* Node.js and npm installed.
* MongoDB instance running locally or remotely.
* A valid API key from [NewsAPI](https://newsapi.org/).

### Steps to Run Locally

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/palakash26/blog-news-app.git
   cd blog-news-app
   ```

2. **Set Environment Variables**:
   Create a `.env` file in the root directory with the following:

   ```env
   PORT=5001
   MONGO_URI=mongodb://localhost:27017/blogDB
   REACT_APP_NEWS_API_KEY=your-news-api-key
   SESSION_SECRET=your-session-secret
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   cd client
   npm install
   ```

4. **Start the Backend Server**:

   ```bash
   npm run dev
   ```

5. **Start the Frontend**:

   ```bash
   cd client
   npm start
   ```

6. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000`.

## API Endpoints

### Authentication

* `POST /login`: Login with username and password.
* `POST /logout`: Logout from the current session.

### Blogs

* `GET /api/blogs`: Fetch all blogs.
* `GET /api/blogs/:id`: Fetch a specific blog by ID.
* `POST /api/blogs`: Add a new blog.
* `PUT /api/blogs/:id`: Update an existing blog by ID.
* `DELETE /api/blogs/:id`: Delete a blog by ID.
* `GET /api/blogs/search?query=<keyword>`: Search blogs by title.

### News

* `/api/blogs/news`: Fetch news articles from the News API.

## Folder Structure

```
├── client
│   ├── src
│   │   ├── components
│   │   │   ├── Navbar.js
│   │   │   ├── Home.js
│   │   │   ├── Show.js
│   │   │   ├── AddBlog.js
│   │   │   ├── UpdatedBlog.js
│   │   │   ├── SearchResults.js
│   │   │   ├── NewsApp.js
├── server.js
├── models
│   ├── DbSchema.js
├── routes
│   ├── BlogRoutes.js
```

## Scripts

* `npm start`: Run the server.
* `npm run dev`: Run the server in development mode with nodemon.

## Dependencies

### Backend

* `express`: Web framework for Node.js.
* `mongoose`: MongoDB ODM for schema management.
* `dotenv`: Manage environment variables.
* `express-session`: Session management.
* `connect-mongo`: Store session data in MongoDB.

### Frontend

* `react`: Frontend library for UI.
* `react-router-dom`: Routing for React.
* `bootstrap`: CSS framework for styling.

## License

This project is licensed under the MIT License.

---

Feel free to customize the repository link and any other specific details!
