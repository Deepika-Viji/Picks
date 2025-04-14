import React from 'react'
import Footer from '../components/footer/Footer'
import AttendanceHeader from '../components/header/AttendanceHeader'
import AttendanceTableFilter from '../components/filter/AttendanceTableFilter'
import AttendanceTable from '../components/tables/AttendanceTable'

const AttendanceMainContent = () => {
  return (
    <div className="main-content">
        <div className="row">
            <div className="col-12">
                <div className="panel">
                    <AttendanceHeader/>
                    <div className="panel-body">
                        <AttendanceTableFilter/>
                        <AttendanceTable/>
                    </div>
                </div>
            </div>
        </div>

       <Footer/>
    </div>
  )
}

export default AttendanceMainContent