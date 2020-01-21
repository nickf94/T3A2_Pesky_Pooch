const express = require("express");
const router = express.Router();
const userController = require('../../controllers/user_controller')
const User = require('../../database/models/user_model')

router.get('/test', (req, res) => res.send('Test Users API route'))
// router.post('/', userController.createUser)

router.post('/new', userController.createUser)

module.exports = router