const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required.'],
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Password is required.'],
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