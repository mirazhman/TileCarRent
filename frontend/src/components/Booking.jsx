import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import  {booking} from '../assets/images'

const Booking = () => {
  const [startDate, setStartDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [carType, setCarType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className='flex justify-center'>
      
      <div className='max-w-96 mt-8 text-white '>
        <form onSubmit={handleSubmit} className="shadow-md rounded px-8 pt-6  bg-green-400 pb-8 mb-4 max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Book a Car</h2>
        
        {/* Name */}
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your Name"
          />
        </div>
        
        {/* Email */}
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your Email"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            placeholder="Your Phone Number"
          />
        </div>
         {/* Car Type Dropdown */}
      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="carType">
          Car Type
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
          id="carType"
          value={carType}
          onChange={(e) => setCarType(e.target.value)}
        >
          <option value="" disabled>Select a Car Type</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Van">Van</option>
          <option value="Truck">Truck</option>
          <option value="Truck">Toyota</option>
          <option value="Truck">PickUp</option>
        </select>
      </div>
        
        {/* Start Date */}
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="startDate">
            Start Date
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="shadow appearance-none border text-gray-900 rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            placeholderText="Select start date"
          />
        </div>

        {/* Return Date */}
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="returnDate">
            Return Date
          </label>
          <DatePicker
            selected={returnDate}
            onChange={(date) => setReturnDate(date)}
            className="shadow appearance-none border text-gray-900 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholderText="Select return date"
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center">
          <button
            className="bg-[#2f2e2e] hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit Booking Request
          </button>
        </div>
      </form>
      </div>
      <div>
        <img src={booking} alt="" width="700" height="400" />
      </div>
    </section>
  );
};

export default Booking;
