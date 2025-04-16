import React from 'react'

const InputGroupSizingSection = () => {
  return (
    <div className="panel mb-30">
        <div className="panel-header">
            <h5>Input Group Sizing</h5>
        </div>
        <div className="panel-body">
            <div className="row g-3">
                <div className="col-12">
                    <div className="input-group input-group-sm">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Small</span>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                    </div>
                </div>
                <div className="col-12">
                    <div className="input-group">
                        <span className="input-group-text" id="inputGroup-sizing-default">Default</span>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                    </div>
                </div>
                <div className="col-12">
                    <div className="input-group input-group-lg">
                        <span className="input-group-text" id="inputGroup-sizing-lg">Large</span>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InputGroupSizingSection