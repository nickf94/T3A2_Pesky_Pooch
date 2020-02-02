import React, { useState, useEffect } from 'react'
import EventControlPanel from '../components/EventControlPanel';
import Services from '../components/Services';
import Axios from 'axios'

export default function ServicesPage(props) {
  const [services, setServices] = useState([])
  const [events, setEvents] = useState([])

  const fetchServices = async () => {
    console.log("Updating ServicesPage services")
    await Axios.get('http://localhost:7002/api/services')
    .then(res => setServices(res.data))
    .catch(err => console.log(err))
  }

  const fetchEvents = async () => {
    console.log("Updating ServicesPage events")
    await Axios.get('http://localhost:7002/api/events')
    .then(res => {
      console.log(res.data)
      setEvents(res.data)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchServices()
    fetchEvents()
  }, [])
   
  return (
    <>
      <div>
        { props.user ? (
          <div>
            <h1 className="page-title">Services page</h1>
            <h1>Welcome, admin!</h1>
            < EventControlPanel updateServicesEvents={fetchEvents} />
            < Services renderChanges={fetchServices} allServices={services}/>
          </div>
          ) : (
          <div>
            <h1 className="page-title">Services page</h1>
            < Services renderChanges={fetchServices} allServices={services}/>
          </div>
          )
        }  
        <div className="events">
          { (events.length >= 1) ? (events.map(event => {
          return <p>{event.name}</p>
        })) : (<p>No current events</p>)}
        </div>
        
      </div>
    </>
  )
}
