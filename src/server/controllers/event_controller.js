const Event = require('../database/models/event_model')
const { uploader, cloudinaryConfig } = require('./cloudinaryConfig')
const { multerUploads, dataUri } = require('./multerStuff')

// const parseImage = (file) => dUri.format(path.extname(file.originalname).toString(), file.buffer)

// const cloudUpload = require('../middleware/cloudinaryUpload')

// import { config, uploader } from 'cloudinary'
// const cloudinaryConfig = (req, res, next) => {
//   config({
//       cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//       api_key: process.env.CLOUDINARY_API_KEY,
//       api_secret: process.env.CLOUDINARY_API_SECRET,
//     });
//   next();
// }




getEvents = async (req, res) => {
  const events = await Event.find()
  if (events) {
    res.json(events)
  } else {
    res.status(500).json({ errors: "Unable to retrieve events from MongoDB" })
  }
}

updateEvent = async (req, res) => {
  const event = await Event.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    description: req.body.description,
    location: req.body.location
  })
  .then(res => res.status(200))
  .catch(err => {
    console.log(err)
    res.status(500).json({ errors: "Unable to update event" })
  })
}

deleteEvent = async (req, res) => {
  await Event.findByIdAndDelete(req.headers.eventid)
  .then(res => res.send("Successfully deleted event from MongoDB"))
  .catch(err => {
    console.log(err)
    res.status(500).json({ errors: "Unable to delete event from MongoDB" })  
  })
}

newEvent = async (req, res) => {
  const newEvent = new Event({
    name: req.body.name,
    description: req.body.description,
    location: req.body.location
  })

  if (req.file) {
    const file = dataUri(req).content;
    await uploader.upload(file).then((result) => {
      const image = result.url
      newEvent.thumbnail = image
  }).catch((err) => res.status(400).json({
    message: 'something went wrong while processing your request',
    data: {
      err
    }
    }))
  }

  await newEvent.save()
  .then((event) => {
    res.status(201).json(newEvent)
    console.log(event)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ errors: "Could not save new event to MongoDB" })  
  }) 
}

module.exports = {
  getEvents,
  newEvent,
  deleteEvent, 
  updateEvent
}