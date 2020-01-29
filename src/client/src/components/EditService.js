import React, { useState, useEffect } from 'react'
import Axios from 'axios'

export default function EditService() {
  const [services, setServices] = useState([])
  const [subject, setSubject] = useState(null)
  const [submit, setSubmit] = useState(false)
  const token = sessionStorage.getItem('token')

  const updateServices = async () => {
    await Axios.get('http://localhost:7002/api/services')
    .then(res => setServices(res.data))
    .catch(err => console.log(err))
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

  const stateReducer = (event) => {
    let newSubject = {...subject, [event.target.name]: event.target.value}
    setSubject(newSubject)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("Submitting a service edit")

    await Axios.put("http://localhost:7002/api/service/update", subject, {
      headers: {
        'Authorization': token
      }
    })
    .then(res => {
      setSubmit(true)
      setSubject(null)
    })
    .catch(err => console.log(err))
  }

  // return (
  //   <div>
  //     {services.map(service => <p>{service.name}</p>)}
  //   </div>
  // )
}