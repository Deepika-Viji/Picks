import Footer from '../components/footer/Footer'
import { Tab, Nav } from 'react-bootstrap';

import InboxContent from '../components/email/tab-panes/InboxContent';
import StarredPane from '../components/email/tab-panes/StarredPane';
import TrashPane from '../components/email/tab-panes/TrashPane';
import SentPane from '../components/email/tab-panes/SentPane';
import DraftPane from '../components/email/tab-panes/DraftPane';
import AllEmailPane from '../components/email/tab-panes/AllEmailPane';
import SpamPane from '../components/email/tab-panes/SpamPane';
import ImportantPane from '../components/email/tab-panes/ImportantPane';
import { useContext, useState } from 'react';
import { DigiContext } from '../context/DigiContext';
import MailDetailsModal from '../components/modal/MailDetailsModal';
import ComposeMailModal from '../components/modal/ComposeMailModal';

const EmailMainContent = () => {
    const {handleComposeMailShow, mobileEmailBtn,handleMobileEmailBtn, emailRef} = useContext(DigiContext)
    const [activeTab, setActiveTab] = useState('inbox');

    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };

  return (
    <div className="main-content">
        <div className="email-panel d-flex rounded">
            <div className={`panel rounded-0 border-end ${mobileEmailBtn? 'd-block':''}`}>
            <div className="panel-body email-menu" ref={emailRef}>
                <div className="btn-box d-flex gap-1 mb-20">
                    <button className="btn btn-primary w-100 compose-mail-btn" onClick={handleComposeMailShow}><i className="fa-light fa-pen-to-square"></i> Compose</button>
                    <button className="btn btn-icon btn-primary close-mail-menu-btn d-lg-none" onClick={handleMobileEmailBtn}><i className="fa-light fa-bars"></i></button>
                </div>
                <div className="emial-menu-list">
                    <div className="scrollable">
                    <Nav
                        className='email-nav-section'
                        variant="tabs"
                        activeKey={activeTab}
                        onSelect={handleTabChange}
                    >
                        <Nav.Item className='email-nav-item'>
                            <Nav.Link
                                eventKey="inbox"
                                className={`mail-nav btn-flush ${
                                activeTab === 'inbox' ? 'active' : ''
                                }`}
                            >
                                <span className="badge bg-danger">9+</span>
                                <span className="part-icon"><i className="fa-light fa-inbox"></i></span>
                                <span className="part-txt">Inbox</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='email-nav-item'>
                            <Nav.Link
                                eventKey="starred"
                                className={`mail-nav btn-flush ${
                                activeTab === 'starred' ? 'active' : ''
                                }`}
                            >
                                <span className="part-icon"><i className="fa-light fa-star"></i></span>
                                <span className="part-txt">Starred</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='email-nav-item'>
                            <Nav.Link
                                eventKey="trash"
                                className={`mail-nav btn-flush ${
                                activeTab === 'trash' ? 'active' : ''
                                }`}
                            >
                                <span className="part-icon"><i className="fa-light fa-trash-can"></i></span>
                                <span className="part-txt">Trash</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='email-nav-item'>
                            <Nav.Link
                                eventKey="sent"
                                className={`mail-nav btn-flush ${
                                activeTab === 'sent' ? 'active' : ''
                                }`}
                            >
                                <span className="part-icon"><i className="fa-light fa-paper-plane-top"></i></span>
                                <span className="part-txt">Sent</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='email-nav-item'>
                            <Nav.Link
                                eventKey="draft"
                                className={`mail-nav btn-flush ${
                                activeTab === 'draft' ? 'active' : ''
                                }`}
                            >
                                <span className="part-icon"><i className="fa-light fa-file"></i></span>
                                <span className="part-txt">Draft</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='email-nav-item'>
                            <Nav.Link
                                eventKey="all-email"
                                className={`mail-nav btn-flush ${
                                activeTab === 'all-email' ? 'active' : ''
                                }`}
                            >
                                <span className="part-icon"><i className="fa-light fa-envelopes"></i></span>
                                <span className="part-txt">All Email</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='email-nav-item'>
                            <Nav.Link
                                eventKey="spam"
                                className={`mail-nav btn-flush ${
                                activeTab === 'spam' ? 'active' : ''
                                }`}
                            >
                                <span className="part-icon"><i className="fa-light fa-hexagon-exclamation"></i></span>
                                <span className="part-txt">Spam</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='email-nav-item'>
                            <Nav.Link
                                eventKey="important"
                                className={`mail-nav btn-flush ${
                                activeTab === 'important' ? 'active' : ''
                                }`}
                            >
                                <span className="part-icon"><i className="fa-light fa-ribbon"></i></span>
                                <span className="part-txt">Important</span>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </div>
                </div>
            </div>
            </div>
            <div className="panel rounded-0">
                <Tab.Content>
                    <Tab.Pane eventKey="inbox" className={`tab-pane ${activeTab === 'inbox' ? 'show active' : ''}`}>
                        <InboxContent/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="starred" className={`tab-pane ${activeTab === 'starred' ? 'show active' : ''}`}>
                        <StarredPane/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="trash" className={`tab-pane ${activeTab === 'trash' ? 'show active' : ''}`}>
                        <TrashPane/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="sent" className={`tab-pane ${activeTab === 'sent' ? 'show active' : ''}`}>
                        <SentPane/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="draft" className={`tab-pane ${activeTab === 'draft' ? 'show active' : ''}`}>
                        <DraftPane/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="all-email" className={`tab-pane ${activeTab === 'all-email' ? 'show active' : ''}`}>
                        <AllEmailPane/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="spam" className={`tab-pane ${activeTab === 'spam' ? 'show active' : ''}`}>
                        <SpamPane/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="important" className={`tab-pane ${activeTab === 'important' ? 'show active' : ''}`}>
                        <ImportantPane/>
                    </Tab.Pane>
                </Tab.Content>
            </div>
        </div>
        <MailDetailsModal/>
        <ComposeMailModal/>
        <Footer/>
    </div>
  )
}

export default EmailMainContent