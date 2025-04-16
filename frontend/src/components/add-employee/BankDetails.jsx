import React from 'react'

const BankDetails = () => {
  return (
    <div className="col-12">
        <div className="panel">
            <div className="panel-header">
                <h5>Banking Account Details</h5>
            </div>
            <div className="panel-body">
                <div className="row g-3">
                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                        <label className="form-label">Mobile Banking Provider Name</label>
                        <input type="text" className="form-control form-control-sm"/>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                        <label className="form-label">Mobile Banking Account Number</label>
                        <input type="tel" className="form-control form-control-sm"/>
                    </div>
                    <div className="col-xxl-6 col-lg-4"></div>
                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                        <label className="form-label">Bank Name</label>
                        <input type="text" className="form-control form-control-sm"/>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                        <label className="form-label">Bank Branch Name</label>
                        <input type="text" className="form-control form-control-sm"/>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                        <label className="form-label">Bank Account Name</label>
                        <input type="text" className="form-control form-control-sm"/>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                        <label className="form-label">Bank Account Number</label>
                        <input type="number" className="form-control form-control-sm"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BankDetails