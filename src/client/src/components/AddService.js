import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function AddService(props) {
  
  const [serviceParams, setServiceParams] = useState({name: '', description: '', cost: ''})
  
  const formReducer = (event) => {
    let newParams = {...serviceParams, [event.target.name]: event.target.value}
    setServiceParams(newParams)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let token = sessionStorage.getItem('token')
    await axios.post("http://localhost:7002/api/services/new", serviceParams, {
    headers: {
    'Authorization': token
    }})
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  return (
    <form id="service-form" onSubmit={handleSubmit}>
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
      <button type="submit" className="btn-primary" onSubmit={handleSubmit}>Submit</button>
    </form>
  )
}