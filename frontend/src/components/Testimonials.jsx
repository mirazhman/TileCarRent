import React from 'react'
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

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
const Testimonials = () => {
  return (
    <>
    <section className='pt-8'>
        <span id="about"></span>
      <div className="py-8  sm:grid sm:place-items-center">
        <div className="container ">
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
             className="m-4 text-center group px-4 sm:py-12 duration-300  rounded-lg gradient-border"
           >
             <div className="grid place-items-center">{skill.icon}</div>
             <h1 className="text-2xl p-4 font-bold text-[var(--color-primary)]">{skill.name}</h1>
             <p className='text-xl text-justify'>{skill.description}</p>
             <a
               href={skill.link}
               className="inline-block text-lg font-semibold p-4 text-primary text-gradient duration-300"
             >
               Learn more
             </a>
           </div>
           
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center px-4 py-14 ">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-2xl lg:text-3xl font-semibold text-center text-gradient sm:text-4xl font-serif"
            >
              What Our Clients Say About Us
            </p>
            <p data-aos="fade-up" className="text-center text-xl text-gray-600 sm:px-44">
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
              <p className='text-xl text-justify'>{skill.description}</p>
              <p className="text-center text-[var(--color-primary)] font-semibold">{skill.name}</p>
            </div>
            
            ))}
          </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default Testimonials