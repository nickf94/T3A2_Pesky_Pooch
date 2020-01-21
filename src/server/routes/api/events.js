const express = require("express");
const router = express.Router();
const eventController = require('../../controllers/event_controller.js')

router.get('/test', (req, res) => res.send('Test Event API route'))
router.get('/', eventController.getEvents)
router.post('/', eventController.newEvent)

module.exports = router