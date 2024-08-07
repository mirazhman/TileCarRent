import  {car1, car6, car5, car4, car3, car2} from '../assets/images'
const Cars = () => {

  
  return (
   <>
   <section className="">
    <div className="carpage-bg h-96">
     
      <h1 className="text-6xl font-serif font-bold text-white text-center pt-36">Choose Your Ride</h1> 
    </div>
    <div className='flex flex-wrap justify-center'>
    <div className="m-10 px-10 mb-10 max-w-sm rounded overflow-hidden shadow-lg border-t border-l border-r border-gray-200 bg-gray-300">
      <img className="mx-4 pt-6 object-cover w-60 h-48" src={car1} alt="Car Image" />
      <div className="py-4 mx-6 bg-gray-300">
        <div className="font-bold text-xl mb-2">Car Name</div>
        <ul className="text-gray-700 text-base">
          <li><strong>Price:</strong> 1000bir/day</li>
          <li><strong>Kilometers:</strong> 50,000 km</li>
          <li><strong>Car Type:</strong> SUV</li>
        </ul>
        <div className="px-6 pt-4 pb-2">
        <a href="#" className="inline-block hover-gradient-effect bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-white text-center py-2 px-4 rounded">Book Now</a>
      </div>
      </div>
    </div>
    <div className="m-10 pr-6 mb-10 max-w-sm rounded overflow-hidden shadow-lg border-t border-l border-r border-gray-200 bg-gray-300">
      <img className="mx-4 pt-6 object-cover w-full h-48" src={car2} alt="Car Image" />
      <div className="py-4 mx-6 bg-gray-300">
        <div className="font-bold text-xl mb-2">Car Name</div>
        <ul className="text-gray-700 text-base">
          <li><strong>Price:</strong> 1000bir/day</li>
          <li><strong>Kilometers:</strong> 50,000 km</li>
          <li><strong>Car Type:</strong> SUV</li>
        </ul>
        <div className="px-6 pt-4 pb-2">
        <a href="#" className="inline-block hover-gradient-effect bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-white text-center py-2 px-4 rounded">Book Now</a>
      </div>
      </div>
    </div>
    <div className="m-10 px-10 mb-10 max-w-sm rounded overflow-hidden shadow-lg border-t border-l border-r border-gray-200 bg-gray-300">
      <img className="mx-4 pt-6 object-cover w-full h-48" src={car3} alt="Car Image" />
      <div className="py-4 mx-6 bg-gray-300">
        <div className="font-bold text-xl mb-2">Car Name</div>
        <ul className="text-gray-700 text-base">
          <li><strong>Price:</strong> 1000bir/day</li>
          <li><strong>Kilometers:</strong> 50,000 km</li>
          <li><strong>Car Type:</strong> SUV</li>
        </ul>
        <div className="px-6 pt-4 pb-2">
        <a href="#" className="inline-block hover-gradient-effect bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-white text-center py-2 px-4 rounded">Book Now</a>
      </div>
      </div>
    </div>
    <div className="m-10 px-10 mb-10 max-w-sm rounded overflow-hidden shadow-lg border-t border-l border-r border-gray-200 bg-gray-300">
      <img className="mx-4 pt-6 object-cover w-full h-48" src={car4} alt="Car Image" />
      <div className="py-4 mx-6 bg-gray-300">
        <div className="font-bold text-xl mb-2">Car Name</div>
        <ul className="text-gray-700 text-base">
          <li><strong>Price:</strong> 1000bir/day</li>
          <li><strong>Kilometers:</strong> 50,000 km</li>
          <li><strong>Car Type:</strong> SUV</li>
        </ul>
        <div className="px-6 pt-4 pb-2">
        <a href="#" className="inline-block hover-gradient-effect bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-white text-center py-2 px-4 rounded">Book Now</a>
      </div>
      </div>
    </div>
    <div className="m-10 px-10 mb-10 max-w-sm rounded overflow-hidden shadow-lg border-t border-l border-r border-gray-200 bg-gray-300">
      <img className="mx-4 pt-6 object-cover w-full h-48" src={car5} alt="Car Image" />
      <div className="py-4 mx-6 bg-gray-300">
        <div className="font-bold text-xl mb-2">Car Name</div>
        <ul className="text-gray-700 text-base">
          <li><strong>Price:</strong> 1000bir/day</li>
          <li><strong>Kilometers:</strong> 50,000 km</li>
          <li><strong>Car Type:</strong> SUV</li>
        </ul>
        <div className="px-6 pt-4 pb-2">
        <a href="#" className="inline-block hover-gradient-effect bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-white text-center py-2 px-4 rounded">Book Now</a>
      </div>
      </div>
    </div>
    <div className="m-10 px-10 mb-10 max-w-sm rounded overflow-hidden shadow-lg border-t border-l border-r border-gray-200 bg-gray-300">
      <img className="mx-4 pt-6 object-cover w-full h-48" src={car6} alt="Car Image" />
      <div className="py-4 mx-6 bg-gray-300">
        <div className="font-bold text-xl mb-2">Car Name</div>
        <ul className="text-gray-700 text-base">
          <li><strong>Price:</strong> 1000bir/day</li>
          <li><strong>Kilometers:</strong> 50,000 km</li>
          <li><strong>Car Type:</strong> SUV</li>
        </ul>
        <div className="px-6 pt-4 pb-2">
        <a href="#" className="inline-block hover-gradient-effect bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-white text-center py-2 px-4 rounded">Book Now</a>
      </div>
      </div>
    </div>
    
    </div>
   </section>
   </> 
  )
}

export default Cars