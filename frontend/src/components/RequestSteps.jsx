import React from 'react';
import {carKey,chooseCar,done, orderCar} from '../assets/images';
const RequestSteps = () => {
  return (
    <div className="py-12 text-center">
      {/* Title Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gradient ">EASY BOOKING STEPS</h1>
        <p className="text-xl text-gray-600 mx-2 mt-2">
          How to book your car with us and start enjoying your ride
        </p>
      </div>

      {/* Steps Section */}
      <div className="lg:mx-10 flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Step 1: Choose Your Ride */}
        <div className="lg:w-1/4 mx-4 h-[350px] bg-gradient-to-r from-blue-500 to-[#3c096c] text-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <img src={chooseCar} alt="Choose Your Ride" className="my-20 mb-4 " />
          <h2 className="text-md font-semibold"><span className='text-4xl p-2'>1</span>CHOOSE YOUR RIDE</h2>
        </div>

        {/* Step 2: Send Us a Request */}
        <div className="lg:w-1/4 lg:h-[350px] bg-gradient-to-r from-blue-500 to-[#3c096c] text-white p-10 rounded-lg shadow-lg flex flex-col items-center">
          <img src={orderCar}  alt="Send Us a Request" className="mb-4 h-80" />
          <h2 className="text-md font-semibold"><span className='text-4xl p-2'>2</span> SEND US A REQUEST</h2>
        </div>

        {/* Step 3: You Are Done */}
        <div className="lg:w-1/4 lg:h-[350px] bg-gradient-to-r from-blue-500 to-[#3c096c] text-white p-10 rounded-lg shadow-lg flex flex-col items-center">
          <img src={done} alt="You Are Done" className="mb-4 h-80"/>
          <h2 className="text-md font-semibold"><span className='text-4xl p-2'>3</span> YOU ARE DONE</h2>
        </div>

        {/* Optional: Step 4 - You Rent the Car You Choose */}
        <div className="lg:w-1/4 lg:h-[350px] bg-gradient-to-r from-blue-500 to-[#3c096c] text-white p-10 rounded-lg shadow-lg flex flex-col items-center mt-8 md:mt-0">
          <img src={carKey} alt="You Rent the Car You Choose" className="mb-4 h-80" />
          <h2 className="text-xl font-semibold">ENJOY YOUR RIDE!</h2>
        </div>
      </div>
    </div>
  );
};

export default RequestSteps;
