import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
import { DigiContext } from '../../context/DigiContext';
import SelectFilter from './SelectFilter';
import DefinedRangeCalender from '../calender/DefinedRangeCalender';

const TaskTableFilter = () => {
    const { 
        tableFilterBtnOpen, 
        handleTableFilterBtn,
        tableFilterRef,
     } = useContext(DigiContext);
    const [checkboxes, setCheckboxes] = useState({
        showTaskStatus: true,
        showDateRange: true,
        showTaskPriority: true,
      });
    
      const handleChange = (e) => {
        const { id } = e.target;
        setCheckboxes((prevCheckboxes) => ({
          ...prevCheckboxes,
          [id]: !prevCheckboxes[id],
        }));
      };
  return (
    <div className="table-filter-option task-table-header">
        <div className="row g-3">
            <div className="col-xl-10 col-md-10 col-10 col-xs-12">
                <div className="row g-3">
                    <div className="col">
                        <form className="row g-2">
                            <div className="col">
                                <Form.Select className="form-control form-control-sm" data-placeholder="Bulk action">
                                    <option value="">Bulk action</option>
                                    <option value="0">Move to trash</option>
                                </Form.Select>
                            </div>
                            <div className="col">
                                <button className="btn btn-sm btn-primary w-100">Apply</button>
                            </div>
                        </form>
                    </div>
                    <div className="col">
                        <Form.Select className="form-control form-control-sm" data-placeholder="Select Status">
                            <option value="">Select Status</option>
                            <option value="0">Not Started</option>
                            <option value="1">Pending</option>
                            <option value="2">On Hold</option>
                            <option value="3">In Progress</option>
                            <option value="4">Completed</option>
                        </Form.Select>
                    </div>
                    <DefinedRangeCalender/>
                    <div className="col">
                        <Form.Select className="form-control form-control-sm" data-placeholder="Select Priority">
                            <option value="">Select Priority</option>
                            <option value="0">Low</option>
                            <option value="1">Medium</option>
                            <option value="2">High</option>
                            <option value="3">Urgent</option>
                        </Form.Select>
                    </div>
                    <div className="col">
                        <button className="btn btn-sm btn-primary"><i className="fa-light fa-filter"></i> Filter</button>
                    </div>
                    <div className="col justify-content-center align-items-center">
                        <div className="digi-dropdown dropdown" ref={tableFilterRef}>
                        <button className={`btn btn-sm btn-icon btn-primary ${tableFilterBtnOpen? 'show':''}`} onClick={handleTableFilterBtn} data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false"><i className={`fa-regular ${tableFilterBtnOpen? 'fa-minus':'fa-plus'}`}></i></button>
                        <ul className={`digi-dropdown-menu dropdown-menu ${tableFilterBtnOpen? 'show':''}`}>
                                <li className="dropdown-title">Filter Options</li>
                                <li>
                                    <div className="form-check">
                                        <Form.Check id="showTaskStatus" 
                                        checked={checkboxes.showTaskStatus}
                                        onChange={handleChange}
                                        />                                          
                                        <label className="form-check-label" htmlFor="filterTaskStatus">
                                            Task Status
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
                                <li>
                                    <div className="form-check">
                                        <Form.Check id="showTaskPriority" 
                                        checked={checkboxes.showTaskPriority}
                                        onChange={handleChange}
                                        />  
                                        <label className="form-check-label" htmlFor="filterTaskPriority">
                                            Task Priority
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-2 col-md-2 col-2 col-xs-12 d-flex justify-content-end align-items-center">
                <div id="employeeTableLength">
                    <SelectFilter/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TaskTableFilter