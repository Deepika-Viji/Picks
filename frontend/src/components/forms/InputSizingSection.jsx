import React from 'react'

const InputSizingSection = () => {
  return (
    <div className="panel mb-30">
        <div className="panel-header">
            <h5>Input Sizing</h5>
        </div>
        <div className="panel-body">
            <p className="fs-14 pb-1 mb-10">Set heights using classNamees like <code>.form-control-lg</code> and <code>.form-control-sm.</code></p>
            <input className="form-control form-control-sm mb-10" type="text" placeholder=".form-control-sm"/>
            <input className="form-control mb-10" type="text" placeholder="Default input"/>
            <input className="form-control form-control-lg" type="text" placeholder=".form-control-lg"/>
        </div>
    </div>
  )
}

export default InputSizingSection