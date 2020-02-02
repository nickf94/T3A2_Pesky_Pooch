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
      <label for="check" className="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <div className="logo">
        <label>Pesky Pooch</label>
      </div>
    <ul>
        <li><Link to="/" onClick={toggleClass}>Home</Link></li>
        <li><Link to="/about" onClick={toggleClass}>About</Link></li>
        <li><Link to="/services" onClick={toggleClass}>Services</Link></li>
        <li><Link to="/contact"onClick={toggleClass}>Contact</Link></li>
        <li><Link to="/login"onClick={toggleClass}>Login</Link></li>
      </ul>
    </nav>
  )
}