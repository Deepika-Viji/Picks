import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../../assets/css/AllUsers.css';
import { FaPlus } from 'react-icons/fa'; // Import the plus icon
import api from '../../config/api';

const AllUsers = () => {
  const [users, setUsers] = useState([]); // Users for the current page
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limit, setLimit] = useState(10); // Items per page

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${api.baseUrl}/api/users/all`, {
          params: {
            page: currentPage,
            limit: limit,
            searchTerm: searchTerm, // Pass searchTerm to backend
          },
        });

        setUsers(response.data.users);  // Set users for the current page
        setTotalPages(response.data.totalPages);  // Total pages from backend
        setLoading(false);
      } catch (err) {
        console.error('Error fetching users:', err);
        setError('Failed to load users');
        setLoading(false);
      }
    };

    fetchUsers();
  }, [currentPage, limit, searchTerm]); // Add searchTerm as dependency to refetch when search changes

  const handleEditClick = (userId) => {
    navigate('/createNewUser', { state: { userId } });
  };

  const handleDeleteClick = async (userId) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`${api.baseUrl}/api/users/${userId}`);
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
        Swal.fire('Deleted!', 'The user has been deleted.', 'success');
        setSuccessMessage('User deleted successfully');
        setError(null);
      } catch (error) {
        console.error('Error deleting user:', error);
        Swal.fire('Error', 'Failed to delete user', 'error');
        setError('Failed to delete user');
        setSuccessMessage('');
      }
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return; // Prevent invalid page numbers
    setCurrentPage(newPage); // Update current page
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="user-list-error">{error}</div>;

  return (
    <div className="user-list-container">
      <h3>User List</h3>

      {successMessage && <div className="success-message">{successMessage}</div>}
      {error && <div className="error-message">{error}</div>}

      <div className="user-actions">
        <input
          type="text"
          className="search-input"
          placeholder="Search by username, email, token number, or role"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on change
        />

        {/* Create New User Button with Plus Icon */}
        <button
          className="create-new-user-button"
          onClick={() => navigate('/createnewuser')}
        >
          <FaPlus style={{ marginRight: '8px' }} /> {/* Plus icon added here */}
          Create New User
        </button>
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Token Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user, index) => (
              <tr key={user._id}>
                <td>{(currentPage - 1) * limit + index + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.tokenNumber}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => handleEditClick(user._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteClick(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">
                {searchTerm ? 'No users found matching your search' : 'No users found'}
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="pagination-controls">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllUsers;
