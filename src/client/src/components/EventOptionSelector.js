import React from 'react';
import { render } from 'node-sass';

const OptionSelector = () => {
  return (
    <div className="event-option-selector">
      <button>Add Event</button>
      <button>Edit Event</button>
      <button>Delete Event</button>
    </div>
  )
}

export default OptionSelector