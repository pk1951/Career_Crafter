import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../loginpage/login.css';
import logo from '../images/logo2.png';
import Google from '../images/GGG.jpg';
import FB from '../images/FFF.jpg';
import X from '../images/XXX.jpg';
import Sitting from '../images/SITTING.jpg';

function LoginPage() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({   //HOOKS
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });    
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email: loginData.email,
        password: loginData.password,
      });
  
      console.log('Login Response:', response); 
  
      if (response.data.success) {
       
        navigate('/home');
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Error during login. Please try again.');
    }
  };

  return (
    <div>
      <div className="unique-header">
        <div>
          <img src={logo} alt="Logo" className="unique-logo" />
        </div>
        <h1 className="unique-heading" id="unique-heading">
          <center>
            <i>Career Crafter</i>
          </center>
        </h1>
      </div>
      <div className="unique-main-container">
        <div className="unique-logindiv">
          <img src={Sitting} alt="Left Image" width="700px" className="unique-left-image" />
        </div>
        <div className="unique-logininfo">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="unique-input-group">
              <label htmlFor="unique-email">Email:</label>
              <input
                type="email"
                id="unique-email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="unique-input-group">
              <label htmlFor="unique-password">Password:</label>
              <input
                type="password"
                id="unique-password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="unique-button-group">
              <button type="submit">Sign In</button>
              <Link to="/signup">
                <button type="button">Sign Up</button>
              </Link>
            </div>
            <div className="unique-button-group">
              <a href="https://www.google.co.in/">
                <img src={Google} alt="Google Sign In" height="40px" />
              </a>
              <img src={FB} alt="Facebook Sign In" height="34px" id="unique-fb" />
              <img src={X} alt="X" height="33px" id="unique-x" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
