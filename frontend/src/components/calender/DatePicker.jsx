import React from 'react'

const DatePicker = () => {
  
  return (
    <div className="input-group dashboard-filter">
        <input type="text" className="form-control" name="basic" id="dashboardFilter" readonly/>
        <label for="dashboardFilter" className="input-group-text"><i className="fa-light fa-calendar-days"></i></label>
    </div>
)
}

export default DatePicker