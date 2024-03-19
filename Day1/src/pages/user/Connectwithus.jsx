import React from 'react';
import '../../assets/css/Connectwithus.css'; // Import your CSS file

function Connectwithus() {
  return (
    <div className="main-container">
      <div className="left-container">
        <h2>Connect with Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="fullName">Full Name*</label>
            <input type="text" id="fullName" placeholder="Enter full name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email address" />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <div className="phone-number">
              <input type="tel" id="phoneNumber" placeholder="Enter your phone number" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="exploringEmoha">Exploring Emoha for</label>
            <select id="exploringEmoha">
              <option value="viewAll">View All</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="howDidYouHear">How did you hear about us</label>
            <select id="howDidYouHear">
              <option value="viewAll">View All</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <form>
    {/* Your form fields */}
    <button type="submit" className="submit-button">Submit</button>
  </form>
        </form>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <p>216, Ocus Quantum Plaza, Sector 51, Opposite BPTP Freedom Park, Near Artemis Hospital Gurugram, Haryana 122003</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <p>eldersfirst@emoha.com</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-globe"></i>
          <p>www.emoha.com</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone-alt"></i>
          <p>India Toll-Free: 1800-203-5135</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone-alt"></i>
          <p>International Toll-Free: +1888-866-0486</p>
        </div>
      </div>
    </div>
  );
}

export default Connectwithus;
