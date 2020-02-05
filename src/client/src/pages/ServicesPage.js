import React, { useState, useEffect } from 'react'
import EventControlPanel from '../components/EventControlPanel';
import Services from '../components/Services';
import Axios from 'axios'
import ServicesControlPanel from '../components/ServicesControlPanel'
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
        <div>
          <h1 className="page-title">Services page</h1>
        </div>
        { props.user ? (
          <div className="admin-dash">
            <h2>Welcome, admin!</h2>
            < EventControlPanel updateServicesEvents={fetchEvents} />
            < ServicesControlPanel services={services} updateServices={fetchServices}/>
          </div>
          ) : (null)
        } 
        <div>
          <div className="services-text">
            <p>Bottom line.</p>
          </div>
          < Services renderChanges={fetchServices} allServices={services}/>
        </div> 
        <div className="events-container">
          <h2 id="events-title">All regular Pesky Pooch events</h2>
          <div className="events">
            
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
        
      </div>
    </>
  )
}
