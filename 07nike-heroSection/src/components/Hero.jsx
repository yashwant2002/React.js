import React from 'react'

const Hero = () => {
  return (
    <div className=' flex items-center mx-16 gap-6'>
      <div className='flex flex-col gap-6'>
      <h1 className=' text-[100px] leading-[108px] font-extrabold '>YOUR FEET DESERVE THE BEST</h1>
        <p className='text-gray-700'>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
      </div>
      <div>
        <img src='./Image/hero-image.png'/>
      </div>
    </div>
  )
}

export default Hero