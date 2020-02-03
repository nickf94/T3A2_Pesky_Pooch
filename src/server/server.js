const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')

const app = express()
const passport = require("passport");
app.use(cors())
const port = process.env.PORT || 7001;
const environment = process.argv[2] || "TEST"

const morgan = require('morgan')
const authorize = require('./middleware/authorize')
connectDB(environment)

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('dev'))
app.use(bodyParser.json())

app.use('/api/events/new', authorize.checkToken)
app.use('/api/events/update', authorize.checkToken)
app.use('/api/events/delete', authorize.checkToken)
app.use('/uploads/addimage', require('./routes/api/images'))
app.use('/api/services/new', authorize.checkToken)
app.use('/api/services/delete', authorize.checkToken)
app.use('/api/services/edit', authorize.checkToken)
app.use('/api/users', require('./routes/api/users'))
app.use('/api/contact', require('./routes/api/contacts'))
app.use('/api/login', require('./routes/api/login'))
app.use('/api/events', authorize.checkToken, require('./routes/api/events'))
app.use('/api/services', require('./routes/api/services'))
app.use('/api/testimonials', require('./routes/api/testimonials'))
app.listen(port, () => console.log(`Server running on port ${port}`))

// Need this for tests to connect to server

module.exports = app
