import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import '../../assets/css/ManageParameter.css'

const BackendParametersPage = () => {
  const [picksParameters, setPicksParameters] = useState([]);

  useEffect(() => {
    // Fetch picksparameters data
    axios.get('http://localhost:5000/api/picksparameters')
      .then(response => {
        setPicksParameters(response.data);
      })
      .catch(() => {
        Swal.fire({ icon: 'error', title: 'Error', text: 'Error fetching picksparameters data.' });
      });
  }, []);

  return (
    <div className="parameters-container">
      <h2>Backend Parameters</h2>
      <table>
        <thead>
          <tr>
            <th>Frontend</th>
            <th>Backend</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {picksParameters.map((param) => (
            <tr key={param._id}>
              <td>{param.Frontend}</td> {/* Display Frontend value */}
              <td>{param.Backend}</td> {/* Display Backend value */}
              {/* Add the Edit Link */}
              <td>
                <Link to={`/edit-parameter/${param._id}`} className="edit-link">
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BackendParametersPage;

