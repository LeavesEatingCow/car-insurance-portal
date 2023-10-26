// Signup.js

import React from "react";
import "./Signup.css"; // Import the CSS file
import carLogo from "./images/white_car_image.png";
import rapidinsureLogo from "./images/rapidinsurelogo1.png";

function Signup() {
  return (
    <div className="main-container">
      <div className="black-bar">
        <div className="image-container">
          <img src={carLogo} alt="White Car Logo" className="car-logo" />
          <img src={rapidinsureLogo} alt="Logo" className="logo" />
        </div>
      </div>
      <div className="off-white-form">
        <input type="text" className="input-field" placeholder="First Name" />
        <input type="text" className="input-field" placeholder="Last Name" />
        <input type="email" className="input-field" placeholder="Email" />
        <input type="tel" className="input-field" placeholder="Phone Number" />
        <input type="password" className="input-field" placeholder="Password" />
        <input type="password" className="input-field" placeholder="Confirm Password" />
        <button className="signup-btn2">Sign Up</button>
      </div>
    </div>
  );
}

export default Signup;
