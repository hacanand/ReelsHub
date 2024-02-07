import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants"

import { addTrailerVideo } from "../utils/movieSlice"
import { useEffect } from "react"

const useMovieTrailer = ({movieId}) => {
  const dispatch = useDispatch()
  // @ts-ignore
  const trailerVideo=useSelector((store)=>store.movies.trailerVideo)
  const getMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    )
    const json = await data.json()
    const filterTrailer = json.results.filter(
      (item) => item.type === 'Trailer'
    )
    const trailer = filterTrailer.length
      ? filterTrailer[0]
      : json.results[0]
    
    dispatch(addTrailerVideo(trailer))
  }
      useEffect(() => {
        getMovieTrailer()
      }, [])
       
}
export default useMovieTrailer;