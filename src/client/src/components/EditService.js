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

    await Axios.put("http://localhost:7002/api/services/edit", subject, {
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

  return (
    <>
    <div className="service-buttons">
      {services.map((service) => {
        return (<button key={service._id} onClick={() => {setSubject(service)}}>{service.name}</button>)
      })}
    </div>

    {subject ? (
      <form onSubmit={(e) => handleSubmit(e)}>
        <fieldset>
          <label>Name of service</label>
          <input type="text" 
                 name="name" 
                 onChange={(e) => stateReducer(e)} 
                 value={subject.name}>
          </input>
        </fieldset>
        <fieldset>
          <label>Description of service</label>
          <input type="text"
                 name="description"
                 onChange={(e) => stateReducer(e)}
                 value={subject.description}>
          </input>
        </fieldset>
        <fieldset>
          <label>Cost of service</label>
          <input type="number"
                 name="cost"
                 onChange={(e) => stateReducer(e)}
                 value={subject.cost}>
          </input>
        </fieldset>
        <button type="submit">Submit updated service</button>
      </form>
    ):
    (null)}
    </>
  )
}