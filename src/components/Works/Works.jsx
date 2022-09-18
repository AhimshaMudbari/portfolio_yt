import React from 'react';
import './Works.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Amazon from '../../img/amazon.png';
import Facebook from '../../img/Facebook.png';
import Shopify from '../../img/Shopify.png';

const Works = () => {
  return (
    <div className="works">
      <div className="awesome">
        <span>My Works Overview</span>
        <span>Brand and clients</span>
        <span>
          {' '}
          <li>Facebook</li>
          <li>Upwork</li>
          <li>Fiverr</li>
          <li>Shopify</li>
          <li>Amazon</li>
        </span>
        <button className="button s-button">Wanna Hire?</button>
        <div className="blur w-blur" style={{ background: '#d2d4fe' }}></div>
      </div>
      {/* right side */}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
