import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const DropdownButtonSection = () => {
  const dropdownRef = useRef(null);
  const [dropdownBtn, setDropdownBtn] = useState({
    btn1: false,
    btn2: false,
    btn3: false,
    btn4: false,
  });

  const handleDropdownBtn = (id) => {
    setDropdownBtn((prevCheckboxes) => ({
      ...Object.fromEntries(
        Object.entries(prevCheckboxes).map(([key]) => [key, false])
      ),
      [id]: !prevCheckboxes[id],
    }));
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      // Click occurred outside the dropdown container, so close all dropdown buttons
      setDropdownBtn({
        btn1: false,
        btn2: false,
        btn3: false,
        btn4: false,
      });
    }
  };

  useEffect(() => {
    // Attach the event listener on component mount
    document.addEventListener('click', handleOutsideClick);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  return (
    <div className="panel dropdown-btn-section">
      <div className="panel-header">
        <h5>Buttons with dropdowns</h5>
      </div>
      <div className="panel-body" ref={dropdownRef}>
        <div className="row g-3">
          <div className="col-12">
            <div className="input-group">
              <button
                className={`btn btn-primary dropdown-toggle ${
                  dropdownBtn.btn1 ? 'show' : ''
                }`}
                onClick={() => handleDropdownBtn('btn1')}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </button>
              <ul className={`dropdown-menu dropdown-1 ${dropdownBtn.btn1 ? 'show' : ''}`}>
                <li>
                  <Link className="dropdown-item" to="#">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Something else here
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Separated link
                  </Link>
                </li>
              </ul>
              <input
                type="text"
                className="form-control"
                aria-label="Text input with dropdown button"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                aria-label="Text input with dropdown button"
              />
              <button
                className={`btn btn-primary dropdown-toggle ${
                  dropdownBtn.btn2 ? 'show' : ''
                }`}
                onClick={() => handleDropdownBtn('btn2')}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </button>
              <ul
                className={`dropdown-menu dropdown-2 dropdown-menu-end ${
                  dropdownBtn.btn2 ? 'show' : ''
                }`}
              >
                <li>
                  <Link className="dropdown-item" to="#">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Something else here
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Separated link
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12">
            <div className="input-group">
              <button
                className={`btn btn-primary dropdown-toggle ${
                  dropdownBtn.btn3 ? 'show' : ''
                }`}
                onClick={() => handleDropdownBtn('btn3')}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </button>
              <ul className={`dropdown-menu dropdown-3 ${dropdownBtn.btn3 ? 'show' : ''}`}>
                <li>
                  <Link className="dropdown-item" to="#">
                    Action before
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Another action before
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Something else here
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Separated link
                  </Link>
                </li>
              </ul>
              <input
                type="text"
                className="form-control"
                aria-label="Text input with 2 dropdown buttons"
              />
              <button
                className={`btn btn-primary dropdown-toggle ${
                  dropdownBtn.btn4 ? 'show' : ''
                }`}
                onClick={() => handleDropdownBtn('btn4')}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </button>
              <ul
                className={`dropdown-menu dropdown-4 dropdown-menu-end ${
                  dropdownBtn.btn4 ? 'show' : ''
                }`}
              >
                <li>
                  <Link className="dropdown-item" to="#">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Something else here
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Separated link
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownButtonSection;
