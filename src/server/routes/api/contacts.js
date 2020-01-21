const express = require("express");
const router = express.Router();
const contactsController = require('../../controllers/contact_controller')
const Contact = require('../../database/models/contact_model')

router.get('/test', (req, res) => res.send('Test Contacts API route'))

router.get('/', contactsController.getContacts)

router.post('/', contactsController.createContact)

router.delete('/:id', contactsController.deleteContact)

module.exports = router