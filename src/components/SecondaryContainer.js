import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
   // @ts-ignore
   const movies = useSelector((store) => store.movies)
   return (
      <div className=" bg-gray-900 w-screen rounded-tl-3xl rounded-tr-3xl">
         <div className="-mt-36 relative ">
            <MovieList
               title={'Now Playing'}
               Movies={movies?.nowPlayingMovies}
            />
            <MovieList title={'Trending'} Movies={movies?.nowPlayingMovies} />
            <MovieList title={'Horror'} Movies={movies?.nowPlayingMovies} />
            <MovieList title={'Popular'} Movies={movies?.popularMovies} />
            <MovieList title={'Upcoming '} Movies={movies?.nowPlayingMovies} />
            <MovieList title={'Thriller'} Movies={movies?.nowPlayingMovies} />
         </div>
      </div>
   )
}

export default SecondaryContainer
