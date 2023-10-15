import { Link } from "react-router-dom";
import "./Welcome.css";
import carLogo from "./images/white_car_image.png";
import rapidinsureLogo from "./images/rapidinsurelogo1.png";

function Welcome() {
  return (
    <div className="welcome">
      <div className="content">
        <div className="image-container">
          <img src={carLogo} alt="White Car Logo" className="car-logo" />
          <img src={rapidinsureLogo} alt="Logo" className="logo" />
        </div>
        <div className="buttons">
          <button className="signup-btn">Sign Up</button>
          <Link to="/Login" className="login-link">Log In</Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
