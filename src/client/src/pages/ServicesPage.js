import React from 'react';
import EventControlPanel from '../components/EventControlPanel';
import Services from '../components/Services';

export default function ServicesPage(props) {
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
        < Services />
      </div>
    </>
  )
}
