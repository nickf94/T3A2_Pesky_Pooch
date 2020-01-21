const Event = require('../database/models/event_model')

getEvents = (req, res) => {
  const events = await Event.find()
  if (events) {
    res.json(events)
  } else {
    res.json({ noEventsFound: "No events found" })
  }
}

newEvent = (req, res) => {
  
}

module.exports = {
  getEvents
}