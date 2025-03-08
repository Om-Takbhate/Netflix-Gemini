import { useDispatch, useSelector } from "react-redux"
import { addPopularMovies } from "../store/slices/moviesSlice"
import { API_OPTIONS } from "../constants"
import { useEffect } from "react"


const usePopularMovies = ()=>{
    const dispatch = useDispatch()

    const popularMovies = useSelector(store => store.movies.popularMovies)

    const getPopularMovies = async ()=>{
        const res = await fetch('https://api.themoviedb.org/3/movie/popular',API_OPTIONS)
        const data = await res?.json()


        dispatch(addPopularMovies(data?.results))
    }

    useEffect(()=>{
        if(popularMovies.length == 0) getPopularMovies()
    }, [])


}

export default usePopularMovies