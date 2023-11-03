import React, {useState} from "react";
import "./Login.css"; // Import the CSS file
import {useNavigate} from "react-router-dom";
import carLogo from "./images/white_car_image.png";
import rapidinsureLogo from "./images/rapidinsurelogo1.png";

import axios from "axios";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/login", {
        email,
        password
      });
      localStorage.setItem("token", response.data.token);
      axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
      console.log("Login Successful", response.data);
      navigate("/homepage")
    } catch (error) {
      console.error("Login Error", error);
    }
  }

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
          <input
            type="email"
            className="input-field"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="input-field"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button onClick={handleLogin} className="login-btn2">Log In</button>
      </div>
    </div>
  );
}

export default Login;
