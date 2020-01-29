const mongoose = require('mongoose');
const User = require("./../database/models/user_model");
const bcrypt = require('bcryptjs')

createUser = (req, res) => {
  User.findOne({ email: req.body.email })
  .then(user => {
    if (user) {
      return res.status(422).send("Email is taken")
    } else {
      const newUser = new User({
        email: req.body.email,
        password: req.body.password
      })

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          // if (err) throw err

          newUser.password = hash
          newUser.save()
          .then(user => res.json(user))
          .catch(err => console.log(err))
        })
      })
    }
  })
}

module.exports = {
  createUser
}