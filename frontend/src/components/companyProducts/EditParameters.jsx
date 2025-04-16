import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../../assets/css/EditParameter.css'
import api from '../../config/api';

const EditParameter = () => {
  const { id } = useParams(); // Get the parameter ID from the URL
  const [formData, setFormData] = useState({ Frontend: '', Backend: '' }); // Use uppercase 'Frontend' and 'Backend'
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the existing parameter data
    axios.get(`${api.baseUrl}/api/picksparameters/${id}`)
      .then(response => {
        setFormData(response.data);
      })
      .catch(() => {
        Swal.fire({ icon: 'error', title: 'Error', text: 'Error fetching parameter data.' });
      });
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  // Handle form submission to update the parameter
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`${api.baseUrl}/api/picksparameters/${id}`, formData)
      .then(() => {
        Swal.fire({ icon: 'success', title: 'Success', text: 'Parameter updated successfully!' });
        navigate('/manage-parameters'); // Redirect back to the parameter list
      })
      .catch(() => {
        Swal.fire({ icon: 'error', title: 'Error', text: 'Error updating parameter.' });
      });
  };

  // Handle the back button click
  const handleBack = () => {
    navigate('/manage-parameters'); // Navigate back to manage-parameters page
  };

  return (
    <div className="edit-parameter-container">
      <h2>Edit Parameter</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Frontend Value:</label>
          <input
            type="text"
            name="Frontend" // Use uppercase 'Frontend'
            value={formData.Frontend} // Use uppercase 'Frontend'
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Backend Value:</label>
          <input
            type="text"
            name="Backend" // Use uppercase 'Backend'
            value={formData.Backend} // Use uppercase 'Backend'
            onChange={handleChange}
            required
          />
        </div>
        <div className="button-container">
          <button type="submit" className="save-changes">Save Changes</button>
          <button type="button" className="back" onClick={() => navigate('/manage-parameters')}>Back</button>

        </div>
      </form>
    </div>
  );
};

export default EditParameter;
