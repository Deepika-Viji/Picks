import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { DigiContext } from '../../context/DigiContext';

const UserLogin = () => {
    const { dashState, toggleMainDashDropdown, dropdownOpen, layoutPosition, mainDashboardRef } = useContext(DigiContext);
    const {
        isMainDropdownOpen,
    } = dashState;
    return (
        <li className='sidebar-item open' ref={layoutPosition.horizontal ? mainDashboardRef : null}>
            <Link
                role="button"
                className={`sidebar-link-group-title has-sub ${isMainDropdownOpen ? 'show' : ''}`}
                onClick={toggleMainDashDropdown}
            >
                Log in
            </Link>
            <ul className={`sidebar-link-group ${layoutPosition.horizontal ? (dropdownOpen.dashboard ? 'd-block' : '') : (isMainDropdownOpen ? 'd-none' : '')}`}>
                <li className="sidebar-dropdown-item">
                    <NavLink to="/" className="sidebar-link">
                        <span className="nav-icon">
                            <i className="fa-light fa-cart-shopping-fast"></i>
                        </span>{' '}
                        <span className="sidebar-txt">eCommerce</span>
                    </NavLink>
                </li>
                <li className="sidebar-dropdown-item">
                    <NavLink
                        to="/crmDashboard"
                        className="sidebar-link"
                    ></NavLink>
                </li>
            </ul>
        </li>
    );
};



export default UserLogin;