import './App.css';
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Signup from "./components/Signup";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import Homepage from "./components/Homepage";

function PrivateRoute({ children, ...rest }) {
  const location = useLocation();
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return children;
}

function App() {
  return(
    <div className="App">
      <Welcome />
    </div>
    // <div>
    //   <Routes>
    //     <Route path="/" element={ <Welcome/> } />
    //     <Route path="/Login" element={ <Login/>} />
    //     <Route path="/Signup" element={ <Signup/>} />
    //     <Route
    //       path="/homepage"
    //       element={
    //         <PrivateRoute>
    //           <Homepage />
    //         </PrivateRoute>
    //       }
    //     />
    //   </Routes>
    // </div>
  );
}

export default App;
