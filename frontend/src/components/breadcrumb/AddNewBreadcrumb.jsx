import React from 'react'
import { Link } from 'react-router-dom'

const AddNewBreadcrumb = ({link,title}) => {
  return (
    <div className="dashboard-breadcrumb mb-30">
      <div className='dashboard-panel-header'>
        <h2>{title}</h2>
        <div className="btn-box">
            <Link to={link} className="btn btn-sm btn-primary">View All</Link>
        </div>
      </div>
    </div>
  )
}

export default AddNewBreadcrumb