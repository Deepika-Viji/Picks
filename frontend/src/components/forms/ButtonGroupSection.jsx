import React from 'react'

const ButtonGroupSection = () => {
  return (
    <div className="panel mb-30">
        <div className="panel-header">
            <h5>Buttons, Checkboxs and Radios Group</h5>
        </div>
        <div className="panel-body">
            <div className="row g-3">
                <div className="col-sm-6">
                    <div className="input-group">
                        <div className="input-group-text">
                            <input className="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"/>
                        </div>
                        <input type="text" className="form-control" aria-label="Text input with checkbox"/>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="input-group">
                        <div className="input-group-text">
                            <input className="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input"/>
                        </div>
                        <input type="text" className="form-control" aria-label="Text input with radio button"/>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="input-group">
                        <button className="btn btn-outline-primary" type="button" id="button-addon1">Button</button>
                        <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="input-group">
                        <input type="text" className="form-control" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button className="btn btn-outline-success" type="button" id="button-addon2">Button</button>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="input-group">
                        <button className="btn btn-primary" type="button">Button</button>
                        <button className="btn btn-success" type="button">Button</button>
                        <input type="text" className="form-control" placeholder="" aria-label="Example text with two button addons"/>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="input-group">
                        <input type="text" className="form-control" aria-label="Recipient's username with two button addons"/>
                        <button className="btn btn-primary" type="button">Button</button>
                        <button className="btn btn-success" type="button">Button</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ButtonGroupSection