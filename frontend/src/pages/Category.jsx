import React from 'react'
import Footer from '../components/footer/Footer'
import AddNewCategory from '../components/category/AddNewCategory'
import AllCategory from '../components/category/AllCategory'

const CategoryMainContent = () => {
  return (
    <div className="main-content">
        <div className="dashboard-breadcrumb dashboard-panel-header mb-30">
            <h2>Categories</h2>
        </div>
        <div className="row g-4">
            <AddNewCategory/>
            <AllCategory/>
        </div>

        <Footer/>
    </div>
  )
}

export default CategoryMainContent