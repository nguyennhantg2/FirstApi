const db = require('db')
db.connect({
  port: process.env.SERVER_PORT,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
})