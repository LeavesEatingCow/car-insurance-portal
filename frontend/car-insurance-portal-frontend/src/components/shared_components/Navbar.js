import React from "react";
import './Navbar.css';
import Logo from "../../Assets/Logo.svg";
import {Link, useNavigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode";

const Navbar = () => {
  const navigate = useNavigate();

  const isTokenValid = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return false;
    }

    try {
      const decodedToken = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decodedToken.exp > currentTime;
    } catch (error) {
      console.error("Error decoding token: ", error);
      return false;
    }
  };

  const isLoggedIn = isTokenValid();


  const navigateToQuoteRequest = () => {
    navigate("/quote-request");
  }

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>

      <div className="navbar-links-container">
        <a href="/tips">Tips</a>
        <a href="/">Home</a>
        {!isLoggedIn && (
          <>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
          </>
        )}
        <button className="primary-button" onClick={navigateToQuoteRequest}>
          Generate a Quote Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;