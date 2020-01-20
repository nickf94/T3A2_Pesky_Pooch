const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    maxlength: 40
  },
  message: {
    type: String,
    required: true
  }
});


module.exports = ContactSchema