import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { YtLoader } from '../utils/ReactShimmer'

function MainContainer() {
   // @ts-ignore
   const movies = useSelector((state) => state.movies?.nowPlayingMovies)

   if (!movies) return null
   const randomMovie = movies[Math.floor(Math.random() * movies.length)]

   const { original_title, overview, id } = randomMovie
   return (
      <div className="md:pt-0 pt-[20%] md:w-full bg-black">
         <VideoTitle title={original_title} overview={overview} />
         <VideoBackground movieId={id} />
      </div>
   )
}

export default MainContainer
