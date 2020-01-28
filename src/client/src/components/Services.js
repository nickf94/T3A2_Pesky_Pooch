import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export default function Services(props) {
  const [services, setServices] = useState(null)

  const fetchServices = async () => {
    await Axios.get('http://localhost:7002/api/services')
    .then(res => setServices(res.data))
    .catch(err => console.log(err))
  }

   useEffect(() => {
    fetchServices()
  }, [])

  return (
    <div>
      { services ? (services.map(service => <p>{service.name}</p>)): (<p>No services</p>) }
    </div>
  )
}