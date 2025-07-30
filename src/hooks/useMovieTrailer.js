import React, { useEffect } from 'react'
import { addMovieTrailer } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';

const useMovieTrailer = (movieId) => {
     const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    const trailer = json.results.find((video) => video.type === "Trailer");
    const checkTrailer = trailer.length > 0 ? trailer : json.results[0];
    dispatch(addMovieTrailer(checkTrailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
 
}

export default useMovieTrailer