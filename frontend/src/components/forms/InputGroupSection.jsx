import React from 'react'

const InputGroupSection = () => {
  return (
    <div className="panel">
        <div className="panel-header">
            <h5>Input Group</h5>
        </div>
        <div className="panel-body">
            <div className="row g-3">
                <div className="col-sm-6">
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1">@</span>
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <span className="input-group-text" id="basic-addon2">@example.com</span>
                    </div>
                </div>
                <div className="col-12">
                    <div className="">
                        <label className="form-label">Your vanity URL</label>
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="input-group">
                        <span className="input-group-text">$</span>
                        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"/>
                        <span className="input-group-text">.00</span>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username"/>
                        <span className="input-group-text">@</span>
                        <input type="text" className="form-control" placeholder="Server" aria-label="Server"/>
                    </div>
                </div>
                <div className="col-12">
                    <div className="input-group">
                        <span className="input-group-text">With textarea</span>
                        <textarea className="form-control" aria-label="With textarea"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InputGroupSection