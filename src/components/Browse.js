import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies'
import SecondaryContainer from './SecondaryContainer'
import MainContainer from './MainContainer'
  import usePopularMovies from '../customHooks/usePopularMovies'

function Browse() {
   //fetching Data from api and
   useNowPlayingMovies();
   usePopularMovies();
   return (
      <div className="">
         <Header />
         <MainContainer />
         <SecondaryContainer />
      </div>
   )
}

export default Browse
