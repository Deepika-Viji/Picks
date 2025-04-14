import React from 'react'
import { Link } from 'react-router-dom'

const ErrorContent = ({imgSrc, alt, subtitle}) => {
  return (
    <div className="error-main main-content p-0">
        <div className="panel error-panel">
            <div className="panel-body h-100 d-flex flex-column align-items-center justify-content-center">
                <div className="part-img">
                    <img src={imgSrc} alt={alt}/>
                </div>
                <div className="part-txt text-center">
                    <h2 className="error-subtitle">{subtitle}</h2>
                    <Link to="/" className="btn btn-primary py-2 px-5 rounded-pill">Go to Home Page</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ErrorContent