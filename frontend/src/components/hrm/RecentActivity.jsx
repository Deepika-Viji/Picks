import React from 'react'
import { Link } from 'react-router-dom'
const RecentActivity = () => {
  return (
    <div className="col-xxl-4 col-md-6">
        <div className="panel">
            <div className="panel-header">
                <h5>Recent Activity</h5>
                <div className="btn-box">
                    <Link to="#" className="btn btn-sm btn-primary">View All</Link>
                </div>
            </div>
            <div className="panel-body">
                <ul className="hr-recent-activity">
                    <li>
                        <div className="left">
                            <span className="activity-name">Leave Approval Request</span>
                            <span className="activity-short">From "RuthDyer" UiDesign Leave On Monday 12 Jan 2020.</span>
                        </div>
                        <div className="right">
                            <span className="activity-time">6 min ago</span>
                        </div>
                    </li>
                    <li>
                        <div className="left">
                            <span className="activity-name">Work Update</span>
                            <span className="activity-short">From "RuthDyer" UiDesign Leave On Monday 12 Jan 2020.</span>
                        </div>
                        <div className="right">
                            <span className="activity-time">16 min ago</span>
                        </div>
                    </li>
                    <li>
                        <div className="left">
                            <span className="activity-name">Leave Approval Request</span>
                            <span className="activity-short">From "RuthDyer" UiDesign Leave On Monday 12 Jan 2020.</span>
                        </div>
                        <div className="right">
                            <span className="activity-time">6 min ago</span>
                        </div>
                    </li>
                    <li>
                        <div className="left">
                            <span className="activity-name">Work Update</span>
                            <span className="activity-short">From "RuthDyer" UiDesign Leave On Monday 12 Jan 2020.</span>
                        </div>
                        <div className="right">
                            <span className="activity-time">16 min ago</span>
                        </div>
                    </li>
                    <li>
                        <div className="left">
                            <span className="activity-name">Leave Approval Request</span>
                            <span className="activity-short">From "RuthDyer" UiDesign Leave On Monday 12 Jan 2020.</span>
                        </div>
                        <div className="right">
                            <span className="activity-time">6 min ago</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default RecentActivity