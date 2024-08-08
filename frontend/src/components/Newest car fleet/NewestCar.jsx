import React from 'react'
import NewestCarCard from './NewestCarCard'

function NewestCar() {
  return (
    <>
      <div className="newest-car-container bg-gradient-to-r from-blue-500 to-purple-600 w-full min-h-[70vh] flex flex-col justify-center items-center overflow-hidden ">
     <div className="headings text-center ">
     <h2 className='mb-2 text-sm tracking-wider text-white uppercase'>Cutting-Edge Automotive Marvels</h2>
        <h1 className='text-4xl font-bold max-md:mb-10 text-white'>NEWEST CARS FLEET</h1>
     </div>

     <NewestCarCard />
      </div>
    </>
  )
}

export default NewestCar
