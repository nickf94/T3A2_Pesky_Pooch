import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../styles/eventcontrolpanel.css'

export default function DeleteEvent() {
  const [events, setEvents] = useState([])

  const fetchEvents = () => {
    const token = sessionStorage.getItem('token')
    axios.get("http://localhost:7002/api/events", {
      headers: {
        'Authorization': token
      }})
    .then(res => {
      setEvents(res.data)
    })
    .catch(err => console.log(err))
  }

  const handleSubmit = async (eventId) => {
    let test = window.confirm("Are you sure you want to delete this event?")
    if (test) {
      const token = sessionStorage.getItem('token')
      console.log("Submitting:", eventId)

      await axios.delete("http://localhost:7002/api/events/delete", {
        headers: {
          'Authorization': token,
          "eventId": eventId
        }})
      .then(res => {
        fetchEvents()
        console.log(res)
      })
      .catch(err => console.log(err))
    }
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  return (
    <>
    <p>Which event would you like to delete?</p>
    <div className="event-buttons">
      {events ? (events.map((event) => {
        return (<button key={event._id} onClick={(e) => handleSubmit(event._id)}>{event.name}</button>)
      })): (null)}
    </div>
    </>
  )

}