import React, { Component } from 'react';
import axios from "axios";
import '../styles/global.scss'

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

    axios.post(`${process.env.BASE_URL}contact`, params)
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
      <container classname="form-container">
        <form data-cy="contact-form" className="contact-form" onSubmit={this.onFormSubmit}>
          <fieldset>
            <label>Email:</label>
            <input data-cy="email" type="text" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </fieldset>
          <fieldset>
            <label>Title:</label>
            <input data-cy="title" type="text" value={this.state.title} onChange={this.onTitleChange.bind(this)} />
          </fieldset>
          <fieldset>
            <label>Message:</label>
            <textarea data-cy="text" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </fieldset>

          <button data-cy="submit" type="submit" className="btn-primary" id="contact-submit">Submit</button>

        </form>
      </container>
    )
  }
}
