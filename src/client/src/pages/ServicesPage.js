import React, { useState, useEffect } from 'react'
import EventControlPanel from '../components/EventControlPanel';
import Services from '../components/Services';
import Axios from 'axios'
import '../styles/services.scss'

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
            <div className="services-text">
              <p>Bottom line.</p>
            </div>
            < Services renderChanges={fetchServices} allServices={services}/>
          </div>
          )
        }  
        
        <div className="events">
          <h2>All regular Pesky Pooch events</h2>
          { (events.length >= 1) ? (events.map(event => {
          return (
          <>   
            <div className="event-card">
              <h3>{event.name}</h3>
              <p className="event-desc">{event.description}</p>
              <p className="event-loc">{event.location}</p>
              { event.thumbnail ? (<img className="thumbnail" src={event.thumbnail}></img>) : (null)}
            </div>
          </>
          )
        })) : (<p>No current events</p>)}
        </div>
        
      </div>
    </>
  )
}
