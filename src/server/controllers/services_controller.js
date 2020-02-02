const Service = require('../database/models/service_model')

getServices = async (req, res) => {
  const services = await Service.find()
  if (services) {
    res.json(services)
  } else {
    res.status(500).json({ errors: "Unable to retrieve services from MongoDB" })
  }
}

newService = async (req, res) => {
  const newService = new Service(req.body)
  newService.save()
  .then(params => {
    res.json({newService})
  })
  .catch(err => {
    res.json({ errors: "Unable to save new service in database"})
    console.log(err)
  }) 
}

editService = async (req, res) => {
  console.log(req.body)
  const service = await Service.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    description: req.body.description,
    cost: req.body.cost
  })
  service ? res.json({ service }) : res.json({ errors: "Could not update service" })
}

deleteService = async (req, res) => {
  await Service.findByIdAndDelete(req.headers.serviceid)
  .then(res => console.log(res))
  .then(res.status(200).send("Successfully deleted service from MongoDB"))
  .catch(err => {
    console.log(err)
    res.status(500).json({ errors: "Could not delete service from MongoDB" })
  })
}

module.exports = {
  getServices,
  newService,
  editService,
  deleteService
}