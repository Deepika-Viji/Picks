import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../assets/css/Products.css';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
}

const UserProducts = () => {
  const [state, setState] = useState(() => {
    const defaultState = {
      selectedHardware: '',
      selectedApplication: '',
      numChannels: 0,
      channels: [],
      totalRM: 0,
      totalMEM: 0,
      totalCPU: 0,
      totalModelName: 'N/A',
      networkPort: '2',
      throughput: '1',
      storageType: '',
      storageCapacity: '1 × 1TB',
      endConfigurationEarly: false
    };

    // First check for location state (higher priority)
    const locationState = JSON.parse(sessionStorage.getItem('locationState'));
    if (locationState) {
      sessionStorage.removeItem('locationState');
      return {
        ...defaultState,
        selectedHardware: locationState.selectedHardware || defaultState.selectedHardware,
        selectedApplication: locationState.selectedApplication || defaultState.selectedApplication,
        channels: locationState.channels || [],
        numChannels: locationState.numChannels || 0,
      };
    }

    // Fall back to localStorage with user-specific keys
    const userId = localStorage.getItem('userId');
    if (!userId) return defaultState;

    return Object.keys(defaultState).reduce((acc, key) => {
      const value = localStorage.getItem(`${userId}_${key}`);
      return {
        ...acc,
        [key]: value
          ? (key === 'channels'
            ? JSON.parse(value)
            : key === 'numChannels' ||
              key === 'totalRM' ||
              key === 'totalMEM' ||
              key === 'totalCPU'
              ? parseFloat(value)
              : key === 'endConfigurationEarly'
                ? value === 'true'
                : value)
          : defaultState[key]
      };
    }, defaultState);
  });

  const [hardwareData, setHardwareData] = useState({});
  const [applicationData, setApplicationData] = useState({});
  const [modelData, setModelData] = useState([]);
  const [previousChannels, setPreviousChannels] = useState([]);
  const [userId, setUserId] = useState(null);
  const [hoveredButton, setHoveredButton] = useState(null);
  const [isAddingMoreChannels, setIsAddingMoreChannels] = useState(false);
  const [loading, setLoading] = useState({
    hardware: false,
    application: false,
    submission: false

  });
  const [usedInputTypes, setUsedInputTypes] = useState({
    HDMI: 0,
    SDI: 0,
    IP: 0
  });

  const navigate = useNavigate();
  const location = useLocation();

  // Check authentication status on component mount
  useEffect(() => {
    const verifyAuth = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        // Clear state and redirect
        setState({
          selectedHardware: '',
          selectedApplication: '',
          numChannels: 0,
          channels: [],
          totalRM: 0,
          totalMEM: 0,
          totalCPU: 0,
          totalModelName: 'N/A',
          networkPort: '2',
          throughput: '1',
          storageType: '',
          storageCapacity: '',
          endConfigurationEarly: false
        });
        navigate('/');
        return;
      }

      try {
        const response = await axios.get('http://localhost:5000/api/auth/verify', {
          headers: { Authorization: `Bearer ${token}` }
        });
        localStorage.setItem('userId', response.data.userId);
        setUserId(response.data.userId);
      } catch (error) {
        console.error('Auth verification failed:', error);
        localStorage.clear();
        navigate('/');
      }
    };

    verifyAuth();
  }, [navigate]);


  useEffect(() => {
    return () => {
      // This cleanup runs when component unmounts or userId changes
      Object.keys(localStorage).forEach(key => {
        if (key !== 'token') localStorage.removeItem(key);
      });
    };
  }, [userId]);

  // Add this useEffect right after your other useEffects in UserProducts.jsx
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      // Clear any existing channel data if not authenticated
      setState({
        selectedHardware: '',
        selectedApplication: '',
        numChannels: 0,
        channels: [],
        totalRM: 0,
        totalMEM: 0,
        totalCPU: 0,
        totalModelName: 'N/A',
        networkPort: '2',
        throughput: '1',
        storageType: '',
        storageCapacity: '',
        endConfigurationEarly: false
      });
      navigate('/');
    }
  }, [navigate]);

  // Handle location state updates
  useEffect(() => {
    if (location.state && Object.keys(location.state).length > 0) {
      const newState = {
        selectedHardware: location.state.selectedHardware || state.selectedHardware,
        selectedApplication: location.state.selectedApplication || state.selectedApplication,
        channels: location.state.channels || state.channels,
        numChannels: location.state.numChannels || state.numChannels,
      };

      sessionStorage.setItem('locationState', JSON.stringify(newState));
      setState(prev => ({ ...prev, ...newState }));

      if (location.state.channels) {
        calculateTotals(location.state.channels);
      }

      navigate(location.pathname, { state: {}, replace: true });
    }
  }, [location.state, navigate]);

  useEffect(() => {
    const counts = {
      HDMI: 0,
      SDI: 0,
      IP: 0
    };
  
    state.channels.forEach(channel => {
      if (channel.type === 'HDMI') counts.HDMI++;
      if (channel.type === 'SDI') counts.SDI++;
      if (channel.type === 'IP Inputs') counts.IP++; // This should match exactly
    });
  
    setUsedInputTypes(counts);
  }, [state.channels]);


  // Persist state to localStorage
  useEffect(() => {
    if (!sessionStorage.getItem('locationState')) {
      const userId = localStorage.getItem('userId');
      if (userId) {
        Object.keys(state).forEach(key => {
          localStorage.setItem(
            `${userId}_${key}`,
            typeof state[key] === 'object' ? JSON.stringify(state[key]) : state[key].toString()
          );
        });
      }
    }
  }, [state]);


  // Enhanced API call wrapper with token handling
  const makeAuthenticatedRequest = async (requestFn) => {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No token found in localStorage');
      navigate('/');
      throw new Error('Authentication required');
    }

    try {
      // First verify token is still valid
      await axios.get('http://localhost:5000/api/auth/verify', {
        headers: { Authorization: `Bearer ${token}` }
      }).catch(() => {
        localStorage.clear();
        navigate('/');
        throw new Error('Session expired');
      });

      // Make the actual request
      return await requestFn(token);
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.clear();
        navigate('/');
      }
      throw error;
    }
  };

  const fetchHardwareAndApplicationData = useCallback(async () => {
    setLoading(prev => ({ ...prev, hardware: true, application: true }));

    try {
      await makeAuthenticatedRequest(async (token) => {
        const [hardwareResponse, applicationResponse, modelResponse] = await Promise.all([
          axios.get('http://localhost:5000/api/hardware', {
            headers: { Authorization: `Bearer ${token}` }
          }),
          axios.get('http://localhost:5000/api/application', {
            headers: { Authorization: `Bearer ${token}` }
          }),
          axios.get('http://localhost:5000/api/calculate/models', {
            headers: { Authorization: `Bearer ${token}` }
          }),
        ]);

        setHardwareData(
          hardwareResponse.data.reduce((acc, item) => ({ ...acc, [item.name]: item.products }), {})
        );
        setApplicationData(
          applicationResponse.data.reduce((acc, item) => ({ ...acc, [item.name]: item.products }), {})
        );
        setModelData(modelResponse.data);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      if (error.message !== 'Authentication required') {
        Swal.fire({
          icon: 'error',
          title: 'Loading Error',
          text: 'Failed to load hardware and application data.'
        });
      }
    } finally {
      setLoading(prev => ({ ...prev, hardware: false, application: false }));
    }
  }, [navigate]);


  const fetchPreviousChannels = useCallback(async () => {
    try {
      await makeAuthenticatedRequest(async (token) => {
        const response = await axios.get('http://localhost:5000/api/channels', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setPreviousChannels(response.data);
      });
    } catch (error) {
      console.error('Error fetching previous channels:', error);
      if (error.message !== 'Authentication required') {
        Swal.fire({
          icon: 'warning',
          title: 'Warning',
          text: 'Could not load previous channel configurations.'
        });
      }
    }
  }, [navigate]);


  useEffect(() => {
    fetchHardwareAndApplicationData();
    fetchPreviousChannels();
  }, [fetchHardwareAndApplicationData, fetchPreviousChannels]);


  const handleAddNewChannel = useCallback(() => {
    const remainingHDMI = 16 - usedInputTypes.HDMI;
    const remainingSDI = 24 - usedInputTypes.SDI;
    const remainingIP = 24 - usedInputTypes.IP;

    if (state.channels.length < state.numChannels) {
      navigate('/requirements', {
        state: {
          selectedHardware: state.selectedHardware,
          selectedApplication: state.selectedApplication,
          numChannels: state.numChannels,
          currentChannel: state.channels.length + 1,
          channels: state.channels,
          previousChannels,
          isAddingMore: false,
          usedInputTypes, // Pass current counts
          remainingHDMI,
          remainingSDI,
          remainingIP
        },
      });
    } else {
      Swal.fire({
        title: 'Initial Channels Complete',
        text: `You've created all ${state.numChannels} requested channels. Add more?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, add more',
        cancelButtonText: 'No, finish',
      }).then((result) => {
        if (result.isConfirmed) {
          setIsAddingMoreChannels(true);
          navigate('/requirements', {
            state: {
              numChannels: state.numChannels,
              currentChannel: state.channels.length + 1,
              channels: state.channels,
              previousChannels,
              isAddingMore: true,
              usedInputTypes, // Pass current counts
              remainingHDMI,
              remainingSDI,
              remainingIP
            },
          });
        } else {
          setState(prev => ({ ...prev, endConfigurationEarly: true }));
        }
      });
    }
  }, [state.channels, state.numChannels, state.selectedHardware, state.selectedApplication, navigate, previousChannels, usedInputTypes]);

  const roundToNext32 = useCallback((mem) => {
    return mem < 16 ? 16 : Math.ceil(mem / 32) * 32;
  }, []);

  const calculateTotals = useCallback((channels = []) => {
    const totals = channels.reduce((acc, channel) => ({
      rm: acc.rm + parseFloat(channel.rm || 0),
      memory: acc.memory + parseFloat(channel.memory || 0),
      cpu: acc.cpu + parseFloat(channel.cpu || 0)
    }), { rm: 0, memory: 0, cpu: 0 });

    setState(prev => ({
      ...prev,
      totalRM: totals.rm,
      totalMEM: roundToNext32(totals.memory),
      totalCPU: totals.cpu
    }));

    fetchClosestModel(totals.rm);
  }, [roundToNext32]);

  const fetchClosestModel = async (totalRM) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/calculate/models/closest?totalRM=${totalRM}`
      );
      if (response.data?.modelName) {
        setState(prev => ({ ...prev, totalModelName: response.data.modelName }));
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Failed to fetch closest model:', error);
      Swal.fire({
        icon: 'error',
        title: 'Model Detection Failed',
        text: 'Could not determine the closest model. Please check your configuration.',
      });
    }
  };

  const handleHardwareChange = (e) => {
    setState(prev => ({
      ...prev,
      selectedHardware: e.target.value,
      selectedApplication: '',
      numChannels: 0,
      channels: []
    }));
  };

  const handleApplicationChange = (e) => {
    setState(prev => ({
      ...prev,
      selectedApplication: e.target.value,
      channels: []
    }));
  };

  const handleNumChannelsChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^\d*$/.test(value)) {
      const numValue = value === "" ? 0 : parseInt(value, 10);
      if (numValue <= 24) {
        setState(prev => ({ ...prev, numChannels: numValue }));
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Limit Exceeded',
          text: 'Maximum 24 channels allowed.'
        });
      }
    }
  };

  const handleStorageTypeChange = (e) => {
    setState(prev => ({
      ...prev,
      storageType: e.target.value,
      storageCapacity: ''
    }));
  };

  const handleStorageCapacityChange = (e) => {
    setState(prev => ({ ...prev, storageCapacity: e.target.value }));
  };

  const handleNetworkChange = (field, value) => {
    setState(prev => ({ ...prev, [field]: value }));
  };

  const handleCopyChannel = useCallback((index) => {
    const channelToCopy = state.channels[index];
    const inputType = channelToCopy.type;
  
    // Check remaining capacity for this input type
    const remainingByType = {
      HDMI: 16 - usedInputTypes.HDMI,
      SDI: 24 - usedInputTypes.SDI,
      'IP Inputs': 24 - usedInputTypes.IP  // Changed to match exactly with the channel type
    };
  
    const remainingChannels = Math.min(
      state.numChannels - state.channels.length,
      24 - state.channels.length,
      remainingByType[inputType] || 0
    );
  
    if (remainingChannels <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'Limit Reached',
        text: `Cannot copy more ${inputType} channels (max ${inputType === 'HDMI' ? 16 : 24} allowed)`,
        footer: `Current usage: ${usedInputTypes[inputType === 'IP Inputs' ? 'IP' : inputType]} of ${inputType === 'HDMI' ? 16 : 24}`
      });
      return;
    }
  
    Swal.fire({
      title: 'Copy Channel',
      text: `How many copies? (Up to ${remainingChannels})`,
      input: 'number',
      inputAttributes: {
        min: 1,
        max: remainingChannels,
        step: 1
      },
      showCancelButton: true,
      confirmButtonText: 'Copy',
      inputValidator: (value) => {
        if (!value || value < 1 || value > remainingChannels) {
          return `Please enter a number between 1 and ${remainingChannels}!`;
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const copies = parseInt(result.value);
        const copiedChannels = Array(copies).fill().map(() => ({ ...channelToCopy }));
        const updatedChannels = [...state.channels, ...copiedChannels];
        setState(prev => ({ ...prev, channels: updatedChannels }));
        calculateTotals(updatedChannels);
        
        Swal.fire({
          icon: 'success',
          title: 'Copied!',
          text: `Added ${copies} ${inputType} channel${copies > 1 ? 's' : ''}`,
          timer: 1500
        });
      }
    });
  }, [state.channels, state.numChannels, usedInputTypes]);


  const handleEditChannel = useCallback((index) => {
    const channelToEdit = state.channels[index];
    const remainingHDMI = 16 - usedInputTypes.HDMI + (channelToEdit.type === 'HDMI' ? 1 : 0);
    const remainingSDI = 24 - usedInputTypes.SDI + (channelToEdit.type === 'SDI' ? 1 : 0);
    const remainingIP = 24 - usedInputTypes.IP + (channelToEdit.type === 'IP Inputs' ? 1 : 0);

    navigate('/requirements', {
      state: {
        selectedHardware: state.selectedHardware,
        selectedApplication: state.selectedApplication,
        numChannels: state.numChannels,
        currentChannel: index + 1,
        channels: state.channels,
        editIndex: index,
        selectedChannel: { ...channelToEdit },
        usedInputTypes,
        remainingHDMI,
        remainingSDI,
        remainingIP
      },
    });
  }, [state.channels, state.numChannels, state.selectedHardware, state.selectedApplication, navigate, usedInputTypes]);

  const handleDeleteChannel = useCallback((index) => {
    const updatedChannels = state.channels.filter((_, i) => i !== index);
    setState(prev => ({ ...prev, channels: updatedChannels }));
    calculateTotals(updatedChannels);
    Swal.fire('Deleted', 'Channel has been removed!', 'success');
  }, [state.channels]);


  const handleSubmitAllChannels = async () => {
    if (loading.submission) return;

    const token = localStorage.getItem('token'); // Move this line up

    try {
      if (!token) {
        Swal.fire({
          icon: 'error',
          title: 'Session Expired',
          text: 'Please log in again'
        });
        navigate('/');
        return;
      }

      // Verify token is still valid
      await axios.get('http://localhost:5000/api/auth/verify', {
        headers: { Authorization: `Bearer ${token}` }
      });
    } catch (error) {
      console.error('Token verification failed:', error);
      localStorage.removeItem('token');
      navigate('/');
      return;
    }

    // Validation checks
    const missingFields = [];
    if (!state.selectedHardware) missingFields.push('hardware selection');
    if (!state.selectedApplication) missingFields.push('application selection');
    if (state.channels.length === 0) missingFields.push('at least one channel');
    if (!state.networkPort) missingFields.push('network port');
    if (!state.throughput) missingFields.push('throughput');
    if (!state.storageType) missingFields.push('storage type');
    if (!state.storageCapacity) missingFields.push('storage capacity');

    if (missingFields.length > 0) {
      Swal.fire({
        icon: 'error',
        title: 'Missing Information',
        html: `Please complete the following:<br><br>• ${missingFields.join('<br>• ')}`
      });
      return;
    }

    setLoading(prev => ({ ...prev, submission: true }));

    try {
      // Calculate input configuration codes
      const inputCounts = {
        SDI: 0,
        HDMI: 0
      };
  
      state.channels.forEach(channel => {
        if (channel.type === 'SDI') inputCounts.SDI++;
        if (channel.type === 'HDMI') inputCounts.HDMI++;
      });
  
      // Determine if this is an encode or decode configuration
      const isDecode = state.selectedHardware.toLowerCase().includes('decode');
      
      // Generate SDI part
      let sdiPart = '';
      if (inputCounts.SDI > 0) {
        if (isDecode) {
          // DECODE SDI OUTPUT CONFIGURATION
          if (inputCounts.SDI <= 1) sdiPart = 'RD11';
          else if (inputCounts.SDI <= 2) sdiPart = 'RD12';
          else if (inputCounts.SDI <= 4) sdiPart = 'RD14';
          else if (inputCounts.SDI <= 8) sdiPart = 'RD18';
          else if (inputCounts.SDI <= 12) sdiPart = 'RD14RD18';
          else if (inputCounts.SDI <= 16) sdiPart = 'RD28';
          else if (inputCounts.SDI <= 24) sdiPart = 'RD38';
        } else {
          // ENCODE SDI INPUT CONFIGURATION (original code)
          if (inputCounts.SDI <= 1) sdiPart = 'R11';
          else if (inputCounts.SDI <= 2) sdiPart = 'R12';
          else if (inputCounts.SDI <= 4) sdiPart = 'R14';
          else if (inputCounts.SDI <= 8) sdiPart = 'R18';
          else if (inputCounts.SDI <= 12) sdiPart = 'R14R18';
          else if (inputCounts.SDI <= 16) sdiPart = 'R28';
          else if (inputCounts.SDI <= 24) sdiPart = 'R38';
        }
      }
  
      // Generate HDMI part
      let hdmiPart = '';
      if (inputCounts.HDMI > 0) {
        if (isDecode) {
          // DECODE HDMI OUTPUT CONFIGURATION
          if (inputCounts.HDMI <= 1) hdmiPart = 'HD11';
          else if (inputCounts.HDMI <= 2) hdmiPart = 'HD21';
          else if (inputCounts.HDMI <= 3) hdmiPart = 'HD31';
          else if (inputCounts.HDMI <= 4) hdmiPart = 'HD41';
        } else {
          // ENCODE HDMI INPUT CONFIGURATION (original code)
          if (inputCounts.HDMI <= 1) hdmiPart = 'H11';
          else if (inputCounts.HDMI <= 2) hdmiPart = 'H14';
          else if (inputCounts.HDMI <= 4) hdmiPart = 'H14';
          else if (inputCounts.HDMI <= 8) hdmiPart = 'H24';
          else if (inputCounts.HDMI <= 12) hdmiPart = 'H34';
          else if (inputCounts.HDMI <= 16) hdmiPart = 'H44';
        }
      }
  
      // Generate network part
      const networkPart = `${state.networkPort}x${state.throughput}GIG`;
  
      // Generate storage part
      const storageConfig = state.storageCapacity.replace(/ × /g, 'x').replace(/TB/g, '');
      const storagePart = `${storageConfig}${state.storageType}`;
  
      // Construct final part code
      const partCode = `${state.totalModelName}${hdmiPart}${sdiPart}${networkPart}${storagePart}`;

      // Prepare data with proper type conversion
      const configurationData = {
        hardware: state.selectedHardware,
        application: state.selectedApplication,
        channels: state.channels.map(channel => ({
          ...channel,
          rm: Number(channel.rm),
          memory: Number(channel.memory),
          cpu: Number(channel.cpu)
        })),
        totals: {
          rm: Number(state.totalRM),
          memory: Number(state.totalMEM),
          cpu: Number(state.totalCPU)
        },
        model: state.totalModelName,
        network: {
          ports: Number(state.networkPort),
          throughput: Number(state.throughput)
        },
        storage: {
          type: state.storageType,
          capacity: state.storageCapacity
        },
        partCode: partCode // Add the generated part code
      };

      // Enhanced request with retry logic
      const response = await axios.post(
        'http://localhost:5000/api/configurations',
        configurationData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          timeout: 15000 // Increased timeout
        }
      );

      Swal.fire({
        icon: 'success',
        title: 'Success!',
        html: `Configuration saved successfully!<br><br>Part Code: <strong>${partCode}</strong>`, 
        timer: 3000
      });
      handleReset();
    } catch (error) {
      console.error('Submission error:', error);

      let errorMessage = 'Failed to save configuration';
      let footer = '';

      if (error.code === 'ECONNABORTED') {
        errorMessage = 'Request timeout - server is not responding';
        footer = 'Please check if the backend server is running';
      } else if (error.response) {
        // Server responded with error status
        errorMessage = error.response.data?.message || errorMessage;
        footer = error.response.data?.details || '';
      } else if (error.request) {
        // No response received
        errorMessage = 'No response from server';
        footer = 'Check your network connection and ensure backend is running';
      }

      Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: errorMessage,
        footer: footer
      });
    } finally {
      setLoading(prev => ({ ...prev, submission: false }));
    }
  };

  const handleReset = () => {
    const resetState = {
      selectedHardware: '',
      selectedApplication: '',
      numChannels: 0,
      channels: [],
      totalRM: 0,
      totalMEM: 0,
      totalCPU: 0,
      totalModelName: 'N/A',
      networkPort: '',
      throughput: '',
      storageType: '',
      storageCapacity: '',
      endConfigurationEarly: false
    };

    setState(resetState);
    setIsAddingMoreChannels(false);
    setHoveredButton(null);

    Object.keys(resetState).forEach(key => localStorage.removeItem(key));
  };

  const handleEndConfigurationEarly = () => {
    Swal.fire({
      title: 'End Configuration Early?',
      text: 'Are you sure you want to finish without adding all channels?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, finish now',
      cancelButtonText: 'Continue editing',
    }).then((result) => {
      if (result.isConfirmed) {
        setState(prev => ({ ...prev, endConfigurationEarly: true }));
      }
    });
  };

  const ChannelTable = ({ channels, onCopy, onEdit, onDelete }) => (
    <table className="channel-table">
      <thead>
        <tr>
          <th>Channel</th>
          <th>Input Type</th>
          <th>Secondary Input</th>
          <th>Profiles</th>
          <th>Output Type</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {channels.map((channel, index) => (
          <tr key={index}>
            <td>Channel {index + 1}</td>
            <td>{channel.type === 'IP Inputs' ? `IP - ${channel.ipType || "N/A"} ` : channel.type || "N/A"}</td>
            <td>{channel.secondaryType || "N/A"}</td>
            <td>
              {Object.entries(channel.resolution || {}).map(([type, instances]) => (
                <div key={type}>
                  {instances.map((instance, i) => (
                    <div key={i}>{type} {i + 1}: {instance.bitrate} Mbps</div>
                  ))}
                </div>
              ))}
            </td>
            <td>
              {channel.protocols
                ? Object.entries(
                  Object.values(channel.protocols).reduce((acc, protocol) => {
                    acc[protocol] = (acc[protocol] || 0) + 1;
                    return acc;
                  }, {})
                ).map(([protocol, count]) => `${protocol} (${count})`).join(", ")
                : "None"}
            </td>
            <td className="action-buttons">
              <button
                onClick={() => onCopy(index)}
                className="action-button copy-button"
                onMouseEnter={() => setHoveredButton(`copy-${index}`)}
                onMouseLeave={() => setHoveredButton(null)}
                aria-label="Copy channel"
              >
                <i className="fas fa-copy"></i>
                {hoveredButton === `copy-${index}` && (
                  <div className="tooltip">Copy</div>
                )}
              </button>
              <button
                onClick={() => onEdit(index)}
                className="action-button edit-button"
                onMouseEnter={() => setHoveredButton(`edit-${index}`)}
                onMouseLeave={() => setHoveredButton(null)}
                aria-label="Edit channel"
              >
                <i className="fas fa-edit"></i>
                {hoveredButton === `edit-${index}` && (
                  <div className="tooltip">Edit</div>
                )}
              </button>
              <button
                onClick={() => onDelete(index)}
                className="action-button delete-button"
                onMouseEnter={() => setHoveredButton(`delete-${index}`)}
                onMouseLeave={() => setHoveredButton(null)}
                aria-label="Delete channel"
              >
                <i className="fas fa-trash"></i>
                {hoveredButton === `delete-${index}` && (
                  <div className="tooltip">Delete</div>
                )}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const NetworkThroughputForm = ({ port, throughput, onChange }) => (
    <div className="network-throughput-container">
      <div className="dropdown-inline-group">
        <div className="form-group">
          <label>Network Port</label>
          <select
            value={port}
            onChange={(e) => onChange('networkPort', e.target.value)}
            className="form-control"
            required
          >
            <option value="">Select Port</option>
            {[2, 4].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Throughput</label>
          <select
            value={throughput}
            onChange={(e) => onChange('throughput', e.target.value)}
            className="form-control"
            required
          >
            <option value="">Select Throughput</option>
            <option value="1">1 GIG</option>
            <option value="10">10 GIG</option>
          </select>
        </div>
      </div>
    </div>
  );

  const StorageForm = ({ type, capacity, onTypeChange, onCapacityChange }) => {
    // Common storage options for both HDD and SSD
    const storageOptions = [
      '1 × 1TB',
      '2 × 2TB',
      '2 × 3TB',
      '4 × 2TB',
      '4 × 3TB',
      '6 × 2TB',
      '6 × 3TB',
      '8 × 2TB',
      '8 × 3TB'
    ];

    return (
      <div className="storage-container">
        <div className="form-group">
          <label>Storage Type</label>
          <select
            value={type}
            onChange={onTypeChange}
            className="form-control"
            required
          >
            <option value="">Select Type</option>
            <option value="HDD">HDD</option>
            <option value="SSD">SSD</option>
          </select>
        </div>
        {(type === 'HDD' || type === 'SSD') && (
          <div className="form-group">
            <label>{type} Configuration</label>
            <select
              value={capacity}
              onChange={onCapacityChange}
              className="form-control"
              required
            >
              <option value="">Select Configuration</option>
              {storageOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    );
  };

  const ChannelActions = ({
    state,
    isAddingMore,
    loading,
    onAddChannel,
    onFinish,
    onReset,
    onSubmit,  // <-- Add comma here
    onEndEarly
  }) => (
    <div className="channels-actions">
      {/* Add Channel Button - shows when channels exist OR numChannels > 0 */}
      {(state.channels.length > 0 || state.numChannels > 0) && (
        <button
          onClick={onAddChannel}
          className="button add-channel-button"
          disabled={loading.submission}
        >
          {isAddingMore
            ? 'Add Another Channel'
            : state.channels.length < state.numChannels
              ? 'Add Next Channel'
              : 'Add More Channels'}
        </button>
      )}

      {/* Finish Button - shows when adding more channels */}
      {isAddingMore && (
        <button
          onClick={onFinish}
          className="button finish-button"
          disabled={loading.submission}
        >
          Finish Adding Channels
        </button>
      )}

      {/* Reset Button - shows when channels exist */}
      {state.channels.length > 0 && (
        <button
          onClick={onReset}
          className="button reset-button"
          disabled={loading.submission}
        >
          Reset
        </button>
      )}

      {/* End Early Button - shows when channels exist but not all added */}
      {state.channels.length > 0 &&
        state.channels.length < state.numChannels &&
        !isAddingMore && (
          <button
            onClick={onEndEarly}
            className="button end-early-button"
            disabled={loading.submission}
          >
            End Configuration Early
          </button>
        )}

      {/* Submit Button - shows only when appropriate */}
      {state.channels.length > 0 &&
        (state.channels.length >= state.numChannels || state.endConfigurationEarly) &&
        !isAddingMore && (
          <button
            onClick={onSubmit}
            className="button submit-all-button"
            disabled={
              !state.networkPort ||
              !state.throughput ||
              !state.storageType ||
              !state.storageCapacity ||
              loading.submission
            }
          >
            {loading.submission ? 'Submitting...' : 'Submit All Channels'}
          </button>
        )}
    </div>
  );

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="menu-container">
        <h1>Select Hardware and Application Segments</h1>

        {/* Hardware/Application Selection */}
        {!state.channels.length && (
          <>
            <div className="dropdown-container">
              <label>Hardware</label>
              <select
                value={state.selectedHardware}
                onChange={handleHardwareChange}
                className="hardware-dropdown"
                disabled={loading.hardware}
              >
                <option value="">{loading.hardware ? 'Loading...' : 'Select Hardware'}</option>
                {Object.keys(hardwareData).map(hardware => (
                  <option key={hardware} value={hardware}>{hardware}</option>
                ))}
              </select>
            </div>

            {state.selectedHardware && (
              <div className="dropdown-container">
                <label>Application</label>
                <select
                  value={state.selectedApplication}
                  onChange={handleApplicationChange}
                  className="application-dropdown"
                  disabled={loading.application}
                >
                  <option value="">{loading.application ? 'Loading...' : 'Select Application'}</option>
                  {Object.keys(applicationData).map(application => (
                    <option key={application} value={application}>{application}</option>
                  ))}
                </select>
              </div>
            )}
          </>
        )}

        {/* Channel Count Input */}
        {state.selectedHardware && state.selectedApplication && !state.channels.length && (
          <div className="channels-container">
            <label>Number of Channels (Max 24)</label>
            <input
              type="number"
              value={state.numChannels || ''}
              onChange={handleNumChannelsChange}
              min="1"
              max="24"
              placeholder="Enter number (1-24)"
              className="channel-input"
            />
            <small className="form-text text-muted">
              Limits: HDMI (max 16), SDI/IP (max 24 each)
            </small>
          </div>
        )}

        {/* Channel Management */}
        {state.channels.length > 0 && (
          <>
            <div className="channel-info">
              <h2>
                Channels Created: {state.channels.length}
                {isAddingMoreChannels
                  ? ' (adding more)'
                  : state.numChannels > 0
                    ? `/${state.numChannels}`
                    : ''}
              </h2>
              {isAddingMoreChannels && (
                <p className="info-note">
                  You're adding additional channels beyond your initial request
                </p>
              )}
            </div>

            <ChannelTable
              channels={state.channels}
              onCopy={handleCopyChannel}
              onEdit={handleEditChannel}
              onDelete={handleDeleteChannel}
            />

            <div className="totals-display">
              <h2>Total RM: {state.totalRM.toFixed(2)}</h2>
              <h2>Total Memory: {state.totalMEM} GB</h2>
              <h2>Recommended Model: {state.totalModelName}</h2>
            </div>
          </>
        )}

        {/* Network/Storage Configuration */}
        {(state.channels.length >= state.numChannels || state.endConfigurationEarly) &&
          !isAddingMoreChannels &&
          state.channels.length > 0 && (
            <>
              <NetworkThroughputForm
                port={state.networkPort}
                throughput={state.throughput}
                onChange={handleNetworkChange}
              />

              <StorageForm
                type={state.storageType}
                capacity={state.storageCapacity}
                onTypeChange={handleStorageTypeChange}
                onCapacityChange={handleStorageCapacityChange}
              />
            </>
          )}

        {/* Action Buttons */}
        <ChannelActions
          state={state}
          isAddingMore={isAddingMoreChannels}
          loading={loading}
          onAddChannel={handleAddNewChannel}
          onFinish={() => setIsAddingMoreChannels(false)}
          onReset={handleReset}
          onSubmit={handleSubmitAllChannels}
          onEndEarly={handleEndConfigurationEarly}
        />
      </div>
    </ErrorBoundary>
  );
};

export default UserProducts;