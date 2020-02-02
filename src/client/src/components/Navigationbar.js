import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.scss'

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);
    // this.addActiveClass = this.addActiveClass.bind(this);
    this.state = {
      active: true,
    };
  }

  toggleClass = (event) => {
    const currentState = this.state.active
    this.setState({ active: !currentState })
  }

  onLogin = (token, user) => {
    sessionStorage.setItem("token", token)
    sessionStorage.setItem("user", user)
    this.setState({ token, user })
  }

  render() {
  return(
    <nav>
      <input type="checkbox" id="check"></input>
      <label for="check" className="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <div className="logo">
        <label>Pesky Pooch</label>
      </div>
    <ul>
        <li><Link className="active" to="/" onClick={this.toggleClass}>Home</Link></li>
        <li><Link className="active" to="/about" onClick={this.toggleClass}>About</Link></li>
        <li><Link className="active" to="/services" onClick={this.toggleClass}>Services</Link></li>
        <li><Link className="active" to="/contact"onClick={this.toggleClass}>Contact</Link></li>
        <li><Link className="active" to="/login"onClick={this.toggleClass}>Login</Link></li>
      </ul>
    </nav>
    )
  }
}
