import React from 'react';

const MiniNavBar = () => {
  return (
    <div className="bg-gray-800 text-white text-sm py-2">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className="material-icons text-[#a01bcd]">email</span>
            <span className="ml-2">info@tilecarrental.com</span>
          </div>
          <div className="flex items-center">
            <span className="material-icons text-[#a01bcd]">phone</span>
            <span className="ml-2">+251-915 71 52 75</span>
          </div>
        </div>
        <div className="flex items-center">
          <span className="material-icons text-[#a01bcd]">location_on</span>
          <span className="ml-2">Hawassa, Ethiopia</span>
        </div>
      </div>
    </div>
  );
};

export default MiniNavBar;
