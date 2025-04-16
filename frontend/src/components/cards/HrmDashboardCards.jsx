import React from 'react'
import CountUp from 'react-countup'

const HrmDashboardCards = () => {
  return (
    <div className="row mb-30">
        <div className="col-lg-3 col-6 col-xs-12">
            <div className="dashboard-top-box dashboard-top-box-2 rounded border-0 panel-bg">
                <div className="left">
                    <p className="d-flex justify-content-between mb-2">Total Employees</p>
                    <h3 className="fw-normal"><CountUp end={13452}/></h3>
                    <p className="text-muted"><small>12490 for last month</small></p>
                </div>
                <div className="right">
                    <div className="part-icon text-light rounded">
                        <span><i className="fa-light fa-user-plus"></i></span>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-6 col-xs-12">
            <div className="dashboard-top-box dashboard-top-box-2 rounded border-0 panel-bg">
                <div className="left">
                    <p className="d-flex justify-content-between mb-2">Campaign Sent</p>
                    <h3 className="fw-normal"><CountUp end={3452}/></h3>
                    <p className="text-muted"><small>480 for last month</small></p>
                </div>
                <div className="right">
                    <div className="part-icon text-light rounded">
                        <span><i className="fa-light fa-bullhorn"></i></span>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-6 col-xs-12">
            <div className="dashboard-top-box dashboard-top-box-2 rounded border-0 panel-bg">
                <div className="left">
                    <p className="d-flex justify-content-between mb-2">Annual Profit</p>
                    <h3 className="fw-normal">$<CountUp end={25400}/></h3>
                    <p className="text-muted"><small>$2440 for last month</small></p>
                </div>
                <div className="right">
                    <div className="part-icon text-light rounded">
                        <span><i className="fa-light fa-dollar-sign"></i></span>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-6 col-xs-12">
            <div className="dashboard-top-box dashboard-top-box-2 rounded border-0 panel-bg">
                <div className="left">
                    <p className="d-flex justify-content-between mb-2">Lead Conversation</p>
                    <h3 className="fw-normal"><CountUp end={52}/>%</h3>
                    <p className="text-muted"><small>124 for last month</small></p>
                </div>
                <div className="right">
                    <div className="part-icon text-light rounded">
                        <span><i className="fa-light fa-magnifying-glass-chart"></i></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HrmDashboardCards