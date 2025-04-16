import React from 'react'
import Footer from "../components/footer/Footer"
import DashboardBreadcrumb from '../components/breadcrumb/DashboardBreadcrumb'
import DashboardCards from '../components/cards/DashboardCards'
import SalesAnalytics from '../components/dashboard/SalesAnalytics'
import SocialVisitors from '../components/dashboard/SocialVisitors'
import NewCustomer from '../components/dashboard/NewCustomer'
import RecentOrder from '../components/dashboard/RecentOrder'
const DashboardMainContent = () => {
  return (
    <div className="main-content">
        <DashboardBreadcrumb title={'eCommerce Dashboard'}/>
        <DashboardCards/>
        <div className="row">
            <SalesAnalytics/>
            <SocialVisitors/>
            <NewCustomer/>
            <RecentOrder/>
        </div>
        <Footer/>
    </div>
  )
}

export default DashboardMainContent