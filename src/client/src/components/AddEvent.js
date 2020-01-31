import React, { useState } from 'react';
import axios from 'axios';
import '../styles/eventcontrolpanel.scss'

export default function AddEvent() {
  const [eventParams, setEventParams] = useState({name: '', description: '', location: ''})

  const formReducer = (event) => {
    let newParams = {...eventParams, [event.target.name]: event.target.value}
    setEventParams(newParams)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let token = sessionStorage.getItem('token')
    await axios.post("/events/new", eventParams, {
    headers: {
    'Authorization': token
    }})
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  return (
     <form id="event-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label name="name">Name:</label>
        <input type="name" value={eventParams.name} onChange={(e) => formReducer(e)} name="name" />
      </div>
      <div className="form-group">
        <label name="location">Location:</label>
        <input type="location" value={eventParams.location} onChange={(e) => formReducer(e)} name="location"/>
      </div>
      <div className="form-group">
        <label name="description">Description:</label>
        <textarea rows="3" value={eventParams.description} onChange={(e) => formReducer(e)} name="description"/>
      </div>
      <button type="submit" className="btn-primary" onSubmit={handleSubmit}>Submit</button>
    </form>
  )
}
