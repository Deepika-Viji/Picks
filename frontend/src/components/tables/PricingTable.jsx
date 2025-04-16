import React from "react";
import { Link } from "react-router-dom";

const PricingTableSection = ({plans}) => {
  return (
    <table className="table table-light table-bordered">
      <thead>
        <tr>
          <th>
            <div className="table-title">
              <h2>Choose Your Plan</h2>
            </div>
          </th>
          {plans.map((plan, index) => (
            <th key={index}>
              <div className="table-top">
                <h3>{plan.title}</h3>
                <h2 className="price">
                  $<span className="amount">{plan.price} </span>{" "}
                  <span className="type">Monthly</span>
                </h2>
                <p>For your essential business needs.</p>
                <Link to="#" className="btn btn-primary">
                  Select
                </Link>
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr className="table-secondary">
          <td colSpan="3">
            <span>Products</span>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Retail POS</td>
          <td>
            <span className="icon check">
              <i className="far fa-check-circle"></i>
            </span>
          </td>
          <td>
            <span className="icon check">
              <i className="far fa-check-circle"></i>
            </span>
          </td>
          <td>
            <span className="icon check">
              <i className="far fa-check-circle"></i>
            </span>
          </td>
          <td>
            <span className="icon check">
              <i className="far fa-check-circle"></i>
            </span>
          </td>
        </tr>
        <tr>
          <td>Registers</td>
          <td>1 Included</td>
          <td>1 Included</td>
          <td>1 Included</td>
          <td>1 Included</td>
        </tr>
        <tr>
          <td>Integrated Payments</td>
          <td>
            <span className="icon check">
              <i className="far fa-check-circle"></i>
            </span>
          </td>
          <td>
            <span className="icon check">
              <i className="far fa-check-circle"></i>
            </span>
          </td>
          <td>
            <span className="icon check">
              <i className="far fa-check-circle"></i>
            </span>
          </td>
          <td>
            <span className="icon check">
              <i className="far fa-check-circle"></i>
            </span>
          </td>
        </tr>
        <tr>
          <td>Accounting</td>
          <td>
            <span className="icon minus">
              <i className="fas fa-minus"></i>
            </span>
          </td>
          <td>
            <span className="icon check">
              <i className="far fa-check-circle"></i>
            </span>
          </td>
          <td>
            <span className="icon check">
              <i className="far fa-check-circle"></i>
            </span>
          </td>
          <td>
            <span className="icon check">
              <i className="far fa-check-circle"></i>
            </span>
          </td>
        </tr>
        <tr>
          <td>eCommerce</td>
          <td>
            <span className="icon minus">
              <i className="fas fa-minus"></i>
            </span>
          </td>
          <td>
            <span className="icon check">
              <i className="far fa-check-circle"></i>
            </span>
          </td>
          <td>
            <span className="icon check">
              <i className="far fa-check-circle"></i>
            </span>
          </td>
          <td>
            <span className="icon check">
              <i className="far fa-check-circle"></i>
            </span>
          </td>
        </tr>
        <tr>
          <td>Omnichannel Loyalty</td>
          <td>
            <span className="icon minus">
              <i className="fas fa-minus"></i>
            </span>
          </td>
          <td>
            <span className="icon minus">
              <i className="fas fa-minus"></i>
            </span>
          </td>
          <td>
            <span className="icon check">
              <i className="far fa-check-circle"></i>
            </span>
          </td>
          <td>
            <span className="icon check">
              <i className="far fa-check-circle"></i>
            </span>
          </td>
        </tr>
        <tr>
          <td>Advanced Reporting</td>
          <td>
            <span className="icon minus">
              <i className="fas fa-minus"></i>
            </span>
          </td>
          <td>
            <span className="icon minus">
              <i className="fas fa-minus"></i>
            </span>
          </td>
          <td>
            <span className="icon check">
              <i className="far fa-check-circle"></i>
            </span>
          </td>
          <td>
            <span className="icon check">
              <i className="far fa-check-circle"></i>
            </span>
          </td>
        </tr>
        <tr className="table-secondary">
          <td colSpan="3">
            <span>Services</span>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Digiboard Payments Card-present rate</td>
          <td>2.6%+ 10c</td>
          <td>2.6%+ 10c</td>
          <td>2.6%+ 10c</td>
          <td>2.6%+ 10c</td>
        </tr>
        <tr>
          <td>24/7 customer support</td>
          <td>
            <span className="icon check">
              <i className="far fa-check-circle"></i>
            </span>
          </td>
          <td>
            <span className="icon check">
              <i className="far fa-check-circle"></i>
            </span>
          </td>
          <td>
            <span className="icon check">
              <i className="far fa-check-circle"></i>
            </span>
          </td>
          <td>
            <span className="icon check">
              <i className="far fa-check-circle"></i>
            </span>
          </td>
        </tr>
        <tr>
          <td>One on one onboarding</td>
          <td>
            <span className="icon check">
              <i className="far fa-check-circle"></i>
            </span>
          </td>
          <td>
            <span className="icon check">
              <i className="far fa-check-circle"></i>
            </span>
          </td>
          <td>
            <span className="icon check">
              <i className="far fa-check-circle"></i>
            </span>
          </td>
          <td>
            <span className="icon check">
              <i className="far fa-check-circle"></i>
            </span>
          </td>
        </tr>
        <tr>
          <td>Additional free training</td>
          <td>
            <span className="icon check">
              <i className="far fa-check-circle"></i>
            </span>
          </td>
          <td>
            <span className="icon check">
              <i className="far fa-check-circle"></i>
            </span>
          </td>
          <td>
            <span className="icon check">
              <i className="far fa-check-circle"></i>
            </span>
          </td>
          <td>
            <span className="icon check">
              <i className="far fa-check-circle"></i>
            </span>
          </td>
        </tr>
        <tr>
          <td>Dedicated account manager</td>
          <td>
            <span className="icon check">
              <i className="far fa-check-circle"></i>
            </span>
          </td>
          <td>
            <span className="icon check">
              <i className="far fa-check-circle"></i>
            </span>
          </td>
          <td>
            <span className="icon check">
              <i className="far fa-check-circle"></i>
            </span>
          </td>
          <td>
            <span className="icon check">
              <i className="far fa-check-circle"></i>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default PricingTableSection;
