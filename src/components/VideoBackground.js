import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import useMovieTrailer from '../customHooks/useMovieTrailer'
import { YtLoader } from '../utils/ReactShimmer'
const VideoBackground = ({ movieId }) => {
    //fetch trailer from api and update the state
   
   // @ts-ignore
   const trailerVideo = useSelector((state) => state.movies?.trailerVideo)
   useMovieTrailer({ movieId })
      
   return (
      <div className="w-screen ">
         {!trailerVideo ? <YtLoader /> :  
            <iframe
               className=" aspect-video w-screen mt-14 left-0"
               src={
                  'https://www.youtube.com/embed/' +
                  trailerVideo?.key +
                  '?autoplay=0&mute=1&loop=1&controls=0&playlist=' +
                  trailerVideo?.key
               }
               title="YouTube video player"
            ></iframe>
         }
       
      </div>
   )
}

export default VideoBackground
