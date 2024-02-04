import React from 'react'
import { useSelector } from 'react-redux'

import useMovieTrailer from '../customHooks/useMovieTrailer'

const VideoBackground = ({ movieId }) => {
   // @ts-ignore
   const trailerVideo = useSelector((state) => state.movies?.trailerVideo)

   //fetch trailer from api and update the state
   useMovieTrailer({ movieId })
   return (
      <div className="w-screen ">
         <iframe
            className=" aspect-video w-screen top-0 left-0"
            src={
               'https://www.youtube.com/embed/'+
               trailerVideo?.key +
               '?autoplay=1&mute=1&loop=1&controls=0&playlist='+trailerVideo?.key
            }
            title="YouTube video player"
           
         ></iframe>
      </div>
   )
}

export default VideoBackground
