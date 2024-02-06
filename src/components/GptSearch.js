import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_Img } from '../utils/constants'

const GptSearch = () => {
   return (
      <div>
         <div className="fixed w-screen h-[1000px] -z-10">
            <img
               className="object-fill w-[1920px] h-[1000px"
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
