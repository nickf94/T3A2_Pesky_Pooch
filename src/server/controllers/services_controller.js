const Service = require('../database/models/service_model')

getServices = async (req, res) => {
  const services = await Service.find()
  if (services) {
    res.json(services)
  } else {
    res.json({ failureToRetrieve: "could no retrieve services from database" })
  }
}

newService = async (req, res) => {
  const serviceParams = req.body
  const newService = new Service(serviceParams)
  await newService.save()
  .then(res => console.log(res))
  .then(res.json(newService))
  .catch(err => console.log(err))
  
}

module.exports = {
  getServices,
  newService
}