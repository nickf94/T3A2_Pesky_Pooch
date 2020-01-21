const express = require("express");
const router = express.Router();
const loginController = require('../../controllers/login_controller.js')


router.get('/test', (req, res) => res.send('Test Login API route'))
router.post('/', loginController.loginUser)

module.exports = router