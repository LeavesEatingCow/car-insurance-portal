import './App.css';
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Signup from "./components/Signup";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import QuoteRequest from "./components/QuoteRequest";

function PrivateRoute({ children, ...rest }) {
  const location = useLocation();
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
}

function App() {
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={ <Welcome/> } />
        <Route path="/login" element={ <Login/>} />
        <Route path="/signup" element={ <Signup/>} />
        <Route
            path="/quote-request"
            element={
              <PrivateRoute>
                <QuoteRequest />
              </PrivateRoute>
            }
        />
      </Routes>
    </div>
  );
}

export default App;
