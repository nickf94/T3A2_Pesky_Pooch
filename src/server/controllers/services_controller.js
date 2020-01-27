const Service = require('../database/models/service_model')

getServices = async (req, res) => {
  const services = await Service.find()
  if (services) {
    res.json(services)
  } else {
    res.json({ failureToRetrieve: "could no retrieve services from database" })
  }
}

module.exports = {
  getServices
}