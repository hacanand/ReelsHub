import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import { ReactShimmer } from '../utils/ReactShimmer'

const SecondaryContainer = () => {
   // @ts-ignore
   const movies = useSelector((store) => store.movies)
   return (
      <div className=" bg-gray-900 md:w-screen rounded-tl-3xl rounded-tr-3xl">
         <div className="md:-mt-36 -mt-4 md:p-0  relative ">
            
          
               <MovieList
               title={'Now Playing'}
               movies={movies?.nowPlayingMovies}
            />
           
               <MovieList title={'Trending'} movies={movies?.nowPlayingMovies} />
           
               <MovieList title={'Horror'} movies={movies?.nowPlayingMovies} />
           
               <MovieList title={'Popular'} movies={movies?.popularMovies} />
           
               <MovieList title={'Upcoming '} movies={movies?.nowPlayingMovies} />
           
               <MovieList title={'Thriller'} movies={movies?.nowPlayingMovies} />
         </div>
      </div>
   )
}

export default SecondaryContainer
