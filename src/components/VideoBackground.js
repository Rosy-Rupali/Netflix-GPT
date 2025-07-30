import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const movieTrailer = useSelector((store) => store.movies?.movieTrailer);
  return (
    <div>
      <iframe
        className="w-screen aspect-video bg-gradient-to-r from-black"
        src={"https://www.youtube.com/embed/" + movieTrailer?.key+"?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
