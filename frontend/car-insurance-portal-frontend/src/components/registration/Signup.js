// Signup.js

import React, {useState} from "react";
import "./Signup.css"; // Import the CSS file
import carLogo from "../images/white_car_image.png";
import rapidinsureLogo from "../images/rapidinsurelogo1.png";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import BannerBackground from "../../Assets/home-banner-background.png"


const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const handleSignup = async () => {
    if (!firstName || !lastName || !email || !phoneNumber || !password) {
      setErrorMessage("Fields cannot be blank");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    try {
      const response = await axios.post("/api/signup", {
        firstName,
        lastName,
        email,
        phoneNumber,
        password
      });
      localStorage.setItem("token", response.data.token);
      axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
      navigate("/");
    } catch (error) {
      setErrorMessage("An error  occurred during signup.")
    }
  }

  return (
    <div className="main-container">
      <h1>Sign Up</h1>
      <div className="off-white-form">
        <input
          type="text"
          className="input-field"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          className="input-field"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          className="input-field"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="tel"
          className="input-field"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          type="password"
          className="input-field"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button onClick={handleSignup} className="signup-btn2">Sign Up</button>
      </div>
    </div>
  );
}

export default Signup;
