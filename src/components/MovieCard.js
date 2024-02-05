import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath, movieName }) => {
   return (
      
         <div className="w-36  rounded-md">
            <img
               src={IMG_CDN_URL + posterPath}
               alt="MovieCard"
               className=" rounded-md h-48 object-fit w-[150px] hover:opacity-80 transition duration-300 ease-in-out"
               
            />
            <span className="ml-2 text-wrap font-bold text-orange-600 cut-text "  >
               {movieName}
            </span>
         </div>
    
   )
}

export default MovieCard
