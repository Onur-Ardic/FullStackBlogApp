import { useEffect, useState } from 'react'
import './App.css'

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
    <div>
      <h1>Blog Listesi</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
