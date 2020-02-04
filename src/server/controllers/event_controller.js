const Event = require('../database/models/event_model')
const { uploader, cloudinaryConfig } = require('./cloudinaryConfig')
const { multerUploads, dataUri } = require('./multerStuff')

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
      newEvent.thumbnail = image
    }).catch(err => console.log(err))
  }
  /* At this point, the event can be saved as it has been set */
  await newEvent.save()
  .then((event) => {
    // If successful, return the event to the client
    res.status(201).json(event)
  })
  .catch(err => {
    // If unsuccessful, console log and return the error to the client
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