const express = require("express");
const router = express.Router();
const servicesController = require('../../controllers/services_controller.js')
const multer = require('multer')
const storage = multer.memoryStorage();
const upload = multer({ storage })

router.get('/test', (req, res) => res.send('Test Services API route'))
router.get('/', servicesController.getServices)
router.post('/new', upload.single('image'), servicesController.newService)
router.put('/edit', servicesController.editService)
router.delete('/delete', servicesController.deleteService)
module.exports = router