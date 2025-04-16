import React from 'react'

const NewCustomer = () => {
  return (
    <div className="col-xxl-4 col-md-6">
        <div className="panel">
            <div className="panel-header">
                <h5>New Customers</h5>
            </div>
            <div className="panel-body">
                <table className="table table-borderless new-customer-table">
                    <tbody>
                        <tr>
                            <td>
                                <div className="new-customer">
                                    <div className="part-img">
                                        <img src="src/assets/images/avatar.png" alt="Image"/>
                                    </div>
                                    <div className="part-txt">
                                        <p className="customer-name">Iftikar Ammed</p>
                                        <span>@iftikarahmed</span>
                                    </div>
                                </div>
                            </td>
                            <td>2 Orders</td>
                            <td>$179</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="new-customer">
                                    <div className="part-img">
                                        <img src="src/assets/images/avatar-2.png" alt="Image"/>
                                    </div>
                                    <div className="part-txt">
                                        <p className="customer-name">Sadab Khan</p>
                                        <span>@sadabkhan</span>
                                    </div>
                                </div>
                            </td>
                            <td>2 Orders</td>
                            <td>$179</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="new-customer">
                                    <div className="part-img">
                                        <img src="src/assets/images/avatar-3.png" alt="Image"/>
                                    </div>
                                    <div className="part-txt">
                                        <p className="customer-name">Hoyder Ali</p>
                                        <span>@hoyderali</span>
                                    </div>
                                </div>
                            </td>
                            <td>2 Orders</td>
                            <td>$179</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="new-customer">
                                    <div className="part-img">
                                        <img src="src/assets/images/avatar-4.png" alt="Image"/>
                                    </div>
                                    <div className="part-txt">
                                        <p className="customer-name">Hardik Ali</p>
                                        <span>@hardikali</span>
                                    </div>
                                </div>
                            </td>
                            <td>2 Orders</td>
                            <td>$179</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="new-customer">
                                    <div className="part-img">
                                        <img src="src/assets/images/avatar-5.png" alt="Image"/>
                                    </div>
                                    <div className="part-txt">
                                        <p className="customer-name">Alaysa Haly</p>
                                        <span>@alaysahaly</span>
                                    </div>
                                </div>
                            </td>
                            <td>2 Orders</td>
                            <td>$179</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="new-customer">
                                    <div className="part-img">
                                        <img src="src/assets/images/avatar-6.png" alt="Image"/>
                                    </div>
                                    <div className="part-txt">
                                        <p className="customer-name">Natalush Khan</p>
                                        <span>@natalushkhan</span>
                                    </div>
                                </div>
                            </td>
                            <td>2 Orders</td>
                            <td>$179</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="new-customer">
                                    <div className="part-img">
                                        <img src="src/assets/images/avatar-7.png" alt="Image"/>
                                    </div>
                                    <div className="part-txt">
                                        <p className="customer-name">Rafikul Sarker</p>
                                        <span>@rafiksarker</span>
                                    </div>
                                </div>
                            </td>
                            <td>5 Orders</td>
                            <td>$320</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default NewCustomer