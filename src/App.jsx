import { Route, Routes, useNavigate } from 'react-router';
import './App.css';
import About from './routes/About/About';
import Contact from './routes/Contact/Contact';
import Service from './routes/Service/Service';
import Team from './routes/Team/Team';
import Home from './routes/Home/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Login from './routes/Login';
import Register from './routes/Register';
import Dashboard from './routes/Dashboard';

function App() {

  

  return (
    <div id="App" className="w-screen overflow-hidden relative">
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
