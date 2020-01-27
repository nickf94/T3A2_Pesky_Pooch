const mongoose = require("mongoose");

const ServiceSchema = require("./../schemas/testimonial_schema");

const ServiceModel = mongoose.model("service", ServiceSchema);

module.exports = ServiceModel;
