import React from 'react';
import { Link } from 'react-router-dom'

export const Home  = () => (
  <React.Fragment>
    <div className="homepage">
      <div className="text-wrapper">
        <h1 className="page-title">Home</h1>
        <p>Who are we at Pesky Pooch?</p>
        <p>At Pesky Pooch, the experience of the years behind <Link to="/about">defines the quality of our services.</Link></p>
        Where experience has defined the quality of our services.
      </div>
    </div>
  </React.Fragment>
)
