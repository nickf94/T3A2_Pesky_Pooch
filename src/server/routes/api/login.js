const express = require("express");
const router = express.Router();
const loginController = require('../../controllers/login_controller.js')


router.get('/test', (req, res) => res.send('Test Login API route'))
router.post('/', (req, res) => res.send(200))

module.exports = router