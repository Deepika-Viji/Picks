import React from 'react'
import Footer from '../components/footer/Footer'
import FlipAnimations from '../components/animation/FlipAnimations'
import FadeAnimations from '../components/animation/FadeAnimations'
import ZoomAnimations from '../components/animation/ZoomAnimations'

const AnimationMainContent = () => {
  return (
    <div className="main-content">
        <div className="dashboard-breadcrumb dashboard-panel-header mb-30">
            <h2>Animation</h2>
        </div>
        <div className="row">
            <FadeAnimations/>
            <FlipAnimations/>
            <ZoomAnimations/>
        </div>

        <Footer/>
    </div>
  )
}

export default AnimationMainContent