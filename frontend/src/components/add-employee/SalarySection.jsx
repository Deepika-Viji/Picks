import React from 'react'

const SalarySection = () => {
  return (
    <div className="col-12">
        <div className="panel">
            <div className="panel-header">
                <h5>Salary</h5>
            </div>
            <div className="panel-body">
                <div className="row g-3">
                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                        <label className="form-label">Grade</label>
                        <select className="form-control form-control-sm" data-placeholder="Choose Grade">
                            <option value="">Choose Grade</option>
                            <option value="0">Grade 1</option>
                            <option value="1">Grade 2</option>
                            <option value="2">Grade 3</option>
                        </select>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                        <label className="form-label">Starting Gross Salary</label>
                        <input type="number" className="form-control form-control-sm"/>
                    </div>
                    <div className="col-xxl-3 col-lg-4 col-sm-6">
                        <label className="form-label">Salary System</label>
                        <select className="form-control form-control-sm" data-placeholder="Choose Salary System">
                            <option value="">Choose Salary System</option>
                            <option value="0">Salary System 1</option>
                            <option value="1">Salary System 2</option>
                            <option value="2">Salary System 3</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SalarySection