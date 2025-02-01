import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className=' absolute w-full p-4 flex justify-between items-center z-50'>
        <Link to={'/'}>
            <h1 className='uppercase text-red-600 font-nsans-bold cursor-pointer text-5xl'>movie filx</h1>
        </Link>
        <div>
            <Link to={'/login'}>
                <button className=' capitalize pr-5' >Login</button>
            </Link>
            <Link to={'/signup'}>
                <button className='capitalize py-2 px-6 rounded-md cursor-pointer bg-red-600 hover:bg-red-500'>signup</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar