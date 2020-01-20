const express = require('express');
const connectDB = require('./config/db');
const app = express()
const port = process.env.PORT || 7001;
connectDB();
app.get('/', (req, res) => res.send('Hello from the server!'))
app.listen(port, () => console.log(`Server running on port ${port}`));