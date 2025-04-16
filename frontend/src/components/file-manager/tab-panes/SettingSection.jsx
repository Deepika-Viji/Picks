import React, { useContext, useState } from 'react'
import { Tab, Nav } from 'react-bootstrap';
import { DigiContext } from '../../../context/DigiContext';
import { Link } from 'react-router-dom';
import Invoices from '../../crm/Invoices'
const SettingSection = () => {
    const {handleMobileFileManagerBtn} = useContext(DigiContext)
    const [activeTab, setActiveTab] = useState('general');

    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };
  return (
    <div className="panel">
        <div className="panel-header">
            <div className="d-flex align-items-center gap-1">
                <button className="btn btn-sm btn-icon btn-primary file-manager-menu-btn d-lg-none" onClick={handleMobileFileManagerBtn}><i className="fa-light fa-bars"></i></button>
                <h5>Settings</h5>
            </div>
        </div>
        <div className="panel-body">
        <Nav
            variant="tabs"
            activeKey={activeTab}
            onSelect={handleTabChange}
            className="btn-box"
        >
            <Nav.Item>
            <Nav.Link
                eventKey="general"
                className={`btn btn-sm btn-outline-primary ${
                activeTab === 'general' ? 'active' : ''
                }`}
            >
                General
            </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link
                eventKey="billing"
                className={`btn btn-sm btn-outline-primary ${
                activeTab === 'billing' ? 'active' : ''
                }`}
            >
                Billings
            </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link
                eventKey="notification"
                className={`btn btn-sm btn-outline-primary ${
                activeTab === 'notification' ? 'active' : ''
                }`}
            >
                Notification
            </Nav.Link>
            </Nav.Item>
        </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="general" className={`tab-pane ${activeTab === 'general' ? 'show active' : ''}`}>
                    <div className="file-manager-user">
                        <div className="avatar">
                            <img src="src/assets/images/admin.png" className="border border-2 border-primary" alt="Image"/>
                        </div>
                        <div className="part-txt">
                            <div className="name"><span>Shaikh Abu Dardah</span> <button className="btn-flush"><i className="fa-light fa-pen"></i></button></div>
                            <div className="email"><span>info@example.com</span> <button className="btn-flush"><i className="fa-light fa-pen"></i></button></div>
                        </div>
                    </div>
                    <div className="file-manager-settings-group">
                        <div className="file-manager-settings-subtitle">
                            <h6>Subscription Plan</h6>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="about-plan">
                                <h3 className="plan-name">
                                    <span className="text-primary"><i className="fa-light fa-database"></i></span>
                                    <span>Omuk Basic</span>
                                </h3>
                                <span className="used-storage">13.00 GB / 15.00 GB</span>
                            </div>
                            <Link to="#" className="btn btn-sm btn-primary">Upgrade Plan</Link>
                        </div>
                    </div>
                    <div className="file-manager-settings-group mb-30">
                        <div className="file-manager-settings-subtitle">
                            <h6>Personal Basic</h6>
                        </div>
                        <div className="table-responsive">
                            <table className="table file-manager-settings-table">
                                <tbody>
                                    <tr>
                                        <td>Recovery Email</td>
                                        <td>info@example.com</td>
                                        <td><button className="btn-flush">Edit</button></td>
                                    </tr>
                                    <tr>
                                        <td>Phone Number</td>
                                        <td>Not added yet</td>
                                        <td><button className="btn-flush">Add Number</button></td>
                                    </tr>
                                    <tr>
                                        <td>Date of birth</td>
                                        <td>21 Jan. 1999</td>
                                        <td><button className="btn-flush">Change</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="file-manager-settings-group mb-0">
                        <div className="file-manager-settings-subtitle">
                            <h6>Preferences</h6>
                        </div>
                        <div className="table-responsive">
                            <table className="table file-manager-settings-table">
                                <tbody>
                                    <tr>
                                        <td>Language</td>
                                        <td>English (United State)</td>
                                        <td><button className="btn-flush">Change Language</button></td>
                                    </tr>
                                    <tr>
                                        <td>Date Format</td>
                                        <td>DD/MM/YYYY</td>
                                        <td><button className="btn-flush">Change</button></td>
                                    </tr>
                                    <tr>
                                        <td>Timezone</td>
                                        <td>Bangladesh (GMT +6)</td>
                                        <td><button className="btn-flush">Change</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Tab.Pane>
                <Tab.Pane eventKey="billing" id='billing-tap-pane' className={`tab-pane ${activeTab === 'billing' ? 'show active' : ''}`}>
                    <Invoices/>
                </Tab.Pane>
                <Tab.Pane eventKey="notification" className={`tab-pane ${activeTab === 'notification' ? 'show active' : ''}`}>
                    <div className='panel mt-3'>
                        <div className="panel-body notification-body">
                            <div className="avatar">
                            <img src="src/assets/images/avatar.png" alt="image" />
                            </div>
                            <div className="notification-txt">
                            <span className="notification-icon text-primary">
                                <i className="fa-solid fa-thumbs-up"></i>
                            </span>{' '}
                            <span className="fw-bold">Archer</span> Likes your post
                            </div>
                        </div>
                        <div className="panel-body notification-body">
                            <div className="avatar">
                            <img src="src/assets/images/avatar-2.png" alt="image" />
                            </div>
                            <div className="notification-txt">
                            <span className="notification-icon text-success">
                                <i className="fa-solid fa-comment-dots"></i>
                            </span>{' '}
                            <span className="fw-bold">Cody</span> Commented on your post
                            </div>
                        </div>
                        <div className="panel-body notification-body">
                            <div className="avatar">
                            <img src="src/assets/images/avatar-3.png" alt="image" />
                            </div>
                            <div className="notification-txt">
                            <span className="notification-icon">
                                <i className="fa-solid fa-share"></i>
                            </span>{' '}
                            <span className="fw-bold">Zane</span> Shared your post
                            </div>
                        </div>
                        <div className="panel-body notification-body">
                            <div className="avatar">
                            <img src="src/assets/images/avatar-4.png" alt="image" />
                            </div>
                            <div className="notification-txt">
                            <span className="notification-icon text-primary">
                                <i className="fa-solid fa-thumbs-up"></i>
                            </span>{' '}
                            <span className="fw-bold">Christopher</span> Likes your post
                            </div>
                        </div>
                        <div className="panel-body notification-body">
                            <div className="avatar">
                            <img src="src/assets/images/avatar-5.png" alt="image" />
                            </div>
                            <div className="notification-txt">
                            <span className="notification-icon text-success">
                                <i className="fa-solid fa-comment-dots"></i>
                            </span>{' '}
                            <span className="fw-bold">Charlie</span> Commented on your post
                            </div>
                        </div>
                        <div className="panel-body notification-body">
                            <div className="avatar">
                            <img src="src/assets/images/avatar-6.png" alt="image" />
                            </div>
                            <div className="notification-txt">
                            <span className="notification-icon">
                                <i className="fa-solid fa-share"></i>
                            </span>{' '}
                            <span className="fw-bold">Jayden</span> Shared your post
                            </div>
                        </div>
                    </div>
                </Tab.Pane>
            </Tab.Content>
        </div>
    </div>
  )
}

export default SettingSection