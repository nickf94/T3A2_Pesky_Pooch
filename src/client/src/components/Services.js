import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import '../styles/styles.css'
import ServicesControlPanel from './ServicesControlPanel'

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
    <>
      <div className="services-box">
      { services ? 
        (services.map(service => {
          return (
          <div className="service-card" key={service._id}>
            <p>{service.name}</p>
            <p>{service.description}</p>
            <p>{service.cost}</p>
          </div>
          )})
        ): 
        (<p>No services</p>) }
      </div>
      { sessionStorage.getItem('token') ? < ServicesControlPanel services={services} updateServices={fetchServices}/> : (null)}
      </>
  )
}