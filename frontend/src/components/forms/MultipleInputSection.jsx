import React from 'react'

const MultipleInputSection = () => {
  return (
    <div className="panel mb-30">
        <div className="panel-header">
            <h5>Multiple Inputs & Addons</h5>
        </div>
        <div className="panel-body">
            <div className="row g-3">
                <div className="col-12">
                    <div className="input-group">
                        <span className="input-group-text">First and last name</span>
                        <input type="text" aria-label="First name" className="form-control"/>
                        <input type="text" aria-label="Last name" className="form-control"/>
                    </div>
                </div>
                <div className="col-12">
                    <div className="input-group">
                        <span className="input-group-text">$</span>
                        <span className="input-group-text">0.00</span>
                        <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
                    </div>
                </div>
                <div className="col-12">
                    <div className="input-group">
                        <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"/>
                        <span className="input-group-text">$</span>
                        <span className="input-group-text">0.00</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MultipleInputSection