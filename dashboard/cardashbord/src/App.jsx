import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainDashboard from './components/MainDashboard';
import Rentals from './components/Rentals';
import CarSection from './components/CarSection';
import CustomerSection from './components/CustomerSection';
import SideNav from './components/SideNav';
import MiniNavBar from './components/MiniNavBar'

const App = () => {
  return (
    <>
    <div className='flex flex-col h-screen'>
       {/* Header Section */}
       <header className="flex justify-between bg-[#2e0b3b] items-center border-b border-gray-300 shadow-md pb-4 ">
       <h1 className="text-2xl font-bold mb-4 mx-6 text-white">Tile Car Rent</h1>
          <MiniNavBar /> {/* Admin Account component positioned to the right */}
        </header>
      <div className="flex h-screen -mt-10">
        <SideNav />
        <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
          <Routes>
            <Route path="/main-dashboard" element={<MainDashboard />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/car-section" element={<CarSection />} />
            <Route path="/customer-section" element={<CustomerSection />} />
          </Routes>
        </main>
      </div>
    </div>
      </>
  );
};

export default App;
