const express = require("express");
const router = express.Router();

const Contact = require('../../database/models/contact_model')

router.get('/test', (req, res) => res.send('Test Contacts API route'))

router.get('/', (req, res) => {
  Contact.find()
    .then(contacts => res.json(contacts))
    .catch(err => res.status(404).json({ nocontactsfound: 'No contacts found'}))
})

router.post('/', (req, res) => {
  Contact.create(req.body)
  .then(book => res.json({ msg: 'Contact added successfully' }))
  .catch(err => res.status(400).json({ error: 'Unable to add this book'}))
})

router.delete('/:id', (req, res) => {
  Contact.findByIdAndRemove(req.params.id, req.body)
    .then(book => res.json({ msg: 'Book entry deleted successfuly' }))
    .catch(err => res.status(404).jsob({ error: 'No such contact.'}))
})

module.exports = router