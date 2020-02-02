var express = require('express');

// Import controller
var imageController = require('../../controllers/imageController');
var upload = require('/multerConfig');

var router = express.Router();

// When a post is made to the route, it will enter the image controller.

// .any() accepts all files that come over the wire
router.post('/addimage', upload.any(), imageController.createApp);

module.exports = router
