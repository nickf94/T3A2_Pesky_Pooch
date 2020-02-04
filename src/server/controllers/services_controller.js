const Service = require('../database/models/service_model')
const { uploader, cloudinaryConfig } = require('./cloudinaryConfig')
const { multerUploads, dataUri } = require('./multerStuff')

getServices = async (req, res) => {
  const services = await Service.find()
  if (services) {
    res.json(services)
  } else {
    res.status(500).json({ errors: "Unable to retrieve services from MongoDB" })
  }
}

newService = async (req, res) => {

  console.log(req.body, req.file, req.data, req.formdata)

  const newService = new Service({
    name: req.body.name,
    description: req.body.description,
    cost: req.body.cost
  })

  /* Having been passed through Multer middleware, if a file was present in the request,
     then it will have been processed by Multer and is now available in req.file  */

  if (req.file) {
    console.log(req.file)
    // If this file exists, handle it
    // First, using dataUri, parse the stream into a file and use this file content
    const file = dataUri(req).content
    // Then, this is uploaded using the previously retrieved and configured cloudinary upload method
    await uploader.upload(file).then((result) => {
      /* If successful, a URL will be returned and a new thumbnail field is 
      attached to the Event model for saving */
      const image = result.url
      newService.thumbnail = image
    }).catch(err => console.log(err))
  }
  /* At this point, the event can be saved as it has been set */
  await newService.save()
  .then((service) => {
    // If successful, return the event to the client
    res.status(201).json(service)
  })
  .catch(err => {
    // If unsuccessful, console log and return the error to the client
    console.log(err)
    res.status(500).json({ errors: "Could not save new service to MongoDB" })  
  }) 






  // console.log("CREATING A NEW SERVICE")

  // const newService = new Service({ 
  //   name: req.body.name,
  //   cost: req.body.cost,
  //   description: req.body.description
  //  })

  // console.log("NEWSERVICE: ", newService)

  // if (req.file) {
  //   console.log(req.data)
  //   // If this file exists, handle it
  //   // First, using dataUri, parse the stream into a file and use this file content
  //   const file = dataUri(req).content
  //   // Then, this is uploaded using the previously retrieved and configured cloudinary upload method
  //   await uploader.upload(file).then((result) => {
  //     /* If successful, a URL will be returned and a new thumbnail field is 
  //     attached to the Event model for saving */
  //     const image = result.url
  //     newService.thumbnail = image
  //   }).catch(err => console.log(err))
  // }

  // await newService.save()
  // .then(params => {
  //   res.json({newService})
  // })
  // .catch(err => {
  //   res.json({ errors: "Unable to save new service in database"})
  //   console.log(err)
  // }) 
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