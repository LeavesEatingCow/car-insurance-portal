function Signup() {
  return (
    <div className="main-container">
      <form>
        <input type="text" className="first-name" placeholder="First Name"></input>
        <input type="text" className="last-name" placeholder="Last Name"></input>
        <input type="email" className="email" placeholder="Email"></input>
        <input type="tel" className="phone" placeholder="Phone Number"></input>
        <input type="password" className="password" placeholder="Password"></input>
        <input type="password" className="confirm-pass" placeholder="Confirm Password"></input>
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;