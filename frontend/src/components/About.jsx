import React from "react";
import  {car7} from '../assets/images'

const About = () => {
  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={car7}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About us
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
              Tile Car Rental is a leading car rental service located in the vibrant city of Hawassa, Ethiopia.
               Established with a mission to provide our customers with a seamless and enjoyable transportation experience, 
               we offer a wide range of vehicles to cater to all your needs.

              Whether you're planning a wedding celebration, a business trip, or a leisurely exploration of Hawassa's scenic 
              landscapes, our extensive fleet of well-maintained vehicles is here to make your journey comfortable and convenient. From reliable sedans to spacious SUVs, we have the perfect car to suit your preferences and requirements.

              At Tile Car Rental, we take pride in our commitment to exceptional customer service. </p>
              <p data-aos="fade-up"> 
              We welcome you to Hawassa and invite you to experience the convenience and comfort of Tile Car Rental. 
              Let us be your transportation partner as you discover the wonders of our city and create lasting memories.
              </p>
              <button data-aos="fade-up" className="subbtn scale-x-75 text-2xl text-white p-2 px-4 hover:bg-green-700 button-outline">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


