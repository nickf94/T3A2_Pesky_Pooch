const Contact = require("./../database/models/contact_model");

deleteContact = (req, res) => {
  Contact.findByIdAndRemove(req.params.id, req.body)
    .then(contact => res.json({ msg: 'Contact entry deleted successfuly' }))
    .catch(err => res.status(404).jsob({ error: 'No such contact.'}))
}

createContact = (req, res) => {
  Contact.create(req.body)
  .then(contact => res.json({ contact }))
  .catch(err => res.status(400).json({ error: 'Unable to send this contact message!'}))
}

getContacts = (req, res) => {
  Contact.find()
    .then(contacts => res.json(contacts))
    .catch(err => res.status(404).json({ nocontactsfound: 'No contacts found'}))
}

module.exports = {
  deleteContact,
  createContact,
  getContacts
}

