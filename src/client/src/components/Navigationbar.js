import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bulma-components';
import logo from '../assets/logo.jpg'
import '../styles/styles.scss'

export const Navigationbar = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <div className="navbar-icon" href="https://bulma.io">
        <img src={logo} width="40" height="40" />
      </div>

      <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div className="navbar-menu">

      <div className="navbar-start">
          <Link to="/" className="navbar-item">Home</Link>
          <Link to="/about" className="navbar-item">About</Link>
          <Link to="/services" className="navbar-item">Services</Link>
          <Link to="/contact" className="navbar-item">Contact</Link>
      </div>
    </div>
  </nav>
)
