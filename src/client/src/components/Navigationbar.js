import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.scss'

export default class Navigationbar extends Component {
  render() {
    return(
    <html>
    <body>
      <div class="menu-container">
        <input type="checkbox" class="toggler" />
        <div class="hamburger">
          <div></div>
        </div>
        <div class="menu">
          <div>
            <div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>


    </body>
    </html>
  )
  }
}
