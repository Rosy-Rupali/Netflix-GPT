import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  if (!movies) return;
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-56 pl-6 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Most Popular"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRated} />
          <MovieList title={"Upcoming"} movies={movies.upComing} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
