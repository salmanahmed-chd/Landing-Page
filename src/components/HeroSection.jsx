import React from 'react';
import snacks from "../assets/Snacks.png";

const HeroSection = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between'>
      <div className='font-bold w-full md:w-1/2 text-center md:text-left'>
        <h2 className='text-4xl mb-3 text-sage-green mt-12'>
          Bringing
        </h2>

        <h1 className='text-6xl mb-4 text-royal-yellow'>'Maa-ke-haath'</h1>
        <h2 className='text-4xl mb-3 text-gray-custom'>
          ka khana to your
        </h2>
        <h1 className='text-5xl text-sage-green'>doorstep!</h1>

        <button className='mt-12 px-10 py-4 text-2xl text-gray-custom bg-royal-yellow rounded-md shadow-md'>ORDER NOW</button>
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center">
        <div className='my-8'>
          <img src={snacks} alt="snacks" className='w-72 rounded-2xl' />
        </div>
        <div>
          <p className="font-semibold text-lg md:text-left text-justify text-gray-custom">
            Our home made snacks are the way to bring you quality binge-time experiences. We’ve stocked a range of yummy goodies that will enliven your taste buds and make you come back for more.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;
