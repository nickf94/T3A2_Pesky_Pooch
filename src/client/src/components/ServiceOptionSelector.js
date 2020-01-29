import React from 'react';

const ServiceOptionSelector = (props) => {
  return (
    <div className="service-option-selector">
      <button onClick={props.setProperType} name="add">Add Service</button>
      <button onClick={props.setProperType} name="edit">Edit Service</button>
      <button onClick={props.setProperType} name="delete">Delete Service</button>
    </div>
  )
}

export default ServiceOptionSelector