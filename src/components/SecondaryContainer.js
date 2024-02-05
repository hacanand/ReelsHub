import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
   // @ts-ignore
   const movies = useSelector((store) => store.movies)
   return (
      <div className=" bg-black w-screen">
         <div className="-mt-36 relative ">
            <MovieList
               title={'Now Playing'}
               Movies={movies?.nowPlayingMovies}
            />
            <MovieList title={'Trending'} Movies={movies?.nowPlayingMovies} />
            <MovieList title={'Horror'} Movies={movies?.nowPlayingMovies} />
            <MovieList title={'Popular'} Movies={movies?.nowPlayingMovies} />
            <MovieList title={'Upcoming '} Movies={movies?.nowPlayingMovies} />
            <MovieList title={'Thriller'} Movies={movies?.nowPlayingMovies} />
         </div>
      </div>
   )
}

export default SecondaryContainer
