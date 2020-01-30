import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.scss'

export default class NavigationBar extends Component {
  onLogin = (token, user) => {
    sessionStorage.setItem("token", token)
    sessionStorage.setItem("user", user)
    this.setState({ token, user })
  }

  // function hideMenu() {
  //     setActive(false)
  // }

  render() {
  return(
    <nav>
      <input type="checkbox" id="check"></input>
      <label for="check" className="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <label class="logo">Pesky Pooch</label>
      <ul>
        <li><Link className="active" to="/">Home</Link></li>
        <li><Link className="active" to="/about">About</Link></li>
        <li><Link className="active" to="/services">Services</Link></li>
        <li><Link className="active" to="/contact">Contact</Link></li>
      </ul>
    </nav>
    )
  }
}
