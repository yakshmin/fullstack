import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-background"></div>
      <div className="login-box">
        <h2>Welcome Back!</h2>
        <br></br>
        <form action="#">
          <div className="input-group">
            <input className="login-input" type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <input className="login-input" type="password" placeholder="Password" required />
          </div>
          <button className="login-button">Sign In</button>
        </form>
        {/* Navigation links */}
        <p className="forgot-password">
          <Link to="/project/forgetpassword" style={{ color: 'white' ,marginLeft:10}}>Forgot your password?</Link>
        </p>
        <p className="register">
          <Link to="/project/register" style={{ color: 'white' ,marginLeft:20}}>Don't have an account? Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
