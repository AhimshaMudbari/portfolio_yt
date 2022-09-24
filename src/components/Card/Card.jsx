import React from 'react';
import './Card.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Close from '../../img/close.png';
import { motion } from 'framer-motion';
const Card = ({ emoji, heading, detail }) => {
  const transition = { duration: 2, type: 'spring' };
  return (
    <div className="card">
      <motion.span
        whileInView={{ left: '5rem' }}
        initial={{ left: '25%' }}
        transition={transition}
      >
        {heading}
      </motion.span>
      <motion.img src={emoji} alt="" />
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
              <img height={320} width={500} src={emoji} alt="" />
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
