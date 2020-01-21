const express = require("express");
const router = express.Router();
const userController = require('../../controllers/user_controller')
const User = require('../../database/models/user_model')

router.get('/test', (req, res) => res.send('Test Users API route'))

router.post('/', userController.createUser)

// We won't need to get all users or delete them

// router.delete('/:id', (req, res) => {
//   User.findByIdAndRemove(req.params.id, req.body)
//     .then(book => res.json({ msg: 'Book entry deleted successfuly' }))
//     .catch(err => res.status(404).jsob({ error: 'No such contact.'}))
// })

module.exports = router