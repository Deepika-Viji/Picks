import React from 'react'
import Footer from '../components/footer/Footer'
import DashboardBreadcrumb from '../components/breadcrumb/DashboardBreadcrumb';
import CrmDashboardCards from '../components/cards/CrmDashboardCards';
import BalanceOverview from '../components/crm/BalanceOverview';
import RecentProjects from '../components/crm/RecentProjects';
import UpcomingProjects from '../components/crm/UpcomingProjects';
import PendingWork from '../components/crm/PendingWork';
import Invoices from '../components/crm/Invoices';
import MyTasks from '../components/crm/MyTasks';
import NoticeBoard from '../components/crm/NoticeBoard';
import Deadlines from '../components/crm/Deadlines';

const CrmDashboardMainContent = () => {
  return (
    <div className="main-content">
        <DashboardBreadcrumb title={'CRM Dashboard'}/>
        <CrmDashboardCards/>
        <div className="row">
            <BalanceOverview/>
            <RecentProjects/>
            <UpcomingProjects/>
            <PendingWork/>
            <div className="col-xl-8 col-lg-7">
              <Invoices/>
            </div>
            <MyTasks/>
            <NoticeBoard/>
            <Deadlines/>
        </div>

        <Footer/>
    </div>
  )
}

export default CrmDashboardMainContent