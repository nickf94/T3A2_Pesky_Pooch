const express = require("express");
const router = express.Router();
const testimonialsController = require('../../controllers/testimonial_controller')

router.get('/', testimonialsController.getTestimonials)

module.exports = router