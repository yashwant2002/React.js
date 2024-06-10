import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


export function ExampleNavbarOne() {
  const items = useSelector((state)=>state.cart);
  return (
    <div  className='flex justify-between'>
      <Link to='/' >Home</Link>
      <Link to='/cart' >Add cart:{items.length} </Link>
    </div>
  )
}
