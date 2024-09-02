const express = require('express')
const router = express.Router()
const blogService = require('../services/blogService')

router.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await blogService.getAllBlogs()
    res.json(blogs)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})
module.exports = router
