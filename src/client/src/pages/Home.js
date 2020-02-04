import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../styles/home.scss'
import TypeWriterFeature from '../assets/TypeWriterFeature';
// import "../assets/TypeWriterFeature.js";

export const Home = () => (
  <React.Fragment>
    < TypeWriterFeature />
    <div className="bg-image">
      <div className="text-wrapper home-hero-text-box">
        <h1>Welcome to <span className="secondary-text">Pesky Pooch</span></h1>
        <h3>Gold Coasts premier service for canine         
          <span class="txt-type" data-wait="1000" data-words='[" behavioural training" ," fitness"
          ," grooming", " sitting", " massage therapy" ]'></span></h3>  
      </div>
    </div>
  </React.Fragment>
)
