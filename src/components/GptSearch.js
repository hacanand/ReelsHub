import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_Img } from '../utils/constants'

const GptSearch = () => {
   return (
      <div>
         <div className="absolute w-full h-full  -z-10 ">
            <img
               className=" object-cover crop min-h-full min-w-full -z-1 "
               src={BG_Img}
               alt="bg_img"
            />
         </div>
         <GptSearchBar />
         <GptMovieSuggestion />
      </div>
   )
}

export default GptSearch
