import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

function MainContainer() {
   // @ts-ignore
   const movies = useSelector((state) => state.movies?.nowPlayingMovies)

   if (!movies) return null
   const randomMovie = movies[Math.floor(Math.random() * movies.length)]

   const { original_title, overview, id } = randomMovie
   return (
      <div className="">
         <VideoTitle title={original_title} overview={overview} />
         <VideoBackground movieId={id} />
      </div>
   )
}

export default MainContainer
