import React from 'react'
import Footer from '../components/footer/Footer'
import DefaultSlider from '../components/slider/DefaultSlider'
import NavigationSlider from '../components/slider/NavigationSlider'
import PaginationSlider from '../components/slider/PaginationSlider'
import PaginationFractionSlider from '../components/slider/PaginationFractionSlider'
import CustomPaginationSlider from '../components/slider/CustomPaginationSlider'
import PaginationProgress from '../components/slider/PaginationProgress'
import ScrollbarSlider from '../components/slider/ScrollbarSlider'
import VerticalSlider from '../components/slider/VerticalSlider'
import MouseControlSlider from '../components/slider/MouseControlSlider'
import EffectFadeSlider from '../components/slider/EffectFadeSlider'
import EffectFlipSlider from '../components/slider/EffectFlipSlider'
import EffectCreativeSlider from '../components/slider/EffectCreativeSlider'
import EffectCoverflowSlider from '../components/slider/EffectCoverflowSlider'
import ResponsiveSlider from '../components/slider/ResponsiveSlider'

const SwiperSliderMainContent = () => {
  return (
    <div className="main-content">
        <div className="dashboard-breadcrumb dashboard-panel-header mb-30">
            <h2>Swiper Slider</h2>
        </div>
        <div className="row swiper-slider-component">
            <DefaultSlider/>
            <NavigationSlider/>
            <PaginationSlider/>
            <PaginationFractionSlider/>
            <CustomPaginationSlider/>
            <PaginationProgress/>
            <ScrollbarSlider/>
            <VerticalSlider/>
            <MouseControlSlider/>
            <EffectFadeSlider/>
            <EffectFlipSlider/>
            <EffectCreativeSlider/>
            <EffectCoverflowSlider/>
            <ResponsiveSlider/>
        </div>

        <Footer/>
    </div>
  )
}

export default SwiperSliderMainContent