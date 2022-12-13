
import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './Shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="appointment" element={ <Appointment/> } />
        <Route path="about" element={ <About/> } />
        <Route path="Login" element={ <Login/> } />
        
      </Routes>
    </div>
  );
}

export default App;
