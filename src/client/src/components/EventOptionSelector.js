import React, { Component } from 'react';

export default class OptionSelector extends Component {

  state = this.props

  render() {
    return (
    <div className="event-option-selector">
      <button>Add Event</button>
      <button>Edit Event</button>
      <button>Delete Event</button>
    </div>
    )
  }
}
