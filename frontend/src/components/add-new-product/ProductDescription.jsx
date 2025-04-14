import React, { useState } from 'react'
import CkEditor from '../ck-editor/CkEditor'
const ProductDescription = () => {
    const [descriptionBtn,SetDescriptionBtn] = useState(false)

    const handleDescriptionBtn = () => {
        SetDescriptionBtn(!descriptionBtn)
    }
  return (
    <div className="panel mb-30">
        <div className="panel-header">
            <h5>Product Description</h5>
            <div className="btn-box d-flex gap-2">
                <button className="btn btn-sm btn-icon btn-outline-primary"><i className="fa-light fa-arrows-rotate"></i></button>
                <button className="btn btn-sm btn-icon btn-outline-primary panel-close" onClick={handleDescriptionBtn}><i className="fa-light fa-angle-up"></i></button>
            </div>
        </div>
        <div className={`panel-body ${descriptionBtn? 'd-none':''}`}>
            <div className="editor">
                <CkEditor/>
            </div>
        </div>
    </div>
  )
}

export default ProductDescription