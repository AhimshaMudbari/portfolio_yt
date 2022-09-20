import React from 'react';
import Toogle from '../Toogle/Toogle';
import './Navbar.css';

export const Navbar = () => {
  return (
    <div>
      <div className="n-wrapper">
        <div className="n-left">
          <div className="n-name">Ahimsha</div>
          <Toogle />
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: 'none' }}>
              <li>Home</li>
              <li>Services</li>
              <li>Experience</li>
              <li>Portfolio</li>
              <li>Testimonial</li>
            </ul>
          </div>
          <button className="button n-button">Contact</button>
        </div>
      </div>
    </div>
  );
};
