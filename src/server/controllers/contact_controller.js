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
    .then(contact => res.status(201).send(contact))
    .catch(err => {
      // console.log(err)
      res.status(500).json({ errors: "Unable to save new contact" })
    })
}

getContacts = async (req, res) => {
  await Contact.find()
    .then(contacts => res.json(contacts))
    .catch(err => res.status(500).json({ errors: 'Unable to retrieve contacts' }))
}

module.exports = {
  deleteContact,
  createContact,
  getContacts
}

