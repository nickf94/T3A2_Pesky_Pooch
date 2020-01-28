import React from 'react';
import EventForm from '../forms/EventForm'
import EventControlPanel from '../components/EventControlPanel';

export function Services(props) {
  return (
    <>
      <div>
        { props.user ? (
          <div>
            <h1>Services page</h1>
            < EventControlPanel setParentEvents={props.setEvents} />
          </div>
          ) : (
          <div>
            <h1>Services page</h1>
            <p>Not logged in.</p>
          </div>
          )
        }
      </div>
    </>
  )
}


