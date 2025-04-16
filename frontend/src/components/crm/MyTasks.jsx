import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DigiContext } from '../../context/DigiContext'
import AddNewTaskModal from '../modal/AddNewTaskModal'

const MyTasks = () => {
    const {handleShowAddNewTaskModal} = useContext(DigiContext)
  return (
    <div className="col-xl-4 col-lg-5">
        <div className="panel">
            <div className="panel-header">
                <h5>My Tasks</h5>
                <button className="btn btn-sm btn-primary" onClick={handleShowAddNewTaskModal}>Add Task <i className="fa-light fa-plus"></i></button>
            </div>
            <div className="panel-body p-0">
                <div className="table-responsive">
                    <table className="table task-table table-hover">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input className="form-check-input me-2" type="checkbox"/>
                                            Web design & development
                                        </label>
                                    </div>
                                </td>
                                <td>15 Sep, 2022</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input className="form-check-input me-2" type="checkbox"/>
                                            Logo design
                                        </label>
                                    </div>
                                </td>
                                <td>15 Sep, 2022</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input className="form-check-input me-2" type="checkbox"/>
                                            Meeting with client
                                        </label>
                                    </div>
                                </td>
                                <td>15 Sep, 2022</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input className="form-check-input me-2" type="checkbox"/>
                                            Laravel devloper interview
                                        </label>
                                    </div>
                                </td>
                                <td>15 Sep, 2022</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input className="form-check-input me-2" type="checkbox"/>
                                            Client support
                                        </label>
                                    </div>
                                </td>
                                <td>15 Sep, 2022</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input className="form-check-input me-2" type="checkbox"/>
                                            Factory visit
                                        </label>
                                    </div>
                                </td>
                                <td>15 Sep, 2022</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input className="form-check-input me-2" type="checkbox"/>
                                            Landing page design
                                        </label>
                                    </div>
                                </td>
                                <td>15 Sep, 2022</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input className="form-check-input me-2" type="checkbox"/>
                                            Important meeting
                                        </label>
                                    </div>
                                </td>
                                <td>15 Sep, 2022</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="btn-box px-lg-3 px-2 mx-xl-1 m-lg-0 mx-1 py-2">
                    <Link to="/task" className="view-all-task text-white fs-14 text-decoration-underline">Show More</Link>
                </div>
            </div>
        </div>
        <AddNewTaskModal/>
    </div>
  )
}

export default MyTasks