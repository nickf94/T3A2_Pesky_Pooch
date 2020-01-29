import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export default function EditService() {
  const [services, setServices] = useState([])

  const updateServices = async () => {
    await Axios.get('http://localhost:7002/api/services')
    .then(res => setServices(res.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    updateServices()
  }, [])

  // return (
  //   <div>
    //   {services.map(service => <p>{service.name}</p>)}
    // </div>
  // )
}