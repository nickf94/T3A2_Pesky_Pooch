import React, { Component } from 'react';
import axios from 'axios';

export default class EventForm extends Component {
  state = {
    name: "",
    location: "",
    description: ""
  };

  onFormSubmit = event => {
    event.preventDefault();
    const { name, location, description } = this.state;

    const params = {
      name,
      location,
      description
  }
  // HEROKU APP URL: https://peskypoochapi.herokuapp.com

  axios.post("http://localhost:7001/api/events/new", params)
  .then(res => console.log)
  .catch(err => console.log)
};

onNameChange(event) {
  this.setState({name: event.target.value})
}

onLocationChange(event) {
  this.setState({location: event.target.value})
}

onDescriptionChange(event) {
  this.setState({description: event.target.value})
}

handleSubmit(event) {
}

render() {
  return(
    <form id="event-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
      </div>
      <div className="form-group">
        <label htmlFor="location">Location:</label>
        <input type="location" value={this.state.location} onChange={this.onLocationChange.bind(this)} />
      </div>
      <div className="form-group">
        <label for="description">Description:</label>
        <textarea rows="3" value={this.state.description} onChange={this.onDescriptionChange.bind(this)} />
      </div>
      <button type="submit" className="btn-primary">Submit</button>
    </form>
  );
}
}
