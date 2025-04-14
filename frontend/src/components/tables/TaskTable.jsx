import React, { useContext, useState } from 'react';
import { taskData } from '../../data/Data';
import { DigiContext } from '../../context/DigiContext';
import { Form } from 'react-bootstrap';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import PaginationSection from './PaginationSection';
import { Link } from 'react-router-dom';

const TaskTable = () => {
  const { handleShow, handleViewTaskModalShow } = useContext(DigiContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);
  const [dataList, setDataList] = useState(taskData);
  
  const handleDelete = (id) => {
    setDataList((prevData) => prevData.filter((data) => data.id !== id));
  };
  
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
  
  const handleStatusChange = (index, value) => {
    const dataIndex = indexOfFirstData + index;
    const updatedData = [...dataList];
    updatedData[dataIndex].status = value;
    setDataList(updatedData);
  };
  
  const handlePriorityChange = (index, value) => {
    const dataIndex = indexOfFirstData + index;
    const updatedData = [...dataList];
    updatedData[dataIndex].priority = value;
    setDataList(updatedData);
  };
  
  return (
    <>
    <OverlayScrollbarsComponent>
        <table className="table table-dashed table-hover digi-dataTable task-table table-striped" id="taskTable">
            <thead>
                <tr>
                    <th className="no-sort">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="markAllLeads"/>
                        </div>
                    </th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Start Date</th>
                    <th>Due Date</th>
                    <th>Assigned To</th>
                    <th>Priority</th>
                    <th>Action</th>
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
                <Link
                    role="button"
                    className="text-decoration-underline"
                    data-bs-toggle="modal"
                    data-bs-target="#viewTaskModal"
                    onClick={handleViewTaskModalShow}
                >
                    {data.taskName}
                </Link>
                </td>
                <td>
                <Form.Select
                    className="form-control form-control-sm"
                    value={data.status}
                    onChange={(e) => handleStatusChange(index, e.target.value)}
                >
                    <option value="not-started">Not Started</option>
                    <option value="pending">Pending</option>
                    <option value="on-hold">On Hold</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </Form.Select>
                </td>
                <td>{data.startDate}</td>
                <td>{data.dueDate}</td>
                <td>
                <div className="avatar-box">{data.assignedTo}</div>
                </td>
                <td>
                <Form.Select
                    className="form-control form-control-sm"
                    value={data.priority}
                    onChange={(e) => handlePriorityChange(index, e.target.value)}
                >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                </Form.Select>
                </td>
                <td>
                <div className="btn-box">
                    <button
                    className="btn btn-sm btn-icon btn-primary"
                    onClick={handleShow}
                    data-bs-toggle="modal"
                    data-bs-target="#editTaskModal"
                    >
                    <i className="fa-light fa-edit"></i>
                    </button>
                    <button
                    className="btn btn-sm btn-icon btn-danger"
                    onClick={handleDelete}
                    >
                    <i className="fa-light fa-trash-can"></i>
                    </button>
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

export default TaskTable