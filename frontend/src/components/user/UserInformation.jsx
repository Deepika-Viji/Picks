import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const UserInformation = () => {
    const [dropdownBtnOpen,setDropdownBtnOpen] = useState(false)
    const handleDropdownBtn = () => {
        setDropdownBtnOpen(!dropdownBtnOpen)
    }
    const headerRef = useRef(null);

    // This function will be called when a click happens outside the component
    const handleOutsideClick = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setDropdownBtnOpen(false);
      }
    };
  
    // Use the useEffect hook to attach the event listener on component mount
    useEffect(() => {
      document.addEventListener('click', handleOutsideClick);
  
      // Clean up the event listener on component unmount
      return () => {
        document.removeEventListener('click', handleOutsideClick);
      };
    }, []);
  
  return (
    <div className="panel">
        <div className="panel-body">
            <div className="profile-sidebar">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="profile-sidebar-title">User Information</h5>
                    <div className="dropdown" ref={headerRef}>
                        <button className="btn btn-sm btn-icon btn-outline-primary" onClick={handleDropdownBtn}>
                            <i className="fa-solid fa-ellipsis"></i>
                        </button>
                        <ul className={`dropdown-menu dropdown-menu-sm dropdown-menu-sm-end ${dropdownBtnOpen? 'show':''}`}>
                            <li><Link className="dropdown-item" to="/editProfile"><i className="fa-regular fa-pen-to-square"></i> Edit Information</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="top">
                    <div className="image-wrap">
                        <div className="part-img rounded-circle overflow-hidden">
                            <img src="src/assets/images/admin.png" alt="admin"/>
                        </div>
                        <button className="image-change"><i className="fa-light fa-camera"></i></button>
                    </div>
                    <div className="part-txt">
                        <h4 className="admin-name">Mitchell C. Shay</h4>
                        <span className="admin-role">Graphic Designer</span>
                        <div className="admin-social">
                            <Link to="#"><i className="fa-brands fa-facebook-f"></i></Link>
                            <Link to="#"><i className="fa-brands fa-twitter"></i></Link>
                            <Link to="#"><i className="fa-brands fa-google"></i></Link>
                            <Link to="#"><i className="fa-brands fa-instagram"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <h6 className="profile-sidebar-subtitle">Communication Info</h6>
                    <ul>
                        <li><span>Full Name:</span>Anna Adame</li>
                        <li><span>Mobile:</span>+(1) 987 65433</li>
                        <li><span>Mail:</span>example@mail.com</li>
                        <li><span>Address:</span>California, United States</li>
                        <li><span>Joining Date:</span>24 Nov 2022</li>
                    </ul>
                    <h6 className="profile-sidebar-subtitle">About Me</h6>
                    <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserInformation