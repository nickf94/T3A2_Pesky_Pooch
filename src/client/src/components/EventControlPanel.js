import React, { Component } from 'react';
import EventOptionSelector from './EventOptionSelector'
export default class EventControlPanel extends Component {
  
  state = {
    editEvent: false,
    addEvent: false,
    deleteEvent: false
  }

  

  // renderNewComponent = (children) => {
  //   return (
  //     <FormComponent >
  //       {...children}
  //     </FormComponent>
  //   )
  // }

  setEditTrue = () => {
    this.setAllFalse()
    this.setState({ editEvent: true })
  }

  setAddTrue = () => {
    console.log('RUNNING setAddTrue NOW')
    this.setAllFalse()
    this.setState({ addEvent: true })
  }

  setDeleteTrue = () => {
    this.setAllFalse()
    this.setState({ deleteEvent: true })
  }

  setAllFalse = () => {
    this.setState({ editEvent: false, addEvent: false, deleteEvent: false })
  }

  render() {
    return (
      <>
        < EventOptionSelector 
        setEditTrue={this.setEditTrue} 
        setAddTrue={this.setAddTrue} 
        setDeleteTrue={this.setDeleteTrue} 
        setAllFalse={this.setAllFalse} 
        editEvent={this.state.editEvent} 
        addEvent={this.state.addEvent} 
        deleteEvent={this.state.deleteEvent} />
      </>
    )
  }
}