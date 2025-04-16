import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, EffectCoverflow, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css/effect-coverflow';

// Initialize Swiper modules
SwiperCore.use([Pagination, EffectCoverflow, Autoplay]);

const EffectCoverflowSlider = () => {
  return (
    <div className="col-12">
      <div className="panel">
        <div className="panel-header">
          <h5>Effect Coverflow Swiper</h5>
        </div>
        <div className="panel-body">
          <div className="swiper-container effect-coverflow-swiper">
            <Swiper
              slidesPerView={3}
              loop={true}
              centeredSlides={false}
              spaceBetween={50}
              pagination={{ clickable: true, dynamicBullets: true }}
              effect="coverflow"
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              className="swiper-wrapper"
            >
              <SwiperSlide className="swiper-slide">
                <img src="assets/images/slider-1.jpg" alt="image" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/images/slider-2.jpg" alt="image" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/images/slider-3.jpg" alt="image" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/images/slider-4.jpg" alt="image" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/images/slider-5.jpg" alt="image" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/images/slider-6.jpg" alt="image" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EffectCoverflowSlider;
