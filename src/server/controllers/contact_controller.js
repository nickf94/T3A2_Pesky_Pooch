const Contact = require("./../database/models/contact_model");

deleteContact = async (req, res) => {
  await Contact.findByIdAndRemove(req.params.id, req.body)
    .then(contact => res.json({ msg: 'Contact entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such contact.'}))
}

createContact = async (req, res) => {
  let contact = new Contact({
    email: req.body.email,
    title: req.body.title,
    message: req.body.message
  })

  await contact.save()
    .then(contact => res.json({ contactdelivered: true })) //res.json({ contact }))
    .catch(err => res.status(404).json({ contactdelivered: false })) //.json({ error: 'Unable to send this contact message!'}))
}

getContacts = async (req, res) => {
  await Contact.find()
    .then(contacts => res.json(contacts))
    .catch(err => res.status(404).json({ nocontactsfound: 'No contacts found'}))
}

module.exports = {
  deleteContact,
  createContact,
  getContacts
}

