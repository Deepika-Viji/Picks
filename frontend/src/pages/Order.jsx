import React from 'react'
import Footer from '../components/footer/Footer'
import OrderHeader from '../components/header/OrderHeader'
import HeaderBtn from '../components/header/HeaderBtn'
import OrderTableFilter from '../components/filter/OrderTableFilter'
import OrderListTable from '../components/tables/OrderListTable'

const OrderMainContent = () => {
  return (
    <div className="main-content">
        <div className="row g-4">
            <div className="col-12">
                <div className="panel">
                   <OrderHeader/>
                    <div className="panel-body">
                        <HeaderBtn/>
                        <OrderTableFilter/>
                        <OrderListTable/>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default OrderMainContent