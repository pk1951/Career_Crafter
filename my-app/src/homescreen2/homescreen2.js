import React from 'react';
import './homescreen2.css';
import Image from '../images/logo2.png';

const CareerCrafter = () => {
  return (
    <div className="home">
      <img className="shree" src={Image} height="100px" alt="career crafter" />

      <div id="ff">
        <p id="hi">
          START <br />
          YOUR <br />
          CAREER <br />
          WITH <br />
          CAREER <br />
          CRAFTER
        </p>
      </div>

      <div id="nn">
        <dl>
          <dt id="ll"><b>Who we are?</b></dt>
          <dd id="jj">
            "Career Crafter: Your launchpad to a thriving career. We offer tailored resources, expert guidance, and opportunities for individuals at every career stage. Empower your professional journey with us, from fresh graduates to seasoned professionals."
          </dd>
        </dl>

        <dl>
          <dt id="n"><b>Our project team</b></dt>
          <dd id="pa">Pavan kishore N:CEO of career crafter</dd>
          <dd id="pps">P Puneeth SS: Designing Manager</dd>
          <dd id="pk">Praveen kumar M: Marketing manager</dd>
        </dl>

        <a href="./home">
          <button id="sss" type="button">Explore!</button>
        </a>
      </div>
     
    </div>
  );
};

export default CareerCrafter;
