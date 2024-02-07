import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestion = () => {
   // @ts-ignore
   const { movieResults, movieNames } = useSelector((store) => store.gpt)
   if (!movieNames) {
     return null;
   }
   return (
      <div className=" p-4 m-4 bg-slate-900 h-fit bg-opacity-80 rounded-3xl text-white">
         <div>
            {movieNames.map((movie, index) => (
               <MovieList
                  key={movieNames}
                  title={movieNames[index]}
                  movies={movieResults[index]}
               />
            ))}
         </div>
      </div>
   )
}

export default GptMovieSuggestion
