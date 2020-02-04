<<<<<<< HEAD
import React, { useState } from 'react'
=======
import React, { useState, useEffect, useRef } from 'react'
>>>>>>> eb718ff7e189ec892454a1f403c21a19882e682f
import axios from 'axios'
import ImageControlPanel from './ImageControlPanel'

export default function AddService(props) {
  const [serviceParams, setServiceParams] = useState({name: '', description: '', cost: '', thumbnail: null})
>>>>>>> eb718ff7e189ec892454a1f403c21a19882e682f

  const formReducer = (event) => {
    let newParams = {...serviceParams, [event.target.name]: event.target.value}
    setServiceParams(newParams)
  }

  const setThumbnail = (file) => {
    let newParams = {...serviceParams, thumbnail: file}
    setServiceParams(newParams)
    console.log(serviceParams)
  }

  const formRef = useRef(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    let token = sessionStorage.getItem('token')
    console.log(formRef.current)
    let formData = new FormData(formRef.current)
    await axios.post("/services/new", formData, {
      headers: {
      'Authorization': token
      }
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
    props.refreshServices()
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
      <button type="submit" className="btn-primary">Submit</button>
    </form>
  )
}
