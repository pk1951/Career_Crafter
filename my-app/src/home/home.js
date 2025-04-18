import React, { useState } from 'react';
import Video from './video.mp4';
import './home.css';

const YourUniqueJobPortal = () => {
  const [showJobsDetails, setShowJobsDetails] = useState(false);

  const toggleJobsDetails = () => {
    setShowJobsDetails(!showJobsDetails);
  };

  return (
    <div className="unique-body">
      <nav className="unique-nav">
        <div className="unique-job-portal-logo">
          <h1 className='logo-nmmmma'>Career Crafter</h1>
        </div>
        <a href="./jobs"><button className="unique-job-portal-button">Jobs</button></a>
        <a href="./companies"><button className="unique-job-portal-button">Companies</button></a>
        <a href="./Homescreen2"><button className="unique-job-portal-button">About</button></a>
        <a href="./profile"><button className="unique-profile-button">Profile</button></a>
      </nav>

      <div className="unique-search-section">
        <video className="video-background" autoPlay muted loop>
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1>Your job search starts here.</h1>
        <p>Find the role that's right for you.</p>
      </div>

      <div className="unique-footer-info">
        <p>&copy; 2023 Your Job Portal</p>
        <p>
          <a href="#" className="unique-privacy-link">Privacy Policy</a> |{' '}
          <a href="#" className="unique-terms-link">Terms of Service</a>
        </p>
      </div>
    </div>
  );
};

export default YourUniqueJobPortal;
