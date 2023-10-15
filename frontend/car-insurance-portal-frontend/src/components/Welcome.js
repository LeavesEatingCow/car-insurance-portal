import {Link} from "react-router-dom";

function Welcome() {
  return (
    <div className="welcome">
      <Link to="/Login">
        <button className="login-btn">Log In</button>
      </Link>
      <Link to="/Signup">
        <button className="signup-btn">Sign Up</button>
      </Link>
    </div>
  );
}

export default Welcome;