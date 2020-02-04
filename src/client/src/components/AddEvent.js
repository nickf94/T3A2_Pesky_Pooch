import React, { useState, useRef } from 'react';
import axios from 'axios';
import '../styles/eventcontrolpanel.scss'
import ImageControlPanel from './ImageControlPanel'

export default function AddEvent(props) {
  const [eventParams, setEventParams] = useState({name: '', description: '', location: '', thumbnail: null})

  const formReducer = (event) => {
    let newParams = {...eventParams, [event.target.name]: event.target.value}
    setEventParams(newParams)
  }

  const setThumbnail = (file) => {
    let newParams = {...eventParams, thumbnail: file}
    setEventParams(newParams)
  }

  const formRef = useRef(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    let token = sessionStorage.getItem('token')
    console.log(formRef.current)
    let formData = new FormData(formRef.current)
    await axios.post("/events/new", formData, {
      headers: {
      'Authorization': token
      }
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
    props.updateServicesEvents()
  }

  return (
     <form ref={formRef} id="event-form" onSubmit={handleSubmit}>
       {console.log(eventParams)}
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
      < ImageControlPanel setThumbnail={setThumbnail} />
      <button type="submit" className="btn-primary" onSubmit={handleSubmit}>Submit</button>
    </form>
  )
}
