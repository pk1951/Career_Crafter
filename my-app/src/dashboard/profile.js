import React, { useEffect } from 'react';
import html2pdf from 'html2pdf.js';
import Profile from './profile.jpg';
import { Link } from 'react-router-dom';
import './st.css'; 

const Dashboard = () => {

  const updateAdditionalDetails = () => {

    const gender = document.getElementById("uniqueGender").value;
    const age = document.getElementById("uniqueAge").value;
    const address = document.getElementById("uniqueAddress").value;
    const adharNo = document.getElementById("uniqueAdharNo").value;
    document.getElementById("uniqueUserAge").textContent = age || "Not specified";
    document.getElementById("uniqueUserAddress").textContent = address || "Not specified";
    document.getElementById("uniqueUserAdhar").textContent = adharNo || "Not specified";

  };


  const generatePDF = () => {
    
    const element = document.getElementById('uniqueResumeGeneratorForm');
    html2pdf(element);
  };

  const generateResume = () => {
    generatePDF();
  };

  return (
    <div>
      <div id="uniquePdfContent">
        <div className="uniqueHeader">
          <h1 id="uniqueFf">Career Crafter</h1>
          <h1 id="dashboar">PROFILE DASHBOARD</h1>
        </div>
        
        <div className="uniqueProfileContainer">
          <div className="uniqueUserImageContainer">
            <div className="uniqueUserImage">
              <img src={Profile} alt="User Image" />
            </div>
          </div>

          <div className="uniqueUserDetails" id="uniqueUserDetailsContainer">
            <h2 id="uniqueUserName">PAVAN KISHORE N</h2>
            <p id="uniqueUserEmail">Email: pavankishore9304@gmail.com</p>
            <label htmlFor="uniqueUserPhone">Phone:</label>
            <p id="uniqueUserPhone">+918431010385</p>
            <label htmlFor="uniqueUserAge">Age:</label>
            <p id="uniqueUserAge">Not specified</p>
            <label htmlFor="uniqueUserAddress">Address:</label>
            <p id="uniqueUserAddress">Not specified</p>
            <label htmlFor="uniqueUserAdhar">Adhar No:</label>
            <p id="uniqueUserAdhar">Not specified</p>
          </div>

          <div className="uniqueUpdateForm">
            <h2>Update Additional Details</h2>
            <form id="uniqueAdditionalDetailsForm">
              <table>
                <tr>
                  <th><label htmlFor="uniqueGender">Gender:</label></th>
                  <td><input type="text" id="uniqueGender" name="uniqueGender" /></td>
                </tr>
                <tr>
                  <th><label htmlFor="uniqueAge">Age:</label></th>
                  <td><input type="text" id="uniqueAge" name="uniqueAge" /></td>
                </tr>
                <tr>
                  <th><label htmlFor="uniqueAddress">Address:</label></th>
                  <td><input type="text" id="uniqueAddress" name="uniqueAddress" /></td>
                </tr>
                <tr>
                  <th><label htmlFor="uniqueAdharNo">Aadhar No:</label></th>
                  <td><input type="text" id="uniqueAdharNo" name="uniqueAdharNo" /></td>
                </tr>
              </table>
              <button type="button" onClick={updateAdditionalDetails}>Update</button>
            </form>
          </div>
        </div>
        <div className="uniqueResumeGeneratorContainer">
          <h2>Resume Generator</h2>
          <form className="uniqueResumeGeneratorForm" id="uniqueResumeGeneratorForm">
            <table>
              <tr>
                <th colSpan="2" id="uniqueD"><h2>Career crafter certified resume &copy;</h2></th>
              </tr>
              <tr>
                <td><label htmlFor="uniqueFullName"><b>Full Name:</b></label></td>
                <td><input type="text" id="uniqueFullName" name="uniqueFullName" required /></td>
              </tr>
              <tr>
                <td><label htmlFor="uniqueContact"><b>Contact Number:</b></label></td>
                <td><input type="tel" id="uniqueContact" name="uniqueContact" /></td>
              </tr>
              <tr>
                <td><label htmlFor="uniqueEmail"><b>Email:</b></label></td>
                <td><input type="email" id="uniqueEmail" name="uniqueEmail" /></td>
              </tr>
              <tr>
                <td><label htmlFor="uniqueTenth"><b>10th Standard:</b></label></td>
                <td><input type="text" id="uniqueTenth" name="uniqueTenth" /></td>
              </tr>
              <tr>
                <td><label htmlFor="uniqueTwelfth"><b>12th Standard:</b></label></td>
                <td><input type="text" id="uniqueTwelfth" name="uniqueTwelfth" /></td>
              </tr>
              <tr>
                <td><label htmlFor="uniqueDegree"><b>Degree:</b></label></td>
                <td><input type="text" id="uniqueDegree" name="uniqueDegree" /></td>
              </tr>
              <tr>
                <td><label htmlFor="uniqueWorkExperience"><b>Work Experience:</b></label></td>
                <td><textarea id="uniqueWorkExperience" name="uniqueWorkExperience" rows="3"></textarea></td>
              </tr>
              <tr>
                <td><label htmlFor="uniqueHobbies"><b>Hobbies and Interests:</b></label></td>
                <td><textarea id="uniqueHobbies" name="uniqueHobbies" rows="3"></textarea></td>
              </tr>
              <tr>
                <td><label htmlFor="uniquePersonal"><b>Personal details:</b></label></td>
                <td><textarea id="uniquePersonal" name="uniquePersonal" rows="3"></textarea></td>
              </tr>
            </table>
            <button type="button" onClick={generateResume}>Generate Resume</button>
          </form>
          <Link to="/companies" >
        <button className='applejob'>Apply Job</button>
      </Link>
      <Link to="/login" >
        <button className='logout'>Logout</button>
      </Link>
      
        </div>
        <div>
        <div className="unique-foinfo">
        <p>&copy; 2023 Your Job Portal</p>
        <p>
          <a href="#" className="unique-privacy-link">Privacy Policy</a> |{' '}
          <a href="#" className="unique-terms-link">Terms of Service</a>
        </p>
      </div>
     
        </div>
        {/* <script src="html2pdf.bundle.js"></script> */}
      </div>
    </div>
  );
};

export default Dashboard;
