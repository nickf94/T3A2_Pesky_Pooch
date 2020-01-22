import React from 'react';
import EventForm from '../forms/EventForm'
import TestimonialForm from '../forms/TestimonialForm'

export const Services  = () => (
  <React.Fragment>
    <div>
      <h1>Services page</h1>
      <EventForm />
    </div>
    <div>
      <TestimonialForm />
    </div>
  </React.Fragment>
)
