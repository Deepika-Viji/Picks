import React, { useState } from 'react'

const PermanentAddress = () => {
    const [isSame, setIsSame] = useState(false);

    const handleCheckboxChange = (event) => {
      setIsSame(event.target.checked);
    };
  return (
    <div className="col-12">
        <div className="panel">
            <div className="panel-header">
                <h5>Permanent & Present Address</h5>
            </div>
            <div className="panel-body">
                <div className="card mb-20">
                    <div className="card-header">
                        Permanent Address
                    </div>
                    <div className="card-body">
                        <div className="row g-3">
                            <div className="col-xxl-3 col-lg-4 col-sm-6">
                                <label className="form-label">Division</label>
                                <select className="form-control form-control-sm" data-placeholder="Choose Division">
                                    <option value="">Choose Division</option>
                                    <option value="0">Division 1</option>
                                    <option value="1">Division 2</option>
                                    <option value="2">Division 3</option>
                                </select>
                            </div>
                            <div className="col-xxl-3 col-lg-4 col-sm-6">
                                <label className="form-label">District</label>
                                <select className="form-control form-control-sm" data-placeholder="Choose District">
                                    <option value="">Choose District</option>
                                    <option value="0">District 1</option>
                                    <option value="1">District 2</option>
                                    <option value="2">District 3</option>
                                </select>
                            </div>
                            <div className="col-xxl-3 col-lg-4 col-sm-6">
                                <label className="form-label">Subdistrict</label>
                                <select className="form-control form-control-sm" data-placeholder="Choose Subdistrict">
                                    <option value="">Choose Subdistrict</option>
                                    <option value="0">Subdistrict 1</option>
                                    <option value="1">Subdistrict 2</option>
                                    <option value="2">Subdistrict 3</option>
                                </select>
                            </div>
                            <div className="col-xxl-3 col-lg-4 col-sm-6">
                                <label className="form-label">Post Office</label>
                                <select className="form-control form-control-sm" data-placeholder="Choose Post Office">
                                    <option value="">Choose Post Office</option>
                                    <option value="0">Post Office 1</option>
                                    <option value="1">Post Office 2</option>
                                    <option value="2">Post Office 3</option>
                                </select>
                            </div>
                            <div className="col-xxl-6 col-lg-8">
                                <label className="form-label">Village / House / Road</label>
                                <input type="text" className="form-control form-control-sm"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                <div className={`card-header d-flex gap-4 ${isSame ? 'border-bottom-0' : ''}`}>
                    Present Address
                    <div className="form-check d-inline-flex">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="presentSameAsPermanent"
                        checked={isSame}
                        onChange={handleCheckboxChange}
                    />
                    <label className="form-check-label" htmlFor="presentSameAsPermanent">
                        Present Address Same As Permanent Address
                    </label>
                    </div>
                </div>
                <div className={`card-body ${isSame ? 'd-none' : ''}`}>
                        <div className="row g-3">
                            <div className="col-xxl-3 col-lg-4 col-sm-6">
                                <label className="form-label">Division</label>
                                <select className="form-control form-control-sm" data-placeholder="Choose Division">
                                    <option value="">Choose Division</option>
                                    <option value="0">Division 1</option>
                                    <option value="1">Division 2</option>
                                    <option value="2">Division 3</option>
                                </select>
                            </div>
                            <div className="col-xxl-3 col-lg-4 col-sm-6">
                                <label className="form-label">District</label>
                                <select className="form-control form-control-sm" data-placeholder="Choose District">
                                    <option value="">Choose District</option>
                                    <option value="0">District 1</option>
                                    <option value="1">District 2</option>
                                    <option value="2">District 3</option>
                                </select>
                            </div>
                            <div className="col-xxl-3 col-lg-4 col-sm-6">
                                <label className="form-label">Subdistrict</label>
                                <select className="form-control form-control-sm" data-placeholder="Choose Subdistrict">
                                    <option value="">Choose Subdistrict</option>
                                    <option value="0">Subdistrict 1</option>
                                    <option value="1">Subdistrict 2</option>
                                    <option value="2">Subdistrict 3</option>
                                </select>
                            </div>
                            <div className="col-xxl-3 col-lg-4 col-sm-6">
                                <label className="form-label">Post Office</label>
                                <select className="form-control form-control-sm" data-placeholder="Choose Post Office">
                                    <option value="">Choose Post Office</option>
                                    <option value="0">Post Office 1</option>
                                    <option value="1">Post Office 2</option>
                                    <option value="2">Post Office 3</option>
                                </select>
                            </div>
                            <div className="col-xxl-6 col-lg-8">
                                <label className="form-label">Village / House / Road</label>
                                <input type="text" className="form-control form-control-sm"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PermanentAddress