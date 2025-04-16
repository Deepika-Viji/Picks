import React from 'react'
import Footer from '../components/footer/Footer'
import AllCustomerHeader from '../components/header/AllCustomerHeader'
import HeaderBtn from '../components/header/HeaderBtn'
import AllCustomerTableFilter from '../components/filter/AllCustomerTableFilter'
import AllCustomerTable from '../components/tables/AllCustomerTable'

const AllCustomer = () => {
  return (
    <div className="main-content">
        <div className="row">
            <div className="col-12">
                <div className="panel">
                    <AllCustomerHeader/>
                    <div className="panel-body">
                        <HeaderBtn/>
                        <AllCustomerTableFilter/>
                        <AllCustomerTable/>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default AllCustomer