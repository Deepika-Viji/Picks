import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';

// Initialize Swiper modules
SwiperCore.use([Pagination, Autoplay]);

const ResponsiveSlider = () => {
  return (
    <div className="col-12">
      <div className="panel">
        <div className="panel-header">
          <h5>Responsive Breakpoints Swiper</h5>
        </div>
        <div className="panel-body">
          <div className="swiper-container responsive-swiper">
            <Swiper
                loop={true}
                pagination={{ clickable: true, dynamicBullets: true }} // Add dynamicBullets property
                spaceBetween={20}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                breakpoints={{
                    576: {
                    slidesPerView: 2,
                    },
                    768: {
                    slidesPerView: 3,
                    },
                    1200: {
                    slidesPerView: 4,
                    },
                }}
                className="swiper-wrapper"
            >
              <SwiperSlide className="swiper-slide">
                <img src="src/assets/images/slider-1.jpg" alt="image" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="src/assets/images/slider-2.jpg" alt="image" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="src/assets/images/slider-3.jpg" alt="image" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="src/assets/images/slider-4.jpg" alt="image" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="src/assets/images/slider-5.jpg" alt="image" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="src/assets/images/slider-6.jpg" alt="image" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveSlider;
