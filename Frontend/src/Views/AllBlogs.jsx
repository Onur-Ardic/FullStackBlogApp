const AllBlogs = () => {
    return (
        <table className="blog-table">
            <thead>
                <tr>
                    <th className="blog-title">Title</th>

                    <th className="blog-actions">Actions</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>AllBlogs</td>

                    <td>
                        <button className="edit-button">Düzenle</button>

                        <button className="delete-button">Sil</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default AllBlogs
