const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  eventImage: {
    type: String, // Img URL as 'string'... Will then fetch img from cloudinary.
    required: false
  },
  eventName: {
    type: String,
    required: true,
    trim: true
  },
  eventDetails: {
    type: String,
    required: true,
    maxlength: 1500,
    trim: true
  },
  eventLocation: {
    type: String,
    required: true,
    trim: true
  },
  eventDate: {
    type: String,
    required: true,
    trim: true
  }
});

module.exports = EventSchema;
