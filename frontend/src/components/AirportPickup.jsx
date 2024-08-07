import React from 'react';

const AirportPickup = () => {
  return (
    <>
    <div className=''>
      {/* Hero Section   */}
      <div className="eth-airport-bg h-64">
      <h1 className="text-6xl font-bold text-[#770d0d] flex justify-center mx-80 relative top-32">Welcome to Vibrant Hawassa City</h1>
    </div>
    </div>

     {/* Form Section */}
     <div className=" mx-auto px-4 py-10 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 ">
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
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-52 text-center flex justify-center mx-auto border border-[#fff] text-white py-3 rounded-lg hover-gradient-effect bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500"
          >
            Submit
          </button>
        </form>
      </div>
    </>
     
  );
};
export default AirportPickup