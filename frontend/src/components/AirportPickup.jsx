import React from 'react';

const AirportPickup = () => {
  return (
    <>
    <div className=''>
      {/* Hero Section   */}
      <div className="h-56 lg:h-64 hidden lg:block eth-airport-bg">
      <h1 className="text-2xl lg:text-4xl font-bold text-[#ffffff] mx-10 lg:text-[#ffffff] flex justify-center lg:mx-[440px] relative top-40 lg:top-32 backdrop-filter backdrop-blur-lg">Welcome to Vibrant Hawassa City</h1>
    </div>
    <div className="lg:hidden eth-airport-mbbg h-56 lg:h-64">
      <h1 className="text-2xl lg:text-6xl font-bold text-[#ffffff] mx-4 lg:text-[#ffffff] flex justify-center lg:mx-80 relative top-40 lg:top-32 backdrop-filter backdrop-blur-lg">Welcome to Vibrant Hawassa City</h1>
    </div>
    </div>

     {/* Form Section */}
     <div className=" mx-auto px-4 py-10 bg-gradient-to-r from-[#4cc9f0]  to-[#3c096c] ">
        <h2 className="text-3xl font-bold text-center mb-2 text-white text-[var(--color-primary)]">Send Us Request</h2>
        <h3 className="text-2xl font-bold text-center mb-8 text-white text-[var(--color-primary)]">We Will Pick you up</h3>

        <form className="max-w-lg mx-auto shadow-md rounded-lg p-8">
          <div className="mb-6">
            <label htmlFor="departureTime" className="block text-white font-bold mb-2">
              Departure Time
            </label>
            <input
              type="datetime-local"
              id="departureTime"
              name="departureTime"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="name" className="block text-white font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="phone" className="block text-white font-bold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-52 text-center flex justify-center mx-auto border border-[#fff] text-white py-3 rounded-lg hover-gradient-effect bg-[#3c096c]"
          >
            Submit
          </button>
        </form>
      </div>
    </>
     
  );
};
export default AirportPickup