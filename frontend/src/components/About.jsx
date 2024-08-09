import React from "react";
import  {car7} from '../assets/images'

const About = () => {
  return (
    <div className="lg:px-10 mt-8 flex flex-col justify-center mx-auto lg:flex-row gap-4 w-fullh-[600px]">
          <div className="lg:w-1/2">
            <img
              src={car7}
              alt=""
              className=" drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
         
            <div className="lg:w-1/2 h-auto flex flex-col mx-auto px-6">
              <h1 className="text-3xl sm:text-4xl text-center mb-4 text-[var(--color-primary)] font-bold font-serif">
                About us
              </h1>
              <p className="leading-8 text-xl text-justify">
              Tile Car Rental is a leading car rental service located in the vibrant city of Hawassa, Ethiopia.
               Established with a mission to provide our customers with a seamless and enjoyable transportation experience, 
               we offer a wide range of vehicles to cater to all your needs.

              Whether you're planning a wedding celebration, a business trip, or a leisurely exploration of Hawassa's scenic 
              landscapes, our extensive fleet of well-maintained vehicles is here to make your journey comfortable and convenient. From reliable sedans to spacious SUVs, we have the perfect car to suit your preferences and requirements.

              At Tile Car Rental, we take pride in our commitment to exceptional customer service.
           
              We welcome you to Hawassa and invite you to experience the convenience and comfort of Tile Car Rental. 
              Let us be your transportation partner as you discover the wonders of our city and create lasting memories.
              </p>
              <button className="subbtn scale-x-75 text-2xl text-white mx-20  lg:mx-40 m-6 button-outline">
                Book Now
              </button>
            </div>
        </div>
  );
};

export default About;


