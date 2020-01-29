const User = require('../database/models/user_model')
const keys = require('../config/keys')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

loginUser = async (req, res) => {
  // First pulls user params from request
  const email = req.body.email
  const password = req.body.password
  
  // Uses these params to retrieve a user and validate them
  await User.findOne({ email: req.body.email }).then(user => {

    // Check if the user exists, handle error if not
    if (!user) {
      return res.status(400).json({ errors: "Email not found" })
    }
    
    // If exists, move on to check the password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // All credentials match, create JWT Payload
        const payload = {
          id: user.id,
          email: user.email
        }
        // Sign JWT token with long expiry date and attach current user
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 10000
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
              currentuser: user
            })
          }
        )
      } else {
        // If no match is found, it can only be the password
        return res.status(400).json({ errors: "Password incorrect" });
      }
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ errors: "Unable to process request" })
  })
}

module.exports = { loginUser }