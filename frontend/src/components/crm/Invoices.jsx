import React from 'react'
import { Link } from 'react-router-dom'

const Invoices = () => {
  return (
    <div className="panel">
        <div className="panel-header">
            <h5>Invoices</h5>
            <Link className="btn btn-sm btn-primary" to="/order">View All</Link>
        </div>
        <div className="panel-body p-0">
            <div className="table-responsive">
                <table className="table invoice-table table-hover">
                    <thead>
                        <tr>
                            <th>Invoice ID</th>
                            <th>Client</th>
                            <th>Due Date</th>
                            <th>Total</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#INV-0001</td>
                            <td>Hazel Nutt</td>
                            <td>9 Aug 2018</td>
                            <td>$240</td>
                            <td>
                                <span className="d-block text-end">
                                    <span className="badge bg-primary px-2">Partially Paid</span>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>#INV-0002</td>
                            <td>Hazel Nutt</td>
                            <td>9 Aug 2018</td>
                            <td>$240</td>
                            <td>
                                <span className="d-block text-end">
                                    <span className="badge bg-success px-2">Paid</span>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>#INV-0003</td>
                            <td>Hazel Nutt</td>
                            <td>9 Aug 2018</td>
                            <td>$240</td>
                            <td>
                                <span className="d-block text-end">
                                    <span className="badge bg-primary px-2">Partially Paid</span>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>#INV-0004</td>
                            <td>Hazel Nutt</td>
                            <td>9 Aug 2018</td>
                            <td>$240</td>
                            <td>
                                <span className="d-block text-end">
                                    <span className="badge bg-success px-2">Paid</span>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>#INV-0005</td>
                            <td>Hazel Nutt</td>
                            <td>9 Aug 2018</td>
                            <td>$240</td>
                            <td>
                                <span className="d-block text-end">
                                    <span className="badge bg-primary px-2">Partially Paid</span>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>#INV-0006</td>
                            <td>Hazel Nutt</td>
                            <td>9 Aug 2018</td>
                            <td>$240</td>
                            <td>
                                <span className="d-block text-end">
                                    <span className="badge bg-success px-2">Paid</span>
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

export default Invoices