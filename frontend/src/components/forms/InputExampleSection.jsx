import React from 'react'

const InputExampleSection = () => {
  return (
    <div className="panel mb-30">
        <div className="panel-header">
            <h5>Input Example</h5>
        </div>
        <div className="panel-body">
            <div className="row g-3">
                <div className="col-sm-6">
                    <label htmlFor="basicInput" className="form-label">Basic input</label>
                    <input type="text" className="form-control" id="basicInput"/>
                </div>
                <div className="col-sm-6">
                    <label htmlFor="inputWithPlaceholder" className="form-label">Input with placeholder</label>
                    <input type="text" className="form-control" id="inputWithPlaceholder" placeholder="Placeholder"/>
                </div>
                <div className="col-sm-6">
                    <label htmlFor="inputWithValue" className="form-label">Input with value</label>
                    <input type="text" className="form-control" id="inputWithValue" value="Input value" readOnly/>
                </div>
                <div className="col-sm-6">
                    <label htmlFor="readonlyPlainTextInput" className="form-label">Readonly plain text input</label>
                    <input type="text" className="form-control-plaintext" id="readonlyPlainTextInput" value="Readonly input" readOnly/>
                </div>
                <div className="col-sm-6">
                    <label htmlFor="readonlyInput" className="form-label">Readonly input</label>
                    <input type="text" className="form-control" id="readonlyInput" value="Readonly input" readOnly/>
                </div>
                <div className="col-sm-6">
                    <label htmlFor="disabledInput" className="form-label">Disabled input</label>
                    <input type="text" className="form-control" id="disabledInput" value="Disabled input" disabled/>
                </div>
                <div className="col-sm-6">
                    <label htmlFor="inputWithIcon" className="form-label">Input with icon</label>
                    <div className="input-group-with-icon">
                        <span className="input-icon">
                            <i className="fa-light fa-envelope"></i>
                        </span>
                        <input type="email" className="form-control ps-0" id="inputWithIcon" placeholder="example@info.com"/>
                    </div>
                </div>
                <div className="col-sm-6">
                    <label htmlFor="inputWithIconRight" className="form-label">Input with icon right</label>
                    <div className="input-group-with-icon">
                        <input type="email" className="form-control pe-0" id="inputWithIconRight" placeholder="example@info.com"/>
                        <span className="input-icon">
                            <i className="fa-light fa-envelope"></i>
                        </span>
                    </div>
                </div>
                <div className="col-sm-6">
                    <label htmlFor="inputDate" className="form-label">Input date</label>
                    <input type="date" className="form-control" id="inputDate"/>
                </div>
                <div className="col-sm-6">
                    <label htmlFor="inputTime" className="form-label">Input time</label>
                    <input type="time" className="form-control" id="inputTime"/>
                </div>
                <div className="col-sm-6">
                    <label htmlFor="inputPassword" className="form-label">Input password</label>
                    <input type="password" className="form-control" id="inputPassword" value="password" readOnly/>
                </div>
                <div className="col-sm-6">
                    <label htmlFor="colorPicker" className="form-label">Color Picker</label>
                    <input type="color" className="form-control form-control-color w-100" id="colorPicker" value="#0D99FF" readOnly/>
                </div>
                <div className="col-sm-6">
                    <label htmlFor="datalistExample" className="form-label">Datalist example</label>
                    <input type="text" className="form-control" list="datalistOptions" id="datalistExample"/>
                    <datalist id="datalistOptions">
                        <option value="San Francisco"/>
                        <option value="New York"/>
                        <option value="Seattle"/>
                        <option value="Los Angeles"/>
                        <option value="Chicago"/>
                    </datalist>
                </div>
                <div className="col-sm-6">
                    <label htmlFor="roundedInput" className="form-label">Rounded input</label>
                    <input type="text" className="form-control rounded-pill" id="roundedInput"/>
                </div>
                <div className="col-sm-6">
                    <label htmlFor="floatingInput" className="form-label">Floating label</label>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Floating label"/>
                        <label htmlFor="floatingInput">Floating label</label>
                    </div>
                </div>
                <div className="col-sm-6">
                    <label htmlFor="exampleTextarea" className="form-label">Example textarea</label>
                    <textarea className="form-control" id="exampleTextarea"></textarea>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InputExampleSection