import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-32'>
    <img src={IMG_CDN+posterPath} alt='posters' />
    </div>
  )
}

export default MovieCard