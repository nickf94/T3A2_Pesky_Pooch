const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors')
const app = express()
app.use(cors())
const port = process.env.PORT || 7001;
const morgan = require('morgan')
connectDB();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const loginRoutes = require('./routes/api/login')
const contactRoutes = require('./routes/api/contacts')
const userRoutes = require('./routes/api/users')
app.use(morgan('dev'))
app.use('/api/users', userRoutes)
app.use('/api/contacts', contactRoutes)
app.use('/api/login', loginRoutes)

app.listen(port, () => console.log(`Server running on port ${port}`));