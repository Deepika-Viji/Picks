import React from 'react'
import Footer from '../components/footer/Footer'
import { Form } from 'react-bootstrap'

const InvoicesMainContent = () => {
  return (
    <div className="main-content">
    <div className="dashboard-breadcrumb dashboard-panel-header mb-30">
        <h2>Invoices</h2>
    </div>
    <div className="row g-4 justify-content-center">
        <div className="col-12">
            <div className="panel rounded-0">
                <div className="panel-body invoice" id="invoiceBody">
                    <div className="invoice-header mb-30">
                        <div className="row justify-content-between align-items-end">
                            <div className="col-xl-4 col-lg-5 col-sm-6">
                                <div className="shop-address">
                                    <div className="logo mb-20">
                                        <img src="src/assets/images/white-pixfix-logo.png" alt="Logo"/>
                                    </div>
                                    <div className="part-txt">
                                        <p className="mb-1">Address: 456 E-Commerce Avenue, Cityville, Countryland</p>
                                        <p className="mb-1">Email: support@shopifymart.com</p>
                                        <p className="mb-1">Phone: +1 (800) 123-4567</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex gap-xl-4 gap-3 status-row">
                                    <div className="w-50">
                                        <div className="payment-status">
                                            <label className="form-label">Payment Status:</label>
                                            <Form.Select className="form-control">
                                                <option value="0">Paid</option>
                                                <option value="1">Unpaid</option>
                                                <option value="2">Partial</option>
                                            </Form.Select>
                                        </div>
                                    </div>
                                    <div className="w-50">
                                        <div className="Order-status">
                                            <label className="form-label">Order Status:</label>
                                            <Form.Select className="form-control">
                                                <option value="0">Pending</option>
                                                <option value="1">Delivered</option>
                                                <option value="2">Canceled</option>
                                            </Form.Select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="invoice-body">
                        <div className="info-card-wrap mb-30">
                            <div className="row">
                                <div className="col-md-4 col-sm-6">
                                    <div className="info-card">
                                        <h3>Customer Details:</h3>
                                        <ul className="p-0">
                                            <li><span>Name:</span> John Doe</li>
                                            <li><span>Email:</span> john.doe@example.com</li>
                                            <li><span>Phone:</span> +1 (555) 555-1234</li>
                                            <li><span>Address:</span> 123 Main Street, Anytown, USA</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 d-flex justify-content-center">
                                    <div className="info-card">
                                        <h3>Shipping Address:</h3>
                                        <ul className="p-0">
                                            <li><span>Name:</span> John Doe</li>
                                            <li><span>Email:</span> john.doe@example.com</li>
                                            <li><span>Phone:</span> +1 (555) 555-1234</li>
                                            <li><span>Address:</span> 123 Main Street, Anytown, USA</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 d-flex justify-content-end">
                                    <div className="info-card">
                                        <h3>Invoice Details:</h3>
                                        <ul className="p-0">
                                            <li><span>Invoice No.:</span> 22123101</li>
                                            <li><span>Oder Date:</span> 2022-12-26</li>
                                            <li><span>Total Amount:</span> 282.00</li>
                                            <li><span>Payment Type:</span> cash on delivery</li>
                                            <li><span>Payment Status:</span> <span className="text-danger">Unpaid</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive mb-30">
                            <table className="table table-bordered mb-0 invoice-table">
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Products</th>
                                        <th>Qty.</th>
                                        <th>Price</th>
                                        <th>Shipping Cost</th>
                                        <th>Tax</th>
                                        <th>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>01</td>
                                        <td>AeroGlide ProTech Backpack</td>
                                        <td>01</td>
                                        <td>$99</td>
                                        <td>$09</td>
                                        <td>$00</td>
                                        <td>$108</td>
                                    </tr>
                                    <tr>
                                        <td>02</td>
                                        <td>StellarBloom Infinity Scarf</td>
                                        <td>02</td>
                                        <td>$150</td>
                                        <td>$10</td>
                                        <td>$00</td>
                                        <td>$160</td>
                                    </tr>
                                    <tr>
                                        <td>03</td>
                                        <td>LuminaFlex Smart Desk Lamp</td>
                                        <td>03</td>
                                        <td>$03</td>
                                        <td>$03</td>
                                        <td>$00</td>
                                        <td>$06</td>
                                    </tr>
                                    <tr>
                                        <td>04</td>
                                        <td>AquaGlow HydroTech Water Bottle</td>
                                        <td>04</td>
                                        <td>$04</td>
                                        <td>$04</td>
                                        <td>$00</td>
                                        <td>$08</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="total-payment-area row justify-content-end mb-30">
                            <div className="col-md-4 col-sm-6">
                                <ul>
                                    <li className="d-flex justify-content-between">Net Total:<span>282.00</span></li>
                                    <li className="d-flex justify-content-between">Shipping Cost:<span>0</span></li>
                                    <li className="d-flex justify-content-between">Vat:<span>0</span></li>
                                    <li className="d-flex justify-content-between">Total:<span>282.00</span></li>
                                </ul>
                            </div>
                        </div>
                        <p className="invoice-note text-center mb-0">Please check your parcel carefully</p>
                    </div>
                </div>
                <div className="panel-body border-top">
                    <div className="btn-box d-flex justify-content-end gap-2">
                        <button className="btn btn-sm btn-primary" id="printInvoice"><i className="fa-light fa-print"></i> Print</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Footer/>
</div>
  )
}

export default InvoicesMainContent