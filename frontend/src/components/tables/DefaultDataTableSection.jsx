import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { allCustomerData } from '../../data/Data';
import { Link } from 'react-router-dom';
import DataTableFilter from '../filter/DataTableFilter';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import PaginationSection from './PaginationSection';

const DefaultDataTableSection = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(10);
    const dataList = allCustomerData
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
    <div className="col-12">
        <div className="card">
            <div className="card-header">
                Default Data Table
            </div>
            <DataTableFilter/>
            <div className="card-body">
                <OverlayScrollbarsComponent>
                    <Table className="table table-dashed table-hover digi-dataTable table-striped" id="componentDataTable">
                        <thead>
                            <tr>
                                <th className="no-sort">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox"/>
                                    </div>
                                </th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Last Active</th>
                                <th>Date Registered</th>
                                <th>Email</th>
                                <th>Orders</th>
                                <th>Total Spend</th>
                                <th>AOV</th>
                                <th>Country / Region</th>
                                <th>City</th>
                                <th>Region</th>
                                <th>Postal Code</th>
                            </tr>
                        </thead>
                        <tbody>
            
                            {currentData.map((data) => (
                                <tr key={data.userName}>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox"/>
                                        </div>
                                    </td>
                                    <td><Link to="#">{data.name}</Link></td>
                                    <td>{data.userName}</td>
                                    <td>{data.lastActive}</td>
                                    <td>{data.dateRegistered}</td>
                                    <td><Link to="#">{data.email}</Link></td>
                                    <td>{data.orders}</td>
                                    <td>${data.totalSpent}</td>
                                    <td>${data.aov}</td>
                                    <td>BD</td>
                                    <td>{data.city}</td>
                                    <td>CA</td>
                                    <td>{data.postalCode}</td>
                                </tr>  
                            ))}
                            
                        </tbody>
                    </Table>
                </OverlayScrollbarsComponent>
                <PaginationSection currentPage={currentPage} totalPages={totalPages} paginate={paginate} pageNumbers={pageNumbers}/>
            </div>
        </div>
    </div>
  )
}

export default DefaultDataTableSection