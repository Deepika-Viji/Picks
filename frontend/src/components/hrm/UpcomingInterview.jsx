import React from 'react'
import { Link } from 'react-router-dom'

const UpcomingInterview = () => {
  return (
    <div className="col-xxl-3 col-md-4">
        <div className="panel">
            <div className="panel-header">
                <h5>Upcoming Interviews</h5>
                <div className="btn-box">
                    <Link to="#" className="btn btn-sm btn-outline-primary">View All</Link>
                </div>
            </div>
            <div className="panel-body">
                <ul className="upcoming-interview">
                    <li>
                        <div className="avatar avatar-lg">
                            <img src="src/assets/images/avatar-2.png" className="rounded" alt="user"/>
                        </div>
                        <div className="part-txt">
                            <span className="applicant-name">Natalie Gibson</span>
                            <span className="applicant-role">
                                <small><span className="text-muted">Ui/UX Designer</span></small>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="avatar avatar-lg">
                            <img src="src/assets/images/avatar-3.png" className="rounded" alt="user"/>
                        </div>
                        <div className="part-txt">
                            <span className="applicant-name">Natalie Gibson</span>
                            <span className="applicant-role">
                                <small><span className="text-muted">Ui/UX Designer</span></small>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="avatar avatar-lg">
                            <img src="src/assets/images/avatar-4.png" className="rounded" alt="user"/>
                        </div>
                        <div className="part-txt">
                            <span className="applicant-name">Natalie Gibson</span>
                            <span className="applicant-role">
                                <small><span className="text-muted">Ui/UX Designer</span></small>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="avatar avatar-lg">
                            <img src="src/assets/images/avatar-5.png" className="rounded" alt="user"/>
                        </div>
                        <div className="part-txt">
                            <span className="applicant-name">Natalie Gibson</span>
                            <span className="applicant-role">
                                <small><span className="text-muted">Ui/UX Designer</span></small>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div className="avatar avatar-lg">
                            <img src="src/assets/images/avatar-6.png" className="rounded" alt="user"/>
                        </div>
                        <div className="part-txt">
                            <span className="applicant-name">Natalie Gibson</span>
                            <span className="applicant-role">
                                <small><span className="text-muted">Ui/UX Designer</span></small>
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default UpcomingInterview