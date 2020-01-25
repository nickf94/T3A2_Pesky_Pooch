import React, { Component } from 'react';

export default class OptionSelector extends Component {

  render() {
    return (
    <div className="event-option-selector">
      <button onClick={this.props.setProperType} name="add">Add Event</button>
      <button onClick={this.props.setProperType} name="edit">Edit Event</button>
      <button onClick={this.props.setProperType} name="delete">Delete Event</button>
    </div>
    )
  }
}
