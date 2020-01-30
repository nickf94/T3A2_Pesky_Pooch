import React from 'react';
import '../styles/eventcontrolpanel.scss'

const OptionSelector = (props) => {
  return (
    <div className="event-option-selector">
      <button onClick={props.setProperType} name="add">Add Event</button>
      <button onClick={props.setProperType} name="edit">Edit Event</button>
      <button onClick={props.setProperType} name="delete">Delete Event</button>
    </div>
  )
}

export default OptionSelector
