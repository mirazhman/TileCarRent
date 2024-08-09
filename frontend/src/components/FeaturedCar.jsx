import React from 'react'
import { Link } from 'react-router-dom';
import { carList1, carList2, carList3, carList4, carList5, carList6, carList7, carList8 } from '../assets/images';
const FeaturedCar = () => {
  return (
    <div>
        <div className="container px-4 lg:px-0 mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-gradient ">Come With Hot Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Wedding Car 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={carList1}
              alt="Wedding Car 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-primary)]">Luxury Sedan</h3>
              <p className="text-gray-700 mb-4">Price: 1000 Br/day</p>
              <Link to="/booking" className="hover-gradient-effect bg-[#3c096c] scale-75 text-xl  text-center text-white py-2 px-4 rounded">
                Book Now
              </Link>
            </div>
          </div>


          {/* Wedding Car 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={carList2}
              alt="Wedding Car 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-primary)] uppercase">Classic Convertible</h3>
              <p className="text-gray-700 mb-4">Price: 1000 Br/day</p>
              <Link to="/booking" className="hover-gradient-effect bg-[#3c096c] scale-75 text-xl text-white py-2 px-4 rounded">
                Book Now
              </Link>
            </div>
          </div>

          {/* Wedding Car 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={carList3}
              alt="Wedding Car 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-primary)]">Royal Carriage </h3>
              <p className="text-gray-700 mb-4">Price: 1000 Br/day</p>
              <Link to="/booking" className="hover-gradient-effect bg-[#3c096c] scale-75 text-xl text-white py-2 px-4 rounded">
                Book Now
              </Link>
            </div>
          </div>
           {/* Wedding Car 3 */}
           <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={carList4}
              alt="Wedding Car 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2 text-[var(--color-primary)]">Royal Carriage </h3>
              <p className="text-gray-700 mb-4">Price: 1000 Br/day</p>
              <Link to="/booking" className="hover-gradient-effect bg-[#3c096c] scale-75 text-xl text-white py-2 px-4 rounded">
                Book Now
              </Link>
            </div>
          </div>
         
         
         

        
        </div>
      </div>
    </div>
  )
}

export default FeaturedCar