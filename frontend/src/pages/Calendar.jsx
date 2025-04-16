import React from 'react'
import Footer from '../components/footer/Footer'
import FullCalender from '../components/calender/FullCalendarComponent'
import UpcomingEvents from '../components/calender/UpcomingEvents'
import ReservedEvents from '../components/calender/ReservedEvents'
const CalendarMainContent = () => {
  return (
    <div className="main-content">
        <div className="row">
            <FullCalender/>
            <div className="col-xxl-3 col-lg-4 calendar-sidebar">
              <ReservedEvents/>
              <UpcomingEvents/>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default CalendarMainContent