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
  console.log(serviceParams)
  const newService = new Service(serviceParams)
  await newService.save()
  .then(res => console.log(res))
  .then(res.json(newService))
  .catch(err => console.log(err)) 
}

editService = async (req, res) => {
  const service = await Service.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    description: req.body.description,
    cost: req.body.cost
  })
  res.send(service)
}

deleteService = async (req, res) => {
  await Service.findByIdAndDelete(req.body._id)
  .then(res => console.log(res))
  .catch(err => console.log(err))
  res.json({ deleteSuccessful: true })
}

module.exports = {
  getServices,
  newService,
  editService,
  deleteService
}