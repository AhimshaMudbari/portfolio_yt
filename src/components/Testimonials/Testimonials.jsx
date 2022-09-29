import React from 'react';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import './Testimonials.css';
import Shankar from '../../img/Shankar.jpg';
import Nischal from '../../img/Nischal.jpg';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
const Testimonials = () => {
  const clients = [
    {
      img: Shankar,
      review:
        'Full commitment in the work, punctual and the most co-operative person',
      by: 'Shankar Khadka',
      Organization: 'Living Stone College',
    },
    {
      img: Nischal,
      review: 'A great guy and a talent guy in the organization',
      by: 'Nischal Ghimire',
      Organization: 'Shikshya Technology',
    },
  ];

  return (
    <div className="t-wrapper Testimonial">
      <div className="t-heading">
        <span>what others say about me?</span>
        <div className="blur t-blur1"></div>
        <div className="blur t-blur2"></div>
      </div>
      <Swiper modules={[Pagination]} pagination={{ clickable: true }}>
        {clients.map((c, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial">
              <img src={c.img} alt="" />
              <span>{c.review}</span>
              <span>{c.by}</span>
              <span>{c.Organization}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
