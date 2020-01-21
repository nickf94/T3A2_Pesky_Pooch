const express = require("express");
const router = express.Router();

const User = require('../../database/models/user_model')

router.get('/test', (req, res) => res.send('Test Users API route'))

// Find User
router.get('/', (req, res) => {
  User.find()
    .then(contacts => res.json(contacts))
    .catch(err => res.status(404).json({ nocontactsfound: 'No contacts found'}))
})

// Create User
router.post('/', (req, res) => {
  User.create(req.body)
  .then(book => res.json({ msg: 'Contact added successfully' }))
  .catch(err => res.status(400).json({ error: 'Unable to add this book'}))
})

// Delete User
router.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id, req.body)
    .then(book => res.json({ msg: 'Book entry deleted successfuly' }))
    .catch(err => res.status(404).jsob({ error: 'No such contact.'}))
})

module.exports = router