// import React from 'react';
import { Routes, Route } from 'react-router-dom';


import NavBar from './components/NavBar';
import Home from './components/Home';
import Booking from './components/Booking';
import Cars from './components/Cars';
import About from './components/About';
import WeddingCar from './components/WeddingCar';

import './App.css';
import Footer from './components/Footer';
import MiniNavBar from './components/MiniNavBar';
import AirportPickup from './components/AirportPickup';

function App() {
  return (
    <div>
      <MiniNavBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/wedding-car" element={<WeddingCar />} />
        <Route path="/air-port" element={<AirportPickup />} />
        <Route path="/aboutus" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
