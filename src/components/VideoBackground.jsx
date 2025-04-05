import { useSelector } from 'react-redux'
import useMovieTrailer from '../utils/customHooks/useMovieTrailer'

const VideoBackground = ({ id }) => {

  useMovieTrailer(id)

  const trailerVideo = useSelector(store => store?.movies?.trailerVideo)
  console.log(trailerVideo)

  return (
    <div className='w-[100%]'>
      <iframe className='w-[100%] aspect-video' src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
    </div>
  )
}

export default VideoBackground