import './App.css';
import Welcome from "./components/Welcome";
import Login from "./components/registration/Login";
import Signup from "./components/registration/Signup";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import QuoteRequestForm from "./components/quote_request/QuoteRequestForm";
import {jwtDecode} from 'jwt-decode';
import ConfirmationPage from "./components/quote_request/ConfirmationPage";
import About from './components/About'

function PrivateRoute({ children, ...rest }) {
  const location = useLocation();
  const token = localStorage.getItem("token");

  const isTokenValid = () => {
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
  }

  // if token is not present or expired navigate to /login
  if (!isTokenValid()) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
}

function App() {
  return(
    <div className="App">
      <Routes>
        <Route path="/" element={ <Welcome/> } />
        <Route path='/' element={ <About /> } />
        <Route path="/login" element={ <Login/>} />
        <Route path="/signup" element={ <Signup/>} />
        <Route
          path="/quote-request"
          element={
            <PrivateRoute>
              <QuoteRequestForm />
            </PrivateRoute>
          }
        />
        <Route 
          path="/confirmation/:quoteRequestId" 
          element={
            <PrivateRoute>
              <ConfirmationPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
