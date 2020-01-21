const express = require('express');
const connectDB = require('./config/db');
const app = express()
const port = process.env.PORT || 7001;
const morgan = require('morgan')

const bodyParser = require('body-parser')

const bp = 

connectDB();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const contactRoutes = require('./routes/api/contacts')
const userRoutes = require('./routes/api/users')
app.use(morgan('dev'))
app.use('/api/users', userRoutes)
app.use('/api/contacts', contactRoutes)

app.listen(port, () => console.log(`Server running on port ${port}`));