import React from 'react'
import Footer from '../components/footer/Footer'
import DashboardBreadCrumb from '../components/breadcrumb/DashboardBreadcrumb'
import HrmDashboardCards from '../components/cards/HrmDashboardCards'
import AudienceOverview from '../components/hrm/AudienceOverview'
import RecentActivity from '../components/hrm/RecentActivity'
import NoticeBoard from '../components/hrm/NoticeBoard'
import Attendance from '../components/hrm/Attendance'
import UpcomingInterview from '../components/hrm/UpcomingInterview'
const HrmDashboardMainContent = () => {
  return (
    <div className="main-content">
        <DashboardBreadCrumb title={'HR Dashboard'}/>
        <HrmDashboardCards/>
        <div className="row">
            <AudienceOverview/>
            <RecentActivity/>
            <NoticeBoard/>
            <Attendance/>
            <UpcomingInterview/>
        </div>

        <Footer/>
    </div>
  )
}

export default HrmDashboardMainContent