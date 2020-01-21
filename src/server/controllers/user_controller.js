const mongoose = require('mongoose');
const UserModel = require("./../database/models/user_model");

// CRUD Actions for users:
// DEVNOTE: Succesfully creates user however cannot GET user once created....


// Creating new 'User' instance.
// function createUser(req, res) {
//     let newUser = new User(req.body)
//     newUser.save((err, user) => {
//         if(err) {
//             res.send(err);
//         } 
//         else {
//             res.json({message: "User succesfully created", user });
//         } 
//     });
// }

// function findUser(req, res) {
//     let query = User.find({});
//     query.exec((err, users) => {
//         if(err) res.send(err);
//         res.json(users);
//     }); 
// }

// function updateUser(req, res) {
//   User.findById({ _id: req.params.id }, (err, user) => {
//     if (err) res.send(err);
//     Object.assign(user, req.body).save((err, user) => {
//       if (err) res.send(err);
//       res.json({ message: "User updated", user });
//     });
//   });
// }

// function deleteUser(req, res) {
//   User.remove({ _id: req.params.id }, (err, result) => {
//     res.json({ message: "User deleted", result });
//   });
// }

// module.exports = { getUsers, createUser, deleteUser, updateUser };]

getUsers = (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ nousersfound: 'No users found'}))
}

createUser = (req, res) => {
  User.create({
    email: req.body.email,
    password: req.body.password
  })
  .then(book => res.json({ msg: 'Contact added successfully' }))
  .catch(err => res.status(400).json({ error: 'Unable to add this book'}))
}

module.exports = {
  getUsers,
  createUser
}