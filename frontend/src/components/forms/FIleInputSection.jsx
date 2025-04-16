import React from 'react'

const FIleInputSection = () => {
  return (
    <div className="panel mb-30">
        <div className="panel-header">
            <h5>File Input</h5>
        </div>
        <div className="panel-body">
            <div className="row g-3">
                <div className="col-sm-6">
                    <label htmlFor="formFile" className="form-label">Default file input example</label>
                    <input className="form-control" type="file" id="formFile"/>
                </div>
                <div className="col-sm-6">
                    <label htmlFor="formFileMultiple" className="form-label">Multiple files input example</label>
                    <input className="form-control" type="file" id="formFileMultiple" multiple/>
                </div>
                <div className="col-sm-6">
                    <label htmlFor="formFileDisabled" className="form-label">Disabled file input example</label>
                    <input className="form-control" type="file" id="formFileDisabled" disabled/>
                </div>
                <div className="col-sm-6">
                    <label htmlFor="formFileSm" className="form-label">Small file input example</label>
                    <input className="form-control form-control-sm" id="formFileSm" type="file"/>
                </div>
                <div className="col-sm-6">
                    <label htmlFor="formFileLg" className="form-label">Large file input example</label>
                    <input className="form-control form-control-lg" id="formFileLg" type="file"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FIleInputSection