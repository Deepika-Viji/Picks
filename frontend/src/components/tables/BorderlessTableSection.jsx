import React from 'react'

const BorderlessTableSection = () => {
  return (
    <div className="col-lg-4">
        <div className="card">
            <div className="card-header">
                Table without borders
            </div>
            <div className="card-body">
                <p className="fs-14 pb-1 mb-10">Add <code>.table-borderless</code> for a table without borders.</p>
                <div className="table-responsive">
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th>Invoice ID</th>
                                <th>Client</th>
                                <th>Due Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#INV-0001</td>
                                <td>Hazel Nutt</td>
                                <td>9 Aug 2018</td>
                                <td>
                                    <span className="badge bg-primary px-2">Partially Paid</span>
                                </td>
                            </tr>
                            <tr>
                                <td>#INV-0002</td>
                                <td>Hazel Nutt</td>
                                <td>9 Aug 2018</td>
                                <td>
                                    <span className="badge bg-success px-2">Paid</span>
                                </td>
                            </tr>
                            <tr>
                                <td>#INV-0003</td>
                                <td>Hazel Nutt</td>
                                <td>9 Aug 2018</td>
                                <td>
                                    <span className="badge bg-primary px-2">Partially Paid</span>
                                </td>
                            </tr>
                            <tr>
                                <td>#INV-0004</td>
                                <td>Hazel Nutt</td>
                                <td>9 Aug 2018</td>
                                <td>
                                    <span className="badge bg-success px-2">Paid</span>
                                </td>
                            </tr>
                            <tr>
                                <td>#INV-0005</td>
                                <td>Hazel Nutt</td>
                                <td>9 Aug 2018</td>
                                <td>
                                    <span className="badge bg-primary px-2">Partially Paid</span>
                                </td>
                            </tr>
                            <tr>
                                <td>#INV-0006</td>
                                <td>Hazel Nutt</td>
                                <td>9 Aug 2018</td>
                                <td>
                                    <span className="badge bg-success px-2">Paid</span>
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

export default BorderlessTableSection