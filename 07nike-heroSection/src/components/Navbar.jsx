import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around py-2'>
      <div>
        <img src='./Image/brand_logo.png' alt='logo'/>
      </div>
      <ul className='flex gap-6 uppercase '>
        <li className='font-bold hover:border-b-4 cursor-pointer'>Menu</li>
        <li className='font-bold hover:border-b-4 cursor-pointer'>Location</li>
        <li className='font-bold hover:border-b-4 cursor-pointer'>About</li>
        <li className='font-bold hover:border-b-4 cursor-pointer'>contact</li>
      </ul>
      <button className=' capitalize px-6 py-0 text-white font-medium bg-[#d01c28]'>login</button>
    </nav>
  )
}

export default Navbar