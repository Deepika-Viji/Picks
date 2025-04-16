import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CustomizedDataTableSection = () => {
  return (
    <div className="col-12">
        <div className="card">
            <div className="card-header">
                Customized Data Table
            </div>
            <div className="card-body">
                <div className="table-filter-option customized-data-table">
                    <div className="row g-3">
                        <div className="col-xl-10 col-md-9">
                            <div className="row g-3">
                                <div className="col">
                                    <form className="row g-2">
                                        <div className="col">
                                            <Form.Select className="form-control form-control-sm" data-placeholder="Bulk action">
                                                <option value="">Bulk action</option>
                                                <option value="0">Edit</option>
                                                <option value="1">Move To Trash</option>
                                            </Form.Select>
                                        </div>
                                        <div className="col">
                                            <button className="btn btn-sm btn-primary w-100">Apply</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="col">
                                    <Form.Select className="form-control form-control-sm">
                                        <option value="0">All Category</option>
                                        <option value="1">Cloth</option>
                                        <option value="2">Fashion</option>
                                        <option value="3">Bag</option>
                                        <option value="4">Food</option>
                                        <option value="5">Medicine</option>
                                        <option value="6">Watch</option>
                                        <option value="7">Smart Phone</option>
                                    </Form.Select>
                                </div>
                                <div className="col">
                                    <Form.Select className="form-control form-control-sm">
                                        <option value="0">All Product Type</option>
                                        <option value="1">Downloadable</option>
                                        <option value="2">Virtual</option>
                                    </Form.Select>
                                </div>
                                <div className="col">
                                    <Form.Select className="form-control form-control-sm">
                                        <option value="0">All Product Stock</option>
                                        <option value="1">In stock</option>
                                        <option value="2">Out of stock</option>
                                        <option value="3">On backorder</option>
                                    </Form.Select>
                                </div>
                                <div className="col">
                                    <button className="btn btn-sm btn-primary"><i className="fa-light fa-filter"></i> Filter</button>
                                </div>


                            </div>
                        </div>
                        <div className="col-xl-2 col-md-3 d-flex justify-content-between">
                            <div id="tableSearch">
                                <div className='table-form-text'>
                                    <Form.Control type='text' placeholder='Search..'/>
                                </div> 
                            </div>
                            
                        </div>
                    </div>
                </div>
                <OverlayScrollbarsComponent>
                    <table className="table table-dashed table-hover digi-dataTable all-product-table table-striped" id="allProductTable">
                        <thead>
                            <tr>
                                <th className="no-sort">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="markAllProduct"/>
                                    </div>
                                </th>
                                <th>Product</th>
                                <th>SKU</th>
                                <th>Stock</th>
                                <th>Price</th>
                                <th>Sales</th>
                                <th>Rating</th>
                                <th>Published</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox"/>
                                    </div>
                                </td>
                                <td>
                                    <div className="table-product-card">
                                        <div className="part-img">
                                            <img src="assets/images/product-img-1.jpg" alt="Image"/>
                                        </div>
                                        <div className="part-txt">
                                            <span className="product-name">A4TECH BH300 Bluetooth Wireless Headset</span>
                                            <span className="product-category">Category: electronics/music</span>
                                        </div>
                                    </div>
                                </td>
                                <td>CSJ0158</td>
                                <td>12</td>
                                <td>$560</td>
                                <td>256</td>
                                <td>
                                    <div className="rating">
                                        <div className="star">
                                            <i className="fa-solid fa-star starred"></i>
                                            <i className="fa-solid fa-star starred"></i>
                                            <i className="fa-solid fa-star starred"></i>
                                            <i className="fa-solid fa-star starred"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <div className="rating-amount">(42)</div>
                                    </div>
                                </td>
                                <td>12/24/2023 01:05 PM</td>
                                <td>
                                    <div className="btn-box">
                                        <button><i className="fa-light fa-eye"></i></button>
                                        <button><i className="fa-light fa-pen"></i></button>
                                        <button><i className="fa-light fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox"/>
                                    </div>
                                </td>
                                <td>
                                    <div className="table-product-card">
                                        <div className="part-img">
                                            <img src="assets/images/product-img-4.jpg" alt="Image"/>
                                        </div>
                                        <div className="part-txt">
                                            <span className="product-name">Premium Blend Tea</span>
                                            <span className="product-category">Category: Drink/tea</span>
                                        </div>
                                    </div>
                                </td>
                                <td>CSJ0158</td>
                                <td>22</td>
                                <td>$160</td>
                                <td>756</td>
                                <td>
                                    <div className="rating">
                                        <div className="star">
                                            <i className="fa-solid fa-star starred"></i>
                                            <i className="fa-solid fa-star starred"></i>
                                            <i className="fa-solid fa-star starred"></i>
                                            <i className="fa-solid fa-star starred"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <div className="rating-amount">(380)</div>
                                    </div>
                                </td>
                                <td>10/21/2022 01:05 PM</td>
                                <td>
                                    <div className="btn-box">
                                        <button><i className="fa-light fa-eye"></i></button>
                                        <button><i className="fa-light fa-pen"></i></button>
                                        <button><i className="fa-light fa-trash"></i></button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox"/>
                                    </div>
                                </td>
                                <td>
                                    <div className="table-product-card">
                                        <div className="part-img">
                                            <img src="assets/images/product-img-3.jpg" alt="Image"/>
                                        </div>
                                        <div className="part-txt">
                                            <span className="product-name">Chris Adams Body Spray classNameic Denim</span>
                                            <span className="product-category">Category: Fashion/perfume</span>
                                        </div>
                                    </div>
                                </td>
                                <td>CSJ0158</td>
                                <td>12</td>
                                <td>$560</td>
                                <td>256</td>
                                <td>
                                    <div className="rating">
                                        <div className="star">
                                            <i className="fa-solid fa-star starred"></i>
                                            <i className="fa-solid fa-star starred"></i>
                                            <i className="fa-solid fa-star starred"></i>
                                            <i className="fa-solid fa-star starred"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <div className="rating-amount">(42)</div>
                                    </div>
                                </td>
                                <td>12/24/2023 01:05 PM</td>
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
                    <div className="dataTables_info">Showing 1 to 3 of 3</div>
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

export default CustomizedDataTableSection