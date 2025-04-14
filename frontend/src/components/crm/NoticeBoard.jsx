import React from 'react'
import { Link } from 'react-router-dom'

const NoticeBoard = () => {
  return (
    <div className="col-xl-4 col-lg-6">
        <div className="panel">
            <div className="panel-header">
                <h5>Notice Board</h5>
                <Link className="btn btn-sm btn-primary" to="#">View All</Link>
            </div>
            <div className="panel-body p-0">
                <div className="table-responsive">
                    <table className="table notice-board-table table-hover">
                        <thead>
                            <tr>
                                <th>Notice</th>
                                <th>Published By</th>
                                <th>Date Added</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>New Notice</td>
                                <td>Mr. Alrazy</td>
                                <td>20th April 2020</td>
                                <td>
                                    <div className="btn-box d-flex justify-content-end gap-3">
                                        <button className="btn-flush"><i className="fa-light fa-eye"></i></button>
                                        <button className="btn-flush"><i className="fa-light fa-pen"></i></button>
                                        <button className="btn-flush"><i className="fa-light fa-trash-can"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>New Notice</td>
                                <td>Mr. Alrazy</td>
                                <td>20th April 2020</td>
                                <td>
                                    <div className="btn-box d-flex justify-content-end gap-3">
                                        <button className="btn-flush"><i className="fa-light fa-eye"></i></button>
                                        <button className="btn-flush"><i className="fa-light fa-pen"></i></button>
                                        <button className="btn-flush"><i className="fa-light fa-trash-can"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>New Notice</td>
                                <td>Mr. Alrazy</td>
                                <td>20th April 2020</td>
                                <td>
                                    <div className="btn-box d-flex justify-content-end gap-3">
                                        <button className="btn-flush"><i className="fa-light fa-eye"></i></button>
                                        <button className="btn-flush"><i className="fa-light fa-pen"></i></button>
                                        <button className="btn-flush"><i className="fa-light fa-trash-can"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>New Notice</td>
                                <td>Mr. Alrazy</td>
                                <td>20th April 2020</td>
                                <td>
                                    <div className="btn-box d-flex justify-content-end gap-3">
                                        <button className="btn-flush"><i className="fa-light fa-eye"></i></button>
                                        <button className="btn-flush"><i className="fa-light fa-pen"></i></button>
                                        <button className="btn-flush"><i className="fa-light fa-trash-can"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>New Notice</td>
                                <td>Mr. Alrazy</td>
                                <td>20th April 2020</td>
                                <td>
                                    <div className="btn-box d-flex justify-content-end gap-3">
                                        <button className="btn-flush"><i className="fa-light fa-eye"></i></button>
                                        <button className="btn-flush"><i className="fa-light fa-pen"></i></button>
                                        <button className="btn-flush"><i className="fa-light fa-trash-can"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>New Notice</td>
                                <td>Mr. Alrazy</td>
                                <td>20th April 2020</td>
                                <td>
                                    <div className="btn-box d-flex justify-content-end gap-3">
                                        <button className="btn-flush"><i className="fa-light fa-eye"></i></button>
                                        <button className="btn-flush"><i className="fa-light fa-pen"></i></button>
                                        <button className="btn-flush"><i className="fa-light fa-trash-can"></i></button>
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

export default NoticeBoard