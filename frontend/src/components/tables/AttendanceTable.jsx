import React, { useState } from 'react'
import { attendanceData } from '../../data/Data'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import PaginationSection from './PaginationSection';

const AttendanceTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(10);
    const dataList = attendanceData
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
    <OverlayScrollbarsComponent>
        <table className="table table-dashed table-hover digi-dataTable attendance-table table-striped" id="attendanceTable">
            <thead>
                <tr>
                    <th className="no-sort">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="markAllAttendance"/>
                        </div>
                    </th>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Employee ID</th>
                    <th>Division</th>
                    <th>Check In - Check Out</th>
                    <th>Status</th>
                    <th>Shift</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {currentData.map((data)=>(
                    <tr key={data.employeeId}>
                        <td>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox"/>
                            </div>
                        </td>
                        <td>{data.date}</td>
                        <td>{data.name}</td>
                        <td>{data.employeeId}</td>
                        <td>{data.division}</td>
                        <td>08:30 AM - 04:30 PM</td>
                        <td><span className="badge bg-success rounded">On Time</span></td>
                        <td>{data.shift}</td>
                        <td>
                            <div className="btn-box">
                                <button className="btn btn-sm btn-icon btn-primary"><i className="fa-light fa-edit"></i></button>
                                <button className="btn btn-sm btn-icon btn-danger"><i className="fa-light fa-trash-can"></i></button>
                            </div>
                        </td>
                    </tr>  
                ))}
            
            </tbody>
        </table>
    </OverlayScrollbarsComponent>
    <PaginationSection currentPage={currentPage} totalPages={totalPages} paginate={paginate} pageNumbers={pageNumbers}/>   
    </>
  )
}

export default AttendanceTable