import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
import { DigiContext } from '../../context/DigiContext';
import SelectFilter from './SelectFilter';

const AllProductTableFilter = () => {
    const { tableFilterBtnOpen, handleTableFilterBtn, handleTableFilterReset, tableFilterRef } = useContext(DigiContext);
    const [checkboxes, setCheckboxes] = useState({
        showStatus: true,
        showDateRange: true,
      });
    
      const handleChange = (e) => {
        const { id } = e.target;
        setCheckboxes((prevCheckboxes) => ({
          ...prevCheckboxes,
          [id]: !prevCheckboxes[id],
        }));
      };
  return (
    <div className="table-filter-option all-products-table-header">
        <div className="row g-3">
            <div className="col-xl-10 col-10 col-xs-12">
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
                    <button className="btn btn-sm btn-primary" onClick={handleTableFilterReset}><i className="fa-light fa-filter"></i> Filter</button>
                    </div>
                    <div className="col justify-content-center align-items-center">
                        <div className="digi-dropdown dropdown" ref={tableFilterRef}>
                        <button className={`btn btn-sm btn-icon btn-primary ${tableFilterBtnOpen? 'show':''}`} onClick={handleTableFilterBtn} data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i className={`fa-regular ${tableFilterBtnOpen? 'fa-minus':'fa-plus'}`}></i></button>
                        <ul className={`digi-scroll-dropdown digi-dropdown-menu dropdown-menu ${tableFilterBtnOpen? 'show':''}`}>
                                <li className="dropdown-title">Filter Options</li>
                                <li>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="filterCategory" checked readOnly/>
                                        <label className="form-check-label" htmlFor="filterCategory">
                                            Category
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="filterProductType" checked readOnly/>
                                        <label className="form-check-label" htmlFor="filterProductType">
                                            Product Type
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="filterStock" checked readOnly/>
                                        <label className="form-check-label" htmlFor="filterStock">
                                            Stock
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-2 col-2 col-xs-12 d-flex justify-content-end align-items-center">
                <div id="productTableLength">
                    <SelectFilter/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllProductTableFilter