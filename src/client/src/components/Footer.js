import React, { Component } from 'react';
import '../styles/global.scss'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p className="admin-login">Admin Login</p>
        <p>©2020 <b>Pesky Pooch</b> Training Ltd.</p>
        <p className="social-icons"><i className="fab fa-facebook" /></p>
      </footer>
    );
  }
}
