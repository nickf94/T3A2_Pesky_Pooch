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
    events: {},
  }

  getEvents = () => {
    let token = sessionStorage.getItem('token')
    console.log(token)
    axios.get("http://localhost:7002/api/events", {
    headers: {
    'Authorization': token
    }})
    .then(res => this.setState({ events: res.data }))
    .then(this.props.setParentEvents(this.state.events))
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

  componentDidMount() {
    this.getEvents()
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

        <div>
          {this.state.editEvent ? (
          < EditEvent events={this.state.events} />,
          this.state.events.forEach(event => {
            return <h1>{event.name}</h1>
          })
          ): this.state.addEvent ? (
            < EventForm />
          ) :
          (<h1>Other test</h1>) }
          

        </div>
      </>
    )
  }
}