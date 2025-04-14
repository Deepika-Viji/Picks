import React from 'react'

const EmergencyContact = () => {
  return (
    <div className="col-12">
        <div className="panel">
            <div className="panel-header">
                <h5>Emergency Contact Information</h5>
            </div>
            <div className="panel-body">
                <div className="row g-3">
                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                        <label className="form-label">Contact Person Name</label>
                        <input type="text" className="form-control form-control-sm" placeholder="Name"/>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                        <label className="form-label">Contact Person Phone</label>
                        <input type="text" className="form-control form-control-sm" placeholder="Phone"/>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                        <label className="form-label">Relation</label>
                        <input type="text" className="form-control form-control-sm" placeholder="Relation"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmergencyContact