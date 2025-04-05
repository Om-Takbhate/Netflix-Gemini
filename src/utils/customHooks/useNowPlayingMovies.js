import { useDispatch, useSelector } from "react-redux"
import { addNowPlayingMovies } from "../store/slices/moviesSlice"
import { API_OPTIONS } from "../constants"
import { useEffect } from "react"

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch()

    const nowPlaying = useSelector(store => store.movies.nowPlayingMovies)
    const getNowPlayingMovies = async ()=>{
        console.log('Getting movies')
        const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_OPTIONS)
        const data = await res.json()
        console.log('the data is ',data)
        dispatch(addNowPlayingMovies(data.results))
    }
    
    useEffect(()=>{
        console.log(nowPlaying.length)
        if(nowPlaying.length == 0) getNowPlayingMovies()
    },[])
}

export default useNowPlayingMovies