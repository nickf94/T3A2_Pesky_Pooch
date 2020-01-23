import React, { Component } from 'react';
import { Dropdown } from 'react-bulma-components';

export default class EditEvent extends Component {
  state = {
    name: "",
    description: "",
    location: "",
    events: []
  }

  componentDidMount() {
    this.setState({ events: this.props.events })
  }

  render() {
    return (
      <>
       <h3>Which event would you like to edit?</h3>
      {this.state.events.forEach(event => {
        return (
        <button>${event.name}</button>
        )
      })}
      </>
    )
  }
}