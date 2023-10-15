import {Link} from "react-router-dom";

function Welcome() {
  return (
    <div className="welcome">
      <Link to="/Login">
        <button>Login</button>
      </Link>
      <Link to="/Signup">
        <button>Signup</button>
      </Link>
    </div>
  );
}

export default Welcome;