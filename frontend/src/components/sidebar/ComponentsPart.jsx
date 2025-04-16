import { useContext, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { DigiContext } from '../../context/DigiContext';

const ComponentsPart = () => {
  const {
    componentState,
    toggleComponentMainDropdown,
    toggleAdvance,
    toggleMultipleLevel,
    toggleFirstLevel,
    toggleSecondLevel,
    toggleSubComponentDropdown,
    layoutPosition,
    dropdownOpen,
    mainComponentRef,
    isExpanded,
    isNavExpanded,
    isSmallScreen
  } = useContext(DigiContext);

  const {
    isMainDropdownOpen,
    advance,
    multipleLevel,
    firstLevel,
    secondLevel,
    isSubComponentDropdownOpen,
  } = componentState;

  useEffect(() => {
    localStorage.setItem('componentState', JSON.stringify(componentState));
  }, [componentState]);

  const handleSubNavLinkClick = () => {
    if (!isSubComponentDropdownOpen) {
      toggleSubComponentDropdown(); // Open the sub-dropdown
    }
  };


  return (
    <li className="sidebar-item" ref={isExpanded || isNavExpanded.isSmall || layoutPosition.horizontal || (layoutPosition.twoColumn && isExpanded) || (layoutPosition.twoColumn && isSmallScreen) ? mainComponentRef : null}>
    <Link
      role="button"
      className={`sidebar-link-group-title has-sub ${isMainDropdownOpen ? 'show' : ''}`}
      onClick={toggleComponentMainDropdown}
    >
    Components
    </Link>
    <ul className={`sidebar-link-group ${layoutPosition.horizontal ? (dropdownOpen.component ? 'd-block' : '') : (isMainDropdownOpen ? 'd-none' : '')}`}>       
      <li className="sidebar-dropdown-item">
        <Link
          role="button"
          className={`sidebar-link has-sub ${advance ? 'show' : ''}`}
          onClick={toggleAdvance}
        >
          <span className="nav-icon">
            <i className="fa-light fa-layer-group"></i>
          </span>{' '}
          <span className="sidebar-txt">Advance UI</span>
        </Link>
        <ul className={`sidebar-dropdown-menu ${advance && isSubComponentDropdownOpen ? 'd-block' : ''}`}>
          <li className="sidebar-dropdown-item">
            <NavLink to="/sweetAlert" className="sidebar-link" onClick={handleSubNavLinkClick}>
              Sweet Alert
            </NavLink>
          </li>
          <li className="sidebar-dropdown-item">
            <NavLink to="/nestableList" className="sidebar-link" onClick={handleSubNavLinkClick}>
              Nestable List
            </NavLink>
          </li>
          <li className="sidebar-dropdown-item">
            <NavLink to="/animation" className="sidebar-link" onClick={handleSubNavLinkClick}>
              Animation
            </NavLink>
          </li>
          <li className="sidebar-dropdown-item">
            <NavLink to="/swiperSlider" className="sidebar-link" onClick={handleSubNavLinkClick}>
              Swiper Slider
            </NavLink>
            </li>
          </ul>
        </li>
        <li className="sidebar-dropdown-item">
          <NavLink to="/form" className="sidebar-link">
            <span className="nav-icon">
              <i className="fa-light fa-memo-pad"></i>
            </span>{' '}
            <span className="sidebar-txt">Forms</span>
          </NavLink>
        </li>
        <li className="sidebar-dropdown-item">
          <NavLink to="/table" className="sidebar-link">
            <span className="nav-icon">
              <i className="fa-light fa-table"></i>
            </span>{' '}
            <span className="sidebar-txt">Tables</span>
          </NavLink>
        </li>
        <li className="sidebar-dropdown-item">
          <NavLink to="/charts" className="sidebar-link">
            <span className="nav-icon">
              <i className="fa-light fa-chart-simple"></i>
            </span>{' '}
            <span className="sidebar-txt">Charts</span>
          </NavLink>
        </li>
        <li className="sidebar-dropdown-item">
          <NavLink to="/icon" className="sidebar-link">
            <span className="nav-icon">
              <i className="fa-light fa-compass-drafting"></i>
            </span>{' '}
            <span className="sidebar-txt">Icons</span>
          </NavLink>
        </li>
         <li className="sidebar-dropdown-item">
          <NavLink to="/map" className="sidebar-link">
            <span className="nav-icon">
              <i className="fa-light fa-location-dot"></i>
            </span>{' '}
            <span className="sidebar-txt">Maps</span>
          </NavLink>
        </li>
        <li className="sidebar-dropdown-item">
          <NavLink to="/fileManager" className="sidebar-link">
            <span className="nav-icon">
              <i className="fa-light fa-folder-open"></i>
            </span>{' '}
            <span className="sidebar-txt">File Manager</span>
          </NavLink>
        </li>
        <li className="sidebar-dropdown-item">
          <Link
            role="button"
            className={`sidebar-link has-sub ${multipleLevel ? 'show' : ''}`}
            onClick={toggleMultipleLevel}
          >
            <span className="nav-icon">
              <i className="fa-light fa-layer-group"></i>
            </span>{' '}
            <span className="sidebar-txt">Multiple Level</span>
          </Link>
          <ul className={`sidebar-dropdown-menu ${multipleLevel ? 'd-block' : ''}`} >

             <li className="sidebar-dropdown-item">
              <Link to="#" className="sidebar-link">
                Level 1
              </Link>
            </li>
            <li className="sidebar-dropdown-item">
              <Link
              role="button"
              className={`sidebar-link has-sub lvl-dropdown-btn ${firstLevel ? 'show' : ''}`}
              onClick={toggleFirstLevel}
              >
                Level 1
              </Link>
              <ul className={`sidebar-dropdown-menu sub-lvl-dropdown ${firstLevel ? 'd-block' : ''}`}>

                <li className="sidebar-dropdown-item">
                  <Link to="#" className="sidebar-link">
                    Level 2
                  </Link>
                </li>
                <li className="sidebar-dropdown-item">
                  <Link
                  role="button"
                  className={`sidebar-link has-sub lvl-dropdown-btn ${secondLevel ? 'show' : ''}`}
                  onClick={toggleSecondLevel}
                  >
                    Level 2
                  </Link>
                  <ul className={`sidebar-dropdown-menu sub-lvl-dropdown ${secondLevel ? 'd-block' : ''}`}>

                    <li className="sidebar-dropdown-item">
                      <Link to="#" className="sidebar-link">
                        Level 3
                      </Link>
                    </li>
                    <li className="sidebar-dropdown-item">
                      <Link to="#" className="sidebar-link">
                        Level 3
                      </Link>
                    </li>
                    <li className="sidebar-dropdown-item">
                      <Link to="#" className="sidebar-link">
                        Level 3
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="sidebar-dropdown-item">
                  <Link to="#" className="sidebar-link">
                    Level 2
                  </Link>
                </li>
              </ul>
            </li>
            <li className="sidebar-dropdown-item">
              <Link to="#" className="sidebar-link">
                Level 1
              </Link> 
             </li> 
           </ul>
        </li> 
      </ul>
    </li>
  );
};

export default ComponentsPart;
