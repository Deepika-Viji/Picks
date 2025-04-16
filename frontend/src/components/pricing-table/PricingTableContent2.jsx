import React from "react";
import { Link } from "react-router-dom";

const PricingTableContent2 = () => {
  return (
    <div className="main-content p-0">
      <div className="panel pricing-panel-2">
        <div className="panel-body d-flex justify-content-center align-items-center">
          <div className="pricing w-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="pricing-table">
                    <div className="top">
                      <p>Bronze Tier</p>
                      <h3>$120</h3>
                      <span>Monthly</span>
                    </div>
                    <div className="middle">
                      <ul>
                        <li>50 Members</li>
                        <li>10 Projects</li>
                        <li>Client Login</li>
                        <li>15GB Storage</li>
                        <li>24/7 Support</li>
                      </ul>
                    </div>
                    <div className="bottom">
                      <Link
                        to="#"
                        className="btn btn-success px-4 py-2 rounded-pill"
                      >
                        Start Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="pricing-table">
                    <div className="top">
                      <p>Silver Tier</p>
                      <h3>$180</h3>
                      <span>Monthly</span>
                    </div>
                    <div className="middle">
                      <ul>
                        <li>300 Members</li>
                        <li>80 Projects</li>
                        <li>Client Login</li>
                        <li>100GB Storage</li>
                        <li>24/7 Support</li>
                      </ul>
                    </div>
                    <div className="bottom">
                      <Link
                        to="#"
                        className="btn btn-success px-4 py-2 rounded-pill"
                      >
                        Start Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="pricing-table">
                    <div className="top">
                      <p>Gold Tier</p>
                      <h3>$300</h3>
                      <span>Monthly</span>
                    </div>
                    <div className="middle">
                      <ul>
                        <li>800 Members</li>
                        <li>250 Projects</li>
                        <li>Client Login</li>
                        <li>500GB Storage</li>
                        <li>24/7 Support</li>
                      </ul>
                    </div>
                    <div className="bottom">
                      <Link
                        to="#"
                        className="btn btn-success px-4 py-2 rounded-pill"
                      >
                        Start Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTableContent2;
