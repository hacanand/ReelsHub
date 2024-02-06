import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies'
import SecondaryContainer from './SecondaryContainer'
import MainContainer from './MainContainer'
import usePopularMovies from '../customHooks/usePopularMovies'
import GptSearch from './GptSearch'
import {  useSelector } from 'react-redux'

function Browse() {
   // @ts-ignore
   const showGptSearch = useSelector((state) => state.gpt.showGptSearch)
   //fetching Data from api and
   useNowPlayingMovies()
   usePopularMovies()
   return (
      <div className="">
         <Header />
         {showGptSearch ? (
            <GptSearch />
         ) : (
            <>
               <MainContainer />
               <SecondaryContainer />
            </>
         )}
      </div>
   )
}

export default Browse
