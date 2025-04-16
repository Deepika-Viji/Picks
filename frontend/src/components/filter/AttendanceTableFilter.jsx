import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
import { DigiContext } from '../../context/DigiContext';
import SelectFilter from './SelectFilter';
import DefinedRangeCalender from '../calender/DefinedRangeCalender';

const AttendanceTableFilter = () => {
    const { tableFilterBtnOpen, handleTableFilterBtn, handleTableFilterReset , tableFilterRef} = useContext(DigiContext);
    const [checkboxes, setCheckboxes] = useState({
        showSelectEmployee: true,
        showDate: true,
      });
    
      const handleChange = (e) => {
        const { id } = e.target;
        setCheckboxes((prevCheckboxes) => ({
          ...prevCheckboxes,
          [id]: !prevCheckboxes[id],
        }));
      };
  return (
    <div className="table-filter-option attendance-table-filter">
        <div className="row g-3">
            <div className="col-sm-10 col-9 col-xs-12">
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
                        <Form.Select className="form-control form-control-sm select-search" data-placeholder="Select Employee">
                            <option value="">Select Employee</option>
                            <option value="LewisStone">Lewis Stone</option>
                            <option value="JackHolland">Jack Holland</option>
                            <option value="LilyBurgess">Lily Burgess</option>
                            <option value="HarrisonFrench">Harrison French</option>
                            <option value="IsabelMellor">Isabel Mellor</option>
                            <option value="AdamBates">Adam Bates</option>
                            <option value="MillieLee">Millie Lee</option>
                            <option value="MadeleineHart">Madeleine Hart</option>
                            <option value="LouiseGoddard">Louise Goddard</option>
                            <option value="JosephFrancis">Joseph Francis</option>
                            <option value="KaiBarker">Kai Barker</option>
                            <option value="ErinKnight">Erin Knight</option>
                            <option value="JaydenTaylor">Jayden Taylor</option>
                            <option value="SophieHilton">Sophie Hilton</option>
                            <option value="LeahWright">Leah Wright</option>
                            <option value="LewisHooper">Lewis Hooper</option>
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
                                        <Form.Check id="showSelectEmployee" 
                                        checked={checkboxes.showSelectEmployee}
                                        onChange={handleChange}
                                        />
                                        <label className="form-check-label" htmlFor="filterEmployee">
                                            Select Employee
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <div className="form-check">
                                        <Form.Check id="showDate" 
                                        checked={checkboxes.showDate}
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
            <div className="col-sm-2 col-3 col-xs-12 d-flex justify-content-end align-items-center">
                <div id="employeeTableLength"><SelectFilter/></div>
            </div>
        </div>
    </div>
  )
}

export default AttendanceTableFilter