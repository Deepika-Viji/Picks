import React from 'react'
import { Link } from 'react-router-dom'

const UpcomingProjects = () => {
  return (
    <div className="col-lg-6">
        <div className="panel">
            <div className="panel-header">
                <h5>Upcoming Activities</h5>
                <div className="btn-box">
                    <Link to="/calendar" className="btn btn-sm btn-primary">View All</Link>
                </div>
            </div>
            <div className="panel-body">
                <div className="table-responsive">
                    <table className="table table-hover table-activity">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="activity-box">
                                        <div className="date-box">
                                            <span>14</span>
                                            <span>Feb</span>
                                        </div>
                                        <div className="part-txt">
                                            <span>Meeting for campaign with sales team</span>
                                            <span>12:00am - 03:30pm</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="avatar-box justify-content-end">
                                        <div className="avatar">
                                            <img src="src/assets/images/avatar-2.png" alt="image"/>
                                        </div>
                                        <div className="avatar">
                                            <img src="src/assets/images/avatar-3.png" alt="image"/>
                                        </div>
                                        <div className="avatar">
                                            <img src="src/assets/images/avatar-4.png" alt="image"/>
                                        </div>
                                        <div className="avatar bg-primary rounded-circle d-flex justify-content-center align-items-center text-white">6</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="activity-box">
                                        <div className="date-box">
                                            <span>14</span>
                                            <span>Feb</span>
                                        </div>
                                        <div className="part-txt">
                                            <span>Meeting for campaign with sales team</span>
                                            <span>12:00am - 03:30pm</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="avatar-box justify-content-end">
                                        <div className="avatar">
                                            <img src="src/assets/images/avatar-2.png" alt="image"/>
                                        </div>
                                        <div className="avatar">
                                            <img src="src/assets/images/avatar-3.png" alt="image"/>
                                        </div>
                                        <div className="avatar">
                                            <img src="src/assets/images/avatar-4.png" alt="image"/>
                                        </div>
                                        <div className="avatar bg-primary rounded-circle d-flex justify-content-center align-items-center text-white">6</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="activity-box">
                                        <div className="date-box">
                                            <span>14</span>
                                            <span>Feb</span>
                                        </div>
                                        <div className="part-txt">
                                            <span>Meeting for campaign with sales team</span>
                                            <span>12:00am - 03:30pm</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="avatar-box justify-content-end">
                                        <div className="avatar">
                                            <img src="src/assets/images/avatar-2.png" alt="image"/>
                                        </div>
                                        <div className="avatar">
                                            <img src="src/assets/images/avatar-3.png" alt="image"/>
                                        </div>
                                        <div className="avatar">
                                            <img src="src/ssets/images/avatar-4.png" alt="image"/>
                                        </div>
                                        <div className="avatar bg-primary rounded-circle d-flex justify-content-center align-items-center text-white">6</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="activity-box">
                                        <div className="date-box">
                                            <span>14</span>
                                            <span>Feb</span>
                                        </div>
                                        <div className="part-txt">
                                            <span>Meeting for campaign with sales team</span>
                                            <span>12:00am - 03:30pm</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="avatar-box justify-content-end">
                                        <div className="avatar">
                                            <img src="assets/images/avatar-2.png" alt="image"/>
                                        </div>
                                        <div className="avatar">
                                            <img src="src/assets/images/avatar-3.png" alt="image"/>
                                        </div>
                                        <div className="avatar">
                                            <img src="src/assets/images/avatar-4.png" alt="image"/>
                                        </div>
                                        <div className="avatar bg-primary rounded-circle d-flex justify-content-center align-items-center text-white">6</div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpcomingProjects