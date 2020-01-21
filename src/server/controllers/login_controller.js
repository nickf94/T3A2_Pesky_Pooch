const User = require('../database/models/user_model')
const keys = require('../config/keys')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

loginUser = (req, res) => {

  const email = req.body.email
  const password = req.body.password
  
  // Find user by email

  User.findOne({ email: req.body.email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    
    // If exists, check password

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          email: user.email
        }
        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 10000
          },
          (err, token) => {
            console.log(token)
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
        // res.send(200)
      } else {
        return res
          .status(400)
          .json({ passwordIncorrect: "Password incorrect" });
      }
    });
  });
};

module.exports = { loginUser }