import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../../assets/css/ConfigurationDetail.css';
import { useAuth } from '../../context/AuthContext';

const ConfigurationDetail = () => {
  const [configuration, setConfiguration] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { authToken, userId } = useAuth();
  const navigate = useNavigate();

  const fetchConfiguration = async () => {
    try {
      setLoading(true);
      setConfiguration(null);
      
      if (!authToken) {
        navigate('/');
        return;
      }

      const response = await axios.get(`http://localhost:5000/api/configurations/${id}`, {
        headers: { Authorization: `Bearer ${authToken}` }
      });
      setConfiguration(response.data);
    } catch (error) {
      console.error('Error fetching configuration:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.response?.data?.error || 'Failed to load configuration details'
      });
      navigate('/my-configurations');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConfiguration();
  }, [id, authToken, userId]);

  if (loading) return <div className="loading-container"><div className="loading-text">Loading configuration details...</div></div>;
  if (!configuration) return <div className="not-found-container"><div className="not-found-text">Configuration not found</div></div>;

  return (
    <div className="configuration-detail-container">
      <button 
        className="btn-back"
        onClick={() => navigate('/my-configurations')}
      >
        &larr; Back to My Configurations
      </button>

      <h3>Configuration Details</h3>
      
      <div className="configuration-summary">
  {/* Left Column (First 5 Items) */}
  <div className="left-column">
  <div className="summary-item">
      <span className="summary-label">Created At:</span>
      <span className="summary-value">{new Date(configuration.createdAt).toLocaleString()}</span>
    </div>
    <div className="summary-item">
      <span className="summary-label">Hardware:</span>
      <span className="summary-value">{configuration.hardware}</span>
    </div> 
    <div className="summary-item">
      <span className="summary-label">Application:</span>
      <span className="summary-value"> {configuration.application}</span>
    </div> 
    <div className="summary-item">
      <span className="summary-label">Total RM:</span>
      <span className="summary-value"> {configuration.totals.rm.toFixed(2)}</span>
    </div> 
  </div>

  {/* Right Column (Last 4 Items) */}
  <div className="right-column">
    <div className="summary-item">
      <span className="summary-label">Model Name:</span>
      <span className="summary-value">{configuration.model}</span>
    </div>
  <div className="summary-item">
      <span className="summary-label">Part Code:</span>
      <span className="summary-value">{configuration.partCode}</span>
    </div>
    {configuration.storage && (
  <div className="summary-item">
    <span className="summary-label">Storage Type:</span>
    <span className="summary-value">
      {configuration.storage.capacity} - {configuration.storage.type}
    </span>
  </div>
)}
    <div className="summary-item">
      <span className="summary-label">Network Type:</span>
      <span className="summary-value">{configuration.network.ports} x {configuration.network.throughput} GIG</span>
    </div>
    <div className="summary-item">
      <span className="summary-label">License:</span>
      <span className="summary-value"> Versa (demo)</span>
    </div>
  </div>
</div>

      
      {/* <div className="configuration-totals">
        <h3>Totals</h3>
        <div className="totals-grid">
          <div className="total-item">
            <span className="total-label">RM:</span>
            <span className="total-value">{configuration.totals.rm.toFixed(2)}</span>
          </div>
          <div className="total-item">
            <span className="total-label">Memory:</span>
            <span className="total-value">{configuration.totals.memory} GB</span>
          </div>
          <div className="total-item">
            <span className="total-label">CPU:</span>
            <span className="total-value">{configuration.totals.cpu}</span>
          </div>
        </div>
      </div> */}

      <div className="configuration-channels">
        <h3>Channels ({configuration.channels.length})</h3>
        <div className="channels-list">
          {configuration.channels.map((channel, index) => (
            <div key={index} className="channel-card">
              <h4>Channel {index + 1}</h4>
              <div className="channel-details">
                <div className="channel-row">
                  <span className="channel-label">Type:</span>
                  <span className="channel-value">
                    {channel.type === 'IP Inputs' ? `IP Inputs- ${channel.ipType || 'N/A'}` : channel.type || 'N/A'}
                  </span>
                </div>
                {channel.type === 'IP Inputs' && (
                  <div className="channel-row">
                    <span className="channel-label">IP Type:</span>
                    <span className="channel-value">{channel.ipType || 'N/A'}</span>
                  </div>
                )}
                <div className="channel-row">
                  <span className="channel-label">Secondary Type:</span>
                  <span className="channel-value">{channel.secondaryType || 'N/A'}</span>
                </div>
                <div className="channel-row">
                  <span className="channel-label">RM:</span>
                  <span className="channel-value numeric">{channel.rm}</span>
                </div>
                <div className="channel-row">
                  <span className="channel-label">Memory:</span>
                  <span className="channel-value numeric">{channel.memory} GB</span>
                </div>
                <div className="channel-row">
                  <span className="channel-label">CPU:</span>
                  <span className="channel-value numeric">{channel.cpu}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConfigurationDetail;