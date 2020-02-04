import React from "react";
import TestimonialsBox from "../components/TestimonialsBox";
import "../styles/colours.scss";
import "../styles/about.scss";

export const About = () => (
  <React.Fragment>
    <h1 className="about-title">
      Training for Dogs – Solutions for Owners
    </h1>
    <p className="about-subtitle">
      At Pesky Pooch, pooch perfection is our passion. For more than 20 years, we've found great success in shaping the behaviour of the Gold Coast's very best, to the very worst canines. Let us unleash your pooches potential!
    </p>

    <main className="text-wrapper">
      <div class="about-info">
        <div class="about-block about-block1">
          <i class="fas fa-bullseye"></i>
          <h3>
            Our Mission
          </h3>
          <p>
            Our story begins with <span className="about-keywords">you.</span> We're 100% focused on providing services with the highest levels of customer satisfaction – we will do everything we can to meet your expectations.
            With a variety of offerings to choose from, we’re sure you’ll be happy working with us. Look around our website and if you have any comments or questions, please feel free to contact us.
          </p>
        </div>

        <div class="about-block about-block2">
          <i class="fas fa-bullhorn"></i>
          <h3>
            The Pesky Pooch Way <i insert-icon-here></i>
          </h3>
          <p>
            At Pesky Pooch, we don't polarise on "fixing all the problems". Instead, we diagnose fundamental causes of anxiety and behavioural issues in the life of your pooch so that we can take effective steps towards transforming that anxiety and aggression into peacefulness, love, and relaxation. We don’t have a ‘one size fits all’ approach because we realise <em>every dog, owner or family are different.</em>
          </p>
        </div>

        <div class="about-block about-block3">
          <i class="fas fa-history"></i>
          <h3>
            20+ Years Experience <i insert-icon-here></i>
          </h3>
          <p>
            We have been doing behavioural issues and dog training on the Gold Coast now for more then 20 years with great success. With such experience, it's more than just knowledge we have to offer – it’s a <em>feel</em> for dogs and puppies. The dogs move into a much happier and balanced state usually within one session and I love to see the change in them.
          </p>
        </div>

        <div>
        </div>
      </div>
    </main>
    < TestimonialsBox />
  </React.Fragment>
);
