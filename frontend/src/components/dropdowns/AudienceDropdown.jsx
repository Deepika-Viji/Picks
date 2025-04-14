import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

const AudienceDropdown = () => {
    const [isDropdownOpen,setIsDropdownOpen] = useState(false)
    const handleDropdown = () =>{
        setIsDropdownOpen(!isDropdownOpen)
    }
    const handleReset = () =>{
        setIsDropdownOpen(false)
    }
  return (
    <div className="panel-header target-audience">
        <h5>Target Audience</h5>
        <div className="btn-box d-flex gap-2">
            <div id="tableSearch">
                <Form.Control type="text" placeholder="Search..." />
            </div>
            <button className="btn btn-sm btn-icon btn-outline-primary" onClick={handleReset}><i className="fa-light fa-arrows-rotate"></i></button>
            <div className="digi-dropdown dropdown">
                <button className="btn btn-sm btn-icon btn-outline-primary" onClick={handleDropdown}><i className="fa-regular fa-ellipsis-vertical"></i></button>
                <ul className={`digi-dropdown-menu dropdown-menu ${isDropdownOpen? 'show':''}`}>
                    <li className="dropdown-title">Show Table Title</li>
                    <li>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="showFirstName" checked/>
                            <label className="form-check-label" for="showFirstName">
                                First Name
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="showLastName" checked/>
                            <label className="form-check-label" for="showLastName">
                                Last Name
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="showEmail" checked/>
                            <label className="form-check-label" for="showEmail">
                                Email
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="showCompany" checked/>
                            <label className="form-check-label" for="showCompany">
                                Company
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="showPhone" checked/>
                            <label className="form-check-label" for="showPhone">
                                Phone
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="showPosition" checked/>
                            <label className="form-check-label" for="showPosition">
                                Position
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="showLastLogin" checked/>
                            <label className="form-check-label" for="showLastLogin">
                                Last Login
                            </label>
                        </div>
                    </li>
                    <li>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="showStatus" checked/>
                            <label className="form-check-label" for="showStatus">
                                Status
                            </label>
                        </div>
                    </li>
                    <li className="dropdown-title pb-1">Showing</li>
                    <li>
                        <div className="input-group">
                            <input type="number" className="form-control form-control-sm w-50" value="10"/>
                            <button className="btn btn-sm btn-primary w-50">Apply</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default AudienceDropdown