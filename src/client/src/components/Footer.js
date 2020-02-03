import React, { Component } from 'react';
import '../styles/global.scss'

export default class Footer extends Component {
  render() {
    return(
      <footer className="footer">
          <p>Copyright Pesky Pooch ©2020</p>
          <i className="fab fa-facebook" />
      </footer>
    )
  }
}
