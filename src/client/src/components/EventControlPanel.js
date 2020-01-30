import React, { useState } from 'react';
import EventOptionSelector from './EventOptionSelector'
import EditEvent from './EditEvent'
import AddEvent from './AddEvent'
import DeleteEvent from './DeleteEvent'
import '../styles/eventcontrolpanel.scss'

export default function EventControlPanel() {
  const [eventTypes, setEventTypes] = useState({add: false, edit: false, delete: false})
  const [selectedType, setSelectedType] = useState(null)

  const renderForm = () => {
    switch (selectedType) {
      case 'add':
        return < AddEvent />
      case 'delete':
        return <DeleteEvent />
      case 'edit':
        return < EditEvent />
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
