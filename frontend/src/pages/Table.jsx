import React from 'react'
import Footer from '../components/footer/Footer'
import DefaultTableSection from '../components/tables/DefaultTableSection'
import StripeRowTableSection from '../components/tables/StripeRowTableSection'
import StripeColumnTableSection from '../components/tables/StripeColumnTableSection'
import ColorTableSection from '../components/tables/ColorTableSection'
import HoverableTableSection from '../components/tables/HoverableTableSection'
import BorderedTableSection from '../components/tables/BorderedTableSection'
import BorderColorTableSection from '../components/tables/BorderColorTableSection'
import BorderlessTableSection from '../components/tables/BorderlessTableSection'
import DefaultDataTableSection from '../components/tables/DefaultDataTableSection'
import ScrollDataTableSection from '../components/tables/ScrollDataTableSection'
import CustomizedDataTableSection from '../components/tables/CustomizedDataTableSection'
const TableMainContent = () => {
  return (
    <div className="main-content">
        <div className="dashboard-breadcrumb dashboard-panel-header mb-30">
            <h2>Tables</h2>
        </div>
        <div className="row">
            <div className="col-12">
                <div className="panel">
                    <div className="panel-header">
                        <h5>Basic Tables</h5>
                    </div>
                    <div className="panel-body">
                        <div className="row g-3">
                            <DefaultTableSection/>
                            <StripeRowTableSection/>
                            <StripeColumnTableSection/>
                            <ColorTableSection/>
                            <HoverableTableSection/>
                            <BorderedTableSection/>
                            <BorderColorTableSection/>
                            <BorderlessTableSection/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <div className="panel">
                    <div className="panel-header">
                        <h5>Data Tables</h5>
                    </div>
                    <div className="panel-body">
                        <div className="row g-3">
                            <DefaultDataTableSection/>
                            <ScrollDataTableSection/>
                            <CustomizedDataTableSection/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default TableMainContent