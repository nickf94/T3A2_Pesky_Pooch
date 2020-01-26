const Event = require('../database/models/event_model')

getEvents = async (req, res) => {
  const events = await Event.find()
  if (events) {
    res.json(events)
  } else {
    res.json({ noEventsFound: "No events found" })
  }
}

updateEvent = async (req, res) => {
  const event = await Event.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    description: req.body.description,
    location: req.body.location
  })
  res.send(event)
}

deleteEvent = async (req, res) => {
  await Event.findByIdAndDelete(req.headers.eventid)
  .then(res => console.log("Successfully deleted event"))
  .catch(err => console.log(err))
  res.json({ deleteSuccessful: true })
}

newEvent = async (req, res) => {
  const newEvent = new Event({
    name: req.body.name,
    description: req.body.description,
    location: req.body.location
  })
  await newEvent.save()
  .then(res.json(newEvent))
  .catch(err => console.log(err)) 
}

module.exports = {
  getEvents,
  newEvent,
  deleteEvent, 
  updateEvent
}