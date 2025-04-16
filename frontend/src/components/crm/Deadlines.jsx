import React from 'react'
import { Link } from 'react-router-dom'

const Deadlines = () => {
  return (
    <div className="col-xl-8 col-lg-6">
        <div className="panel">
            <div className="panel-header">
                <h5>Works Deadlines</h5>
                <Link className="btn btn-sm btn-primary" to="/task">View All</Link>
            </div>
            <div className="panel-body p-0">
                <div className="table-responsive">
                    <table className="table deadline-table table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Last Contacted</th>
                                <th>Sales Representative</th>
                                <th>Status</th>
                                <th>Deal Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Absternet LLC</td>
                                <td>Sep 20, 2021</td>
                                <td>Donald Risher</td>
                                <td><span className="badge bg-primary-subtle px-2 rounded">Deal Won</span></td>
                                <td>125K</td>
                            </tr>
                            <tr>
                                <td>Absternet LLC</td>
                                <td>Sep 20, 2021</td>
                                <td>Donald Risher</td>
                                <td><span className="badge bg-primary-subtle px-2 rounded">Deal Won</span></td>
                                <td>125K</td>
                            </tr>
                            <tr>
                                <td>Absternet LLC</td>
                                <td>Sep 20, 2021</td>
                                <td>Donald Risher</td>
                                <td><span className="badge bg-primary-subtle px-2 rounded">Deal Won</span></td>
                                <td>125K</td>
                            </tr>
                            <tr>
                                <td>Absternet LLC</td>
                                <td>Sep 20, 2021</td>
                                <td>Donald Risher</td>
                                <td><span className="badge bg-primary-subtle px-2 rounded">Deal Won</span></td>
                                <td>125K</td>
                            </tr>
                            <tr>
                                <td>Absternet LLC</td>
                                <td>Sep 20, 2021</td>
                                <td>Donald Risher</td>
                                <td><span className="badge bg-primary-subtle px-2 rounded">Deal Won</span></td>
                                <td>125K</td>
                            </tr>
                            <tr>
                                <td>Absternet LLC</td>
                                <td>Sep 20, 2021</td>
                                <td>Donald Risher</td>
                                <td><span className="badge bg-primary-subtle px-2 rounded">Deal Won</span></td>
                                <td>125K</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Deadlines