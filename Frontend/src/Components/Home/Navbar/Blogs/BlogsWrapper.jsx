import Card from "../../../Ui/Card"

const BlogsWrapper = ({ blogs }) => {
    return (
        <section className="blogs-wrapper">
            <div className="container">
                <div className="blogs-wrapper-title">
                    <h2>Bloglar</h2>
                </div>
                <div className="blogs-wrapper-container">
                    {blogs.map((blog) => (
                        <Card key={blog.blogsid} blog={blog} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BlogsWrapper