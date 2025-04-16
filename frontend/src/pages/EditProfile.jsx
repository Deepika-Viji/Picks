import React, { useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import Footer from '../components/footer/Footer'
import EditProfileContent from '../components/user/tab-panes/EditProfileContent'
import ChangePasswordContent from '../components/user/tab-panes/ChangePasswordContent'
import OtherSettingsContent from '../components/user/tab-panes/OtherSettingsContent'

const EditProfileMainContent = () => {
    const [activeTab, setActiveTab] = useState('edit');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="main-content">
        <div className="dashboard-breadcrumb dashboard-panel-header mb-30">
            <h2>Edit Profile</h2>
        </div>

        <div className="row">
            <div className="col-12">
                <div className="panel">
                    <div className="panel-header">
                        <Nav
                            variant="tabs"
                            activeKey={activeTab}
                            onSelect={handleTabChange}
                            className="btn-box d-flex flex-wrap gap-1"
                        >
                        <Nav.Item>
                        <Nav.Link
                            eventKey="edit"
                            className={`btn btn-sm btn-outline-primary ${
                            activeTab === 'edit' ? 'active' : ''
                            }`}
                        >
                           Edit Profile
                        </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link
                            eventKey="change"
                            className={`btn btn-sm btn-outline-primary ${
                            activeTab === 'change' ? 'active' : ''
                            }`}
                        >
                           Change Password
                        </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link
                            eventKey="other"
                            className={`btn btn-sm btn-outline-primary ${
                            activeTab === 'other' ? 'active' : ''
                            }`}
                        >
                           Other Settings
                        </Nav.Link>
                        </Nav.Item>
                        </Nav>
                    </div>
                    <div className="panel-body">
                        <Tab.Content className="profile-edit-tab">
                            <Tab.Pane eventKey="edit" className={`tab-pane ${activeTab === 'edit' ? 'show active' : ''}`}>
                                <EditProfileContent/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="change" className={`tab-pane ${activeTab === 'change' ? 'show active' : ''}`}>
                                <ChangePasswordContent/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="other" className={`tab-pane ${activeTab === 'other' ? 'show active' : ''}`}>
                                <OtherSettingsContent/>
                            </Tab.Pane>
                        </Tab.Content>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default EditProfileMainContent