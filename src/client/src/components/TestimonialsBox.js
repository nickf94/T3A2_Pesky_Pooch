import React, { useState, useEffect } from 'react'
import Axios from 'axios'
// import "../styles/testimonialsbox.scss"

export default function TestimonialsBox() {
  const [testimonials, setTestimonials] = useState([])

  const fetchTestimonials = async () => {
    await Axios.get("http://localhost:7002/api/testimonials")
    .then(res => {
      filterTestimonials(res.data)
    })
    .catch(err => console.log(err))
  }

  const filterTestimonials = (reviews) => {
    setTestimonials(reviews.map(item => {
      return (item.includes('See more')) ? (item.slice(0, item.length - 9)) : (item)
    }))
  }

  useEffect(() => {
    fetchTestimonials()
  }, [])

  return (
    <div className="reviews">
      { (testimonials.length >= 1) ? <h2>What people think of Pesky Pooch</h2> : null }
      {testimonials.map(item => {
        return (

          <div className="review-card">
            <em><p>{item}</p></em>
          </div>
        )
      })}
    </div>
  )
}