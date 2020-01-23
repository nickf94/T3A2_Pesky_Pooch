import React, { Component } from 'react';

export default class OptionSelector extends Component {

  render() {
    return (
    <div className="event-option-selector">
      <button onClick={this.props.setAddTrue}>Add Event</button>
      <button onClick={this.props.setEditTrue}>Edit Event</button>
      <button onClick={this.props.setDeleteTrue}>Delete Event</button>
    </div>
    )
  }
}
