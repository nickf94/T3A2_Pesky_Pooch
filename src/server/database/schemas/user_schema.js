const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true // Trims white-space upon saving a model to the DB.
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensures 2 users can't log in with same E-mail.
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  role: {
    type: String,
    default: "user"
  }
});


module.exports = UserSchema