import React, { useRef } from "react";
import { lang } from "../utils/languages";
import { useDispatch, useSelector } from "react-redux";
import openai from "./openAi";
import { addGPTMoviesResult } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.language);
  const dispatch = useDispatch();

  const searchMovie = async (movie) => {
    const getMovieDetails = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1"
    );
    const json = await getMovieDetails.json();
    console.log(json.results);
    
  };
  const handleSearchInput = async () => {
    //console.log(searchText.current.value)

    const gptQuery = "It is my movie recommendation" + searchText.current.value;
    //Make an API CALL
    const gptResults = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptQuery }],
    });

    // console.log('gpt',gptResults.choices[0]?.message.content)
    const gptMovies = gptResults.choices[0]?.message.content.split(", ");

    const movieDetails = gptMovies.map((movie) => searchMovie(movie));
    const tmdbMovies = await Promise.all(movieDetails);
    //console.log(tmdbMovies)
    dispatch(addGPTMoviesResult({movieNames:gptMovies, movieResults:tmdbMovies}));
  }; 
  return (
    <div className="flex justify-center pt-[15%]">
      <form
        className="flex bg-black w-1/2 text-white justify-between p-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 w-[71%] rounded-lg gap-x-4"
          type="text"
          placeholder={lang[langKey].getTheSearchPlaceholder}
        />
        <button
          className="bg-red-700 font-bold rounded-lg p-2 w-1/4"
          onClick={handleSearchInput}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
