import React, { useState, useEffect } from 'react'
import ServicesControlPanel from './ServicesControlPanel'

export default function Services(props) {
  const [services, setServices] = useState(props.allServices)

  useEffect(() => {
    props.renderChanges()
  }, [])

  return (
    <>
    { sessionStorage.getItem('token') ? < ServicesControlPanel services={props.allServices} updateServices={props.renderChanges}/> : (null)}
      <div className="services-container">
      { props.allServices ?
        (
        <> 
          <div className="services">
            <p>All current services</p>
            { props.allServices.map(service => {
            return (
            <div className="service-card" key={service._id}>
              <h3>{service.name}</h3>
              <p className="service-desc">{service.description}</p>
              <p className="service-cost">{service.cost}</p>
            </div>
            )}) }
          </div>
        </>
        ):
        (
        <p>There are currently no regularly available services at Pesky Pooch right now, sorry!</p>
        ) }
      </div>
      </>
  )
}
