import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import DatePicker from 'react-datepicker';

const BiologicalInfo = () => {
    const [birthDate, setBirthDate] = useState(null);
  return (
    <div className="col-12">
        <div className="panel">
            <div className="panel-header">
                <h5>Biographical Information</h5>
            </div>
            <div className="panel-body">
                <div className="row g-3">
                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                        <label className="form-label">Father / Husband Name</label>
                        <input type="text" className="form-control form-control-sm"/>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                        <label className="form-label">Mother's Name</label>
                        <input type="tel" className="form-control form-control-sm"/>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                        <label className="form-label">Date of Birth</label>
                        <Form.Control
                        type="text"
                        className="form-control form-control-sm date-picker"
                        as={DatePicker}
                        selected={birthDate}
                        onChange={date => setBirthDate(date)}
                        placeholderText="dd mmm, yy"
                        />                    
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                        <label className="form-label">NID No / Birth Certificate</label>
                        <input type="number" className="form-control form-control-sm"/>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                        <label className="form-label">Employee Photo</label>
                        <input type="file" className="form-control form-control-sm"/>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                        <label className="form-label">Gender</label>
                        <select className="form-control form-control-sm" data-placeholder="Gender">
                            <option value="">Gender</option>
                            <option value="0">Male</option>
                            <option value="1">Female</option>
                        </select>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                        <label className="form-label">Marital Status</label>
                        <select className="form-control form-control-sm" data-placeholder="Marital Status">
                            <option value="">Marital Status</option>
                            <option value="0">Married</option>
                            <option value="1">Unmarried</option>
                            <option value="1">Divorced</option>
                        </select>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                        <label className="form-label">Blood Group</label>
                        <select className="form-control form-control-sm" data-placeholder="Blood Group">
                            <option value="">Blood Group</option>
                            <option value="0">Blood Group 1</option>
                            <option value="1">Blood Group 2</option>
                            <option value="2">Blood Group 3</option>
                        </select>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                        <label className="form-label">Religion</label>
                        <select className="form-control form-control-sm" data-placeholder="Choose Religion">
                            <option value="">Choose Religion</option>
                            <option value="0">Religion 1</option>
                            <option value="1">Religion 2</option>
                            <option value="2">Religion 3</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BiologicalInfo