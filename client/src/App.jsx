import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./componts/Home"
import Navbar from "./componts/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css'
import Show from "./componts/Show"
import AddBlog from "./componts/AddBlog"
import UpdatedBlog from "./componts/UpdatedBlog"
import SearchResults from "./componts/SearchResults"
import NewsApp from "./componts/NewsApp"

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/api/blogs" element={<Home />} />
          <Route path="/api/blogs/:id" element={<Show />} />
          <Route path="/api/blogs/add" element={<AddBlog />} />
          <Route path="/api/blogs/search" element={<SearchResults />} />
          <Route path="/api/blogs/update/:id" element={<UpdatedBlog />} />
        
          <Route path="/api/blogs/news" element={<NewsApp />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
