import React, { useRef, useState } from 'react'
import { lang } from '../utils/languageConst'
import { useDispatch, useSelector } from 'react-redux'
import openAi from '../utils/openAi'
import { API_OPTIONS } from '../utils/constants'
import { addGptMovieResult } from '../utils/gptSlice'
 

const GptSearchBar = () => {
   // @ts-ignore
   const langKey = useSelector((store) => store.config.lang)
   // @ts-ignore
 
   const searchText = useRef(null)
   const dispatch = useDispatch()

   const searchMovieTmdb = async (movie) => {
      const data = await fetch(
         'https://api.themoviedb.org/3/search/movie?query=' +
            movie +
            '&include_adult=false&page=1',
         API_OPTIONS
      )
      const jsonData = await data.json()
  
      return jsonData.results
   }

   const handleGptSearchClick = async () => {
      const gptQuery =
         'Act as a Movie Suggestion Bot and suggest me a movie for the query ' +
         searchText.current.value +
         'only give me name of 5 movies, comma separated like the example Result: The Dark Knight,Inception,Interstellar,The Prestige,The Batman'
      //api call to gpt for movie suggestion
      const gptResults = await openAi.chat.completions.create({
         messages: [{ role: 'system', content: gptQuery }],
         model: 'gpt-3.5-turbo',
      })
      if (!gptResults.choices) {
         console.log('No results found')
      }

      const gptMovies = gptResults.choices?.[0]?.message?.content?.split(',')
      //api call to tmdb for movie details
      const data = gptMovies.map((movie) => searchMovieTmdb(movie))
      //[promises ]
      const tmdbResults = await Promise.all(data)
      dispatch(
         addGptMovieResult({
            movieNames: gptMovies,
            movieResults: tmdbResults,
         })
      )
   }

   return (
      <div className="md:pt-[10%] pt-[30%] flex justify-center">
         <form
            className="md:w-1/2 w-full bg-opacity-50 bg-black md:grid md:grid-cols-12 rounded-md"
            onSubmit={(e) => e.preventDefault()}
         >
            <input
               type="text"
               ref={searchText}
               className=" bg-opacity-50 p-4 md:m-4 grid  md:col-span-9 rounded-lg focus:outline-none w-full "
               placeholder={lang[langKey].gptPlaceholder}
            />
            <button
               className="bg-orange-500 hover:bg-orange-700 hover:scale-95 text-white font-bold text-center md:m-4 md:mx-6 p-4 rounded-md md:col-span-3 mx-32 mt-3"
               onClick={handleGptSearchClick}
            >
               {lang[langKey].Search}
            </button>
         </form>
      </div>
   )
}

export default GptSearchBar
