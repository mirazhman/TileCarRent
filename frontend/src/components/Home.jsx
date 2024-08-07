import { useEffect, useState } from 'react';
import { heroCar, mapDirect, downArrow } from '../assets/images';
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import FeaturedCar from './FeaturedCar';
import RequestSteps from './RequestSteps';
import { Link } from 'react-router-dom';

const skillsData = [
  {
    name: "Reliable and Secure Rentals",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: `Safety and security are of utmost importance to us. All our vehicles undergo rigorous 
    maintenance checks to ensure they are in top-notch condition, and our rental procedures are designed
     to protect your personal and financial information`,
    aosDelay: "0",
  },
  {
    name: "Local Expertise",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: `As a homegrown Hawassa company, we have an unparalleled understanding of the city's roads,
     landmarks, and traffic patterns.
     When you choose Tile Car Rental, you're not just renting a car 
     you're embarking on a seamless and memorable journey in Hawassa. `,
    aosDelay: "500",
  },
  {
    name: "Competitive Pricing",
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description: `We understand the importance of value in your car rental experience. 
    That's why we offer competitive rates without compromising on the quality of our services.
     Our transparent pricing structure allows you to budget with confidence.`,
    aosDelay: "1000",
  },
];
const testimonialData = [
  {
    name: "jhon",
    image: "",
    description: `I had an amazing experience with Tile Car Rental during my recent trip to Hawassa. 
    The team was incredibly helpful and responsive from the moment I made my booking. 
    The car I rented was in excellent condition, and the customer service was top-notch. `,
    aosDelay: "0",
  },
  {
    name: "Abebe",
    image: "",
    description: `As a local resident of Hawassa, I have been a loyal customer of Tile Car Rental for years. 
    Their commitment to providing affordable, well-maintained vehicles and exceptional service is unparalleled. 
    Whether I need a car for personal errands or to transport clients, I can always count on Tile Car Rental to meet my needs. `,
    aosDelay: "300",
  },
  {
    name: "Almaz",
    image: "",
    description: `For my recent wedding in Hawassa, I chose Tile Car Rental to provide the transportation for
     my special day. They exceeded my expectations with their professionalism and attention to detail. 
     The wedding car they provided was beautifully decorated, and the driver was courteous and punctual.`,
    aosDelay: "1000",
  },
];

const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <>
      <div className='flex justify-center custom-bg h-[550px]'>
       <div className='w-auto ml-20 pt-40'>
          <p className='text-[var(--color-primary)] font-serif'>
            Tile Car Rental
          </p>
          <h1 className='text-5xl text-gradient font-mono'>
            The Best Car Rent <br /> in Hawassa
          </h1>
          <p className='mt-6 text-gray-800'>
            Daily or Weekly Car Rentals for Your Business or Visiting Travel Plans
          </p>
          <div className='flex p-10 '>
            <Link to="/booking" className='flex items-center justify-center  h-12 mainbtn p-4 px-6 hover-gradient-effect text-white'>
              Book Now
            </Link>
            
            
          </div>
        </div>
        <div className="relative w-[550px] z-10 top-48 left-16 mx-28">
          
          <img
            className={`${animate ? 'animate-car' : ''} absolute  right-0`}
            src={heroCar}
           
            alt="Hero Car"
          />
        </div>
        
      </div>

      <FeaturedCar /> 
      <RequestSteps />

      <section>
      <div className="map-container">
      <div className='flex flex-col '>
        <h2 className="text-2xl font-bold mb-4 p-6 pb-2 text-center text-[var(--color-primary)]">Our Location</h2>
        <img className='mb-4 mx-auto' src={downArrow} alt="" width="60" />
      </div>
      <div className= " flex justify-center relative h-96 pb-56 overflow-hidden">
        <div>
          <img src={mapDirect} alt="" width="400"/>
        </div>
        <iframe
          title="Tile Car Rental Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12404.549311810197!2d38.47211889559699!3d7.041626054282844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17b1458bc5fed5fd%3A0xbc394b3fc3e901d2!2sTile%20Car%20Rent!5e1!3m2!1sam!2set!4v1722845700235!5m2!1sam!2set"
          width="60%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
      </section>
      <section className='pt-8'>
        <span id="about"></span>
      <div className="py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold text-gradient text-center sm:text-4xl font-serif"
            >
              Why Choose Us
            </h1>
          </div>
          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillsData.map((skill) => (
             <div
             key={skill.name}
             data-aos="fade-up"
             data-aos-delay={skill.aosDelay}
             className="m-4 bg-[#ffffff] text-center group sm:space-y-6 p-4 sm:py-16 duration-300  rounded-lg gradient-border"
           >
             <div className="grid place-items-center">{skill.icon}</div>
             <h1 className="text-2xl font-bold text-[var(--color-primary)]">{skill.name}</h1>
             <p>{skill.description}</p>
             <a
               href={skill.link}
               className="inline-block text-lg font-semibold py-3 text-primary text-gradient duration-300"
             >
               Learn more
             </a>
           </div>
           
            ))}
          </div>
        </div>
      </div>

      <span id="about"></span>
      <div className="flex justify-center py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center text-gradient sm:text-4xl font-serif"
            >
              What Our Clients Say About Us
            </p>
            <p data-aos="fade-up" className="text-center text-gray-600 sm:px-44">
            As the premier car rental service in Hawassa, Tile Car Rental offers unparalleled 
            benefits that make us the top choice for all your transportation needs. 
            Here's why you should choose us
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {testimonialData.map((skill) => (
              <div
              key={skill.name}
              data-aos="fade-up"
              data-aos-delay={skill.aosDelay}
              className="card text-center justify-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300 rounded-lg"
            >
              <div className="grid place-items-center">
                <img
                  src="https://picsum.photos/200"
                  alt=""
                  className="rounded-full w-20 h-20"
                />
              </div>
              <div className="text-2xl">⭐⭐⭐⭐⭐</div>
              <p>{skill.description}</p>
              <p className="text-center text-[var(--color-primary)] font-semibold">{skill.name}</p>
            </div>
            
            ))}
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default Home;

