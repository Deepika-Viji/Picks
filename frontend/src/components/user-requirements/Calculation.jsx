import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import { FaPlus, FaTrash, FaLink, FaUnlink, FaCheck } from 'react-icons/fa';
import '../../assets/css/CalculationTable.css';
import api from '../../config/api';

const CalculationTable = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { numChannels = 1, currentChannel = 1, channels = [], editIndex, selectedChannel } = location.state || {};

  const [resolution, setResolution] = useState({
    SD: [],
    HD: [],
    FHD: [],
    UHD: [],
    Passthrough: [],
    Uncompressed: []
  });

  const BITRATE_CONSTRAINTS = {
    SD: { min: 0.2, max: 3 },
    HD: { min: 0.6, max: 5 },
    FHD: { min: 2, max: 10 },
    UHD: { min: 8, max: 25 }
  };

  const [rm, setRm] = useState(0);
  const [mem, setMem] = useState('');
  const [cpu, setCpu] = useState('');
  const [type, setType] = useState('');
  const [selectedInputType, setSelectedInputType] = useState('');
  const [selectedIpType, setSelectedIpType] = useState('');
  const [pickstablesData, setPickstablesData] = useState([]);
  const [calculatedData, setCalculatedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showSecondaryInput, setShowSecondaryInput] = useState(false);
  const [secondaryInputType, setSecondaryInputType] = useState('');
  const [secondaryIpType, setSecondaryIpType] = useState('');
  const [selectedProtocol, setSelectedProtocol] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('');
  const [previousBitrates, setPreviousBitrates] = useState([]);
  const [previousChannels, setPreviousChannels] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [allChannels, setAllChannels] = useState([]);
  const [outputs, setOutputs] = useState([]);
  const [selectedOutputIndex, setSelectedOutputIndex] = useState(null);
  const [muxerValues, setMuxerValues] = useState({});
  const [slicingValues, setSlicingValues] = useState({});
  const [slicingInputValues, setSlicingInputValues] = useState({});
  const MAX_TOTAL_BITRATE_PER_CHANNEL = 60;
  const [isEditFromConfigurations, setIsEditFromConfigurations] = useState(false);

  const calculateTotalBitrate = () => {
    return Object.entries(resolution).reduce((total, [resType, instances]) => {
      if (resType === 'Passthrough' || resType === 'Uncompressed') return total;
      return total + instances.reduce((sum, inst) => sum + (inst.bitrate || 0), 0);
    }, 0);
  };

  const loadChannelData = (channel) => {
    // First reset all state to defaults
    setResolution({
      SD: [], HD: [], FHD: [], UHD: [], Passthrough: [], Uncompressed: []
    });
    setOutputs([]);
    setMuxerValues({});
    setSlicingValues({});
    setSlicingInputValues({});
    setShowSecondaryInput(false);

    // Then load the channel data
    const transformedResolution = transformResolution(channel.resolution);
    setResolution(transformedResolution);

    setSelectedInputType(channel.type || '');
    setSelectedIpType(channel.ipType || '');
    setSelectedFormat(channel.format || '4:2:0-I420');
    setRm(channel.rm || 0);
    setMem(channel.memory || '');
    setCpu(channel.cpu || '');
    setType(channel.type || '');

    // Safely handle outputs
    const channelOutputs = Array.isArray(channel.outputs) ? [...channel.outputs] : [];
    setOutputs(channelOutputs);
    setSelectedOutputIndex(channelOutputs.length > 0 ? 0 : null);

    // Load other values
    if (channel.muxerValues) setMuxerValues({ ...channel.muxerValues });
    if (channel.slicingValues) setSlicingValues({ ...channel.slicingValues });
    if (channel.slicingInputValues) setSlicingInputValues({ ...channel.slicingInputValues });
    if (channel.secondaryType) {
      setShowSecondaryInput(true);
      setSecondaryInputType(channel.secondaryType);
      setSecondaryIpType(channel.secondaryIpType || '');
    }
  };

  useEffect(() => {
    console.log('Location state received:', location.state);

    // First check if we're editing from configurations
    if (location.state?.editConfigId) {
      setIsEditing(true);
      setIsEditFromConfigurations(true);
      setAllChannels(location.state.channels || []);

      // Get the current channel data
      let channelData;
      if (location.state.isAddingMore && location.state.currentChannel > location.state.channels.length) {
        // New channel case
        channelData = {
          type: '',
          resolution: {
            SD: [], HD: [], FHD: [], UHD: [], Passthrough: [], Uncompressed: []
          },
          outputs: [],
          rm: 0,
          memory: '',
          cpu: '',
          format: '4:2:0-I420'
        };
      } else {
        // Existing channel case - ensure we have the data
        const channelIndex = location.state.currentChannel - 1;
        channelData = location.state.channels?.[channelIndex] || {
          type: '',
          resolution: {
            SD: [], HD: [], FHD: [], UHD: [], Passthrough: [], Uncompressed: []
          },
          outputs: [],
          rm: 0,
          memory: '',
          cpu: '',
          format: '4:2:0-I420'
        };
      }

      // Ensure outputs exist and have IDs
      if (!Array.isArray(channelData.outputs)) {
        channelData.outputs = [];
      }
      channelData.outputs = channelData.outputs.map(output => ({
        ...output,
        id: output.id || Date.now() + Math.random(),
        assignedProfiles: Array.isArray(output.assignedProfiles)
          ? output.assignedProfiles.map(p => ({ ...p }))
          : []
      }));

      // Now load the prepared data
      loadChannelData(channelData);
    }
  }, [location.state]);

  const transformResolution = (dbResolution) => {
    if (!dbResolution) {
      return {
        SD: [],
        HD: [],
        FHD: [],
        UHD: [],
        Passthrough: [],
        Uncompressed: []
      };
    }

    const ensureResolutionInstance = (instance) => ({
      bitrate: instance.bitrate || 0,
      framerate: instance.framerate || '25',
      codec: instance.codec || 'H264',
      ...(instance.framerate === 'custom' ? { customFramerate: instance.customFramerate } : {})
    });

    return {
      SD: (dbResolution.SD || []).map(ensureResolutionInstance),
      HD: (dbResolution.HD || []).map(ensureResolutionInstance),
      FHD: (dbResolution.FHD || []).map(ensureResolutionInstance),
      UHD: (dbResolution.UHD || []).map(ensureResolutionInstance),
      Passthrough: (dbResolution.Passthrough || []).map(instance => ({
        framerate: instance.framerate || '25',
        codec: 'Passthrough',
        ...(instance.framerate === 'custom' ? { customFramerate: instance.customFramerate } : {})
      })),
      Uncompressed: (dbResolution.Uncompressed || []).map(instance => ({
        framerate: instance.framerate || '25',
        codec: 'Uncompressed',
        ...(instance.framerate === 'custom' ? { customFramerate: instance.customFramerate } : {})
      }))
    };
  };

  useEffect(() => {
    if (selectedChannel) {
      const transformedResolution = transformResolution(selectedChannel.resolution);
      setResolution(transformedResolution);

      setRm(selectedChannel.rm || 0);
      setMem(selectedChannel.memory || '');
      setCpu(selectedChannel.cpu || '');
      setType(selectedChannel.type || '');
      setSelectedInputType(selectedChannel.type || '');
      setSelectedIpType(selectedChannel.ipType || '');
      setSelectedFormat(selectedChannel.format || '4:2:0-I420');

      if (selectedChannel.outputs) {
        setOutputs(selectedChannel.outputs);
        setSelectedOutputIndex(selectedChannel.outputs.length > 0 ? 0 : null);
      }

      if (selectedChannel.muxerValues) {
        setMuxerValues(selectedChannel.muxerValues);
      }
      if (selectedChannel.slicingValues) {
        setSlicingValues(selectedChannel.slicingValues);
      }
      if (selectedChannel.slicingInputValues) {
        setSlicingInputValues(selectedChannel.slicingInputValues);
      }

      if (selectedChannel.secondaryType) {
        setShowSecondaryInput(true);
        setSecondaryInputType(selectedChannel.secondaryType);
        setSecondaryIpType(selectedChannel.secondaryIpType || '');
      }

      Object.entries(transformedResolution).forEach(([type, instances]) => {
        instances.forEach((instance, index) => {
          if (instance.framerate === 'custom' && instance.customFramerate) {
            setResolution((prev) => ({
              ...prev,
              [type]: prev[type].map((inst, i) =>
                i === index ? { ...inst, customFramerate: instance.customFramerate } : inst
              ),
            }));
          }
        });
      });
    } else {
      setSelectedFormat('4:2:0-I420');
    }
  }, [selectedChannel]);

  useEffect(() => {
    axios.get(`${api.baseUrl}/api/calculate/tables`)
      .then((response) => setPickstablesData(response.data))
      .catch((error) => {
        console.error('Error fetching pickstables data:', error);
        Swal.fire({ icon: 'error', title: 'Error', text: 'Failed to fetch pickstables data.' });
      });
  }, []);

  const fetchPreviousChannels = async () => {
    try {
      const response = await axios.get(`${api.baseUrl}/api/channels}`);
      const data = Array.isArray(response.data) ? response.data : [];
      setPreviousChannels(data);
    } catch (error) {
      console.error('Error fetching previous channels:', error);
      setPreviousChannels([]);
    }
  };

  useEffect(() => {
    fetchPreviousChannels();
  }, []);

  useEffect(() => {
    if (!location.state?.isEdit && !location.state?.isAddingMore &&
      selectedInputType && (selectedInputType !== 'IP Inputs' || selectedIpType) &&
      !selectedChannel && previousChannels.length > 0) {
      askToCopySettings();
    }
  }, [selectedInputType, selectedIpType, previousChannels, location.state]);

  const askToCopySettings = async () => {
    if (location.state?.isEdit) return;
    if (previousChannels.length === 0) return;

    const result = await Swal.fire({
      title: 'Copy Settings?',
      text: 'Do you want to copy the bitrate, framerate, and codec from a previous channel?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, copy settings',
      cancelButtonText: 'No, start fresh',
    });

    if (result.isConfirmed) {
      const { value: selectedChannelId } = await Swal.fire({
        title: 'Select a Channel',
        input: 'select',
        inputOptions: previousChannels.reduce((acc, channel) => {
          acc[channel._id] = `Channel ${channel._id}`;
          return acc;
        }, {}),
        inputPlaceholder: 'Select a channel',
        showCancelButton: true,
      });

      if (selectedChannelId) {
        const selectedChannel = previousChannels.find((channel) => channel._id === selectedChannelId);
        if (selectedChannel) {
          const transformedResolution = transformResolution(selectedChannel.resolution);
          setResolution(transformedResolution);
          setSelectedFormat(selectedChannel.format || '4:2:0-I420');
          if (selectedChannel.outputs) {
            setOutputs(selectedChannel.outputs);
            setSelectedOutputIndex(selectedChannel.outputs.length > 0 ? 0 : null);
          }
        }
      }
    }
  };

  const handleInputTypeChange = (e) => {
    const newType = e.target.value;

    if (newType === 'HDMI' && location.state?.remainingHDMI <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'HDMI Limit Reached',
        text: 'Maximum 16 HDMI channels allowed. Please select another input type.'
      });
      return;
    }

    if (newType === 'SDI' && location.state?.remainingSDI <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'SDI Limit Reached',
        text: 'Maximum 24 SDI channels allowed.'
      });
      return;
    }

    setSelectedInputType(newType);
    setSelectedIpType('');
  };

  const handleIpTypeChange = (e) => setSelectedIpType(e.target.value);

  const handleAddResolution = (type) => {
    // Xport can only have 1 profile total (not per type)
    if (location.state?.teleportType === 'xport') {
      const totalProfiles = Object.values(resolution).reduce(
        (acc, curr) => acc + curr.length, 0
      );

      if (totalProfiles >= 1) {
        Swal.fire({
          icon: 'error',
          title: 'Profile Limit',
          text: 'Xport can only have 1 profile per channel'
        });
        return;
      }
    }

    // Only check total count
    if (Object.values(resolution).reduce((acc, curr) => acc + curr.length, 0) >= 8) {
      Swal.fire({
        icon: 'error',
        title: 'Limit Exceeded',
        text: 'Maximum 8 items allowed.'
      });
      return;
    }

    const defaultBitrates = {
      SD: 1.5,
      HD: 4,
      FHD: 6,
      UHD: 12,
    };
    const newBitrate = defaultBitrates[type] || 1.5;

    // Check bitrate limits only for compressed profiles
    if (type !== 'Passthrough' && type !== 'Uncompressed') {
      const currentTotalBitrate = calculateTotalBitrate();
      if (currentTotalBitrate + newBitrate > MAX_TOTAL_BITRATE_PER_CHANNEL) {
        Swal.fire({
          icon: 'error',
          title: 'Bitrate Limit Exceeded',
          text: `Adding this ${type} resolution would exceed the maximum bitrate of ${MAX_TOTAL_BITRATE_PER_CHANNEL} Mbps.`
        });
        return;
      }
    }

    setResolution((prev) => ({
      ...prev,
      [type]: [...prev[type], {
        bitrate: type !== 'Passthrough' && type !== 'Uncompressed' ? defaultBitrates[type] || 1.5 : 0,
        framerate: '25',
        codec: type === 'Passthrough' ? 'Passthrough' :
          type === 'Uncompressed' ? 'Uncompressed' : 'H264'
      }],
    }));
  };

  const handleAddPassthrough = () => {
    // Xport can only have 1 profile total
    if (location.state?.teleportType === 'xport') {
      const totalProfiles = Object.values(resolution).reduce(
        (acc, curr) => acc + curr.length, 0
      );

      if (totalProfiles >= 1) {
        Swal.fire({
          icon: 'error',
          title: 'Profile Limit',
          text: 'Xport can only have 1 profile per channel'
        });
        return;
      }
    }

    // Only check total count
    if (Object.values(resolution).reduce((acc, curr) => acc + curr.length, 0) >= 8) {
      Swal.fire({
        icon: 'error',
        title: 'Limit Exceeded',
        text: 'Maximum 8 items allowed.'
      });
      return;
    }

    setResolution(prev => ({
      ...prev,
      Passthrough: [...prev.Passthrough, {
        framerate: '25',
        codec: 'Passthrough'
      }]
    }));
  };

  const handleAddUncompressed = () => {
    // Only check total count

    if (location.state?.teleportType === 'xport') {
      const totalProfiles = Object.values(resolution).reduce(
        (acc, curr) => acc + curr.length, 0
      );

      if (totalProfiles >= 1) {
        Swal.fire({
          icon: 'error',
          title: 'Profile Limit',
          text: 'Xport can only have 1 profile per channel'
        });
        return;
      }
    }

    if (Object.values(resolution).reduce((acc, curr) => acc + curr.length, 0) >= 8) {
      Swal.fire({
        icon: 'error',
        title: 'Limit Exceeded',
        text: 'Maximum 8 items allowed.'
      });
      return;
    }

    setResolution(prev => ({
      ...prev,
      Uncompressed: [...prev.Uncompressed, {
        framerate: '25',
        codec: 'Uncompressed'
      }]
    }));
  };

  const handleRemoveResolution = (type, index) => {
    setResolution(prev => {
      const updatedRes = { ...prev };
      updatedRes[type] = updatedRes[type].filter((_, i) => i !== index);
      return updatedRes;
    });

    // Remove any outputs that reference this resolution
    setOutputs(prevOutputs => {
      const newOutputs = prevOutputs.map(output => ({
        ...output,
        assignedProfiles: output.assignedProfiles
          .filter(profile => !(profile.type === type && profile.index === index))
          .map(profile => {
            if (profile.type === type && profile.index > index) {
              return { ...profile, index: profile.index - 1 };
            }
            return profile;
          })
      })).filter(output => output.assignedProfiles.length > 0 || output.protocol);

      if (selectedOutputIndex !== null && selectedOutputIndex >= newOutputs.length) {
        setSelectedOutputIndex(newOutputs.length > 0 ? newOutputs.length - 1 : null);
      }

      return newOutputs;
    });
  };

  const handleRemovePassthrough = (index) => {
    setResolution(prev => ({
      ...prev,
      Passthrough: prev.Passthrough.filter((_, i) => i !== index)
    }));
  };

  const handleRemoveUncompressed = (index) => {
    setResolution(prev => ({
      ...prev,
      Uncompressed: prev.Uncompressed.filter((_, i) => i !== index)
    }));
  };

  const handleBitrateChange = (e, type, index) => {
    const { value } = e.target;

    // Allow empty value during editing
    if (value === '') {
      setResolution((prev) => ({
        ...prev,
        [type]: prev[type].map((instance, i) =>
          i === index ? { ...instance, bitrate: '' } : instance
        ),
      }));
      return;
    }

    // Allow decimal input (like "0.3" or ".3")
    if (value === '.' || value === '-') {
      setResolution((prev) => ({
        ...prev,
        [type]: prev[type].map((instance, i) =>
          i === index ? { ...instance, bitrate: value } : instance
        ),
      }));
      return;
    }

    // Handle cases where user types ".3" (convert to "0.3")
    if (value.startsWith('.')) {
      const numericValue = parseFloat(`0${value}`);
      if (!isNaN(numericValue)) {
        setResolution((prev) => ({
          ...prev,
          [type]: prev[type].map((instance, i) =>
            i === index ? { ...instance, bitrate: numericValue } : instance
          ),
        }));
      }
      return;
    }

    const numericValue = parseFloat(value);
    if (isNaN(numericValue)) return;

    setResolution((prev) => ({
      ...prev,
      [type]: prev[type].map((instance, i) =>
        i === index ? { ...instance, bitrate: numericValue } : instance
      ),
    }));
  };

  // Add onBlur handler to validate when leaving the field
  const handleBitrateBlur = (e, type, index) => {
    const { value } = e.target;
    if (value === '') {
      const constraints = BITRATE_CONSTRAINTS[type] || { min: 0, max: 99 };
      const defaultBitrate = constraints.min;

      setResolution((prev) => ({
        ...prev,
        [type]: prev[type].map((instance, i) =>
          i === index ? { ...instance, bitrate: defaultBitrate } : instance
        ),
      }));
      return;
    }

    const numericValue = parseFloat(value);
    if (isNaN(numericValue)) return;

    const constraints = BITRATE_CONSTRAINTS[type] || { min: 0, max: 99 };

    if (numericValue < constraints.min || numericValue > constraints.max) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Bitrate',
        text: `${type} bitrate must be between ${constraints.min} and ${constraints.max} Mbps.`
      });
      // Reset to min value
      setResolution((prev) => ({
        ...prev,
        [type]: prev[type].map((instance, i) =>
          i === index ? { ...instance, bitrate: constraints.min } : instance
        ),
      }));
    }

    // Check total bitrate
    const currentTotalBitrate = calculateTotalBitrate();
    const currentBitrate = resolution[type][index].bitrate || 0;
    const newTotal = currentTotalBitrate - currentBitrate + numericValue;

    if (newTotal > MAX_TOTAL_BITRATE_PER_CHANNEL) {
      Swal.fire({
        icon: 'error',
        title: 'Bitrate Limit Exceeded',
        text: `Total bitrate for all resolutions cannot exceed ${MAX_TOTAL_BITRATE_PER_CHANNEL} Mbps.`
      });
      // Reset to previous value
      setResolution((prev) => ({
        ...prev,
        [type]: prev[type].map((instance, i) =>
          i === index ? { ...instance, bitrate: currentBitrate } : instance
        ),
      }));
    }
  };

  const handleFramerateChange = (e, type, index) => {
    const { value } = e.target;
    setResolution((prev) => ({
      ...prev,
      [type]: prev[type].map((instance, i) =>
        i === index ? {
          ...instance,
          framerate: value === 'custom' ? 'custom' : parseFloat(value),
          customFramerate: value === 'custom' ? instance.customFramerate || '' : ''
        } : instance
      ),
    }));
  };

  const handleCodecChange = (e, type, index) => {
    const { value } = e.target;
    setResolution((prev) => ({
      ...prev,
      [type]: prev[type].map((instance, i) =>
        i === index ? { ...instance, codec: value } : instance
      ),
    }));
  };

  const handleFormatSelection = (e) => {
    setSelectedFormat(e.target.value);
  };

  const handleRemoveAllResolutions = (type) => {
    setResolution((prev) => ({
      ...prev,
      [type]: [],
    }));
  };

  const toggleSecondaryInput = () => {
    setShowSecondaryInput(!showSecondaryInput);
    if (!showSecondaryInput) {
      setSecondaryInputType('');
      setSecondaryIpType('');
    }
  };

  const calculateRm = () => {
    const totalOutputs = outputs.length;
    let rmAddition = 0;

    if (totalOutputs >= 3 && totalOutputs <= 6) {
      rmAddition = 500;
    } else if (totalOutputs >= 7 && totalOutputs <= 8) {
      rmAddition = 1000;
    }

    const baseRm = calculatedData?.totalRM || 0;
    setRm(Number(baseRm) + rmAddition);
  };

  useEffect(() => {
    if (Object.values(resolution).some((res) => res.length > 0)) {
      fetchCalculatedData();
    }
  }, [resolution]);

  useEffect(() => {
    calculateRm();
  }, [outputs]);

  const fetchCalculatedData = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${api.baseUrl}/api/calculate`, {
        sd: resolution.SD.length || 0,
        hd: resolution.HD.length || 0,
        fhd: resolution.FHD.length || 0,
        uhd: resolution.UHD.length || 0,
        passthrough: resolution.Passthrough.length || 0, // Changed to send count
        decoder: resolution.Uncompressed.length || 0,    // Changed to send count
        protocols: outputs.map(output => output.protocol),
      });

      setCalculatedData(response.data);
      setRm(response.data.totalRM);
      setMem(response.data.totalMemoryBeforeRounding);
      setCpu(response.data.totalCPU);
    } catch (error) {
      console.error('Error fetching calculation data:', error);
      Swal.fire({ icon: 'error', title: 'Error', text: 'Failed to fetch calculation data.' });
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = (showAlerts = false) => {
    // Xport specific validations
    if (location.state?.teleportType === 'xport') {
      // Only allow 1 profile for Xport
      const totalProfiles = Object.values(resolution).reduce((acc, curr) => acc + curr.length, 0);
      if (totalProfiles > 1) {
        if (showAlerts) {
          Swal.fire({
            icon: 'error',
            title: 'Profile Limit',
            text: 'Xport can only have 1 profile per channel'
          });
        }
        return false;
      }

      // Only allow 1 output for Xport
      if (outputs.length > 1) {
        if (showAlerts) {
          Swal.fire({
            icon: 'error',
            title: 'Output Limit',
            text: 'Xport can only have 1 output per channel'
          });
        }
        return false;
      }

      // ASI input specific validation
      if (location.state?.teleportType === 'xport' && selectedInputType === 'ASI') {
        const asiChannels = location.state.channels.filter(c => c.type === 'ASI');
        const isEditingASI = isEditing && selectedChannel?.type === 'ASI';

        // If adding a new ASI channel or editing a non-ASI channel to ASI
        if ((!isEditing || !isEditingASI) && asiChannels.length >= 4) {
          if (showAlerts) {
            Swal.fire({
              icon: 'error',
              title: 'ASI Limit Reached',
              text: 'Maximum 4 ASI channels allowed for Xport.'
            });
          }
          return false;
        }
      }
    } else {
      // Regular validation for non-Xport
      if (!selectedFormat) {
        if (showAlerts) {
          Swal.fire({
            icon: 'error',
            title: 'Missing Format',
            text: 'Please select a format.'
          });
        }
        return false;
      }
    }

    const totalItems = Object.values(resolution).reduce((acc, curr) => acc + curr.length, 0);

    if (totalItems === 0) {
      if (showAlerts) {
        Swal.fire({
          icon: 'error',
          title: 'No Configuration',
          text: 'Please select at least one resolution, passthrough, or uncompressed.'
        });
      }
      return false;
    }

    if (totalItems > 8) {
      if (showAlerts) {
        Swal.fire({
          icon: 'error',
          title: 'Limit Exceeded',
          text: 'Maximum 8 items (resolutions + passthrough/uncompressed) allowed per channel.'
        });
      }
      return false;
    }

    const totalResolution = Object.entries(resolution).reduce((acc, [type, instances]) => {
      if (type === 'Passthrough' || type === 'Uncompressed') return acc;
      return acc + instances.length;
    }, 0);

    if (totalResolution === 0 && resolution.Passthrough.length === 0 && resolution.Uncompressed.length === 0) {
      if (showAlerts) {
        Swal.fire({
          icon: 'error',
          title: 'No Configuration',
          text: 'Please select at least one resolution, passthrough, or uncompressed.'
        });
      }
      return false;
    }

    const totalProtocols = outputs.reduce((sum, output) => sum + output.assignedProfiles.length, 0);
    let totalBitrate = 0;
    let bitrateValid = true;

    for (const [type, instances] of Object.entries(resolution)) {
      if (type === 'Passthrough' || type === 'Uncompressed') continue;

      for (const instance of instances) {
        const constraints = BITRATE_CONSTRAINTS[type];
        if (instance.bitrate < constraints.min || instance.bitrate > constraints.max) {
          bitrateValid = false;
          if (showAlerts) {
            Swal.fire({
              icon: 'error',
              title: 'Invalid Bitrate',
              text: `${type} bitrate must be between ${constraints.min} and ${constraints.max} Mbps.`
            });
          }
        }
        totalBitrate += instance.bitrate || 0;
      }
    }

    if (totalBitrate > MAX_TOTAL_BITRATE_PER_CHANNEL) {
      bitrateValid = false;
      if (showAlerts) {
        Swal.fire({
          icon: 'error',
          title: 'Bitrate Limit Exceeded',
          text: `Total bitrate for all resolutions cannot exceed ${MAX_TOTAL_BITRATE_PER_CHANNEL} Mbps.`
        });
      }
    }

    if (outputs.length < 1 || outputs.length > 8) {
      if (showAlerts) {
        Swal.fire({
          icon: 'error',
          title: 'Invalid Output Count',
          text: 'You must have between 1 and 8 outputs.'
        });
      }
      return false;
    }

    if (!selectedInputType) {
      if (showAlerts) {
        Swal.fire({
          icon: 'error',
          title: 'Missing Input Type',
          text: 'Please select an input type.'
        });
      }
      return false;
    }

    if (selectedInputType === 'IP Inputs' && !selectedIpType) {
      if (showAlerts) {
        Swal.fire({
          icon: 'error',
          title: 'Missing IP Input Type',
          text: 'Please select an IP input type.'
        });
      }
      return false;
    }

    const outputsWithNoProfiles = outputs.filter(output => output.assignedProfiles.length === 0);
    if (outputsWithNoProfiles.length > 0) {
      if (showAlerts) {
        Swal.fire({
          icon: 'error',
          title: 'Outputs Without Profiles',
          text: `Output ${outputsWithNoProfiles.map(o => outputs.indexOf(o) + 1).join(', ')} has no profiles assigned. Each output must have at least one profile.`
        });
      }
      return false;
    }

    return bitrateValid;
  };

  useEffect(() => {
    if (!selectedChannel) {
      askToCopySettings();
    }
  }, [previousChannels]);

  useEffect(() => {
    fetchPreviousChannels();
  }, []);

  const prepareChannelData = () => {
    const protocols = outputs.reduce((acc, output, outputIndex) => {
      output.assignedProfiles.forEach(profile => {
        const key = `${profile.type} ${profile.index + 1}-${outputIndex + 1}`;
        acc[key] = output.protocol;
      });
      return acc;
    }, {});

    return {
      type: selectedInputType,
      secondaryType: showSecondaryInput ? secondaryInputType : null,
      secondaryIpType: showSecondaryInput && secondaryInputType === 'IP Inputs' ? secondaryIpType : null,
      resolution: {
        SD: resolution.SD.map(instance => ({
          bitrate: instance.bitrate,
          framerate: instance.framerate === 'custom' ? instance.customFramerate : instance.framerate,
          codec: instance.codec,
        })),
        HD: resolution.HD.map(instance => ({
          bitrate: instance.bitrate,
          framerate: instance.framerate === 'custom' ? instance.customFramerate : instance.framerate,
          codec: instance.codec,
        })),
        FHD: resolution.FHD.map(instance => ({
          bitrate: instance.bitrate,
          framerate: instance.framerate === 'custom' ? instance.customFramerate : instance.framerate,
          codec: instance.codec,
        })),
        UHD: resolution.UHD.map(instance => ({
          bitrate: instance.bitrate,
          framerate: instance.framerate === 'custom' ? instance.customFramerate : instance.framerate,
          codec: instance.codec,
        })),
        Passthrough: resolution.Passthrough.map(instance => ({
          framerate: instance.framerate === 'custom' ? instance.customFramerate : instance.framerate,
          codec: 'Passthrough',
        })),
        Uncompressed: resolution.Uncompressed.map(instance => ({
          framerate: instance.framerate === 'custom' ? instance.customFramerate : instance.framerate,
          codec: 'Uncompressed',
        })),
      },
      protocols,
      rm,
      memory: mem,
      cpu,
      format: selectedFormat,
      muxerValues,
      slicingValues,
      slicingInputValues,
      ipType: selectedInputType === 'IP Inputs' ? selectedIpType : null,
      outputs: outputs.map(output => ({
        protocol: output.protocol,
        assignedProfiles: output.assignedProfiles,
        muxer: output.protocol === 'Fileout' ? muxerValues[`${output.id}`] : null,
        slicing: output.protocol === 'Fileout' ? slicingValues[`${output.id}`] : null,
        slicingInput: output.protocol === 'Fileout' ? slicingInputValues[`${output.id}`] : null
      })),
      totalProfiles: outputs.reduce((sum, output) => sum + output.assignedProfiles.length, 0)
    };
  };

  const OutputManager = () => {
    const handleProtocolChange = (e) => {

      if (location.state?.teleportType === 'xport' && outputs.length >= 1) {
        Swal.fire({
          icon: 'warning',
          title: 'Output Limit',
          text: 'Xport can only have 1 output per channel'
        });
        return;
      }

      const protocol = e.target.value;
      if (!protocol) return;

      if (outputs.length >= 8) {
        Swal.fire({ icon: 'warning', title: 'Limit Exceeded', text: 'Maximum 8 outputs allowed.' });
        return;
      }

      // Check if there are any profiles available to assign
      const allProfiles = Object.entries(resolution).flatMap(([type, instances]) =>
        instances.map((_, index) => ({ type, index })))
        .filter(profile => {
          // Filter out profiles already assigned to other outputs
          return !outputs.some(output =>
            output.assignedProfiles.some(p =>
              p.type === profile.type && p.index === profile.index
            )
          );
        });

      if (allProfiles.length === 0) {
        Swal.fire({
          icon: 'warning',
          title: 'No Available Profiles',
          text: 'All profiles are already assigned to other outputs.'
        });
        return;
      }

      const newOutput = {
        id: Date.now(),
        protocol,
        assignedProfiles: []
      };

      if (allProfiles.length === 1) {
        const [profile] = allProfiles;
        const isUncompressed = profile.type === 'Uncompressed';
        const isHdmiSdi = ['HDMI', 'SDI'].includes(protocol);

        // Only auto-assign if compatible
        if ((isUncompressed && isHdmiSdi) || (!isUncompressed && !isHdmiSdi)) {
          newOutput.assignedProfiles.push(profile);
        }
      }

      setOutputs([...outputs, newOutput]);
      setSelectedOutputIndex(outputs.length);
      setSelectedProtocol(''); // Reset the dropdown after selection
    };

    // Filter available protocols based on resolution types
    const getAvailableProtocols = () => {
      const hasUncompressed = resolution.Uncompressed.length > 0;
      const hasOtherProfiles = Object.entries(resolution).some(
        ([type, instances]) => type !== 'Uncompressed' && instances.length > 0
      );

      const allProtocols = [
        { value: 'SRT(PUSH/PULL)', label: 'SRT (PUSH/PULL)' },
        { value: 'RTMP PUSH', label: 'RTMP PUSH' },
        { value: 'HLS (PUSH/PULL)', label: 'HLS (PUSH/PULL)' },
        { value: 'UDP (UNICAST/MULTICAST)', label: 'UDP (UNICAST/MULTICAST)' },
        { value: 'NDI', label: 'NDI' },
        { value: 'Fileout', label: 'Fileout' },
        { value: 'RTP', label: 'RTP' },
        { value: 'HDMI', label: 'HDMI' },
        { value: 'SDI', label: 'SDI' }
      ];

      // If there are uncompressed profiles, only show HDMI/SDI if they exist
      if (hasUncompressed) {
        return allProtocols.filter(protocol =>
          ['HDMI', 'SDI'].includes(protocol.value) ||
          (hasOtherProfiles && !['HDMI', 'SDI'].includes(protocol.value))
        );
      }
      // If no uncompressed, don't show HDMI/SDI
      return allProtocols.filter(protocol => !['HDMI', 'SDI'].includes(protocol.value));
    };

    const assignProfile = (type, index) => {
      if (selectedOutputIndex === null) {
        Swal.fire({ icon: 'warning', title: 'No Output Selected', text: 'Please select an output first.' });
        return;
      }

      const output = outputs[selectedOutputIndex];
      const profile = resolution[type][index];

      // Uncompressed can only go to HDMI/SDI
      if (type === 'Uncompressed' && !['HDMI', 'SDI'].includes(output.protocol)) {
        Swal.fire({
          icon: 'error',
          title: 'Invalid Assignment',
          text: 'Uncompressed profiles can only be assigned to HDMI or SDI outputs'
        });
        return;
      }

      // HDMI/SDI can only take uncompressed
      if (['HDMI', 'SDI'].includes(output.protocol) && type !== 'Uncompressed') {
        Swal.fire({
          icon: 'error',
          title: 'Invalid Assignment',
          text: 'HDMI/SDI outputs can only be assigned to Uncompressed profiles.'
        });
        return;
      }

      // Passthrough cannot go to HDMI/SDI
      if (type === 'Passthrough' && ['HDMI', 'SDI'].includes(output.protocol)) {
        Swal.fire({
          icon: 'error',
          title: 'Invalid Assignment',
          text: 'Passthrough profiles cannot be assigned to HDMI/SDI outputs.'
        });
        return;
      }

      const isAlreadyAssigned = output.assignedProfiles.some(
        p => p.type === type && p.index === index
      );

      if (isAlreadyAssigned) {
        Swal.fire({ icon: 'warning', title: 'Already Assigned', text: 'This profile is already assigned to this output.' });
        return;
      }

      const updatedOutputs = [...outputs];
      updatedOutputs[selectedOutputIndex].assignedProfiles.push({ type, index });
      setOutputs(updatedOutputs);
    };

    const removeOutput = (outputId) => {
      setOutputs(outputs.filter(output => output.id !== outputId));
      if (selectedOutputIndex !== null && selectedOutputIndex >= outputs.length - 1) {
        setSelectedOutputIndex(outputs.length - 2);
      }
    };

    const removeProfile = (type, index) => {
      if (selectedOutputIndex === null) return;

      const updatedOutputs = [...outputs];
      updatedOutputs[selectedOutputIndex].assignedProfiles =
        updatedOutputs[selectedOutputIndex].assignedProfiles.filter(
          p => !(p.type === type && p.index === index)
        );
      setOutputs(updatedOutputs);
    };

    const renderSlicingInput = (outputId) => {
      const slicingValue = slicingValues[outputId];

      switch (slicingValue) {
        case 'Time':
          return (
            <div className="form-group">
              <label>Time (seconds)</label>
              <input
                type="number"
                value={slicingInputValues[outputId] || ''}
                onChange={(e) => {
                  setSlicingInputValues((prev) => ({
                    ...prev,
                    [outputId]: e.target.value,
                  }));
                }}
                className="form-control"
                min="1"
              />
            </div>
          );
        case 'Size':
          return (
            <div className="form-group">
              <label>Size (MB)</label>
              <input
                type="number"
                value={slicingInputValues[outputId] || ''}
                onChange={(e) => {
                  setSlicingInputValues((prev) => ({
                    ...prev,
                    [outputId]: e.target.value,
                  }));
                }}
                className="form-control"
                min="1"
              />
            </div>
          );
        case 'Clock':
          return (
            <div className="form-group">
              <label>Clock (minutes)</label>
              <select
                value={slicingInputValues[outputId] || ''}
                onChange={(e) => {
                  setSlicingInputValues((prev) => ({
                    ...prev,
                    [outputId]: e.target.value,
                  }));
                }}
                className="form-control"
              >
                <option value="">Select Clock</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="60">60</option>
              </select>
            </div>
          );
        case 'User Define':
          return null;
        default:
          return null;
      }
    };

    return (
      <div className="output-manager">
        <div className="output-selector">
          <h3>Outputs</h3>

          <div className="form-group">
            <label>Add Output Protocol</label>
            <select
              value={selectedProtocol}
              onChange={handleProtocolChange}
              className="form-control"
            >
              <option value="">Select Protocol</option>
              {getAvailableProtocols().map(protocol => (
                <option key={protocol.value} value={protocol.value}>
                  {protocol.label}
                </option>
              ))}
            </select>
          </div>

          <div className="output-list">
            {outputs.map((output, idx) => (
              <div
                key={output.id}
                className={`output-item ${selectedOutputIndex === idx ? 'active' : ''}`}
                onClick={() => setSelectedOutputIndex(idx)}
              >
                <span>Output {idx + 1}: {output.protocol}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeOutput(output.id);
                  }}
                  className="btn btn-sm btn-danger"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
        </div>

        {selectedOutputIndex !== null && outputs[selectedOutputIndex] && (
          <div className="output-details">
            <h4>Output {selectedOutputIndex + 1}: {outputs[selectedOutputIndex].protocol}</h4>

            <div className="profile-assignments">
              <h5>Assigned Profiles:</h5>
              {outputs[selectedOutputIndex].assignedProfiles.length === 0 ? (
                <p className="text-danger">No profiles assigned yet (at least one required)</p>
              ) : (
                <ul>
                  {outputs[selectedOutputIndex].assignedProfiles.map((profile, idx) => (
                    <li key={idx}>
                      {profile.type} {profile.index + 1}
                      <button
                        onClick={() => removeProfile(profile.type, profile.index)}
                        className="btn btn-sm btn-danger"
                      >
                        <FaTrash />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {outputs[selectedOutputIndex].protocol === 'Fileout' && (
              <div className="fileout-options">
                <div className="form-group">
                  <label>Muxer</label>
                  <select
                    value={muxerValues[outputs[selectedOutputIndex].id] || 'MPEG TS'}
                    onChange={(e) => {
                      const key = outputs[selectedOutputIndex].id;
                      setMuxerValues((prev) => ({
                        ...prev,
                        [key]: e.target.value,
                      }));
                      if (e.target.value === 'MXF') {
                        setSlicingValues((prev) => ({
                          ...prev,
                          [key]: '',
                        }));
                      }
                    }}
                    className="form-control"
                  >
                    <option value="MPEG TS">MPEG TS</option>
                    <option value="MP4">MP4</option>
                    <option value="MOV">MOV</option>
                    <option value="MXF">MXF</option>
                    <option value="MKV">MKV</option>
                    <option value="FLV">FLV</option>
                    <option value="ASF">ASF</option>
                    <option value="M4A">M4A</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Slicing</label>
                  <select
                    value={slicingValues[outputs[selectedOutputIndex].id] || 'None'}
                    onChange={(e) => {
                      const key = outputs[selectedOutputIndex].id;
                      setSlicingValues((prev) => ({
                        ...prev,
                        [key]: e.target.value,
                      }));
                    }}
                    className="form-control"
                    disabled={muxerValues[outputs[selectedOutputIndex].id] === 'MXF'}
                  >
                    <option value="None">None</option>
                    <option value="Time">Time</option>
                    <option value="Size">Size</option>
                    <option value="Clock">Clock</option>
                    <option value="User Define">User Define</option>
                  </select>
                </div>

                {renderSlicingInput(outputs[selectedOutputIndex].id)}
              </div>
            )}

            <div className="available-profiles">
              <h5>Available Profiles:</h5>
              {Object.entries(resolution).map(([type, instances]) => {
                // Don't show Uncompressed for non-HDMI/SDI outputs
                if (type === 'Uncompressed' && !['HDMI', 'SDI'].includes(outputs[selectedOutputIndex].protocol)) {
                  return null;
                }
                // Don't show other profiles for HDMI/SDI outputs
                if (type !== 'Uncompressed' && ['HDMI', 'SDI'].includes(outputs[selectedOutputIndex].protocol)) {
                  return null;
                }

                return instances.length > 0 && (
                  <div key={type} className="resolution-group">
                    <h6>{type}</h6>
                    <div className="profile-buttons">
                      {instances.map((instance, index) => {
                        const isAssigned = outputs[selectedOutputIndex].assignedProfiles.some(
                          p => p.type === type && p.index === index
                        );

                        return (
                          <button
                            key={`${type}-${index}`}
                            className={`btn btn-sm ${isAssigned ? 'btn-success' : 'btn-outline-primary'}`}
                            onClick={() => isAssigned ? removeProfile(type, index) : assignProfile(type, index)}
                            disabled={isAssigned}
                          >
                            {type} {index + 1}
                            {isAssigned && <FaCheck className="ms-1" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  };

  const handleSubmit = async () => {
    if (location.state?.teleportType === 'xport' && selectedInputType === 'ASI') {
      const asiChannels = location.state.channels.filter(c => c.type === 'ASI');
      const isEditingASI = isEditing && selectedChannel?.type === 'ASI';

      // If adding a new ASI channel or editing a non-ASI channel to ASI
      if ((!isEditing || !isEditingASI) && asiChannels.length >= 4) {
        Swal.fire({
          icon: 'error',
          title: 'ASI Limit Reached',
          text: 'Maximum 4 ASI channels allowed for Xport.'
        });
        return false;
      }
    }

    if (selectedInputType === 'HDMI' && location.state?.remainingHDMI <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'HDMI Limit Reached',
        text: 'Maximum 16 HDMI channels allowed.'
      });
      return;
    }

    if (selectedInputType === 'SDI' && location.state?.remainingSDI <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'SDI Limit Reached',
        text: 'Maximum 24 SDI channels allowed.'
      });
      return;
    }

    const totalAssignedProfiles = outputs.reduce((sum, output) => sum + output.assignedProfiles.length, 0);
    if (totalAssignedProfiles === 0) {
      Swal.fire({
        icon: 'error',
        title: 'No Profiles Assigned',
        text: 'Please assign at least one profile to an output.'
      });
      return;
    }

    const unassignedProfiles = Object.entries(resolution).flatMap(([type, instances]) =>
      instances.map((_, index) => {
        const isAssigned = outputs.some(output =>
          output.assignedProfiles.some(p => p.type === type && p.index === index)
        );
        return isAssigned ? null : `${type} ${index + 1}`;
      }).filter(Boolean)
    );

    if (unassignedProfiles.length > 0) {
      const result = await Swal.fire({
        icon: 'warning',
        title: 'Unassigned Profiles',
        html: `The following profiles do not have an output assigned: <strong>${unassignedProfiles.join(', ')}</strong>. Do you still want to submit?`,
        showCancelButton: true,
        confirmButtonText: 'Yes, submit anyway',
        cancelButtonText: 'No, go back',
      });

      if (result.isDismissed) {
        return;
      }
    }

    const confirmResult = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to submit this channel configuration?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, submit it!',
      cancelButtonText: 'No, cancel!',
    });

    if (confirmResult.isDismissed) {
      return;
    }

    const newChannelData = prepareChannelData();

    const updatedUsedInputTypes = {
      ...location.state?.usedInputTypes || {
        HDMI: 0,
        SDI: 0,
        ASI: 0,
        IP: 0
      }
    };

    // If editing, decrement counts for the old type first
    if (editIndex !== undefined) {
      const oldType = location.state?.channels?.[editIndex]?.type;
      if (oldType === 'HDMI') updatedUsedInputTypes.HDMI = Math.max(0, (updatedUsedInputTypes.HDMI || 0) - 1);
      if (oldType === 'SDI') updatedUsedInputTypes.SDI = Math.max(0, (updatedUsedInputTypes.SDI || 0) - 1);
      if (oldType === 'ASI') updatedUsedInputTypes.ASI = Math.max(0, (updatedUsedInputTypes.ASI || 0) - 1);
      if (oldType === 'IP Inputs') updatedUsedInputTypes.IP = Math.max(0, (updatedUsedInputTypes.IP || 0) - 1);
    }

    // Increment counts for the new type
    if (selectedInputType === 'HDMI') updatedUsedInputTypes.HDMI = (updatedUsedInputTypes.HDMI || 0) + 1;
    if (selectedInputType === 'SDI') updatedUsedInputTypes.SDI = (updatedUsedInputTypes.SDI || 0) + 1;
    if (selectedInputType === 'ASI') updatedUsedInputTypes.ASI = (updatedUsedInputTypes.ASI || 0) + 1;
    if (selectedInputType === 'IP Inputs') updatedUsedInputTypes.IP = (updatedUsedInputTypes.IP || 0) + 1;


    let updatedChannels = [...(location.state?.channels || [])];
    const currentChannelIndex = location.state?.currentChannel - 1;

    if (location.state?.isEdit) {
      if (currentChannelIndex < updatedChannels.length) {
        // Update existing channel
        updatedChannels[currentChannelIndex] = newChannelData;
      } else {
        // Add new channel
        updatedChannels.push(newChannelData);
      }
    } else if (editIndex !== undefined) {
      updatedChannels[editIndex] = newChannelData;
    } else {
      updatedChannels.push(newChannelData);
    }

    navigate('/products', {
      state: {
        ...(location.state || {}),
        channels: updatedChannels,
        currentChannel: updatedChannels.length,
        selectedHardware: location.state?.selectedHardware,
        selectedApplication: location.state?.selectedApplication,
        numChannels: location.state?.numChannels || 1,
        networkPort: location.state?.networkPort,
        throughput: location.state?.throughput,
        storageType: location.state?.storageType,
        storageCapacity: location.state?.storageCapacity,
        totalModelName: location.state?.totalModelName,
        totalRM: location.state?.totalRM,
        totalMEM: location.state?.totalMEM,
        totalCPU: location.state?.totalCPU,
        partCode: location.state?.partCode,
        isEdit: location.state?.isEdit || false,
        editConfigId: location.state?.editConfigId,
        usedInputTypes: updatedUsedInputTypes,
        remainingHDMI: location.state?.remainingHDMI || 0,
        remainingSDI: location.state?.remainingSDI || 0,
        remainingIP: location.state?.remainingIP || 0
      },
      replace: true
    });
  };

  const handleBack = () => {
    navigate('/products', {
      state: {
        ...location.state, // Include all existing state
        selectedInputType,
        selectedIpType,
        resolution,
        outputs,
        muxerValues,
        slicingValues,
        slicingInputValues,
        selectedFormat,
        showSecondaryInput,
        secondaryInputType,
        secondaryIpType,
        rm,
        mem,
        cpu,
        type,
        // Explicitly preserve these critical values
        networkPort: location.state?.networkPort,
        throughput: location.state?.throughput,
        storageType: location.state?.storageType,
        storageCapacity: location.state?.storageCapacity,
        teleportType: location.state?.teleportType,
        asiPorts: location.state?.asiPorts,
      },
    });
  };

  return (
    <div className="calculation-table-container">
      {isEditing && (
        <div className="edit-mode-header">
          <h2>Editing Channel Configuration</h2>
        </div>
      )}

      <h1>Calculation Table - Channel {currentChannel} of {parseInt(numChannels, 10)}</h1>
      <button onClick={handleBack} className="btn btn-primary mb-3">
        Back
      </button>

      <div className="input-type-group">
        <div className="form-group">
          <label>Select Input Type</label>
          <select value={selectedInputType} onChange={handleInputTypeChange} className="form-control">
            <option value="">Select Input Type</option>
            {location.state?.teleportType === 'xport' ? (
              <>
                <option
                  value="HDMI"
                  disabled={location.state?.remainingHDMI <= 0}
                >
                  HDMI {location.state?.remainingHDMI !== undefined ?
                    `(${Math.max(0, location.state.remainingHDMI)} remaining)` : ''}
                </option>
                <option
                  value="SDI"
                  disabled={location.state?.remainingSDI <= 0}
                >
                  SDI {location.state?.remainingSDI !== undefined ?
                    `(${Math.max(0, location.state.remainingSDI)} remaining)` : ''}
                </option>
                <option value="IP Inputs">
                  IP Inputs {location.state?.remainingIP !== undefined ?
                    `(${Math.max(0, location.state.remainingIP)} remaining)` : ''}
                </option>
                <option
                  value="ASI"
                  disabled={location.state?.remainingASI <= 0}
                >
                  ASI {location.state?.remainingASI !== undefined ?
                    `(${Math.max(0, location.state.remainingASI)} remaining)` : ''}
                </option>
              </>
            ) : (
              <>
                <option
                  value="HDMI"
                  disabled={location.state?.remainingHDMI <= 0}
                >
                  HDMI {location.state?.remainingHDMI !== undefined ?
                    `(${Math.max(0, location.state.remainingHDMI)} remaining)` : ''}
                </option>
                <option
                  value="SDI"
                  disabled={location.state?.remainingSDI <= 0}
                >
                  SDI {location.state?.remainingSDI !== undefined ?
                    `(${Math.max(0, location.state.remainingSDI)} remaining)` : ''}
                </option>
                <option value="IP Inputs">
                  IP Inputs {location.state?.remainingIP !== undefined ?
                    `(${Math.max(0, location.state.remainingIP)} remaining)` : ''}
                </option>
              </>
            )}
          </select>
        </div>

        {selectedInputType === 'IP Inputs' && (
          <div className="form-group">
            <label>Select IP Input Type</label>
            <select
              value={selectedIpType}
              onChange={handleIpTypeChange}
              className="form-control"
            >
              <option value="">Select IP Input Type</option>
              {location.state?.teleportType === 'xport' ? (
                // Xport specific IP input types
                ['SRT(PUSH/PULL)', 'UDP', 'NDI'].map((ipType) => (
                  <option key={ipType} value={ipType}>
                    {ipType}
                  </option>
                ))
              ) : (
                // Regular IP input types
                ['SRT(PUSH/PULL)', 'RTMP', 'HLS', 'UDP', 'Fileout', 'RTSP', 'YoutubeLive', 'Playlist', 'RTP', 'NDI']
                  .map((ipType) => (
                    <option key={ipType} value={ipType}>
                      {ipType}
                    </option>
                  ))
              )}
            </select>
          </div>
        )}
      </div>

      {location.state?.teleportType !== 'xport' &&
        (selectedInputType === 'HDMI' || selectedInputType === 'SDI' || selectedInputType === 'ASI' ||
          selectedInputType === 'IP Inputs') && (

          <div className="form-group">
            <label>Select Format</label>
            <select
              value={selectedFormat}
              onChange={handleFormatSelection}
              className="form-control"
            >
              <optgroup label="8 BIT :">
                {['4:2:0-I420', '4:2:2-Y42B', '4:2:2-UYVY', '4:2:2-YUY2', '4:2:2-RGB'].map(format => (
                  <option
                    key={format}
                    value={format}
                    className={selectedFormat === format ? 'active' : ''}
                  >
                    {format}
                  </option>
                ))}
              </optgroup>
              <optgroup label="10 BIT :">
                {['4:2:2-10LE', '4:4:4-10LE', '4:4:4-Alpha'].map(format => (
                  <option
                    key={format}
                    value={format}
                    className={selectedFormat === format ? 'active' : ''}
                  >
                    {format}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>
        )}

      {(selectedInputType === 'HDMI' || selectedInputType === 'SDI' || selectedInputType === 'ASI' || selectedInputType === 'IP Inputs') && (
        <div className="form-group">
          <label>Add Resolution</label>
          {Object.values(resolution).reduce((acc, curr) => acc + curr.length, 0) > 8 && (
            <p className="text-danger">Total resolutions cannot exceed 8.</p>
          )}
          <div className="resolution-section">
            <div className="resolution-buttons">
              {['SD', 'HD', 'FHD', 'UHD'].map((type) => (
                <div key={type} className="resolution-button-container">
                  <div className="resolution-button-group">
                    <button
                      className="btn btn-primary add-resolution-btn"
                      onClick={() => handleAddResolution(type)}
                      disabled={
                        (location.state?.teleportType === 'xport' &&
                          Object.values(resolution).reduce((acc, curr) => acc + curr.length, 0) >= 1) ||
                        Object.values(resolution).reduce((acc, curr) => acc + curr.length, 0) >= 8
                      }
                    >
                      <FaPlus /> Add {type}
                    </button>
                    {resolution[type].length > 0 && (
                      <button
                        className="btn btn-danger remove-last-btn"
                        onClick={() => {
                          if (resolution[type].length > 0) {
                            handleRemoveResolution(type, resolution[type].length - 1);
                          }
                        }}
                      >
                        <FaTrash /> {type}
                      </button>
                    )}
                  </div>
                  <span className="resolution-counter">
                    ({resolution[type].length} added)
                  </span>
                </div>
              ))}

              <div className="resolution-button-container">
                <div className="resolution-button-group">
                  <button
                    className="btn btn-primary add-resolution-btn"
                    onClick={handleAddPassthrough}
                    disabled={
                      (location.state?.teleportType === 'xport' &&
                        Object.values(resolution).reduce((acc, curr) => acc + curr.length, 0) >= 1) ||
                      Object.values(resolution).reduce((acc, curr) => acc + curr.length, 0) >= 8
                    }
                  >
                    <FaPlus /> Add Passthrough
                  </button>
                  {resolution.Passthrough.length > 0 && (
                    <button
                      className="btn btn-danger remove-last-btn"
                      onClick={() => {
                        if (resolution.Passthrough.length > 0) {
                          handleRemovePassthrough(resolution.Passthrough.length - 1);
                        }
                      }}
                    >
                      <FaTrash /> Passthrough
                    </button>
                  )}
                </div>
                <span className="resolution-counter">
                  ({resolution.Passthrough.length} added)
                </span>
              </div>

              <div className="resolution-button-container">
                {location.state?.teleportType !== 'xport' && (
                  <div className="resolution-button-container">
                    <div className="resolution-button-group">
                      <button
                        className="btn btn-primary add-resolution-btn"
                        onClick={handleAddUncompressed}
                        disabled={
                          Object.values(resolution).reduce((acc, curr) => acc + curr.length, 0) >= 8
                        }
                      >
                        <FaPlus /> Add Uncompressed
                      </button>
                      {resolution.Uncompressed.length > 0 && (
                        <button
                          className="btn btn-danger remove-last-btn"
                          onClick={() => {
                            if (resolution.Uncompressed.length > 0) {
                              handleRemoveUncompressed(resolution.Uncompressed.length - 1);
                            }
                          }}
                        >
                          <FaTrash /> Uncompressed
                        </button>
                      )}
                    </div>
                    <span className="resolution-counter">
                      ({resolution.Uncompressed.length} added)
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* <div className="total-items-display">
              <strong>Total added:</strong> {Object.values(resolution).reduce((acc, curr) => acc + curr.length, 0)} / 8
            </div> */}

            <div className="resolution-instances">
              {Object.entries(resolution).map(([type, instances]) => (
                instances.length > 0 && (
                  <div key={type} className="resolution-group">
                    <h4>{type}</h4>
                    {instances.map((instance, index) => (
                      <div className="instance-card" key={`${type}-${index}`}>
                        <div className="instance-header">
                          <span>{type} {index + 1}</span>
                          {!outputs.some(output =>
                            output.assignedProfiles.some(p => p.type === type && p.index === index)
                          ) && (
                              <span className="unassigned-badge">No Assigned Output</span>
                            )}
                          <button
                            onClick={() => {
                              if (type === 'Passthrough') handleRemovePassthrough(index);
                              else if (type === 'Uncompressed') handleRemoveUncompressed(index);
                              else handleRemoveResolution(type, index);
                            }}
                            className="btn btn-danger btn-sm"
                          >
                            <FaTrash />
                          </button>
                        </div>
                        <div className="instance-fields">
                          {type !== 'Passthrough' && type !== 'Uncompressed' && (
                            <>
                              <div className="form-group">
                                <label>Bitrate (Mbps)</label>
                                <input
                                  type="text"
                                  value={instance.bitrate || ''}
                                  onChange={(e) => handleBitrateChange(e, type, index)}
                                  onBlur={(e) => handleBitrateBlur(e, type, index)}
                                  className="form-control"
                                  inputMode="decimal"
                                  pattern="[0-9]*\.?[0-9]*"
                                  placeholder={`${BITRATE_CONSTRAINTS[type]?.min || 0}-${BITRATE_CONSTRAINTS[type]?.max || 99} Mbps`}
                                />
                              </div>
                              <div className="form-group">
                                <label>Framerate (fps)</label>
                                <select
                                  value={instance.framerate || ''}
                                  onChange={(e) => handleFramerateChange(e, type, index)}
                                  className="form-control"
                                >
                                  <option value="">Select Framerate</option>
                                  <option value="23.976">23.976</option>
                                  <option value="24">24</option>
                                  <option value="24.97">24.97</option>
                                  <option value="25">25</option>
                                  <option value="29.97">29.97</option>
                                  <option value="30">30</option>
                                  <option value="49.97">49.95</option>
                                  <option value="50">50</option>
                                  <option value="59.94">59.94</option>
                                  <option value="60">60</option>
                                </select>
                              </div>
                              <div className="form-group">
                                <label>Video Codec</label>
                                <select
                                  value={instance.codec || ''}
                                  onChange={(e) => handleCodecChange(e, type, index)}
                                  className="form-control"
                                >
                                  <option value="H264">H264</option>
                                  <option value="H265">H265</option>
                                  <option value="PRORES">PRORES</option>
                                  <option value="MPEG2">MPEG2</option>
                                  <option value="RAW">RAW</option>
                                  <option value="WMV">WMV</option>
                                </select>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      )}

      {/* <div className="total-bitrate-display">
        <strong>Total Bitrate:</strong> {calculateTotalBitrate().toFixed(2)} Mbps / {MAX_TOTAL_BITRATE_PER_CHANNEL} Mbps
        {calculateTotalBitrate() > MAX_TOTAL_BITRATE_PER_CHANNEL && (
          <span className="text-danger"> (Exceeds limit!)</span>
        )}
      </div> */}

      {(selectedInputType === 'HDMI' || selectedInputType === 'SDI' || selectedInputType === 'ASI' || selectedInputType === 'IP Inputs') && (
        <div className="protocol-assignment-section">

          <OutputManager />

          <div className="form-group">
            <label>Enable Secondary Input</label>
            <div className="form-check form-switch d-flex align-items-center">
              <input
                type="checkbox"
                className="form-check-input"
                id="secondaryInputSwitch"
                checked={showSecondaryInput}
                onChange={toggleSecondaryInput}
              />
              <label className="form-check-label ms-2" htmlFor="secondaryInputSwitch">
                {showSecondaryInput ? 'On' : 'Off'}
              </label>

              {showSecondaryInput && (
                <div className="ms-3">
                  <select
                    value={secondaryInputType}
                    onChange={(e) => setSecondaryInputType(e.target.value)}
                    className="form-control d-inline-block w-auto"
                  >
                    <option value="">Select Input Type</option>
                    <option value="HDMI">HDMI</option>
                    <option value="SDI">SDI</option>
                    <option value="IP Inputs">IP Inputs</option>
                  </select>

                  {secondaryInputType === 'IP Inputs' && (
                    <select
                      value={secondaryIpType}
                      onChange={(e) => setSecondaryIpType(e.target.value)}
                      className="form-control d-inline-block w-auto ms-2"
                    >
                      <option value="">Select IP Input Type</option>
                      {[
                        'SRT(PUSH/PULL)',
                        'RTMP',
                        'HLS',
                        'UDP',
                        'Fileout',
                        'RTSP',
                        'YoutubeLive',
                        'Playlist',
                        'RTP',
                        'NDI'
                      ].map((ipType) => (
                        <option
                          key={ipType}
                          value={ipType}
                          className={secondaryIpType === ipType ? 'active' : ''}
                        >
                          {ipType}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className={`submit-button ${!isFormValid() ? 'disabled' : ''}`}
            disabled={!isFormValid()}
            title={!isFormValid() ? "Please complete all required fields and ensure bitrate limits are not exceeded" : ""}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default CalculationTable;