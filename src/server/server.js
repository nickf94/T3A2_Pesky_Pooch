const multer = require('multer')
const storage = multer.memoryStorage();
const upload = multer({ storage })

const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')

const app = express()
const passport = require("passport");
const morgan = require('morgan')
const authorize = require('./middleware/authorize')
const port = process.env.PORT || 7001;
const environment = process.argv[2] || "TEST"
app.use(cors())
connectDB(environment)
app.use(express.urlencoded({ 
  extended: true,
  limit: '50mb'
}))
app.use(express.json({
  limit: '50mb'
}))

app.use(morgan('dev'))

app.listen(port, () => console.log(`Server running on port ${port}`))

// Need this for tests to connect to server

module.exports = app
