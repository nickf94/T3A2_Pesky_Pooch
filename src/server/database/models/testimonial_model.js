const mongoose = require("mongoose");

const TestimonialSchema = require("./../schemas/testimonial_schema");

const TestimonialModel = mongoose.model("testimonial", TestimonialSchema);

module.exports = TestimonialModel;
