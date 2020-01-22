import React, { Component } from 'react';
import EventOptionSelector from './EventOptionSelector'
export default class EventControlPanel extends Component {
  
  state = {
    editEvent: false,
    addEvent: false,
    deleteEvent: false
  }

  setOneTrue = (target) => {
    this.setState({ editEvent: false, addEvent: false, deleteEvent: false })
    this.setState({ editEvent: target })
  }

  setAllFalse = () => {
    this.setState({ editEvent: false, addEvent: false, deleteEvent: false })
  }

  render() {
    return (
      <>
        < EventOptionSelector setOneTrue={this.setOneTrue} setAllFalse={this.setAllFalse} />
      </>
    )
  }
}