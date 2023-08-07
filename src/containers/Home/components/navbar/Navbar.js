import React, { useState } from 'react';
import './navbar.css';
import logo from "../../../../assets/logoBlood.png";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { NavLink } from "react-router-dom";

const Navbar = ({ style }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar" style={style}>
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt='logo'/>
        </div>
        <div className="navbar-links_container">
                        <ul className="navbar-links_container">
                            <li>
                                <NavLink to='/'>Home</NavLink>
                            </li>

                            <li>
                                <NavLink to='/donation'>Blood Donation</NavLink>
                            </li>

                            <li>
                                <NavLink to='/request'>Blood Request</NavLink>
                            </li>

                            <li>
                                <NavLink to='/bank'>Blood Banks</NavLink>
                            </li>

                            <li>
                                <NavLink to='/hospital'>Hospitals</NavLink>
                            </li>

                            <li>
                                <NavLink to='/blog'>Blog</NavLink>
                            </li>
                            
                            <li>
                                <NavLink to='/events'>Events</NavLink>
                            </li>
                        </ul>
        </div>
      </div>
      {/*pour le menu dans le petit size */}
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbar-menu_container scale-up-center">
          <div className="navbar-menu_container-links">
          <ul className="navbar-menu_container-links">
                            <li>
                                <NavLink to='/'>Home</NavLink>
                            </li>

                            <li>
                                <NavLink to='/donation'>Blood Donation</NavLink>
                            </li>

                            <li>
                                <NavLink to='/request'>Blood Request</NavLink>
                            </li>

                            <li>
                                <NavLink to='/bank'>Blood Banks</NavLink>
                            </li>

                            <li>
                                <NavLink to='/hospital'>Hospitals</NavLink>
                            </li>
            
                            <li>
                                <NavLink to='/blog'>Blog</NavLink>
                            </li>
                            
                            <li>
                                <NavLink to='/events'>Events</NavLink>
                            </li>
                        </ul>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;