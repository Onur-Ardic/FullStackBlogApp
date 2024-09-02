const Card = ({ blog }) => {
    return (
        <a href={`/blog/${blog.blogsid}`}>
            <div className="card">
                <div className="card-header">
                    <div className="card-title">
                        <h3>{blog.title}</h3>
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-desc">
                        {blog.description}
                    </p>
                </div>
            </div>
        </a>
    )
}

export default Card