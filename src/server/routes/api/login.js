const express = require("express");
const router = express.Router();

router.get('/test', (req, res) => res.send('Test Users API route'))

router.post('/', (req, res) => res.send(200))

module.exports = router