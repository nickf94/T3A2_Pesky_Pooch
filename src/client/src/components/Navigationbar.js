import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.scss'
import logo from '../assets/pesky-pooch-icon.png';

export default function NavigationBar() {

  const toggleClass = () => {
    document.getElementById('check').checked = false
  }

  return(
    <nav>
      <input className="nav" type="checkbox" id="check"></input>
      <label for="check" className="checkbtn">
        <i class="fas fa-bars"></i>
      </label>
      <div className="logo">
        <Link to="/" onClick={toggleClass}><label>Pesky <img className="brand-logo" src={logo} alt="Logo"></img>Pooch</label></Link>
      </div>
    <ul>
        <Link to="/" onClick={toggleClass}><li>Home</li></Link>
        <Link to="/about" onClick={toggleClass}><li>About</li></Link>
        <Link to="/services" onClick={toggleClass}><li>Services</li></Link>
        <Link to="/contact"data-cy="contact" onClick={toggleClass}><li>Contact</li></Link>
      </ul>
    </nav>
  )
}
