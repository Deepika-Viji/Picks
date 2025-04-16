import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../../assets/css/UserConfigurations.css';
import { useAuth } from '../../context/AuthContext';
import api from '../../config/api';

const UserConfigurations = () => {
  const [configurations, setConfigurations] = useState([]);
  const [loading, setLoading] = useState(true);
  const { authToken, userId } = useAuth();
  const navigate = useNavigate();

  const fetchConfigurations = useCallback(async () => {
    try {
      setLoading(true);
      setConfigurations([]);
      
      if (!authToken) return;
      
      const response = await axios.get(`${api.baseUrl}/api/configurations/user`, {
        headers: { Authorization: `Bearer ${authToken}` },
        params: { _: new Date().getTime() }
      });
      
      setConfigurations(response.data);
    } catch (error) {
      console.error('Error fetching configurations:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to load your configurations'
      });
    } finally {
      setLoading(false);
    }
  }, [authToken]);

  useEffect(() => {
    fetchConfigurations();
  }, [fetchConfigurations, userId]);

  const handleViewDetails = (id) => {
    navigate(`/configuration/${id}`);
  };

  const handleDeleteConfiguration = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`${api.baseUrl}/api/configurations/${id}`, {
          headers: { Authorization: `Bearer ${authToken}` }
        });
        
        Swal.fire(
          'Deleted!',
          'Your configuration has been deleted.',
          'success'
        );
        
        fetchConfigurations();
      } catch (error) {
        console.error('Error deleting configuration:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to delete configuration'
        });
      }
    }
  };

  const handleEditConfiguration = (config) => {
    const inputCounts = {
      HDMI: 0,
      SDI: 0,
      IP: 0
    };
    config.channels.forEach(channel => {
      if (channel.type === 'HDMI') inputCounts.HDMI++;
      if (channel.type === 'SDI') inputCounts.SDI++;
      if (channel.type === 'IP Inputs') inputCounts.IP++;
    });
  
    navigate('/products', { 
      state: { 
        isEdit: true,
        isEditFromConfigurations: true, // Add this flag
        editConfigId: config._id,
        isEditFromConfigurations: true,
        partCode: config.partCode,
        selectedHardware: config.hardware,
        selectedApplication: config.application,
        channels: config.channels,
        numChannels: config.channels.length,
        networkPort: config.network.ports.toString(),
        throughput: config.network.throughput.toString(),
        storageType: config.storage?.type || '',
        storageCapacity: config.storage?.capacity || 'Default',
        totalModelName: config.model,
        totalRM: config.totals.rm,
        totalMEM: config.totals.memory,
        totalCPU: config.totals.cpu,
        usedInputTypes: inputCounts,
        remainingHDMI: 16 - inputCounts.HDMI,
        remainingSDI: 24 - inputCounts.SDI,
        remainingIP: 24 - inputCounts.IP
      }
    });
  };

  // Helper functions
const calculateInputTypeCounts = (channels) => {
  const counts = { HDMI: 0, SDI: 0, IP: 0 };
  channels.forEach(channel => {
    if (channel.type === 'HDMI') counts.HDMI++;
    if (channel.type === 'SDI') counts.SDI++;
    if (channel.type === 'IP Inputs') counts.IP++;
  });
  return counts;
};

const countInputType = (channels, type) => {
  return channels.filter(channel => channel.type === type).length;
};

  // const handleRefresh = () => {
  //   fetchConfigurations();
  // };

  if (loading) return <div className="loading">Loading your configurations...</div>;

  return (
    <div className="user-configurations-container">
      <div className="header-with-refresh">
        <h3>My Saved Configurations</h3>
        {/* <button 
          className="btn-refresh"
          onClick={handleRefresh}
          disabled={loading}
        >
          {loading ? 'Refreshing...' : 'Refresh'}
        </button> */}
      </div>
      
      {configurations.length === 0 ? (
        <div className="no-configurations">
          <p>You haven't saved any configurations yet.</p>
          <button 
            className="btn-primary"
            onClick={() => navigate('/products')}
          >
            Create New Configuration
          </button>
        </div>
      ) : (
        <div className="configurations-list">
          {configurations.map((config) => (
            <div key={config._id} className="configuration-card">
              <div className="configuration-header">
                <h3>{config.hardware} - {config.application}</h3>
                <span className="configuration-date">
                  {new Date(config.createdAt).toLocaleDateString()}
                </span>
              </div>

              <div className="detail-item">
                  <span className="detail-label">Hardware:</span>
                  <span>{config.hardware}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Application:</span>
                  <span>{config.application}</span>
                </div>
              <div className="configuration-details">
                <div className="detail-item">
                  <span className="detail-label">Model:</span>
                  <span>{config.model || 'N/A'}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Channels:</span>
                  <span>{config.channels.length}</span>
                </div>
              </div>
              
              <div className="configuration-actions">
                <button 
                  className="btn-view"
                  onClick={() => handleViewDetails(config._id)}
                >
                  View Details
                </button>
                <button 
                  className="btn-edit"
                  onClick={() => handleEditConfiguration(config)}
                >
                  Edit
                </button>
                <button 
                  className="btn-delete"
                  onClick={() => handleDeleteConfiguration(config._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserConfigurations;