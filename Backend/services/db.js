const mysql = require('mysql2')
require('dotenv').config()

// MySQL bağlantısı
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})

pool.on('error', (err) => {
  console.error('MySQL error:', err)
})

module.exports = pool.promise()
