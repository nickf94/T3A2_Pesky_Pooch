const express = require("express");
const router = express.Router();
const servicesController = require('../../controllers/services_controller.js')


router.get('/test', (req, res) => res.send('Test Services API route'))

module.exports = router