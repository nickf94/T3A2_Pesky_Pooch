const express = require('express');
const connectDB = require('./config/db');
const app = express()
const port = process.env.PORT || 7001;
connectDB();
const contactRoutes = require('./routes/api/contacts')
const userRoutes = require('./routes/api/users')

app.use('/users', userRoutes)
app.use('/contacts', contactRoutes)
app.listen(port, () => console.log(`Server running on port ${port}`));