const express = require("express");
const router = express.Router();
const servicesController = require('../../controllers/services_controller.js')


router.get('/test', (req, res) => res.send('Test Services API route'))
router.get('/', servicesController.getServices)
router.post('/new', servicesController.newService)
router.put('/edit', servicesController.editService)
router.delete('/delete', servicesController.deleteService)
module.exports = router