import { useDispatch } from "react-redux"
import { addTrailerVideo } from "../store/slices/moviesSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../constants"

const useMovieTrailer = (id) => {
    const dispatch = useDispatch()

    const getMovieVideos = async () => {
        let res = await fetch('https://api.themoviedb.org/3/movie/' + id + '/videos?language=en-US', API_OPTIONS)
        const data = await res.json()

        let trailer = data.results.filter(video => video.type === 'Trailer')[0]
        trailer = trailer ? trailer : data.results[0]
        dispatch(addTrailerVideo(trailer))
    }

    useEffect(() => {
        getMovieVideos()
    }, [])

}

export default useMovieTrailer