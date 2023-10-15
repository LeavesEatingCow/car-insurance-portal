function Login() {
  return (
    <div className="main-container">
      <form>
        <input type="email" className="email" placeholder="Email"></input>
        <input type="password" className="password" placeholder="Password"></input>
        <button>Log In</button>
      </form>
    </div>
  );
}

export default Login;