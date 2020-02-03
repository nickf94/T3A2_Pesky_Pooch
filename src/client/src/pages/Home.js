import React from 'react';
import { Link } from 'react-router-dom'

export const Home  = () => (
  <React.Fragment>
    <div className="homepage">
      <div className="text-wrapper">
        <h1 className="page-title">Home</h1>
        <p>Who are we at Pesky Pooch?</p>
        <p>Pesky Pooch sets the standard for those special pooch owners looking to take an extra level of care with their most precious companion.</p>
        <p>Carrying personality, drive, perspective, and unyielding, uncompromising passion for delivering the best possible care of your (real) best friend/s is why Pesky Pooch has been the 
          Gold Coast's best option in canine behavioural training, fitness, grooming, sitting, and therapeutic massage, </p>
        <p>At Pesky Pooch, the experience gained in the years behind us <Link to="/about">defines the quality of our services.</Link></p>
        
      </div>
    </div>
  </React.Fragment>
)
