import React, {useState} from "react";
import "./Login.css"; // Import the CSS file
import {useNavigate} from "react-router-dom";
import BannerBackground from "../../Assets/home-banner-background.png"


import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage("Fields cannot be blank");
      return;
    }

    try {
      const response = await axios.post("/api/login", {
        email,
        password
      });
      localStorage.setItem("token", response.data.token);
      axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
      console.log("Login Successful", response.data);
      navigate("/");
    } catch (error) {
      setErrorMessage("Wrong username or password");
    }
  }

  return (
    <div className="main-container">
      <h1>Log In</h1>
      <div className='home-bannerImage-container'>
        <img src={BannerBackground} alt="" />
      </div>
      <div className="off-white-form">
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
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
          {errorMessage && (
            <div className="error-message">{errorMessage}</div>
          )}
        </form>
        <button onClick={handleLogin} className="login-btn2">
          Log In
        </button>
      </div>
    </div>
  );
};

export default Login;
