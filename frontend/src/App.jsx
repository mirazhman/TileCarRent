// import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Booking from './components/Booking';
import Cars from './components/Cars';
import About from './components/About';
import WeddingCar from './components/WeddingCar';

import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/wedding-car" element={<WeddingCar />} />
        <Route path="/aboutus" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
