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

    const params = {
      email,
      title,
      message
    }

    axios.post("http://localhost:7002/api/contact/", params)
    .then((res) => {
      console.log(res)
      document.getElementById("contact-submit").classList.toggle('successful')
    })
    .catch((err) => console.log(err))
  }

  // HEROKU APP URL: https://peskypoochapi.herokuapp.com

/* Renders a contact form and takes the state props */

  render() {
    return(
      <container className="contactform">
        <form className="contact-form" onSubmit={this.onFormSubmit}>

          <label>Send us a message</label>

          <fieldset className="form-group">
            <label>Email:</label>
            <input type="email" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </fieldset>
          <fieldset className="form-group">
            <label>Title:</label>
            <input type="title" value={this.state.title} onChange={this.onTitleChange.bind(this)} />
          </fieldset>
          <fieldset className="form-group">
            <label>Message:</label>
            <textarea rows="3" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </fieldset>

          <button type="submit" className="btn-primary" id="contact-submit">Submit</button>

        </form>
      </container>
    )
  }
}
