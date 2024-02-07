import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_Img } from '../utils/constants'

const GptSearch = () => {
   return (
      <div className='pt-[20%] md:pt-[50px]' >
         <div className="fixed w-screen md:h-[1000px] -z-10">
            <img
               className="md:object-cover object-cover md:w-[1920px] h-[800px] w-full  md:h-[1000px]"
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
