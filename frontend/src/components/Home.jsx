import React from 'react'

import {heroCar} from '../assets/images'

const Home = () => {
  return (
    <>
    <div className= 'custom-bg h-[700px]'>
      <div className='max-w-auto ml-40 pt-40'>
        <p className='text-green-600 font-serif'>
          Tile Car Rental
        </p>
        <h1 className='text-5xl text-green-900 font-mono '>The Best Car Rent <br/>in Hawassa</h1>
        <p className='mt-6'>Daily or Weekly Car Rentals
        for Your Business or Visiting Travel Plans</p>
        <div className='mt-20'>
         <a className='w-14 h-10 bg-green-600 p-4 hover:bg-green-500 text-white' href="">Book Now</a>
       </div>
      </div>
    </div>
    <section className=' bg-red-300'>

    </section>
    </>
  )
}
 {/* <div className='flex justify-end mx-24 relative'>
      <img className='' src={heroCar} alt=""/>
    </div> */}
export default Home
