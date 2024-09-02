import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BlogDetails = () => {
    const { id } = useParams()
    const [blog, setBlog] = useState(null)

    useEffect(() => {
        const fetchBlog = async () => {
            const response = await fetch(`http://localhost:5000/api/blogs/${id}`)
            const data = await response.json()
            setBlog(data)
        }
        fetchBlog()
    }, [id])

    if (!blog) return <div>Loading...</div>
    return (
        <section className="blog-details-page">
            <div className="container">
                <div className="blog-details-page-title">
                    <h2 className="blog-details-page-title-text">{blog.title}</h2>
                </div>
                <div className="blog-details-page-content">
                    <p className="blog-details-page-description-text">{blog.description}</p>
                    <p className="blog-details-page-content-text">{blog.content}</p>
                </div>
            </div>
        </section>
    )
}

export default BlogDetails
