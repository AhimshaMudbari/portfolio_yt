import React from 'react';
import './Card.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Close from '../../img/close.png';
const Card = ({ emoji, heading, detail }) => {
  return (
    <div className="card">
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <Popup
        trigger={<button className="button c-button">Read More..</button>}
        position="center center"
        modal
        nested
      >
        {(close) => (
          <div className="modal">
            <div></div>
            <div className="header">{heading}</div>
            <div className="picture">
              <img src={emoji} alt="" />
            </div>
            <div className="Content">{detail}</div>

            <div className="btn">
              <button className="close" onClick={close}>
                <img src={Close} alt="" />
              </button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default Card;
