import React, { useContext, useEffect, useRef, useState } from 'react';
import { leadsData } from '../../data/Data';
import { Link } from 'react-router-dom';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import PaginationSection from './PaginationSection';
import { DigiContext } from '../../context/DigiContext';

const LeadsTable = () => {
  const { isBelowLg } = useContext(DigiContext) 
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);
  const [dataList, setDataList] = useState(
    leadsData.map((data) => ({ ...data, showDropdown: false }))
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
      {isBelowLg? (
        <OverlayScrollbarsComponent>
        <table className="table table-dashed table-hover digi-dataTable leads-table table-striped" id="leadsTable">
          <thead>
            <tr>
              <th className="no-sort">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="markAllLeads" />
                </div>
              </th>
              <th>Action</th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Company</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((data, index) => (
              <tr key={data.id}>
                <td>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                  </div>
                </td>
                <td>
                  <div ref={dropdownRef} className="digi-table-dropdown digi-dropdown dropdown d-inline-block">
                    <button
                      className={`btn btn-sm btn-outline-primary ${data.showDropdown ? 'show' : ''}`}
                      onClick={(event) => handleDropdownToggle(event, index)}
                    >
                      Action <i className="fa-regular fa-angle-down"></i>
                    </button>
                    <ul
                      className={`digi-scroll-dropdown digi-dropdown-menu dropdown-menu dropdown-slim dropdown-menu-sm ${
                        data.showDropdown ? 'show' : ''
                      }`}
                    >
                      <li>
                        <Link to="#" className="dropdown-item">
                          <span className="dropdown-icon">
                            <i className="fa-light fa-pen-to-square"></i>
                          </span>{' '}
                          Edit
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          <span className="dropdown-icon">
                            <i className="fa-light fa-trash-can"></i>
                          </span>{' '}
                          Delete
                        </Link>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>{data.name}</td>
                <td>{data.address}</td>
                <td>{data.phone}</td>
                <td>{data.email}</td>
                <td>{data.company}</td>
                <td>{data.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </OverlayScrollbarsComponent>
      ):(
        <table className="table table-dashed table-hover digi-dataTable leads-table table-striped" id="leadsTable">
          <thead>
            <tr>
              <th className="no-sort">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="markAllLeads" />
                </div>
              </th>
              <th>Action</th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Company</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((data, index) => (
              <tr key={data.id}>
                <td>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" />
                  </div>
                </td>
                <td>
                  <div ref={dropdownRef} className="digi-dropdown dropdown d-inline-block">
                     <button
                        className={`btn btn-sm btn-outline-primary ${data.showDropdown ? 'show' : ''}`}
                        onClick={(event) => handleDropdownToggle(event, index)}
                      >
                      Action <i className="fa-regular fa-angle-down"></i>
                    </button>
                    <ul
                      className={`digi-dropdown-menu dropdown-menu dropdown-slim dropdown-menu-sm ${
                        data.showDropdown ? 'show' : ''
                      }`}
                    >
                      <li>
                        <Link to="#" className="dropdown-item">
                          <span className="dropdown-icon">
                            <i className="fa-light fa-pen-to-square"></i>
                          </span>{' '}
                          Edit
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className="dropdown-item">
                          <span className="dropdown-icon">
                            <i className="fa-light fa-trash-can"></i>
                          </span>{' '}
                          Delete
                        </Link>
                      </li>
                    </ul>
                  </div>
                </td>
                <td>{data.name}</td>
                <td>{data.address}</td>
                <td>{data.phone}</td>
                <td>{data.email}</td>
                <td>{data.company}</td>
                <td>{data.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      
      <PaginationSection currentPage={currentPage} totalPages={totalPages} paginate={paginate} pageNumbers={pageNumbers} />
    </>
  );
};

export default LeadsTable;
