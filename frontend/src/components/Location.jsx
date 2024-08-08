import React from 'react'
import { mapDirect, downArrow } from '../assets/images';

const Location = () => {
  return (
    <>
    <section>
      <div className="map-container">
        <div className='flex flex-col '>
            <h2 className="text-2xl font-bold mb-4 p-6 pb-2 text-center text-[var(--color-primary)]">Our Location</h2>
            <img className='mb-6 mx-auto' src={downArrow} alt="" width="60" />
        </div>
        
        <div className= "lg:px-10 flex flex-col lg:flex-row justify-center relative h-96 lg:pb-56 overflow-hidden">
          <div className='hidden lg:block'>
              <img src={mapDirect} className='h-96 w-96' alt=""/>
          </div>
          
            <iframe
              className=' w-96 lg:w-full mx-auto'
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
    </>
  )
}

export default Location