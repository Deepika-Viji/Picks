import React from 'react'
import { Link } from 'react-router-dom'

const RecentProjects = () => {
  return (
    <div className="col-lg-4">
        <div className="panel">
            <div className="panel-header">
                <h5>Recent Projects</h5>
                <div className="btn-box">
                    <Link to="/task" className="btn btn-sm btn-outline-primary">View All</Link>
                </div>
            </div>
            <div className="panel-body">
                <div className="table-responsive">
                    <table className="table table-striped mb-0 recent-project-table">
                        <thead>                                        
                            <tr>
                                <th>Project Name</th>
                                <th>Progress</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <span>Office Management</span>
                                    <span className="d-block">9 tasks completed</span>
                                </td>
                                <td>
                                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar" style={{width:'85%'}}></div>
                                    </div>
                                </td>
                                <td>
                                    <div className="btn-box d-flex justify-content-end gap-3">
                                        <button className="btn-flush"><i className="fa-light fa-eye"></i></button>
                                        <button className="btn-flush"><i className="fa-light fa-pen"></i></button>
                                        <button className="btn-flush"><i className="fa-light fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>Office Management</span>
                                    <span className="d-block">9 tasks completed</span>
                                </td>
                                <td>
                                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar" style={{width:'85%'}}></div>
                                    </div>
                                </td>
                                <td>
                                    <div className="btn-box d-flex justify-content-end gap-3">
                                        <button className="btn-flush"><i className="fa-light fa-eye"></i></button>
                                        <button className="btn-flush"><i className="fa-light fa-pen"></i></button>
                                        <button className="btn-flush"><i className="fa-light fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>Office Management</span>
                                    <span className="d-block">9 tasks completed</span>
                                </td>
                                <td>
                                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar" style={{width:'85%'}}></div>
                                    </div>
                                </td>
                                <td>
                                    <div className="btn-box d-flex justify-content-end gap-3">
                                        <button className="btn-flush"><i className="fa-light fa-eye"></i></button>
                                        <button className="btn-flush"><i className="fa-light fa-pen"></i></button>
                                        <button className="btn-flush"><i className="fa-light fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>Office Management</span>
                                    <span className="d-block">9 tasks completed</span>
                                </td>
                                <td>
                                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar" style={{width:'85%'}}></div>
                                    </div>
                                </td>
                                <td>
                                    <div className="btn-box d-flex justify-content-end gap-3">
                                        <button className="btn-flush"><i className="fa-light fa-eye"></i></button>
                                        <button className="btn-flush"><i className="fa-light fa-pen"></i></button>
                                        <button className="btn-flush"><i className="fa-light fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>Office Management</span>
                                    <span className="d-block">9 tasks completed</span>
                                </td>
                                <td>
                                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar" style={{width:'85%'}}></div>
                                    </div>
                                </td>
                                <td>
                                    <div className="btn-box d-flex justify-content-end gap-3">
                                        <button className="btn-flush"><i className="fa-light fa-eye"></i></button>
                                        <button className="btn-flush"><i className="fa-light fa-pen"></i></button>
                                        <button className="btn-flush"><i className="fa-light fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>Office Management</span>
                                    <span className="d-block">9 tasks completed</span>
                                </td>
                                <td>
                                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar" style={{width:'85%'}}></div>
                                    </div>
                                </td>
                                <td>
                                    <div className="btn-box d-flex justify-content-end gap-3">
                                        <button className="btn-flush"><i className="fa-light fa-eye"></i></button>
                                        <button className="btn-flush"><i className="fa-light fa-pen"></i></button>
                                        <button className="btn-flush"><i className="fa-light fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RecentProjects