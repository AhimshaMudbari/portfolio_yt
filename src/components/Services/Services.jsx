import React from 'react';
import './Services.css';
import Design from '../../img/design.png';
import Card from '../Card/Card';
import Programming from '../../img/Programming.png';
import Database from '../../img/database.png';
import Resume from './ahimshaResume.pdf';

const Services = () => {
  return (
    <div className="services Services">
      <div className="awesome">
        <span>Things That</span>
        <span>I love to do...</span>
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
        <div style={{ flex: '1' }}>
          <Card
            emoji={Design}
            heading={`Design`}
            detail={'Canva, Picmonkey, Figma, Photoshop'}
          />
        </div>
        <hr />
        <div style={{ flex: '1' }}>
          <Card
            emoji={Programming}
            heading={`Developing`}
            detail={'Html, Css, JavaScript, React, Php, Java, NodeJS, c#'}
          />
        </div>
        <hr />

        <div style={{ top: '17rem', left: '14rem' }}>
          <Card
            emoji={Database}
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
