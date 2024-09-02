const db = require('./db')

const getAllBlogs = async () => {
  const [rows] = await db.query('SELECT * FROM blogs')
  return rows
}

module.exports = {
  getAllBlogs,
}
