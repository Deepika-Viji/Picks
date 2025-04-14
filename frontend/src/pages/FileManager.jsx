import React, { useContext, useState } from 'react'
import Footer from '../components/footer/Footer'
import { DigiContext } from '../context/DigiContext'
import AllFileSection from '../components/file-manager/tab-panes/all-files/AllFileSection'
import RecentFileSection from '../components/file-manager/tab-panes/all-files/RecentFileSection'
import StarredFileSection from '../components/file-manager/tab-panes/StarredFileSection'
import SettingSection from '../components/file-manager/tab-panes/SettingSection'
import { Tab, Nav } from 'react-bootstrap';
import FileTabPanes from '../components/file-manager/tab-panes/all-files/FileTabPanes'
import { Link } from 'react-router-dom'
import FileDetailsModal from '../components/modal/FileDetailsModal'
import UploadFileModal from '../components/modal/UploadFileModal'
import CreateFolderModal from '../components/modal/CreateFolderModal'
const FileManagerMainContent = () => {
    const {handleUploadModalShow,mobileFileManagerBtn,handleMobileFileManagerBtn,fileManagerRef} = useContext(DigiContext)
    const [activeTab, setActiveTab] = useState('all-files');

    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };
  return (
    <div className="main-content">
        <div className="dashboard-breadcrumb dashboard-panel-header mb-30">
            <h2>File Manager</h2>
        </div>
        <div className="main-mobile-file-manager row g-4 position-relative">
            <div className={`col-xxl-2 col-lg-3 file-manager-sidebar-col ${mobileFileManagerBtn? 'd-block':''}`}>
                <div className="file-manager-sidebar" ref={fileManagerRef}>
                    <div className="panel mb-30">
                        <div className="panel-body">
                            <div className="d-flex gap-1">
                                <button className="btn btn-primary w-100" onClick={handleUploadModalShow} data-bs-toggle="modal" data-bs-target="#fileUploadModal"><i className="fa-regular fa-plus"></i> Upload File</button>
                                <button className="btn btn-icon btn-primary close-file-manager-menu-btn d-lg-none" onClick={handleMobileFileManagerBtn}><i className="fa-light fa-bars"></i></button>
                            </div>
                            <Nav
                                variant="tabs"
                                activeKey={activeTab}
                                onSelect={handleTabChange}
                                className="btn-box"
                            >
                                <Nav.Item style={{width:'100%'}}>
                                <Nav.Link
                                    eventKey="all-files"
                                    className={`file-manager-tab-btn w-100 all-files-tab ${
                                    activeTab === 'all-files' ? 'active' : ''
                                    }`}
                                >
                                    All Files
                                </Nav.Link>
                                </Nav.Item>
                                <div className="divider-dash"></div>
                                    <ul className="connected-app">
                                        <li className="file-manager-sidebar-title">Connected Apps</li>
                                        <li><Link to="https://drive.google.com/"><span className="text-warning"><i className="fa-brands fa-google-drive"></i></span> Google Drive</Link></li>
                                        <li><Link to="https://www.dropbox.com"><span className="text-info"><i className="fa-brands fa-dropbox"></i></span> Dropbox</Link></li>
                                    </ul>
                                <div className="divider-dash"></div>
                                <div className="other-files">
                                    <Nav.Item>
                                    <Nav.Link
                                        eventKey="shared"
                                        className={`file-manager-tab-btn w-100 ${
                                        activeTab === 'shared' ? 'active' : ''
                                        }`}
                                    >
                                       <span><i className="fa-light fa-share-nodes"></i></span> Shared Files
                                    </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link
                                        eventKey="recent"
                                        className={`file-manager-tab-btn w-100 ${
                                        activeTab === 'recent' ? 'active' : ''
                                        }`}
                                    >
                                        <span><i className="fa-light fa-clock"></i></span> Recent Files
                                    </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link
                                        eventKey="starred"
                                        className={`file-manager-tab-btn w-100 ${
                                        activeTab === 'starred' ? 'active' : ''
                                        }`}
                                    >
                                        <span><i className="fa-light fa-star"></i></span> Starred
                                    </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link
                                        eventKey="trash"
                                        className={`file-manager-tab-btn w-100 ${
                                        activeTab === 'trash' ? 'active' : ''
                                        }`}
                                    >
                                        <span><i className="fa-light fa-trash"></i></span> Trash
                                    </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <Nav.Link
                                        eventKey="setting"
                                        className={`file-manager-tab-btn w-100 ${
                                        activeTab === 'setting' ? 'active' : ''
                                        }`}
                                    >
                                        <span><i className="fa-light fa-gear"></i></span> Settings
                                    </Nav.Link>
                                    </Nav.Item>
                                </div>
                            </Nav>
                            <div className="divider-dash"></div>
                            <ul className="file-category-status">
                                <li>
                                    <div className="progress-txt">
                                        <div className="file-category-name">
                                            <span className="text-success"><i className="fa-regular fa-image"></i></span>
                                            <p>Images</p>
                                        </div>
                                        <span className="using-storage">47 MB</span>
                                    </div>
                                    <div className="progress" role="progressbar" aria-label="storage-using-amount" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar bg-success" style={{width:'25%'}}></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="progress-txt">
                                        <div className="file-category-name">
                                            <span className="text-danger-emphasis"><i className="fa-regular fa-video"></i></span>
                                            <p>Videos</p>
                                        </div>
                                        <span className="using-storage">35 MB</span>
                                    </div>
                                    <div className="progress" role="progressbar" aria-label="storage-using-amount" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar bg-danger" style={{width:'25%'}}></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="progress-txt">
                                        <div className="file-category-name">
                                            <span className="text-primary"><i className="fa-regular fa-file"></i></span>
                                            <p>Docs</p>
                                        </div>
                                        <span className="using-storage">47 MB</span>
                                    </div>
                                    <div className="progress" role="progressbar" aria-label="storage-using-amount" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar bg-primary" style={{width:'25%'}}></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="progress-txt">
                                        <div className="file-category-name">
                                            <span className="text-warning"><i className="fa-regular fa-music"></i></span>
                                            <p>Music</p>
                                        </div>
                                        <span className="using-storage">35 MB</span>
                                    </div>
                                    <div className="progress" role="progressbar" aria-label="storage-using-amount" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar bg-warning" style={{width:'25%'}}></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="progress-txt">
                                        <div className="file-category-name">
                                            <span className="text-info"><i className="fa-regular fa-download"></i></span>
                                            <p>Downloads</p>
                                        </div>
                                        <span className="using-storage">47 MB</span>
                                    </div>
                                    <div className="progress" role="progressbar" aria-label="storage-using-amount" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar bg-info" style={{width:'25%'}}></div>
                                    </div>
                                </li>
                                <li>
                                    <div className="progress-txt">
                                        <div className="file-category-name">
                                            <span><i className="fa-regular fa-grid-2"></i></span>
                                            <p>More</p>
                                        </div>
                                        <span className="using-storage">35 MB</span>
                                    </div>
                                    <div className="progress" role="progressbar" aria-label="storage-using-amount" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar bg-secondary" style={{width:'25%'}}></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="panel">
                        <div className="panel-body">
                            <div className="storage-status">
                                <div className="progress-txt">
                                    <div className="file-category-name">
                                        <span><i className="fa-light fa-hard-drive"></i></span>
                                        <p>Total Storage</p>
                                    </div>
                                </div>
                                <div className="progress-stacked">
                                    <div className="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style={{width:'15%'}}>
                                       <div className="progress-bar bg-success"></div>
                                    </div>
                                    <div className="progress" role="progressbar" aria-label="Segment two" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style={{width:'15%'}}>
                                       <div className="progress-bar bg-danger"></div>
                                    </div>
                                    <div className="progress" role="progressbar" aria-label="Segment three" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width:'20%'}}>
                                       <div className="progress-bar bg-primary"></div>
                                    </div>
                                    <div className="progress" role="progressbar" aria-label="Segment four" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style={{width:'15%'}}>
                                       <div className="progress-bar bg-warning"></div>
                                    </div>
                                    <div className="progress" role="progressbar" aria-label="Segment five" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100" style={{width:'5%'}}>
                                       <div className="progress-bar bg-info"></div>
                                    </div>
                                    <div className="progress" role="progressbar" aria-label="Segment six" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style={{width:'10%'}}>
                                       <div className="progress-bar bg-secondary"></div>
                                    </div>
                                </div>
                                <p>13 GB of 15 GB Available </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xxl-10 col-lg-9">
                <Tab.Content>
                    <Tab.Pane eventKey="all-files" className={`tab-pane ${activeTab === 'all-files' ? 'show active' : ''}`}>
                        <AllFileSection/>
                        <RecentFileSection state={false}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="shared" className={`tab-pane ${activeTab === 'shared' ? 'show active' : ''}`}>
                        <FileTabPanes  state={true} title={'Shared Files'}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="recent" className={`tab-pane ${activeTab === 'recent' ? 'show active' : ''}`}>
                        <FileTabPanes  state={true} title={'Recent Files'}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="starred" className={`tab-pane ${activeTab === 'starred' ? 'show active' : ''}`}>
                        <StarredFileSection/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="trash" className={`tab-pane ${activeTab === 'trash' ? 'show active' : ''}`}>
                        <FileTabPanes  state={true} title={'Trash Files'}/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="setting" className={`tab-pane ${activeTab === 'setting' ? 'show active' : ''}`}>
                        <SettingSection/>
                    </Tab.Pane>
                </Tab.Content>
            </div>
        </div>
        <FileDetailsModal/>
        <UploadFileModal/>
        <CreateFolderModal/>
        <Footer/>
    </div>
  )
}

export default FileManagerMainContent