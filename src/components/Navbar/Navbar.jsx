import React from 'react';
import Toogle from '../Toogle/Toogle';
import './Navbar.css';
import { Link } from 'react-scroll';

export const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="n-wrapper">
        <div className="n-left">
          <div className="n-name">Ahimsha</div>
          <Toogle />
        </div>
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: 'none' }}>
              <Link
                to="Navbar"
                smooth={true}
                spy={true}
                activeClass="activeClass"
              >
                <li>Home</li>
              </Link>
              <Link to="Services" smooth={true} spy={true}>
                <li>Services</li>
              </Link>
              <Link to="Experience" smooth={true} spy={true}>
                <li>Experience</li>
              </Link>
              <Link to="Portfolio" smooth={true} spy={true}>
                <li>Portfolio</li>
              </Link>
              <Link to="Testimonial" smooth={true} spy={true}>
                <li>Testimonial</li>
              </Link>
            </ul>
          </div>
          <Link to="Contact" spy={true} smooth={true}>
            <button className="button n-button">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
