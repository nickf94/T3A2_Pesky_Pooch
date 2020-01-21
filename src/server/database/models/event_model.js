const mongoose = require("mongoose");

const EventSchema = require("../schemas/event_schema.js");

const EventSchema = mongoose.model("event", EventSchema);

module.exports = EventSchema;