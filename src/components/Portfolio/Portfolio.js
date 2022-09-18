import React from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Sidebar from '../../img/sidebar.png';
import Ecommerce from '../../img/ecommerce.png';
import 'swiper/css';
const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* heading */}
      <span>Recent Projects</span>
      <span>Portfolio</span>
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
