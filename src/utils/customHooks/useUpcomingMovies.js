import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../constants"
import { addUpcomingMovies  } from "../store/slices/moviesSlice"
import { useEffect } from "react"

const useUpcomingMovies = () => {
    const dispatch = useDispatch()

    const upcomingMovies = useSelector(store => store.movies.upcomingMovies)

    const getUpcomingMovies = async () => {
        const res = await fetch('https://api.themoviedb.org/3/movie/upcoming', API_OPTIONS)
        const data = await res.json()
        dispatch(addUpcomingMovies(data.results))
    }

    useEffect(()=>{
        if(upcomingMovies.length != 0) getUpcomingMovies()
    }, [])
}

export default useUpcomingMovies