import React, { useContext, useEffect, useRef, useState } from 'react'
import { DigiContext } from '../../../../context/DigiContext'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import { Link } from 'react-router-dom'

const RecentFileSection = ({state,title}) => {
    const {handleFileDetailsModalShow,handleMobileFileManagerBtn} = useContext(DigiContext)
    const [isView,setIsView] = useState(state)
    const handleListView = () => {
        setIsView(true)
    }
    const handleGridView = () => {
        setIsView(false)
    }
      
    const [dropdownBtn, setDropdownBtn] = useState({
        btn1:false,
        btn2:false,
        btn3:false,
        btn4:false,
        btn5:false,
        btn6:false,
        btn7:false,
        btn8:false,
        btn9:false,
        btn10:false,
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
    <div className="panel">
        <div className="panel-header">
            <div className="d-flex align-items-center gap-1">
                <button className="btn btn-sm btn-icon btn-primary file-manager-menu-btn d-lg-none" onClick={handleMobileFileManagerBtn}><i className="fa-light fa-bars"></i></button>
                <h5>{title}</h5>
            </div>
            <div className="btn-box">
                <button className={`btn btn-sm btn-icon btn-outline-primary btn-grid-view ${isView? '':'active'}`} onClick={handleGridView}><i className="fa-solid fa-grid-2"></i></button>
                <button className={`btn btn-sm btn-icon btn-outline-primary btn-list-view ${isView? 'active':''}`} onClick={handleListView}><i className="fa-regular fa-bars"></i></button>
            </div>
        </div>
        <div className="panel-body">
            <OverlayScrollbarsComponent>
                <div>
                    <div className={`file-manager-row recent-files ${isView? 'list-view':''}`}>
                        <div className="file-manager-col-head">
                            <span>Thumbnail</span>
                            <span>Name</span>
                            <span>File Size</span>
                            <span>Type</span>
                            <span></span>
                        </div>
                        <div className="file-manager-col">
                            <div className="file-card">
                                <div className="part-img">
                                    <button className="btn-flush" data-bs-toggle="modal" onClick={handleFileDetailsModalShow} data-bs-target="#fileDetailsModal"><img src="assets/images/auth-bg.png" alt="Image"/></button>
                                </div>
                                <div className="part-txt">
                                    <div className="d-flex justify-content-between">
                                        <button className="btn-flush file-name" data-bs-toggle="modal" onClick={handleFileDetailsModalShow} data-bs-target="#fileDetailsModal">background.jpg</button>
                                        <span className="file-size">375KB</span>
                                    </div>
                                </div>
                                <div className="file-type">
                                    <span>JPG file</span>
                                </div>
                                <div className="dropdown action" ref={(element) => updateDropdownRef(0, element)}>
                                    <button className={`btn-flush ${dropdownBtn.btn1? 'show':''}`} onClick={()=>handleDropdownBtn('btn1')} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa-regular fa-ellipsis-vertical"></i>
                                    </button>
                                    <button className={`btn btn-sm btn-outline-primary  ${dropdownBtn.btn1? 'show':''}`} onClick={()=>handleDropdownBtn('btn1')} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Action <i className="fa-regular fa-angle-down"></i>
                                    </button>
                                    <ul className={`dropdown-menu dropdown-recent ${dropdownBtn.btn1? 'show':''}`}  
                                    style={!isView? {position: 'absolute',inset: '0px auto auto 0px',margin: '0px',transform: 'translate(0px, 19px)',}: {}}
                                    >
                                        <li><button className="dropdown-item" data-bs-toggle="modal" onClick={handleFileDetailsModalShow} data-bs-target="#fileDetailsModal"><span className="dropdown-icon"><i className="fa-light fa-eye"></i></span> View</button></li>
                                        <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-light fa-pen"></i></span> Rename</Link></li>
                                        <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-light fa-arrows-up-down-left-right"></i></span> Move</Link></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-light fa-trash"></i></span> Delete</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="file-manager-col">
                            <div className="file-card">
                                <div className="part-img">
                                    <button className="btn-flush" data-bs-toggle="modal" onClick={handleFileDetailsModalShow} data-bs-target="#fileDetailsModal"><img src="assets/images/pdf.png" className="file-icon" alt="Image"/></button>
                                </div>
                                <div className="part-txt">
                                    <div className="d-flex justify-content-between">
                                        <button className="btn-flush file-name" data-bs-toggle="modal" onClick={handleFileDetailsModalShow} data-bs-target="#fileDetailsModal">document.pdf</button>
                                        <span className="file-size">573KB</span>
                                    </div>
                                </div>
                                <div className="file-type">
                                    <span>PDF file</span>
                                </div>
                                <div className="dropdown action" ref={(element) => updateDropdownRef(1, element)}>
                                    <button className={`btn-flush ${dropdownBtn.btn2? 'show':''}`} onClick={()=>handleDropdownBtn('btn2')} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa-regular fa-ellipsis-vertical"></i>
                                    </button>
                                    <button className={`btn btn-sm btn-outline-primary  ${dropdownBtn.btn2? 'show':''}`} onClick={()=>handleDropdownBtn('btn2')} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Action <i className="fa-regular fa-angle-down"></i>
                                    </button>
                                    <ul className={`dropdown-menu dropdown-recent ${dropdownBtn.btn2? 'show':''}` } style={
                                    !isView
                                    ? {
                                        position: 'absolute',
                                        inset: '0px auto auto 0px',
                                        margin: '0px',
                                        transform: 'translate(0px, 19px)',
                                        }
                                    : {}
                                    }
                                    >
                                        <li><button className="dropdown-item" data-bs-toggle="modal" onClick={handleFileDetailsModalShow} data-bs-target="#fileDetailsModal"><span className="dropdown-icon"><i className="fa-light fa-eye"></i></span> View</button></li>
                                        <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-light fa-pen"></i></span> Rename</Link></li>
                                        <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-light fa-arrows-up-down-left-right"></i></span> Move</Link></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-light fa-trash"></i></span> Delete</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="file-manager-col">
                            <div className="file-card">
                                <div className="part-img">
                                    <button className="btn-flush" data-bs-toggle="modal" onClick={handleFileDetailsModalShow} data-bs-target="#fileDetailsModal"><img src="../../assets/images/css.png" className="file-icon" alt="Image"/></button>
                                </div>
                                <div className="part-txt">
                                    <div className="d-flex justify-content-between">
                                        <button className="btn-flush file-name" data-bs-toggle="modal" onClick={handleFileDetailsModalShow} data-bs-target="#fileDetailsModal">style.css</button>
                                        <span className="file-size">573KB</span>
                                    </div>
                                </div>
                                <div className="file-type">
                                    <span>CSS file</span>
                                </div>
                                <div className="dropdown action" ref={(element) => updateDropdownRef(2, element)}>
                                    <button className={`btn-flush ${dropdownBtn.btn3? 'show':''}`} onClick={()=>handleDropdownBtn('btn3')} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa-regular fa-ellipsis-vertical"></i>
                                    </button>
                                    <button className={`btn btn-sm btn-outline-primary  ${dropdownBtn.btn3? 'show':''}`} onClick={()=>handleDropdownBtn('btn3')} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Action <i className="fa-regular fa-angle-down"></i>
                                    </button>
                                    <ul className={`dropdown-menu dropdown-recent ${dropdownBtn.btn3? 'show':''}` } style={
                                    !isView
                                    ? {
                                        position: 'absolute',
                                        inset: '0px auto auto 0px',
                                        margin: '0px',
                                        transform: 'translate(0px, 19px)',
                                        }
                                    : {}
                                    }
                                    >
                                        <li><button className="dropdown-item" data-bs-toggle="modal" onClick={handleFileDetailsModalShow} data-bs-target="#fileDetailsModal"><span className="dropdown-icon"><i className="fa-light fa-eye"></i></span> View</button></li>
                                        <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-light fa-pen"></i></span> Rename</Link></li>
                                        <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-light fa-arrows-up-down-left-right"></i></span> Move</Link></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-light fa-trash"></i></span> Delete</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="file-manager-col">
                            <div className="file-card">
                                <div className="part-img">
                                    <button className="btn-flush" data-bs-toggle="modal" onClick={handleFileDetailsModalShow} data-bs-target="#fileDetailsModal"><img src="assets/images/doc.png" className="file-icon" alt="Image"/></button>
                                </div>
                                <div className="part-txt">
                                    <div className="d-flex justify-content-between">
                                        <button className="btn-flush file-name" data-bs-toggle="modal" onClick={handleFileDetailsModalShow} data-bs-target="#fileDetailsModal">document.docx</button>
                                        <span className="file-size">573KB</span>
                                    </div>
                                </div>
                                <div className="file-type">
                                    <span>DOCX file</span>
                                </div>
                                <div className="dropdown action" ref={(element) => updateDropdownRef(3, element)}>
                                    <button className={`btn-flush ${dropdownBtn.btn4? 'show':''}`} onClick={()=>handleDropdownBtn('btn4')} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa-regular fa-ellipsis-vertical"></i>
                                    </button>
                                    <button className={`btn btn-sm btn-outline-primary  ${dropdownBtn.btn4? 'show':''}`} onClick={()=>handleDropdownBtn('btn4')} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Action <i className="fa-regular fa-angle-down"></i>
                                    </button>
                                    <ul className={`dropdown-menu dropdown-recent ${dropdownBtn.btn4? 'show':''}` } style={
                                    !isView
                                    ? {
                                        position: 'absolute',
                                        inset: '0px auto auto 0px',
                                        margin: '0px',
                                        transform: 'translate(0px, 19px)',
                                        }
                                    : {}
                                    }
                                    >
                                        <li><button className="dropdown-item" data-bs-toggle="modal" onClick={handleFileDetailsModalShow} data-bs-target="#fileDetailsModal"><span className="dropdown-icon"><i className="fa-light fa-eye"></i></span> View</button></li>
                                        <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-light fa-pen"></i></span> Rename</Link></li>
                                        <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-light fa-arrows-up-down-left-right"></i></span> Move</Link></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-light fa-trash"></i></span> Delete</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="file-manager-col">
                            <div className="file-card">
                                <div className="part-img">
                                    <button className="btn-flush" data-bs-toggle="modal" onClick={handleFileDetailsModalShow} data-bs-target="#fileDetailsModal"><img src="assets/images/product-img-2.png" alt="Image"/></button>
                                </div>
                                <div className="part-txt">
                                    <div className="d-flex justify-content-between">
                                        <button className="btn-flush file-name" data-bs-toggle="modal" onClick={handleFileDetailsModalShow} data-bs-target="#fileDetailsModal">image.png</button>
                                        <span className="file-size">573KB</span>
                                    </div>
                                </div>
                                <div className="file-type">
                                    <span>PNG file</span>
                                </div>
                                <div className="dropdown action" ref={(element) => updateDropdownRef(4, element)}>
                                    <button className={`btn-flush ${dropdownBtn.btn5? 'show':''}`} onClick={()=>handleDropdownBtn('btn5')} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa-regular fa-ellipsis-vertical"></i>
                                    </button>
                                    <button className={`btn btn-sm btn-outline-primary  ${dropdownBtn.btn5? 'show':''}`} onClick={()=>handleDropdownBtn('btn5')} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Action <i className="fa-regular fa-angle-down"></i>
                                    </button>
                                    <ul className={`dropdown-menu dropdown-recent ${dropdownBtn.btn5? 'show':''}` } style={
                                    !isView
                                    ? {
                                        position: 'absolute',
                                        inset: '0px auto auto 0px',
                                        margin: '0px',
                                        transform: 'translate(0px, 19px)',
                                        }
                                    : {}
                                    }
                                    >
                                        <li><button className="dropdown-item" data-bs-toggle="modal" onClick={handleFileDetailsModalShow} data-bs-target="#fileDetailsModal"><span className="dropdown-icon"><i className="fa-light fa-eye"></i></span> View</button></li>
                                        <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-light fa-pen"></i></span> Rename</Link></li>
                                        <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-light fa-arrows-up-down-left-right"></i></span> Move</Link></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-light fa-trash"></i></span> Delete</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="file-manager-col">
                            <div className="file-card">
                                <div className="part-img">
                                    <button className="btn-flush" data-bs-toggle="modal" onClick={handleFileDetailsModalShow} data-bs-target="#fileDetailsModal"><img src="assets/images/html.png" className="file-icon" alt="Image"/></button>
                                </div>
                                <div className="part-txt">
                                    <div className="d-flex justify-content-between">
                                        <button className="btn-flush file-name" data-bs-toggle="modal" onClick={handleFileDetailsModalShow} data-bs-target="#fileDetailsModal">index.html</button>
                                        <span className="file-size">573KB</span>
                                    </div>
                                </div>
                                <div className="file-type">
                                    <span>HTML file</span>
                                </div>
                                <div className="dropdown action" ref={(element) => updateDropdownRef(5, element)}>
                                    <button className={`btn-flush ${dropdownBtn.btn6? 'show':''}`} onClick={()=>handleDropdownBtn('btn6')} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa-regular fa-ellipsis-vertical"></i>
                                    </button>
                                    <button className={`btn btn-sm btn-outline-primary  ${dropdownBtn.btn6? 'show':''}`} onClick={()=>handleDropdownBtn('btn6')} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Action <i className="fa-regular fa-angle-down"></i>
                                    </button>
                                    <ul className={`dropdown-menu dropdown-recent ${dropdownBtn.btn6? 'show':''}` } style={
                                    !isView
                                    ? {
                                        position: 'absolute',
                                        inset: '0px auto auto 0px',
                                        margin: '0px',
                                        transform: 'translate(0px, 19px)',
                                        }
                                    : {}
                                    }
                                    >
                                        <li><button className="dropdown-item" data-bs-toggle="modal" onClick={handleFileDetailsModalShow} data-bs-target="#fileDetailsModal"><span className="dropdown-icon"><i className="fa-light fa-eye"></i></span> View</button></li>
                                        <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-light fa-pen"></i></span> Rename</Link></li>
                                        <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-light fa-arrows-up-down-left-right"></i></span> Move</Link></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-light fa-trash"></i></span> Delete</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="file-manager-col">
                            <div className="file-card">
                                <div className="part-img">
                                    <button className="btn-flush" data-bs-toggle="modal" onClick={handleFileDetailsModalShow} data-bs-target="#fileDetailsModal"><img src="assets/images/product-img-4.jpg" alt="Image"/></button>
                                </div>
                                <div className="part-txt">
                                    <div className="d-flex justify-content-between">
                                        <button className="btn-flush file-name" data-bs-toggle="modal" onClick={handleFileDetailsModalShow} data-bs-target="#fileDetailsModal">Image.js</button>
                                        <span className="file-size">573KB</span>
                                    </div>
                                </div>
                                <div className="file-type">
                                    <span>JPG file</span>
                                </div>
                                <div className="dropdown action" ref={(element) => updateDropdownRef(6, element)}>
                                    <button className={`btn-flush ${dropdownBtn.btn7? 'show':''}`} onClick={()=>handleDropdownBtn('btn7')} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa-regular fa-ellipsis-vertical"></i>
                                    </button>
                                    <button className={`btn btn-sm btn-outline-primary  ${dropdownBtn.btn7? 'show':''}`} onClick={()=>handleDropdownBtn('btn7')} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Action <i className="fa-regular fa-angle-down"></i>
                                    </button>
                                    <ul className={`dropdown-menu dropdown-recent ${dropdownBtn.btn7? 'show':''}` } style={
                                    !isView
                                    ? {
                                        position: 'absolute',
                                        inset: '0px auto auto 0px',
                                        margin: '0px',
                                        transform: 'translate(0px, 19px)',
                                        }
                                    : {}
                                    }
                                    >
                                        <li><button className="dropdown-item" data-bs-toggle="modal" onClick={handleFileDetailsModalShow} data-bs-target="#fileDetailsModal"><span className="dropdown-icon"><i className="fa-light fa-eye"></i></span> View</button></li>
                                        <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-light fa-pen"></i></span> Rename</Link></li>
                                        <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-light fa-arrows-up-down-left-right"></i></span> Move</Link></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-light fa-trash"></i></span> Delete</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="file-manager-col">
                            <div className="file-card">
                                <div className="part-img">
                                    <button className="btn-flush" data-bs-toggle="modal" onClick={handleFileDetailsModalShow} data-bs-target="#fileDetailsModal"><img src="assets/images/php.png" className="file-icon" alt="Image"/></button>
                                </div>
                                <div className="part-txt">
                                    <div className="d-flex justify-content-between">
                                        <button className="btn-flush file-name" data-bs-toggle="modal" onClick={handleFileDetailsModalShow} data-bs-target="#fileDetailsModal">index.php</button>
                                        <span className="file-size">573KB</span>
                                    </div>
                                </div>
                                <div className="file-type">
                                    <span>PHP file</span>
                                </div>
                                <div className="dropdown action" ref={(element) => updateDropdownRef(7, element)}>
                                    <button className={`btn-flush ${dropdownBtn.btn8? 'show':''}`} onClick={()=>handleDropdownBtn('btn8')} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa-regular fa-ellipsis-vertical"></i>
                                    </button>
                                    <button className={`btn btn-sm btn-outline-primary  ${dropdownBtn.btn8? 'show':''}`} onClick={()=>handleDropdownBtn('btn8')} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Action <i className="fa-regular fa-angle-down"></i>
                                    </button>
                                    <ul className={`dropdown-menu dropdown-recent ${dropdownBtn.btn8? 'show':''}` } style={
                                    !isView
                                    ? {
                                        position: 'absolute',
                                        inset: '0px auto auto 0px',
                                        margin: '0px',
                                        transform: 'translate(0px, 19px)',
                                        }
                                    : {}
                                    }
                                    >
                                        <li><button className="dropdown-item" data-bs-toggle="modal" onClick={handleFileDetailsModalShow} data-bs-target="#fileDetailsModal"><span className="dropdown-icon"><i className="fa-light fa-eye"></i></span> View</button></li>
                                        <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-light fa-pen"></i></span> Rename</Link></li>
                                        <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-light fa-arrows-up-down-left-right"></i></span> Move</Link></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-light fa-trash"></i></span> Delete</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="file-manager-col">
                            <div className="file-card">
                                <div className="part-img">
                                    <button className="btn-flush" data-bs-toggle="modal" onClick={handleFileDetailsModalShow} data-bs-target="#fileDetailsModal"><img src="assets/images/svg.png" className="file-icon" alt="Image"/></button>
                                </div>
                                <div className="part-txt">
                                    <div className="d-flex justify-content-between">
                                        <button className="btn-flush file-name" data-bs-toggle="modal" onClick={handleFileDetailsModalShow} data-bs-target="#fileDetailsModal">shape.svg</button>
                                        <span className="file-size">573KB</span>
                                    </div>
                                </div>
                                <div className="file-type">
                                    <span>SVG file</span>
                                </div>
                                <div className="dropdown action" ref={(element) => updateDropdownRef(8, element)}>
                                    <button className={`btn-flush ${dropdownBtn.btn9? 'show':''}`} onClick={()=>handleDropdownBtn('btn9')} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa-regular fa-ellipsis-vertical"></i>
                                    </button>
                                    <button className={`btn btn-sm btn-outline-primary  ${dropdownBtn.btn9? 'show':''}`} onClick={()=>handleDropdownBtn('btn9')} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Action <i className="fa-regular fa-angle-down"></i>
                                    </button>
                                    <ul className={`dropdown-menu dropdown-recent ${dropdownBtn.btn9? 'show':''}` } style={
                                    !isView
                                    ? {
                                        position: 'absolute',
                                        inset: '0px auto auto 0px',
                                        margin: '0px',
                                        transform: 'translate(0px, 19px)',
                                        }
                                    : {}
                                    }
                                    >
                                        <li><button className="dropdown-item" data-bs-toggle="modal" onClick={handleFileDetailsModalShow} data-bs-target="#fileDetailsModal"><span className="dropdown-icon"><i className="fa-light fa-eye"></i></span> View</button></li>
                                        <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-light fa-pen"></i></span> Rename</Link></li>
                                        <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-light fa-arrows-up-down-left-right"></i></span> Move</Link></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-light fa-trash"></i></span> Delete</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="file-manager-col">
                            <div className="file-card">
                                <div className="part-img">
                                    <button className="btn-flush" data-bs-toggle="modal" onClick={handleFileDetailsModalShow} data-bs-target="#fileDetailsModal"><img src="assets/images/txt.png" className="file-icon" alt="Image"/></button>
                                </div>
                                <div className="part-txt">
                                    <div className="d-flex justify-content-between">
                                        <button className="btn-flush file-name" data-bs-toggle="modal" onClick={handleFileDetailsModalShow} data-bs-target="#fileDetailsModal">note.txt</button>
                                        <span className="file-size">573KB</span>
                                    </div>
                                </div>
                                <div className="file-type">
                                    <span>TXT file</span>
                                </div>
                                <div className="dropdown action" ref={(element) => updateDropdownRef(9, element)}>
                                    <button className={`btn-flush ${dropdownBtn.btn10? 'show':''}`} onClick={()=>handleDropdownBtn('btn10')} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fa-regular fa-ellipsis-vertical"></i>
                                    </button>
                                    <button className={`btn btn-sm btn-outline-primary  ${dropdownBtn.btn10? 'show':''}`} onClick={()=>handleDropdownBtn('btn10')} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Action <i className="fa-regular fa-angle-down"></i>
                                    </button>
                                    <ul className={`dropdown-menu dropdown-recent ${dropdownBtn.btn10? 'show':''} `} style={
                                    !isView
                                    ? {
                                        position: 'absolute',
                                        inset: '0px auto auto 0px',
                                        margin: '0px',
                                        transform: 'translate(0px, 19px)',
                                        }
                                    : {}
                                    }
                                    >
                                        <li><button className="dropdown-item" data-bs-toggle="modal" onClick={handleFileDetailsModalShow} data-bs-target="#fileDetailsModal"><span className="dropdown-icon"><i className="fa-light fa-eye"></i></span> View</button></li>
                                        <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-light fa-pen"></i></span> Rename</Link></li>
                                        <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-light fa-arrows-up-down-left-right"></i></span> Move</Link></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><Link className="dropdown-item" to="#"><span className="dropdown-icon"><i className="fa-light fa-trash"></i></span> Delete</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </OverlayScrollbarsComponent>
            <div className="part-btn text-center">
                <p>Showing 10 of 100 items</p>
                <button className="btn btn-sm btn-primary">Load More</button>
            </div>
        </div>
    </div>
  )
}

export default RecentFileSection