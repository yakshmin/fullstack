import React, { useState } from 'react';
import '../../assets/css/Navbar.css';
import logo from '../../assets/images/logo.jpg';
import userPic from '../../assets/images/user.jpg';
import profilePic from '../../assets/images/profile.jpg';
import settingPic from '../../assets/images/settings.jpg';
import helpPic from '../../assets/images/help.jpg';
import logoutPic from '../../assets/images/logout.jpg';
import Connectwithus from './Connectwithus';

const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [confirmLogout, setConfirmLogout] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    setConfirmLogout(true);
  };

  const confirmLogoutAction = () => {
    // Perform logout action
    console.log('Logout confirmed');
    setConfirmLogout(false);
  };

  const cancelLogoutAction = () => {
    // User canceled logout
    console.log('Logout canceled');
    setConfirmLogout(false);
  };

  return (
    <nav className="navbar">
     
      <img src={logo} className="logo" alt="Logo" />
      <ul>
        <li><a href="/project/user/About">About Us</a></li>
        <li><a href="/project/user/service">Services</a></li>
        <li><a href="/project/user/connectwithus">Contact Us</a></li>
      </ul>
      <img src={userPic} className="user-pic" onClick={toggleMenu} alt="User" />
      <div className={`sub-menu-wrap ${isOpen ? 'open-menu' : ''}`}>
        <div className="sub-menu">
          <div className="user-info">
            <img src={userPic} alt="User" />
            <h2>James Aldrino</h2>
          </div>
          <hr />
          <a href="#" className="sub-menu-link">
            <img src={profilePic} alt="Profile" />
            <p>Edit profile</p>
            <span></span>
          </a>
          <a href="#" className="sub-menu-link">
            <img src={settingPic} alt="Setting" />
            <p>Settings and privacy</p>
            <span></span>
          </a>
          <a href="#" className="sub-menu-link">
            <img src={helpPic} alt="Help" />
            <p>Help</p>
            <span></span>
          </a>
          <a href="#" className="sub-menu-link" onClick={handleLogout}>
            <img src={logoutPic} alt="Logout" />
            <p>Logout</p>
            <span></span>
          </a>
          {confirmLogout && (
            <div className="confirmation-dialog">
              <p>Are you sure you want to logout?</p>
              <div className="buttons">
                <button onClick={confirmLogoutAction}>Yes</button>
                <button onClick={cancelLogoutAction}>Cancel</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
