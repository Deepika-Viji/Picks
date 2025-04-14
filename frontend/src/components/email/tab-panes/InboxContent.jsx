import React, { useContext, useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import MailDetails from '../MailDetails'
import PromotionContent from './PromotionContent'
import SocialContent from './SocialContent'
import UpdateContent from './UpdateContent'
import { Form } from 'react-bootstrap'
import EmailContentHeader from '../../header/EmailContentHeader'
import EmailDataContentTable from '../../tables/EmailDataContentTable';
import { DigiContext } from '../../../context/DigiContext';
import SelectFilter from '../../filter/SelectFilter';

const InboxContent = () => {
    const {mailDetailsOpen} = useContext(DigiContext)
    const [activeTab, setActiveTab] = useState('primary');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
  return (
    <>
    <EmailContentHeader title={'Inbox'}/>
    <div className="panel-body email-body-header">
        <div className="product-table-quantity d-flex flex-wrap align-items-center gap-2 mb-20">
            <ul className="mb-0">
                <li className="text-white">All (23)</li>
                <li>Unread (19)</li>
                <li>Draft (05)</li>
                <li>Trash (05)</li>
            </ul>
            <ul className="top-action mb-0 d-none">
                <li>|</li>
                <li><button className="btn-flush" data-bs-toggle="tooltip" data-bs-title="Move to archive"><i className="fa-light fa-box-archive"></i></button></li>
                <li><button className="btn-flush" data-bs-toggle="tooltip" data-bs-title="Report to spam"><i className="fa-light fa-circle-exclamation"></i></button></li>
                <li><button className="btn-flush" data-bs-toggle="tooltip" data-bs-title="Mark as read"><i className="fa-light fa-envelope"></i></button></li>
                <li><button className="btn-flush" data-bs-toggle="tooltip" data-bs-title="Move to trash"><i className="fa-light fa-trash-can"></i></button></li>
            </ul>
        </div>
        <div className="table-filter-option">
            <div className="row g-3 align-items-center">
                <div className="col-xxl-6 col-md-12">
                    <div className="row g-3">
                        <div className="col">
                        <Nav
                            variant="tabs"
                            activeKey={activeTab}
                            onSelect={handleTabChange}
                            className="btn-box inbox-tab d-flex gap-2 nav"
                        >
                        <Nav.Item>
                        <Nav.Link
                            eventKey="primary"
                            className={`btn btn-sm btn-outline-primary ${
                            activeTab === 'primary' ? 'active' : ''
                            }`}
                        >
                           Primary
                        </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link
                            eventKey="promotion"
                            className={`btn btn-sm btn-outline-primary ${
                            activeTab === 'promotion' ? 'active' : ''
                            }`}
                        >
                           Promotion <span className="badge bg-danger">9+</span>
                        </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link
                            eventKey="social"
                            className={`btn btn-sm btn-outline-primary ${
                            activeTab === 'social' ? 'active' : ''
                            }`}
                        >
                           Social
                        </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link
                            eventKey="update"
                            className={`btn btn-sm btn-outline-primary ${
                            activeTab === 'update' ? 'active' : ''
                            }`}
                        >
                           Updates
                        </Nav.Link>
                        </Nav.Item>
                        </Nav>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-4 col-9 col-xs-12">
                    <div className="row g-3">
                        <div className="col">
                            <form>
                                <Form.Select className="form-control form-control-sm bulk-paceholder" data-placeholder="Bulk action">
                                    <option value="">Bulk action</option>
                                    <option value="0">Move to archive</option>
                                    <option value="1">Report to spam</option>
                                    <option value="2">Mark as read</option>
                                    <option value="3">Move to trash</option>
                                </Form.Select>
                            </form>
                        </div>
                        <div className="col">
                            <Form.Select className="form-control form-control-sm">
                                <option value="0">All</option>
                                <option value="1">None</option>
                                <option value="2">Read</option>
                                <option value="3">Unread</option>
                                <option value="4">Starred</option>
                                <option value="5">Unstarred</option>
                            </Form.Select>
                        </div>
                        <div className="col">
                            <button className="btn btn-sm btn-primary"><i className="fa-light fa-filter"></i> Filter</button>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-2 col-3 col-xs-12 d-flex justify-content-end">
                    <div className="productTableLength">
                        <SelectFilter/>
                    </div>
                </div>
            </div>
        </div>
        <Tab.Content className="email-tab-content" >
        <Tab.Pane eventKey="primary" className={`tab-pane ${activeTab === 'primary' ? 'show active' : ''}`}>
                <div className={`table-wrapper ${mailDetailsOpen? 'mail-opened':''}`}>
                    <div className="mail-list">
                        <EmailDataContentTable start={1} end={15}/>
                    </div>
                    <MailDetails/>
                </div>
            </Tab.Pane>
            <Tab.Pane eventKey="promotion" className={`tab-pane ${activeTab === 'promotion' ? 'show active' : ''}`}>
                <PromotionContent/>
            </Tab.Pane>
            <Tab.Pane eventKey="social" className={`tab-pane ${activeTab === 'social' ? 'show active' : ''}`}>
                <SocialContent/>
            </Tab.Pane>
            <Tab.Pane eventKey="update" className={`tab-pane ${activeTab === 'update' ? 'show active' : ''}`}>
                <UpdateContent/>
            </Tab.Pane>
        </Tab.Content>
    </div>
    </>
  )
}

export default InboxContent