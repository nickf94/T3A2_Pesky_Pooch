import React, { useState, useEffect } from 'react'
import ServiceOptionSelector from './ServiceOptionSelector'
import AddService from './AddService'
import DeleteService from './DeleteService'
import EditService from './EditService'

export default function ServicesControlPanel(props) {
  const [serviceTypes, setServiceTypes] = useState({add: false, edit: false, delete: false})
  const [selectedType, setSelectedType] = useState(null)

  const renderForm = () => {
    switch (selectedType) {
      case 'add':
        return < AddService refreshServices={props.updateServices}/>
      case 'delete':
        return < DeleteService refreshServices={props.updateServices}/>
      case 'edit':
        return < EditService refreshServices={props.updateServices}/>
      default:
        return <p>No selectedType</p>
    }
  }

  useEffect(() => {
    console.log("Mounted service control panel")
    props.updateServices()
  }, [])

  const setProperType = (type) => {
    setServiceTypes({add: false, edit: false, delete: false, [type.target.name]: true})
    setSelectedType(type.target.name)
  }

  return (
    <>
      < ServiceOptionSelector 
        setProperType={setProperType}
      />

      <div id="form-container">
        {selectedType && renderForm()}
      </div>
    </>
  )

}