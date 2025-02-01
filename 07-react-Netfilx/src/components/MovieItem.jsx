import React from 'react'

const MovieItem = ({movie}) => {
    const {title, backdrop_path} = movie;
  return (
    <>
            <div className='relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2'>
                <img  className='w-full h-auto block '  src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={`${title}`}/>
                <div className='absolute top-0 left-0 w-full h-40 bg-black/40 opacity-0 hover:opacity-100'>
                  <p className='text-xs whitespace-normal md:text-sm flex justify-center items-center h-full font-nsans-bold'>{title}</p>
                </div>
            </div>
    </>
  )
}

export default MovieItem;