import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import api from '../../config/api';
import '../../assets/css/NewTableandModel.css';

const CreateNewTable = () => {
  const [tableData, setTableData] = useState({
    Model: '',
    'Product Type': '',
    Resolution: '',
    Bitrate: '',
    Framerate: '',
    RM: '',
    MEM: '',
    CPU: '',
  });

  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTableData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are empty
    const allFieldsEmpty = Object.values(tableData).every((val) => val.trim() === '');
    if (allFieldsEmpty) {
      Swal.fire('Error', 'Please fill at least one field!', 'error');
      return; // Prevent form submission if all fields are empty
    }

    // Prepare cleaned data for submission
    const cleanedData = Object.fromEntries(
      Object.entries(tableData).map(([key, value]) => [key, value.trim() || ''])
    );

    try {
      const response = await fetch(`${api.baseUrl}/api/calculate/tables`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cleanedData),
      });

      if (response.ok) {
        console.log('Success response from API');
        Swal.fire('Success!', 'Table created successfully', 'success').then(() => {
          console.log('Redirecting after success');
          setRedirect(true); // Set redirect state to true
        });
      } else {
        console.error('Failed to create table');
        Swal.fire('Error', 'Something went wrong', 'error');
      }
    } catch (error) {
      console.error('Error in API call:', error);
      Swal.fire('Error', 'Something went wrong', 'error');
    }
  };

  useEffect(() => {
    console.log('Redirect state:', redirect); // Log the redirect state

    if (redirect) {
      console.log('Redirecting...');
      navigate('/manage-calculations'); // Navigate after the SweetAlert
    }
  }, [redirect, navigate]);

  return (
    <div>
      <h2>Create New Table</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Model"
          value={tableData.Model}
          onChange={handleChange}
          placeholder="Model"
        />
        <input
          type="text"
          name="Product Type"
          value={tableData['Product Type']}
          onChange={handleChange}
          placeholder="Product Type"
        />
        <input
          type="text"
          name="Resolution"
          value={tableData.Resolution}
          onChange={handleChange}
          placeholder="Resolution"
        />
        <input
          type="text"
          name="Bitrate"
          value={tableData.Bitrate}
          onChange={handleChange}
          placeholder="Bitrate"
        />
        <input
          type="text"
          name="Framerate"
          value={tableData.Framerate}
          onChange={handleChange}
          placeholder="Framerate"
        />
        <input
          type="text"
          name="RM"
          value={tableData.RM}
          onChange={handleChange}
          placeholder="RM"
        />
        <input
          type="text"
          name="MEM"
          value={tableData.MEM}
          onChange={handleChange}
          placeholder="MEM"
        />
        <input
          type="text"
          name="CPU"
          value={tableData.CPU}
          onChange={handleChange}
          placeholder="CPU"
        />
        <button type="submit">Create Table</button>
      </form>
    </div>
  );
};

export default CreateNewTable;
