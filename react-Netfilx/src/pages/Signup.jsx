import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <>
      <div className='w-full h-screen'>
        <img 
          className='hidden sm:block absolute w-full h-full object-cover'
          src='http://tinyurl.com/23rhfxf3'/>
        <div className='bg-black/70 fixed top-0 left-0 w-full h-screen'/>
        <div className='fixed w-full px-4 py-24 z-20'>
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg'>
            <div className='py-16 mx-auto max-w-[320px]'>
              <h1 className=' text-3xl font-nsans-bold'>Sign Up</h1>
              <form className='w-full flex flex-col py-4'>
                <input className='p-3 my-2 bg-gray-700 rounded' type='email' placeholder='email'/>
                <input className='p-3 my-2 bg-gray-700 rounded' type='password' placeholder='password'/>
                <input className='p-3 my-2 bg-gray-700 rounded' type='password' placeholder='confirm password'/>
                <button className='bg-red-600 py-3 my-6 rounded font-nsans-bold' >Sign Up</button>
              </form>
              <div className='flex justify-between items-center text-gray-600'>
                <p>
                  <input type='checkbox' className=' mr-2'/>Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className='my-4'>
                <span className='text-gray-600 mr-2'>Already subscribe to Movie Filx?</span>
                <Link to='/login'>Sign In</Link>
              </p>
            </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Signup