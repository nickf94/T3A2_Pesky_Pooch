import React, { useState } from 'react';
import EventOptionSelector from './EventOptionSelector'
import EditEvent from './EditEvent'
import AddEvent from './AddEvent'
import DeleteEvent from './DeleteEvent'
import '../styles/eventcontrolpanel.scss'
import ImageControlPanel from './ImageControlPanel';

export default function EventControlPanel(props) {
  const [eventTypes, setEventTypes] = useState({add: false, edit: false, delete: false})
  const [selectedType, setSelectedType] = useState(null)

  const renderForm = () => {
    switch (selectedType) {
      case 'add':
        return < AddEvent updateServicesEvents={props.updateServicesEvents} />
      case 'delete':
        return <DeleteEvent updateServicesEvents={props.updateServicesEvents}/>
      case 'edit':
        return < EditEvent updateServicesEvents={props.updateServicesEvents}/>
      default:
        return <p>No selectedType</p>
    }
  }

  const setProperType = (type) => {
    setEventTypes({add: false, edit: false, delete: false, [type.target.name]: true})
    setSelectedType(type.target.name)
  }

  return (
    <>
      <p className="admin-banner">You have been authorized as an admin.</p>
      < EventOptionSelector
        setProperType={setProperType}
      />

      <div id="form-container">
        {selectedType && renderForm()}
      </div>
    </>
  )
}
