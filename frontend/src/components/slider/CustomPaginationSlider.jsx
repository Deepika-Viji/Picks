import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';

// Initialize Swiper modules
SwiperCore.use([Autoplay, Pagination]);

const CustomPaginationSlider = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      };
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="panel">
        <div className="panel-header">
          <h5>Pagination Custom Swiper</h5>
        </div>
        <div className="panel-body">
          <Swiper
            pagination={pagination}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            className="pagination-custom-swiper"
          >
            <SwiperSlide className="swiper-slide">
              <img src="assets/images/slider-3.jpg" alt="image" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="assets/images/slider-4.jpg" alt="image" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <img src="assets/images/slider-5.jpg" alt="image" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CustomPaginationSlider;
