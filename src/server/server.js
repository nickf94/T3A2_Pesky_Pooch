const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('Hello from the server!'))
const port = process.env.PORT || 7002;
app.listen(port, () => console.log(`Server is running on ${port}`))