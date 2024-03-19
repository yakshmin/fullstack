import React, { useState } from 'react';
import "../../assets/css/Login.css"

const Forgetpassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate the input fields
    if (!email || !newPassword || !confirmPassword) {
      setMessage('Please fill in all fields.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }
    // You can send a request to your backend to handle the password reset process here
    console.log(`Initiating password reset for email: ${email}`);
    console.log(`New Password: ${newPassword}`);
    console.log(`Confirm Password: ${confirmPassword}`);
    setMessage('Password reset instructions sent to your email.');
  };

  return (
    <div className="login-container">
      <div className="login-background"></div>
    <div className="login-box">
      <div className="tit">
        <h2>Forgot Password</h2>
        </div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email"></label>
          <input className="login-input"
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div classname="input-group">
          <label htmlFor="newPassword"></label>
          <input className="login-input"
            type="password"
            id="newPassword"
            placeholder='New Password'
            value={newPassword}
            onChange={(event) => setNewPassword(event.target.value)}
            required
          />
        </div>
        <br></br>
        <div className="input-group">
          <label htmlFor="confirmPassword"></label>
          <input className="login-input"
            type="password"
            id="confirmPassword"
            placeholder='Confirm Password'
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
        </div>
        

        <button className="login-button" type="submit">Reset Password</button>
        
      </form>
      {message && <p>{message}</p>}
    </div>
    </div>
  );
};

export default Forgetpassword;
