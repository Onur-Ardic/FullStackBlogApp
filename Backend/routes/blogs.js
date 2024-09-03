const express = require('express')
const router = express.Router()
const blogService = require('../services/blogService')

router.post('/api/createblog', async (req, res) => {
  try {
    const { title, description, content } = req.body
    const result = await blogService.createBlog(title, description, content)
    res.json(result)
    res.redirect('/')
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

router.get('/api/blogs', async (req, res) => {
  try {
    const blogs = await blogService.getAllBlogs()
    res.json(blogs)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

router.get('/api/blogs/:id', async (req, res) => {
  try {
    const blog = await blogService.getBlogById(req.params.id)
    res.json(blog)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

router.get('api/allblogs', async (req, res) => {
  try {
    const blogs = await getAllBlogs()
    res.json(blogs)
  } catch {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

router.delete('/api/blogs/:id', async (req, res) => {
  try {
    const result = await blogService.deleteBlog(req.params.id)
    res.json(result)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

module.exports = router
