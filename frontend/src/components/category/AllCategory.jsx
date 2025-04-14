import React, { useContext, useState } from 'react'
import CategoryTable from '../tables/CategoryTable'
import { DigiContext } from '../../context/DigiContext';
import { Form } from 'react-bootstrap';

const AllCategory = () => {
    const { headerBtnOpen, handleHeaderBtn, handleHeaderReset, headerRef } = useContext(DigiContext);
    const [checkboxes, setCheckboxes] = useState({
        showName: true,
        showDesc: true,
        showSlug: true,
        showCount: true,
        showAction: true,     
      });
    
      const handleChange = (e) => {
        const { id } = e.target;
        setCheckboxes((prevCheckboxes) => ({
          ...prevCheckboxes,
          [id]: !prevCheckboxes[id],
        }));
      };
  return (
    <div className="col-xxl-8 col-md-7">
            <div className="panel">
                <div className="panel-header">
                    <h5>All Categories</h5>
                    <div className="btn-box d-flex gap-2">
                        <div id="tableSearch">
                            <Form.Control type='text' placeholder='Search...'/>
                        </div>
                        <button className="btn btn-sm btn-icon btn-outline-primary" onClick={handleHeaderReset}><i className="fa-light fa-arrows-rotate"></i></button>
                        <div className="digi-dropdown dropdown" ref={headerRef}>
                            <button className={`btn btn-sm btn-icon btn-outline-primary ${headerBtnOpen? 'show':''}`} data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" onClick={handleHeaderBtn}><i className="fa-regular fa-ellipsis-vertical"></i></button>
                            <ul className={`digi-dropdown-menu dropdown-menu ${headerBtnOpen? 'show':''}`}>
                                <li className="dropdown-title">Show Table Title</li>
                                <li>
                                    <div className="form-check">
                                        <Form.Check
                                        type="checkbox"
                                        id="showName"
                                        checked={checkboxes.showName}
                                        onChange={handleChange}
                                        />                                         
                                        <label className="form-check-label" htmlFor="showName">
                                            Name
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check">
                                        <Form.Check
                                        type="checkbox"
                                        id="showDesc"
                                        checked={checkboxes.showDesc}
                                        onChange={handleChange}
                                        />  
                                        <label className="form-check-label" htmlFor="showDescription">
                                            Description
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check">
                                        <Form.Check
                                        type="checkbox"
                                        id="showSlug"
                                        checked={checkboxes.showSlug}
                                        onChange={handleChange}
                                        />  
                                        <label className="form-check-label" htmlFor="showSlug">
                                            Slug
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check">
                                        <Form.Check
                                        type="checkbox"
                                        id="showCount"
                                        checked={checkboxes.showCount}
                                        onChange={handleChange}
                                        />  
                                        <label className="form-check-label" htmlFor="showCount">
                                            Count
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check">
                                        <Form.Check
                                        type="checkbox"
                                        id="showAction"
                                        checked={checkboxes.showAction}
                                        onChange={handleChange}
                                        />  
                                        <label className="form-check-label" htmlFor="showAction">
                                            Action
                                        </label>
                                    </div>
                                </li>
                                <li className="dropdown-title pb-1">Showing</li>
                                <li>
                                    <div className="input-group">
                                        <input type="number" className="form-control form-control-sm w-50" value="10" readOnly/>
                                        <button className="btn btn-sm btn-primary w-50">Apply</button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="panel-body">
                    <div className="table-filter-option">
                        <div className="row justify-content-between g-3">
                            <div className="col-xxl-4 col-6 col-xs-12">
                                <form className="row g-2">
                                    <div className="col-8">
                                        <select className="form-control form-control-sm" data-placeholder="Bulk action">
                                            <option value="">Bulk action</option>
                                            <option value="0">Edit</option>
                                            <option value="1">Move To Trash</option>
                                        </select>
                                    </div>
                                    <div className="col-4">
                                        <button className="btn btn-sm btn-primary w-100">Apply</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-xl-2 col-3 col-xs-12 d-flex justify-content-end">
                                <div id="productTableLength"></div>
                            </div>
                        </div>
                    </div>
                    <CategoryTable/>
                </div>
            </div>
        </div>
  )
}

export default AllCategory