import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import { FaPlus, FaTrash, FaLink, FaUnlink, FaCheck } from 'react-icons/fa';
import '../../assets/css/CalculationTable.css';

const CalculationTable = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { numChannels = 1, currentChannel = 1, channels = [], editIndex, selectedChannel } = location.state || {};

  const [resolution, setResolution] = useState({
    SD: [],
    HD: [],
    FHD: [],
    UHD: [],
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

  const calculateTotalBitrate = () => {
    return Object.values(resolution).reduce((total, instances) => {
      return total + instances.reduce((sum, inst) => sum + (inst.bitrate || 0), 0);
    }, 0);
  };

  const loadChannelData = (channel) => {
    const transformedResolution = transformResolution(channel.resolution);
    setResolution(transformedResolution);

    setSelectedInputType(channel.type || '');
    setSelectedIpType(channel.ipType || '');
    setSelectedFormat(channel.format || '4:2:0-I420');
    setRm(channel.rm || 0);
    setMem(channel.memory || '');
    setCpu(channel.cpu || '');
    setType(channel.type || '');

    if (channel.outputs) {
      setOutputs(channel.outputs);
      setSelectedOutputIndex(channel.outputs.length > 0 ? 0 : null);
    }

    if (channel.muxerValues) {
      setMuxerValues(channel.muxerValues);
    }
    if (channel.slicingValues) {
      setSlicingValues(channel.slicingValues);
    }
    if (channel.slicingInputValues) {
      setSlicingInputValues(channel.slicingInputValues);
    }

    if (channel.secondaryType) {
      setShowSecondaryInput(true);
      setSecondaryInputType(channel.secondaryType);
      setSecondaryIpType(channel.secondaryIpType || '');
    }
  };

  useEffect(() => {
    if (location.state?.editConfigId) {
      setIsEditing(true);
      setAllChannels(location.state.channels || []);
      if (location.state.channels?.length > 0) {
        loadChannelData(location.state.channels[0]);
      }
    }
  }, [location.state]);

  const transformResolution = (dbResolution) => {
    if (!dbResolution) {
      return {
        SD: [],
        HD: [],
        FHD: [],
        UHD: [],
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
    axios.get('http://localhost:5000/api/calculate/tables')
      .then((response) => setPickstablesData(response.data))
      .catch((error) => {
        console.error('Error fetching pickstables data:', error);
        Swal.fire({ icon: 'error', title: 'Error', text: 'Failed to fetch pickstables data.' });
      });
  }, []);

  const fetchPreviousChannels = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/channels');
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
    const totalInstances = Object.values(resolution).reduce((acc, curr) => acc + curr.length, 0);

    if (totalInstances >= 8) {
      Swal.fire({
        icon: 'warning',
        title: 'Limit Exceeded',
        text: 'You cannot add more than 8 resolution instances.'
      });
      return;
    }

    const currentTotalBitrate = calculateTotalBitrate();
    const defaultBitrates = {
      SD: 1.5,
      HD: 4,
      FHD: 6,
      UHD: 12,
    };
    const newBitrate = defaultBitrates[type] || 1.5;

    if (currentTotalBitrate + newBitrate > MAX_TOTAL_BITRATE_PER_CHANNEL) {
      Swal.fire({
        icon: 'error',
        title: 'Bitrate Limit Exceeded',
        text: `Adding this ${type} resolution would exceed the maximum bitrate of ${MAX_TOTAL_BITRATE_PER_CHANNEL} Mbps.`
      });
      return;
    }

    const defaultBitrate = defaultBitrates[type] || 1.5;

    setResolution((prev) => ({
      ...prev,
      [type]: [...prev[type], { bitrate: defaultBitrate, framerate: '25', codec: 'H264' }],
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
          // Adjust indices of profiles with the same type but higher index
          .map(profile => {
            if (profile.type === type && profile.index > index) {
              return { ...profile, index: profile.index - 1 };
            }
            return profile;
          })
      })).filter(output => output.assignedProfiles.length > 0 || output.protocol);

      // Reset selected output index if needed
      if (selectedOutputIndex !== null && selectedOutputIndex >= newOutputs.length) {
        setSelectedOutputIndex(newOutputs.length > 0 ? newOutputs.length - 1 : null);
      }

      return newOutputs;
    });
  };

  const handleBitrateChange = (e, type, index) => {
    const { value } = e.target;
    const constraints = BITRATE_CONSTRAINTS[type] || { min: 0, max: 99 };

    const currentTotalBitrate = Object.entries(resolution).reduce((total, [resType, instances]) => {
      return total + instances.reduce((sum, inst) => sum + (inst.bitrate || 0), 0);
    }, 0);

    const currentBitrate = resolution[type][index].bitrate || 0;
    const newBitrate = parseFloat(value) || 0;
    const newTotal = currentTotalBitrate - currentBitrate + newBitrate;

    if (value === '') {
      setResolution((prev) => ({
        ...prev,
        [type]: prev[type].map((instance, i) =>
          i === index ? { ...instance, bitrate: parseFloat(value) } : instance
        ),
      }));
      return;
    }

    if (newBitrate < constraints.min || newBitrate > constraints.max) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Bitrate',
        text: `${type} bitrate must be between ${constraints.min} and ${constraints.max} Mbps.`
      });
      return;
    }

    if (newTotal > MAX_TOTAL_BITRATE_PER_CHANNEL) {
      Swal.fire({
        icon: 'error',
        title: 'Bitrate Limit Exceeded',
        text: `Total bitrate for all resolutions cannot exceed ${MAX_TOTAL_BITRATE_PER_CHANNEL} Mbps.`
      });
      return;
    }

    setResolution((prev) => ({
      ...prev,
      [type]: prev[type].map((instance, i) =>
        i === index ? { ...instance, bitrate: parseFloat(value) } : instance
      ),
    }));
  };

  const handleFramerateChange = (e, type, index) => {
    const { value } = e.target;
    setResolution((prev) => ({
      ...prev,
      [type]: prev[type].map((instance, i) =>
        i === index ? { ...instance, framerate: value === 'custom' ? 'custom' : parseFloat(value), customFramerate: value === 'custom' ? instance.customFramerate || '' : '' } : instance
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

  const handleProtocolSelection = (e) => {
    setSelectedProtocol(e.target.value);
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
      const response = await axios.post('http://localhost:5000/api/calculate', {
        sd: resolution.SD.length || 0,
        hd: resolution.HD.length || 0,
        fhd: resolution.FHD.length || 0,
        uhd: resolution.UHD.length || 0,
        // Send the protocols of each output (one per output)
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
    if (location.state?.teleportType === 'xport' && selectedInputType === 'ASI') {
      if (location.state.channels.length >= 1) {
        if (showAlerts) {
          Swal.fire({
            icon: 'error',
            title: 'ASI Limit Reached',
            text: 'Xport with ASI input can only have one channel.'
          });
        }
        return false;
      }
    }

    const totalResolution = Object.values(resolution).reduce((acc, curr) => acc + curr.length, 0);
    const totalProtocols = outputs.reduce((sum, output) => sum + output.assignedProfiles.length, 0);
    let totalBitrate = 0;
    let bitrateValid = true;

    for (const [type, instances] of Object.entries(resolution)) {
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

    // if (totalProtocols < 1 || totalProtocols > 8) {
    //   if (showAlerts) {
    //     Swal.fire({andlesubmit
    //       icon: 'error',
    //       title: 'Invalid Protocol Count',
    //       text: 'You must have between 1 and 8 protocol assignments.'
    //     });
    //   }
    //   return false;
    // }

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
    // Create the protocols object by mapping outputs to their assigned profiles
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
      },
      protocols, // Now this is properly defined
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
    const addOutput = () => {
      if (!selectedProtocol) {
        Swal.fire({ icon: 'warning', title: 'No Protocol Selected', text: 'Please select a protocol first.' });
        return;
      }
    
      if (outputs.length >= 8) {
        Swal.fire({ icon: 'warning', title: 'Limit Exceeded', text: 'Maximum 8 outputs allowed.' });
        return;
      }

      const newOutput = {
        id: Date.now(),
        protocol: selectedProtocol,
        assignedProfiles: []
      };

      setOutputs([...outputs, newOutput]);
      setSelectedOutputIndex(outputs.length);
    };

    const removeOutput = (outputId) => {
      setOutputs(outputs.filter(output => output.id !== outputId));
      if (selectedOutputIndex >= outputs.length - 1) {
        setSelectedOutputIndex(outputs.length - 2);
      }
    };

    const assignProfile = (type, index) => {
      if (selectedOutputIndex === null) {
        Swal.fire({ icon: 'warning', title: 'No Output Selected', text: 'Please select or create an output first.' });
        return;
      }
    
      const output = outputs[selectedOutputIndex];

      const isAlreadyAssignedToThisOutput = output.assignedProfiles.some(
        profile => profile.type === type && profile.index === index
      );
    
      if (isAlreadyAssignedToThisOutput) {
        Swal.fire({ icon: 'warning', title: 'Already Assigned', text: 'This profile is already assigned to this output.' });
        return;
      }

      const updatedOutputs = [...outputs];
      updatedOutputs[selectedOutputIndex].assignedProfiles.push({ type, index });
      setOutputs(updatedOutputs);
    };

    const removeProfile = (type, index) => {
      if (selectedOutputIndex === null) return;

      const updatedOutputs = [...outputs];
      updatedOutputs[selectedOutputIndex].assignedProfiles =
        updatedOutputs[selectedOutputIndex].assignedProfiles.filter(
          profile => !(profile.type === type && profile.index === index)
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
          <button onClick={addOutput} className="btn btn-primary">
            <FaPlus /> Add Output
          </button>

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
                <p>No profiles assigned yet</p>
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
              {Object.entries(resolution).map(([type, instances]) => (
                instances.length > 0 && (
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
                            className={`btn btn-sm ${isAssigned ? 'btn-success' : 'btn-outline-primary'
                              }`}
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
                )
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const handleSubmit = async () => {
    if (location.state?.teleportType === 'xport' && selectedInputType === 'ASI') {
      if (location.state.channels.length >= 1) {
        Swal.fire({
          icon: 'error',
          title: 'ASI Limit Reached',
          text: 'Xport with ASI input can only have one channel.'
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

    const updatedUsedInputTypes = { ...location.state?.usedInputTypes || {} };
    if (editIndex !== undefined) {
      const oldType = location.state?.channels?.[editIndex]?.type;
      if (oldType === 'HDMI') updatedUsedInputTypes.HDMI = (updatedUsedInputTypes.HDMI || 0) - 1;
      if (oldType === 'SDI') updatedUsedInputTypes.SDI = (updatedUsedInputTypes.SDI || 0) - 1;
      if (oldType === 'IP Inputs') updatedUsedInputTypes.IP = (updatedUsedInputTypes.IP || 0) - 1;
    }

    if (selectedInputType === 'HDMI') updatedUsedInputTypes.HDMI = (updatedUsedInputTypes.HDMI || 0) + 1;
    if (selectedInputType === 'SDI') updatedUsedInputTypes.SDI = (updatedUsedInputTypes.SDI || 0) + 1;
    if (selectedInputType === 'IP Inputs') updatedUsedInputTypes.IP = (updatedUsedInputTypes.IP || 0) + 1;

    let updatedChannels = [...(location.state?.channels || [])];

    if (editIndex !== undefined) {
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
        ...location.state,
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
                  HDMI {location.state?.remainingHDMI <= 0 ? '(Max reached)' : ''}
                </option>
                <option
                  value="SDI"
                  disabled={location.state?.remainingSDI <= 0}
                >
                  SDI {location.state?.remainingSDI <= 0 ? '(Max reached)' : ''}
                </option>
                <option value="IP Inputs">
                  IP Inputs
                </option>
                <option
                  value="ASI"
                  disabled={location.state?.remainingASI <= 0}
                >
                  ASI {location.state?.remainingASI <= 0 ? '(Max reached)' : ''}
                </option>
              </>
            ) : (
              <>
                <option
                  value="HDMI"
                  disabled={location.state?.remainingHDMI <= 0}
                >
                  HDMI {location.state?.remainingHDMI <= 0 ? '(Max reached)' : ''}
                </option>
                <option
                  value="SDI"
                  disabled={location.state?.remainingSDI <= 0}
                >
                  SDI {location.state?.remainingSDI <= 0 ? '(Max reached)' : ''}
                </option>
                <option value="IP Inputs">
                  IP Inputs
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
                  className={selectedIpType === ipType ? 'active' : ''}
                >
                  {ipType}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {(selectedInputType === 'HDMI' || selectedInputType === 'SDI' || selectedInputType === 'ASI' || selectedInputType === 'IP Inputs') && (
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
          <label>Add Resolution (Max 8 Total)</label>
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
                      disabled={Object.values(resolution).reduce((acc, curr) => acc + curr.length, 0) >= 8}
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
                        <FaTrash />  {type}
                      </button>
                    )}
                  </div>
                  <span className="resolution-counter">
                    ({resolution[type].length} added)
                  </span>
                </div>
              ))}
            </div>

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
                            onClick={() => handleRemoveResolution(type, index)}
                            className="btn btn-danger btn-sm"
                          >
                            <FaTrash />
                          </button>
                        </div>
                        <div className="instance-fields">
                          <div className="form-group">
                            <label>Bitrate (Mbps)</label>
                            <input
                              type="number"
                              value={instance.bitrate || ''}
                              onChange={(e) => handleBitrateChange(e, type, index)}
                              className="form-control"
                              min={BITRATE_CONSTRAINTS[type].min}
                              max={BITRATE_CONSTRAINTS[type].max}
                              step="0.01"
                              placeholder={`${BITRATE_CONSTRAINTS[type].min}-${BITRATE_CONSTRAINTS[type].max} Mbps`}
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
                              <option value="custom">Custom</option>
                            </select>
                            {instance.framerate === 'custom' && (
                              <input
                                type="number"
                                value={instance.customFramerate || ''}
                                onChange={(e) => {
                                  const customFramerate = e.target.value;
                                  setResolution((prev) => ({
                                    ...prev,
                                    [type]: prev[type].map((inst, i) =>
                                      i === index ? { ...inst, customFramerate } : inst
                                    ),
                                  }));
                                }}
                                className="form-control"
                                placeholder="Enter custom framerate"
                              />
                            )}
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

      <div className="total-bitrate-display">
        <strong>Total Bitrate:</strong> {calculateTotalBitrate().toFixed(2)} Mbps / {MAX_TOTAL_BITRATE_PER_CHANNEL} Mbps
        {calculateTotalBitrate() > MAX_TOTAL_BITRATE_PER_CHANNEL && (
          <span className="text-danger"> (Exceeds limit!)</span>
        )}
      </div>

      {(selectedInputType === 'HDMI' || selectedInputType === 'SDI' || selectedInputType === 'ASI' || selectedInputType === 'IP Inputs') && (
        <div className="protocol-assignment-section">
          <div className="form-group">
            <label>Select Output Protocol</label>
            <select
              value={selectedProtocol}
              onChange={handleProtocolSelection}
              className="form-control"
            >
              <option value="">Select Output</option>
              {[
                { value: 'SRT(PUSH/PULL)', label: 'SRT (PUSH/PULL)' },
                { value: 'RTMP PUSH', label: 'RTMP PUSH' },
                { value: 'HLS (PUSH/PULL)', label: 'HLS (PUSH/PULL)' },
                { value: 'UDP (UNICAST/MULTICAST)', label: 'UDP (UNICAST/MULTICAST)' },
                { value: 'NDI', label: 'NDI' },
                { value: 'Fileout', label: 'Fileout' },
                { value: 'RTP', label: 'RTP' }
              ].map((protocol) => (
                <option
                  key={protocol.value}
                  value={protocol.value}
                  className={selectedProtocol === protocol.value ? 'active' : ''}
                >
                  {protocol.label}
                </option>
              ))}
            </select>
          </div>

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