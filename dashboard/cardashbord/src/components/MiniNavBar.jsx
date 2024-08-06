import React from 'react';
import { admin } from '../assets/img';

const MiniNavBar = () => {
  return (
    <div className="flex justify-end items-center rounded-full h-20  text-white text-sm py-2">
    <div className="flex items-center">
      <p className="ml-2">Admin</p>
      <img className="w-16 m-4 h-10 rounded-full" src={admin} alt="" />
    </div>
  </div>
  );
};

export default MiniNavBar;
