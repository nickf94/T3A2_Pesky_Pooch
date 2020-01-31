import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export default function DeleteService(props) {
  const [services, setServices] = useState([])
  const [submit, setSubmit] = useState(false)
  const token = sessionStorage.getItem('token')

  const updateServices = async () => {
    await Axios.get('/services')
    .then(res => setServices(res.data))
    .catch(err => console.log(err))
  }

  const handleSubmit = async (service) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      await Axios.delete("/services/delete", {
        headers: {
          'Authorization': token,
          'serviceid': service._id
        }})
      .then(res => {
        props.refreshServices()
        console.log('Successfully submitted delete service request')
      })
      .catch(err => console.log(err))
    }
  }

  useEffect(() => {
    updateServices()
  }, [])

  useEffect(() => {
    if (submit) {
      updateServices()
      setSubmit(false)
    }
  }, [submit])

  return (
    <>
    <p>Which event would you like to delete?</p>
    <div className="service-buttons">
      {services ? (services.map((service) => {
        return (<button key={service._id} onClick={(e) => handleSubmit(service)}>{service.name}</button>)
      })): (null)}
    </div>
    </>
  )
}