import React from 'react'
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
const DashboardCards = () => {
  return (
    <div className="row mb-30">
        <div className="col-lg-3 col-6 col-xs-12">
            <div className="dashboard-top-box rounded-bottom panel-bg">
                <div className="left">
                    <h3>$<CountUp end={34152}/></h3>
                    <p>Shipping fees are not</p>
                    <Link to="#">View net earnings</Link>
                </div>
                <div className="right">
                    <span className="text-primary">+16.24%</span>
                    <div className="part-icon rounded">
                        <span><i className="fa-light fa-dollar-sign"></i></span>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-6 col-xs-12">
            <div className="dashboard-top-box rounded-bottom panel-bg">
                <div className="left">
                    <h3><CountUp end={36894}/></h3>
                    <p>Orders</p>
                    <Link to="#">Excluding orders in transit</Link>
                </div>
                <div className="right">
                    <span className="text-primary">+16.24%</span>
                    <div className="part-icon rounded">
                        <span><i className="fa-light fa-bag-shopping"></i></span>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-6 col-xs-12">
            <div className="dashboard-top-box rounded-bottom panel-bg">
                <div className="left">
                    <h3><CountUp end={24152}/></h3>
                    <p>Customers</p>
                    <Link to="#">See details</Link>
                </div>
                <div className="right">
                    <span className="text-primary">+16.24%</span>
                    <div className="part-icon rounded">
                        <span><i className="fa-light fa-user"></i></span>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-6 col-xs-12">
            <div className="dashboard-top-box rounded-bottom panel-bg">
                <div className="left">
                    <h3>$<CountUp end={724152}/></h3>
                    <p>My Balance</p>
                    <Link to="#">Withdraw</Link>
                </div>
                <div className="right">
                    <span className="text-primary">+16.24%</span>
                    <div className="part-icon rounded">
                        <span><i className="fa-light fa-credit-card"></i></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardCards