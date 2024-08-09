import { useEffect, useState } from 'react';
import { heroCar} from '../assets/images';

import FeaturedCar from './FeaturedCar';
import RequestSteps from './RequestSteps';
import { Link } from 'react-router-dom';
import Testimonials from './Testimonials';
import Location from './Location'
import NewestCar from './Newest car fleet/NewestCar';



const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <>
      <div className='flex flex-col-reverse lg:flex-row justify-center custom-bg h-[550px]'>
        <div className='-mt-28 lg:mt-0 w-auto ml-5 lg:ml-20 lg:pt-40'>
          <p className='text-[var(--color-primary)] font-serif'>
            Tile Car Rental
          </p>
          <h1 className='text-3xl lg:text-5xl text-gradient uppercase font-mono'>
            The Best Car Rent <br /> in Hawassa
          </h1>
          <p className='mt-4 lg:mt-6 text-gray-800'>
            Daily or Weekly Car Rentals for Your Business or Visiting Travel Plans
          </p>
          <div className='flex pt-4 lg:pt-10 '>
            <Link to="/booking" className='flex items-center justify-center h-12 mainbtn p-4 px-6 hover-gradient-effect text-white'>
              Book Now
            </Link>
          </div>
        </div>
        <div className="relative w-72 mx-32 lg:w-[550px] z-10 top-24 lg:top-48 lg:left-16 lg:mx-28">
          <img
            className={`${animate ? 'animate-car' : ''} absolute right-0`}
            src={heroCar}
            alt="Hero Car"
          />
        </div>
      </div>


      <FeaturedCar /> 
      <RequestSteps />
      <Location />
      <Testimonials />
      <NewestCar />

      
      
    </>
  );
};

export default Home;

