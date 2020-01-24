import React, { Component } from 'react';
import EventOptionSelector from './EventOptionSelector'
import axios from 'axios'
import EditEvent from './EditEvent';
import EventForm from '../forms/EventForm';

export default class EventControlPanel extends Component {
  
  state = {
    editEvent: false,
    addEvent: false,
    deleteEvent: false,
    events: [],
  }

  getEvents = () => {
    let token = sessionStorage.getItem('token')
    console.log('asking data')
    axios.get("http://localhost:7002/api/events", {
    headers: {
    'Authorization': token
    }})
    .then(res => {
      let data = res.data
      console.log('found data')
      this.setState({ events: data })
      return data
      })
    .catch(err => console.log)
  }
  

  // renderNewComponent = (children) => {
  //   return (
  //     <FormComponent >
  //       {...children}
  //     </FormComponent>
  //   )
  // }

  setEditTrue = () => {
    // this.setAllFalse()
    this.setState({ editEvent: true, deleteEvent: false, addEvent: false })

  }

  setAddTrue = () => {
    console.log('RUNNING setAddTrue NOW')
    // this.setAllFalse()
    this.setState({ editEvent: false, deleteEvent: false, addEvent: true })
  }

  setDeleteTrue = () => {
    // this.setAllFalse()
    this.setState({ editEvent: false, deleteEvent: true, addEvent: false })

    // this.setState({ deleteEvent: true })
  }

  // setAllFalse = () => {
  //   this.setState({ editEvent: false, addEvent: false, deleteEvent: false })
  // }

  componentDidMount() {
    this.getEvents()
  }

  render() {
    console.log(this.state.events)
    return (
      <>
        < EventOptionSelector 
        setEditTrue={this.setEditTrue} 
        setAddTrue={this.setAddTrue} 
        setDeleteTrue={this.setDeleteTrue} 
        editEvent={this.state.editEvent} 
        addEvent={this.state.addEvent} 
        deleteEvent={this.state.deleteEvent} />

        <div>
          {this.state.editEvent ? (
          < EditEvent events={this.state.events} updateControlEvents={this.getEvents} />
          ): this.state.addEvent ? (
            < EventForm />
          ) :
          (<h1>Other test</h1>) }
          

        </div>
      </>
    )
  }
}