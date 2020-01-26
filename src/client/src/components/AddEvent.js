import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/eventcontrolpanel.css'

export default function AddEvent() {
  const [eventParams, setEventParams] = useState({name: '', description: '', location: ''})

  const formReducer = (event) => {
    let newParams = {...eventParams, [event.target.name]: event.target.value}
    setEventParams(newParams)
    console.log(newParams)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    let token = sessionStorage.getItem('token')
    axios.post("http://localhost:7002/api/events/new", eventParams, {
    headers: {
    'Authorization': token
    }})
    .then(res => console.log)
    .catch(err => console.log)
  }

  return (
     <form id="event-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label name="name">Name:</label>
        <input type="name" value={eventParams.name} onChange={(e) => formReducer(e)} name="name" />
      </div>
      <div className="form-group">
        <label name="location">Location:</label>
        <input type="location" value={eventParams.location} onChange={(e) => formReducer(e)} name="location"/>
      </div>
      <div className="form-group">
        <label name="description">Description:</label>
        <textarea rows="3" value={eventParams.description} onChange={(e) => formReducer(e)} name="description"/>
      </div>
      <button type="submit" className="btn-primary" onSubmit={handleSubmit}>Submit</button>
    </form>
  )
}

// export default class EventForm extends Component {
//   state = {
//     name: "",
//     location: "",
//     description: ""
//   };

//   onFormSubmit = event => {
//     event.preventDefault()
//     const { name, location, description } = this.state;

//     const params = {
//       name,
//       location,
//       description
//     }
//     // HEROKU APP URL: https://peskypoochapi.herokuapp.com
//     let token = sessionStorage.getItem('token')
//     console.log(token)
//     axios.post("http://localhost:7002/api/events/new", params, {
//     headers: {
//     'Authorization': token
//     }})
//     .then(res => console.log)
//     .catch(err => console.log)
//   }

//   onNameChange(event) {
//     this.setState({name: event.target.value})
//   }

//   onLocationChange(event) {
//     this.setState({location: event.target.value})
//   }

//   onDescriptionChange(event) {
//     this.setState({description: event.target.value})
//   }

//   handleSubmit(event) {
//   }

//   render() {
//     return(
//       <form id="event-form" onSubmit={this.onFormSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input type="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
//         </div>
//         <div className="form-group">
//           <label htmlFor="location">Location:</label>
//           <input type="location" value={this.state.location} onChange={this.onLocationChange.bind(this)} />
//         </div>
//         <div className="form-group">
//           <label for="description">Description:</label>
//           <textarea rows="3" value={this.state.description} onChange={this.onDescriptionChange.bind(this)} />
//         </div>
//         <button type="submit" className="btn-primary">Submit</button>
//       </form>
//     );
//   }
// }
