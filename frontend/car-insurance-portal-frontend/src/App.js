import './App2.css';
import Welcome from "./components/Welcome";
import Welcome2 from "./components/Welcome2";
import Welcome3 from "./components/Welcome3";

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
        {/* welcome page links for debug */}
        <Route path='/1' element={<Welcome/>} />
        <Route path='/2' element={<Welcome2/>} />
        <Route path='/3' element={<Welcome3/>} />

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
