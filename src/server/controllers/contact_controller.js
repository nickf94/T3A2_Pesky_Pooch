const Contact = require("./../database/models/contact_model");

deleteContact = (req, res) => {
  Contact.findByIdAndRemove(req.params.id, req.body)
    .then(contact => res.json({ msg: 'Contact entry deleted successfuly' }))
    .catch(err => res.status(404).json({ error: 'No such contact.'}))
}

createContact = async (req, res) => {
  console.log('test')
  console.log(req.body)
  Contact.create(req.body)
  .then(contact => res.send(200)) //res.json({ contact }))
  .catch(err => res.send(400)) //.json({ error: 'Unable to send this contact message!'}))
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

