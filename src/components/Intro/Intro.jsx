import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Splash from '../../img/fire.png';
import Me from '../../img/ahim.png';

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! It's me</span>
          <span>Ahimsha Mudbari</span>
          <span>
            I'm web developer involved in web development, designing and
            learning new things in crazy speed.
          </span>
        </div>
        <button className="button i-button">Let's connect</button>
        <div className="i-icons">
          <a href="https://www.github.com/AhimshaMudbari" target="blank">
            {' '}
            <img src={Github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/ahim-mudbari-4aa326237/"
            target="blank"
          >
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/ahim_2000/" target="blank">
            {' '}
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Splash} alt="" />
        <img src={Me} alt="" />
      </div>
    </div>
  );
};

export default Intro;
