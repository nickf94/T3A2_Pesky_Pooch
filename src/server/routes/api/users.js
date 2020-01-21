const express = require("express");
const router = express.Router();
const userController = require('../../controllers/user_controller')
const User = require('../../database/models/user_model')

router.get('/test', (req, res) => res.send('Test Users API route'))

// Create User
router.post('/', (req, res) => {
  User.create(req.body)
  .then(book => res.json({ msg: 'Contact added successfully' }))
  .catch(err => res.status(400).json({ error: 'Unable to add this book'}))
})

module.exports = router