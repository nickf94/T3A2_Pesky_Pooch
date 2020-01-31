import React, { useState, useEffect } from 'react'
import EventControlPanel from '../components/EventControlPanel';
import Services from '../components/Services';
import Axios from 'axios'

export default function ServicesPage(props) {
  const [services, setServices] = useState(null)
  
  const fetchServices = async () => {
    console.log("Updating ServicesPage services")
    await Axios.get('http://localhost:7002/api/services')
    .then(res => setServices(res.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchServices()
  }, [])
   
  return (
    <>
      <div>
        { props.user ? (
          <div>
            <h1>Welcome, admin!</h1>
            < EventControlPanel setParentEvents={props.setEvents} />
          </div>
          ) : (
          <div>
            <h1>Services page</h1>
          </div>
          )
        }
        < Services renderChanges={fetchServices} allServices={services}/>
      </div>
    </>
  )
}
