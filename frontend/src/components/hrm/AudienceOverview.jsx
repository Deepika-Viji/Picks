import React from 'react'
import AudienceChart from '../charts/AudienceChart'

const AudienceOverview = () => {
  return (
    <div className="col-xxl-8">
        <div className="panel chart-panel-1">
            <div className="panel-header">
                <h5>Audience Overview</h5>
                <div className="btn-box">
                    <button className="btn btn-sm btn-outline-primary">Week</button>
                    <button className="btn btn-sm btn-outline-primary">Month</button>
                    <button className="btn btn-sm btn-outline-primary">Year</button>
                </div>
            </div>
            <div className="panel-body">
                <div id="audienceOverview" className="chart-dark">
                    <AudienceChart/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AudienceOverview