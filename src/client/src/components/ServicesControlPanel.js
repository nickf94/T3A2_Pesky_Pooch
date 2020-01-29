import React, { useState, useEffect } from 'react'
import ServiceOptionSelector from './ServiceOptionSelector'

export default function ServicesControlPanel(props) {
  const [serviceTypes, setServiceTypes] = useState({add: false, edit: false, delete: false})
  const [selectedType, setSelectedType] = useState(null)

  const renderForm = () => {
    switch (selectedType) {
      case 'add':
        // return < AddService />
      case 'delete':
        // return < DeleteService />
      case 'edit':
        // return < EditService />
      default:
        return <p>No selectedType</p>
    }
  }

  const setProperType = (type) => {
    setServiceTypes({add: false, edit: false, delete: false, [type.target.name]: true})
    setSelectedType(type.target.name)
  }

  return (
    <>
      <p className="admin-banner">You have been authorized as an admin.</p>

      < ServiceOptionSelector 
        setProperType={setProperType}
      />

      <div id="form-container">
        {selectedType && renderForm()}
      </div>
    </>
  )

}