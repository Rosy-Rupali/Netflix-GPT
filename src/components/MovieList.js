import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies)
  return (
    <div className="p-2">
        <h1 className="font-bold text-xl text-white py-2">{title}</h1>
        <div className="flex overflow-x-scroll hide-scrollbar">
          <div className="flex gap-x-4">
            {movies?.map((poster) => (
              <MovieCard key={poster.id} posterPath={poster.poster_path} />
            ))}
          </div>
        </div>
      </div>
  );
};

export default MovieList;
