const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TestimonialSchema = new Schema({
  testimonial: {
    type: String,
    required: true,
    maxlength: 1000,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = TestimonialSchema;
