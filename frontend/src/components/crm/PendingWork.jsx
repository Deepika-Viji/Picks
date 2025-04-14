import React from 'react'

const PendingWork = () => {
  return (
    <div className="col-lg-6">
        <div className="panel">
            <div className="panel-header">
                <h5>Pending Works</h5>
            </div>
            <div className="panel-body p-0">
                <table className="table table-hover pending-task-table" tabIndex="1">
                    <tbody>
                    <tr>
                        <td>
                            <div className="task-box">
                                <span>Database tools</span>
                                <span>Jul 25, 2017 for Alimul Alrazy</span>
                            </div>
                        </td>
                        <td>
                            <span className="d-block text-end">
                                <span className="badge bg-primary px-2">Processing</span>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="task-box">
                                <span>Technologycal tools</span>
                                <span>Jul 25, 2017 for Alimul Alrazy</span>
                            </div>
                        </td>
                        <td>
                            <span className="d-block text-end">
                                <span className="badge bg-success px-2">Completed</span>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="task-box">
                                <span>Transaction</span>
                                <span>Jul 25, 2017 for Alimul Alrazy</span>
                            </div>
                        </td>
                        <td>
                            <span className="d-block text-end">
                                <span className="badge bg-danger px-2">On hold</span>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="task-box">
                                <span>Training tools</span>
                                <span>Jul 25, 2017 for Alimul Alrazy</span>
                            </div>
                        </td>
                        <td>
                            <span className="d-block text-end">
                                <span className="badge bg-primary px-2">Processing</span>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="task-box">
                                <span>Private chat module</span>
                                <span>Jul 25, 2017 for Alimul Alrazy</span>
                            </div>
                        </td>
                        <td>
                            <span className="d-block text-end">
                                <span className="badge bg-success px-2">Completed</span>
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="task-box">
                                <span>Appointment booking with</span>
                                <span>Jul 25, 2017 for Alimul Alrazy</span>
                            </div>
                        </td>
                        <td>
                            <span className="d-block text-end">
                                <span className="badge bg-primary px-2">Processing</span>
                            </span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default PendingWork