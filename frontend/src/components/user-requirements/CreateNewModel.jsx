import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../../assets/css/NewTableandModel.css'; 

const CreateNewModel = () => {
  const [modelData, setModelData] = useState({
    model: '',
    pm: '',
    max_support: '',
    ip: '',
    pci: '',
    '1u': '',
    '2u': '',
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setModelData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are empty
    const allFieldsEmpty = Object.values(modelData).every(val => val.trim() === '');
    if (allFieldsEmpty) {
      Swal.fire('Error', 'Please fill at least one field!', 'error');
      return; // Prevent submitting the form if all fields are empty
    }

    // Clean the data to allow empty strings for missing values
    const cleanedData = Object.fromEntries(
      Object.entries(modelData).map(([key, value]) => [key, value.trim() || ''])
    );

    try {
      const response = await fetch('http://localhost:5000/api/calculate/models', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cleanedData),
      });

      if (response.ok) {
        Swal.fire('Success!', 'Model created successfully', 'success').then(() => {
          navigate('/manage-calculations'); // Reroute to manage-calculations upon success
        });
      } else {
        throw new Error('Failed to create model');
      }
    } catch (error) {
      Swal.fire('Error', 'Something went wrong', 'error');
    }
  };

  return (
    <div>
      <h2>Create New Model</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="model"
          value={modelData.model}
          onChange={handleChange}
          placeholder="Model"
        />
        <input
          type="text"
          name="pm"
          value={modelData.pm}
          onChange={handleChange}
          placeholder="PM"
        />
        <input
          type="text"
          name="max_support"
          value={modelData.max_support}
          onChange={handleChange}
          placeholder="Max Support"
        />
        <input
          type="text"
          name="ip"
          value={modelData.ip}
          onChange={handleChange}
          placeholder="IP"
        />
        <input
          type="text"
          name="pci"
          value={modelData.pci}
          onChange={handleChange}
          placeholder="PCI"
        />
        <input
          type="text"
          name="1u"
          value={modelData['1u']}
          onChange={handleChange}
          placeholder="1U"
        />
        <input
          type="text"
          name="2u"
          value={modelData['2u']}
          onChange={handleChange}
          placeholder="2U"
        />
        <button type="submit">Create Model</button>
      </form>
    </div>
  );
};

export default CreateNewModel;
