const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

app.use(cors())
app.use(express.json())

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
