const express = require('express');
const connectDB = require('./config/db');
const app = express()
const port = process.env.PORT || 7001;
const morgan = require('morgan')
connectDB();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const server = ('/server/server.js')

app.use('/users', userRoutes)
app.use('/contacts', contactRoutes)
app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = server; // Need this for tests to connect to server
app.use(morgan('dev'))
app.use('/api/users', require('./routes/api/users'))
app.use('/api/contacts', require('./routes/api/contacts'))
app.use('/api/login', require('./routes/api/login'))

app.listen(port, () => console.log(`Server running on port ${port}`));

