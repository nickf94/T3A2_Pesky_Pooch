import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.scss'

export default class NavigationBar extends Component {
  onLogin = (token, user) => {
    sessionStorage.setItem("token", token)
    sessionStorage.setItem("user", user)
    this.setState({ token, user })
  }
  render() {
  return(
      <div class="menu-container">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/login" onLogin={this.onLogin}>Login</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
