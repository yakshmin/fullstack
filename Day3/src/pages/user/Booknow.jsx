import React, { useState } from 'react';
import "../../assets/css/Booknow.css";
import Home from './Home';
function Booknow() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [services, setServices] = useState('Speciality');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { name, email, phone, services, appointmentDate, appointmentTime };
    // Here you can submit the form data to your backend or handle it as needed
    console.log(formData);
  };

  return (
    <div>
      <Home/>
      <div className="booknow-container">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required /><br /><br />

        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br /><br />

        <label htmlFor="phone">Phone:</label><br />
        <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required /><br /><br />

        <label htmlFor="services">Services:</label><br />
        <select id="services" value={services} onChange={(e) => setServices(e.target.value)} required>
          <option value="Speciality">Speciality</option>
          <option value="Long Term Care">Long Term Care</option>
          {/* Add more options as needed */}
        </select><br /><br />

        <label htmlFor="appointment_date">Appointment Date:</label><br />
        <input type="date" id="appointment_date" value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} required /><br /><br />

        <label htmlFor="appointment_time">Appointment Time:</label><br />
        <input type="time" id="appointment_time" value={appointmentTime} onChange={(e) => setAppointmentTime(e.target.value)} required /><br /><br />

        <input type="submit" value="Submit" />
      </form>
      </div>
    </div>
  );
}

export default Booknow;
