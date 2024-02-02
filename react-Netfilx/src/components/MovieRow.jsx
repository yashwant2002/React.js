import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieItem from './MovieItem';

function MovieRow({title, url}) {
    const [movies, setMovies] = useState([]);
    useEffect(() =>{
        axios.get(url).then((res) => setMovies(res.data.results));
    },[url]);

    // console.log(movies)

  return (
    <>
        <h2 className='md:text-xl capitalize font-nsans-bold p-4'>{title}</h2>
        <div className='relative flex items-center'>
            <div id={`slider`}
                className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {movies.map((movie)=>(
                        <MovieItem key={movie.id} movie={movie} />
                    ) )}
                </div>
        </div>
    </>
  )
}

export default MovieRow;