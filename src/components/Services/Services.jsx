import React from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Card from '../Card/Card';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Resume from './ahimshaResume.pdf';

const Services = () => {
  return (
    <div className="services">
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          {' '}
          <li>To code for hours and hours and explore relevant contents.</li>
          <li>To develop creative presentation slides.</li>
          <li>To research and case study technical stuff.</li>
          <li>To contribute my skills in solving complex problems.</li>
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur" style={{ background: '#ABF1FF' }}></div>
      </div>
      <div className="cards">
        <div style={{ left: '17rem' }}>
          <Card
            emoji={HeartEmoji}
            heading={`Design`}
            detail={'Canva, Picmonkey, Figma, Photoshop'}
          />
        </div>
        <div style={{ top: '12rem', left: '-2rem' }}>
          <Card
            emoji={Glasses}
            heading={`Developing`}
            detail={'Html, Css, JavaScript, React, Php, Java, NodeJS, c#'}
          />
        </div>
        <div style={{ top: '17rem', left: '14rem' }}>
          <Card
            emoji={Humble}
            heading={`Databases`}
            detail={'MongoDB, MySQL, GraphQL, Oracle'}
          />
        </div>
      </div>
      <div className="blur s-blur2"></div>
    </div>
  );
};

export default Services;
