import React from 'react';
import { Link } from 'react-router-dom';
import { wedcar2, wedcar3, wedcar4, wedcar6 } from '../assets/images';

const WeddingCar = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#4cc9f0]  to-[#3c096c] text-white text-center py-20">
        <h1 className="text-5xl font-bold mb-4 ">Happy Wedding</h1>
        <p className="text-xl">Celebrate your special day with our exclusive wedding car rental service</p>
      </div>

      {/* Wedding Cars Section */}
      <div className="container mx-auto py-16">
        <h2 className="text-3xl text-gradient font-bold text-center mb-10">Our Wedding Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Wedding Car 1 */}
          <div className="mx-4 shadow-md rounded-lg overflow-hidden">
            <img
              src={wedcar2} // Replace with actual car image URL
              alt="Wedding Car 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2 text-gradient">Luxury Sedan</h3>
              <p className="text-gray-700 mb-4">Price: 1000 Br/day</p>
              <Link to="/booking" className="bg-gradient-to-r from-[#4cc9f0]  to-[#3c096c] hover-gradient-effect text-white py-2 px-4 rounded">
                Book Now
              </Link>
            </div>
          </div>

          {/* Wedding Car 2 */}
          <div className="mx-4 shadow-md rounded-lg overflow-hidden">
            <img
              src={wedcar3}
              alt="Wedding Car 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2 text-gradient">Classic Convertible</h3>
              <p className="text-gray-700 mb-4">Price: 1000 Br/day</p>
              <Link to="/booking" className="bg-gradient-to-r from-[#4cc9f0]  to-[#3c096c] text-white py-2 px-4 rounded hover-gradient-effect">
                Book Now
              </Link>
            </div>
          </div>

          {/* Wedding Car 3 */}
          <div className="mx-4 shadow-md rounded-lg overflow-hidden">
            <img
              src={wedcar4}
              alt="Wedding Car 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2 text-gradient">Royal Carriage </h3>
              <p className="text-gray-700 mb-4">Price: 1000 Br/day</p>
              <Link to="/booking" className="bg-gradient-to-r from-[#4cc9f0]  to-[#3c096c] text-white py-2 px-4 rounded hover-gradient-effect">
                Book Now
              </Link>
            </div>
          </div>

          {/* Wedding Car 4 */}
          <div className="mx-4 shadow-md rounded-lg overflow-hidden">
            <img
              src={wedcar6}
              alt="Wedding Car 4"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2 text-gradient">Elegant Limousine</h3>
              <p className="text-gray-700 mb-4">Price: 3000 Br/day</p>
              <Link to="/booking" className="bg-gradient-to-r from-[#4cc9f0]  to-[#3c096c] text-white py-2 px-4 rounded hover-gradient-effect">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingCar