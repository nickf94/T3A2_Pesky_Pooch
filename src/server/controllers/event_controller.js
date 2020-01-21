const Event = require('../database/models/event_model')

getEvents = async (req, res) => {
  const events = await Event.find()
  if (events) {
    res.json(events)
  } else {
    res.json({ noEventsFound: "No events found" })
  }
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
  newEvent
}