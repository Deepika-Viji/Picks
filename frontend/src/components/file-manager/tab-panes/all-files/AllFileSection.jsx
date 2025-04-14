import React, { useContext, useEffect, useRef, useState } from 'react'
import { DigiContext } from '../../../../context/DigiContext'
import { Link } from 'react-router-dom';

const AllFileSection = () => {
    const {handleNewFolderModalOpen,handleMobileFileManagerBtn,fileManagerRef} = useContext(DigiContext)
    const [dropdownBtn, setDropdownBtn] = useState({
        design: false,
        development: false,
        sketch: false,
        projectA: false,
        admin: false,
        application: false,
        image: false,
        videos: false,
      });
    
     // Create an array of refs to hold the individual dropdown refs
  const dropdownRefs = useRef([]);

  // Function to update the dropdown refs
  const updateDropdownRef = (index, element) => {
    dropdownRefs.current[index] = element;
  };

  // Function to handle dropdown buttons
  const handleDropdownBtn = (id) => {
    setDropdownBtn((prevCheckboxes) => ({
      ...Object.fromEntries(
        Object.entries(prevCheckboxes).map(([key]) => [key, false])
      ),
      [id]: !prevCheckboxes[id],
    }));
  };

  // Function to handle outside click
  const handleOutsideClick = (event) => {
    dropdownRefs.current.forEach((ref, index) => {
      if (ref && !ref.contains(event.target)) {
        setDropdownBtn((prevCheckboxes) => ({
          ...prevCheckboxes,
          [Object.keys(prevCheckboxes)[index]]: false,
        }));
      }
    });
  };

  // Add the dropdownRefs to each element
  useEffect(() => {
    dropdownRefs.current = dropdownRefs.current.slice(0, Object.keys(dropdownBtn).length);
  }, [dropdownBtn]);

  // Attach the event listener on component mount
  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  return (
    <div className="panel mb-30">
        <div className="panel-header">
            <div className="mobile-file-manager-btn d-flex align-items-center gap-1" ref={fileManagerRef}>
                <button className="btn btn-sm btn-icon btn-primary file-manager-menu-btn d-lg-none" onClick={handleMobileFileManagerBtn}><i className="fa-light fa-bars"></i></button>
                <h5>All Files</h5>
            </div>
            <form className="file-search">
                <input type="search" id="fileSearch" className="form-control" placeholder="Search...."/>
                <button><i className="fa-light fa-magnifying-glass"></i></button>
            </form>
        </div>
        <div className="panel-body">
            <div className="row g-3">
                <div className="col-md-3 col-sm-4 col-6">
                    <div className="file-manager-card">
                        <div className="top">
                            <div className="part-icon">
                                <span><i className="fa-duotone fa-folder-open"></i></span>
                            </div>
                            <div className="dropdown" ref={(element) => updateDropdownRef(0, element)}>
                                <button className={`action ${dropdownBtn.design? 'show':''}`} onClick={()=>handleDropdownBtn('design')}><i className="fa-regular fa-ellipsis-vertical"></i></button>
                                <ul className={`dropdown-menu ${dropdownBtn.design? 'show':''}`}>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-eye"></i></span> Details</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-share-nodes"></i></span> Share</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-copy"></i></span> Copy</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-arrows-up-down-left-right"></i></span> Move</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-download"></i></span> Download</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-pen"></i></span> Rename</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-trash"></i></span> Delete</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="left">
                                <button className="folder-name">Design</button>
                                <span className="file-quantity">12 Files</span>
                            </div>
                            <div className="right">
                                <span className="storage-used">3GB</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-4 col-6">
                    <div className="file-manager-card">
                        <div className="top">
                            <div className="part-icon">
                                <span><i className="fa-duotone fa-folder-open"></i></span>
                            </div>
                            <div className="dropdown" ref={(element) => updateDropdownRef(1, element)}>
                                <button className={`action ${dropdownBtn.development? 'show':''}`} onClick={()=>handleDropdownBtn('development')}><i className="fa-regular fa-ellipsis-vertical"></i></button>
                                <ul className={`dropdown-menu ${dropdownBtn.development? 'show':''}`}>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-eye"></i></span> Details</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-share-nodes"></i></span> Share</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-copy"></i></span> Copy</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-arrows-up-down-left-right"></i></span> Move</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-download"></i></span> Download</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-pen"></i></span> Rename</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-trash"></i></span> Delete</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="left">
                                <button className="folder-name">Development</button>
                                <span className="file-quantity">12 Files</span>
                            </div>
                            <div className="right">
                                <span className="storage-used">3GB</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-4 col-6">
                    <div className="file-manager-card">
                        <div className="top">
                            <div className="part-icon">
                                <span><i className="fa-duotone fa-folder-open"></i></span>
                            </div>
                            <div className="dropdown" ref={(element) => updateDropdownRef(2, element)}>
                                <button className={`action ${dropdownBtn.sketch? 'show':''}`} onClick={()=>handleDropdownBtn('sketch')}><i className="fa-regular fa-ellipsis-vertical"></i></button>
                                <ul className={`dropdown-menu ${dropdownBtn.sketch? 'show':''}`}>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-eye"></i></span> Details</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-share-nodes"></i></span> Share</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-copy"></i></span> Copy</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-arrows-up-down-left-right"></i></span> Move</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-download"></i></span> Download</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-pen"></i></span> Rename</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-trash"></i></span> Delete</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="left">
                                <button className="folder-name">Sketch Design</button>
                                <span className="file-quantity">12 Files</span>
                            </div>
                            <div className="right">
                                <span className="storage-used">3GB</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-4 col-6">
                    <div className="file-manager-card">
                        <div className="top">
                            <div className="part-icon">
                                <span><i className="fa-duotone fa-folder-open"></i></span>
                            </div>
                            <div className="dropdown" ref={(element) => updateDropdownRef(3, element)}>
                                <button className={`action ${dropdownBtn.projectA? 'show':''}`} onClick={()=>handleDropdownBtn('projectA')}><i className="fa-regular fa-ellipsis-vertical"></i></button>
                                <ul className={`dropdown-menu ${dropdownBtn.projectA? 'show':''}`}>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-eye"></i></span> Details</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-share-nodes"></i></span> Share</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-copy"></i></span> Copy</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-arrows-up-down-left-right"></i></span> Move</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-download"></i></span> Download</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-pen"></i></span> Rename</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-trash"></i></span> Delete</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="left">
                                <button className="folder-name">Project A</button>
                                <span className="file-quantity">12 Files</span>
                            </div>
                            <div className="right">
                                <span className="storage-used">3GB</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-4 col-6">
                    <div className="file-manager-card">
                        <div className="top">
                            <div className="part-icon">
                                <span><i className="fa-duotone fa-folder-open"></i></span>
                            </div>
                            <div className="dropdown" ref={(element) => updateDropdownRef(4, element)}>
                                <button className={`action ${dropdownBtn.admin? 'show':''}`} onClick={()=>handleDropdownBtn('admin')}><i className="fa-regular fa-ellipsis-vertical"></i></button>
                                <ul className={`dropdown-menu ${dropdownBtn.admin? 'show':''}`}>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-eye"></i></span> Details</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-share-nodes"></i></span> Share</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-copy"></i></span> Copy</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-arrows-up-down-left-right"></i></span> Move</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-download"></i></span> Download</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-pen"></i></span> Rename</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-trash"></i></span> Delete</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="left">
                                <button className="folder-name">Admin</button>
                                <span className="file-quantity">12 Files</span>
                            </div>
                            <div className="right">
                                <span className="storage-used">3GB</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-4 col-6">
                    <div className="file-manager-card">
                        <div className="top">
                            <div className="part-icon">
                                <span><i className="fa-duotone fa-folder-open"></i></span>
                            </div>
                            <div className="dropdown" ref={(element) => updateDropdownRef(5, element)}>
                                <button className={`action ${dropdownBtn.application? 'show':''}`} onClick={()=>handleDropdownBtn('application')}><i className="fa-regular fa-ellipsis-vertical"></i></button>
                                <ul className={`dropdown-menu ${dropdownBtn.application? 'show':''}`}>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-eye"></i></span> Details</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-share-nodes"></i></span> Share</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-copy"></i></span> Copy</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-arrows-up-down-left-right"></i></span> Move</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-download"></i></span> Download</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-pen"></i></span> Rename</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-trash"></i></span> Delete</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="left">
                                <button className="folder-name">Applications</button>
                                <span className="file-quantity">12 Files</span>
                            </div>
                            <div className="right">
                                <span className="storage-used">3GB</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-4 col-6">
                    <div className="file-manager-card">
                        <div className="top">
                            <div className="part-icon">
                                <span><i className="fa-duotone fa-folder-open"></i></span>
                            </div>
                            <div className="dropdown" ref={(element) => updateDropdownRef(6, element)}>
                                <button className={`action ${dropdownBtn.image? 'show':''}`} onClick={()=>handleDropdownBtn('image')}><i className="fa-regular fa-ellipsis-vertical"></i></button>
                                <ul className={`dropdown-menu ${dropdownBtn.image? 'show':''}`}>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-eye"></i></span> Details</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-share-nodes"></i></span> Share</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-copy"></i></span> Copy</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-arrows-up-down-left-right"></i></span> Move</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-download"></i></span> Download</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-pen"></i></span> Rename</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-trash"></i></span> Delete</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="left">
                                <button className="folder-name">Image</button>
                                <span className="file-quantity">12 Files</span>
                            </div>
                            <div className="right">
                                <span className="storage-used">3GB</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-4 col-6">
                    <div className="file-manager-card">
                        <div className="top">
                            <div className="part-icon">
                                <span><i className="fa-duotone fa-folder-open"></i></span>
                            </div>
                            <div className="dropdown" ref={(element) => updateDropdownRef(7, element)}>
                                <button className={`action ${dropdownBtn.videos? 'show':''}`} onClick={()=>handleDropdownBtn('videos')}><i className="fa-regular fa-ellipsis-vertical"></i></button>
                                <ul className={`dropdown-menu ${dropdownBtn.videos? 'show':''}`}>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-eye"></i></span> Details</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-share-nodes"></i></span> Share</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-copy"></i></span> Copy</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-arrows-up-down-left-right"></i></span> Move</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-download"></i></span> Download</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-pen"></i></span> Rename</Link></li>
                                    <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-regular fa-trash"></i></span> Delete</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="left">
                                <button className="folder-name">Videos</button>
                                <span className="file-quantity">12 Files</span>
                            </div>
                            <div className="right">
                                <span className="storage-used">3GB</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="d-flex justify-content-between">
                        <button className="btn btn-sm btn-primary"><i className="fa-light fa-eye"></i> Show All</button>
                        <button className="btn btn-sm btn-success" onClick={handleNewFolderModalOpen} data-bs-toggle="modal" data-bs-target="#createFolder"><i className="fa-light fa-plus"></i> Create Folder</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllFileSection