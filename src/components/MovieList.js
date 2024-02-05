import React from 'react'
import MovieCard from './MovieCard'
import ReactShimmer from '../utils/ReactShimmer'
const MovieList = ({ title, Movies }) => {
   return (
      <div className="p-6  ">
         <h1 className="text-3xl text-ellipsis text-amber-400 font-bold py-3">
            {title}
         </h1>
         <div className="flex  overflow-x-scroll no-scrollbar">
            <div className="flex gap-4">
               {!Movies ? (
                  <ReactShimmer />
               ) : (
                  Movies.map((movie) => (
                     <MovieCard
                        key={movie.title}
                        posterPath={movie?.poster_path}
                        movieName={movie?.original_title}
                     />
                  ))
               )}
            </div>
         </div>
      </div>
   )
}

export default MovieList
