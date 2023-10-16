import React from "react";
import "./Login.css"; // Import the CSS file
import { Link } from "react-router-dom";
import carLogo from "./images/white_car_image.png";
import rapidinsureLogo from "./images/rapidinsurelogo1.png";

function Login() {
  return (
    <div className="main-container">
      <div className="black-bar">
        <div className="image-container">
          <img
            src={carLogo} // Import your carLogo image
            alt="White Car Logo"
            className="car-logo"
          />
          <img
            src={rapidinsureLogo} // Import your rapidinsureLogo image
            alt="Logo"
            className="logo"
          />
        </div>
      </div>
      <div className="off-white-form">
        <form className="login-form">
          <input type="email" className="input-field" placeholder="Email" />
          <input type="password" className="input-field" placeholder="Password" />
          <Link to="/Welcome" className="login-btn2">Log In</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
