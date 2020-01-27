const mongoose = require("mongoose");

const ServiceSchema = require("./../schemas/service_schema");

const ServiceModel = mongoose.model("service", ServiceSchema);

module.exports = ServiceModel;
