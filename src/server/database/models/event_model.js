const mongoose = require("mongoose");

const EventSchema = require("./../schemas/event_schema");

const EventModel = mongoose.model("event", EventSchema);

module.exports = EventModel;
