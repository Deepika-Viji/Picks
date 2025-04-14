import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Attendance = () => {
  return (
    <div className="col-xxl-6 col-md-8">
        <div className="panel">
            <div className="panel-header">
                <h5>Attendance</h5>
                <div id="tableSearch"></div>
            </div>
            <div className="panel-body">
                <OverlayScrollbarsComponent>
                    <table className="table table-hover attendance-table digi-dataTable" id="myTable">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Employee</th>
                                <th>Status</th>
                                <th>Check In</th>
                                <th>Check Out</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>01</td>
                                <td>Diane Nolan</td>
                                <td>
                                    <span className="badge bg-primary rounded px-2">Present</span>
                                </td>
                                <td>09:30 am</td>
                                <td>06:30 pm</td>
                                <td>
                                    <div className="btn-box">
                                        <button><i className="fa-light fa-eye"></i></button>
                                        <button><i className="fa-light fa-pen"></i></button>
                                        <button><i className="fa-light fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>02</td>
                                <td>Paul Reynolds</td>
                                <td>
                                    <span className="badge bg-danger rounded px-2">Absent</span>
                                </td>
                                <td>09:30 am</td>
                                <td>06:30 pm</td>
                                <td>
                                    <div className="btn-box">
                                        <button><i className="fa-light fa-eye"></i></button>
                                        <button><i className="fa-light fa-pen"></i></button>
                                        <button><i className="fa-light fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>03</td>
                                <td>Adela Perez</td>
                                <td>
                                    <span className="badge bg-primary rounded px-2">Present</span>
                                </td>
                                <td>09:30 am</td>
                                <td>06:30 pm</td>
                                <td>
                                    <div className="btn-box">
                                        <button><i className="fa-light fa-eye"></i></button>
                                        <button><i className="fa-light fa-pen"></i></button>
                                        <button><i className="fa-light fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>04</td>
                                <td>Logan van</td>
                                <td>
                                    <span className="badge bg-primary rounded px-2">Present</span>
                                </td>
                                <td>09:30 am</td>
                                <td>06:30 pm</td>
                                <td>
                                    <div className="btn-box">
                                        <button><i className="fa-light fa-eye"></i></button>
                                        <button><i className="fa-light fa-pen"></i></button>
                                        <button><i className="fa-light fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>05</td>
                                <td>Diane Nolan</td>
                                <td>
                                    <span className="badge bg-primary rounded px-2">Present</span>
                                </td>
                                <td>09:30 am</td>
                                <td>06:30 pm</td>
                                <td>
                                    <div className="btn-box">
                                        <button><i className="fa-light fa-eye"></i></button>
                                        <button><i className="fa-light fa-pen"></i></button>
                                        <button><i className="fa-light fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>06</td>
                                <td>Diane Nolan</td>
                                <td>
                                    <span className="badge bg-primary rounded px-2">Present</span>
                                </td>
                                <td>09:30 am</td>
                                <td>06:30 pm</td>
                                <td>
                                    <div className="btn-box">
                                        <button><i className="fa-light fa-eye"></i></button>
                                        <button><i className="fa-light fa-pen"></i></button>
                                        <button><i className="fa-light fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </OverlayScrollbarsComponent>
                <div className="table-bottom-control">
                    <div className="dataTables_info">Showing 1 to 6 of 6</div>
                    <div className="dataTables_paginate paging_simple_numbers">
                        <Link className="btn btn-primary previous disabled">
                            <i className="fa-light fa-angle-left"></i>
                        </Link>
                        <span>
                            <Link className="btn btn-primary current">1</Link>
                        </span>
                        <Link className="btn btn-primary next disabled">
                            <i className="fa-light fa-angle-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Attendance