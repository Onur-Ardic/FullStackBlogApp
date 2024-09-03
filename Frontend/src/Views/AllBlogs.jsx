import { useEffect, useState } from "react"

const AllBlogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/blogs')
                const data = await response.json()
                setBlogs(data)
            } catch (error) {
                console.error('Error fetching blogs:', error)
            }
        }

        fetchBlogs()
    }, [])

    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:5000/api/blogs/${id}`, {
                method: 'DELETE',
            })
            setBlogs(blogs.filter((blog) => blog.blogsid !== id))
        } catch (error) {
            console.error('Error deleting blog:', error)
        }
    }

    return (
        <section className="all-blog-list">
            <div className="container">
                <table className="blog-table">

                    <thead>
                        <tr>
                            <th className="blog-title">Title</th>
                            <th className="blog-actions">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {blogs.map((blog) => (
                            <tr key={blog.id}>
                                <td>{blog.title}</td>
                                <td>
                                    <button onClick={() => handleDelete(blog.blogsid)} className="delete-button">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </section>
    )
}

export default AllBlogs
