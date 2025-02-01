import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieItem from './MovieItem';
import { Link } from 'react-router-dom';

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
                        <Link to={`/movie/${movie.id}`}  key={movie.id}><MovieItem movie={movie} /></Link>
                    ) )}
                </div>
        </div>
    </>
  )
}

export default MovieRow;