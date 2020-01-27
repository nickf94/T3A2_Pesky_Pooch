import React, { Component, useState, useEffect } from 'react';
import axios from 'axios'
import '../styles/eventcontrolpanel.css'

export default function EditEvent() {
  const [events, setEvents] = useState([])
  const [subject, setSubject] = useState(null)
  const [submit, setSubmit] = useState(false)
  const token = sessionStorage.getItem('token')

  const fetchEvents = async () => {
    await axios.get("http://localhost:7002/api/events", {
      headers: {
        'Authorization': token
      }})
    .then(res => {
      setEvents(res.data)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchEvents()
  }, [])

  const stateReducer = (event) => {
    let newSubject = {...subject, [event.target.name]: event.target.value}
    setSubject(newSubject)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("Submitting an event edit")

    await axios.put("http://localhost:7002/api/events/update", subject, {
      headers: {
        'Authorization': token
      },
      id: subject._id
      })
    .then(res => {
      setSubmit(true)
      setSubject(null)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    if (submit) {
      fetchEvents()
      setSubmit(false)
    }
  }, [submit])

  return (
    <>
    <div className="event-buttons">
      {events.map((event) => {
        return (<button key={event._id} onClick={() => {setSubject(event)}}>{event.name}</button>)
      })}
    </div>

    {subject ? (
      <form onSubmit={(e) => handleSubmit(e)}>
        <fieldset>
          <label>Name of event</label>
          <input type="text" 
                 name="name" 
                 onChange={(e) => stateReducer(e)} 
                 value={subject.name}>
          </input>
        </fieldset>
        <fieldset>
          <label>Description of event</label>
          <input type="text"
                 name="description"
                 onChange={(e) => stateReducer(e)}
                 value={subject.description}>
          </input>
        </fieldset>
        <fieldset>
          <label>Location of event</label>
          <input type="text"
                 name="location"
                 onChange={(e) => stateReducer(e)}
                 value={subject.location}>
          </input>
        </fieldset>
        <button type="submit">Submit updated event</button>
      </form>
    ):
    (null)}
    </>
  )
}