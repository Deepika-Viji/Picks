import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import '../../assets/css/EditCalculation.css';  // Update the path if necessary
import { useNavigate, useParams } from 'react-router-dom';

const EditModel = () => {
  const { id } = useParams();  // Get the model ID from the URL params
  const navigate = useNavigate();
  const [model, setModel] = useState({
    model: '',
    pm: '',
    max_support: '',
    ip: '',
    pci: '',
    '1u': '',
    '2u': '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchModel = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/api/calculate/models/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch model');
        }
        const data = await response.json();
        setModel(data);
      } catch (error) {
        Swal.fire('Error', 'Failed to fetch model', 'error');
      } finally {
        setLoading(false);
      }
    };
    fetchModel();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setModel((prevModel) => ({
      ...prevModel,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/calculate/models/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(model),
      });
      if (!response.ok) {
        throw new Error('Failed to update model');
      }
      Swal.fire('Success', 'The model has been updated.', 'success');
      navigate('/manage-calculations');
    } catch (error) {
      Swal.fire('Error', 'Failed to update model', 'error');
    }
  };

  return (
    <div className="edit-model-container">
      <h1>Edit Model</h1>
      {loading ? (
        <p>Loading model...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Model</label>
            <input
              type="text"
              name="model"
              value={model.model}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>PM</label>
            <input
              type="text"
              name="pm"
              value={model.pm}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Max Support</label>
            <input
              type="text"
              name="max_support"
              value={model.max_support}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>IP</label>
            <input
              type="text"
              name="ip"
              value={model.ip}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>PCI</label>
            <input
              type="text"
              name="pci"
              value={model.pci}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>1U</label>
            <input
              type="text"
              name="1u"
              value={model['1u']}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>2U</label>
            <input
              type="text"
              name="2u"
              value={model['2u']}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="save-btn">Save Changes</button>
        </form>
      )}
    </div>
  );
};

export default EditModel;
