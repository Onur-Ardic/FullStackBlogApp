const express = require('express')
const cors = require('cors')
require('dotenv').config()

// Rota dosyalarını içe aktar
const blogRoutes = require('./routes/blogs')

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.use('/', blogRoutes)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
