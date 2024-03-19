// RegisterPage.js
import React from 'react';
import '../../assets/css/Register.css';

const Register= () => {
  return (
    <div className="register-container">
      <div className="register-background"></div>
      <div className="register-box">
        <h2>Create Account</h2>
        <form action="#">
          <div className="input-group">
            <input type="text" placeholder="Full Name" required />
          </div>
          <div className="input-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          <button>Sign Up</button>
        </form>
        <p className="login-link">Already have an account? <a href="#">Sign In</a></p>
      </div>
      
    </div>
  );
};

export default Register;
