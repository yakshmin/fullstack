// ProfilePage.js

import React from 'react';
import '../../assets/css/Profilepage.css';
import profileIcon from '../../assets/images/bg2.png';

function Profilepage() {
  return (
    <div>
    <div className="profile-container">
      <div className="profile">
        <img src={profileIcon} alt="Profile Icon" />
      </div>
      <h2 className="pi">Personal Information</h2>
      <div className="credentials">
        <div className="credential">
          
          <input type="text" id="name" placeholder="mini" />
        </div>
        <div className="credential">
          
          <input type="email" id="email" placeholder="mini@gmail.com" />
        </div>
        <div className="credential">
         
          <input type="tel" id="phone" placeholder="987654767" />
          
        </div>
        <div className="credential">
          
          <input type="text" id="address" placeholder="8/234,r.street,cbe,chennai." />
        </div>
        <div className="credential">
        
          <select id="gender" >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
        <h2 className="pi">Services Booked</h2>
        <div className="card">
         
        </div>
      </div>
      <br></br>
      

      <div className="buttons-container">
      <div className="buttons">
        <button className="edit-button">Edit</button>
        <button className="cancel-button">Cancel</button>
        <button className="save-button">Save</button>
      </div>
      </div>
    </div>
  );
}

export default Profilepage;
