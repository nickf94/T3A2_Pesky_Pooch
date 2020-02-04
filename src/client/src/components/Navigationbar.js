import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.scss'

export default function NavigationBar() {

  const toggleClass = () => {
    document.getElementById('check').checked = false
  }

  return(
    <nav>
      <input type="checkbox" id="check"></input>
      <label data-cy="burger-btn" for="check" className="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <div className="logo">
        <Link to="/" onClick={toggleClass}><label>Pesky Pooch</label></Link>
      </div>
    <ul>
        <Link to="/" onClick={toggleClass}><li>Home</li></Link>
        <Link to="/about" onClick={toggleClass}><li>About</li></Link>
        <Link to="/services" onClick={toggleClass}><li>Services</li></Link>
        <Link to="/contact"onClick={toggleClass}><li>Contact</li></Link>
        <Link to="/login" data-cy="login"onClick={toggleClass}><li>Login</li></Link>
      </ul>
    </nav>
  )
}
