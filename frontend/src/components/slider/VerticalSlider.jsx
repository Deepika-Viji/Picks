import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';

// Initialize Swiper modules
SwiperCore.use([Autoplay, Pagination]);

const VerticalSlider = () => {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="panel">
        <div className="panel-header">
          <h5>Vertical Swiper</h5>
        </div>
        <div className="panel-body">
          <Swiper
            direction="vertical"
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true, dynamicBullets: true }}
            className="vertical-swiper"
            style={{ height: '253.078px' }}
          >
            <SwiperSlide className="swiper-slide">
              <img src="assets/images/slider-2.jpg" alt="image" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="assets/images/slider-3.jpg" alt="image" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="assets/images/slider-4.jpg" alt="image" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default VerticalSlider;
