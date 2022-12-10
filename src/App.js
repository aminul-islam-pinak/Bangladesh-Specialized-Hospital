import logo from './logo.svg';
import './App.css';
import { Routes, Route , Link} from "react-router-dom"
import Navbar from './Shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="Login" element={ <Login/> } />
        
      </Routes>
    </div>
  );
}

export default App;
