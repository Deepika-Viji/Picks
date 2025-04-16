import React from 'react'
import Footer from '../components/footer/Footer'
import AllProductHeader from '../components/header/AllProductHeader'
import AllProductTableFilter from '../components/filter/AllProductTableFilter'
import AllProductTable from '../components/tables/AllProductTable'
import HeaderBtn from '../components/header/HeaderBtn'

const AllProductMainContent = () => {
  return (
    <div className="main-content">
        <div className="row g-4">
            <div className="col-12">
                <div className="panel">
                    <AllProductHeader/>
                    <div className="panel-body">
                        <HeaderBtn/>
                        <AllProductTableFilter/>
                        <AllProductTable/>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default AllProductMainContent