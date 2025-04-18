import React, { useState } from 'react';
import logoImage from '../images/logo2.png';
import '../homescreen/style.css';

const HomeScreen = () => {
  const [isHovered, setIsHovered] = useState(false);   //Hooks

  return (
    <div className='App'>
      <img src={logoImage} id="z" height="100px" alt="career crafter" />
      <p className='nmae'>
        CAREER <br />
        CRAFTER
      </p>
      <a href="http://localhost:3000/" className="wbnum">https://www.careercrafter.com</a>
      <a href="./login">
        <button
          id="button"
          type="button"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ backgroundColor: isHovered ? 'rgb(52, 137, 107)' : 'transparent' }}
        >
          GET STARTED
        </button>
      </a>
    </div>
  );
}

export default HomeScreen;
