import React from 'react';
import './Footer.css';
import Gradient from '../../img/gradient.png';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Instagram from '@iconscout/react-unicons/icons/uil-instagram';

const Footer = () => {
  return (
    <div className="footer">
      <img
        src={Gradient}
        className="footer-bg"
        alt=""
        style={{ width: '100%' }}
        height={350}
      />
      <div className="f-content">
        <span>+977-9828911954</span>
        <span>Kathmandu-32, Kathmandu</span>
        <span>ahim.mudbari@gmail.com</span>

        <div className="f-icons">
          <a href="https://github.com/AhimshaMudbari" target="blank">
            <Github size={70} color="white" />
          </a>
          <a href="https://www.facebook.com/ahim2000/" target="blank">
            <Facebook size={70} color="blue" />
          </a>
          <a href="https://www.instagram.com/ahim_2000/" target="blank">
            <Instagram size={70} color="red" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
