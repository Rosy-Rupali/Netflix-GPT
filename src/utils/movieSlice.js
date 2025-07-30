import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer: null,
    popularMovies: null,
    topRated: null,
    upComing: null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRated = action.payload;
    },
    addUpComing : (state, action) =>{
      state.upComing = action.payload;
    }
  },
});
export const {
  addNowPlayingMovies,
  addMovieTrailer,
  addPopularMovies,
  addTopRated,
  addUpComing
} = movieSlice.actions;
export default movieSlice.reducer;
