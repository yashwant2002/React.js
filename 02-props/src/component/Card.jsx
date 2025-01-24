import React from 'react'

function Card({product}) {
  return (
      <>
        <div className=' shadow-2xl'>
            <div className=' overflow-hidden h-[20rem]'>
              <img className=' hover:scale-125 h-full w-full object-cover object-left-top' src={product.imageUrl}/>
            </div>
            <div>
              <h1 className='text-md p-3 font-bold'>{product.title}</h1>
              <div className='bg-white flex space-x-2 pb-2 pl-2 items-center'>
                <p className='font-semibold'>${product.price}</p>
                <p className=' line-through opacity-50'>${product.discountedPrice}</p>
                <p className='text-green-600 font-semibold'>%{product.discountPersent}</p>
              </div>
            </div>
        </div>
      </>
  )
}
export default Card