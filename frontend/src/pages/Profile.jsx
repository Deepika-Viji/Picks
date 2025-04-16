import React from 'react'
import Footer from '../components/footer/Footer'
import UserInformation from '../components/user/UserInformation'
import ViewProfileCards from '../components/cards/ViewProfileCards'
import UserActivity from '../components/user/UserActivity'

const ProfileMainContent = () => {
  return (
    <div className="main-content" >
        <div className="dashboard-breadcrumb dashboard-panel-header mb-30">
            <h2>View Profile</h2>
        </div>

        <div className="row g-4">
            <div className="col-md-4">
                <UserInformation/>
            </div>
            <div className="col-md-8">
                <ViewProfileCards/>
                <UserActivity/>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default ProfileMainContent