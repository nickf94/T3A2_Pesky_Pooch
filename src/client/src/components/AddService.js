import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import ImageControlPanel from './ImageControlPanel'

export default function AddService(props) {
  
  const [serviceParams, setServiceParams] = useState({name: '', description: '', cost: ''})
  
  const formReducer = (event) => {
    let newParams = {...serviceParams, [event.target.name]: event.target.value}
    setServiceParams(newParams)
  }

  const setThumbnail = (file) => {
    let newParams = {...serviceParams, thumbnail: file}
    setServiceParams(newParams)
  }

  const formRef = useRef(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    let token = sessionStorage.getItem('token')
    let formData = new FormData(formRef.current)
    await axios.post('/services/new', formData, {
      headers: {
      'Authorization': token
      }
    })
    .then(res => {
      props.refreshServices()
    })
    .catch(err => console.log(err))
  }

  return (
    <form ref={formRef} id="service-form" onSubmit={handleSubmit}>
      <label>Create a new service tile!</label>
      <div className="form-group">
        <label name="name">Name:</label>
        <input type="text" value={serviceParams.name} onChange={(e) => formReducer(e)} name="name" />
      </div>
      <div className="form-group">
        <label name="cost">Cost per session:</label>
        <input type="number" value={serviceParams.cost} onChange={(e) => formReducer(e)} name="cost"/>
      </div>
      <div className="form-group">
        <label name="description">Description:</label>
        <textarea rows="3" value={serviceParams.description} onChange={(e) => formReducer(e)} name="description"/>
      </div>
      < ImageControlPanel setThumbnail={setThumbnail} />
      <button type="submit" className="btn-primary" onSubmit={handleSubmit}>Submit</button>
    </form>
  )
}