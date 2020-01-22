const mongoose = require("mongoose");

const EventSchema = require("../schemas/event_schema.js");

const EventModel = mongoose.model("event", EventSchema);

module.exports = EventModel;
