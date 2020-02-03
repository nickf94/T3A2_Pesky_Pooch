import React, { Component } from 'react';
import ContactForm from '../forms/ContactForm'

class ContactPage extends Component {
  render() {
    return(
      <div className="form-container">
      <h1 className="page-title">Get in contact!</h1>
      <ContactForm />
      </div>
    )
  }
}

export default ContactPage;
