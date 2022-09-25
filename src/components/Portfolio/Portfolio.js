import React from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import PizzaApp from '../../img/pizzaApp.png';
import ReactAnalytics from '../../img/reactAnalytics.png';
import GOTCard from '../../img/gotCard.png';
import NetflixClone from '../../img/nfClone.png';
import AppleEcom from '../../img/appleEcom.png';
import 'swiper/css';
const Portfolio = () => {
  return (
    <div className="portfolio Portfolio">
      {/* heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={ReactAnalytics} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={GOTCard} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={NetflixClone} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={AppleEcom} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={PizzaApp} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
