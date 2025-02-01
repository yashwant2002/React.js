import React from 'react'
import Hero from '../components/Hero'
import MovieRow from '../components/MovieRow'
import endpoints from '../service/movieService'

function Home() {
  return (
    <>
       <Hero/>
      <MovieRow title='upcoming' url={endpoints.upcoming} />
      <MovieRow title='trending' url={endpoints.trending} />
      <MovieRow title='top rated' url={endpoints.topRated} />
      <MovieRow title='action' url={endpoints.action} />
      <MovieRow title='popular' url={endpoints.popular} />
    </>
  )
}

export default Home