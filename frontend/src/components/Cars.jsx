import { Link } from 'react-router-dom';
import  {carList1, carList2, carList3, carList4, carList5, carList6, carList7, carList8} from '../assets/images'
const Cars = () => {

  
  return (
   <>
   <section className="">
    <div className="carpage-bg  h-72">
      <h1 className="text-5xl lg:text-6xl font-serif font-bold text-white text-center pt-28 py-6 lg:pt-28">Choose Your Ride</h1> 
    </div>
    <div className='flex flex-wrap justify-center'>
    <div className="w-96 mt-6 mb-6 lg:mx-10 lg:px-10 lg:max-w-sm gradient-border  bg-gray-100 rounded overflow-hidden shadow-lg">
      <img className="mx-4 pt-6 object-cover w-full h-48" src={carList1} alt="Car Image" />
      <div className="py-4 mx-6">
        <div className="font-bold text-xl mb-2 text-gradient">Car Name</div>
        <ul className="text-gray-700 text-base">
          <li><strong>Price:</strong> 1000bir/day</li>
          <li><strong>Kilometers:</strong> 50,000 km</li>
          <li><strong>Car Type:</strong> SUV</li>
        </ul>
        <div className=" pt-4 pb-2">
        <Link to="/booking" className="inline-block hover-gradient-effect bg-[#3c096c] text-white text-center py-2 px-4 rounded">Book Now</Link>
      </div>
      </div>
    </div>
    <div className="w-96 mt-6 mb-6 lg:mx-10 lg:px-10 lg:max-w-sm  gradient-border  bg-gray-100 rounded overflow-hidden shadow-lg">
      <img className="mx-4 pt-6 object-cover w-full h-48" src={carList2} alt="Car Image" />
      <div className="py-4 mx-6">
        <div className="font-bold text-xl mb-2 text-gradient">Car Name</div>
        <ul className="text-gray-700 text-base">
          <li><strong>Price:</strong> 1000bir/day</li>
          <li><strong>Kilometers:</strong> 50,000 km</li>
          <li><strong>Car Type:</strong> SUV</li>
        </ul>
        <div className="pt-4 pb-2">
        <Link to="/booking" className="inline-block hover-gradient-effect bg-[#3c096c] text-white text-center py-2 px-4 rounded">Book Now</Link>
      </div>
      </div>
    </div>
    <div className="w-96 mt-6 mb-6 lg:mx-10 lg:px-10 lg:max-w-sm  gradient-border  bg-gray-100 rounded overflow-hidden shadow-lg">
      <img className="mx-4 pt-6 object-cover w-full h-48" src={carList3} alt="Car Image" />
      <div className="py-4 mx-6">
        <div className="font-bold text-xl mb-2 text-gradient">Car Name</div>
        <ul className="text-gray-700 text-base">
          <li><strong>Price:</strong> 1000bir/day</li>
          <li><strong>Kilometers:</strong> 50,000 km</li>
          <li><strong>Car Type:</strong> SUV</li>
        </ul>
        <div className="pt-4 pb-2">
        <Link to="/booking" className="inline-block hover-gradient-effect bg-[#3c096c] text-white text-center py-2 px-4 rounded">Book Now</Link>
      </div>
      </div>
    </div>
    <div className="w-96 mt-6 lg:mx-10 lg:px-10 lg:max-w-sm gradient-border  bg-gray-100 rounded overflow-hidden shadow-lg">
      <img className="mx-4 pt-6 object-cover w-full h-48" src={carList4} alt="Car Image" />
      <div className="py-4 mx-6">
        <div className="font-bold text-xl mb-2 text-gradient">Car Name</div>
        <ul className="text-gray-700 text-base">
          <li><strong>Price:</strong> 1000bir/day</li>
          <li><strong>Kilometers:</strong> 50,000 km</li>
          <li><strong>Car Type:</strong> SUV</li>
        </ul>
        <div className="pt-4 pb-2">
        <Link to="/booking" className="inline-block hover-gradient-effect bg-[#3c096c] text-white text-center py-2 px-4 rounded">Book Now</Link>
      </div>
      </div>
    </div>
    <div className="w-96 mt-6 mb-6 lg:mx-10 lg:px-10 lg:max-w-sm  gradient-border  bg-gray-100 rounded overflow-hidden shadow-lg">
      <img className="mx-4 pt-6 object-cover w-full h-48" src={carList5} alt="Car Image" />
      <div className="py-4 mx-6">
        <div className="font-bold text-xl mb-2 text-gradient">Car Name</div>
        <ul className="text-gray-700 text-base">
          <li><strong>Price:</strong> 1000bir/day</li>
          <li><strong>Kilometers:</strong> 50,000 km</li>
          <li><strong>Car Type:</strong> SUV</li>
        </ul>
        <div className="pt-4 pb-2">
        <Link to="/booking" className="inline-block hover-gradient-effect bg-[#3c096c] text-white text-center py-2 px-4 rounded">Book Now</Link>
      </div>
      </div>
    </div>
    <div className="w-96 mt-6 mb-6 lg:mx-10 lg:px-10 lg:max-w-sm gradient-border  bg-gray-100 rounded overflow-hidden shadow-lg">
      <img className="mx-4 pt-6 object-cover w-full h-48" src={carList6} alt="Car Image" />
      <div className="py-4 mx-6">
        <div className="font-bold text-xl mb-2 text-gradient">Car Name</div>
        <ul className="text-gray-700 text-base">
          <li><strong>Price:</strong> 1000bir/day</li>
          <li><strong>Kilometers:</strong> 50,000 km</li>
          <li><strong>Car Type:</strong> SUV</li>
        </ul>
        <div className="pt-4 pb-2">
        <Link to="/booking" className="inline-block hover-gradient-effect bg-[#3c096c] text-white text-center py-2 px-4 rounded">Book Now</Link>
      </div>
      </div>
    </div>
    <div className="w-96 mt-6 mb-6 lg:mx-10 lg:px-10 lg:max-w-sm gradient-border  bg-gray-100 rounded overflow-hidden shadow-lg">
      <img className="mx-4 pt-6 object-cover w-full h-48" src={carList7} alt="Car Image" />
      <div className="py-4 mx-6">
        <div className="font-bold text-xl mb-2 text-gradient">Car Name</div>
        <ul className="text-gray-700 text-base">
          <li><strong>Price:</strong> 1000bir/day</li>
          <li><strong>Kilometers:</strong> 50,000 km</li>
          <li><strong>Car Type:</strong> SUV</li>
        </ul>
        <div className="pt-4 pb-2">
        <Link to="/booking" className="inline-block hover-gradient-effect bg-[#3c096c] text-white text-center py-2 px-4 rounded">Book Now</Link>
      </div>
      </div>
    </div>
    <div className="w-96 mt-6 mb-6 lg:mx-10 lg:px-10 lg:max-w-sm gradient-border  bg-gray-100 rounded overflow-hidden shadow-lg">
      <img className="mx-4 pt-6 object-cover w-full h-48" src={carList8} alt="Car Image" />
      <div className="py-4 mx-6">
        <div className="font-bold text-xl mb-2 text-gradient">Car Name</div>
        <ul className="text-gray-700 text-base">
          <li><strong>Price:</strong> 1000bir/day</li>
          <li><strong>Kilometers:</strong> 50,000 km</li>
          <li><strong>Car Type:</strong> SUV</li>
        </ul>
        <div className="pt-4 pb-2">
        <Link to="/booking" className="inline-block hover-gradient-effect bg-[#3c096c] text-white text-center py-2 px-4 rounded">Book Now</Link>
      </div>
      </div>
    </div>
    
    </div>
   </section>
   </> 
  )
}

export default Cars