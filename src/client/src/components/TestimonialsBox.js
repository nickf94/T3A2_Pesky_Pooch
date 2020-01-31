import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import "../styles/testimonialsbox.scss"

export default function TestimonialsBox() {
  const [events, setEvents] = useState([])

  const fetchTestimonials = async () => {
    await Axios.get("http://localhost:7002/api/testimonials")
    .then(res => setEvents(res.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchTestimonials()
  }, [])

  return (
    <div>
      {events.map(item => {
        return (
        <div className="event-card">
          <p>{item}</p>
        </div>
        )
      })}
    </div>
  )
}