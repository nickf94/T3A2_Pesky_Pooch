import React, {useEffect, useState} from 'react'
import axios from 'axios'
import '../styles/eventcontrolpanel.scss'

export default function DeleteEvent(props) {
  const [events, setEvents] = useState([])
  const [submit, setSubmit] = useState(false)
  const token = sessionStorage.getItem('token')

  const fetchEvents = async () => {
    await axios.get(`${process.env.BASE_URL}events`, {
      headers: {
        'Authorization': token
      }})
    .then(res => {
      setEvents(res.data)
      console.log('Fetched events')
    })
    .catch(err => console.log(err))
  }

  const handleSubmit = async (eventId) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      await axios.delete(`${process.env.BASE_URL}events/delete`, {
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
