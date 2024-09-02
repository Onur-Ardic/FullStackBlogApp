import { useEffect, useState } from 'react'
import './index.scss'
import BlogsWrapper from './Components/Home/Navbar/Blogs/BlogsWrapper'
import BlogDetails from './Views/BlogDetails'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreateBlog from './Views/CreateBlog'
import AllBlogs from './Views/AllBlogs'

function App() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/blogs')
        const data = await response.json()
        if (Array.isArray(data)) {
          setBlogs(data)
        } else {
          console.error('Fetched data is not an array:', data)
        }
      } catch (error) {
        console.error('Error fetching blogs:', error)
      }
    }

    fetchBlogs()
  }, [])

  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<BlogsWrapper blogs={blogs} />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/allblogs" element={<AllBlogs />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
