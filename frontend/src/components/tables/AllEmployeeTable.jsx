import React, { useContext, useState, useRef, useEffect } from 'react';
import { employeeData } from '../../data/Data';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import PaginationSection from './PaginationSection';
import { DigiContext } from '../../context/DigiContext';

const AllEmployeeTable = () => {
  const { isBelowLg } = useContext(DigiContext)
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(10);
    const [dataList, setDataList] = useState(
      employeeData.map((data) => ({ ...data, showDropdown: false }))
    );

    const dropdownRef = useRef(null);

    // Button
    const handleDropdownToggle = (event, index) => {
      event.stopPropagation(); // Prevent the event from propagating to the document
      if (index !== -1 && index !== -2) {
        const adjustedIndex = indexOfFirstData + index; // Adjust index based on pagination
        setDataList((prevData) => {
          const updatedData = prevData.map((data, i) => ({
            ...data,
            showDropdown: i === adjustedIndex ? !data.showDropdown : false,
          }));
          return updatedData;
        });
      }
    };
  
    useEffect(() => {
      const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          // Clicked outside the dropdown, close it
          setDataList((prevData) =>
            prevData.map((data) => ({ ...data, showDropdown: false }))
          );
        }
      };
  
      document.addEventListener('click', handleOutsideClick);
  
      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }, []);
      
    // Pagination logic
    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = dataList.slice(indexOfFirstData, indexOfLastData);
  
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    // Calculate total number of pages
    const totalPages = Math.ceil(dataList.length / dataPerPage);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
     
  return (
    <>
    {isBelowLg ? 
    <OverlayScrollbarsComponent>
        <table className="table table-dashed table-hover digi-dataTable all-employee-table table-striped" id="allEmployeeTable">
            <thead>
                <tr>
                    <th className="no-sort">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="markAllEmployee"/>
                        </div>
                    </th>
                    <th>Action</th>
                    <th>Employee ID</th>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Section</th>
                    <th>Phone</th>
                    <th>Present Address</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {currentData.map((data,index)=>(
                <tr key={data.employeeId}>
                    <td>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox"/>
                        </div>
                    </td>
                    <td>
                        <div className="digi-dropdown dropdown d-inline-block" ref={dropdownRef}>
                        <button
                        className={`btn btn-sm btn-outline-primary ${data.showDropdown ? 'show' : ''}`}
                        onClick={(event) => handleDropdownToggle(event, index)}
                        >
                            Action <i className="fa-regular fa-angle-down"></i>
                        </button>                        
                        <ul className={`digi-table-dropdown digi-dropdown-menu dropdown-menu dropdown-slim dropdown-menu-sm ${
                            data.showDropdown ? 'show' : ''
                        }`}>
                                <li><a href="#" className="dropdown-item"><span className="dropdown-icon"><i className="fa-light fa-eye"></i></span> View</a></li>
                                <li><a href="#" className="dropdown-item"><span className="dropdown-icon"><i className="fa-light fa-pen-to-square"></i></span> Edit</a></li>
                                <li><a href="#" className="dropdown-item"><span className="dropdown-icon"><i className="fa-light fa-id-card"></i></span> ID Card</a></li>
                                <li><a href="#" className="dropdown-item"><span className="dropdown-icon"><i className="fa-light fa-pen-nib"></i></span> Resign</a></li>
                                <li><a href="#" className="dropdown-item"><span className="dropdown-icon"><i className="fa-light fa-arrow-right-from-bracket"></i></span> Left</a></li>
                                <li><a href="#" className="dropdown-item"><span className="dropdown-icon"><i className="fa-light fa-trash-can"></i></span> Delete</a></li>
                            </ul>
                        </div>
                    </td>
                    <td>{data.employeeId}</td>
                    <td>
                        <div className="avatar">
                            <img src={data.image} alt="User"/>
                        </div>
                    </td>
                    <td>{data.name}</td>
                    <td>{data.section}</td>
                    <td>{data.phone}</td>
                    <td>
                        <span className="address-txt">{data.presentAddress}</span>
                    </td>
                    <td><span className="active-mark"><i className="fa-regular fa-check"></i></span> Active</td>
                </tr>   
                ))}
                
            </tbody>
        </table>
    </OverlayScrollbarsComponent>:
    <table className="table table-dashed table-hover digi-dataTable all-employee-table table-striped" id="allEmployeeTable">
        <thead>
            <tr>
                <th className="no-sort">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="markAllEmployee"/>
                    </div>
                </th>
                <th>Action</th>
                <th>Employee ID</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Section</th>
                <th>Phone</th>
                <th>Present Address</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {currentData.map((data,index)=>(
            <tr key={data.employeeId}>
                <td>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"/>
                    </div>
                </td>
                <td>
                    <div className="digi-dropdown dropdown d-inline-block" ref={dropdownRef}>
                    <button
                    className={`btn btn-sm btn-outline-primary ${data.showDropdown ? 'show' : ''}`}
                    onClick={(event) => handleDropdownToggle(event, index)}
                    >
                    Action <i className="fa-regular fa-angle-down"></i>
                    </button>                        
                    <ul className={`digi-table-dropdown digi-dropdown-menu dropdown-menu dropdown-slim dropdown-menu-sm ${
                        data.showDropdown ? 'show' : ''
                    }`}>
                            <li><a href="#" className="dropdown-item"><span className="dropdown-icon"><i className="fa-light fa-eye"></i></span> View</a></li>
                            <li><a href="#" className="dropdown-item"><span className="dropdown-icon"><i className="fa-light fa-pen-to-square"></i></span> Edit</a></li>
                            <li><a href="#" className="dropdown-item"><span className="dropdown-icon"><i className="fa-light fa-id-card"></i></span> ID Card</a></li>
                            <li><a href="#" className="dropdown-item"><span className="dropdown-icon"><i className="fa-light fa-pen-nib"></i></span> Resign</a></li>
                            <li><a href="#" className="dropdown-item"><span className="dropdown-icon"><i className="fa-light fa-arrow-right-from-bracket"></i></span> Left</a></li>
                            <li><a href="#" className="dropdown-item"><span className="dropdown-icon"><i className="fa-light fa-trash-can"></i></span> Delete</a></li>
                        </ul>
                    </div>
                </td>
                <td>{data.employeeId}</td>
                <td>
                    <div className="avatar">
                        <img src={data.image} alt="User"/>
                    </div>
                </td>
                <td>{data.name}</td>
                <td>{data.section}</td>
                <td>{data.phone}</td>
                <td>
                    <span className="address-txt">{data.presentAddress}</span>
                </td>
                <td><span className="active-mark"><i className="fa-regular fa-check"></i></span> Active</td>
            </tr>   
            ))}
            
        </tbody>
    </table>
    }
    <PaginationSection currentPage={currentPage} totalPages={totalPages} paginate={paginate} pageNumbers={pageNumbers}/>
    </>
  )
}

export default AllEmployeeTable