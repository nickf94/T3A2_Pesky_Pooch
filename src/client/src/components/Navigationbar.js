import React, { Component } from 'react';
import { Navbar } from 'react-bulma-components';
import logo from '../assets/logo.jpg'
import '../styles/styles.scss'

export const Navigationbar = () => (
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src={logo} width="40" height="40" />
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Services
      </a>
      <a class="navbar-item">
        About
      </a>
      <a class="navbar-item">
        Contact
      </a>
    </div>
  </div>
  </nav>
)
