import React from 'react';
import './Intro.css';
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin';
import Instagram from '@iconscout/react-unicons/icons/uil-instagram';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Splash from '../../img/fire.png';
import Me from '../../img/ahim.png';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { themeContext } from '../../Context';
const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 2, type: 'spring' };
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Web Developer</span>
          <span>Ahimsha Mudbari</span>
          <span>
            I'm web developer involved in web development, designing and
            learning new things in crazy speed.
          </span>
        </div>
        <p style={{ fontWeight: 'bolder', fontSize: '40px' }}>Find me on...</p>
        <div className="i-icons">
          <a href="https://www.github.com/AhimshaMudbari" target="blank">
            {' '}
            <Github size={111} color={darkMode ? 'white' : 'black'} />
          </a>
          <a
            href="https://www.linkedin.com/in/ahim-mudbari-4aa326237/"
            target="blank"
          >
            <LinkedIn size={111} color="#6195fc" />
          </a>
          <a href="https://www.instagram.com/ahim_2000/" target="blank">
            {' '}
            <Instagram size={111} color="red" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <motion.img
          initial={{ left: '-30%' }}
          whileInView={{ left: '-1%' }}
          transition={transition}
          src={Splash}
          alt=""
        />
        <motion.img
          initial={{ left: '-40%' }}
          whileInView={{ left: '-1%' }}
          transition={transition}
          src={Me}
          alt=""
        />
        <div
          className="blur"
          style={{
            background: 'rgb(102 102 255)',
          }}
        ></div>
        <div
          className="blur2"
          style={{
            background: 'rgb(255 102 102)',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
