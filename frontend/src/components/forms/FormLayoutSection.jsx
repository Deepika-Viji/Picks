import React from 'react'

const FormLayoutSection = () => {
  return (
    <div className="col-12">
        <div className="panel">
            <div className="panel-header">
                <h5>Form Layouts</h5>
            </div>
            <div className="panel-body">
                <div className="row g-3">
                    <div className="col-lg-6">
                        <div className="card mb-20">
                            <div className="card-header">
                                Utilities
                            </div>
                            <div className="card-body">
                                <div className="row g-3">
                                    <div className="col-12">
                                        <label htmlFor="formGroupExampleInput" className="form-label">Example label</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="formGroupExampleInput2" className="form-label">Another label</label>
                                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-20">
                            <div className="card-header">
                                Form grid
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                    <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
                                    </div>
                                    <div className="col">
                                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-20">
                            <div className="card-header">
                                Column sizing
                            </div>
                            <div className="card-body">
                                <div className="row g-3">
                                    <div className="col-sm-7">
                                        <input type="text" className="form-control" placeholder="City" aria-label="City"/>
                                    </div>
                                    <div className="col-sm">
                                        <input type="text" className="form-control" placeholder="State" aria-label="State"/>
                                    </div>
                                    <div className="col-sm">
                                        <input type="text" className="form-control" placeholder="Zip" aria-label="Zip"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                Horizontal form
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="row mb-20">
                                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                        <div className="col-sm-10">
                                            <input type="email" className="form-control" id="inputEmail3"/>
                                        </div>
                                    </div>
                                    <div className="row mb-20">
                                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                        <div className="col-sm-10">
                                            <input type="password" className="form-control" id="inputPassword3"/>
                                        </div>
                                    </div>
                                    <fieldset className="row mb-20">
                                        <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                                        <div className="col-sm-10">
                                            <div className="form-check mb-10">
                                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" readOnly/>
                                                <label className="form-check-label" htmlFor="gridRadios1">
                                                    First radio
                                                </label>
                                            </div>
                                            <div className="form-check mb-10">
                                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                                                <label className="form-check-label" htmlFor="gridRadios2">
                                                    Second radio
                                                </label>
                                            </div>
                                            <div className="form-check disabled">
                                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled/>
                                                <label className="form-check-label" htmlFor="gridRadios3">
                                                    Third disabled radio
                                                </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <div className="row mb-20">
                                        <div className="col-sm-10 offset-sm-2">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                                                <label className="form-check-label" htmlFor="gridCheck1">
                                                    Example checkbox
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Sign in</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card mb-20">
                            <div className="card-header">
                                Gutters
                            </div>
                            <div className="card-body">
                                <form className="row g-3">
                                    <div className="col-md-6">
                                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="inputEmail4"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="inputPassword4"/>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputAddress" className="form-label">Address</label>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputCity" className="form-label">City</label>
                                        <input type="text" className="form-control" id="inputCity"/>
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="inputState" className="form-label">State</label>
                                        <select id="inputState" className="form-select">
                                            <option defaultValue>Choose...</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div className="col-md-2">
                                        <label htmlFor="inputZip" className="form-label">Zip</label>
                                        <input type="text" className="form-control" id="inputZip"/>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                            <label className="form-check-label" htmlFor="gridCheck">
                                                Check me out
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary">Sign in</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="card mb-20">
                            <div className="card-header">
                                Auto-sizing
                            </div>
                            <div className="card-body">
                                <form className="row gy-2 gx-3 align-items-center">
                                    <div className="col-auto">
                                        <label className="visually-hidden" htmlFor="autoSizingInput">Name</label>
                                        <input type="text" className="form-control" id="autoSizingInput" placeholder="Jane Doe"/>
                                    </div>
                                    <div className="col-auto">
                                        <label className="visually-hidden" htmlFor="autoSizingInputGroup">Username</label>
                                        <div className="input-group">
                                            <div className="input-group-text">@</div>
                                            <input type="text" className="form-control" id="autoSizingInputGroup" placeholder="Username"/>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <label className="visually-hidden" htmlFor="autoSizingSelect">Preference</label>
                                        <select className="form-select" id="autoSizingSelect">
                                            <option defaultValue>Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div className="col-auto">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="autoSizingCheck"/>
                                            <label className="form-check-label" htmlFor="autoSizingCheck">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                Inline forms
                            </div>
                            <div className="card-body">
                                <form className="row row-cols-lg-auto g-3 align-items-center">
                                    <div className="col-12">
                                        <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Username</label>
                                        <div className="input-group">
                                            <div className="input-group-text">@</div>
                                            <input type="text" className="form-control" id="inlineFormInputGroupUsername" placeholder="Username"/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label className="visually-hidden" htmlFor="inlineFormSelectPref">Preference</label>
                                        <select className="form-select" id="inlineFormSelectPref">
                                            <option defaultValue>Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="inlineFormCheck"/>
                                            <label className="form-check-label" htmlFor="inlineFormCheck">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormLayoutSection