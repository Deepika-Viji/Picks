import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import api from '../../config/api';
import '../../assets/css/manageCalculation.css'; 
import ManageModels from './ManageModels';
import ManageTables from './ManageTables';

const ManageCalculations = () => {
  const [models, setModels] = useState([]);
  const [tables, setTables] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPicksModelsAndTables();
  }, []);

  const fetchPicksModelsAndTables = async () => {
    try {
      setLoading(true);

      // Fetch models
      const modelsResponse = await fetch(`${api.baseUrl}/api/calculate/models`);
      if (!modelsResponse.ok) {
        throw new Error('Failed to fetch models');
      }
      const modelsData = await modelsResponse.json();

      // Fetch tables
      const tablesResponse = await fetch(`${api.baseUrl}/api/calculate/tables`);
      if (!tablesResponse.ok) {
        throw new Error('Failed to fetch tables');
      }
      const tablesData = await tablesResponse.json();

      setModels(modelsData);
      setTables(tablesData);
    } catch (error) {
      console.error('Error fetching models and tables:', error);
      Swal.fire('Error', 'Failed to fetch models and tables', 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteModel = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`${api.baseUrl}/api/calculate/models/${id}`, { method: 'DELETE' });
          if (!response.ok) {
            throw new Error('Failed to delete model');
          }
          setModels((prevModels) => prevModels.filter((model) => model._id !== id));
          Swal.fire('Deleted!', 'The model has been deleted.', 'success');
        } catch (error) {
          console.error('Error deleting model:', error);
          Swal.fire('Error', 'Failed to delete model', 'error');
        }
      }
    });
  };

  const handleDeleteTable = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`${api.baseUrl}/api/calculate/tables/${id}`, { method: 'DELETE' });
          if (!response.ok) {
            throw new Error('Failed to delete table');
          }
          setTables((prevTables) => prevTables.filter((table) => table._id !== id));
          Swal.fire('Deleted!', 'The table has been deleted.', 'success');
        } catch (error) {
          console.error('Error deleting table:', error);
          Swal.fire('Error', 'Failed to delete table', 'error');
        }
      }
    });
  };

  const handleEditModel = (id) => {
    navigate(`/edit/model/${id}`);
  };

  const handleEditTable = (id) => {
    navigate(`/edit/table/${id}`);
  };

  return (
    <div className="manage-calculations-container">
      <h1>Configure Model Table and Algorithm Table</h1>

      {/* Add Create New Model and Table buttons */}
      <div className="buttons-container">
        <button onClick={() => navigate('/create-model')}>Create New Model Table</button>
        <button onClick={() => navigate('/create-table')}>Create New Algorithm Table</button>
      </div>

      {loading ? (
        <div className="loading-spinner">
          <p>Loading Model Table and Algorithm Table...</p>
          {/* You can replace this with a spinner or loading animation */}
        </div>
      ) : (
        <div className="manage-calculations-tables-container">
          <div className="manage-calculations-models">
            <h2>Model Table</h2>
            <ManageModels models={models} handleDelete={handleDeleteModel} handleEdit={handleEditModel} />
          </div>

          <div className="manage-calculations-tables">
            <h2>Algorithm Table</h2>
            <ManageTables tables={tables} handleDelete={handleDeleteTable} handleEdit={handleEditTable} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageCalculations;
