const mongoose = require("mongoose");
const Schema = mongoose.Schema

const ServiceSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  thumbnail: {
    type: String
  }
})

module.exports = ServiceSchema