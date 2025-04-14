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
  const [state, setState] = useState({
    selectedHardware: '',
    selectedApplication: '',
    numChannels: 0,
    channels: [],
    totalRM: 0,
    totalMEM: 0,
    totalCPU: 0,
    totalModelName: 'N/A',
    unitCount: 'N/A',
    modelPM: '',
    modelG4PM: null,
    modelPCI: '',
    networkPort: '2',
    throughput: '1',
    storageType: '',
    storageCapacity: '1 × 1TB',
    endConfigurationEarly: false,
    isEdit: false,
    editConfigId: null,
    partCode: '',
    showG4Alternatives: false,
    g4ModelName: '',
    g4ModelPM: '',
    g4UnitCount: '',
    createdAtIST: '',
    updatedAtIST: '',
    teleportType: '',
    asiPorts: '1',
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

  // Initialize state from localStorage or location state
  useEffect(() => {
    const locationState = location.state || {};
    if (locationState.isEdit) {
      setState(prev => ({
        ...prev,
        ...locationState,
        isEdit: true,
        editConfigId: locationState.editConfigId,
        partCode: locationState.partCode || '',
        selectedHardware: locationState.selectedHardware || prev.selectedHardware,
        selectedApplication: locationState.selectedApplication || prev.selectedApplication,
        channels: locationState.channels || prev.channels,
        numChannels: locationState.numChannels || prev.numChannels,
        networkPort: locationState.networkPort || prev.networkPort,
        throughput: locationState.throughput || prev.throughput,
        storageType: locationState.storageType || prev.storageType,
        storageCapacity: locationState.storageCapacity || prev.storageCapacity,
        totalModelName: locationState.totalModelName || prev.totalModelName,
        totalRM: locationState.totalRM || prev.totalRM,
        totalMEM: locationState.totalMEM || prev.totalMEM,
        totalCPU: locationState.totalCPU || prev.totalCPU,
        endConfigurationEarly: locationState.endConfigurationEarly ?? prev.endConfigurationEarly,
        isAddingMoreChannels: locationState.isAddingMoreChannels ?? prev.isAddingMoreChannels,
        teleportType: locationState.teleportType || prev.teleportType,
        usedInputTypes: locationState.usedInputTypes || calculateInputTypeCounts(locationState.channels || [])
      }));
      return;
    }

    const calculateInputTypeCounts = (channels) => {
      const counts = { HDMI: 0, SDI: 0, IP: 0, ASI: 0 };
      channels.forEach(channel => {
        if (channel.type === 'HDMI') counts.HDMI++;
        if (channel.type === 'SDI') counts.SDI++;
        if (channel.type === 'IP Inputs') counts.IP++;
        if (channel.type === 'ASI') counts.ASI++;
      });
      return counts;
    };

    const formatToIST = (dateString) => {
      if (!dateString) return 'N/A';
      const date = new Date(dateString);
      return date.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    };

    const userId = localStorage.getItem('userId');
    if (!userId) return;

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
      endConfigurationEarly: false,
      isEdit: false,
      editConfigId: null,
      partCode: '',
      teleportType: ''
    };

    const newState = Object.keys(defaultState).reduce((acc, key) => {
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

    setState(newState);
  }, [location.state]);

  // Check authentication status on component mount
  useEffect(() => {
    const verifyAuth = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
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
          endConfigurationEarly: false,
          isEdit: false,
          editConfigId: null,
          partCode: '',
          teleportType: ''
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
      Object.keys(localStorage).forEach(key => {
        if (key !== 'token') localStorage.removeItem(key);
      });
    };
  }, [userId]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
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
        endConfigurationEarly: false,
        isEdit: false,
        editConfigId: null,
        partCode: '',
        teleportType: ''
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
        teleportType: location.state.teleportType || state.teleportType
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
      if (channel.type === 'IP Inputs') counts.IP++;
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

  const makeAuthenticatedRequest = async (requestFn) => {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No token found in localStorage');
      navigate('/');
      throw new Error('Authentication required');
    }

    try {
      await axios.get('http://localhost:5000/api/auth/verify', {
        headers: { Authorization: `Bearer ${token}` }
      }).catch(() => {
        localStorage.clear();
        navigate('/');
        throw new Error('Session expired');
      });

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
    const remainingASI = 4 - usedInputTypes.ASI;
    const remainingIP = Infinity; // No limit for IP
  
    const isActuallyAddingMore = isAddingMoreChannels || state.isEdit;
  
    if (!isActuallyAddingMore && state.channels.length < state.numChannels) {
      navigate('/requirements', {
        state: {
          ...state,
          teleportType: state.teleportType,
          asiPorts: state.asiPorts,
          selectedHardware: state.selectedHardware,
          selectedApplication: state.selectedApplication,
          numChannels: state.numChannels,
          currentChannel: state.channels.length + 1,
          channels: state.channels,
          previousChannels,
          isAddingMore: false,
          usedInputTypes,
          remainingHDMI,
          remainingSDI,
          remainingIP,
          remainingASI,
          networkPort: state.networkPort,
          throughput: state.throughput,
          storageType: state.storageType,
          storageCapacity: state.storageCapacity,
          totalModelName: state.totalModelName,
          totalRM: state.totalRM,
          totalMEM: state.totalMEM,
          totalCPU: state.totalCPU,
          isEdit: state.isEdit,
          editConfigId: state.editConfigId
        }
      });
    } else {
      Swal.fire({
        title: isActuallyAddingMore ? 'Add Another Channel' : 'Initial Channels Complete',
        text: isActuallyAddingMore
          ? 'Add another channel to this configuration?'
          : `You've created all ${state.numChannels} requested channels. Add more?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, add more',
        cancelButtonText: 'No, finish',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/requirements', {
            state: {
              ...state,
              teleportType: state.teleportType,
              asiPorts: state.asiPorts,
              numChannels: state.numChannels,
              currentChannel: state.channels.length + 1,
              channels: state.channels,
              previousChannels,
              isAddingMore: true,
              usedInputTypes,
              remainingHDMI,
              remainingSDI,
              remainingIP,
              remainingASI,
              isEdit: state.isEdit,
              editConfigId: state.editConfigId
            },
          });
        } else if (!state.isEdit) {
          setState(prev => ({ ...prev, endConfigurationEarly: true }));
        }
      });
    }
  }, [state, previousChannels, usedInputTypes, isAddingMoreChannels, navigate]);

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

      if (response.data?.model) {
        const model = response.data.model;
        const pmValue = typeof model.pm === 'string' ? parseFloat(model.pm) : model.pm;
        const g4PMValue = model.g4PM ? (typeof model.g4PM === 'string' ? parseFloat(model.g4PM) : model.g4PM) : null;

        let unitCount = 'N/A';
        if (model.pci) {
          const pciSlots = parseInt(model.pci);
          if (pciSlots === 1) unitCount = 1;
          else if (pciSlots === 2) unitCount = '1 OR 2';
          else if (pciSlots === 3) unitCount = '2 OR 3';
          else if (pciSlots >= 4) unitCount = 3;
        }

        const showG4Alternatives = pmValue > 40000 && g4PMValue > 0;

        setState(prev => ({
          ...prev,
          totalModelName: model.model,
          unitCount: unitCount,
          modelPM: pmValue,
          modelG4PM: g4PMValue,
          modelPCI: model.pci,
          showG4Alternatives: showG4Alternatives,
          g4ModelName: showG4Alternatives ? model.g4Model : '',
          g4ModelPM: showG4Alternatives ? g4PMValue : '',
          g4UnitCount: showG4Alternatives ? unitCount : ''
        }));
      }
    } catch (error) {
      console.error('Error fetching closest model:', error);
      setState(prev => ({
        ...prev,
        totalModelName: 'N/A',
        unitCount: 'N/A',
        modelPM: 0,
        modelG4PM: null,
        modelPCI: '',
        showG4Alternatives: false,
        g4ModelName: '',
        g4ModelPM: '',
        g4UnitCount: ''
      }));
    }
  };

  const handleHardwareChange = (e) => {
    const newHardware = e.target.value;
    setState(prev => ({
      ...prev,
      selectedHardware: newHardware,
      selectedApplication: prev.selectedApplication,
      numChannels: 0,
      channels: [],
      teleportType: '' // Reset teleport type when hardware changes
    }));
  };

  const getFilteredTeleportTypes = () => {
    if (!state.selectedHardware) return [];

    const allTypes = [
      { value: 'inport', label: 'Inport' },
      { value: 'xport', label: 'Xport' }
    ];

    if (state.selectedHardware.toLowerCase().includes('encode')) {
      return allTypes.filter(type => type.value !== 'inport');
    } else if (state.selectedHardware.toLowerCase().includes('decode')) {
      return allTypes.filter(type => type.value !== 'xport');
    }
    return allTypes;
  };

  const handleApplicationChange = (e) => {
    const newApplication = e.target.value;
    setState(prev => ({
      ...prev,
      selectedApplication: newApplication,
      // Only reset teleportType if switching away from Teleport
      teleportType: newApplication === 'Teleport' ? prev.teleportType : '',
      // Don't reset hardware selection
      channels: []
    }));
  };

  const handleTeleportTypeChange = (e) => {
    const newTeleportType = e.target.value;
    setState(prev => ({
      ...prev,
      teleportType: newTeleportType,
      storageType: newTeleportType === 'inport' || newTeleportType === 'xport' ? '' : prev.storageType,
      storageCapacity: newTeleportType === 'inport' || newTeleportType === 'xport' ? '' : prev.storageCapacity,
      // Don't reset hardware selection
      channels: []
    }));
  };

  const handleNumChannelsChange = (e) => {
    const value = e.target.value;
    if (value === "" || /^\d*$/.test(value)) {
      const numValue = value === "" ? 0 : parseInt(value, 10);
      setState(prev => ({ ...prev, numChannels: numValue }));
    }
  };

  const handleStorageTypeChange = (e) => {
    setState(prev => ({
      ...prev,
      storageType: e.target.value,
      storageCapacity: prev.isEdit ? prev.storageCapacity : ''
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
  
    const maxByType = {
      HDMI: 16,
      SDI: 24,
      ASI: 4,
      'IP Inputs': Infinity // No limit for IP
    };
    const maxForType = maxByType[inputType] || Infinity;
  
    const currentTypeCount = state.channels.filter(c => c.type === inputType).length;
    const remainingByType = maxForType - currentTypeCount;
  
    if (inputType === 'HDMI' || inputType === 'SDI') {
      if (remainingByType <= 0) {
        Swal.fire({
          icon: 'error',
          title: 'Limit Reached',
          text: `Cannot copy more ${inputType} channels (max ${maxForType} allowed)`,
        });
        return;
      }
    }
  
    Swal.fire({
      title: 'Copy Channel',
      text: `How many copies would you like to make?`,
      input: 'number',
      inputAttributes: {
        min: 1,
        step: 1
      },
      showCancelButton: true,
      confirmButtonText: 'Copy',
      inputValidator: (value) => {
        if (!value || value < 1) {
          return 'Please enter a valid number!';
        }
        if ((inputType === 'HDMI' || inputType === 'SDI') && value > remainingByType) {
          return `You can only copy ${remainingByType} more ${inputType} channels`;
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
  }, [state.channels]);  

  const handleEditChannel = useCallback((index) => {
    const channelToEdit = state.channels[index];
    const remainingHDMI = 16 - usedInputTypes.HDMI + (channelToEdit.type === 'HDMI' ? 1 : 0);
    const remainingSDI = 24 - usedInputTypes.SDI + (channelToEdit.type === 'SDI' ? 1 : 0);
    const remainingASI = 4 - usedInputTypes.ASI + (channelToEdit.type === 'ASI' ? 1 : 0);
    const remainingIP = Infinity;

    navigate('/requirements', {
      state: {
        ...state,
        teleportType: state.teleportType,
        asiPorts: state.asiPorts,
        selectedHardware: state.selectedHardware,
        selectedApplication: state.selectedApplication,
        numChannels: state.numChannels,
        currentChannel: index + 1,
        channels: state.channels,
        editIndex: index,
        isEdit: true,
        editConfigId: state.editConfigId,
        selectedChannel: { ...channelToEdit },
        usedInputTypes,
        remainingHDMI,
        remainingSDI,
        remainingIP,
        remainingASI,

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

    const token = localStorage.getItem('token');

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

      await axios.get('http://localhost:5000/api/auth/verify', {
        headers: { Authorization: `Bearer ${token}` }
      });

      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      };

      const missingFields = [];

      if (!state.isEdit) {
        if (!state.selectedHardware || state.selectedHardware.trim() === '') {
          missingFields.push('hardware selection');
        }
        if (!state.selectedApplication || state.selectedApplication.trim() === '') {
          missingFields.push('application selection');
        }
      }

      if (state.channels.length === 0) {
        missingFields.push('at least one channel');
      }
      if (!state.networkPort || state.networkPort.trim() === '') {
        missingFields.push('network port');
      }
      if (!state.throughput || state.throughput.trim() === '') {
        missingFields.push('throughput');
      }

      if (state.teleportType !== 'xport' && state.teleportType !== 'inport') {
        if (!state.storageType || state.storageType.trim() === '') {
          missingFields.push('storage type');
        }
        if (!state.storageCapacity || state.storageCapacity.trim() === '') {
          missingFields.push('storage capacity');
        }
      }

      if (missingFields.length > 0) {
        Swal.fire({
          icon: 'error',
          title: 'Missing Information',
          html: `Please complete the following:<br><br>• ${missingFields.join('<br>• ')}`
        });
        return;
      }

      setLoading(prev => ({ ...prev, submission: true }));

      const inputCounts = {
        SDI: 0,
        HDMI: 0,
        ASI: 0
      };

      state.channels.forEach(channel => {
        if (channel.type === 'SDI') inputCounts.SDI++;
        if (channel.type === 'HDMI') inputCounts.HDMI++;
        if (channel.type === 'ASI') inputCounts.ASI++;
      });

      const isDecode = state.selectedHardware.toLowerCase().includes('decode');

      let sdiPart = '';
      if (inputCounts.SDI > 0) {
        if (isDecode) {
          if (inputCounts.SDI === 1) sdiPart = 'RD11';
          else if (inputCounts.SDI === 2) sdiPart = 'RD12';
          else if (inputCounts.SDI <= 4) sdiPart = 'RD14';
          else if (inputCounts.SDI <= 8) sdiPart = 'RD18';
          else if (inputCounts.SDI <= 12) sdiPart = 'RD14RD18';
          else if (inputCounts.SDI <= 16) sdiPart = 'RD28';
          else if (inputCounts.SDI <= 20) sdiPart = 'RD28RD14';
          else if (inputCounts.SDI <= 24) sdiPart = 'RD38';
        } else {
          if (inputCounts.SDI === 1) sdiPart = 'R11';
          else if (inputCounts.SDI === 2) sdiPart = 'R12';
          else if (inputCounts.SDI <= 4) sdiPart = 'R14';
          else if (inputCounts.SDI <= 8) sdiPart = 'R18';
          else if (inputCounts.SDI <= 12) sdiPart = 'R14R18';
          else if (inputCounts.SDI <= 16) sdiPart = 'R28';
          else if (inputCounts.SDI <= 20) sdiPart = 'R28R14';
          else if (inputCounts.SDI <= 24) sdiPart = 'R38';
        }
      }

      let hdmiPart = '';
      if (inputCounts.HDMI > 0) {
        if (isDecode) {
          if (inputCounts.HDMI === 1) hdmiPart = 'HD11';
          else if (inputCounts.HDMI === 2) hdmiPart = 'HD21';
          else if (inputCounts.HDMI === 3) hdmiPart = 'HD31';
          else if (inputCounts.HDMI === 4) hdmiPart = 'HD41';
        } else {
          if (inputCounts.HDMI === 1) hdmiPart = 'H11';
          else if (inputCounts.HDMI === 2) hdmiPart = 'H14';
          else if (inputCounts.HDMI <= 4) hdmiPart = 'H14';
          else if (inputCounts.HDMI <= 8) hdmiPart = 'H24';
          else if (inputCounts.HDMI <= 12) hdmiPart = 'H34';
          else if (inputCounts.HDMI <= 16) hdmiPart = 'H44';
        }
      }

      let asiPart = '';
      if (state.teleportType === 'xport') {
        if (inputCounts.ASI === 1) asiPart = 'A11';
        else if (inputCounts.ASI === 2) asiPart = 'A12';
        else if (inputCounts.ASI <= 4) asiPart = 'A14';
      }

      const networkPart = `${state.networkPort}x${state.throughput}GIG`;

      let storagePart = '';
      if (state.teleportType !== 'xport' && state.teleportType !== 'inport') {
        const storageConfig = state.storageCapacity.replace(/ × /g, 'x').replace(/TB/g, '');
        storagePart = `${storageConfig}${state.storageType}`;
      }

      const partCode = `${state.totalModelName}${hdmiPart}${sdiPart}${asiPart}${networkPart}${storagePart}`;

      setState(prev => ({ ...prev, partCode }));

      const configurationData = {
        hardware: state.selectedHardware,
        application: state.selectedApplication,
        teleportType: state.teleportType,
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
        storage: state.teleportType !== 'xport' ? {
          type: state.storageType,
          capacity: state.storageCapacity
        } : null,
        partCode: partCode,
        modelDetails: {
          name: state.totalModelName,
          pm: state.modelPM,
          g4Pm: state.modelG4PM,
          pci: state.modelPCI
        }
      };

      let response;
      if (state.isEdit && state.editConfigId) {
        response = await axios.put(
          `http://localhost:5000/api/configurations/${state.editConfigId}`,
          configurationData,
          { headers }
        );
      } else {
        response = await axios.post(
          'http://localhost:5000/api/configurations',
          configurationData,
          { headers }
        );
      }

      Swal.fire({
        icon: 'success',
        title: state.isEdit ? 'Configuration Updated!' : 'Configuration Saved!',
        html: `
          Configuration ${state.isEdit ? 'updated' : 'saved'} successfully!<br><br>
          Part Code: <strong>${partCode}</strong><br>
        `,
        timer: 3000
      }).then(() => {
        if (state.isEdit) {
          navigate('/my-configurations');
        }
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
        errorMessage = error.response.data?.message || errorMessage;
        footer = error.response.data?.details || '';
      } else if (error.request) {
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
      endConfigurationEarly: false,
      isEdit: false,
      editConfigId: null,
      partCode: '',
      teleportType: ''
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
        setState(prev => ({
          ...prev,
          endConfigurationEarly: true,
          numChannels: prev.channels.length
        }));
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

  const NetworkThroughputForm = ({ port, throughput, onChange, isTeleport }) => (
    <div className="network-throughput-container">
      <div className="dropdown-inline-group">
        <div className="form-group">
          <label>Network Port {!port && <span className="required-field">*</span>}</label>
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
          {!port && <small className="text-danger">Network port is required</small>}
        </div>
        <div className="form-group">
          <label>Throughput {!throughput && <span className="required-field">*</span>}</label>
          <select
            value={throughput}
            onChange={(e) => onChange('throughput', e.target.value)}
            className="form-control"
            required
            disabled={isTeleport} // Disable if Teleport
          >
            <option value="">Select Throughput</option>
            <option value="1">1 GIG</option>
            {!isTeleport && <option value="10">10 GIG</option>}
          </select>
          {!throughput && <small className="text-danger">Throughput is required</small>}
          {/* {isTeleport && <small className="text-info">Teleport only supports 1 GIG</small>} */}
        </div>
      </div>
    </div>
  );

  const StorageForm = ({ type, capacity, onTypeChange, onCapacityChange }) => {
    const storageOptions = [
      '1 × 2TB',
      '2 × 2TB',
      '3 × 2TB',
      '1 × 4TB',
      '2 × 4TB',
      '3 × 4TB',
      '1 × 8TB',
      '2 × 8TB',
      '3 × 8TB',
    ];


    return (
      <div className="storage-container">
        <div className="form-group">
          <label>Storage Type {!type && <span className="required-field">*</span>}</label>
          <select
            value={type}
            onChange={(e) => {
              console.log('Storage type selected:', e.target.value);
              onTypeChange(e);
            }}
            className="form-control"
            required
          >
            <option value="">Select Type</option>
            <option value="HDD">HDD</option>
            <option value="SSD">SSD</option>
          </select>
          {!type && <small className="text-danger">Storage type is required</small>}
        </div>
        {(type === 'HDD' || type === 'SSD') && (
          <div className="form-group">
            <label>{type} Configuration {!capacity && <span className="required-field">*</span>}</label>
            <select
              value={capacity}
              onChange={(e) => {
                console.log('Storage capacity selected:', e.target.value);
                onCapacityChange(e);
              }}
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
            {!capacity && <small className="text-danger">Storage configuration is required</small>}
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
    onSubmit,
    onEndEarly
  }) => {
    const isSubmitDisabled = (state.teleportType === 'xport' || state.teleportType === 'inport')
      ? !state.networkPort || !state.throughput || loading.submission
      : !state.networkPort || !state.throughput || !state.storageType || !state.storageCapacity || loading.submission;

    return (
      <div className="channels-actions">
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

        {isAddingMore && (
          <button
            onClick={onFinish}
            className="button finish-button"
            disabled={loading.submission}
          >
            Finish Adding Channels
          </button>
        )}

        {state.channels.length > 0 && (
          <button
            onClick={onReset}
            className="button reset-button"
            disabled={loading.submission}
          >
            Reset
          </button>
        )}

        {state.channels.length > 0 &&
          state.channels.length < state.numChannels &&
          !state.endConfigurationEarly && (  // Add this condition
            <button
              onClick={onEndEarly}
              className="button end-early-button"
              disabled={loading.submission}
            >
              End Configuration Early
            </button>
          )}

        {state.channels.length > 0 &&
          (state.channels.length >= state.numChannels || state.endConfigurationEarly) &&
          !isAddingMore && (
            <button
              onClick={onSubmit}
              className="button submit-all-button"
              disabled={isSubmitDisabled}
            >
              {loading.submission ? 'Submitting...' : 'Submit All Channels'}
            </button>
          )}
      </div>
    );
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="menu-container">
        <h1>
          {state.isEdit ? 'Edit Configuration' : 'Create Configuration'}
          {state.isEdit && (
            <span className="edit-badge">
              Editing: {state.partCode || 'Configuration'}
            </span>
          )}
        </h1>

        {!state.channels.length && (
          <>
            {/* Hardware Dropdown - Always shown first */}
            <div className="dropdown-container">
              <label>Hardware</label>
              <select
                value={state.selectedHardware}
                onChange={handleHardwareChange}
                className="hardware-dropdown"
                disabled={loading.hardware || state.isEdit}
              >
                <option value="">{loading.hardware ? 'Loading...' : 'Select Hardware'}</option>
                {Object.keys(hardwareData).map(hardware => (
                  <option key={hardware} value={hardware}>{hardware}</option>
                ))}
              </select>
            </div>

            {/* Application Dropdown - Only shown after hardware is selected */}
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

            {/* Modify the Teleport Type dropdown section to: */}
            {state.selectedApplication === 'Teleport' && (
              <div className="dropdown-container">
                <label>Teleport Type</label>
                <select
                  value={state.teleportType}
                  onChange={handleTeleportTypeChange}
                  className="teleport-type-dropdown"
                  required
                >
                  <option value="">Select Teleport Type</option>
                  {getFilteredTeleportTypes().map(type => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </>
        )}

        {/* Channel Count Input */}
        {state.selectedHardware && state.selectedApplication && !state.channels.length && (
          <div className="channels-container">
            <label>Number of Channels </label>
            <input
              type="number"
              value={state.numChannels || ''}
              onChange={handleNumChannelsChange}
              min="1"
              max="24"
              placeholder="Enter number"
              className="channel-input"
            />
            <small className="small-text">
              Limits: HDMI (max 16), SDI (max 24)
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

            {(state.channels.length >= state.numChannels || state.endConfigurationEarly) && (
              <div className="totals-display">
                <h2>Model{state.showG4Alternatives ? ' Option' : ''}: {state.totalModelName}</h2>
                {state.showG4Alternatives && state.g4ModelPM && (
                  <div className="g4-model-option">
                    <h2>G4 Model Option: {state.g4ModelName}</h2>
                    <h2>Total RM: {state.totalRM}</h2>
                  </div>
                )}
                <div className="model-details">
                  {state.modelPCI && <p className='pci-required'>PCI Slots: {state.modelPCI}</p>}
                </div>
              </div>
            )}

          </>
        )}

        <div className="timestamps-display">
          {state.createdAtIST && (
            <p>Created at (IST): {state.createdAtIST}</p>
          )}
          {state.updatedAtIST && (
            <p>Updated at (IST): {state.updatedAtIST}</p>
          )}
        </div>

        {/* Network/Storage Configuration */}
        {(state.channels.length >= state.numChannels || state.endConfigurationEarly) &&
          !isAddingMoreChannels &&
          state.channels.length > 0 && (
            <>
              <NetworkThroughputForm
                port={state.networkPort}
                throughput={state.throughput}
                onChange={handleNetworkChange}
                isTeleport={state.selectedApplication === 'Teleport'}
              />

              {/* Only show storage for non-Xport configurations */}
              {state.teleportType !== 'xport' && state.teleportType !== 'inport' && (
                <StorageForm
                  type={state.storageType}
                  capacity={state.storageCapacity}
                  onTypeChange={handleStorageTypeChange}
                  onCapacityChange={handleStorageCapacityChange}
                />
              )}
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