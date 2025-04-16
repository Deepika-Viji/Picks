import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';

// Initialize Swiper modules
SwiperCore.use([Autoplay, Pagination]);

const PaginationFractionSlider = () => {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="panel">
        <div className="panel-header">
          <h5>Pagination Fraction Swiper</h5>
        </div>
        <div className="panel-body">
          <Swiper
            pagination={{ type: 'fraction' }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            className="pagination-fraction-swiper"
          >
            <SwiperSlide className="swiper-slide">
              <img src="assets/images/slider-10.jpg" alt="image" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="assets/images/slider-1.jpg" alt="image" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="assets/images/slider-2.jpg" alt="image" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PaginationFractionSlider;
