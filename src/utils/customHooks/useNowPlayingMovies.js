import { useDispatch, useSelector } from "react-redux"
import { addNowPlayingMovies } from "../store/slices/moviesSlice"
import { API_OPTIONS } from "../constants"
import { useEffect } from "react"

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch()

    const nowPlaying = useSelector(store => store.movies.nowPlayingMovies)
    console.log(nowPlaying)
    const getNowPlayingMovies = async ()=>{
        const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_OPTIONS)
        const data = await res.json()
        dispatch(addNowPlayingMovies(data.results))
    }
    
    useEffect(()=>{
        if(nowPlaying.length == 0) getNowPlayingMovies()
    },[])
}

export default useNowPlayingMovies