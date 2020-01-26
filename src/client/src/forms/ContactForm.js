import React, { Component } from 'react';
import axios from "axios";

export default class ContactForm extends Component {
constructor(props) {
  super(props);
  this.state = {
    email: "",
    title: "",
    message: ""
    }
  }
  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onTitleChange(event) {
    this.setState({title: event.target.value})
  }

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


  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onTitleChange(event) {
    this.setState({title: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }


  render() {
    return(
      <container className="contactform">
        <form className="contact-form" onSubmit={this.onFormSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input type="title" value={this.state.title} onChange={this.onTitleChange.bind(this)} />
          </div>
          <div className="form-group">
            <label for="message">Message:</label>
            <textarea rows="3" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <button type="submit" className="btn-primary" id="contact-submit">Submit</button>
        </form>
      </container>
    )
  }
}
