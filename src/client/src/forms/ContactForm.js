import React, { Component } from 'react';
import axios from "axios";
import '../styles/styles.scss'

export default class ContactForm extends Component {
  /* takes in props that passes conditions into a state */
constructor(props) {
  super(props);
  this.state = {
    email: "",
    title: "",
    message: ""
    }
  };



/* takes conditions from the state and passes them into events for use in the contact form */

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onTitleChange(event) {
    this.setState({title: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

/* axios posts form to an api in the back end */

  onFormSubmit = event => {
    event.preventDefault()
    const { email, title, message } = this.state;
    axios.post("http://localhost:7002/api/contact/", email, title, message)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  }

  // HEROKU APP URL: https://peskypoochapi.herokuapp.com

/* Renders a contact form and takes the state props */

  render() {
    return(
      <form className="contact-form" onSubmit={this.onFormSubmit}>
        <div className="contat-label">
          <label htmlFor="email">Email:</label>
          <div>
            <input type="email" placeholder="e.g. johnsmith@gmail.com" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
        </div>
        <div className="contact-label">
          <label htmlFor="title">Title:</label>
          <div>
            <input type="text" value={this.state.title} onChange={this.onTitleChange.bind(this)} />
          </div>
        </div>
        <div className="contact-label">
          <label for="message">Message:</label>
          <div>
            <textarea value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
        </div>
        <button type="submit" className="btn-primary">Submit</button>
      </form>
    )
  }
}
