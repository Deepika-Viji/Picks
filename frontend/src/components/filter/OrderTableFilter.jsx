import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
import { DigiContext } from '../../context/DigiContext';
import SelectFilter from './SelectFilter';
import DefinedRangeCalender from '../calender/DefinedRangeCalender';

const OrderTableFilter = () => {
    const { tableFilterBtnOpen, handleTableFilterBtn, handleTableFilterReset, tableFilterRef } = useContext(DigiContext);
    const [checkboxes, setCheckboxes] = useState({
        showDeliveryStatus: true,
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
    <div className="table-filter-option order-table-filter">
        <div className="row g-3">
            <div className="col-xl-10 col-10 col-xs-12">
                <div className="row g-3">
                    <div className="col">
                        <form className="row g-2">
                            <div className="col">
                                <Form.Select className="form-control form-control-sm">
                                    <option value="0">Bulk action</option>
                                    <option value="1">Move to trash</option>
                                    <option value="2">Change Status to processing</option>
                                    <option value="3">Change Status to on-hold</option>
                                    <option value="4">Change Status to completed</option>
                                    <option value="5">Change Status to cancelled</option>
                                </Form.Select>
                            </div>
                            <div className="col">
                                <button className="btn btn-sm btn-primary w-100">Apply</button>
                            </div>
                        </form>
                    </div>
                    <div className="col">
                        <Form.Select className="form-control form-control-sm">
                            <option value="0">All Orders</option>
                            <option value="1">Pending</option>
                            <option value="2">Delivered</option>
                            <option value="3">Cancel</option>
                            <option value="4">Return</option>
                        </Form.Select>
                    </div>
                    <DefinedRangeCalender/>
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
                                        <Form.Check id="showDeliveryStatus" 
                                        checked={checkboxes.showDeliveryStatus}
                                        onChange={handleChange}
                                        />                                        
                                        <label className="form-check-label" htmlFor="filterDeliveryStatus">
                                            Delivery Status
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check">
                                        <Form.Check id="showDateRange" 
                                        checked={checkboxes.showDateRange}
                                        onChange={handleChange}
                                        />                                        
                                        <label className="form-check-label" htmlFor="filterDateRange">
                                            Date Range
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

export default OrderTableFilter