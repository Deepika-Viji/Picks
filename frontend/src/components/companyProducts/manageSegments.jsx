import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // For alerts
import '../../assets/css/manageSegment.css';

const ManageSegments = () => {
  const [hardwareSegments, setHardwareSegments] = useState([]);
  const [applicationSegments, setApplicationSegments] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentSegment, setCurrentSegment] = useState(null);

  const [segmentType, setSegmentType] = useState(""); 
  const [name, setName] = useState(""); 
  const [products, setProducts] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const [showCreateForm, setShowCreateForm] = useState(false); // Toggle create form visibility

  useEffect(() => {
    fetchSegments();
  }, []);

  const fetchSegments = () => {
    setLoading(true); // Set loading to true when fetching data

    // Fetch hardware segments
    axios.get('http://localhost:5000/api/hardware')
      .then(response => setHardwareSegments(response.data))
      .catch(() => Swal.fire('Error', 'Error fetching hardware data.', 'error'))
      .finally(() => setLoading(false)); // Set loading to false after fetching

    // Fetch application segments
    axios.get('http://localhost:5000/api/application')
      .then(response => setApplicationSegments(response.data))
      .catch(() => Swal.fire('Error', 'Error fetching application data.', 'error'))
      .finally(() => setLoading(false)); // Set loading to false after fetching
  };

  const handleEdit = (segment, type) => {
    setIsEditing(true);
    setShowCreateForm(true); // Ensure the form is visible when editing
    setSegmentType(type);
    setCurrentSegment(segment);
    setName(segment.name);
    setProducts(segment.products.join(', '));

    // Scroll to the top of the page when editing
    window.scrollTo(0, 0); 
  };

  const handleDelete = (id, type) => {
    const url = type === 'hardware'
      ? `http://localhost:5000/api/hardware/${id}`
      : `http://localhost:5000/api/application/${id}`;

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(url)
          .then(() => {
            fetchSegments();
            Swal.fire('Deleted!', 'Segment has been deleted.', 'success');
          })
          .catch(() => Swal.fire('Error', 'Error deleting segment.', 'error'));
      }
    });
  };

  const handleSave = () => {
    // Check if segment type is selected
    if (!segmentType) {
      Swal.fire('Error', 'Please select a segment type (Hardware or Application).', 'error');
      return; // Prevent save if no segment type selected
    }

    // Check if name and products are filled in
    if (!name || !products) {
      Swal.fire('Error', 'Please provide both a segment name and products.', 'error');
      return;
    }

    // Split products into an array and remove any leading/trailing spaces
    const productList = products.split(',')
      .map(product => product.trim())
      .filter(product => product !== ""); // Ensure no empty strings are added

    // Data object to send to the API
    const data = { name, products: productList };

    // Determine the URL based on segment type (creating new segment)
    const url = segmentType === 'hardware'
      ? 'http://localhost:5000/api/hardware'
      : 'http://localhost:5000/api/application';

    // If editing an existing segment
    const request = currentSegment
      ? axios.put(`${url}/${currentSegment._id}`, data) // Edit existing segment
      : axios.post(url, data); // Create new segment

    setLoading(true); // Start loading state

    request
      .then(() => {
        fetchSegments(); // Fetch the updated segments list
        resetForm(); // Reset form after successful operation
        Swal.fire('Success!', `${currentSegment ? 'Edited' : 'Created'} successfully`, 'success');
      })
      .catch(error => {
        // Handle error during save operation
        Swal.fire('Error', error.response?.data?.message || 'Error saving segment.', 'error');
      })
      .finally(() => setLoading(false)); // End loading state
  };

  const resetForm = () => {
    setIsEditing(false);
    setShowCreateForm(false); // Hide form after save or cancel
    setCurrentSegment(null);
    setName('');
    setProducts('');
    setSegmentType('');
  };

  const handleCancel = () => {
    resetForm();
    setShowCreateForm(false); // Hide the form when canceling
  };

  return (
    <div className="manage-segments">
      <h1>Configure Hardware and Application Segments</h1>

      {/* Button to toggle the create segment form */}
      <div className="create-segment-btn">
        <button onClick={() => { 
          resetForm(); 
          setShowCreateForm(true); // Show form when creating new segment
        }}>
          Create New Segment
        </button>
      </div>

      {/* Only show the form if "Create New Segment" is clicked */}
      {showCreateForm && (
        <div className="segment-form">
          <h2>{isEditing ? 'Edit Segment' : 'Create New Segment'}</h2>
          <label htmlFor="segmentType">Segment Type</label>
          <select 
            id="segmentType"
            value={segmentType} 
            onChange={e => setSegmentType(e.target.value)}
            disabled={loading}
          >
            <option value="">Select Segment Type</option>
            <option value="hardware">Hardware</option>
            <option value="application">Application</option>
          </select>

          <label htmlFor="segmentName">Segment Name</label>
          <input
            id="segmentName"
            type="text"
            placeholder="Segment Name"
            value={name}
            onChange={e => setName(e.target.value)}
            disabled={loading}
          />

          <label htmlFor="products">Products (comma-separated)</label>
          <input
            id="products"
            type="text"
            placeholder="Products (comma-separated)"
            value={products}
            onChange={e => setProducts(e.target.value)}
            disabled={loading}
          />

          <button onClick={handleSave} disabled={loading}>
            {isEditing ? 'Save Changes' : 'Create Segment'}
          </button>
          <button onClick={handleCancel} className="cancel-button" disabled={loading}>
            Cancel
          </button>
        </div>
      )}

      <h2>Hardware Segments</h2>
      {loading ? (
        <p>Loading hardware segments...</p>
      ) : (
        <ul>
          {hardwareSegments.map(segment => (
            <li key={segment._id}>
              <span>{segment.name} (Products: {segment.products.join(', ')})</span>
              <div className="button-container">
                <button onClick={() => handleEdit(segment, 'hardware')} disabled={loading}>Edit</button>
                <button onClick={() => handleDelete(segment._id, 'hardware')} disabled={loading}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <h2>Application Segments</h2>
      {loading ? (
        <p>Loading application segments...</p>
      ) : (
        <ul>
          {applicationSegments.map(segment => (
            <li key={segment._id}>
              <span>{segment.name} (Products: {segment.products.join(', ')})</span>
              <div className="button-container">
                <button onClick={() => handleEdit(segment, 'application')} disabled={loading}>Edit</button>
                <button onClick={() => handleDelete(segment._id, 'application')} disabled={loading}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ManageSegments;
