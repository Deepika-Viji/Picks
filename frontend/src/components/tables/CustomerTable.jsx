import React, { useContext, useState, useRef, useEffect } from 'react';
import { Form } from 'react-bootstrap'
import { customerData } from '../../data/Data';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import PaginationSection from './PaginationSection';
import { DigiContext } from '../../context/DigiContext';
import { Link } from 'react-router-dom';
const CustomerTable = () => {
  const {isBelowLg} = useContext(DigiContext)
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(10);
    const [dataList, setDataList] = useState(
      customerData.map((data) => ({ ...data, showDropdown: false }))
    );
    const handleCheckboxChange = (index) => {
        const updatedDataList = [...dataList];
        updatedDataList[indexOfFirstData + index].isChecked = !updatedDataList[indexOfFirstData + index].isChecked;
        setDataList(updatedDataList);
      };
    
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
    {isBelowLg? 
      <OverlayScrollbarsComponent>
          <table className="table table-dashed table-hover digi-dataTable all-customer-table table-striped" id="allCustomerTable">
              <thead>
                  <tr>
                      <th className="no-sort">
                          <div className="form-check">
                              <input className="form-check-input" type="checkbox" id="markAllCustomer"/>
                          </div>
                      </th>
                      <th>Action</th>
                      <th>Customer ID</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Group</th>
                      <th>Customer Type</th>
                      <th>Credit Limit</th>
                      <th>Opening Balance</th>
                      <th>Debit</th>
                      <th>Credit</th>
                      <th>Closing Balance</th>
                      <th>Status</th>
                  </tr>
              </thead>
              <tbody>
                  {currentData.map((data,index)=>(
                  <tr key={data.customerId}>
                      <td>
                          <div className="form-check">
                              <input className="form-check-input" type="checkbox"/>
                          </div>
                      </td>
                      <td>
                          <div className="digi-table-dropdown digi-dropdown dropdown d-inline-block" ref={dropdownRef}>
                              <button
                                className={`btn btn-sm btn-outline-primary ${data.showDropdown ? 'show' : ''}`}
                                onClick={(event) => handleDropdownToggle(event, index)}
                              >
                                Action <i className="fa-regular fa-angle-down"></i>
                              </button>                                            
                              <ul className={`digi-scroll-dropdown digi-dropdown-menu dropdown-menu dropdown-slim dropdown-menu-sm ${
                                  data.showDropdown ? 'show' : ''
                              }`}>
                                      <li><Link to="#" className="dropdown-item"><span className="dropdown-icon"><i className="fa-light fa-pen-to-square"></i></span> Edit</Link></li>
                                  <li><Link to="#" className="dropdown-item"><span className="dropdown-icon"><i className="fa-light fa-trash-can"></i></span> Delete</Link></li>
                              </ul>
                          </div>
                      </td>
                      <td>{data.customerId}</td>
                      <td>{data.name}</td>
                      <td>{data.phone}</td>
                      <td>{data.phone}</td>
                      <td>{data.customerType}</td>
                      <td>{data.creditLimit}</td>
                      <td>{data.openingBalance}</td>
                      <td>{data.debit}</td>
                      <td>{data.credit}</td>
                      <td>{data.closingBalance}</td>
                      <td>
                          <div className="form-check form-switch">
                          <Form.Check type="switch" checked={data.isChecked || false} onChange={() => handleCheckboxChange(index)} />                                        
                          </div>
                      </td>
                  </tr>  
                  ))}
                  
              
              </tbody>
          </table>
      </OverlayScrollbarsComponent>:
      <table className="table table-dashed table-hover digi-dataTable all-customer-table table-striped" id="allCustomerTable">
          <thead>
              <tr>
                  <th className="no-sort">
                      <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="markAllCustomer"/>
                      </div>
                  </th>
                  <th>Action</th>
                  <th>Customer ID</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Group</th>
                  <th>Customer Type</th>
                  <th>Credit Limit</th>
                  <th>Opening Balance</th>
                  <th>Debit</th>
                  <th>Credit</th>
                  <th>Closing Balance</th>
                  <th>Status</th>
              </tr>
          </thead>
          <tbody>
              {currentData.map((data,index)=>(
              <tr key={data.customerId}>
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
                                  <li><Link to="#" className="dropdown-item"><span className="dropdown-icon"><i className="fa-light fa-pen-to-square"></i></span> Edit</Link></li>
                              <li><Link to="#" className="dropdown-item"><span className="dropdown-icon"><i className="fa-light fa-trash-can"></i></span> Delete</Link></li>
                          </ul>
                      </div>
                  </td>
                  <td>{data.customerId}</td>
                  <td>{data.name}</td>
                  <td>{data.phone}</td>
                  <td>{data.phone}</td>
                  <td>{data.customerType}</td>
                  <td>{data.creditLimit}</td>
                  <td>{data.openingBalance}</td>
                  <td>{data.debit}</td>
                  <td>{data.credit}</td>
                  <td>{data.closingBalance}</td>
                  <td>
                      <div className="form-check form-switch">
                      <Form.Check type="switch" checked={data.isChecked || false} onChange={() => handleCheckboxChange(index)} />                                        
                      </div>
                  </td>
              </tr>  
              ))}
              
          
          </tbody>
      </table>
    }
        <PaginationSection currentPage={currentPage} totalPages={totalPages} paginate={paginate} pageNumbers={pageNumbers}/>
    </>
  )
}

export default CustomerTable