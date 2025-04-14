import React, { useState } from 'react'
import { Tooltip } from 'react-tooltip'
const SeoData = () => {
    const [seoDataBtn,SetSeoDataBtn] = useState(false)

    const handleSeoDataBtn = () => {
        SetSeoDataBtn(!seoDataBtn)
    }
  return (
    <div className="panel">
        <div className="panel-header">
            <h5>SEO Data</h5>
            <div className="btn-box d-flex gap-2">
                <button className="btn btn-sm btn-icon btn-outline-primary"><i className="fa-light fa-arrows-rotate"></i></button>
                <button className="btn btn-sm btn-icon btn-outline-primary panel-close" onClick={handleSeoDataBtn}><i className="fa-light fa-angle-up"></i></button>
            </div>
        </div>
        <div className={`panel-body ${seoDataBtn? 'd-none':''}`}>
            <form>
                <div className="row g-3 mb-3">
                <label className="col-xxl-2 col-md-3 col-form-label col-form-label-sm pe-0">
                    Focus keyphrase
                    <span 
                    className="btn-flush fs-14" 
                    data-tooltip-id="my-tooltip"
                    data-tooltip-content="Lorem Ipsum is simply dummy text."
                    >  
                        <i className="fa-solid fa-circle-question"></i>
                    </span>
                </label>
                    <div className="col-xxl-10 col-md-9">
                        <input type="text" className="form-control form-control-sm" id="focusKeyphrase"/>
                    </div>
                </div>
                <div className="row g-3 mb-3">
                    <label htmlFor="metaTitle" className="col-xxl-2 col-md-3 col-form-label col-form-label-sm">Meta Title</label>
                    <div className="col-xxl-10 col-md-9">
                        <input type="text" className="form-control form-control-sm" id="metaTitle"/>
                    </div>
                </div>
                <div className="row g-3 mb-3">
                    <label htmlFor="slugText" className="col-xxl-2 col-md-3 col-form-label col-form-label-sm">Slug</label>
                    <div className="col-xxl-10 col-md-9">
                        <input type="text" className="form-control form-control-sm" id="slugText"/>
                    </div>
                </div>
                <div className="row g-3">
                    <label htmlFor="metaDscr" className="col-xxl-2 col-md-3 col-form-label col-form-label-sm">Meta Description</label>
                    <div className="col-xxl-10 col-md-9">
                        <textarea className="form-control" rows="5" id="metaDscr"></textarea>
                    </div>
                </div>
                <Tooltip id="my-tooltip" className='custom-tooltip'/>
            </form>
        </div>
    </div>
  )
}

export default SeoData