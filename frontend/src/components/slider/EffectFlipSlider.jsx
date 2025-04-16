import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination, EffectFlip } from 'swiper';

// Import Swiper styles
import 'swiper/css/effect-flip';

// Initialize Swiper modules
SwiperCore.use([Autoplay, Pagination, EffectFlip]);

const EffectFlipSlider = () => {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="panel">
        <div className="panel-header">
          <h5>Effect Flip Swiper</h5>
        </div>
        <div className="panel-body">
          <div className="swiper-container effect-flip-swiper">
            <Swiper
              slidesPerView={1}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{ clickable: true, dynamicBullets: true }}
              effect="flip"
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
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EffectFlipSlider;
