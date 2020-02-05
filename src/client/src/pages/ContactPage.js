import React, { Component } from 'react';
import ContactForm from '../forms/ContactForm'
import { Link } from 'react-router-dom';
import '../styles/contactpage.scss'

class ContactPage extends Component {
  render() {
    return(
      <div className="form-container">
      <h1 className="page-title">Get in contact!</h1>
      <div className="media-links">
        <p>Find me through my social media</p>
        <Link to="https://www.facebook.com/PeskyPooch/"><i className="fab fa-facebook facebook" /></Link>
      </div>
      <p id="contactlabel">Or send me an email using this handy form</p>
      <ContactForm />
      </div>
    )
  }
}

export default ContactPage;
