const express = require("express");
const router = express.Router();
const eventController = require('../../controllers/event_controller.js')
const multer = require('multer')
const storage = multer.memoryStorage();
const upload = multer({ storage })


router.get('/test', (req, res) => res.send('Test Event API route'))
router.get('/', eventController.getEvents)
router.delete('/delete', eventController.deleteEvent)
router.put('/update', eventController.updateEvent)

router.post('/new', upload.single('image'), eventController.newEvent)

module.exports = router