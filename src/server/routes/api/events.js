const express = require("express");
const router = express.Router();
const eventController = require('../../controllers/event_controller.js')

router.get('/test', (req, res) => res.send('Test Event API route'))
router.post('/', eventController.getEvents)

module.exports = router