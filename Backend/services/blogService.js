const db = require('./db')

const getAllBlogs = async () => {
  const [rows] = await db.query('SELECT * FROM blogs')
  return rows
}

const getBlogById = async (id) => {
  const [rows] = await db.query('SELECT * FROM blogs WHERE blogsid = ?', [id])
  return rows[0]
}

const createBlog = async (title, description, content) => {
  const [result] = await db.query(
    'INSERT INTO blogs (title, description, content) VALUES (?, ?, ?)',
    [title, description, content],
  )
  return result
}

module.exports = {
  getAllBlogs,
  getBlogById,
  createBlog,
}
