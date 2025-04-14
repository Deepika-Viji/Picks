import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';
import '../../assets/css/EditCalculation.css'; 

const EditTable = () => {
  const { id } = useParams();  // Get the table ID from the URL params
  const navigate = useNavigate();
  const [table, setTable] = useState({
    Model: '',
    'Product Type': '',
    Resolution: '',
    Bitrate: '',
    Framerate: '',
    RM: '',
    MEM: '',
    CPU: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTable = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/api/calculate/tables/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch table');
        }
        const data = await response.json();
        setTable(data);
      } catch (error) {
        Swal.fire('Error', 'Failed to fetch table', 'error');
      } finally {
        setLoading(false);
      }
    };
    fetchTable();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTable((prevTable) => ({
      ...prevTable,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/calculate/tables/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(table),
      });
      if (!response.ok) {
        throw new Error('Failed to update table');
      }
      Swal.fire('Success', 'The table has been updated.', 'success');
      navigate('/manage-calculations');
    } catch (error) {
      Swal.fire('Error', 'Failed to update table', 'error');
    }
  };

  return (
    <div className="edit-table-container">
      <h1>Edit Table</h1>
      {loading ? (
        <p>Loading table...</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Model</label>
            <input
              type="text"
              name="Model"
              value={table.Model}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Product Type</label>
            <input
              type="text"
              name="Product Type"
              value={table['Product Type']}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Resolution</label>
            <input
              type="text"
              name="Resolution"
              value={table.Resolution}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Bitrate</label>
            <input
              type="text"
              name="Bitrate"
              value={table.Bitrate}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Framerate</label>
            <input
              type="text"
              name="Framerate"
              value={table.Framerate}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>RM</label>
            <input
              type="text"
              name="RM"
              value={table.RM}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>MEM</label>
            <input
              type="text"
              name="MEM"
              value={table.MEM}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>CPU</label>
            <input
              type="text"
              name="CPU"
              value={table.CPU}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="save-btn">Save Changes</button>
        </form>
      )}
    </div>
  );
};

export default EditTable;
