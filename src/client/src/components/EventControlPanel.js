import React, { Component } from 'react';

export default class EventControlPanel extends Component {
  
  state = {
    editEvent: false,
    addEvent: false,
    deleteEvent: false
  }

  setTrue = (target) => {
    this.setState({ editEvent: false, addEvent: false, deleteEvent: false })
    this.setState({ editEvent: target })
  }

  render() {
    return (
      <>
        < EventOptionSelector />
      </>
    )
  }
}