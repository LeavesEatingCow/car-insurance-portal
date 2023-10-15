import './App.css';
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Signup from "./components/Signup";
import {Route, Routes} from "react-router-dom";

function App() {
  return(
    <div>
      <Routes>
        <Route path="/" element={ <Welcome/> } />
        <Route path="/Login" element={ <Login/>} />
        <Route path="/Signup" element={ <Signup/>} />
      </Routes>
    </div>
  );
}

export default App;
