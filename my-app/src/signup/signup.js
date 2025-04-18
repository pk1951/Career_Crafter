import React, { useState } from 'react';
import axios from 'axios';      //
import { useNavigate } from 'react-router-dom'; 
import './stylie.css';
import logo from '../images/logo2.png';
import Sitting from '../images/SITTING2.jpg';

function SignUpPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({    
    username: '',
    email: '',
    phone: '',
    password: '',
    confirm_password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });   //(...) spread operator create a copy of the current state and updates the field that corresponds to the changed input.
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your server endpoint
      await axios.post('http://localhost:5000/api/signup', formData);
      alert('User saved successfully!');
      // Redirect to the login page
      navigate('/login');
    } catch (error) {
      console.error('Error saving user:', error);
      alert('Error saving user.');
    }
  };

  return (
    <div>
      <div className="header">
        <span className="logdiv">
          <img src={logo} alt="Logo" className="log" />
        </span>
        <h1 id="ff">
          <center>
            <i>Career Crafter</i>
          </center>
        </h1>
      </div>
      <div className="main-container">
        <div className="signupdiv">
          <img src={Sitting} alt="Left Image" width="700px" id="ig" />
        </div>
        <div className="signupinfo">
          <h2>Create an Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone No:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="confirm_password">Confirm Password:</label>
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="button-group">
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
