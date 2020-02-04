import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../styles/eventcontrolpanel.scss'
const dotenv = require('dotenv');

export default function DeleteEvent(props) {
  const [events, setEvents] = useState([])
  const [submit, setSubmit] = useState(false)
  const token = sessionStorage.getItem('token')

  const fetchEvents = async () => {
    console.log(process.env.REACT_APP_BASEURL + "events")
    await axios.get(`/events`, {
      headers: {
        'Authorization': token
      }})
    .then(res => {
      setEvents(res.data)
      console.log('Fetched events')
      console.log(res.data)
    })
    .catch(err => console.log("Could not retrieve events", err))
  }

  const handleSubmit = async (eventId) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      await axios.delete(`events/delete`, {
        headers: {
          'Authorization': token,
          "eventId": eventId
        }})
      .then(res => {
        fetchEvents()
        console.log('Successfully submitted delete event request')
      })
      .catch(err => console.log(err))
      props.updateServicesEvents()
    }
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  useEffect(() => {
    if (submit) {
      fetchEvents()
      setSubmit(false)
    }
  }, [submit])

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
